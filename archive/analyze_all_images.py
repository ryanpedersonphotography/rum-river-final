#!/usr/bin/env python3
import os
import subprocess
import re
from pathlib import Path

def parse_size_to_kb(size_str):
    """Convert ImageMagick size string to KB"""
    size_str = size_str.strip()
    if 'MB' in size_str:
        mb = float(re.findall(r'[\d.]+', size_str)[0])
        return int(mb * 1024)
    elif 'KB' in size_str:
        kb = float(re.findall(r'[\d.]+', size_str)[0])
        return int(kb)
    elif 'B' in size_str and 'KB' not in size_str and 'MB' not in size_str:
        b = float(re.findall(r'[\d.]+', size_str)[0])
        return int(b / 1024)
    else:
        return 0

def analyze_images():
    wedding_photos_dir = Path("public/wedding-photos")
    output_file = "images-needing-upscaling.txt"
    
    total_images = 0
    needs_upscaling = 0
    low_res_count = 0
    small_file_count = 0
    
    with open(output_file, 'w') as f:
        f.write("=== WEDDING PHOTO IMAGE ANALYSIS REPORT ===\n")
        f.write(f"Generated on: {subprocess.check_output(['date']).decode().strip()}\n")
        f.write(f"Directory: {wedding_photos_dir}\n\n")
        f.write("CRITERIA FOR UPSCALING:\n")
        f.write("- Width or height less than 1200px\n")
        f.write("- File size less than 100KB\n\n")
        
        # Process each subdirectory
        for subdir in sorted(wedding_photos_dir.iterdir()):
            if subdir.is_dir():
                f.write(f"=== DIRECTORY: {subdir.name} ===\n\n")
                f.write(f"{'File Name':<35} | {'Dimensions':<12} | {'Size KB':<8} | {'Needs Upscaling':<15} | {'Reason'}\n")
                f.write("-" * 35 + " | " + "-" * 12 + " | " + "-" * 8 + " | " + "-" * 15 + " | " + "-" * 20 + "\n")
                
                # Get all image files in this directory
                image_files = []
                for ext in ['*.jpg', '*.jpeg', '*.png', '*.JPG', '*.JPEG', '*.PNG']:
                    image_files.extend(subdir.glob(ext))
                
                for img_file in sorted(image_files):
                    total_images += 1
                    
                    try:
                        # Get image info using ImageMagick
                        result = subprocess.run(
                            ['identify', '-format', '%w %h %b', str(img_file)],
                            capture_output=True, text=True, check=True
                        )
                        
                        parts = result.stdout.strip().split()
                        width = int(parts[0])
                        height = int(parts[1])
                        size_str = parts[2]
                        size_kb = parse_size_to_kb(size_str)
                        
                        # Check if needs upscaling
                        needs_upscale = "NO"
                        reasons = []
                        
                        if width < 1200 or height < 1200:
                            needs_upscale = "YES"
                            reasons.append("Low resolution")
                            low_res_count += 1
                        
                        if size_kb < 100:
                            needs_upscale = "YES"
                            reasons.append("Small file size")
                            small_file_count += 1
                        
                        if needs_upscale == "YES":
                            needs_upscaling += 1
                        
                        reason_str = " + ".join(reasons) if reasons else ""
                        
                        f.write(f"{img_file.name:<35} | {width}x{height:<9} | {size_kb:<8} | {needs_upscale:<15} | {reason_str}\n")
                        
                    except subprocess.CalledProcessError:
                        f.write(f"{img_file.name:<35} | {'ERROR':<12} | {'ERROR':<8} | {'UNKNOWN':<15} | Could not analyze\n")
                
                f.write("\n")
        
        # Summary
        f.write("=== SUMMARY ===\n\n")
        f.write(f"Total images analyzed: {total_images}\n")
        f.write(f"Images needing upscaling: {needs_upscaling}\n")
        f.write(f"Low resolution images: {low_res_count}\n")
        f.write(f"Small file size images: {small_file_count}\n")
        f.write(f"Percentage needing upscaling: {(needs_upscaling/total_images*100):.1f}%\n")
    
    print(f"Analysis complete. Results saved to {output_file}")
    print(f"Total images: {total_images}, Need upscaling: {needs_upscaling} ({needs_upscaling/total_images*100:.1f}%)")

if __name__ == "__main__":
    analyze_images()
