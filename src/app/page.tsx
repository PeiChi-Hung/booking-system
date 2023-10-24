import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function Signin() {
  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Sign In</CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          {/* <Button variant="outline">Google</Button> */}
          <Link href="/home">Home</Link>
        </div>
      </CardContent>
    </Card>
  )
}
