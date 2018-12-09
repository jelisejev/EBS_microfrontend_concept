import {register} from "../EventBus";

describe('EventBus', () => {
  it('allows to subscribe to messages', () => {
    register(window);
  });
});
