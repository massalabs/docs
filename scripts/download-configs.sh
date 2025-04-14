#!/usr/bin/env bash

# Function to download files from URLs listed in a text file
download_files() {
    local destination="$1"
    local file_list="$2"

    # Check if the file list exists
    if [ ! -f "$file_list" ]; then
        echo "Error: File list '$file_list' not found."
        exit 1
    fi

    echo "Downloading files to $destination from $file_list..."

    # Use wget to download files, -N option will only download newer files
    wget -N -P "$destination" -i "$file_list"

    # Check if wget encountered an error
    if [ $? -ne 0 ]; then
        echo "Error: Download failed. Please check the URLs in the file list."
        exit 1
    fi

    echo "Download completed successfully!"
}

# Function to insert file content into the documentation
insert_content() {
    local pattern="$1"
    local file_path="$2"
    local doc_file="$3"
    echo "Inserting content from $file_path into $doc_file..."
    sed -i -e "/$pattern/ {
        r $file_path
        d
    }" "$doc_file"
    echo "Insertion completed successfully!"
}

# Start of the script
echo "Script started: Download config files"

# Download node and client config files for mainnet
download_files "./external/node/mainnet/" "./external/node/mainnet/config-files.txt"
download_files "./external/client/mainnet/" "./external/client/mainnet/config-files.txt"

# Add node config file content to the documentation for mainnet
insert_content "EXTERNAL_MAINNET_NODE_CONFIG_CONTENT" "./external/node/mainnet/config.toml" "./docs/node/all-configs.mdx"

# Add client config file content to the documentation for mainnet
insert_content "EXTERNAL_MAINNET_CLIENT_CONFIG_CONTENT" "./external/client/mainnet/config.toml" "./docs/node/all-configs.mdx"

# Download node and client config files for buildnet
download_files "./external/node/buildnet/" "./external/node/buildnet/config-files.txt"
download_files "./external/client/buildnet/" "./external/client/buildnet/config-files.txt"

# Add node config file content to the documentation for buildnet
insert_content "EXTERNAL_BUILDNET_NODE_CONFIG_CONTENT" "./external/node/buildnet/config.toml" "./docs/node/all-configs.mdx"

# Add client config file content to the documentation for buildnet
insert_content "EXTERNAL_BUILDNET_CLIENT_CONFIG_CONTENT" "./external/client/buildnet/config.toml" "./docs/node/all-configs.mdx"

# Script completed successfully
echo "Script finished: Config files downloaded and inserted into documentation."
