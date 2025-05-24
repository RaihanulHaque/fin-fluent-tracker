
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
      Food: '#ef4444',
      Transport: '#f59e0b',
      Entertainment: '#10b981',
      Shopping: '#3b82f6',
      Bills: '#8b5cf6',
      Income: '#10b981',
      Other: '#6b7280'
    };
    return colors[category] || colors.Other;
  };

  return (
    <div className="space-y-3">
      {transactions.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-white/60">No transactions yet</p>
          <p className="text-white/40 text-sm mt-1">Add your first expense above</p>
        </div>
      ) : (
        transactions.slice().reverse().map((transaction) => (
          <div 
            key={transaction.id}
            className="flex items-center justify-between p-4 bg-white/10 rounded-lg border border-white/20 hover:bg-white/15 transition-all duration-200"
          >
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-full ${transaction.type === 'income' ? 'bg-green-500/20' : 'bg-red-500/20'}`}>
                {transaction.type === 'income' ? (
                  <TrendingUp className="h-4 w-4 text-green-400" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-400" />
                )}
              </div>
              <div>
                <p className="text-white font-medium">{transaction.description}</p>
                <div className="flex items-center gap-2 mt-1">
                  <Badge 
                    variant="secondary" 
                    className="text-xs bg-white/20 text-white border-none"
                    style={{ backgroundColor: `${getCategoryColor(transaction.category)}20` }}
                  >
                    {transaction.category}
                  </Badge>
                  <span className="text-xs text-blue-200 flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {transaction.date.toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="text-right">
              <p className={`font-bold ${transaction.type === 'income' ? 'text-green-400' : 'text-red-400'}`}>
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
