import { PollyClient, SynthesizeSpeechCommand } from "@aws-sdk/client-polly";
import { Upload } from "@aws-sdk/lib-storage";
import { Readable } from "stream";

const pollyClient = new PollyClient({
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

async function textToSpeech(text: string): Promise<Buffer> {
  const params = {
    Engine: "neural" as const,
    LanguageCode: "en-US" as const,
    Text: text,
    OutputFormat: "mp3" as const,
    VoiceId: "Joanna" as const, // You can change this to any preferred voice
  };

  try {
    const command = new SynthesizeSpeechCommand(params);
    const response = await pollyClient.send(command);

    if (response.AudioStream instanceof Readable) {
      const chunks: Uint8Array[] = [];
      for await (const chunk of response.AudioStream) {
        chunks.push(chunk);
      }
      return Buffer.concat(chunks);
    } else {
      throw new Error("AudioStream is not a Readable stream");
    }
  } catch (error) {
    console.error("Error in text-to-speech conversion:", error);
    throw error;
  }
}

export default textToSpeech;