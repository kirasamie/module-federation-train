import { createApi, createStore } from 'effector';

const $data = createStore(0);
export const counter = {
    $data,
    ...createApi($data, {
        incremented: (state) => state + 1,
    })
}