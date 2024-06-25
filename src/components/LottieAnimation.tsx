interface LottieAnimationProps {
    lottie: string;
    tgs?: boolean;
    width?: number;
    height?: number;
    speed?: number;
    loop?: boolean;
};

// Hint: This component is not reactive due to destructuring, nor does it need to be
const LottieAnimation = ({
    lottie,
    tgs = false,
    width = 320,
    height = 320,
    speed = 1,
    loop = true
}: LottieAnimationProps) => {
    return (
        <div data-lottie={lottie} data-tgs={tgs} data-speed={speed} data-loop={loop} data-lottie-id={Math.random().toString(36).substring(2, 8)}>
            <canvas width={width} height={height}></canvas>
        </div>
    );
};

export default LottieAnimation;