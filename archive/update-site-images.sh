#!/bin/bash

# Script to systematically replace Unsplash images with authentic venue photos
# This script will update image references across the entire site

echo "🏡 Rum River Barn - Updating Site Images with Authentic Venue Photos"
echo "=================================================================="

# Backup original files before making changes
echo "📋 Creating backup of original files..."
mkdir -p backups/$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="backups/$(date +%Y%m%d_%H%M%S)"

cp src/CohesiveDesign.css "$BACKUP_DIR/"
cp src/pages/HomePage.jsx "$BACKUP_DIR/"
cp src/pages/GalleryPage.jsx "$BACKUP_DIR/"
cp src/pages/EventsPage.jsx "$BACKUP_DIR/"
cp src/pages/PropertyPage.jsx "$BACKUP_DIR/"
cp src/ComponentLibrary.jsx "$BACKUP_DIR/"
cp src/components/PageTemplate.jsx "$BACKUP_DIR/"

echo "✅ Backup created in $BACKUP_DIR"

# Function to replace image URL in file
replace_image() {
    local file="$1"
    local old_url="$2"
    local new_image="$3"
    local description="$4"
    
    if [ -f "$file" ]; then
        echo "  🔄 $description"
        sed -i '' "s|$old_url|/images/venue/$new_image|g" "$file"
    else
        echo "  ⚠️  File not found: $file"
    fi
}

echo ""
echo "🎨 Phase 1: Critical CSS Background Images"
echo "----------------------------------------"

# Main hero background
replace_image "src/CohesiveDesign.css" \
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=1600" \
    "barn-exterior-full-deck-view-evening.jpg" \
    "Main hero background → Evening barn exterior"

# Diamond card backgrounds
replace_image "src/CohesiveDesign.css" \
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=800" \
    "barn-interior-ceiling-beams-lighting.jpg" \
    "Weddings card → Barn interior with lighting"

replace_image "src/CohesiveDesign.css" \
    "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800" \
    "property-vineyard-rows-landscape.jpg" \
    "Property card → Vineyard landscape"

replace_image "src/CohesiveDesign.css" \
    "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800" \
    "details-swing-rustic-romance.jpg" \
    "Gallery card → Rustic swing detail"

replace_image "src/CohesiveDesign.css" \
    "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800" \
    "barn-exterior-deck-swing-golden-hour.jpg" \
    "Engagement card → Golden hour swing"

echo ""
echo "🏠 Phase 2: HomePage Venue Showcases"
echo "-----------------------------------"

# HomePage venue carousel images - The Historic Barn
replace_image "src/pages/HomePage.jsx" \
    "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?w=800" \
    "barn-interior-exposed-beams-chandeliers.jpg" \
    "Historic Barn #1 → Exposed beams & chandeliers"

replace_image "src/pages/HomePage.jsx" \
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=800" \
    "barn-interior-ceiling-beams-lighting.jpg" \
    "Historic Barn #2 → Ceiling beams & lighting"

replace_image "src/pages/HomePage.jsx" \
    "https://images.unsplash.com/photo-1519167758481-83f29da8c5e5?w=800" \
    "barn-interior-string-lights-ceiling-detail.jpg" \
    "Historic Barn #3 → String lights detail"

# Garden Pavilion images
replace_image "src/pages/HomePage.jsx" \
    "https://images.unsplash.com/photo-1519167758481-83f29da8c5e5?w=800" \
    "property-vineyard-rows-landscape.jpg" \
    "Garden Pavilion #1 → Vineyard rows"

replace_image "src/pages/HomePage.jsx" \
    "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800" \
    "property-field-wildflowers-natural.jpg" \
    "Garden Pavilion #2 → Wildflower field"

replace_image "src/pages/HomePage.jsx" \
    "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800" \
    "barn-exterior-deck-swing-under-tree.jpg" \
    "Garden Pavilion #3 → Deck swing under tree"

echo ""
echo "🎯 Phase 3: EventsPage Event Images"
echo "----------------------------------"

# Events page specific images
replace_image "src/pages/EventsPage.jsx" \
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800" \
    "barn-exterior-full-view-landscape.jpg" \
    "Wedding Events → Full barn landscape view"

replace_image "src/pages/EventsPage.jsx" \
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800" \
    "barn-interior-exposed-beams-chandeliers.jpg" \
    "Engagement Parties → Interior beams & chandeliers"

replace_image "src/pages/EventsPage.jsx" \
    "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800" \
    "barn-interior-ceiling-beams-lighting.jpg" \
    "Birthday Parties → Ceiling beams & lighting"

replace_image "src/pages/EventsPage.jsx" \
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800" \
    "property-field-wildflowers-natural.jpg" \
    "Graduation Parties → Natural wildflower field"

replace_image "src/pages/EventsPage.jsx" \
    "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=800" \
    "barn-interior-string-lights-ceiling-detail.jpg" \
    "Holiday Parties → String lights detail"

echo ""
echo "🏛️ Phase 4: PropertyPage Venue Sections"
echo "--------------------------------------"

# PropertyPage White Barn Loft section
replace_image "src/pages/PropertyPage.jsx" \
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=800" \
    "barn-interior-exposed-beams-chandeliers.jpg" \
    "White Barn Loft #1 → Exposed beams"

replace_image "src/pages/PropertyPage.jsx" \
    "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?w=800" \
    "barn-interior-ceiling-beams-lighting.jpg" \
    "White Barn Loft #2 → Ceiling lighting"

replace_image "src/pages/PropertyPage.jsx" \
    "https://images.unsplash.com/photo-1519167758481-83f29da8c5e5?w=800" \
    "barn-interior-string-lights-ceiling-detail.jpg" \
    "White Barn Loft #3 → String lights"

# PropertyPage The Grounds section
replace_image "src/pages/PropertyPage.jsx" \
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800" \
    "property-vineyard-rows-landscape.jpg" \
    "The Grounds #1 → Vineyard landscape"

replace_image "src/pages/PropertyPage.jsx" \
    "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=800" \
    "property-field-wildflowers-natural.jpg" \
    "The Grounds #2 → Wildflower field"

replace_image "src/pages/PropertyPage.jsx" \
    "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800" \
    "property-landscape-rural-vista.jpg" \
    "The Grounds #3 → Rural vista"

echo ""
echo "📸 Phase 5: Gallery Page Property Section"
echo "----------------------------------------"

# GalleryPage property category images
replace_image "src/pages/GalleryPage.jsx" \
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800" \
    "barn-exterior-full-view-landscape.jpg" \
    "Gallery Property #1 → Full barn view"

replace_image "src/pages/GalleryPage.jsx" \
    "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?w=800" \
    "property-vineyard-perspective-hills.jpg" \
    "Gallery Property #2 → Vineyard perspective"

replace_image "src/pages/GalleryPage.jsx" \
    "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=800" \
    "property-landscape-rural-vista.jpg" \
    "Gallery Property #3 → Rural landscape"

replace_image "src/pages/GalleryPage.jsx" \
    "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800" \
    "barn-exterior-stone-wall-trees.jpg" \
    "Gallery Property #4 → Stone wall & trees"

replace_image "src/pages/GalleryPage.jsx" \
    "https://images.unsplash.com/photo-1544427920-c49ccfb85579?w=800" \
    "details-vintage-tractor-rustic.jpg" \
    "Gallery Property #5 → Vintage tractor"

replace_image "src/pages/GalleryPage.jsx" \
    "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800" \
    "barn-exterior-welcome-sign-entrance.jpg" \
    "Gallery Property #6 → Welcome sign entrance"

echo ""
echo "📄 Phase 6: PageTemplate Hero Background"
echo "---------------------------------------"

# PageTemplate default hero background
replace_image "src/components/PageTemplate.jsx" \
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=1600" \
    "barn-exterior-full-view-landscape.jpg" \
    "PageTemplate hero → Full barn landscape"

echo ""
echo "🎨 Phase 7: ComponentLibrary Diamond Cards"
echo "-----------------------------------------"

# ComponentLibrary diamond card backgrounds
replace_image "src/ComponentLibrary.jsx" \
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=1600" \
    "barn-interior-ceiling-beams-lighting.jpg" \
    "Diamond card weddings → Barn interior"

replace_image "src/ComponentLibrary.jsx" \
    "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=1600" \
    "property-vineyard-rows-landscape.jpg" \
    "Diamond card property → Vineyard rows"

replace_image "src/ComponentLibrary.jsx" \
    "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1600" \
    "details-swing-rustic-romance.jpg" \
    "Diamond card gallery → Swing detail"

replace_image "src/ComponentLibrary.jsx" \
    "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=1600" \
    "barn-exterior-deck-swing-golden-hour.jpg" \
    "Diamond card engagement → Golden hour swing"

echo ""
echo "✅ IMAGE REPLACEMENT COMPLETE!"
echo "=============================="
echo ""
echo "📊 Summary:"
echo "• Replaced hero backgrounds with evening barn exterior"
echo "• Updated venue carousels with authentic barn interiors"
echo "• Replaced property images with actual vineyard & landscape photos"
echo "• Updated event images with relevant venue spaces"
echo "• Replaced gallery property section with real venue photos"
echo "• Updated diamond cards with authentic venue imagery"
echo ""
echo "🚀 Next Steps:"
echo "1. Review the changes in your browser"
echo "2. Test that all images load correctly"
echo "3. Consider replacing remaining Unsplash images with additional venue photos"
echo "4. Update any remaining placeholder images as needed"
echo ""
echo "💡 Tip: All replaced images are now using authentic Rum River Barn photos"
echo "   from your professional photo shoot, improving SEO and visitor trust!"