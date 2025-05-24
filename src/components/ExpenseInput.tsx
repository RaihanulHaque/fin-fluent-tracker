
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, Sparkles } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface ExpenseInputProps {
  onAddExpense: (expense: any) => void;
}

const ExpenseInput: React.FC<ExpenseInputProps> = ({ onAddExpense }) => {
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  // Simple AI-like parser for demo purposes
  const parseExpense = (text: string) => {
    const patterns = [
      // Pattern: "lunch 120, snacks 50"
      /(\w+)\s+(\d+)/gi,
      // Pattern: "spent 200 on food"
      /spent\s+(\d+)\s+on\s+(\w+)/gi,
      // Pattern: "food 150"
      /(\w+)\s+(\d+)/gi
    ];

    const expenses = [];
    const categories = {
      lunch: 'Food', dinner: 'Food', breakfast: 'Food', snacks: 'Food', coffee: 'Food',
      uber: 'Transport', taxi: 'Transport', bus: 'Transport', metro: 'Transport', fuel: 'Transport',
      movie: 'Entertainment', shopping: 'Shopping', groceries: 'Food', rent: 'Bills',
      salary: 'Income', freelance: 'Income', bonus: 'Income'
    };

    let match;
    const regex = /(\w+)\s+(\d+)/gi;
    
    while ((match = regex.exec(text)) !== null) {
      const [, description, amount] = match;
      const category = categories[description.toLowerCase()] || 'Other';
      const type = ['salary', 'freelance', 'bonus', 'income'].includes(description.toLowerCase()) ? 'income' : 'expense';
      
      expenses.push({
        description: description.charAt(0).toUpperCase() + description.slice(1),
        amount: parseInt(amount),
        category,
        type,
        date: new Date()
      });
    }

    return expenses;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsProcessing(true);
    
    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    try {
      const parsedExpenses = parseExpense(input);
      
      if (parsedExpenses.length === 0) {
        toast({
          title: "Couldn't parse expenses",
          description: "Try formats like 'lunch 120' or 'taxi 50, coffee 30'",
          variant: "destructive"
        });
        return;
      }

      parsedExpenses.forEach(expense => onAddExpense(expense));
      
      toast({
        title: `Added ${parsedExpenses.length} transaction(s)`,
        description: "Your expenses have been categorized automatically",
      });
      
      setInput('');
    } catch (error) {
      toast({
        title: "Error processing expense",
        description: "Please try again with a different format",
        variant: "destructive"
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-3">
        <p className="text-blue-100 text-sm mb-2 flex items-center gap-2">
          <Sparkles className="h-4 w-4" />
          AI-Powered Entry
        </p>
        <p className="text-xs text-blue-200">
          Try: "lunch 120, taxi 50" or "salary 20000, groceries 800"
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your expenses naturally..."
          className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-blue-400"
          disabled={isProcessing}
        />
        <Button 
          type="submit" 
          disabled={!input.trim() || isProcessing}
          className="bg-blue-600 hover:bg-blue-700 px-4"
        >
          {isProcessing ? (
            <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
          ) : (
            <Send className="h-4 w-4" />
          )}
        </Button>
      </form>
      
      <div className="text-xs text-blue-200">
        <p>Supported formats:</p>
        <ul className="list-disc list-inside mt-1 space-y-1 text-blue-300">
          <li>"lunch 120, snacks 50" - Multiple expenses</li>
          <li>"salary 25000" - Income tracking</li>
          <li>"uber 300, coffee 80" - Mixed categories</li>
        </ul>
      </div>
    </div>
  );
};

export default ExpenseInput;
