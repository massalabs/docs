import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

export function FeatureList({ children }) {
  return <>
    <div className="container features">
      <div className="row">
        {children}
      </div>
    </div>
  </>
}
const IconExternalLink = () => (
  <svg width="0.8rem" height="0.8rem" aria-hidden="true" viewBox="0 0 24 24" className="iconExternalLink_node_modules-[@docusaurus-theme-classic-lib-theme-Icon-ExternalLink-styles-module">
    <path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path>
  </svg>
);

export function Feature({ url, title, content, icon }) {
  const isExternal = url.startsWith('http');
  const target = isExternal ? '_blank' : '_self';
  const rel = isExternal ? "noopener noreferrer" : "";

  return <>
    <a className={clsx("col col--4", styles.feature)} href={url} target={target} rel={rel}>
      <div>
        <div className="avatar__name">{icon} {title} {isExternal && <IconExternalLink/>}</div>
        <small>{content}</small>
      </div>
    </a>
  </>
}
