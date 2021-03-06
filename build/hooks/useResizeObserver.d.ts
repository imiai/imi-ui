import { RefObject, RefCallback } from "react";
declare type ObservedSize = {
    width: number | undefined;
    height: number | undefined;
};
declare type ResizeHandler = (size: ObservedSize) => void;
declare type HookResponse<T extends HTMLElement> = {
    ref: RefCallback<T>;
} & ObservedSize;
declare type ResizeObserverBoxOptions = "border-box" | "content-box" | "device-pixel-content-box";
declare global {
    interface ResizeObserverEntry {
        readonly devicePixelContentBoxSize: ReadonlyArray<ResizeObserverSize>;
    }
}
declare type RoundingFunction = (n: number) => number;
declare function useResizeObserver<T extends HTMLElement>(opts?: {
    ref?: RefObject<T> | T | null | undefined;
    onResize?: ResizeHandler;
    box?: ResizeObserverBoxOptions;
    round?: RoundingFunction;
}): HookResponse<T>;
export default useResizeObserver;
