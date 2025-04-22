
import React from 'react';
import Header from '@/components/Header';
import DashboardStats from '@/components/DashboardStats';
import InventoryTable from '@/components/InventoryTable';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50/40">
      <Header />
      <main className="container mx-auto py-6 px-4 space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <DashboardStats />
        <InventoryTable />
      </main>
    </div>
  );
};

export default Index;
