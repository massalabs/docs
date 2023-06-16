import React, { useEffect, useState } from "react";
import CodeBlock from "@theme/CodeBlock";

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

const GIST_URL =
  "https://gist.githubusercontent.com/Ben-Rey/9f475f1c5e8e0f78fa1570a727eef344/raw/gistfile1.txt";

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

  const getInstall = (project: Project, network: string) => {
    const compatibility = project.compatibilities.find(
      (comp) => comp.network === network
    );
    return compatibility ? `${project.install}@${compatibility.version}` : "";
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <div style={{ marginTop: "50px" }}>
      <table>
        <thead>
          <tr>
            <th>Project</th>
            {data.networks.map((network) => (
              <th>{network}</th>
            ))}
            <th>Install (Buildnet)</th>
          </tr>
        </thead>
        <tbody>
          {data.projects.map((project, i) => (
            <tr key={i}>
              <td>{project.title}</td>
              {project.compatibilities.map((compatibility) => (
                <td>{compatibility.version}</td>
              ))}
              <td>
                <CodeBlock className="language-bash">
                  {getInstall(project, "buildnet")}
                </CodeBlock>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
