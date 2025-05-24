
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, Calendar } from 'lucide-react';

interface Transaction {
  id: number;
  description: string;
  amount: number;
  category: string;
  date: Date;
  type: 'income' | 'expense';
}

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  const getCategoryColor = (category: string) => {
    const colors = {
      Food: '#4ade80',
      Transport: '#f97316',
      Entertainment: '#8b5cf6',
      Shopping: '#06b6d4',
      Bills: '#ec4899',
      Income: '#4ade80',
      Other: '#6b7280'
    };
    return colors[category] || colors.Other;
  };

  return (
    <div className="space-y-3">
      {transactions.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">No transactions yet</p>
          <p className="text-gray-400 text-sm mt-1">Add your first expense above</p>
        </div>
      ) : (
        transactions.slice().reverse().map((transaction) => (
          <div 
            key={transaction.id}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors duration-200"
          >
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-full ${transaction.type === 'income' ? 'bg-green-100' : 'bg-red-100'}`}>
                {transaction.type === 'income' ? (
                  <TrendingUp className="h-4 w-4 text-green-600" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-600" />
                )}
              </div>
              <div>
                <p className="text-gray-900 font-medium">{transaction.description}</p>
                <div className="flex items-center gap-2 mt-1">
                  <Badge 
                    variant="secondary" 
                    className="text-xs bg-gray-100 text-gray-700 border-gray-200"
                    style={{ backgroundColor: `${getCategoryColor(transaction.category)}20`, color: getCategoryColor(transaction.category) }}
                  >
                    {transaction.category}
                  </Badge>
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {transaction.date.toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="text-right">
              <p className={`font-bold ${transaction.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                {transaction.type === 'income' ? '+' : '-'}₹{transaction.amount.toLocaleString()}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TransactionList;
