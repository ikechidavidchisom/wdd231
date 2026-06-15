// Open modals when links are clicked
  document.querySelectorAll(".card a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const modalId = link.getAttribute("href").substring(1);
      document.getElementById(modalId).showModal();
    });
  });

  // Close modals when "Close" button is clicked
  document.querySelectorAll("dialog .close").forEach(btn => {
    btn.addEventListener("click", e => {
      e.target.closest("dialog").close();
    });
  });