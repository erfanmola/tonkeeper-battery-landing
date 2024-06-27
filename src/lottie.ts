import lottie, { RendererType } from 'lottie-web/build/player/lottie_light';

import { inflate } from 'pako';

window.addEventListener('DOMContentLoaded', () => {

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

            const animation = lottie.loadAnimation({
                container: lottieContainer,
                renderer: lottieContainer.getAttribute('data-renderer')! as RendererType,
                loop: lottieContainer.getAttribute('data-loop') == 'true',
                autoplay: true,
                animationData: file,
                rendererSettings: {
                    focusable: false,
                    preserveAspectRatio: 'xMidYMid meet',
                }
            });

            animation.setSpeed(parseFloat(lottieContainer.getAttribute('data-speed')!));

        }).catch((e) => {
            console.log('error fetching lottie file', e);
        });

        // rlottieWorker.postMessage({
        //     type: 'initializeLottie',
        //     params: {
        //         speed: ,
        //         tgs: ,
        //         width: lottieContainer.children[0].getAttribute('width'),
        //         height: lottieContainer.children[0].getAttribute('height'),
        //     },
        // });
    });
});