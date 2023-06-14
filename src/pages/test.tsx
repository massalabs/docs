import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";

interface Compatibility {
  testnet: string;
  buildnet: string;
  mainnet: string;
}

interface Project {
  title: string;
  compatibilities: Compatibility;
}

interface CompatibilityData {
  title: string;
  projects: Project[];
}

export default function Hello() {
  const [data, setData] = useState<CompatibilityData>();
  useEffect(() => {
    fetch("http://localhost:3001")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <Layout title="Hello" description="Hello React Page">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          fontSize: "20px",
        }}
      >
        {/* Display compatibilities here with loop*/}
        <div>
          <h1>{data.title}</h1>
          <table>
            <thead>
              <tr>
                <th>Project</th>
                <th>Testnet</th>
                <th>Buildnet</th>
                <th>Mainnet</th>
              </tr>
            </thead>
            <tbody>
              {data.projects.map((project) => (
                <tr>
                  <td>{project.title}</td>
                  <td>{project.compatibilities.testnet}</td>
                  <td>{project.compatibilities.buildnet}</td>
                  <td>{project.compatibilities.mainnet}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
