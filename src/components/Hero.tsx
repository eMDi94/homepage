import { useState } from 'react';
import DotLine from './DotLine';
import { Transition } from '@headlessui/react';

const birthday = new Date('1994-01-23');
const today = new Date();
const age = new Date(today.valueOf() - birthday.valueOf()).getFullYear() - 1970;


const heroItems: HeroItemProps[] = [
  { title: "Hello. I'm Marco, a full-stack software developer and egineer", text: `I'm ${age} years old, and I live in Reggio Emilia.` },
  { title: 'I develop not only for work', text: 'Being a developer is not only my work, but also my passion. I really love writing code and to learn new technologies.' },
  { title: 'Back-End first, Front-End for necessity', text: 'I am a full-stack developer, but I prefer developing on the back-end side of an application.' }
];

const Hero = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const onIndexSelected = (idx: number) => setCurrentIdx(idx);

  return (
    <div className="flex flex-col md:grid md:grid-cols-4 md:gap-4 md:w-1/2">
      <div className="max-w-sm md:max-w-none mx-auto md:mx-0 md:col-span-3">
        {heroItems.map((item, idx) => (
          <Transition
            appear={true}
            show={idx === currentIdx}
            enter="transition-opacity duration-100"
            enterFrom="opacity-0"
            enterTo="opacity-100"
          >
            <HeroItem {...item} />
          </Transition>
        ))}
      </div>
      <DotLine numberOfTabs={heroItems.length} onIndexSelected={onIndexSelected} />
    </div>
  );
};

interface HeroItemProps {
  title: string;
  text: string;
}

const HeroItem = ({ title, text }: HeroItemProps) => (
  <div className="flex flex-col gap-10">
    <span className="text-3xl font-bold text-center font-mono">
      {title}
    </span>
    <span className="font-semibold text-xl text-justify font-mono">
      {text}
    </span>
  </div>
);

export default Hero;
