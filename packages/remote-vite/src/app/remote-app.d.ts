import { EventCallable } from 'effector';

declare module '@train/remote-vite/main' {
    export const SuperButton: React.FC<{
        className?: string;
    }>;
    export const counter: Counter;
}

interface Counter {
    $data: Store<number>;
    incremented: EventCallable<void>;
}