import { PollyClient, SynthesizeSpeechCommand, StartSpeechSynthesisTaskCommand, GetSpeechSynthesisTaskCommand } from "@aws-sdk/client-polly";
import { Upload } from "@aws-sdk/lib-storage";
import { Readable } from "stream";
import axios from "axios";

const pollyClient = new PollyClient({
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

async function textToSpeech(text: string): Promise<Buffer> {
  const MAX_CHARS = 1500; // Polly's actual limit is 3000, but we're being conservative
  const textChunks = splitTextIntoChunks(text, MAX_CHARS);
  const audioBuffers: Buffer[] = [];

  for (const chunk of textChunks) {
    const params = {
      Engine: "neural" as const,
      LanguageCode: "en-US" as const,
      Text: chunk,
      OutputFormat: "mp3" as const,
      VoiceId: "Joanna" as const, // You can change this to any preferred voice
    };

    try {
      console.log(`Processing chunk: ${chunk.substring(0, 50)}...`);
      const command = new SynthesizeSpeechCommand(params);
      const response = await pollyClient.send(command);

      if (response.AudioStream instanceof Readable) {
        const chunks: Uint8Array[] = [];
        for await (const chunk of response.AudioStream) {
          chunks.push(chunk);
        }
        audioBuffers.push(Buffer.concat(chunks));
        console.log(`Chunk processed successfully. Audio length: ${audioBuffers[audioBuffers.length - 1].length} bytes`);
      } else {
        throw new Error("AudioStream is not a Readable stream");
      }
    } catch (error) {
      console.error("Error in text-to-speech conversion:", error);
      throw error;
    }
  }

  const finalBuffer = Buffer.concat(audioBuffers);
  console.log(`Total audio length: ${finalBuffer.length} bytes`);
  return finalBuffer;
}

function splitTextIntoChunks(text: string, maxChunkSize: number): string[] {
  const chunks: string[] = [];
  let currentChunk = "";

  const sentences = text.split(/(?<=[.!?])\s+/);

  for (const sentence of sentences) {
    if (currentChunk.length + sentence.length <= maxChunkSize) {
      currentChunk += sentence + " ";
    } else {
      if (currentChunk) {
        chunks.push(currentChunk.trim());
      }
      currentChunk = sentence + " ";
    }
  }

  if (currentChunk) {
    chunks.push(currentChunk.trim());
  }

  return chunks;
}

export default textToSpeech;