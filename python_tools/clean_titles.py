"""
Apple Developer Documentation Title Cleaner

This script removes " | Apple Developer Documentation" from the 'title' field in a
JSON file of Apple Developer documentation entries. It reads a specified JSON file,
cleans the titles, and saves the output to a new file named with an "_cleaned"
suffix (e.g., "original.json" -> "original_cleaned.json"), reducing the file size
by approximately 1-2%.

Usage:
    python3 clean_titles.py <filename>

Output:
    Generates a file with cleaned titles, preserving the original file.

Requirements:
    Python 3.x
"""


import json
import sys
import os

# Check if the user has provided a filename as an argument
if len(sys.argv) < 2:
    print("Usage: python3 clean_titles.py <filename>")
    sys.exit(1)

input_file = sys.argv[1]  # The first command-line argument is the filename
# Create a new output filename by appending '_cleaned' before the '.json' extension
output_file = input_file.rsplit('.', 1)[0] + '_cleaned.json'

# Function to remove the unwanted string from titles
def clean_title(title):
    unwanted_string = " | Apple Developer Documentation"
    if unwanted_string in title:
        return title.replace(unwanted_string, "")
    return title

# Function to calculate the file size and print it
def print_file_size(file_path, description):
    size = os.path.getsize(file_path)
    print(f"{description} file size: {size} bytes")
    return size

# Read the JSON data
with open(input_file, 'r', encoding='utf-8') as file:
    original_size = print_file_size(input_file, "Original")
    data = json.load(file)

# Modify the titles
for item in data:
    item['title'] = clean_title(item['title'])

# Write the modified data back to a new file
with open(output_file, 'w', encoding='utf-8') as file:
    json.dump(data, file, indent=4)  # Indent for pretty printing, optional

modified_size = print_file_size(output_file, "Modified")

# Calculate and print the percentage saved
percentage_saved = ((original_size - modified_size) / original_size) * 100
print(f"Percentage saved: {percentage_saved:.2f}%")

print(f"File '{output_file}' has been updated.")
