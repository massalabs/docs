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

export function Feature({ docName, title, content, icon }) {
  return <>
    <a className={clsx("col col--4", styles.feature)} href={docName}>
      <div>
        <div className="avatar__name">{icon} {title}</div>
        <small>{content}</small>
      </div>
    </a>
  </>
}
