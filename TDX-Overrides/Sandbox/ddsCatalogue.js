(function() {
  // Create a new <style> element for DDS-specific overrides
  const style = document.createElement('style');
  style.innerHTML = `
    .dds-container {
  font-family: 'Segoe UI', Roboto, sans-serif;
  background-color: #F8FAFC;
  border-radius: 20px;
  padding: 40px 30px;
  max-width: 1200px;
  margin: 40px auto;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
}

/* Title */
.dds-title {
  color: #005C8B;
  text-align: center;
  margin-bottom: 2rem;
	margin-top: 2rem;
  font-weight: 600;
}

/* Grid Layout */
.dds-services .dds-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

/* Cards */
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

.dds-title h2 {
  color: #005C8B;
  margin-top: 0;
}

.dds-card h3 {
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

/* Description Box */
.dds-description {
  background-color: #ffffff;
  border-left: 6px solid;
  border-image: linear-gradient(180deg, #00B5E2, #005C8B) 1;
  padding: 20px;
  margin: 0px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  display: flex;              /* Enables side-by-side layout */
  justify-content: space-between; /* Push text left, image right */
  align-items: center;        /* Vertically center both */
}

.dds-description p {
  margin: 0;
  color: #475569;  
  line-height: 1.6;
	margin-left: 20px;         /* Adds small gap before image */
}

.dds-description img {
  width: 200px;                /* Adjust image size */
  height: 226px;
}

/* Responsive tweaks */
@media (max-width: 600px) {
  .dds-container {
    padding: 20px 15px;
  }

/* HIDE SIDEBAR FROM CATALOGUE AND SET MAIN CONTENT TO 100% */
  #servicesContent .row.gutter-top #divSidebar {
    display: none !important;
  }
  @media (min-width: 992px) {
    .col-md-8 {
      width: 100% !important;
    }
  }  
  `;

  // Append to document head
  document.head.appendChild(style);
})();
