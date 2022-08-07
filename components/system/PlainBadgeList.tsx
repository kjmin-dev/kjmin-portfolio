import { Fragment } from 'react';

export interface PlainBadgeListProps {
  badges: Array<string>;
  spacing?: number;
}

export const PlainBadgeList = ({
  badges,
  spacing = 2,
}: PlainBadgeListProps) => (
  <Fragment>
    {badges.map(badge => (
      <span key={badge} className={`badge ml-${spacing}`}>
        {badge}
      </span>
    ))}
  </Fragment>
);
