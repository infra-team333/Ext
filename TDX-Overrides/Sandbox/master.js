// master.js

(async function () {
  // Create a single cache-busting value for all module loads
  const cacheBust = `?v=${Date.now()}`;

  async function load(modulePath) {
    return await import(`${modulePath}${cacheBust}`);
  }

  // Always load global overrides
  const globalOverrides = await load('./globalOverrides.js');

  // Create the <style> element
  const style = document.createElement('style');
  style.innerHTML = globalOverrides.css;

  // Conditionally load the DDS Catalogue CSS
  const currentUrl = window.location.href;
  if (currentUrl.includes("ServiceDet?ID=4605")) {
    const dds = await load('./ddsCatalogue.js');
    style.innerHTML += `
      ${dds.css}
      ${dds.conditionalCss}
    `;
  }

  document.head.appendChild(style);
})();

