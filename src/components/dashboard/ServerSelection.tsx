
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Globe, Search, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

// Mock server data
const servers = [
  { id: 1, name: 'Frankfurt', country: 'Germany', ping: 14, isFavorite: true },
  { id: 2, name: 'London', country: 'United Kingdom', ping: 22, isFavorite: false },
  { id: 3, name: 'New York', country: 'United States', ping: 89, isFavorite: true },
  { id: 4, name: 'Tokyo', country: 'Japan', ping: 156, isFavorite: false },
  { id: 5, name: 'Singapore', country: 'Singapore', ping: 132, isFavorite: false },
  { id: 6, name: 'Sydney', country: 'Australia', ping: 210, isFavorite: false },
  { id: 7, name: 'Paris', country: 'France', ping: 35, isFavorite: false },
];

const ServerSelection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedServer, setSelectedServer] = useState<number | null>(1);
  
  const filteredServers = servers.filter(server => 
    server.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    server.country.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  
  const getPingColor = (ping: number) => {
    if (ping < 50) return "text-green-500";
    if (ping < 100) return "text-yellow-500";
    return "text-orange-500";
  };
  
  return (
    <Card className="glass-card">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-medium flex items-center">
          <Globe className="mr-2 h-5 w-5 text-vpn-blue" />
          Server Selection
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search location..."
            className="pl-8"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        
        <div className="relative bg-black/20 rounded-lg p-4 h-[140px] overflow-hidden mb-4">
          <div className="absolute inset-0 opacity-30">
            <svg width="100%" height="100%" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M50,180 Q200,120 350,220 T650,180" 
                fill="none" 
                stroke="#9b87f5" 
                strokeWidth="1"
              />
              <circle cx="50" cy="180" r="3" fill="#9b87f5" />
              <circle cx="350" cy="220" r="3" fill="#9b87f5" />
              <circle cx="650" cy="180" r="6" fill="#9b87f5" className="animate-pulse-light" />
            </svg>
          </div>
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-1">Selected Server</p>
              <p className="text-xl font-semibold">
                {selectedServer ? servers.find(s => s.id === selectedServer)?.name : 'None'}, 
                {selectedServer ? ' ' + servers.find(s => s.id === selectedServer)?.country : ''}
              </p>
            </div>
          </div>
        </div>
        
        <h3 className="text-sm font-medium text-muted-foreground">Server List</h3>
        
        <ScrollArea className="h-[200px] pr-4">
          <div className="space-y-2">
            {filteredServers.map((server) => (
              <div 
                key={server.id}
                className={cn(
                  "flex items-center justify-between p-3 rounded-md cursor-pointer transition-colors",
                  selectedServer === server.id 
                    ? "bg-vpn-purple/20 border border-vpn-purple/40" 
                    : "bg-black/20 hover:bg-black/30 border border-transparent"
                )}
                onClick={() => setSelectedServer(server.id)}
              >
                <div className="flex items-center space-x-3">
                  {server.isFavorite && (
                    <Star className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400" />
                  )}
                  {!server.isFavorite && (
                    <div className="w-3.5" />
                  )}
                  <div>
                    <p className="font-medium">{server.name}</p>
                    <p className="text-xs text-muted-foreground">{server.country}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className={cn("text-sm", getPingColor(server.ping))}>
                    {server.ping} ms
                  </span>
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                    <Star 
                      className={cn(
                        "h-4 w-4",
                        server.isFavorite 
                          ? "text-yellow-400 fill-yellow-400" 
                          : "text-muted-foreground"
                      )} 
                    />
                  </Button>
                </div>
              </div>
            ))}
            
            {filteredServers.length === 0 && (
              <div className="flex items-center justify-center h-20 text-muted-foreground">
                No servers found
              </div>
            )}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default ServerSelection;
