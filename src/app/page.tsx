'use client';

import { Tabs, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import { TabsList } from '@radix-ui/react-tabs';
import { AnalyticsTab } from '@/app/_components/analytics-tab.component';
import { MyMoneyTab } from '@/app/_components/my-money-tab.component';

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <div className="mt-6 flex-1 space-y-4">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        </div>

        <Tabs defaultValue="analytics" className="space-y-4">
          <TabsList>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="money">My Money</TabsTrigger>
            <TabsTrigger value="simulator" disabled>
              Simulator (coming soon)
            </TabsTrigger>
          </TabsList>

          <TabsContent value="money" className="space-y-4">
            <MyMoneyTab />
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <AnalyticsTab />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
