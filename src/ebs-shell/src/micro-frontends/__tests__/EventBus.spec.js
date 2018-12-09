import {register, post} from "../EventBus";

describe('EventBus', () => {
  it('allows to subscribe to messages', () => {
    register(window);
    jest.spyOn(window, 'postMessage');

    post('test-message');

    expect(window.postMessage).toHaveBeenCalledWith('test-message', expect.anything());

    window.postMessage.mockRestore();
  });
});
