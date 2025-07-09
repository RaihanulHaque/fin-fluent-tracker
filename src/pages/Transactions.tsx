import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Filter,
  TrendingUp,
  TrendingDown,
} from "lucide-react";
import Header from "@/components/discarded/components/Header";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface Transaction {
  id: number;
  description: string;
  amount: number;
  category: string;
  date: Date;
  type: "income" | "expense";
}

const Transactions = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [filterCategory, setFilterCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Sample transactions data
  const allTransactions: Transaction[] = [
    {
      id: 1,
      description: "Lunch at restaurant",
      amount: 120,
      category: "Food",
      date: new Date(2024, 5, 1),
      type: "expense",
    },
    {
      id: 2,
      description: "Uber ride home",
      amount: 300,
      category: "Transport",
      date: new Date(2024, 5, 2),
      type: "expense",
    },
    {
      id: 3,
      description: "Freelance payment",
      amount: 5000,
      category: "Income",
      date: new Date(2024, 5, 3),
      type: "income",
    },
    {
      id: 4,
      description: "Grocery shopping",
      amount: 850,
      category: "Food",
      date: new Date(2024, 5, 5),
      type: "expense",
    },
    {
      id: 5,
      description: "Movie tickets",
      amount: 400,
      category: "Entertainment",
      date: new Date(2024, 5, 7),
      type: "expense",
    },
    {
      id: 6,
      description: "Salary",
      amount: 25000,
      category: "Income",
      date: new Date(2024, 5, 10),
      type: "income",
    },
    {
      id: 7,
      description: "Coffee",
      amount: 80,
      category: "Food",
      date: new Date(2024, 4, 28),
      type: "expense",
    },
    {
      id: 8,
      description: "Bus fare",
      amount: 50,
      category: "Transport",
      date: new Date(2024, 4, 25),
      type: "expense",
    },
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const categories = [
    "all",
    "Food",
    "Transport",
    "Entertainment",
    "Shopping",
    "Income",
    "Bills",
  ];

  // Filter transactions by month, year, and category
  const filteredTransactions = allTransactions.filter((transaction) => {
    const transactionMonth = transaction.date.getMonth();
    const transactionYear = transaction.date.getFullYear();
    const matchesMonth = transactionMonth === selectedMonth;
    const matchesYear = transactionYear === selectedYear;
    const matchesCategory =
      filterCategory === "all" || transaction.category === filterCategory;

    return matchesMonth && matchesYear && matchesCategory;
  });

  // Pagination
  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedTransactions = filteredTransactions.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const totalIncome = filteredTransactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);
  const totalExpenses = filteredTransactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Food: "#10b981",
      Transport: "#f59e0b",
      Entertainment: "#8b5cf6",
      Shopping: "#06b6d4",
      Bills: "#ec4899",
      Income: "#10b981",
      Other: "#6b7280",
    };
    return colors[category] || colors.Other;
  };

  const navigateMonth = (direction: "prev" | "next") => {
    if (direction === "prev") {
      if (selectedMonth === 0) {
        setSelectedMonth(11);
        setSelectedYear(selectedYear - 1);
      } else {
        setSelectedMonth(selectedMonth - 1);
      }
    } else {
      if (selectedMonth === 11) {
        setSelectedMonth(0);
        setSelectedYear(selectedYear + 1);
      } else {
        setSelectedMonth(selectedMonth + 1);
      }
    }
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-6 max-w-6xl">
        <div className="space-y-6">
          {/* Header */}
          <div className="flex flex-col space-y-4">
            <h1 className="text-2xl font-bold text-foreground">
              Transaction History
            </h1>

            {/* Month Navigation */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => navigateMonth("prev")}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-lg font-semibold text-foreground">
                    {months[selectedMonth]} {selectedYear}
                  </span>
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => navigateMonth("next")}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>

              {/* Category Filter */}
              <Select value={filterCategory} onValueChange={setFilterCategory}>
                <SelectTrigger className="w-40">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category === "all" ? "All Categories" : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Monthly Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                    <TrendingUp className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      Income
                    </p>
                    <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                      ৳{totalIncome.toLocaleString()}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
                    <TrendingDown className="h-4 w-4 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      Expenses
                    </p>
                    <p className="text-2xl font-bold text-red-600 dark:text-red-400">
                      ৳{totalExpenses.toLocaleString()}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Calendar className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      Net
                    </p>
                    <p
                      className={`text-2xl font-bold ${
                        totalIncome - totalExpenses >= 0
                          ? "text-emerald-600 dark:text-emerald-400"
                          : "text-red-600 dark:text-red-400"
                      }`}
                    >
                      ৳{(totalIncome - totalExpenses).toLocaleString()}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Transactions List */}
          <Card>
            <CardHeader>
              <CardTitle>
                Transactions ({filteredTransactions.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              {paginatedTransactions.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">
                    No transactions found for this period
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {paginatedTransactions.map((transaction) => (
                    <div
                      key={transaction.id}
                      className="flex items-center justify-between p-4 bg-card border border-border/50 rounded-lg hover:bg-accent/50 transition-colors duration-200"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-2 rounded-full ${
                            transaction.type === "income"
                              ? "bg-emerald-100 dark:bg-emerald-900/30"
                              : "bg-red-100 dark:bg-red-900/30"
                          }`}
                        >
                          {transaction.type === "income" ? (
                            <TrendingUp className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                          ) : (
                            <TrendingDown className="h-4 w-4 text-red-600 dark:text-red-400" />
                          )}
                        </div>
                        <div>
                          <p className="text-foreground font-medium">
                            {transaction.description}
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge
                              variant="secondary"
                              className="text-xs"
                              style={{
                                backgroundColor: `${getCategoryColor(
                                  transaction.category
                                )}20`,
                                color: getCategoryColor(transaction.category),
                                border: `1px solid ${getCategoryColor(
                                  transaction.category
                                )}30`,
                              }}
                            >
                              {transaction.category}
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              {transaction.date.toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="text-right">
                        <p
                          className={`font-bold ${
                            transaction.type === "income"
                              ? "text-emerald-600 dark:text-emerald-400"
                              : "text-red-600 dark:text-red-400"
                          }`}
                        >
                          {transaction.type === "income" ? "+" : "-"}৳
                          {transaction.amount.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-6">
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious
                          onClick={() =>
                            setCurrentPage(Math.max(1, currentPage - 1))
                          }
                          className={
                            currentPage === 1
                              ? "pointer-events-none opacity-50"
                              : "cursor-pointer"
                          }
                        />
                      </PaginationItem>
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                        (page) => (
                          <PaginationItem key={page}>
                            <PaginationLink
                              onClick={() => setCurrentPage(page)}
                              isActive={currentPage === page}
                              className="cursor-pointer"
                            >
                              {page}
                            </PaginationLink>
                          </PaginationItem>
                        )
                      )}
                      <PaginationItem>
                        <PaginationNext
                          onClick={() =>
                            setCurrentPage(
                              Math.min(totalPages, currentPage + 1)
                            )
                          }
                          className={
                            currentPage === totalPages
                              ? "pointer-events-none opacity-50"
                              : "cursor-pointer"
                          }
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
