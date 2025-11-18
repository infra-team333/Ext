// master.js

(function () {

  const cacheBust = `?v=${Date.now()}`;
  const basePath = 'https://infra-team333.github.io/Ext/TDX-Overrides/Sandbox/';

  // Load JS file via script tag
  function loadScript(file) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = basePath + file + cacheBust;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  async function init() {
    // Always load global overrides
    await loadScript('globalOverrides.js');

    let css = window.globalCSS || "";

    // Check if DDS should load
    if (window.location.href.includes("ServiceDet?ID=4605")) {
      await loadScript('ddsCatalogue.js');
      css += window.ddsCSS || "";
      css += window.ddsConditionalCSS || "";
    }

    // Inject FINAL <style> at the end (guarantees overwrite)
    const style = document.createElement('style');
    style.innerHTML = css;
    document.head.appendChild(style);
  }

  init();

})();

