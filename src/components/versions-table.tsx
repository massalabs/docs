import React from "react";
import CodeBlock from "@theme/CodeBlock";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import versions from "../../static/json/versions-tooling.json";
interface Compatibility {
  network: string;
  version: string;
}

interface Project {
  title: string;
  compatibilities: Compatibility[];
  install: string;
  npmLink: string;
}

interface VersionsData {
  title: string;
  projects: Project[];
  networks: string[];
}

export default function VersionsTable() {
  const versionsData: VersionsData = versions;

  return (
    <Tabs defaultValue="Mainnet">
      {versionsData.networks.map((network) => (
        <TabItem value={network} label={network} key={network}>
          <table>
            <thead>
              <tr>
                <th>Project</th>
                <th>Install</th>
                <th>NPM versions</th>
              </tr>
            </thead>
            <tbody>
              {versionsData.projects.map((project, i) => {
                const compatibility = project.compatibilities.find(
                  (comp) => comp.network === network
                );
                return (
                  <tr key={i}>
                    <td>{project.title}</td>
                    <td>
                      <CodeBlock className="language-bash">
                        {compatibility
                          ? `${project.install}@${compatibility.version}`
                          : ""}
                      </CodeBlock>
                    </td>

                    <td>
                      <a
                        href={project.npmLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.title} versions
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </TabItem>
      ))}
    </Tabs>
  );
}
