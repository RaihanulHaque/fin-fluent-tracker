
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface CategoryCardProps {
  name: string;
  amount: number;
  color: string;
  percentage?: number;
  trend?: 'up' | 'down';
}

const CategoryCard: React.FC<CategoryCardProps> = ({ 
  name, 
  amount, 
  color, 
  percentage, 
  trend 
}) => {
  return (
    <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-200">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div 
              className="w-4 h-4 rounded-full" 
              style={{ backgroundColor: color }}
            />
            <h3 className="text-white font-medium">{name}</h3>
          </div>
          {trend && (
            <div className={`flex items-center gap-1 ${trend === 'up' ? 'text-red-400' : 'text-green-400'}`}>
              {trend === 'up' ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
              {percentage && <span className="text-xs">{percentage}%</span>}
            </div>
          )}
        </div>
        
        <div className="space-y-2">
          <p className="text-2xl font-bold text-white">₹{amount.toLocaleString()}</p>
          <div className="w-full bg-white/20 rounded-full h-2">
            <div 
              className="h-2 rounded-full transition-all duration-300"
              style={{ 
                width: `${Math.min((amount / 5000) * 100, 100)}%`, 
                backgroundColor: color 
              }}
            />
          </div>
          <p className="text-xs text-blue-200">Budget: ₹5,000</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
