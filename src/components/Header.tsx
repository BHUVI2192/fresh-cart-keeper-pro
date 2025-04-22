
import React from 'react';
import { Search, Package } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Header = () => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4 gap-4 max-w-[1400px] mx-auto">
        <div className="flex items-center gap-2 font-semibold text-xl text-teal-700">
          <Package className="h-6 w-6" />
          <span>StockKeeper</span>
        </div>
        <div className="flex-1 ml-8">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search inventory..."
              className="pl-8 w-[300px] bg-muted/30"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
