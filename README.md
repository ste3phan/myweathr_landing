# myweathr.io Landing Page

A modern, responsive landing page for myweathr.io - the smart weather companion for cyclists and outdoor athletes.

## Features

- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- 🎨 **Modern Design** - Clean, professional UI with Tailwind CSS
- 📧 **Newsletter Signup** - Email collection with double opt-in
- ⚡ **Fast & Lightweight** - Built with Next.js for optimal performance
- 🔒 **Privacy-First** - GDPR-compliant with clear privacy policy

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Language**: JavaScript/React

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Supabase

Follow the detailed guide in `SUPABASE_SETUP.md` to:
1. Create a Supabase project
2. Run the SQL setup script
3. Get your API keys

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
myweathr.io_landing/
├── pages/
│   ├── api/
│   │   └── newsletter.js    # Newsletter API endpoint
│   ├── _app.js              # App wrapper
│   ├── index.js             # Landing page
│   ├── privacy.js           # Privacy policy
│   └── terms.js             # Terms of service
├── styles/
│   └── globals.css          # Global styles
├── public/                  # Static assets
├── package.json
└── README.md
```

## Newsletter Integration

The newsletter uses **Supabase** to store subscriber emails. See `SUPABASE_SETUP.md` for detailed setup instructions.

### Features

- ✅ Email validation
- ✅ Duplicate prevention
- ✅ Timestamp tracking
- ✅ Status management (pending/confirmed/unsubscribed)
- ✅ Row Level Security (RLS)

### Database Schema

Subscribers are stored in the `newsletter_subscribers` table with:
- Email (unique, lowercase)
- Status (pending/confirmed/unsubscribed)
- Timestamps (subscribed_at, confirmed_at, etc.)

## Customization

### Colors

Edit the color scheme in `tailwind.config.js` or directly in components using Tailwind classes.

### Content

- **Hero Section**: Edit text in `pages/index.js`
- **App Preview**: Replace placeholder with actual screenshot in `public/` folder
- **Logo**: The logo is at `public/logo.svg`

### SEO

Update meta tags in the `<Head>` component in each page.

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Deploy the .next folder
```

### Uberspace

```bash
npm run build
# Copy .next, public, package.json to your Uberspace
# Run: npm install --production && npm start
```

## License

© 2025 myweathr.io - All rights reserved

## Support

For questions or issues, contact: support@myweathr.io
