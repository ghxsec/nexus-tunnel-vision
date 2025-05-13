
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings, Split, ToggleLeft, ToggleRight } from 'lucide-react';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const QuickSettings: React.FC = () => {
  const [killSwitch, setKillSwitch] = useState(true);
  const [autoConnect, setAutoConnect] = useState(false);
  const [splitTunneling, setSplitTunneling] = useState(false);
  
  return (
    <Card className="glass-card">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-medium flex items-center">
          <Settings className="mr-2 h-5 w-5 text-vpn-blue" />
          Quick Settings
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <Label htmlFor="protocol">VPN Protocol</Label>
          <Select defaultValue="openvpn-udp">
            <SelectTrigger id="protocol" className="w-full">
              <SelectValue placeholder="Select protocol" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="openvpn-udp">OpenVPN (UDP)</SelectItem>
              <SelectItem value="openvpn-tcp">OpenVPN (TCP)</SelectItem>
              <SelectItem value="wireguard">WireGuard</SelectItem>
              <SelectItem value="ikev2">IKEv2/IPSec</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="flex items-center">
                <ToggleRight className="h-4 w-4 mr-2 text-vpn-purple" />
                <Label htmlFor="kill-switch" className="text-sm font-medium">Kill Switch</Label>
              </div>
              <p className="text-xs text-muted-foreground">
                Blocks internet if VPN disconnects
              </p>
            </div>
            <Switch 
              id="kill-switch" 
              checked={killSwitch}
              onCheckedChange={setKillSwitch}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="flex items-center">
                <Split className="h-4 w-4 mr-2 text-vpn-purple" />
                <Label htmlFor="split-tunneling" className="text-sm font-medium">Split Tunneling</Label>
              </div>
              <p className="text-xs text-muted-foreground">
                Choose which apps use the VPN
              </p>
            </div>
            <Switch 
              id="split-tunneling" 
              checked={splitTunneling}
              onCheckedChange={setSplitTunneling}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="flex items-center">
                <ToggleLeft className="h-4 w-4 mr-2 text-vpn-purple" />
                <Label htmlFor="auto-connect" className="text-sm font-medium">Auto-Connect</Label>
              </div>
              <p className="text-xs text-muted-foreground">
                Connect automatically at startup
              </p>
            </div>
            <Switch 
              id="auto-connect" 
              checked={autoConnect}
              onCheckedChange={setAutoConnect}
            />
          </div>
        </div>
        
        <div className="pt-2">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Connection Uptime</p>
            <div>
              <p className="text-xl font-semibold">3h 42m</p>
              <p className="text-xs text-muted-foreground">Since May 13, 2025 at 11:24 AM</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickSettings;
