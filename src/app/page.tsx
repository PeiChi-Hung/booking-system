import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function Signin() {
  return (
    <div className="w-[400px]">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-center">Sign In</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            {/* <Button variant="outline">Google</Button> */}
            <Button className="w-full">
              <Link href="/home">Home</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
