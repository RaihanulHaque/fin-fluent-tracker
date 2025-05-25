
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, Plus, Wallet, Target, Calendar } from 'lucide-react';
import ExpenseInput from '@/components/ExpenseInput';
import CategoryCard from '@/components/CategoryCard';
import TransactionList from '@/components/TransactionList';
import Header from '@/components/Header';

interface Transaction {
  id: number;
  description: string;
  amount: number;
  category: string;
  date: Date;
  type: 'income' | 'expense';
}

const Index = () => {
  const [expenses, setExpenses] = useState<Transaction[]>([
    { id: 1, description: 'Lunch at restaurant', amount: 120, category: 'Food', date: new Date(), type: 'expense' },
    { id: 2, description: 'Uber ride home', amount: 300, category: 'Transport', date: new Date(), type: 'expense' },
    { id: 3, description: 'Freelance payment', amount: 5000, category: 'Income', date: new Date(), type: 'income' },
  ]);

  const categoryData = [
    { name: 'Food', value: 120, color: '#10b981' },
    { name: 'Transport', value: 300, color: '#f59e0b' },
    { name: 'Entertainment', value: 0, color: '#8b5cf6' },
    { name: 'Shopping', value: 0, color: '#06b6d4' },
  ];

  const weeklyData = [
    { day: 'Mon', amount: 200 },
    { day: 'Tue', amount: 150 },
    { day: 'Wed', amount: 420 },
    { day: 'Thu', amount: 100 },
    { day: 'Fri', amount: 300 },
    { day: 'Sat', amount: 80 },
    { day: 'Sun', amount: 250 },
  ];

  const totalIncome = expenses.filter(e => e.type === 'income').reduce((sum, e) => sum + e.amount, 0);
  const totalExpenses = expenses.filter(e => e.type === 'expense').reduce((sum, e) => sum + e.amount, 0);
  const balance = totalIncome - totalExpenses;

  const addExpense = (newExpense: Omit<Transaction, 'id'>) => {
    setExpenses([...expenses, { ...newExpense, id: Date.now() }]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8 space-y-8 max-w-7xl">
        {/* Balance Overview */}
        <div className="text-center space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-foreground">Today's Balance</h2>
            <p className={`text-5xl font-bold ${balance >= 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}`}>
              ৳{balance.toLocaleString()}
            </p>
            <p className="text-muted-foreground">Track your expenses with smart insights</p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-border/50 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2 text-foreground">
                <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                  <TrendingUp className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                Total Income
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">৳{totalIncome.toLocaleString()}</p>
              <p className="text-sm text-muted-foreground mt-1">This month</p>
            </CardContent>
          </Card>

          <Card className="border-border/50 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2 text-foreground">
                <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
                  <TrendingDown className="h-5 w-5 text-red-600 dark:text-red-400" />
                </div>
                Total Expenses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-red-600 dark:text-red-400">৳{totalExpenses.toLocaleString()}</p>
              <p className="text-sm text-muted-foreground mt-1">This month</p>
            </CardContent>
          </Card>

          <Card className="border-border/50 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2 text-foreground">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <Wallet className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                Available Funds
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className={`text-2xl font-bold ${balance >= 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}`}>
                ৳{balance.toLocaleString()}
              </p>
              <p className="text-sm text-muted-foreground mt-1">Current balance</p>
            </CardContent>
          </Card>
        </div>

        {/* Expense Input */}
        <Card className="border-border/50 shadow-sm">
          <CardHeader>
            <CardTitle className="text-foreground flex items-center gap-2">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Plus className="h-5 w-5 text-primary" />
              </div>
              Add New Entry
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ExpenseInput onAddExpense={addExpense} />
          </CardContent>
        </Card>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Category Breakdown */}
          <Card className="border-border/50 shadow-sm">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center gap-2">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                  <Target className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                Expense Categories
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      dataKey="value"
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`৳${value}`, 'Amount']} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {categoryData.map((category) => (
                  <div key={category.name} className="flex items-center gap-2 px-3 py-1 bg-secondary rounded-full">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: category.color }}
                    ></div>
                    <span className="text-sm text-foreground">{category.name}: ৳{category.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Weekly Spending */}
          <Card className="border-border/50 shadow-sm">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center gap-2">
                <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                  <Calendar className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                </div>
                Weekly Spending
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={weeklyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip 
                      formatter={(value) => [`৳${value}`, 'Amount']}
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--background))', 
                        border: '1px solid hsl(var(--border))', 
                        borderRadius: '8px' 
                      }}
                    />
                    <Bar dataKey="amount" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Transactions */}
        <Card className="border-border/50 shadow-sm">
          <CardHeader>
            <CardTitle className="text-foreground">Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <TransactionList transactions={expenses} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
