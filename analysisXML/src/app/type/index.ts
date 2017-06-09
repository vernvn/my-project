export type InternalStringAnyType = {
    [key: string]: any
};
export type StoreType = {
    state: InternalStringAnyType,
    restoreInputValues: () => void,
    disposeOldHosts: () => void
};
