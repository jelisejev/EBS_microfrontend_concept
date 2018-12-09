const evalScripts = (node) => {
  const scripts = node.querySelectorAll('script');
  scripts.forEach(scriptNode => {
    const parent = scriptNode.parentNode;

    scriptNode.remove();
    parent.appendChild(createScriptNode(scriptNode))
  })
};

const createScriptNode = (scriptNode) => {
  const newNode = document.createElement('script');
  newNode.setAttribute('src', scriptNode.getAttribute('src'));

  return newNode;
}

export default evalScripts;
