interface LottieAnimationProps {
    lottie: string;
    tgs?: boolean;
    width?: number;
    height?: number;
    speed?: number;
    loop?: boolean;
    renderer?: 'svg' | 'canvas' | 'html';
};

// Hint: This component is not reactive due to destructuring, nor does it need to be
const LottieAnimation = ({
    lottie,
    tgs = false,
    width = 320,
    height = 320,
    speed = 1,
    loop = true,
    renderer = 'svg',
}: LottieAnimationProps) => {
    return (
        <div
            data-lottie={lottie}
            data-tgs={tgs}
            data-speed={speed}
            data-loop={loop}
            data-width={width}
            data-height={height}
            data-renderer={renderer}></div>
    );
};

export default LottieAnimation;