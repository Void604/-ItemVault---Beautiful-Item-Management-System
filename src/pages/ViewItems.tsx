import React, { useState } from 'react';
import { Search, Package, Grid, List } from 'lucide-react';
import { useItems } from '../hooks/useItems';
import { Item } from '../types/Item';
import ItemModal from '../components/ItemModal';

const ViewItems = () => {
  const { items } = useItems();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Item Collection</h1>
          <p className="text-slate-400">Discover and explore your items</p>
        </div>

        {/* Search and Controls */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            />
          </div>

          <div className="flex items-center space-x-2">
            <div className="flex bg-slate-800/50 border border-slate-700/50 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-purple-600 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded transition-colors ${
                  viewMode === 'list'
                    ? 'bg-purple-600 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Items Grid/List */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16">
            <Package className="h-16 w-16 text-slate-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-400 mb-2">
              {items.length === 0 ? 'No items yet' : 'No items found'}
            </h3>
            <p className="text-slate-500">
              {items.length === 0
                ? 'Start by adding your first item!'
                : 'Try adjusting your search terms'}
            </p>
          </div>
        ) : (
          <div className={
            viewMode === 'grid'
              ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
              : 'space-y-4'
          }>
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className={`group cursor-pointer bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
              >
                <div className={viewMode === 'list' ? 'w-48 flex-shrink-0' : 'aspect-square'}>
                  <img
                    src={item.coverImage}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800';
                    }}
                  />
                </div>
                
                <div className="p-4 flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-xs bg-purple-600/20 text-purple-300 px-2 py-1 rounded-full font-medium">
                      {item.type}
                    </span>
                  </div>
                  
                  <h3 className="font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {item.name}
                  </h3>
                  
                  {viewMode === 'list' && (
                    <p className="text-slate-400 text-sm line-clamp-2 mb-2">
                      {item.description}
                    </p>
                  )}
                  
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>{item.createdAt.toLocaleDateString()}</span>
                    <span>{item.additionalImages.length + 1} images</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Results Count */}
        {filteredItems.length > 0 && (
          <div className="mt-8 text-center text-slate-400">
            Showing {filteredItems.length} of {items.length} items
          </div>
        )}
      </div>

      {/* Item Modal */}
      {selectedItem && (
        <ItemModal
          item={selectedItem}
          isOpen={!!selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
};

export default ViewItems;