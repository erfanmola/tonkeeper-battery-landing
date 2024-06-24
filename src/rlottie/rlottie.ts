import RLottieWorker from './rlottie-worker?worker';

const rlottieWorker = new RLottieWorker();
rlottieWorker.onmessage = (message) => {
    if (message.data.type === 'frame') {
        lottieCanvasContexts[message.data.id].putImageData(message.data.data, 0, 0);
    }
};

let lottieCanvasContexts: { [key: string]: CanvasRenderingContext2D } = {};

window.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('div[data-lottie]').forEach((lottieContainer) => {

        lottieCanvasContexts[lottieContainer.getAttribute('data-lottie-id')!] = (lottieContainer.children[0] as HTMLCanvasElement).getContext('2d')!;

        rlottieWorker.postMessage({
            type: 'initializeLottie',
            params: {
                id: lottieContainer.getAttribute('data-lottie-id'),
                file: lottieContainer.getAttribute('data-lottie'),
                loop: lottieContainer.getAttribute('data-loop') == 'true',
                speed: parseFloat(lottieContainer.getAttribute('data-speed')!),
                tgs: lottieContainer.getAttribute('data-tgs') == 'true',
                width: lottieContainer.children[0].getAttribute('width'),
                height: lottieContainer.children[0].getAttribute('height'),
            },
        });
    });
});