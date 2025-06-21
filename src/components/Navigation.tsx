import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Eye, Plus, Package } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Eye, label: 'View Items' },
    { path: '/add', icon: Plus, label: 'Add Item' }
  ];

  return (
    <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Package className="h-8 w-8 text-purple-400" />
            <span className="text-xl font-bold text-white">ItemVault</span>
          </div>
          
          <div className="flex space-x-1">
            {navItems.map(({ path, icon: Icon, label }) => {
              const isActive = location.pathname === path;
              return (
                <Link
                  key={path}
                  to={path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/25'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="font-medium">{label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;