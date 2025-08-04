[![Netlify Status](https://api.netlify.com/api/v1/badges/16ff0f1b-bf15-4c0f-aafc-49befaea4a89/deploy-status)](https://app.netlify.com/projects/varunkothandaraman/deploys)

# Portfolio Website

A modern, responsive portfolio website built with Next.js, styled with shadcn/ui components, and deployed on Netlify.

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) - React framework for production
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) - Beautifully designed components
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Deployment:** [Netlify](https://netlify.com/) - Static site hosting
- **Analytics:** [Google Analytics](https://analytics.google.com/) - Web analytics

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 18 or higher)
- npm or yarn package manager

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory and add your Google Analytics tracking ID:
```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=your-ga-measurement-id
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website in your browser.

## 🎨 Customization

### Adding New Components
This project uses shadcn/ui components. To add new components:

```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
```

### Styling
Components are styled using Tailwind CSS classes. The design system follows shadcn/ui conventions for consistent theming.

## 📊 Analytics Setup

1. Create a Google Analytics 4 property
2. Copy your Measurement ID (format: G-XXXXXXXXXX)
3. Add it to your `.env.local` file
4. The analytics script is automatically included in the Next.js app

## 🚀 Deployment

### Netlify Deployment

1. Connect your repository to Netlify
2. Set the build command: `npm run build`
3. Set the publish directory: `out` (if using static export) or `.next` (for SSR)
4. Add environment variables in Netlify dashboard:
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID`

### Build Commands
```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Static export (for Netlify)
npm run build && npm run export
```

## 📁 Project Structure

```
portfolio-website/
├── components/          # Reusable UI components
├── app/                # Next.js app directory
├── public/             # Static assets
├── styles/             # Global styles
├── lib/                # Utility functions
├── components.json     # shadcn/ui configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── next.config.js      # Next.js configuration
└── package.json        # Dependencies and scripts
```

## 🔧 Configuration Files

- `next.config.js` - Next.js configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `components.json` - shadcn/ui component configuration
- `tsconfig.json` - TypeScript configuration (if using TypeScript)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
