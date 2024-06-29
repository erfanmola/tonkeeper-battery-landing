import lottie, { AnimationItem, RendererType } from 'lottie-web/build/player/lottie_light';

import { inflate } from 'pako';

window.addEventListener('DOMContentLoaded', () => {

    const animations: { [key: string]: AnimationItem } = {};

    const callback: IntersectionObserverCallback = (entries, observer) => {
        entries.forEach((entry) => {
            const lottieContainer = entry.target;
            const animationId = lottieContainer.getAttribute('data-lottie-id')!;
            const animation = animations[animationId]!;

            if (entry.isIntersecting) {
                animation.play();

                if (lottieContainer.getAttribute('data-loop') != 'true') {
                    observer.unobserve(lottieContainer);
                }
            } else {
                animation.pause();
            }
        });
    };

    const observer = new IntersectionObserver(callback, {
        root: null,
        rootMargin: '0px',
        threshold: 0.25,
    });

    document.querySelectorAll('div[data-lottie]').forEach(async (lottieContainer) => {

        fetch(lottieContainer.getAttribute('data-lottie')!).then(async (response) => {

            let file;

            if ((lottieContainer.getAttribute('data-tgs') == 'true') || lottieContainer.getAttribute('data-lottie')?.toString().endsWith('.tgs')) {
                const uint8Array = new Uint8Array(await response.arrayBuffer());
                file = inflate(uint8Array, { to: "string" });
            } else {
                file = await response.text();
            }

            file = JSON.parse(file);

            const animationId = lottieContainer.getAttribute('data-lottie-id')!;

            animations[animationId] = lottie.loadAnimation({
                container: lottieContainer,
                renderer: lottieContainer.getAttribute('data-renderer')! as RendererType,
                loop: lottieContainer.getAttribute('data-loop') == 'true',
                autoplay: false,
                animationData: file,
                rendererSettings: {
                    focusable: false,
                }
            });

            animations[animationId].setSpeed(parseFloat(lottieContainer.getAttribute('data-speed')!));

            observer.observe(lottieContainer);

        }).catch((e) => {
            console.error('error fetching lottie file', e);
        });
    });
});