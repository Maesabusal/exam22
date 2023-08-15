document.addEventListener("DOMContentLoaded", function () {
    const sectionBoxes = document.querySelectorAll(".section-box");
    
    sectionBoxes.forEach(function (box, index) {
      box.addEventListener("click", function () {
        fetch(`${box.id}.json`)
          .then(response => response.json())
          .then(data => {
            displayDetails(data);
          });
      });
    });
    
    function displayDetails(data) {
      const detailsContainer = document.createElement("div");
      detailsContainer.className = "details-container";
      
      data.forEach(item => {
        const itemContainer = document.createElement("div");
        itemContainer.className = "item-container";
        
        const itemName = document.createElement("h2");
        itemName.textContent = item.name;
        
        const itemDescription = document.createElement("p");
        itemDescription.textContent = item.description;
        
        itemContainer.appendChild(itemName);
        itemContainer.appendChild(itemDescription);
        
        detailsContainer.appendChild(itemContainer);
      });
      
      document.body.innerHTML = "";
      document.body.appendChild(detailsContainer);
    }
  });
  