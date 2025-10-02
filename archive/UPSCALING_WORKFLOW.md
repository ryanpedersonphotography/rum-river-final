# Wedding Images Upscaling Workflow

## Priority Processing Order

### **PRIORITY 1: Critical Low Resolution (316px images)**
**Process these first - extremely poor quality:**

1. **anthony-and-linnea/** 
   - 86 images at 316x237 pixels (14-58KB)
   - Source: `/Users/ryanpederson/Dev/websites/rum-river-final/public/wedding-photos/anthony-and-linnea/`
   - Target: 4x upscale → ~1264x948 pixels

2. **loria-and-jason-rolstad-agape/**
   - 96 images at 316x237/316x474 pixels (14-108KB)
   - Source: `/Users/ryanpederson/Dev/websites/rum-river-final/public/wedding-photos/loria-and-jason-rolstad-agape/`
   - Target: 4x upscale → ~1264x948/1264x1896 pixels

3. **reins-wedding/**
   - 32 images at 316x210/316x421 pixels (15-86KB)
   - Source: `/Users/ryanpederson/Dev/websites/rum-river-final/public/wedding-photos/reins-wedding/`
   - Target: 4x upscale → ~1264x840/1264x1684 pixels

4. **emily-and-barron-nixon/**
   - 36 images at 316x316/316x421 pixels (25-66KB)
   - Source: `/Users/ryanpederson/Dev/websites/rum-river-final/public/wedding-photos/emily-and-barron-nixon/`
   - Target: 4x upscale → ~1264x1264/1264x1684 pixels

### **PRIORITY 2: Medium Low Resolution (1024px images)**

5. **kyle-carrie/**
   - 57 images at 1024x683/512x768 pixels
   - Source: `/Users/ryanpederson/Dev/websites/rum-river-final/public/wedding-photos/kyle-carrie/`
   - Target: 2x upscale → ~2048x1366/1024x1536 pixels

6. **mattea-courtney-photo-gallery/**
   - 89 images at 1024x683/1024x1536 pixels
   - Source: `/Users/ryanpederson/Dev/websites/rum-river-final/public/wedding-photos/mattea-courtney-photo-gallery/`
   - Target: 2x upscale → ~2048x1366/2048x3072 pixels

7. **allison-and-will/**
   - 9 images at 1024x682/682x1024 pixels
   - Source: `/Users/ryanpederson/Dev/websites/rum-river-final/public/wedding-photos/allison-and-will/`
   - Target: 2x upscale → ~2048x1364/1364x2048 pixels

### **PRIORITY 3: Other Low Resolution**

8. **kerry-dominic/** - 22 PNG images (560x369 to 563x640 pixels)
9. **kristine-leuze-rum-river/** - 6 PNG images (293x442 to 1440x1080 pixels)
10. **dave-kayla/** - 17 images (1000x555 to 1000x667 pixels)
11. **casey-garret/** - 6 images (675x1060 to 1060x715 pixels)
12. **erin-kate/** - 19 images (770x550 to 1060x795 pixels)
13. **james-and-denise-allen/** - 7 images (342x512 to 810x540 pixels)
14. **jenna-and-steven-tschirgi/** - 15 images (316x210 to 1440x810 pixels)
15. **kage/** - 18 images (316x210 to 1440x810 pixels)
16. **nick-and-kayla/** - 15 images (316x237 to 1440x810 pixels)
17. **rachel-and-vince/** - 19 images (640x960 to 1380x920 pixels)

## Upscayl Settings Recommendations

### **For 316px images (Priority 1):**
- **Model:** Real-ESRGAN (best for photos)
- **Scale:** 4x (316px → ~1264px)
- **Output Format:** JPG (to match existing)
- **Batch Mode:** Yes

### **For 1024px images (Priority 2):**
- **Model:** Real-ESRGAN 
- **Scale:** 2x (1024px → ~2048px)
- **Output Format:** JPG
- **Batch Mode:** Yes

### **For PNG images:**
- **Model:** Real-ESRGAN
- **Scale:** 2x-4x depending on size
- **Output Format:** Keep as PNG
- **Batch Mode:** Yes

## Processing Steps

1. **Open Upscayl**
2. **Select "Batch Upscale" mode**
3. **Choose input folder** (start with anthony-and-linnea)
4. **Select output folder** (create `/Users/ryanpederson/Dev/websites/rum-river-final/upscaled-temp/`)
5. **Set model to Real-ESRGAN**
6. **Set scale to 4x**
7. **Start processing**
8. **Once complete, replace originals**
9. **Move to next priority folder**

## Expected Results

- **570 images** total need processing
- **Priority 1:** 250 images (316px → 1264px) = ~4x quality improvement
- **Priority 2:** 155 images (1024px → 2048px) = ~2x quality improvement  
- **Priority 3:** 165 images (various improvements)

## Time Estimates

- **Priority 1:** ~2-3 hours (most critical)
- **Priority 2:** ~1-2 hours  
- **Priority 3:** ~2-3 hours
- **Total:** 5-8 hours of processing time

## Backup Strategy

Before starting:
```bash
# Create backup of originals
cp -r /Users/ryanpederson/Dev/websites/rum-river-final/public/wedding-photos /Users/ryanpederson/Dev/websites/rum-river-final/wedding-photos-backup
```

## Next Steps After Upscaling

1. **Replace original files** with upscaled versions
2. **Optimize for web** (optional WebP conversion)
3. **Test website** to ensure all images load correctly
4. **Commit changes** to git

Start with **anthony-and-lignea** folder - it has the worst quality images that will show the most dramatic improvement!