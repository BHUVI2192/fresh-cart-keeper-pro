
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Edit, Plus } from 'lucide-react';

const InventoryTable = () => {
  const items = [
    { id: 1, name: 'Rice', category: 'Grains', quantity: 50, price: 25.99, status: 'In Stock' },
    { id: 2, name: 'Milk', category: 'Dairy', quantity: 5, price: 4.99, status: 'Low Stock' },
    { id: 3, name: 'Bread', category: 'Bakery', quantity: 15, price: 3.99, status: 'In Stock' },
    { id: 4, name: 'Eggs', category: 'Dairy', quantity: 8, price: 6.99, status: 'Low Stock' },
  ];

  return (
    <div className="rounded-md border">
      <div className="flex items-center justify-between p-4">
        <h2 className="text-lg font-semibold">Inventory Items</h2>
        <Button className="bg-teal-600 hover:bg-teal-700">
          <Plus className="mr-2 h-4 w-4" />
          Add Item
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>${item.price}</TableCell>
              <TableCell>
                <Badge className={item.status === 'Low Stock' ? 'bg-orange-500' : 'bg-green-500'}>
                  {item.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="icon">
                  <Edit className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default InventoryTable;
