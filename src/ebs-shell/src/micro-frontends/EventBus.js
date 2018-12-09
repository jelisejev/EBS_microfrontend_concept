const apps = [];

const register = (window) => {
  window.addEventListener('message', () => console.log('zz'));

  apps.push(window);
};

const post = (message) => {
  apps.forEach(app => {
    app.postMessage(message, '*')
  })
}

export {
  register,
  post,
}
