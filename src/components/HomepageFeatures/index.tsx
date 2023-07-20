import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Discover Massa",
    content: "Learn basic concepts and inner workings of Massa blockchain.",
    docName: "docs/learn/home",
    icon: "🎓",
  },
  {
    title: "Start Building",
    content: "Start building your decentralized application.",
    docName: "docs/build/home",
    icon: "🛠️",
  },
  {
    title: "Tutorial",
    content: "Practical examples and step-by-step tutorials for building decentralized applications on Massa.",
    docName: "docs/tutorial/home",
    icon: "📖",
  },
  {
    title: "Run a Testnet Node",
    content: "Validate transactions, secure the network, and earn rewards.",
    docName: "docs/node/home",
    icon: "🖥",
  },
];

function Feature({ docName, title, content, icon }) {
  return (
    <div className={clsx("col col--4 margin-bottom--lg")}>
      <Link className={clsx("card", styles.card)} to={docName}>
        <h3>
          <span className={clsx("margin-right--sm", styles.icon)}>{icon}</span>
          {title}
        </h3>
        <p>{content}</p>
      </Link>
    </div>
  );
}

function HomepageHeader() {
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container">
        <h1 className={clsx("hero__title")}>Welcome to the Massa docs!</h1>
      </div>
    </header>
  );
}

export default function HomepageFeatures() {
  return (
    <div>
      <HomepageHeader />
      <section className={styles.features}>
        <div className={clsx("container", styles.container)}>
          <div className={clsx("row", styles.row)}>
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
