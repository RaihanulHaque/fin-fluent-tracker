
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
      Food: '#10b981',
      Transport: '#f59e0b',
      Entertainment: '#8b5cf6',
      Shopping: '#06b6d4',
      Bills: '#ec4899',
      Income: '#10b981',
      Other: '#6b7280'
    };
    return colors[category] || colors.Other;
  };

  return (
    <div className="space-y-3">
      {transactions.length === 0 ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
            <TrendingUp className="h-8 w-8 text-muted-foreground" />
          </div>
          <p className="text-muted-foreground text-lg">No transactions yet</p>
          <p className="text-muted-foreground/70 text-sm mt-1">Add your first entry above to get started</p>
        </div>
      ) : (
        transactions.slice().reverse().map((transaction) => (
          <div 
            key={transaction.id}
            className="flex items-center justify-between p-4 bg-card border border-border/50 rounded-lg hover:bg-accent/50 transition-colors duration-200"
          >
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-full ${transaction.type === 'income' ? 'bg-emerald-100 dark:bg-emerald-900/30' : 'bg-red-100 dark:bg-red-900/30'}`}>
                {transaction.type === 'income' ? (
                  <TrendingUp className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-600 dark:text-red-400" />
                )}
              </div>
              <div>
                <p className="text-foreground font-medium">{transaction.description}</p>
                <div className="flex items-center gap-2 mt-1">
                  <Badge 
                    variant="secondary" 
                    className="text-xs"
                    style={{ 
                      backgroundColor: `${getCategoryColor(transaction.category)}20`, 
                      color: getCategoryColor(transaction.category),
                      border: `1px solid ${getCategoryColor(transaction.category)}30`
                    }}
                  >
                    {transaction.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {transaction.date.toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="text-right">
              <p className={`font-bold ${transaction.type === 'income' ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}`}>
                {transaction.type === 'income' ? '+' : '-'}৳{transaction.amount.toLocaleString()}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TransactionList;
