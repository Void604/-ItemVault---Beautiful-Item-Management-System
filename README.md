# ItemVault - Beautiful Item Management System

A modern, production-ready item management web application built with React, TypeScript, and Tailwind CSS. Features a stunning dark theme with glass morphism effects and smooth animations.

## ✨ Features

### Core Functionality
- **Add Items**: Comprehensive form with item name, type, description, and multiple image uploads
- **View Items**: Beautiful gallery view with search, filtering, and grid/list toggle
- **Item Details**: Interactive modal with image carousel and enquiry functionality
- **Persistent Storage**: Items saved to localStorage for persistence across sessions

### Design & UX
- **Dark Theme**: Elegant slate color palette with purple/blue accents
- **Glass Morphism**: Modern translucent components with backdrop blur effects
- **Responsive Design**: Optimized for all screen sizes (mobile, tablet, desktop)
- **Smooth Animations**: Micro-interactions and hover effects throughout
- **Professional Typography**: Clean, readable font hierarchy

### Advanced Features
- **Image Carousel**: Navigate through multiple product images
- **Search & Filter**: Real-time search across item name, type, and description
- **View Modes**: Toggle between grid and list layouts
- **Enquiry System**: Simulated email sending for customer inquiries
- **Success Notifications**: User feedback for all actions
- **Form Validation**: Comprehensive client-side validation

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd itemvault
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` folder, ready for deployment.

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Linting**: ESLint with TypeScript support

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navigation.tsx   # Main navigation bar
│   ├── ItemModal.tsx    # Item detail modal with carousel
│   └── ImageCarousel.tsx # Image carousel component
├── pages/              # Page components
│   ├── ViewItems.tsx   # Items gallery page
│   └── AddItem.tsx     # Add new item form
├── hooks/              # Custom React hooks
│   └── useItems.ts     # Items management hook
├── types/              # TypeScript type definitions
│   └── Item.ts         # Item interface and types
├── utils/              # Utility functions
│   └── api.ts          # Simulated API calls
└── App.tsx             # Main app component with routing
```

## 🎨 Design System

### Color Palette
- **Primary**: Slate (900, 800, 700) for backgrounds
- **Accent**: Purple (600, 500, 400) and Blue (600, 500, 400)
- **Text**: White, Slate (300, 400, 500)
- **Success**: Green (400, 500, 600)
- **Error**: Red (400, 500, 600)

### Typography
- **Headings**: Font weights 600-700 (semibold-bold)
- **Body**: Font weight 400-500 (normal-medium)
- **Captions**: Font weight 400 with smaller sizes

### Spacing
- Consistent 8px base spacing system
- Generous padding and margins for readability
- Proper component spacing with gap utilities

## 🔧 Customization

### Adding New Item Types
Edit `src/types/Item.ts` and add new types to the `ITEM_TYPES` array:

```typescript
export const ITEM_TYPES: ItemType[] = [
  'Shirt',
  'Pant', 
  'Shoes',
  'Sports Gear',
  'Accessories',
  'Electronics',
  'Your New Type', // Add here
  'Other'
];
```

### Modifying Colors
Update the Tailwind config or use CSS custom properties for easy theme customization.

### Adding New Features
The modular architecture makes it easy to add new features:
- Add new pages in `src/pages/`
- Create reusable components in `src/components/`
- Add new routes in `src/App.tsx`

## 🌟 Key Features Explained

### Item Management
- **Local Storage**: Items persist across browser sessions
- **Image Handling**: Support for cover image + multiple additional images
- **Form Validation**: Comprehensive validation with user-friendly error messages

### User Experience
- **Responsive Grid**: Adapts from 1 column (mobile) to 4 columns (desktop)
- **Search**: Real-time filtering across all item properties
- **Modal Navigation**: Smooth modal with backdrop blur and escape key support

### Performance
- **Optimized Images**: Proper error handling and fallback images
- **Efficient Rendering**: Minimal re-renders with proper React patterns
- **Fast Navigation**: Client-side routing with React Router

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- iOS Safari 14+
- Android Chrome 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Images from Pexels for demo content
- Lucide React for beautiful icons
- Tailwind CSS for the design system
- React ecosystem for the solid foundation

---

Built with ❤️ for modern web experiences