import { useState } from 'react';
import type { MouseEventHandler } from 'react';

type OnIndexSelectedFunction = (idx: number) => void;

interface DotLineProps {
  numberOfTabs: number;
  onIndexSelected: OnIndexSelectedFunction;
}

const DotLine = ({ numberOfTabs, onIndexSelected }: DotLineProps) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const indexes = [...Array(numberOfTabs).keys()];

  const onDotClick = (idx: number) => {
    setCurrentIdx(idx);
    onIndexSelected(idx);
  };

  return (
    <div className="flex flex-col items-center">
      {indexes.map(idx => (
        <>
          <Dot selected={currentIdx === idx} onClick={() => onDotClick(idx)} />
          {idx !== (numberOfTabs - 1) ? <Line /> : null}
        </>
      ))}
    </div>
  );
}

interface DotProps {
  selected: boolean;
  onClick: MouseEventHandler;
}

const Dot = ({ selected, onClick }: DotProps) => {
  let cssClass = 'rounded-full w-full h-full';
  cssClass = `${cssClass} ${selected ? 'bg-teal-500 dark:bg-pink-700' : 'hover:bg-teal-500 dark:hover:bg-pink-700'}`

  return (
    <div 
      className="border-2 rounded-full border-zinc-900 dark:border-gray-50 cursor-pointer h-6 w-6 p-[2px]"
      onClick={onClick}
    >
      <div className={cssClass}></div>
    </div>
  );
};

const Line = () => (
  <div className="flex flex-col items-center justify-center py-1">
    <div className="w-1 h-12 bg-zinc-900 dark:bg-gray-50"></div>
  </div>
);

export default DotLine;