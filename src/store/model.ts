export interface UsageState {
    loading: boolean,
    data: {
        depenses: [],
        entrees: []
        notes: [] 
    },
    error: any
}

export interface RootState {
    usage: UsageState;
}