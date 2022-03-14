import { VFC } from "react";
import { JobDetailsCard, Nav } from "components";
import workExperience from "../JobDetailsCard/jobs";
import styles from "./Portfolio.module.scss";

const Portfolio: VFC = () => (
  <>
    <header>
      <h1 itemProp="name">
        <a href="/">My Portfolio</a>
      </h1>
    </header>
    <main>
      <section className={styles.companies}>
        {workExperience.map((job) => (
          <JobDetailsCard key={job.id} company={job} />
        ))}
      </section>
      <Nav
        buttonArr={[
          { link: "/about", cta: "about me" },
          { link: "/", cta: "back to home" },
        ]}
      />
    </main>
  </>
);

export default Portfolio;
