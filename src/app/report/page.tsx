import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PlacedBarChart } from "./PlacedBarChart"
import { CompletedBarChart } from "./CompletedBarChart"

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
          <PlacedBarChart />
        </TabsContent>
        <TabsContent value="completed">
          <CompletedBarChart />
        </TabsContent>
      </Tabs>
    </main>
  )
}
