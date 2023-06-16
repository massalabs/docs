import React, { useEffect, useState } from "react";
import { handleCopy } from "../utils/helpers";

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

  useEffect(() => {
    fetch(GIST_URL)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const getInstall = (project: Project, network: string) => {
    const compatibility = project.compatibilities.find(
      (comp) => comp.network === network
    );
    return `${project.install}@${compatibility.version}`;
  };

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
                {project.compatibilities.map((compatibilities) => (
                  <td>{compatibilities.version}</td>
                ))}
                <td
                  onClick={() => handleCopy(project.install)}
                  style={{ cursor: "pointer" }}
                >
                  {getInstall(project, "buildnet")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
