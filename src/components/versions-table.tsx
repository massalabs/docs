import React, { useEffect, useState } from "react";
import copy from "clipboard-copy";

interface Compatibility {
  testnet: string;
  buildnet: string;
}

interface Project {
  title: string;
  compatibilities: Compatibility;
  install: string;
}

interface CompatibilityData {
  title: string;
  projects: Project[];
}

const GIST_URL =
  "https://gist.githubusercontent.com/Ben-Rey/9f475f1c5e8e0f78fa1570a727eef344/raw/892a1ead86dcaee98dac29c85901195deb2b3f3e/gistfile1.txt";

export default function VersionsTable() {
  const [data, setData] = useState<CompatibilityData>();

  useEffect(() => {
    fetch(GIST_URL)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  if (!data) {
    return <div></div>;
  }

  return (
    <div style={{ marginTop: "50px" }}>
      <div>
        <table>
          <thead>
            <tr>
              <th>Project</th>
              <th>Testnet</th>
              <th>Buildnet</th>
              <th>Install</th>
            </tr>
          </thead>
          <tbody>
            {data.projects.map((project, i) => (
              <tr key={i}>
                <td>{project.title}</td>
                <td>{project.compatibilities.testnet}</td>
                <td>{project.compatibilities.buildnet}</td>
                <td
                  onClick={() => copy(project.install)}
                  style={{ cursor: "pointer" }}
                >
                  {project.install}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
