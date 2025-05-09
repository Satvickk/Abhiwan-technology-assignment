console.log("javascript loaded...");


  const searchIcon = document.getElementById("search-icon");
  const searchInput = document.getElementById("search-input");
  const navMenu = document.getElementById("nav-menu")

  searchIcon.addEventListener("click", () => {
    if (searchInput.style.display === "none" || searchInput.style.display === "") {
      searchInput.style.display = "block";
      navMenu.style.display = "none";
      searchInput.style.width = "50%"
      searchInput.focus();
    } else {
      searchInput.style.display = "none";
      navMenu.style.display = "flex";
    }
  });


  
