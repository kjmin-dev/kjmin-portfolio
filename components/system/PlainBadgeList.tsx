import { Badge } from 'react-daisyui';
import { Fragment } from 'react';

export interface PlainBadgeListProps {
  badges: Array<string>;
  spacing?: number;
}

export const PlainBadgeList = ({ badges }: PlainBadgeListProps) => (
  <Fragment>
    {badges.map(badge => (
      <Badge key={badge} className={`ml-2`}>
        {badge}
      </Badge>
    ))}
  </Fragment>
);
