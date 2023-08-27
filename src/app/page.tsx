"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import NewOrder from "@/components/NewOrder"
import RunningTask from "@/components/RunningTask"
import RunningMobile from "@/components/RunningMobile"
import CancelledTask from "@/components/CancelledTask"
import PauseTask from "@/components/PauseTask"
import PaidTask from "@/components/PaidTask"
import UnpaidTask from "@/components/UnpaidTask"

export default function Home() {
  return (
    <main className="mt-3 px-3 md:mt-5 md:px-5">
      <Tabs defaultValue="running">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="running">Running</TabsTrigger>
          <TabsTrigger value="pause">Pause</TabsTrigger>
          <TabsTrigger value="unpaid">Unpaid</TabsTrigger>
          <TabsTrigger value="paid">Paid</TabsTrigger>
          <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
        </TabsList>
        <TabsContent value="running">
          <div className="my-5">
            <NewOrder />
          </div>
          <div className="hidden md:block">
            <RunningTask />
          </div>
          <div className="block md:hidden">
            <RunningMobile />
          </div>
        </TabsContent>
        <TabsContent value="pause">
          <div className="my-5">
            <NewOrder />
          </div>
          <PauseTask />
        </TabsContent>
        <TabsContent value="unpaid">
          <div className="my-5">
            <NewOrder />
          </div>
          <UnpaidTask />
        </TabsContent>
        <TabsContent value="paid">
          <div className="my-5">
            <NewOrder />
          </div>
          <PaidTask />
        </TabsContent>
        <TabsContent value="cancelled">
          <div className="my-5">
            <NewOrder />
          </div>
          <CancelledTask />
        </TabsContent>
      </Tabs>
    </main>
  )
}
