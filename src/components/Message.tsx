import { cn } from "@/lib/utils"
import { Bot, User } from "lucide-react"
import { motion } from "framer-motion"

interface MessageProps {
  content: string
  isUserMessage: boolean
}

export const Message = ({ content, isUserMessage }: MessageProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "mb-4 rounded-lg shadow-md",
        isUserMessage ? "bg-gradient-to-r from-blue-600 to-blue-700" : "bg-gradient-to-r from-gray-700 to-gray-800"
      )}
    >
      <div className="p-4 md:p-6">
        <div className="max-w-3xl mx-auto flex items-start gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "size-10 shrink-0 rounded-full flex justify-center items-center",
              isUserMessage
                ? "bg-blue-500 text-white"
                : "bg-gray-600 text-gray-100"
            )}
          >
            {isUserMessage ? (
              <User className="size-5" />
            ) : (
              <Bot className="size-5" />
            )}
          </motion.div>
          <div className="flex flex-col w-full">
            <div className="flex items-center space-x-2 mb-1">
              <span className={cn(
                "text-sm font-semibold",
                isUserMessage ? "text-blue-100" : "text-gray-100"
              )}>
                {isUserMessage ? "You" : "Website"}
              </span>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className={cn(
                "text-sm font-normal leading-relaxed",
                isUserMessage ? "text-blue-50" : "text-gray-100"
              )}
            >
              {content}
            </motion.p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}