# 🏠 Local Admin Workflow

Edit content locally → Auto-sync to Contentful → Website updates automatically!

## 📁 Directory Structure

```
local-admin/
├── content/
│   └── homepage.json      # All homepage text content
├── images/
│   ├── barn-interior.jpg  # Feature block 1 image
│   ├── property-field.jpg # Feature block 2 image
│   └── wedding-celebration.jpg # Experience section image
├── exports/               # Contentful exports (backups)
└── .sync-cache.json      # Tracks what's been synced (auto-generated)
```

## 🚀 Quick Start

### 1. Edit Content Locally

```bash
# Open homepage content in VS Code
npm run admin:edit

# Or manually edit
code local-admin/content/homepage.json
```

### 2. Sync to Contentful

```bash
# One-time sync
npm run admin:sync

# Watch mode (auto-sync on file changes)
npm run admin:watch
```

## 📝 How to Edit Content

### Text Changes
1. Open `local-admin/content/homepage.json`
2. Edit any text field
3. Save the file
4. Run `npm run admin:sync` (or have watch mode running)
5. Changes appear in Contentful instantly
6. Refresh website to see updates

### Image Changes
1. Add new image to `local-admin/images/`
2. Update the `imageFile` field in homepage.json to match filename
3. Run sync
4. Image uploads to Contentful and links automatically

**Supported image fields:**
- `featureBlocks.blocks[].imageFile` - Feature block images
- `experience.imageFile` - Experience section image
- `hero.backgroundImage` - Hero background (optional)

## 🎯 Workflow Examples

### Example 1: Update Hero Title
```json
{
  "hero": {
    "titleLine1": "Welcome to",
    "titleLine2": "Rum River Barn"
  }
}
```

### Example 2: Add New Testimonial
```json
{
  "testimonials": {
    "items": [
      // ... existing testimonials
      {
        "quote": "Amazing venue!",
        "authorName": "New Couple",
        "authorDetail": "Married November 2024"
      }
    ]
  }
}
```

### Example 3: Replace Feature Image
1. Copy new image: `cp ~/Desktop/new-barn.jpg local-admin/images/barn-interior.jpg`
2. Run: `npm run admin:sync`
3. Done! Image updates everywhere

## 🔄 Commands

| Command | Description |
|---------|-------------|
| `npm run admin:edit` | Open content file in VS Code |
| `npm run admin:sync` | Push changes to Contentful |
| `npm run admin:watch` | Auto-sync on file changes |

## ⚡ Watch Mode

Start watch mode and leave it running:
```bash
npm run admin:watch
```

Now any time you save:
- `homepage.json` - Content syncs
- Images in `/images` - Auto-upload

## 🎨 What's Editable

### Hero Section
- Script accent text
- Title (both lines)
- Description
- CTA button text and link

### Feature Blocks
- All text content
- Images (via image files)
- Order (reorder in JSON)

### Experience Section
- Title and description
- Feature items
- Section image

### Testimonials
- Add/edit/remove testimonials
- No limit on number

## 📸 Image Management

### Supported Images
- `barn-interior.jpg` - Feature block 1
- `property-field.jpg` - Feature block 2  
- `wedding-celebration.jpg` - Experience section

### Add New Image
1. Save image to `local-admin/images/`
2. Reference in JSON: `"imageFile": "your-image.jpg"`
3. Sync runs, image uploads

### Image Best Practices
- Keep under 2MB for faster uploads
- Use descriptive filenames
- JPG format preferred
- 1600x1000px recommended

## 🔒 Version Control

### What to Commit
✅ `local-admin/content/` - Your content
✅ `local-admin/images/` - Your images
❌ `.sync-cache.json` - Auto-generated (gitignored)

### Backup Strategy
```bash
# Export from Contentful as backup
contentful space export --space-id qqjgd2e69j47 --export-dir ./local-admin/exports
```

## 🐛 Troubleshooting

### Content Not Updating?
1. Check sync output for errors
2. Verify Contentful is reachable
3. Clear cache: `rm local-admin/.sync-cache.json`
4. Re-run sync

### Image Not Uploading?
1. Check image exists in `local-admin/images/`
2. Verify filename matches in JSON
3. Check file size (< 50MB)

### Watch Mode Not Working?
1. Stop with Ctrl+C
2. Clear cache
3. Restart: `npm run admin:watch`

## 💡 Pro Tips

1. **Keep watch mode running** during content editing sessions
2. **Test locally first** - Edit JSON, preview on localhost:3000
3. **Commit often** - Your local files are the source of truth
4. **Use meaningful commits** - "Updated hero title" not "changes"

## 🚦 Status Indicators

When running sync:
- `✅` Success
- `📤` Uploading
- `✓` No changes needed
- `❌` Error (check message)

## 🎯 Complete Workflow

1. **Start dev server**: `npm run dev`
2. **Start watch mode**: `npm run admin:watch` (new terminal)
3. **Edit content**: Make changes to JSON
4. **Preview locally**: Check localhost:3000
5. **Commit changes**: `git add -A && git commit -m "Updated content"`
6. **Deploy**: Changes already in Contentful!

---

**Remember**: Local files are the source of truth. Contentful is just the delivery mechanism!