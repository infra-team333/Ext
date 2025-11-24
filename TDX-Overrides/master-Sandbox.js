// masterOverrides-Sandbox.js — Modular, maintainable, FOUC-free

// ======================== Versioning Notice ========================
// Current version: v=251120 (YYMMDD), f=1120 (HHMM)
//
// IMPORTANT: When updating this file, you MUST also update BOTH
// query parameters in the TDX Client HTML Header to force browsers
// to fetch the new file and avoid caching issues.
//
// Format:
//   v = date in YYMMDD
//   f = time in HHMM
//
// Location in TDX Admin Console:
//   Applications → Service Desk → Settings → Client HTML Header
//
// Example of the script tag in TDX Client HTML Header:
//   <script src="https://infra-team333.github.io/Ext/TDX-Overrides/master-Sandbox.js?v=251120&f=1120"></script>
//
// Update procedure:
// 1. Change 'v' if the date changes (e.g., new day of update)
// 2. Change 'f' to match the time of the update (HHMM)
// 3. Save the header; browsers will fetch the new file immediately.
//
// Notes:
// - Edge caches aggressively; updating both parameters guarantees
//   that all browsers retrieve the latest version.
// - This also ensures that your CSS overrides load immediately and
//   prevents FOUC (Flash of Unstyled Content).
// ===================================================================

(function() {
  const currentUrl = window.location.href;

  // ================================
  // 1. Define CSS sections
  // ================================
  const cssSections = {
    // Global overrides (always applied)
    global: `
      /* ========== GLOBAL OVERRIDES ========== */
      #btnSubmit[value="HideMe3000"] {
        display: none !important;
      }
      /* Add other global overrides here */
    `,

    // DDS Service Catalogue (combined base + conditional)
    ddsCatalogue: `
      /* ========== DDS SERVICE CATALOGUE ========== */
      .dds-container {
        font-family: 'Segoe UI', Roboto, sans-serif;
        background-color: #F8FAFC;
        border-radius: 20px;
        padding: 40px 30px;
        max-width: 1200px;
        margin: 0px auto 40px auto;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
      }

      .dds-title {
        color: #005C8B;
        text-align: center;
        margin-bottom: 2rem;
        margin-top: 2rem;
        font-weight: 600;
      }

      .dds-services .dds-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 2rem;
      }

      .dds-card {
        background: white;
        border: 1px solid #E2E8F0;
        border-radius: 12px;
        padding: 1.5rem;
        transition: 0.3s;
        box-shadow: 0 2px 6px rgba(0,0,0,0.05);
      }

      .dds-card:hover {
        transform: translateY(-6px);
        border-color: #00B5E2;
        box-shadow: 0 6px 18px rgba(0,0,0,0.08);
      }

      .dds-title h2, .dds-card h3 {
        color: #005C8B;
        margin-top: 0;
      }

      .dds-card p {
        color: #475569;
      }

      .dds-card a {
        display: inline-block;
        margin-top: 1rem;
        color: #00B5E2;
        font-weight: 600;
        text-decoration: none;
        transition: 0.3s;
      }

      .dds-card a:hover {
        color: #0077B6;
      }

      .dds-description {
        font-size: 18px;
        line-height: 2.2rem;
        background-color: #ffffff;
        border-left: 6px solid;
        border-image: linear-gradient(180deg, #00B5E2, #005C8B) 1;
        padding: 20px;
        margin: 0px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .dds-description p {
        margin: 0;
        color: #475569;  
        line-height: 1.6;
        margin-left: 20px;
      }

      .dds-description img {
        width: 200px;
        height: 226px;
      }

      @media (max-width: 600px) {
        .dds-container {
          padding: 20px 15px;
        }
      }

      /* Conditional only for ServiceDet?ID=4605 */
      #servicesContent .row.gutter-top #divSidebar {
        display: none !important;
      }
      @media (min-width: 992px) {
        .col-md-8 {
          width: 100% !important;
        }
      }
      /* Hide the main DDS title */
      #divMainContent h1.wrap-text {
        display: none !important;
      }
    `,

    // Example: future services can just be added here
    serviceX: `
      /* CSS for Service X */
    `,

    serviceY: `
      /* CSS for Service Y */
    `
  };

  // ================================
  // 2. Map URLs to services
  // ================================
  const serviceMap = [
    {
      match: /.*/,      // all pages
      cssKeys: ['global']
    },
    {
      match: url => url.includes("ServiceDet?ID=4605"),
      cssKeys: ['ddsCatalogue']
    }
    // Add future services here
    // {
    //   match: url => url.includes("ServiceDet?ID=4701"),
    //   cssKeys: ['serviceX']
    // }
  ];

  // ================================
  // 3. Combine all CSS for this page
  // ================================
  let finalCSS = '';

  serviceMap.forEach(service => {
    if ((typeof service.match === 'function' && service.match(currentUrl)) ||
        (service.match instanceof RegExp && service.match.test(currentUrl))) {
      service.cssKeys.forEach(key => {
        if (cssSections[key]) finalCSS += cssSections[key];
      });
    }
  });

  // ================================
  // 4. Inject CSS synchronously
  // ================================
  const style = document.createElement('style');
  style.textContent = finalCSS;
  document.head.appendChild(style);

})();
