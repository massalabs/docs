import React, { useEffect, useState } from "react";
import { parse } from "yaml";

const YAML_URL =
  "https://raw.githubusercontent.com/massalabs/DeWeb-Websites/refs/heads/main/websites.yaml";

interface Website {
  title: string;
  desc: string;
  mns: string;
  owner: string;
}

const WebsiteTable: React.FC = () => {
  const [providers, setWebsites] = useState<Website[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchWebsites = async () => {
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
        const data = parse(text) as Website[];
        setWebsites(data);
      } catch (err) {
        setError((err as Error).message);
        console.error("Error loading YAML file:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchWebsites();
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
            <th>MNS</th>
            <th>Description</th>
            <th>Owner</th>
          </tr>
        </thead>
        <tbody>
          {error && <tr>{error}</tr>}
          {providers.map((site, index) => (
            <tr key={index}>
              <td>{site.title}</td>
              <td>{site.mns}</td>
              <td>{site.desc}</td>
              <td>{site.owner}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WebsiteTable;
