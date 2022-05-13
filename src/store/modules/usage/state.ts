import { UsageState } from "@/store/model";

export const defaultState = (): UsageState => ({
    loading: true,
    data: {
        depenses: [],
        entrees: [],
        notes: []
    },
    error: null
});

const state: UsageState = defaultState()

export default state;