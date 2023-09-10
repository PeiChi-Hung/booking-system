"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import NewOrder from "@/components/NewOrder"
import RunningTask from "@/components/RunningTask"
import RunningMobile from "@/components/RunningMobile"
import CancelledTask from "@/components/CancelledTask"
import PauseTask from "@/components/PauseTask"
import PaidTask from "@/components/PaidTask"
import UnpaidTask from "@/components/UnpaidTask"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

// following numbers will be replaced by API
const runningCount = 4
const pauseCount = 4
const unpaidCount = 4
const paidCount = 4
const cancelledCount = 4
const failedCount = 4

export default function Home() {
  return (
    <main className="mt-3 px-3 md:mt-5 md:px-5">
      <Tabs defaultValue="running">
        <TabsList className="grid grid-cols-3 grid-rows-2 md:grid-cols-6 md:grid-rows-none w-full gap-3 h-full">
          <TabsTrigger value="running">
            Running
            <Badge
              className={cn(
                runningCount > 0 ? "ml-2 bg-green-400" : "ml-2 bg-transparent"
              )}
            >
              {runningCount}
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="pause">
            Pause
            <Badge
              className={cn(
                pauseCount > 0 ? "ml-2 bg-yellow-300" : "ml-2 bg-transparent"
              )}
            >
              {pauseCount}
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="unpaid">Unpaid</TabsTrigger>
          <TabsTrigger value="paid">Paid</TabsTrigger>
          <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
          <TabsTrigger value="failed">
            Failed
            <Badge
              className={cn(
                failedCount > 0 ? "ml-2 bg-red-500" : "ml-2 bg-transparent"
              )}
            >
              {failedCount}
            </Badge>
          </TabsTrigger>
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
        <TabsContent value="failed"></TabsContent>
      </Tabs>
    </main>
  )
}
