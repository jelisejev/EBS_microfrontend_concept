import {subcribe, post} from "../EventBus";

describe('EventBus', () => {
  it('allows to subscribe to messages', () => {
    subcribe(window);
    jest.spyOn(window, 'postMessage');

    post('test-message');

    expect(window.postMessage).toHaveBeenCalledWith('test-message', expect.anything());

    window.postMessage.mockRestore();
  });

  it('allows to unsubsribe from messages', () => {
    const unsubscribe = subcribe(window);
    jest.spyOn(window, 'postMessage');
    unsubscribe();

    post('test-message');

    expect(window.postMessage).not.toHaveBeenCalled();

    window.postMessage.mockRestore();
  });

  it('re-transmits received messages', () => {
    const iframe = document.createElement('iframe');
    document.body.appendChild(iframe);

    subcribe(window);
    subcribe(iframe.contentWindow);

    jest.spyOn(iframe.contentWindow, 'postMessage');

    const event = new MessageEvent('message', {
      data: 'test-message'
    });
    window.dispatchEvent(event);

    expect(iframe.contentWindow.postMessage).toHaveBeenCalledWith('test-message', expect.anything());
    iframe.remove();
  })
});
