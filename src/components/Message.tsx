import { cn } from "@/lib/utils";
import { Bot, User } from "lucide-react";

interface MessageProps {
    content: string;
    isUserMessage: boolean;
}

export const Message = ({content, isUserMessage}: MessageProps) => {
    return <div className={cn("text-white", {
        "bg-zinc-800": isUserMessage,
        "bg-zinc-900/25": !isUserMessage,
    })}>
        <div className="p-6">
            <div className="max-w-3xl mx-auto flex items-start gap-2.5">
                <div className={cn("size-10 shrink-0 aspect-square rounded-full border border-zinc-700 bg-zinc-900 flex justify-center items-center",{
                    "bg-blue-950 border-blue-700 text-white": isUserMessage,
                })}>
                    {isUserMessage ? <User className="size-5"/> : <Bot className="size-5 text-white"/>}
                </div>
                <div className="flex flex-col ml-6 w-full">
                    <div className="flex items-center space-x-2">
                        <span className="text-sm text-white font-semibold">
                            {isUserMessage ? "You" : "Website"}
                        </span>
                    </div>
                    <p className="text-sm font-normal py-2.5 text-white !important">
                        {content}
                    </p>
                </div>
            </div>
        </div>
    </div>
}
