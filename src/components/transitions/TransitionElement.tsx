import { Transition } from '@headlessui/react';
import { ReactNode } from 'react';
import { InView } from 'react-intersection-observer';

interface Props {
  item?: ReactNode
}

const TransitionElement = ({ item }: Props) => (
  <InView>
    {({ inView, ref }) =>
      <div ref={ref}>
        <Transition.Root show={inView}>
          <Transition.Child
            as="div"
            enter="ease-in duration-[500ms] transition-all "
            enterFrom="invisible translate-y-48"
            enterTo="visible translate-y-0"
          >
            { item }
          </Transition.Child>
        </Transition.Root>
      </div>
    }
  </InView>
);

export default TransitionElement;
