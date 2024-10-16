"use client";
// Francis Hull
import { Button, Textarea } from "@nextui-org/react";
import { Send, Volume2 } from "lucide-react";
import { type useChat } from "ai/react";
import { useState } from "react";
import { speakText } from "@/lib/clientTextToSpeech";

type HandleInputChange = ReturnType<typeof useChat>["handleInputChange"];
type HandleSubmit = ReturnType<typeof useChat>["handleSubmit"];
type SetInput = ReturnType<typeof useChat>["setInput"];


interface ChatInputProps {
  input: string;
  handleInputChange: HandleInputChange;
  handleSubmit: HandleSubmit;
  setInput: SetInput;
  lastMessage:  string | undefined;
  
}

export const ChatInput = ({ handleInputChange, handleSubmit, input, setInput, lastMessage }: ChatInputProps) => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleSpeak = async () => {
    if (lastMessage) {
      setIsSpeaking(true);
      await speakText(lastMessage);
      setIsSpeaking(false);
    }
  };

  return (
    <div className="z-10 bg-zinc-900 absolute bottom-0 left-0 w-full">
      <div className="mx-2 flex flex-row gap-3 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
        <div className="relative flex h-full flex-1 items-stretch md:flex-col">
          <div className="relative flex flex-col w-full flex-grow p-4">
            <form onSubmit={handleSubmit} className="relative">
              <Textarea
                minRows={4}
                autoFocus
                onChange={handleInputChange}
                value={input}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit();
                    setInput("");
                  }
                }}
                placeholder="Enter your question..."
                className="resize-none bg-zinc-800 hover:bg-zinc-900 rounded-xl text-base"
              />

              <Button
                size="sm"
                type="submit"
                className="absolute z-10 border border-border bg-zinc-900 right-2 bottom-2"
              >
                <Send className="size-4" />
              </Button>
            </form>
            <Button
              size="sm"
              onClick={handleSpeak}
              disabled={!lastMessage || isSpeaking}
              className="mt-2 border border-border bg-zinc-900"
            >
              <Volume2 className="size-4 mr-2" />
              {isSpeaking ? "Speaking..." : "Speak The Output"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
