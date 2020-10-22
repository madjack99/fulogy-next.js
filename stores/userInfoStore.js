import { createEvent, createStore } from 'effector';

export const $userInfoStore = createStore({
  name: 'John Doe',
  email: 'john@doe.com',
  mobile: '+12345',
});

export const updateUserInfo = createEvent();

$userInfoStore.on(updateUserInfo, (_, updatedInfo) => updatedInfo);
