#!/usr/bin/env bash

# Function to download files from URLs listed in a text file
download_files() {
    local destination="$1"
    local file_list="$2"
    echo "Downloading files to $destination from $file_list..."
    wget -N -P "$destination" -i "$file_list"
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

# Download node and client config files
download_files "./external/node/buildnet/" "./external/node/buildnet/config-files.txt"
download_files "./external/client/buildnet/" "./external/client/buildnet/config-files.txt"

# Add node config file content to the documentation
insert_content "EXTERNAL_BUILDNET_NODE_CONFIG_CONTENT" "./external/node/buildnet/config.toml" "./docs/node/all-configs.mdx"

# Add client config file content to the documentation
insert_content "EXTERNAL_BUILDNET_CLIENT_CONFIG_CONTENT" "./external/client/buildnet/config.toml" "./docs/node/all-configs.mdx"

# Download node and client config files
download_files "./external/node/testnet/" "./external/node/testnet/config-files.txt"
download_files "./external/client/testnet/" "./external/client/testnet/config-files.txt"

# Add node config file content to the documentation
insert_content "EXTERNAL_TESTNET_NODE_CONFIG_CONTENT" "./external/node/testnet/config.toml" "./docs/node/all-configs.mdx"

# Add client config file content to the documentation
insert_content "EXTERNAL_TESTNET_CLIENT_CONFIG_CONTENT" "./external/client/testnet/config.toml" "./docs/node/all-configs.mdx"

# Script completed successfully
echo "Script finished: Config files downloaded and inserted into documentation."
