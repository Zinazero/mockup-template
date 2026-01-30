import type { FC, JSX } from 'react';

interface UnderlineHeaderProps {
  text: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  fontColorClass?: string;
}

export const UnderlineHeader: FC<UnderlineHeaderProps> = ({ text, level, fontColorClass = 'text-dark' }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <div className="flex flex-col items-center space-y-12 relative">
      <Tag className={`underline-header text-5xl font-bold ${fontColorClass}`}>{text}</Tag>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        className="absolute top-1/2 -translate-y-1/2 mt-2"
      >
        <title>Orange swooping underline</title>
        <path d="M8.1,146.2c0,0,240.6-55.6,479-13.8" />
      </svg>
    </div>
  );
};
