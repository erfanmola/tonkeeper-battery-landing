import './Battery.scss';

import { createIntersectionObserver } from "@solid-primitives/intersection-observer";
import { createSignal } from 'solid-js';

const Battery = (props: { percentage: number }) => {

    const [targets, setTargets] = createSignal<Element[]>([]);
    const [observed, setObserved] = createSignal<boolean>(false);

    createIntersectionObserver(targets, (entries, observer) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                observer.unobserve(e.target);
                observer.disconnect();
                setObserved(true);
            }
        });
    });

    return (
        <div ref={el => setTargets(p => [...p, el])} class="battery" style={{ '--acid-height': `${props.percentage}%` }} classList={{ observed: observed() }}>
            <div class="acid-container">

                <div class="acid">

                    <div class="fill"></div>

                    <svg class="waves"
                        xmlns="http://www.w3.org/2000/svg"
                        // @ts-ignore
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 24 150 28"
                        preserveAspectRatio="none">
                        <defs>
                            <path id="gentle-wave"
                                d="M-160 44c30 0
                 58-18 88-18s
                 58 18 88 18
                 58-18 88-18
                 58 18 88 18
                 v44h-352z" />
                        </defs>
                        <g class="parallax">
                            {/* @ts-ignore */}
                            <use xlink:href="#gentle-wave" x="50" y="0" />
                            {/* @ts-ignore */}
                            <use xlink:href="#gentle-wave" x="50" y="3" />
                            {/* @ts-ignore */}
                            <use xlink:href="#gentle-wave" x="50" y="6" />
                        </g>
                    </svg>

                </div>

            </div>
        </div>
    );
}

export default Battery;