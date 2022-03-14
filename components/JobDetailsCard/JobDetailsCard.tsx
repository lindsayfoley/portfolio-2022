import React, { useState } from "react";
import styles from "./JobDetailsCard.module.scss";

import { CompanyDetails } from "./jobs";
import { Anchor } from "components";

export interface JobDetailsCardProps {
  company: CompanyDetails;
}

const JobDetailsCard: React.FunctionComponent<JobDetailsCardProps> = ({
  company,
}) => {
  if (!company) {
    return null;
  }

  const [isJobDescriptionVisible, setIsJobDescriptionVisible] =
    useState<boolean>(false);

  const [summaryIsVisible, setSummaryIsVisible] = useState<boolean>(false);

  const cardClassname = "";

  //   className,
  //   handleClick,
  //   summaryIsVisible,

  //   const handleClick = (id: string) => {
  //     const { visibleJobDetailsCard } = state;
  //     let updatedJobs: string[] = [...visibleJobDetailsCard];

  //     if (visibleJobDetailsCard.includes(id)) {
  //       updatedJobs = visibleJobDetailsCard.filter((cardId) => cardId !== id);
  //       setState({ visibleJobDetailsCard: updatedJobs });
  //     } else {
  //       updatedJobs.push(id);
  //       setState({
  //         visibleJobDetailsCard: updatedJobs,
  //       });
  //     }
  //   };

  //   hasVisibleJobSummary = (id: string) =>
  //     state.visibleJobDetailsCard.includes(id);

  const handleClick = (id: string) => {};

  const defaultClassName = "flip-card";
  const classNames =
    cardClassname !== "" && `${cardClassname} ${defaultClassName}`;

  const handleOnKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (
      event.key === " " ||
      event.key === "Enter" ||
      event.key === "Spacebar"
    ) {
      handleClick(company.id);
    }
  };

  return (
    <article
      className={styles["company.id"]}
      onClick={() => handleClick(company.id)}
      onKeyDown={handleOnKeyDown}
      aria-controls={company.id}
      role="button"
      tabIndex={0}
      aria-pressed={summaryIsVisible}
    >
      <div
        className="wrapper"
        itemScope
        itemType="http://schema.org/CreativeWork"
      >
        <div className="heading">
          <h3 itemProp="name">{company.companyName}</h3>
          <span>Details &rsaquo;</span>
        </div>
        <div
          className="description"
          itemProp="description"
          aria-hidden={!summaryIsVisible}
          aria-labelledby={company.id}
        >
          {company.description}
          <hr />
          {company.cta ? (
            <Anchor link={company.link} cta={company.cta} />
          ) : (
            <Anchor link={company.link} cta="Visit Site &rsaquo;" />
          )}
        </div>
      </div>
    </article>
  );
};

export default JobDetailsCard;
