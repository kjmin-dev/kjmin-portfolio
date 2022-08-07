import { Fragment } from 'react';

import section from '../../contents/section.json';
import DividerText from '../system/DividerText';
import exp from '../../contents/experience.json';
import type {
  ExperienceListItem,
  ExperienceList,
} from '../../contents/experience.type';

function WorkExperienceItem({
  experience,
}: {
  experience: ExperienceListItem;
}) {
  return (
    <article className="mt-4">
      {/* Company/Position */}
      <div>
        <div className="inline-block font-bold">{experience.position}</div>
        {` at ${experience.company}.`}
      </div>
      {/* Employment Period */}
      <div className="font-thin">
        {experience.startedAt} ~ {experience.endedAt}
      </div>
      {/* Description */}
      <div className="mt-2">{experience.description}</div>
      {/* Experiences */}
      <ul className="list-disc">
        {experience.experiences.map(exp => (
          <li key={exp} className="ml-4">
            {exp}
          </li>
        ))}
      </ul>
      <div className="mt-2">
        {experience.keywords.map(keyword => (
          <span key={keyword} className="badge ml-2">
            {keyword}
          </span>
        ))}
      </div>
    </article>
  );
}

function WorkExperienceList({ experiences }: { experiences: ExperienceList }) {
  return (
    <Fragment>
      {experiences.map(ele => (
        <WorkExperienceItem key={ele.company} experience={ele} />
      ))}
    </Fragment>
  );
}

export default function WorkExperienceSection() {
  return (
    <section>
      <DividerText>{`${section.experience} (${exp.experiences.length})`}</DividerText>
      <WorkExperienceList experiences={[...exp.experiences]} />
    </section>
  );
}
