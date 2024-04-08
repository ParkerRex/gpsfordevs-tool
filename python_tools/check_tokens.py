"""
JSON Chunker for Large Files

This script divides large JSON files into smaller, evenly sized chunks, prompted when the file exceeds 2 million tokens.
It ensures manageable processing by limiting chunk sizes to a target maximum of tokens, promoting efficient data handling.

Usage:
    python3 script_name.py <filename>

Upon detecting a file size above the threshold, it prompts for chunking confirmation. If approved, it segments the file
into parts (e.g., "file_part1.json"), aiming for even token distribution across chunks without exceeding 1.8 million tokens per chunk.

Output:
    Sequentially named chunk files, each optimized for size.

Requirements:
    Python 3.x
"""


import sys
import json
import math

def chunk_json_evenly(input_file, target_max_tokens=1500000, threshold_tokens=1800000):
    with open(input_file, 'r', encoding='utf-8') as file:
        data = json.load(file)

    total_chars = sum(len(json.dumps(item)) for item in data)
    total_tokens = total_chars / 4  # Estimate of total tokens assuming 4 chars per token

    print(f"The file contains approximately {int(total_tokens):,} tokens.")

    # Check if total tokens exceed the threshold
    if total_tokens > threshold_tokens:
        # Display message in red
        print("\033[91mThis file approaches or exceeds the max limit of 2 million tokens and should be chunked. Do you want to chunk it? (yes/no):\033[0m", end='')
        response = input().strip().lower()
        
        if response != "yes":
            print("No chunking will be performed.")
            return
    else:
        print("\033[1m\033[32mNo need to chunk this file.\033[0m")
        return

    num_chunks = math.ceil(total_tokens / target_max_tokens)
    tokens_per_chunk = total_tokens / num_chunks

    chunks, current_chunk, current_tokens = [], [], 0

    for item in data:
        item_chars = len(json.dumps(item))
        item_tokens = item_chars / 4
        if current_tokens + item_tokens > tokens_per_chunk + 2500 and current_chunk:
            chunks.append(current_chunk)
            current_chunk, current_tokens = [item], item_tokens
        else:
            current_chunk.append(item)
            current_tokens += item_tokens

    # Add the last chunk if not empty
    if current_chunk:
        chunks.append(current_chunk)

    # Write chunks to files
    for i, chunk in enumerate(chunks, start=1):
        output_filename = f"{input_file.rsplit('.', 1)[0]}_part{i}.json"
        with open(output_filename, 'w', encoding='utf-8') as outfile:
            json.dump(chunk, outfile, indent=4)

    print(f"Content has been evenly chunked into {len(chunks)} file(s), with each aiming for up to {tokens_per_chunk} tokens.")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python3 script.py <filename>")
        sys.exit(1)

    filename = sys.argv[1]
    chunk_json_evenly(filename)
