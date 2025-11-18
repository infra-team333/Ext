function() {
  const style = document.createElement("style");
  style.innerHTML = `
    /* Hide form buttons named HideMe3000 globally */
    #btnSubmit[value="HideMe3000"] {
      display: none !important;
    }
  `;
  document.head.appendChild(style);
})();
