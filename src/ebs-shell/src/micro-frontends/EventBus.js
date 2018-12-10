let apps = [];

const subcribe = (window) => {
  window.addEventListener('message', (e) => post(e.data));

  apps.push(window);

  return () => {
    apps = apps.filter(app => app !== window);
  }
};

const post = (message) => {
  apps.forEach(app => {
    app.postMessage(message, '*')
  })
};

export {
  subcribe,
  post,
}
