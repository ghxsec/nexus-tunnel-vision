
import React from 'react';
import { 
  Sidebar, 
  SidebarContent, 
  SidebarHeader, 
  SidebarFooter,
  SidebarTrigger,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupContent
} from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import { 
  Settings, 
  Shield, 
  Globe, 
  BarChart, 
  Users, 
  Clock, 
  LogOut 
} from 'lucide-react';

const DashboardSidebar: React.FC = () => {
  return (
    <Sidebar className="border-r border-white/10">
      <SidebarHeader className="flex items-center justify-center h-16 px-4">
        <div className="flex items-center space-x-2">
          <Shield className="h-8 w-8 text-vpn-purple" />
          <h1 className="text-xl font-semibold text-white">NexusVPN</h1>
        </div>
        <SidebarTrigger className="ml-auto md:hidden" />
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton className="flex items-center space-x-3 w-full">
                  <Shield className="h-5 w-5" />
                  <span>Dashboard</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton className="flex items-center space-x-3 w-full">
                  <Globe className="h-5 w-5" />
                  <span>Servers</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton className="flex items-center space-x-3 w-full">
                  <BarChart className="h-5 w-5" />
                  <span>Statistics</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton className="flex items-center space-x-3 w-full">
                  <Users className="h-5 w-5" />
                  <span>Account</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton className="flex items-center space-x-3 w-full">
                  <Clock className="h-5 w-5" />
                  <span>History</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton className="flex items-center space-x-3 w-full">
                  <Settings className="h-5 w-5" />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="p-4 border-t border-white/10">
        <SidebarMenuButton className="flex items-center space-x-3 w-full text-red-400 hover:text-red-300">
          <LogOut className="h-5 w-5" />
          <span>Disconnect</span>
        </SidebarMenuButton>
      </SidebarFooter>
    </Sidebar>
  );
};

export default DashboardSidebar;
