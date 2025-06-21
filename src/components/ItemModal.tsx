import React, { useState } from 'react';
import { X, Mail, Calendar, Tag, FileText, Loader2 } from 'lucide-react';
import { Item } from '../types/Item';
import ImageCarousel from './ImageCarousel';
import { simulateEmailSend } from '../utils/api';

interface ItemModalProps {
  item: Item;
  isOpen: boolean;
  onClose: () => void;
}

const ItemModal: React.FC<ItemModalProps> = ({ item, isOpen, onClose }) => {
  const [isEnquiring, setIsEnquiring] = useState(false);
  const [enquiryStatus, setEnquiryStatus] = useState<'idle' | 'success' | 'error'>('idle');

  if (!isOpen) return null;

  const handleEnquire = async () => {
    setIsEnquiring(true);
    setEnquiryStatus('idle');
    
    try {
      await simulateEmailSend(item.name);
      setEnquiryStatus('success');
    } catch (error) {
      setEnquiryStatus('error');
    } finally {
      setIsEnquiring(false);
      
      // Auto-hide success/error message after 3 seconds
      setTimeout(() => {
        setEnquiryStatus('idle');
      }, 3000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
          onClick={onClose}
        />
        
        <div className="relative bg-slate-900/95 backdrop-blur-sm border border-slate-700/50 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50 p-6 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-white">{item.name}</h2>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="p-6">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <ImageCarousel 
                  images={[item.coverImage, ...item.additionalImages]} 
                  alt={item.name} 
                />
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-2 text-sm text-slate-400">
                  <Tag className="h-4 w-4" />
                  <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full font-medium">
                    {item.type}
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <FileText className="h-4 w-4 text-slate-400" />
                      <h3 className="font-semibold text-white">Description</h3>
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex items-center space-x-2 text-sm text-slate-400">
                    <Calendar className="h-4 w-4" />
                    <span>Added on {item.createdAt.toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-700/50">
                  <button
                    onClick={handleEnquire}
                    disabled={isEnquiring}
                    className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-slate-600 disabled:to-slate-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
                  >
                    {isEnquiring ? (
                      <Loader2 className="h-5 w-5 animate-spin" />
                    ) : (
                      <Mail className="h-5 w-5" />
                    )}
                    <span>
                      {isEnquiring ? 'Sending Enquiry...' : 'Enquire Now'}
                    </span>
                  </button>

                  {enquiryStatus === 'success' && (
                    <div className="mt-3 p-3 bg-green-600/20 border border-green-600/30 rounded-lg text-green-300 text-sm">
                      ✅ Enquiry sent successfully! We'll get back to you soon.
                    </div>
                  )}

                  {enquiryStatus === 'error' && (
                    <div className="mt-3 p-3 bg-red-600/20 border border-red-600/30 rounded-lg text-red-300 text-sm">
                      ❌ Failed to send enquiry. Please try again.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;