
import React from 'react';
import { Moon, Sun, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  // Show different navigation based on current page
  const isLandingPage = location.pathname === '/';

  const landingNavItems = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  const appNavItems = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Transactions', path: '/transactions' },
    { name: 'Profile', path: '/profile' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">হি</span>
            </div>
            <h1 className="text-xl font-semibold text-foreground">Hishab</h1>
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 ml-8">
            {isLandingPage ? (
              landingNavItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
                >
                  {item.name}
                </button>
              ))
            ) : (
              appNavItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(item.path)
                      ? 'text-primary border-b-2 border-primary pb-4'
                      : 'text-muted-foreground'
                  }`}
                >
                  {item.name}
                </button>
              ))
            )}
          </nav>
        </div>

        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="w-9 h-9"
          >
            {theme === 'light' ? (
              <Moon className="h-4 w-4" />
            ) : (
              <Sun className="h-4 w-4" />
            )}
          </Button>
          
          {isLandingPage ? (
            <div className="hidden md:flex items-center space-x-2">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/login')}
              >
                Login
              </Button>
              <Button 
                onClick={() => navigate('/signup')}
                className="bg-emerald-600 hover:bg-emerald-700"
              >
                Sign Up
              </Button>
            </div>
          ) : null}
          
          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="w-9 h-9">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <nav className="flex flex-col space-y-4 mt-8">
                  {isLandingPage ? (
                    <>
                      {landingNavItems.map((item) => (
                        <button
                          key={item.href}
                          onClick={() => scrollToSection(item.href)}
                          className="text-left px-4 py-2 rounded-lg transition-colors text-foreground hover:bg-accent"
                        >
                          {item.name}
                        </button>
                      ))}
                      <hr className="my-4" />
                      <Button 
                        variant="ghost" 
                        onClick={() => navigate('/login')}
                        className="justify-start"
                      >
                        Login
                      </Button>
                      <Button 
                        onClick={() => navigate('/signup')}
                        className="bg-emerald-600 hover:bg-emerald-700 justify-start"
                      >
                        Sign Up
                      </Button>
                    </>
                  ) : (
                    appNavItems.map((item) => (
                      <button
                        key={item.path}
                        onClick={() => navigate(item.path)}
                        className={`text-left px-4 py-2 rounded-lg transition-colors ${
                          isActive(item.path)
                            ? 'bg-primary text-primary-foreground'
                            : 'text-foreground hover:bg-accent'
                        }`}
                      >
                        {item.name}
                      </button>
                    ))
                  )}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
