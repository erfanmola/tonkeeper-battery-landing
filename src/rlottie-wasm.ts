import { inflate } from 'pako';

class RLottieModule {
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D | null;
    private lottieHandle: any;
    public totalFrames: number;
    public currentFrame: number;
    public playSpeed: number;
    public loop: boolean = true;

    constructor(canvas: HTMLCanvasElement, loop: boolean, playSpeed: number,) {
        this.canvas = canvas;
        this.context = this.canvas.getContext("2d");
        this.loop = loop;
        this.playSpeed = playSpeed;
        // @ts-ignore
        this.lottieHandle = new Module.RlottieWasm();
        this.totalFrames = this.lottieHandle.frames();
        this.currentFrame = 0;
    }

    load(data: string) {
        this.lottieHandle.load(data)
        this.totalFrames = this.lottieHandle.frames();
        this.currentFrame = 0;
    }

    render(currentFrame: number) {
        if (this.canvas.width == 0 || this.canvas.height == 0 || !(this.context)) return;
        this.currentFrame = currentFrame;
        let buffer = this.lottieHandle.render(this.currentFrame, this.canvas.width, this.canvas.height);
        let result = Uint8ClampedArray.from(buffer);
        let imageData = new ImageData(result, this.canvas.width, this.canvas.height);
        this.context.putImageData(imageData, 0, 0);
    }
}

const script = document.createElement('script');
script.type = 'text/javascript';
script.src = '/rlottie-wasm.js';
document.head.appendChild(script);

script.onload = (_) => {
    // @ts-ignore
    Module.onRuntimeInitialized = (_) => {

        const lottiesRenderAnimatorList: RLottieModule[] = [];

        const lottieContainers = document.querySelectorAll('div[data-lottie]');

        lottieContainers.forEach(async (lottieContainer) => {

            const lottie = new RLottieModule(
                lottieContainer.children[0] as HTMLCanvasElement,
                lottieContainer.getAttribute('data-loop') == 'true',
                parseFloat(lottieContainer.getAttribute('data-speed')!),
            );

            fetch(lottieContainer.getAttribute('data-lottie')!).then(async (response) => {

                let file;

                if (lottieContainer.getAttribute('data-tgs') == 'true' || lottieContainer.getAttribute('data-lottie')?.toString().endsWith('.tgs')) {
                    const uint8Array = new Uint8Array(await response.arrayBuffer());
                    file = inflate(uint8Array, { to: "string" });
                } else {
                    file = await response.text();
                }

                lottie.load(file);
                lottiesRenderAnimatorList.push(lottie);
            }).catch((e) => {
                console.log('error fetching lottie file', e);
            });
        });

        const lottieRenderAnimator = async () => {

            lottiesRenderAnimatorList.forEach((lottie) => {
                lottie.currentFrame += lottie.playSpeed;
                lottie.render(Math.min(lottie.currentFrame, lottie.totalFrames));
                if (lottie.currentFrame >= lottie.totalFrames) {
                    if (lottie.loop) {
                        lottie.currentFrame = 0;
                    } else {
                        lottiesRenderAnimatorList.splice(lottiesRenderAnimatorList.indexOf(lottie));
                    }
                }
            });

            requestAnimationFrame(lottieRenderAnimator);
        };

        lottieRenderAnimator();
    }
};