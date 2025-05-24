
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Calendar, ChartPie, TrendingUp, TrendingDown, Plus, Send } from 'lucide-react';
import ExpenseInput from '@/components/ExpenseInput';
import CategoryCard from '@/components/CategoryCard';
import TransactionList from '@/components/TransactionList';

const Index = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'Lunch at restaurant', amount: 120, category: 'Food', date: new Date(), type: 'expense' },
    { id: 2, description: 'Uber ride home', amount: 300, category: 'Transport', date: new Date(), type: 'expense' },
    { id: 3, description: 'Freelance payment', amount: 5000, category: 'Income', date: new Date(), type: 'income' },
  ]);

  const categoryData = [
    { name: 'Food', value: 120, color: '#ef4444' },
    { name: 'Transport', value: 300, color: '#f59e0b' },
    { name: 'Entertainment', value: 0, color: '#10b981' },
    { name: 'Shopping', value: 0, color: '#3b82f6' },
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

  const addExpense = (newExpense) => {
    setExpenses([...expenses, { ...newExpense, id: Date.now() }]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Finance Tracker</h1>
              <p className="text-blue-100">Track your expenses with AI-powered insights</p>
            </div>
            <div className="text-right">
              <p className="text-blue-100 text-sm">Today's Balance</p>
              <p className={`text-2xl font-bold ${balance >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                ₹{balance.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-400" />
                Total Income
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-green-400">₹{totalIncome.toLocaleString()}</p>
              <p className="text-sm text-blue-100 mt-1">This month</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingDown className="h-5 w-5 text-red-400" />
                Total Expenses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-red-400">₹{totalExpenses.toLocaleString()}</p>
              <p className="text-sm text-blue-100 mt-1">This month</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Calendar className="h-5 w-5 text-blue-400" />
                Net Balance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className={`text-2xl font-bold ${balance >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                ₹{balance.toLocaleString()}
              </p>
              <p className="text-sm text-blue-100 mt-1">Available funds</p>
            </CardContent>
          </Card>
        </div>

        {/* Expense Input */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Plus className="h-5 w-5" />
              Add New Expense
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ExpenseInput onAddExpense={addExpense} />
          </CardContent>
        </Card>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Category Breakdown */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <ChartPie className="h-5 w-5" />
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
                    <Tooltip formatter={(value) => [`₹${value}`, 'Amount']} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {categoryData.map((category) => (
                  <Badge key={category.name} variant="secondary" className="bg-white/20 text-white">
                    <div 
                      className="w-3 h-3 rounded-full mr-2" 
                      style={{ backgroundColor: category.color }}
                    ></div>
                    {category.name}: ₹{category.value}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Weekly Spending */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Weekly Spending</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={weeklyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                    <XAxis dataKey="day" stroke="#ffffff80" />
                    <YAxis stroke="#ffffff80" />
                    <Tooltip 
                      formatter={(value) => [`₹${value}`, 'Amount']}
                      contentStyle={{ backgroundColor: '#1e3a8a', border: 'none', borderRadius: '8px' }}
                    />
                    <Bar dataKey="amount" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Transactions */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <CardTitle className="text-white">Recent Transactions</CardTitle>
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
