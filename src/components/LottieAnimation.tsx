interface LottieAnimationProps {
    lottie: string;
    tgs?: boolean;
    width?: number;
    height?: number;
    speed?: number;
    loop?: boolean;
};

const LottieAnimation = ({
    lottie,
    tgs = false,
    width = 320,
    height = 320,
    speed = 0.5,
    loop = true
}: LottieAnimationProps) => {
    return (
        <div data-lottie={lottie} data-tgs={tgs} data-speed={speed} data-loop={loop}>
            <canvas width={width} height={height}></canvas>
        </div>
    );
};

export default LottieAnimation;