interface LottieAnimationProps {
    lottie: string;
    tgs?: boolean;
    speed?: number;
    loop?: boolean;
};

// Hint: This component is not reactive due to destructuring, nor does it need to be
const LottieAnimation = ({
    lottie,
    tgs = false,
    speed = 1,
    loop = true,
}: LottieAnimationProps) => {
    return (
        <div
            data-lottie-id={Math.random().toString(36).substring(2, 8)}
            data-lottie={lottie}
            data-tgs={tgs}
            data-speed={speed}
            data-loop={loop}
        ></div>
    );
};

export default LottieAnimation;