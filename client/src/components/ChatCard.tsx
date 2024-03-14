import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from "@/lib/utils"
import plant from '../../public/plant_avatar.png'
import Image from 'next/image'

type CardProps = React.ComponentProps<typeof Card>
type Message = { content: string }

export interface ChatCardProps {
  messages: Message[],
  className?: CardProps,
}

const ChatCard = ({ messages, className }: ChatCardProps) => {
  return (
    <div>
    <Card className={cn("w-[600px]", className)}>
      <CardContent className="grid gap-4 pt-4">
        <div>
          <div className="flex items-center space-x-4 rounded-md border p-4">
            <div className="w-10 h-10">
            <Image src={plant} alt="plant" className="w-10 h-10 rounded-full"/>
            </div>
            <div>
            {messages.map((message, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span/>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">
                  {message.content}
                </p>
              </div>
            </div>
          ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
    </div>
  )
}

export default ChatCard