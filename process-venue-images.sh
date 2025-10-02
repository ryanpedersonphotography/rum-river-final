#!/bin/bash

# Script to process and rename wedding barn photos for website use
# Images are already well-sized at 1280x854, so we'll just optimize quality and copy with new names

SOURCE_DIR="/Users/ryanpederson/Downloads/buzz_farm/RumRiverBarnPHotosBestRyanShoot/small"
DEST_DIR="/Users/ryanpederson/Dev/websites/rum-river-final/public/images/venue"

echo "Processing wedding barn photos..."
echo "Source: $SOURCE_DIR"
echo "Destination: $DEST_DIR"

# Create destination directory if it doesn't exist
mkdir -p "$DEST_DIR"

# Function to process and copy image
process_image() {
    local old_name="$1"
    local new_name="$2"
    local old_path="$SOURCE_DIR/$old_name"
    local new_path="$DEST_DIR/$new_name"
    
    if [ -f "$old_path" ]; then
        echo "Processing: $old_name -> $new_name"
        # Optimize JPEG quality and strip metadata while maintaining size
        magick "$old_path" -quality 85 -strip "$new_path"
    else
        echo "Warning: $old_name not found"
    fi
}

# BARN INTERIOR SHOTS
echo "Processing barn interior shots..."
process_image "7Y5A9005 Large.jpeg" "barn-interior-ceiling-beams-lighting.jpg"
process_image "7Y5A9007 Large.jpeg" "barn-interior-exposed-beams-chandeliers.jpg"
process_image "7Y5A9394 Large.jpeg" "barn-interior-string-lights-ceiling-detail.jpg"

# BARN EXTERIOR SHOTS
echo "Processing barn exterior shots..."
process_image "7Y5A9013 Large.jpeg" "barn-exterior-front-entrance-concrete-pad.jpg"
process_image "7Y5A9019 Large.jpeg" "barn-exterior-entrance-lighting-view.jpg"
process_image "7Y5A9035 Large.jpeg" "barn-exterior-side-angle-landscaping.jpg"
process_image "7Y5A9040 Large.jpeg" "barn-exterior-stone-wall-trees.jpg"
process_image "7Y5A9042 Large.jpeg" "barn-exterior-full-view-landscape.jpg"
process_image "7Y5A9066 Large.jpeg" "barn-exterior-welcome-sign-entrance.jpg"
process_image "7Y5A9068 Large.jpeg" "barn-exterior-landscaping-stone-border.jpg"
process_image "7Y5A9073 Large.jpeg" "barn-exterior-welcome-sign-rustic-charm.jpg"
process_image "7Y5A9082 Large.jpeg" "barn-exterior-vintage-tractor-rustic.jpg"
process_image "7Y5A9325 Large.jpeg" "barn-exterior-deck-stairs-trees.jpg"
process_image "7Y5A9334 Large.jpeg" "barn-exterior-deck-swing-under-tree.jpg"
process_image "7Y5A9361 Large.jpeg" "barn-exterior-full-deck-view-evening.jpg"
process_image "7Y5A9362 Large.jpeg" "barn-exterior-deck-swing-golden-hour.jpg"

# DETAILS & SIGNAGE
echo "Processing detail shots..."
process_image "7Y5A9076 Large.jpeg" "details-rum-river-barn-vineyard-sign.jpg"
process_image "7Y5A9077 Large.jpeg" "details-barn-sign-rustic-lettering.jpg"
process_image "7Y5A9079 Large.jpeg" "details-building-porch-architectural.jpg"
process_image "7Y5A9093 Large.jpeg" "details-entrance-sign-roadside.jpg"
process_image "7Y5A9121 Large.jpeg" "details-antique-wheel-stone-wall.jpg"
process_image "7Y5A9122 Large.jpeg" "details-antique-wheel-rustic-decor.jpg"
process_image "7Y5A9123 Large.jpeg" "details-building-entrance-windows.jpg"
process_image "7Y5A9124 Large.jpeg" "details-building-facade-siding.jpg"
process_image "7Y5A9126 Large.jpeg" "details-architectural-trim-windows.jpg"
process_image "7Y5A9143 Large.jpeg" "details-building-corner-landscaping.jpg"
process_image "7Y5A9150 Large.jpeg" "details-vintage-tractor-closeup.jpg"
process_image "7Y5A9158 Large.jpeg" "details-antique-windmill-rustic.jpg"
process_image "7Y5A9161 Large.jpeg" "details-building-windows-trim.jpg"
process_image "7Y5A9169 Large.jpeg" "details-building-entrance-door.jpg"
process_image "7Y5A9269 Large.jpeg" "details-americana-flag-decor.jpg"
process_image "7Y5A9291 Large.jpeg" "details-tree-swing-pastoral.jpg"
process_image "7Y5A9307 Large.jpeg" "details-swing-closeup-rustic-charm.jpg"
process_image "7Y5A9309 Large.jpeg" "details-swing-rope-texture.jpg"
process_image "7Y5A9312 Large.jpeg" "details-swing-hanging-tree.jpg"
process_image "7Y5A9319 Large.jpeg" "details-swing-pastoral-setting.jpg"
process_image "7Y5A9326 Large.jpeg" "details-swing-golden-hour-lighting.jpg"
process_image "7Y5A9340 Large.jpeg" "details-swing-field-background.jpg"
process_image "7Y5A9345 Large.jpeg" "details-swing-close-perspective.jpg"
process_image "7Y5A9353 Large.jpeg" "details-swing-tree-composition.jpg"
process_image "7Y5A9363 Large.jpeg" "details-swing-evening-atmosphere.jpg"
process_image "7Y5A9382 Large.jpeg" "details-swing-rustic-romance.jpg"

# PROPERTY & LANDSCAPE VIEWS
echo "Processing property and landscape shots..."
process_image "7Y5A9205 Large.jpeg" "property-vineyard-rows-landscape.jpg"
process_image "7Y5A9213 Large.jpeg" "property-field-wildflowers-natural.jpg"
process_image "7Y5A9224 Large.jpeg" "property-vineyard-perspective-hills.jpg"
process_image "7Y5A9231 Large.jpeg" "property-field-grasses-sunset.jpg"
process_image "7Y5A9265 Large.jpeg" "property-landscape-rural-vista.jpg"
process_image "7Y5A9268 Large.jpeg" "property-field-morning-mist.jpg"
process_image "7Y5A9274 Large.jpeg" "property-wooded-area-natural.jpg"
process_image "7Y5A9409 Large.jpeg" "property-field-wildgrasses-golden.jpg"
process_image "7Y5A9418 Large.jpeg" "property-field-atmospheric-evening.jpg"
process_image "7Y5A9420 Large.jpeg" "property-grasses-macro-detail.jpg"
process_image "7Y5A9421 Large.jpeg" "property-field-barn-background.jpg"

echo "Image processing complete!"
echo "Total images processed: $(ls -1 "$DEST_DIR" | wc -l)"
echo "Images are now available at: $DEST_DIR"