# OLIVA Refrigeration - Modern Website

A sleek, modern website for OLIVA Refrigeration featuring animated UI components and interactive elements inspired by React Bits. Built with Next.js, React, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Modern Design**: Professional aesthetic with cool tones (blues and whites) reflecting the refrigeration theme
- **Animated Components**: Smooth animations and interactive elements inspired by React Bits
- **Responsive Design**: Fully responsive across all devices and screen sizes
- **Performance Optimized**: Built with Next.js for optimal performance and SEO
- **Accessibility**: WCAG compliant with proper semantic HTML and keyboard navigation
- **Interactive Elements**: 
  - Floating cards with hover effects
  - Animated text components
  - Glowing buttons with hover animations
  - Smooth scroll animations
  - Interactive contact form

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Optimized for Vercel deployment

## 🎨 Design System

### Colors
- **Primary**: Cool blues (#0ea5e9 to #0c4a6e)
- **Ice**: Neutral grays (#f8fafc to #0f172a)
- **Frost**: Cyan accents (#f0fdff to #164e63)

### Components
- **AnimatedText**: Text animations with typewriter, fade-in, and slide-up effects
- **FloatingCard**: Cards with floating animations and hover effects
- **GlowButton**: Buttons with glow effects and smooth interactions
- **Header**: Sticky navigation with scroll effects
- **Hero**: Dynamic hero section with animated background elements
- **Services**: Interactive service cards with staggered animations
- **Contact**: Animated contact form with validation
- **Footer**: Professional footer with company information

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd oliva-refrigeration-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
├── components/
│   ├── ui/
│   │   ├── AnimatedText.tsx # Animated text component
│   │   ├── FloatingCard.tsx # Floating card component
│   │   └── GlowButton.tsx   # Glowing button component
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section
│   ├── Services.tsx         # Services section
│   ├── Contact.tsx          # Contact section
│   └── Footer.tsx           # Footer component
├── public/                  # Static assets
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## 🎯 Key Sections

### Header
- Sticky navigation with scroll effects
- Mobile-responsive hamburger menu
- Animated logo with rotating snowflake
- Call-to-action buttons

### Hero
- Dynamic animated background
- Typewriter text effects
- Floating service cards
- Scroll indicator animation

### Services
- Interactive service cards
- Staggered animations
- Hover effects with icon rotations
- Emergency service call-to-action

### Contact
- Animated contact form
- Form validation
- Contact information cards
- Customer testimonial

### Footer
- Company information
- Service links
- Contact details
- Social proof (Google rating)

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with each push

### Manual Deployment
1. Build the project: `npm run build`
2. Upload the `.next` folder and other necessary files to your hosting provider
3. Ensure Node.js is available on your server
4. Run `npm start` to serve the application

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Color contrast compliance
- Screen reader friendly
- Focus management

## 🔧 Customization

### Colors
Edit `tailwind.config.js` to modify the color scheme:
```javascript
colors: {
  primary: { /* Your primary colors */ },
  ice: { /* Your neutral colors */ },
  frost: { /* Your accent colors */ }
}
```

### Animations
Modify animation settings in `tailwind.config.js` or component files using Framer Motion.

### Content
Update content in component files:
- Company information in `Hero.tsx` and `Footer.tsx`
- Services in `Services.tsx`
- Contact information in `Contact.tsx` and `Header.tsx`

## 📞 Contact Information

- **Phone**: (239) 692-4880
- **Service Area**: Southwest Florida
- **License**: CAC1820421
- **Rating**: 4.9 Stars on Google

## 📄 License

This project is created for OLIVA Refrigeration. All rights reserved.

---

*"It's Cool to keep stuff cold."* - OLIVA Refrigeration 