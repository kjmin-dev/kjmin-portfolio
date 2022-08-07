import { Fragment } from 'react';

import DividerText from '../system/DividerText';
import section from '../../contents/section.json';
import edu from '../../contents/education.json';
import type {
  EducationList as EducationListType,
  EducationListItem as EducationListItemType,
} from '../../contents/eductaion.type';
import { PlainBadgeList } from '../system/PlainBadgeList';

function EducationListItem({
  education,
}: {
  education: EducationListItemType;
}) {
  return (
    <article className="mt-5">
      <div>{education.name}</div>
      <div className="font-thin">{`${education.duration} - ${education.degree}`}</div>
      <div className="font-thin">{education.major}</div>
      <div className="mt-1">{education.description}</div>
      <PlainBadgeList badges={education.keywords} />
    </article>
  );
}
function EducationList({ educations }: { educations: EducationListType }) {
  return (
    <Fragment>
      {educations.map(education => (
        <EducationListItem key={education.name} education={education} />
      ))}
    </Fragment>
  );
}
export default function EducationSection() {
  return (
    <section className="mt-10">
      <DividerText>{`${section.education} (${edu.educations.length})`}</DividerText>
      <EducationList educations={edu.educations} />
    </section>
  );
}
