# Deployment Guide

## Quick Start

```bash
npm install
npm start
```

Visit `http://localhost:3000` to see your site.

## Production Build

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## Deployment Options

### 1. Netlify (Recommended - Free)

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repo
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `build`
6. Deploy!

Your site will be live at `https://your-site.netlify.app`

### 2. Vercel (Free)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel auto-detects React settings
5. Deploy!

### 3. GitHub Pages (Free)

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/taxarow",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. Deploy:
```bash
npm run deploy
```

### 4. Traditional Hosting (cPanel, etc.)

1. Build the project:
```bash
npm run build
```

2. Upload contents of `build/` folder to your web host's public directory

3. Configure your domain to point to the uploaded files

## Custom Domain Setup

### Netlify
1. Go to Site settings → Domain management
2. Add custom domain
3. Update DNS records as instructed

### Vercel
1. Go to Project settings → Domains
2. Add your domain
3. Update DNS records

## Environment Variables (Future)

When you add backend features, create `.env` file:

```
REACT_APP_API_URL=your-api-url
REACT_APP_CONTACT_EMAIL=contact@taxarow.com
```

## SEO Checklist Before Launch

- [ ] Update favicon.ico in `public/` folder
- [ ] Add logo images (logo192.png, logo512.png)
- [ ] Set up Google Analytics (optional)
- [ ] Submit sitemap to Google Search Console
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit (aim for 90+ scores)
- [ ] Test page load speed
- [ ] Verify all meta tags are correct

## Post-Deployment

1. **Google Search Console**
   - Add your site
   - Submit sitemap
   - Monitor indexing

2. **Google Analytics** (optional)
   - Create property
   - Add tracking code to `public/index.html`

3. **Performance Monitoring**
   - Use Lighthouse
   - Check Core Web Vitals
   - Monitor loading times

## Troubleshooting

**Issue**: Blank page after deployment
- Check browser console for errors
- Verify `homepage` in package.json matches your URL
- Clear browser cache

**Issue**: Routing not working
- For single-page apps, configure server redirects
- Netlify: Add `_redirects` file with `/* /index.html 200`
- Vercel: Automatically handled

**Issue**: Slow loading
- Optimize images
- Enable compression on server
- Use CDN for assets

---

Need help? Check the [React deployment docs](https://create-react-app.dev/docs/deployment/)
