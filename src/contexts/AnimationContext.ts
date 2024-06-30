import { createContext, useContext } from 'solid-js';

type AnimationContextType = {
    setAnimationTargets: (item: any) => void;
};

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

export const AnimationProvider = AnimationContext.Provider;

export const useAnimation = () => {
    const context = useContext(AnimationContext);
    if (!context) {
        throw new Error("useAnimation must be used within a AnimationProvider");
    }
    return context;
};
