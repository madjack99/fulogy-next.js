import { createEvent, createStore } from 'effector';

export const $editStore = createStore(false);

export const toggleEdit = createEvent();

$editStore.on(toggleEdit, (store) => !store);
