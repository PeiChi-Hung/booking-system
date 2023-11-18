import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PlacedBarChart } from "./PlacedBarChart"
import { CompletedBarChart } from "./CompletedBarChart"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Report() {
  return (
    <main>
      <Tabs defaultValue="placed" className="mt-3">
        <TabsList className="w-full">
          <TabsTrigger value="placed" className="w-full">
            Placed Order
          </TabsTrigger>
          <TabsTrigger value="completed" className="w-full">
            Completed Order
          </TabsTrigger>
        </TabsList>
        <TabsContent value="placed">
          <Card>
            <CardHeader>
              <CardTitle>Placed orders in the past 12 months</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <PlacedBarChart />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="completed">
          <Card>
            <CardHeader>
              <CardTitle>Completed orders in the past 12 months</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <CompletedBarChart />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  )
}
