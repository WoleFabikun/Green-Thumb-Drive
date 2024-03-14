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

type CardProps = React.ComponentProps<typeof Card>



const Chat = ({ className, ...props }: CardProps) => {
  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <div>
      <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          <BellRing />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Push Notifications
            </p>
            <p className="text-sm text-muted-foreground">
              Send notifications to device.
            </p>
          </div>
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