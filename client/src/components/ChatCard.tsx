import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from "@/lib/utils"
import plant from '../../public/plant_avatar.png'
import Image from 'next/image'

type CardProps = React.ComponentProps<typeof Card>;

export interface ChatCardProps {
  response: string;
  className?: CardProps;
}

const ChatCard = ({ response, className }: ChatCardProps) => {
  return (
    <div>
      <Card className={cn('lg:w-[800px] sm:w-screen md:w-screen', className)}>
        <CardContent className="grid gap-4 pt-4">
          <div>
            <div className="flex items-center rounded-md border p-4">
              <div className="w-10 h-10">
                <Image
                  src={plant}
                  alt="plant"
                  className="w-10 h-10 rounded-full"
                />
              </div>
              <div className="ml-4">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">{response}</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChatCard;