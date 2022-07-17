import create from "zustand";

interface TestCountState {
    testCount: number;
    addCount: () => void;
    resetCount: () => void;
    // toggleCompletedState: (id: string) => void;
}

//https://stackoverflow.com/questions/15487220/typescript-primitive-types-any-difference-between-the-types-number-and-numbe
export const useStore = create<TestCountState>(set => ({
    testCount: 0,
    addCount: () => {
        set((state) => ({
            testCount: state.testCount + 1
        }))
    },
    resetCount: () => {
        set((state) => ({
            testCount: 0
        }))
    }
}))