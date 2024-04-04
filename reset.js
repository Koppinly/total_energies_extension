//will strip the extension when the test deactivates

 
  const extensionElement = document.getElementById('optimizely-extension-' + extension.$instance);
  if (extensionElement) {
    extensionElement.parentElement.removeChild(extensionElement);
  }
