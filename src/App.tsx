import { Toaster } from "@/components/ui/toaster";
import { useTranslation } from "react-i18next";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Landing from "./pages/Landing";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Transactions from "./pages/Transactions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AccountDeletion from "./pages/AccountDeletion";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/landing" element={<Landing />} />
                {/* <Route path="/dashboard" element={<Index />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/transactions" element={<Transactions />} /> */}
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/account-deletion" element={<AccountDeletion />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
