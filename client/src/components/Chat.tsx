"use client"

import { InputWithButton } from "./UserInput"
import { Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle, } from "./ui/card"
import { cn } from "@/lib/utils"
import { useState } from "react"
import ChatCard from "./ChatCard"
import { AspectRatio } from "@radix-ui/react-aspect-ratio"

type CardProps = React.ComponentProps<typeof Card>

const Chat = ({ className, ...props }: CardProps) => {
  const [query, setQuery] = useState('')
  const [messages, setMessages] = useState([])
  const [loading, setIsLoading] = useState(false)

  const sendMessage = async () => {
    if (!query.length || loading) return

    setIsLoading(true)

    
    
  }


  const handleInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setQuery(event.target.value ?? "")
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === "Enter") {
      event.preventDefault() // Prevent the default newline behavior of the Enter key
      sendMessage()
    }
  }

  //messages example for testing the ui
  const messagesTest = [
    { content: "Hello, how can I help you today?" }
  ]


  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <div>
      <Card className={cn("w-[600px]", className)} {...props}>
      <CardHeader>
        <CardTitle>Video</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          <AspectRatio ratio={16 / 9} className="w-full h-full">
            <iframe className='w-full h-full' src="https://www.youtube.com/embed/1y_kfWUCFDQ" allowFullScreen/>
          </AspectRatio>
        </div>

      </CardContent>
    </Card>
      </div>
      <div className="pt-6">
        <ChatCard messages={messagesTest}/>
      </div>
      <div className="flex flex-col w-full items-center pt-6">
        <InputWithButton/>
      </div>
    </div>
  )
}

export default Chat