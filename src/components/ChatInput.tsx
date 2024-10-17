"use client";

import { Button, Textarea } from "@nextui-org/react";
import { Send } from "lucide-react";
import { type useChat } from "ai/react";

type HandleInputChange = ReturnType<typeof useChat>["handleInputChange"];
type HandleSubmit = ReturnType<typeof useChat>["handleSubmit"];
type SetInput = ReturnType<typeof useChat>["setInput"];

interface ChatInputProps {
  input: string;
  handleInputChange: HandleInputChange;
  handleSubmit: HandleSubmit;
  setInput: SetInput;
}

export const ChatInput = ({ handleInputChange, handleSubmit, input, setInput }: ChatInputProps) => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-zinc-900 p-4">
      <div className="mx-auto max-w-3xl">
        <form onSubmit={handleSubmit} className="relative">
          <Textarea
            minRows={1}
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
            className="resize-none bg-zinc-800 hover:bg-zinc-800 focus:bg-zinc-800 rounded-xl text-base text-black border w-full placeholder-gray-500"
          />

          <Button
            size="sm"
            type="submit"
            className="absolute z-10 border border-border bg-zinc-900 right-2 bottom-2"
          >
            <Send className="size-4" />
          </Button>
        </form>
      </div>
    </div>
  );
};
