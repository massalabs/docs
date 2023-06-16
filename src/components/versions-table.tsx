import React, { useEffect, useState } from "react";
import CodeBlock from "@theme/CodeBlock";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import { GIST_URL } from "../constants";

interface Compatibility {
  // could be  (network: string) => string
  network: string;
  version: string;
}

interface Project {
  title: string;
  compatibilities: Compatibility[];
  install: string;
}

interface CompatibilityData {
  title: string;
  projects: Project[];
  networks: string[];
}

export default function VersionsTable() {
  const [data, setData] = useState<CompatibilityData>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(GIST_URL);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("An error occurred while fetching the data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <div style={{ marginTop: "50px" }}>
      <Tabs defaultValue="buildnet">
        {data.networks.map((network) => (
          <TabItem value={network} label={network} key={network}>
            <table>
              <thead>
                <tr>
                  <th>Project</th>
                  <th>Version</th>
                  <th>Install</th>
                </tr>
              </thead>
              <tbody>
                {data.projects.map((project, i) => {
                  const compatibility = project.compatibilities.find(
                    (comp) => comp.network === network
                  );
                  return (
                    <tr key={i}>
                      <td>{project.title}</td>
                      <td>{compatibility?.version}</td>
                      <td>
                        <CodeBlock className="language-bash">
                          {compatibility
                            ? `${project.install}@${compatibility.version}`
                            : ""}
                        </CodeBlock>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </TabItem>
        ))}
      </Tabs>
    </div>
  );
}
