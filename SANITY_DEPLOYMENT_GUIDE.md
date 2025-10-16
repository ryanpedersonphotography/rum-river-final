# Sanity + Vite Deployment Guide

## ✅ Already Completed
- ✅ VITE_ prefixed environment variables configured
- ✅ Sanity client using proper Vite env vars
- ✅ netlify.toml with SPA routing
- ✅ Presentation tool for visual editing
- ✅ Content source maps (stega) for development

## 📋 Action Items for You

### 1. Configure CORS in Sanity Dashboard
Go to https://manage.sanity.io and:
1. Select your project (vicw6cgb)
2. Go to **API** → **CORS Origins**
3. Add these origins:
   - `http://localhost:5173` (for local Vite development)
   - `http://localhost:3333` (for local Sanity Studio)
   - `https://rum-river-final.netlify.app` (your Netlify domain)
   - Your custom domain when you set it up

### 2. Deploy Sanity Studio
Run these commands to deploy your Studio to Sanity's hosting:

```bash
# Login to Sanity (opens browser)
npx sanity login

# Deploy the Studio
npx sanity deploy

# Choose a hostname like: rum-river-barn
# Your Studio will be available at: https://rum-river-barn.sanity.studio
```

### 3. Update Netlify Environment Variables
In your Netlify dashboard:
1. Go to **Site settings** → **Environment variables**
2. Add these variables:
   ```
   VITE_SANITY_PROJECT_ID=vicw6cgb
   VITE_SANITY_DATASET=production
   ```
   
### 4. Deploy to Netlify
```bash
# Push your changes
git push origin sanity-migration

# The site will auto-deploy to Netlify
```

## 🎨 Visual Editing Features

### In Sanity Studio (localhost:3333)
- Click the **Presentation** tab to see live preview
- Edit content and see changes instantly
- Click elements on the preview to jump to their fields

### In Development (localhost:5173)
- Content source maps are enabled
- Hovering over content shows edit indicators
- Click-to-edit functionality when Studio is open

## 📝 Quick Reference

### Local Development
```bash
# Terminal 1 - Run Vite (your site)
npm run dev
# Site available at: http://localhost:5173

# Terminal 2 - Run Sanity Studio (optional, for editing)
npx sanity dev
# Studio available at: http://localhost:3333
```

### Production Editing
Once deployed, edit content at:
- **Sanity Studio**: https://your-studio-name.sanity.studio
- **Your Site**: https://rum-river-final.netlify.app

## 🔧 Troubleshooting

### CORS Errors
- Make sure you added all origins in Sanity dashboard
- Check that environment variables are set in Netlify

### Content Not Updating
- CDN has 1-60 second cache delay
- For instant updates during dev, we disabled CDN locally
- Production uses CDN for better performance

### Studio Deploy Issues
- Run `npx sanity login` first
- Make sure you have admin access to the project
- Studio name must be unique across all Sanity projects

## ✨ What You Get

1. **Hosted Studio** at `*.sanity.studio` for editing
2. **Visual Editing** with click-to-edit from live site
3. **Fast CDN** for production content delivery
4. **Real-time preview** in development
5. **SPA routing** working on Netlify

## 🚀 Next Steps

1. Complete the CORS configuration
2. Deploy the Studio with `npx sanity deploy`
3. Push to GitHub to trigger Netlify deployment
4. Share the Studio URL with your client for content editing