#!/bin/bash

# Wedding Photos Batch Upscaling Script
# Uses ImageMagick with high-quality filters for photo enhancement

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
BASE_DIR="/Users/ryanpederson/Dev/websites/rum-river-final/public/wedding-photos"
TEMP_DIR="/Users/ryanpederson/Dev/websites/rum-river-final/upscaled-temp"
BACKUP_DIR="/Users/ryanpederson/Dev/websites/rum-river-final/wedding-photos-backup"

# Ensure temp directory exists
mkdir -p "$TEMP_DIR"

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to get image dimensions
get_dimensions() {
    local file="$1"
    magick identify -format "%wx%h" "$file" 2>/dev/null || echo "0x0"
}

# Function to get file size in KB
get_file_size() {
    local file="$1"
    stat -f%z "$file" 2>/dev/null | awk '{print int($1/1024)}' || echo "0"
}

# Function to upscale a single image
upscale_image() {
    local input_file="$1"
    local output_file="$2"
    local scale_factor="$3"
    local filter="${4:-Lanczos}"
    
    print_status "Upscaling $(basename "$input_file") with ${scale_factor}x scale using $filter filter..."
    
    # Get original dimensions
    local original_dims=$(get_dimensions "$input_file")
    local original_size=$(get_file_size "$input_file")
    
    # Create output directory if it doesn't exist
    mkdir -p "$(dirname "$output_file")"
    
    # Upscale with high-quality settings
    magick "$input_file" \
        -filter "$filter" \
        -resize "${scale_factor}00%" \
        -unsharp 0x1+0.5+0 \
        -quality 92 \
        "$output_file"
    
    # Get new dimensions and size
    local new_dims=$(get_dimensions "$output_file")
    local new_size=$(get_file_size "$output_file")
    
    print_success "$(basename "$input_file"): $original_dims (${original_size}KB) → $new_dims (${new_size}KB)"
}

# Function to process a directory
process_directory() {
    local source_dir="$1"
    local target_dir="$2"
    local scale_factor="$3"
    local filter="${4:-Lanczos}"
    
    if [[ ! -d "$source_dir" ]]; then
        print_error "Source directory does not exist: $source_dir"
        return 1
    fi
    
    print_status "Processing directory: $(basename "$source_dir")"
    
    local count=0
    local total_files=$(find "$source_dir" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | wc -l | tr -d ' ')
    
    # Process each image file
    find "$source_dir" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | while read -r file; do
        ((count++))
        local relative_path="${file#$source_dir/}"
        local output_file="$target_dir/$relative_path"
        
        echo -e "${BLUE}[${count}/${total_files}]${NC} Processing $relative_path..."
        upscale_image "$file" "$output_file" "$scale_factor" "$filter"
    done
    
    print_success "Completed processing $(basename "$source_dir") - $total_files images processed"
}

# Function to replace original files with upscaled versions
replace_originals() {
    local source_dir="$1"
    local temp_dir="$2"
    
    print_status "Replacing original files in $source_dir with upscaled versions..."
    
    if [[ ! -d "$temp_dir" ]]; then
        print_error "Temp directory does not exist: $temp_dir"
        return 1
    fi
    
    # Copy upscaled files back to original location
    cp -r "$temp_dir"/* "$source_dir/"
    
    print_success "Original files replaced with upscaled versions"
}

# Main execution function
main() {
    echo -e "${GREEN}=== Wedding Photos Batch Upscaling ===${NC}"
    echo ""
    
    if [[ $# -eq 0 ]]; then
        echo "Usage: $0 [directory_name] [scale_factor] [filter]"
        echo ""
        echo "Priority 1 directories (316px images - use 4x scale):"
        echo "  anthony-and-linnea"
        echo "  loria-and-jason-rolstad-agape"
        echo "  reins-wedding"
        echo "  emily-and-barron-nixon"
        echo ""
        echo "Priority 2 directories (1024px images - use 2x scale):"
        echo "  kyle-carrie"
        echo "  mattea-courtney-photo-gallery"
        echo "  allison-and-will"
        echo ""
        echo "Examples:"
        echo "  $0 anthony-and-linnea 4 Lanczos"
        echo "  $0 kyle-carrie 2 Mitchell"
        echo "  $0 all-priority-1  # Process all Priority 1 directories"
        echo ""
        echo "Available filters: Lanczos, Mitchell, Catrom, Cubic, Hermite"
        exit 1
    fi
    
    local dir_name="$1"
    local scale_factor="${2:-4}"
    local filter="${3:-Lanczos}"
    
    # Special handling for batch processing
    if [[ "$dir_name" == "all-priority-1" ]]; then
        print_status "Processing all Priority 1 directories (316px images) with 4x upscaling..."
        
        local priority1_dirs=(
            "anthony-and-linnea"
            "loria-and-jason-rolstad-agape" 
            "reins-wedding"
            "emily-and-barron-nixon"
        )
        
        for dir in "${priority1_dirs[@]}"; do
            echo ""
            print_status "=== Processing $dir ==="
            process_directory "$BASE_DIR/$dir" "$TEMP_DIR/$dir" 4 "$filter"
        done
        
        echo ""
        print_success "All Priority 1 directories processed!"
        print_warning "Review the results in $TEMP_DIR before replacing originals"
        print_status "To replace originals, run: $0 replace-priority-1"
        
    elif [[ "$dir_name" == "all-priority-2" ]]; then
        print_status "Processing all Priority 2 directories (1024px images) with 2x upscaling..."
        
        local priority2_dirs=(
            "kyle-carrie"
            "mattea-courtney-photo-gallery"
            "allison-and-will"
        )
        
        for dir in "${priority2_dirs[@]}"; do
            echo ""
            print_status "=== Processing $dir ==="
            process_directory "$BASE_DIR/$dir" "$TEMP_DIR/$dir" 2 "$filter"
        done
        
        echo ""
        print_success "All Priority 2 directories processed!"
        print_warning "Review the results in $TEMP_DIR before replacing originals"
        print_status "To replace originals, run: $0 replace-priority-2"
        
    elif [[ "$dir_name" == "replace-priority-1" ]]; then
        print_status "Replacing Priority 1 original files with upscaled versions..."
        
        local priority1_dirs=(
            "anthony-and-linnea"
            "loria-and-jason-rolstad-agape"
            "reins-wedding" 
            "emily-and-barron-nixon"
        )
        
        for dir in "${priority1_dirs[@]}"; do
            if [[ -d "$TEMP_DIR/$dir" ]]; then
                replace_originals "$BASE_DIR/$dir" "$TEMP_DIR/$dir"
            else
                print_warning "No upscaled files found for $dir"
            fi
        done
        
    elif [[ "$dir_name" == "replace-priority-2" ]]; then
        print_status "Replacing Priority 2 original files with upscaled versions..."
        
        local priority2_dirs=(
            "kyle-carrie"
            "mattea-courtney-photo-gallery"
            "allison-and-will"
        )
        
        for dir in "${priority2_dirs[@]}"; do
            if [[ -d "$TEMP_DIR/$dir" ]]; then
                replace_originals "$BASE_DIR/$dir" "$TEMP_DIR/$dir"
            else
                print_warning "No upscaled files found for $dir"
            fi
        done
        
    else
        # Process single directory
        local source_dir="$BASE_DIR/$dir_name"
        local target_dir="$TEMP_DIR/$dir_name"
        
        process_directory "$source_dir" "$target_dir" "$scale_factor" "$filter"
        
        echo ""
        print_success "Processing complete!"
        print_status "Upscaled files saved to: $target_dir"
        print_warning "Review the results before replacing originals"
        print_status "To replace originals, run: cp -r '$target_dir'/* '$source_dir'/'"
    fi
    
    echo ""
    print_status "Backup of originals available at: $BACKUP_DIR"
}

# Run main function with all arguments
main "$@"