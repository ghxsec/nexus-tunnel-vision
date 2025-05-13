
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Shield, Globe, Signal } from 'lucide-react';
import { cn } from '@/lib/utils';

const ConnectionPanel: React.FC = () => {
  const [connected, setConnected] = useState(false);
  
  const handleConnectionToggle = () => {
    setConnected(!connected);
  };
  
  return (
    <Card className="glass-card overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl font-medium flex items-center">
          <Shield className="mr-2 h-5 w-5 text-vpn-purple" />
          Connection Status
        </CardTitle>
        <Badge variant={connected ? "default" : "outline"} className={cn(
          connected ? "bg-green-500/20 text-green-400 hover:bg-green-500/30" : "text-muted-foreground"
        )}>
          {connected ? "Connected" : "Disconnected"}
        </Badge>
      </CardHeader>
      
      <CardContent>
        <div className="flex flex-col space-y-8">
          <div className="flex justify-center items-center pt-4">
            <div className={cn(
              "w-36 h-36 rounded-full flex items-center justify-center transition-all duration-300",
              connected ? "bg-gradient-to-br from-vpn-purple/30 to-vpn-blue/20" : "bg-secondary"
            )}>
              <div className={cn(
                "w-32 h-32 rounded-full flex items-center justify-center border",
                connected ? "border-vpn-purple/50" : "border-muted"
              )}>
                <div className={cn(
                  "flex items-center justify-center w-24 h-24 bg-vpn-darker rounded-full cursor-pointer",
                  connected ? "ring-2 ring-vpn-purple" : ""
                )}
                onClick={handleConnectionToggle}>
                  <Switch 
                    checked={connected}
                    onCheckedChange={handleConnectionToggle}
                    className="scale-150"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Server Location</p>
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4 text-vpn-blue" />
                <p className="font-medium">{connected ? 'Frankfurt, Germany' : '—'}</p>
              </div>
            </div>
            
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">IP Address</p>
              <p className="font-medium">{connected ? '198.51.100.204' : '—'}</p>
            </div>
            
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Connection Type</p>
              <p className="font-medium">{connected ? 'OpenVPN (UDP)' : '—'}</p>
            </div>
            
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Signal Strength</p>
              <div className="flex items-center space-x-2">
                <Signal className={cn(
                  "h-4 w-4",
                  connected ? "text-green-500" : "text-muted-foreground"
                )} />
                <p className="font-medium">{connected ? 'Excellent' : '—'}</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ConnectionPanel;
