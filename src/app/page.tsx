import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/ui/icon"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { SessionProvider } from "next-auth/react"

export default function Signin() {
  return (
    <div className="flex h-screen">
      <Card className="md:w-[400px] m-auto">
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl text-center">
            Sign In
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            {/* <Button className="w-full">
            </Button> */}
            <Link
              href="/home"
              className={cn(buttonVariants({ variant: "outline" }), "w-full")}
            >
              <Icons.google className="mr-2 h-4 w-4" /> Google
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
