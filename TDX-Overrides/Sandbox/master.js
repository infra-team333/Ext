(function() {
  const baseURL = "https://kajih82.github.io/CustomJS/";

  // Always load global overrides
  const scriptsToLoad = ["globalOverrides.js"];

  const currentUrl = window.location.href;

  // Conditional: Load DDS Catalogue styles if on specific page
  if (currentUrl.includes("ServiceDet?ID=4605")) {
    scriptsToLoad.push("ddsCatalogue.js");
  }

  // Dynamically inject scripts
  scriptsToLoad.forEach(file => {
    const script = document.createElement("script");
    script.src = `${baseURL}${file}?v=${Date.now()}`; // cache-busting
    document.head.appendChild(script);
  });
})();
