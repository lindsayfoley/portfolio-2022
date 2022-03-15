import { VFC } from "react";
import { Nav } from "components/atoms";
import { JobDetailsCard } from "components/molecules";
// import workExperience from "../../molecules/jobDetailsCard/jobs";
import styles from "./portfolio.module.scss";

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
        links={[
          { link: "/about", cta: "about me" },
          { link: "/", cta: "back to home" },
        ]}
      />
    </main>
  </>
);

export default Portfolio;
