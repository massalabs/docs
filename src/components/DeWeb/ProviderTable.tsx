import React, { useEffect, useState } from "react";
import { parse } from "yaml";

const YAML_URL =
  "https://raw.githubusercontent.com/massalabs/DeWeb-Providers/refs/heads/main/providers.yaml";
const GITHUB_URL =
  "https://github.com/massalabs/DeWeb-Providers/blob/main/providers.yaml";

type supportedNetwork = "mainnet" | "buildnet";

interface Provider {
  title: string;
  desc: string;
  url: string;
  owner: string;
  network: supportedNetwork;
}

interface ProviderTableProps {
  network: supportedNetwork;
}

const ProviderTable: React.FC = (
  { network }: ProviderTableProps
) => {
  const [providers, setProviders] = useState<Provider[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProviders = async () => {
      setLoading(true);

      try {
        const response = await fetch(YAML_URL, {
          redirect: "follow",
        });
        if (!response.ok) {
          setError(`HTTP error! Status: ${response.status}`);
          return;
        }
        const text = await response.text();
        const data = parse(text) as Provider[];
        const filteredData = data.filter((provider) => provider.network === network);
        setProviders(filteredData);
      } catch (err) {
        setError((err as Error).message);
        console.error("Error loading YAML file:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProviders();
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>URL</th>
            <th>Description</th>
            <th>Owner</th>
          </tr>
        </thead>
        <tbody>
          {error && <tr>{error}</tr>}
          {providers.map((site, index) => (
            <tr key={index}>
              <td>{site.title}</td>
              <td>
                <a href={site.url} target="_blank" rel="noopener noreferrer">
                  {site.url}
                </a>
              </td>
              <td>{site.desc}</td>
              <td>{site.owner}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4}>
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ProviderTable;
