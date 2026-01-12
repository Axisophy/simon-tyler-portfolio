# Font Setup Guide

The site is configured to use two fonts:

## 1. Neue Haas Grotesk
- **Display/Text**: The primary typeface
- **Weights needed**: 
  - Roman (400)
  - Medium (500)  
  - Bold (700)

## 2. Input Mono
- **Technical/Code**: For coordinates, metadata, labels
- **Weight needed**: Regular (400)

## Where to Get Fonts

### Option A: Purchase Official Fonts
- **Neue Haas Grotesk**: Available from Lineto.com or MyFonts
- **Input Mono**: Available from Font Bureau / DJR (input.djr.com)

### Option B: Use Free Alternatives (Temporary)
Update `app/layout.tsx` to use Google Fonts:

```typescript
import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-neue-haas",
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-input-mono",
});
```

Then update className in RootLayout:
```typescript
<html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
```

### Option C: Use System Fonts (No Setup Needed)
The site already has fallbacks configured. It will use system fonts automatically if the font files aren't present.

## Adding Your Own Fonts

1. Place font files in `public/fonts/`:
   ```
   public/fonts/
   ├── NeueHaasDisplay-Roman.woff2
   ├── NeueHaasDisplay-Medium.woff2
   ├── NeueHaasDisplay-Bold.woff2
   └── InputMono-Regular.woff2
   ```

2. The fonts are already configured in `app/layout.tsx`

3. That's it! The site will automatically use them.

## WOFF2 Format
Use WOFF2 format for best compression and browser support. You can convert TTF/OTF files to WOFF2 using:
- Online: cloudconvert.com
- CLI: woff2_compress (if you have it installed)

## Current Status
The site will work with system font fallbacks until you add the font files.
