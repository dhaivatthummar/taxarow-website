# Source Assets Folder

This folder contains assets that are imported and processed by the build system.

## Structure

```
src/assets/
├── images/          # Images imported in components
│   └── (Add your images here)
├── icons/           # SVG icons, icon components
│   └── (Add your icons here)
└── README.md        # This file
```

## Usage

Import these assets in your React components:

### Images:
```jsx
import logo from './assets/images/logo.png';

function Header() {
  return <img src={logo} alt="Taxarow Logo" />;
}
```

### SVG Icons:
```jsx
import { ReactComponent as CheckIcon } from './assets/icons/check.svg';

function Feature() {
  return <CheckIcon className="icon" />;
}
```

## When to Use src/assets vs public/assets

### Use `src/assets/` when:
- Images are imported in components
- You want webpack to process/optimize them
- You need dynamic imports
- File names should have content hashes

### Use `public/assets/` when:
- Files are referenced in HTML
- You need predictable file paths
- Files should not be processed
- External services need direct URLs

## Recommended Assets

### Images
- Component-specific images
- Background patterns
- Decorative graphics
- Team photos (when added)

### Icons
- Custom SVG icons
- Service icons
- Social media icons
- UI elements

## Best Practices

1. **Optimize before adding** - Compress images
2. **Use SVG for icons** - Scalable and small file size
3. **Consistent naming** - Use kebab-case (e.g., `logo-blue.png`)
4. **Organize by type** - Keep images and icons separate
5. **Document usage** - Add comments for complex assets
