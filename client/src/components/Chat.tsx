"use client"

import { BellRing, Check } from "lucide-react"
import { InputWithButton } from "./UserInput"
import { Button } from "./ui/button"
import { Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle, } from "./ui/card"
import { cn } from "@/lib/utils"
import { Embed } from 'semantic-ui-react'
import { useState } from "react"

type CardProps = React.ComponentProps<typeof Card>



const Chat = ({ className, ...props }: CardProps) => {
  const [query, setQuery] = useState('')
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


  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <div>
      <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <CardTitle>Video</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex items-center space-x-4 rounded-md border p-4">
        <Embed
    autoplay={false}
    color='white'
    hd={false}
    id='gJscrxxl_Bg'
    iframe={{
      allowFullScreen: false,
      style: {
        padding: 10,
      },
    }}
    placeholder=''
    source='vimeo'
  />
        </div>

      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <Check className="mr-2 h-4 w-4" /> Mark all as read
        </Button>
      </CardFooter>
    </Card>
      </div>
      <div className="flex flex-col w-full items-center pt-10">
        <InputWithButton/>
      </div>
    </div>
  )
}

export default Chat