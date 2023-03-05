import { Transition } from '@headlessui/react';
import { InView } from 'react-intersection-observer';

const TransitionElement = ({ item, left = true }) => (
  <InView>
    {({ inView, ref }) =>
      <div ref={ref}>
        <Transition.Root show={inView}>
          <Transition.Child
            as="div"
            enter="ease-in duration-[500ms] transition-all"
            enterFrom={`opacity-0 ${left ? '-' : ''}translate-x-48`}
            enterTo="opacity-100 translate-x-0"
          >
            { item }
          </Transition.Child>
        </Transition.Root>
      </div>
    }
  </InView>
);

export default TransitionElement;
