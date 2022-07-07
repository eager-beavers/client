import create from "zustand";

interface TestCountState {
    testCount: Number;
    addCount: () => void;
    reSetCount: () => void;
    // toggleCompletedState: (id: string) => void;
}

export const useStore = create<TestCountState>(set => ({
    testCount: 0,
    addCount: () => {

    },
    reSetCount: () => {

    }
}))