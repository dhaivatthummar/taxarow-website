# Quick Start Guide - Taxarow Website

## 🚀 Get Started in 2 Minutes

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm start
```

Your site will open at `http://localhost:3000`

## ✅ What You Get

- **Fully responsive** mobile-first design
- **SEO optimized** with all meta tags, Schema markup
- **Fast loading** with optimized CSS and fonts
- **Accessible** WCAG compliant
- **Professional design** with subtle animations
- **Ready to expand** modular code structure

## 📱 Test on Mobile

1. Start the dev server (`npm start`)
2. Find your local IP (run `ipconfig` or `ifconfig`)
3. On your phone, visit `http://YOUR_IP:3000`

## 🎨 Customization

### Change Colors
Edit `src/App.css` - look for `:root` variables:
```css
--primary-blue: #1e40af;
--primary-dark: #1e3a8a;
--accent-blue: #3b82f6;
```

### Update Content
Edit `src/App.js` - all text is in the JSX

### Add Images
1. Add images to `public/` folder
2. Reference as `<img src="/your-image.jpg" alt="description" />`

## 🔍 SEO Features Included

✅ Meta title & description  
✅ Open Graph tags (Facebook, LinkedIn)  
✅ Twitter Card tags  
✅ Schema.org markup (ProfessionalService)  
✅ Semantic HTML (H1, H2, H3 hierarchy)  
✅ Alt tags for accessibility  
✅ robots.txt configured  
✅ manifest.json for PWA  

## 📊 Performance

Run Lighthouse audit in Chrome DevTools:
1. Open site in Chrome
2. Press F12 → Lighthouse tab
3. Click "Generate report"

Expected scores: 90+ across all categories

## 🌐 Deploy (Choose One)

### Netlify (Easiest)
```bash
npm run build
```
Drag the `build` folder to [netlify.com/drop](https://app.netlify.com/drop)

### Vercel
```bash
npm install -g vercel
vercel
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
```
Add to package.json scripts:
```json
"deploy": "gh-pages -d build"
```
Then: `npm run deploy`

## 📝 Next Steps

1. Replace placeholder favicon and logos in `public/`
2. Test on real mobile devices
3. Run Lighthouse audit
4. Deploy to hosting
5. Submit to Google Search Console
6. Set up Google Analytics (optional)

## 🆘 Need Help?

- Check `README.md` for full documentation
- Check `DEPLOYMENT.md` for deployment guides
- React docs: [reactjs.org](https://reactjs.org)

---

**You're all set!** 🎉 Your professional Taxarow website is ready to launch.
