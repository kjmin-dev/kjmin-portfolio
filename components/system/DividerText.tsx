import { PropsWithChildren } from 'react';

export interface DividerTextProps {
  spacing?: number;
}

export default function DividerText({
  spacing = 2,
  children,
}: PropsWithChildren<DividerTextProps>) {
  return (
    <div className="relative flex pt-6 items-center">
      {children}
      <div className={`flex-grow border-t border-gray-400 ml-${spacing}`}></div>
    </div>
  );
}
