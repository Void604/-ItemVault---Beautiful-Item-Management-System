<h1 align="center">ItemVault - Beautiful Item Management System</h1>
<p align="center">A modern, production-ready item management web application built with <strong>React</strong>, <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong>. Features a stunning dark theme with glass morphism effects and smooth animations.</p>

<p align="center">
  <strong style="font-size:1.25rem;">
    🚀 LIVE DEMO: <a href="https://item-vault.netlify.app/" target="_blank"><b>https://item-vault.netlify.app/</b></a>
  </strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18-blue?logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-4.x-blue?logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/TailwindCSS-3.x-38bdf8?logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-4.x-646cff?logo=vite&logoColor=white" />
</p>

---

## ✨ Features

### Core Functionality

- <b>Add Items</b>: Comprehensive form with item name, type, description, and multiple image uploads
- <b>View Items</b>: Beautiful gallery view with search, filtering, and grid/list toggle
- <b>Item Details</b>: Interactive modal with image carousel and enquiry functionality
- <b>Persistent Storage</b>: Items saved to localStorage for persistence across sessions

### Design & UX

- <b>Dark Theme</b>: Elegant slate color palette with purple/blue accents
- <b>Glass Morphism</b>: Modern translucent components with backdrop blur effects
- <b>Responsive Design</b>: Optimized for all screen sizes (mobile, tablet, desktop)
- <b>Smooth Animations</b>: Micro-interactions and hover effects throughout
- <b>Professional Typography</b>: Clean, readable font hierarchy

### Advanced Features

- <b>Image Carousel</b>: Navigate through multiple product images
- <b>Search & Filter</b>: Real-time search across item name, type, and description
- <b>View Modes</b>: Toggle between grid and list layouts
- <b>Enquiry System</b>: Simulated email sending for customer inquiries
- <b>Success Notifications</b>: User feedback for all actions
- <b>Form Validation</b>: Comprehensive client-side validation

---

## 🚀 Getting Started

### Prerequisites

- <img src="https://img.shields.io/badge/Node.js-v18+-339933?logo=node.js&logoColor=white" /> Node.js (v18 or higher)
- <img src="https://img.shields.io/badge/npm-v9+-CB3837?logo=npm&logoColor=white" /> or <img src="https://img.shields.io/badge/yarn-1.x-2C8EBB?logo=yarn&logoColor=white" /> Yarn

### Installation

```bash
# 1. Clone the repository
git clone <repository-url>
cd itemvault

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Then open your browser at [http://localhost:5173](http://localhost:5173).

#### Building for Production

```bash
npm run build
```
The built files will be in the `dist` folder, ready for deployment.

---

## 🛠️ Tech Stack

| Category      | Technology                          |
|---------------|-------------------------------------|
| Frontend      | ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white) 18, TypeScript |
| Styling       | ![Tailwind CSS](https://img.shields.io/badge/-Tailwind%20CSS-38bdf8?logo=tailwindcss&logoColor=white) |
| Routing       | React Router DOM                    |
| Icons         | Lucide React                        |
| Build Tool    | Vite                                |
| Linting       | ESLint (TypeScript support)         |

---

## 📁 Project Structure

```text
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

---

## 🎨 Design System

**Color Palette**  
- <b>Primary</b>: Slate (900, 800, 700) for backgrounds  
- <b>Accent</b>: Purple (600, 500, 400) and Blue (600, 500, 400)  
- <b>Text</b>: White, Slate (300, 400, 500)  
- <b>Success</b>: Green (400, 500, 600)  
- <b>Error</b>: Red (400, 500, 600)  

**Typography**  
- <b>Headings</b>: 600-700 font weight (semibold-bold)
- <b>Body</b>: 400-500 font weight (normal-medium)
- <b>Captions</b>: 400 font weight, smaller sizes

**Spacing**  
- Consistent 8px base spacing
- Generous padding and margins
- Proper component gap utilities

---

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

- Add new pages in `src/pages/`
- Create reusable components in `src/components/`
- Add new routes in `src/App.tsx`

---

## 🌟 Key Features Explained

**Item Management**
- <b>Local Storage</b>: Items persist across browser sessions
- <b>Image Handling</b>: Cover image + multiple additional images
- <b>Form Validation</b>: User-friendly error messages

**User Experience**
- <b>Responsive Grid</b>: 1 column (mobile) to 4 columns (desktop)
- <b>Search</b>: Real-time filtering across all properties
- <b>Modal Navigation</b>: Smooth modal with blur & esc support

**Performance**
- <b>Optimized Images</b>: Error handling, fallback images
- <b>Efficient Rendering</b>: Minimal re-renders with React patterns
- <b>Fast Navigation</b>: Client-side routing

---

## 📱 Browser Support

| Chrome/Edge | Firefox | Safari | iOS Safari | Android Chrome |
|-------------|---------|--------|------------|---------------|
| 90+         | 88+     | 14+    | 14+        | 90+           |

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 🙏 Acknowledgments

- [Pexels](https://pexels.com) for demo images
- [Lucide React](https://lucide.dev) for icons
- [Tailwind CSS](https://tailwindcss.com) for the design system
- [React](https://react.dev) ecosystem for the foundation

---

## 👤 Author

**Aryan Kashyap**  
📧 aryankashyap7899@gmail.com  
[![GitHub](https://img.shields.io/badge/GitHub-@Void604-181717?logo=github)](https://github.com/Void604)
