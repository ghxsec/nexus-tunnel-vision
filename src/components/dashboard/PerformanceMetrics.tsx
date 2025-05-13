
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, ChartLineIcon } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Mock data for charts
const downloadData = [
  { name: '00:00', value: 25 },
  { name: '04:00', value: 10 },
  { name: '08:00', value: 30 },
  { name: '12:00', value: 45 },
  { name: '16:00', value: 60 },
  { name: '20:00', value: 35 },
  { name: '23:59', value: 20 },
];

const uploadData = [
  { name: '00:00', value: 15 },
  { name: '04:00', value: 5 },
  { name: '08:00', value: 20 },
  { name: '12:00', value: 25 },
  { name: '16:00', value: 30 },
  { name: '20:00', value: 15 },
  { name: '23:59', value: 10 },
];

const dataUsageData = [
  { name: 'Mon', download: 1.2, upload: 0.4 },
  { name: 'Tue', download: 2.3, upload: 0.8 },
  { name: 'Wed', download: 1.5, upload: 0.5 },
  { name: 'Thu', download: 3.4, upload: 1.2 },
  { name: 'Fri', download: 2.7, upload: 0.9 },
  { name: 'Sat', download: 4.5, upload: 1.5 },
  { name: 'Sun', download: 3.8, upload: 1.3 },
];

const PerformanceMetrics: React.FC = () => {
  return (
    <Card className="glass-card">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-medium flex items-center">
          <ChartLineIcon className="mr-2 h-5 w-5 text-vpn-purple" />
          Performance Metrics
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <Tabs defaultValue="speed" className="space-y-4">
          <TabsList className="grid grid-cols-2">
            <TabsTrigger value="speed">Speed</TabsTrigger>
            <TabsTrigger value="data">Data Usage</TabsTrigger>
          </TabsList>
          
          <TabsContent value="speed" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Download Speed</p>
                <div className="flex items-end space-x-2">
                  <p className="text-2xl font-semibold">42.8</p>
                  <p className="text-muted-foreground">Mbps</p>
                </div>
              </div>
              
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Upload Speed</p>
                <div className="flex items-end space-x-2">
                  <p className="text-2xl font-semibold">18.3</p>
                  <p className="text-muted-foreground">Mbps</p>
                </div>
              </div>
            </div>
            
            <div className="pt-2">
              <p className="text-sm font-medium mb-3">Speed Over Time</p>
              <div className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={downloadData}>
                    <defs>
                      <linearGradient id="colorDownload" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#9b87f5" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#9b87f5" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis 
                      dataKey="name" 
                      stroke="#888888" 
                      fontSize={12} 
                      tickLine={false} 
                      axisLine={false} 
                    />
                    <YAxis 
                      stroke="#888888" 
                      fontSize={12} 
                      tickLine={false} 
                      axisLine={false}
                      tickFormatter={(value) => `${value}`}
                    />
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333333" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#121212', 
                        border: '1px solid #333333' 
                      }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#9b87f5" 
                      fillOpacity={1} 
                      fill="url(#colorDownload)" 
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="data" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Total Downloaded</p>
                <div className="flex items-end space-x-2">
                  <p className="text-2xl font-semibold">19.4</p>
                  <p className="text-muted-foreground">GB</p>
                </div>
              </div>
              
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Total Uploaded</p>
                <div className="flex items-end space-x-2">
                  <p className="text-2xl font-semibold">6.7</p>
                  <p className="text-muted-foreground">GB</p>
                </div>
              </div>
            </div>
            
            <div>
              <p className="text-sm font-medium mb-3">Weekly Data Usage</p>
              <div className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={dataUsageData}>
                    <defs>
                      <linearGradient id="colorDownload2" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#9b87f5" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#9b87f5" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="colorUpload" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#33C3F0" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#33C3F0" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis 
                      dataKey="name" 
                      stroke="#888888" 
                      fontSize={12} 
                      tickLine={false} 
                      axisLine={false} 
                    />
                    <YAxis 
                      stroke="#888888" 
                      fontSize={12} 
                      tickLine={false} 
                      axisLine={false}
                      tickFormatter={(value) => `${value} GB`}
                    />
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333333" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#121212', 
                        border: '1px solid #333333' 
                      }}
                      formatter={(value: number) => [`${value} GB`]}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="download" 
                      name="Download"
                      stroke="#9b87f5" 
                      fillOpacity={1} 
                      fill="url(#colorDownload2)" 
                      strokeWidth={2}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="upload" 
                      name="Upload"
                      stroke="#33C3F0" 
                      fillOpacity={1} 
                      fill="url(#colorUpload)" 
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default PerformanceMetrics;
