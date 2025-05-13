
import React from 'react';
import DashboardSidebar from './DashboardSidebar';
import DashboardHeader from './DashboardHeader';
import ConnectionPanel from './ConnectionPanel';
import ServerSelection from './ServerSelection';
import PerformanceMetrics from './PerformanceMetrics';
import QuickSettings from './QuickSettings';
import { SidebarProvider } from '@/components/ui/sidebar';

const DashboardLayout: React.FC = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-vpn-dark text-white">
        <DashboardSidebar />
        <div className="flex-1 flex flex-col">
          <DashboardHeader />
          <main className="flex-1 p-6 overflow-auto">
            <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              <ConnectionPanel />
              <ServerSelection />
              <PerformanceMetrics />
              <QuickSettings />
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
