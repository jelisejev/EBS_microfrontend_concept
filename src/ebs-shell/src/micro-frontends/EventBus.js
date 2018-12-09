const apps = [];

const subcribe = (window) => {
  window.addEventListener('message', () => console.log('zz'));

  apps.push(window);
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
