"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import NewOrder from "@/components/NewOrder"
import RunningTask from "@/components/RunningTask"
import RunningMobile from "@/components/mobile/RunningMobile"
import CancelledTask from "@/components/CancelledTask"
import PauseTask from "@/components/PauseTask"
import PauseMobile from "@/components/mobile/PauseMobile"
import PaidTask from "@/components/PaidTask"
import PaidMobile from "@/components/mobile/PaidMobile"
import UnpaidTask from "@/components/UnpaidTask"
import UnpaidMobile from "@/components/mobile/UnpaidMobile"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import CancelledMobile from "@/components/mobile/CancelledMobile"
import FailedTask from "@/components/FailedTask"
import Navbar from "@/components/Navbar"

// following numbers will be replaced by API
const runningCount = 4
const pauseCount = 4
const unpaidCount = 4
const paidCount = 4
const cancelledCount = 4
const failedCount = 1

export default function Home() {
  return (
    <main>
      <Navbar />
      <Tabs defaultValue="running" className="mt-3">
        <TabsList className="grid grid-cols-3 grid-rows-2 md:grid-cols-6 md:grid-rows-none w-full gap-3 h-full">
          <TabsTrigger value="running" className="hover:bg-slate-200">
            Running
            <Badge
              className={cn(
                runningCount > 0
                  ? "ml-1 md:ml-2 bg-green-500 hover:bg-green-500"
                  : "ml-1 md:ml-2 bg-transparent"
              )}
            >
              {runningCount}
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="paused" className="hover:bg-slate-200">
            Paused
            <Badge
              className={cn(
                pauseCount > 0
                  ? "ml-1 md:ml-2 bg-yellow-400 hover:bg-yellow-400"
                  : "ml-1 md:ml-2 bg-transparent"
              )}
            >
              {pauseCount}
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="failed" className="hover:bg-slate-200">
            Failed
            <Badge
              className={cn(
                failedCount > 0
                  ? "ml-1 md:ml-2 bg-red-500 hover:bg-red-500"
                  : "ml-1 md:ml-2"
              )}
            >
              {failedCount}
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="unpaid" className="hover:bg-slate-200">
            Unpaid
            <Badge className={cn("ml-1 md:ml-2 bg-gray-400 hover:bg-gray-400")}>
              {unpaidCount}
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="paid" className="hover:bg-slate-200">
            Paid
            <Badge className={cn("ml-1 md:ml-2 bg-gray-400 hover:bg-gray-400")}>
              {paidCount}
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="cancelled" className="hover:bg-slate-200">
            Cancelled
            <Badge className={cn("ml-1 md:ml-2 bg-gray-400 hover:bg-gray-400")}>
              {cancelledCount}
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
        <TabsContent value="paused">
          <div className="my-5">
            <NewOrder />
          </div>
          <div className="hidden md:block">
            <PauseTask />
          </div>
          <div className="block md:hidden">
            <PauseMobile />
          </div>
        </TabsContent>
        <TabsContent value="unpaid">
          <div className="my-5">
            <NewOrder />
          </div>
          <div className="hidden md:block">
            <UnpaidTask />
          </div>
          <div className="block md:hidden">
            <UnpaidMobile />
          </div>
        </TabsContent>
        <TabsContent value="paid">
          <div className="my-5">
            <NewOrder />
          </div>
          <div className="hidden md:block">
            <PaidTask />
          </div>
          <div className="block md:hidden">
            <PaidMobile />
          </div>
        </TabsContent>
        <TabsContent value="cancelled">
          <div className="my-5">
            <NewOrder />
          </div>
          <div className="hidden md:block">
            <CancelledTask />
          </div>
          <div className="block md:hidden">
            <CancelledMobile />
          </div>
        </TabsContent>
        <TabsContent value="failed">
          <div className="my-5">
            <NewOrder />
          </div>
          <FailedTask />
        </TabsContent>
      </Tabs>
    </main>
  )
}
