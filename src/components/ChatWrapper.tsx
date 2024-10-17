"use client"

import { Message, useChat } from "ai/react"
import { Messages } from "@/components/Messages"
import { ChatInput } from "./ChatInput"
import { motion } from "framer-motion"
import { Loader2 } from "lucide-react"

export const ChatWrapper = ({ sessionId, initialMessages }: { sessionId: string; initialMessages: Message[] }) => {
  const { messages, handleInputChange, input, handleSubmit, setInput, isLoading } = useChat({
    api: "/api/chat-stream",
    body: {
      sessionId
    },
    initialMessages
  })

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-full bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col justify-between gap-4 p-4 rounded-lg shadow-xl"
    >
      <div className="flex-1 overflow-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 pr-4">
        <Messages messages={messages} />
      </div>
      
      <div className="relative">
        <ChatInput 
          input={input} 
          handleInputChange={handleInputChange} 
          handleSubmit={handleSubmit} 
          setInput={setInput}
        />
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2"
          >
            <Loader2 className="h-5 w-5 animate-spin text-gray-400" />
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}