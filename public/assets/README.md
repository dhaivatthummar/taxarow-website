# Public Assets Folder

This folder contains static assets that are served directly without processing.

## Structure

```
public/assets/
├── images/          # Logo, hero images, backgrounds
│   └── (Add your images here)
├── icons/           # Favicon, app icons
│   └── (Add your icons here)
└── README.md        # This file
```

## Usage

Reference these assets in your HTML or React components using:

### In HTML (public/index.html):
```html
<img src="%PUBLIC_URL%/assets/images/logo.png" alt="Taxarow Logo" />
```

### In React Components:
```jsx
<img src="/assets/images/logo.png" alt="Taxarow Logo" />
```

## Recommended Assets to Add

### Images
- `logo.png` - Main Taxarow logo (transparent background)
- `logo-white.png` - White version for dark backgrounds
- `hero-bg.jpg` - Hero section background (optional)
- `og-image.jpg` - Open Graph image for social sharing (1200x630px)

### Icons
- `favicon.ico` - Browser favicon (32x32px)
- `apple-touch-icon.png` - iOS home screen icon (180x180px)
- `android-chrome-192x192.png` - Android icon (192x192px)
- `android-chrome-512x512.png` - Android icon (512x512px)

## Image Optimization Tips

1. **Compress images** before adding (use TinyPNG, ImageOptim)
2. **Use WebP format** for better compression
3. **Provide multiple sizes** for responsive images
4. **Add alt text** for accessibility
5. **Keep file sizes small** (<200KB for images)

## Current Placeholder Files

Replace these with your actual Taxarow branding:
- `/favicon.ico` - Replace with Taxarow favicon
- `/logo192.png` - Replace with 192x192 logo
- `/logo512.png` - Replace with 512x512 logo
