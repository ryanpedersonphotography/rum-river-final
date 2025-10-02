#!/bin/bash

# Script to analyze all wedding images and identify those needing upscaling
OUTPUT_FILE="images-needing-upscaling.txt"
WEDDING_PHOTOS_DIR="public/wedding-photos"

echo "=== WEDDING PHOTO IMAGE ANALYSIS REPORT ===" > "$OUTPUT_FILE"
echo "Generated on: $(date)" >> "$OUTPUT_FILE"
echo "Directory: $WEDDING_PHOTOS_DIR" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

echo "CRITERIA FOR UPSCALING:" >> "$OUTPUT_FILE"
echo "- Width or height less than 1200px" >> "$OUTPUT_FILE"
echo "- File size less than 100KB" >> "$OUTPUT_FILE"
echo "- Low quality/pixelated images" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

# Counters
total_images=0
needs_upscaling=0
low_res_count=0
small_file_count=0

# Function to convert bytes to KB
bytes_to_kb() {
    echo $(($1 / 1024))
}

# Function to check if image needs upscaling
check_upscaling() {
    local file="$1"
    local width="$2"
    local height="$3"
    local size_kb="$4"
    
    local needs_upscale="NO"
    local reasons=""
    
    # Check dimensions (less than 1200px width OR height)
    if [ "$width" -lt 1200 ] || [ "$height" -lt 1200 ]; then
        needs_upscale="YES"
        reasons="${reasons}Low resolution (${width}x${height}) "
        ((low_res_count++))
    fi
    
    # Check file size (less than 100KB)
    if [ "$size_kb" -lt 100 ]; then
        needs_upscale="YES"
        reasons="${reasons}Small file size (${size_kb}KB) "
        ((small_file_count++))
    fi
    
    if [ "$needs_upscale" = "YES" ]; then
        ((needs_upscaling++))
    fi
    
    echo "$needs_upscale|$reasons"
}

echo "Analyzing images..." >&2

# Process each directory
for dir in "$WEDDING_PHOTOS_DIR"/*; do
    if [ -d "$dir" ]; then
        dir_name=$(basename "$dir")
        echo "=== DIRECTORY: $dir_name ===" >> "$OUTPUT_FILE"
        echo "" >> "$OUTPUT_FILE"
        
        # Find all image files in this directory
        find "$dir" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | sort | while read -r file; do
            ((total_images++))
            filename=$(basename "$file")
            
            # Get image info using ImageMagick identify
            if command -v identify >/dev/null 2>&1; then
                img_info=$(identify -format "%w %h %b" "$file" 2>/dev/null)
                if [ $? -eq 0 ]; then
                    width=$(echo "$img_info" | cut -d' ' -f1)
                    height=$(echo "$img_info" | cut -d' ' -f2)
                    file_size_str=$(echo "$img_info" | cut -d' ' -f3)
                    
                    # Convert file size to KB (handle different formats)
                    if [[ "$file_size_str" == *"KB" ]]; then
                        size_kb=$(echo "$file_size_str" | sed 's/KB//')
                        size_kb=${size_kb%.*}  # Remove decimal part
                    elif [[ "$file_size_str" == *"MB" ]]; then
                        size_mb=$(echo "$file_size_str" | sed 's/MB//')
                        size_kb=$(echo "$size_mb * 1024" | bc 2>/dev/null || echo "1000")
                        size_kb=${size_kb%.*}  # Remove decimal part
                    elif [[ "$file_size_str" == *"B" ]]; then
                        size_bytes=$(echo "$file_size_str" | sed 's/B//')
                        size_kb=$((size_bytes / 1024))
                    else
                        # Fallback to ls -la
                        size_bytes=$(ls -la "$file" | awk '{print $5}')
                        size_kb=$((size_bytes / 1024))
                    fi
                else
                    # Fallback if identify fails
                    width="UNKNOWN"
                    height="UNKNOWN"
                    size_bytes=$(ls -la "$file" | awk '{print $5}')
                    size_kb=$((size_bytes / 1024))
                fi
            else
                # Fallback if ImageMagick not available
                width="UNKNOWN"
                height="UNKNOWN"
                size_bytes=$(ls -la "$file" | awk '{print $5}')
                size_kb=$((size_bytes / 1024))
            fi
            
            # Check if needs upscaling
            if [ "$width" != "UNKNOWN" ] && [ "$height" != "UNKNOWN" ]; then
                upscale_result=$(check_upscaling "$file" "$width" "$height" "$size_kb")
                needs_upscale=$(echo "$upscale_result" | cut -d'|' -f1)
                reasons=$(echo "$upscale_result" | cut -d'|' -f2)
            else
                needs_upscale="UNKNOWN"
                reasons="Could not determine dimensions"
            fi
            
            # Write to output file
            printf "%-30s | %8s x %-8s | %8s KB | %-8s | %s\n" \
                "$filename" "$width" "$height" "$size_kb" "$needs_upscale" "$reasons" >> "$OUTPUT_FILE"
        done
        
        echo "" >> "$OUTPUT_FILE"
    fi
done

# Add summary at the end
echo "=== SUMMARY ===" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"
echo "Total images analyzed: $total_images" >> "$OUTPUT_FILE"
echo "Images needing upscaling: $needs_upscaling" >> "$OUTPUT_FILE"
echo "Low resolution images: $low_res_count" >> "$OUTPUT_FILE"
echo "Small file size images: $small_file_count" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

echo "Analysis complete. Results saved to $OUTPUT_FILE" >&2
echo "Total images: $total_images, Need upscaling: $needs_upscaling" >&2
