import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, X, Plus, CheckCircle, Loader2, Image as ImageIcon } from 'lucide-react';
import { useItems } from '../hooks/useItems';
import { ITEM_TYPES } from '../types/Item';
import { simulateItemUpload } from '../utils/api';

const AddItem = () => {
  const navigate = useNavigate();
  const { addItem } = useItems();
  
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    description: '',
    coverImage: '',
    additionalImages: [] as string[]
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, type: 'cover' | 'additional') => {
    const files = e.target.files;
    if (!files) return;

    // Simulate image upload by creating URLs
    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageUrl = event.target?.result as string;
        
        if (type === 'cover') {
          setFormData(prev => ({ ...prev, coverImage: imageUrl }));
        } else {
          setFormData(prev => ({
            ...prev,
            additionalImages: [...prev.additionalImages, imageUrl]
          }));
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const removeAdditionalImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      additionalImages: prev.additionalImages.filter((_, i) => i !== index)
    }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Item name is required';
    }
    
    if (!formData.type) {
      newErrors.type = 'Item type is required';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'Item description is required';
    }
    
    if (!formData.coverImage) {
      newErrors.coverImage = 'Cover image is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API upload
      await simulateItemUpload(formData);
      
      // Add item to local state
      addItem(formData);
      
      // Show success message
      setShowSuccess(true);
      
      // Reset form
      setFormData({
        name: '',
        type: '',
        description: '',
        coverImage: '',
        additionalImages: []
      });

      // Hide success message and redirect after 2 seconds
      setTimeout(() => {
        setShowSuccess(false);
        navigate('/');
      }, 2000);
      
    } catch (error) {
      console.error('Error adding item:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 max-w-md w-full mx-4 text-center">
          <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">Success!</h2>
          <p className="text-slate-400 mb-4">Item successfully added to your collection.</p>
          <div className="flex items-center justify-center text-slate-400">
            <Loader2 className="h-4 w-4 animate-spin mr-2" />
            <span>Redirecting to view items...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Add New Item</h1>
          <p className="text-slate-400">Fill in the details to add a new item to your collection</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-white mb-6">Basic Information</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Item Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-slate-900/50 border rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ${
                    errors.name ? 'border-red-500' : 'border-slate-600'
                  }`}
                  placeholder="Enter item name"
                />
                {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Item Type *
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-slate-900/50 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ${
                    errors.type ? 'border-red-500' : 'border-slate-600'
                  }`}
                >
                  <option value="">Select item type</option>
                  {ITEM_TYPES.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                {errors.type && <p className="mt-1 text-sm text-red-400">{errors.type}</p>}
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Item Description *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={4}
                className={`w-full px-4 py-3 bg-slate-900/50 border rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none ${
                  errors.description ? 'border-red-500' : 'border-slate-600'
                }`}
                placeholder="Describe your item in detail"
              />
              {errors.description && <p className="mt-1 text-sm text-red-400">{errors.description}</p>}
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-white mb-6">Images</h2>
            
            {/* Cover Image */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-slate-300 mb-4">
                Cover Image * <span className="text-slate-500">(Main display image)</span>
              </label>
              
              {!formData.coverImage ? (
                <label className={`block w-full border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                  errors.coverImage ? 'border-red-500 bg-red-500/5' : 'border-slate-600 hover:border-purple-500 hover:bg-purple-500/5'
                }`}>
                  <Upload className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                  <span className="text-lg font-medium text-slate-300">Upload Cover Image</span>
                  <p className="text-slate-500 mt-2">Click to browse or drag and drop</p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, 'cover')}
                    className="hidden"
                  />
                </label>
              ) : (
                <div className="relative inline-block">
                  <img
                    src={formData.coverImage}
                    alt="Cover preview"
                    className="w-48 h-48 object-cover rounded-lg border border-slate-600"
                  />
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, coverImage: '' }))}
                    className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1 transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              )}
              {errors.coverImage && <p className="mt-2 text-sm text-red-400">{errors.coverImage}</p>}
            </div>

            {/* Additional Images */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-4">
                Additional Images <span className="text-slate-500">(Optional)</span>
              </label>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-4">
                {formData.additionalImages.map((image, index) => (
                  <div key={index} className="relative">
                    <img
                      src={image}
                      alt={`Additional ${index + 1}`}
                      className="w-full aspect-square object-cover rounded-lg border border-slate-600"
                    />
                    <button
                      type="button"
                      onClick={() => removeAdditionalImage(index)}
                      className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1 transition-colors"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
                
                <label className="aspect-square border-2 border-dashed border-slate-600 hover:border-purple-500 rounded-lg flex flex-col items-center justify-center cursor-pointer transition-colors hover:bg-purple-500/5">
                  <Plus className="h-8 w-8 text-slate-400 mb-2" />
                  <span className="text-sm text-slate-400">Add Image</span>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={(e) => handleImageUpload(e, 'additional')}
                    className="hidden"
                  />
                </label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="px-6 py-3 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-800/50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-slate-600 disabled:to-slate-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <Plus className="h-5 w-5" />
              )}
              <span>{isSubmitting ? 'Adding Item...' : 'Add Item'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItem;