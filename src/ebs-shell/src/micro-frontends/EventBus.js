const apps = [];

const eventListener = (m) => {
  console.log(m);
};

const register = (window) => {
  window.addEventListener('message', eventListener);

  apps.push(window);

  // return () => {
  //   iframe.
  // }
};

export {
  register,
}
