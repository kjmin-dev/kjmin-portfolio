/** @jsxImportSource theme-ui */

import { Grid, GridProps } from 'theme-ui';

export interface StackProps {
  gap?: number;
}

export function VStack({ gap = 1, ...props }: GridProps) {
  return (
    <Grid
      {...props}
      sx={{
        display: 'grid',
        gridGap: gap,
      }}
    />
  );
}
