import lottie, { RendererType } from 'lottie-web';

import { inflate } from 'pako';

console.log(lottie, inflate);

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

            lottie.loadAnimation({
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

        }).catch((e) => {
            console.log('error fetching lottie file', e);
        });

        // rlottieWorker.postMessage({
        //     type: 'initializeLottie',
        //     params: {
        //         speed: parseFloat(lottieContainer.getAttribute('data-speed')!),
        //         tgs: ,
        //         width: lottieContainer.children[0].getAttribute('width'),
        //         height: lottieContainer.children[0].getAttribute('height'),
        //     },
        // });
    });
});