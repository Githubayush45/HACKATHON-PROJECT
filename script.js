// Initialize on the Suggestions section by default
document.addEventListener("DOMContentLoaded", () => {
  showSection("suggestions");
});

function showSection(sectionId) {
  const sections = document.querySelectorAll(".section");
  sections.forEach(section => {
    section.style.display = "none";
  });

  document.getElementById(sectionId).style.display = "block";

  const buttons = document.querySelectorAll(".nav-button");
  buttons.forEach(button => {
    button.classList.remove("active");
  });

  document.querySelector(`.nav-button[onclick="showSection('${sectionId}')"]`).classList.add("active");
}

function searchProduct() {
  const query = document.getElementById("search-input").value.toLowerCase();
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = ""; // Clear previous results

  if (query === "plastic bag") {
    resultsDiv.innerHTML = `
      <h3>Suggested Alternatives for Plastic Bags:</h3>
      <ul>
        <li>Reusable Cloth Bags - Durable and washable</li>
        <li>Paper Bags - Recyclable and biodegradable</li>
        <li>Bamboo Fiber Bags - Compostable and eco-friendly</li>
      </ul>
    `;
  } else if (query) {
    resultsDiv.innerHTML = `<p>No specific suggestions found for "${query}". Try using more general terms.</p>`;
  } else {
    resultsDiv.innerHTML = `<p>Please enter a product name to search for alternatives.</p>`;
  }
}
function searchProduct() {
    const query = document.querySelector(".search-bar").value.toLowerCase();
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; // Clear previous results

    // Example data
const products = {
    "handbag": {
        disadvantage: "Leather handbag uses animal products and contributes to deforestation.",
        alternatives: [
            {
                name: "Cotton Bag",
                advantage: "Durable and made from natural fibers.",
                image: "path/to/cotton-bag.jpg"
            },
            {
                name: "Bamboo Handbag",
                advantage: "Sustainable, lightweight, and biodegradable.",
                image: "path/to/bamboo-handbag.jpg"
            }
        ]
    },
    "plastic bag": {
        disadvantage: "Non-biodegradable and harms marine life.",
        alternatives: [
            {
                name: "Reusable Cloth Bags",
                advantage: "Durable and washable.",
                image: "path/to/cloth-bag.jpg"
            },
            {
                name: "Paper Bags",
                advantage: "Recyclable and biodegradable.",
                image: "path/to/paper-bag.jpg"
            }
        ]
    },
    "water bottle": {
        disadvantage: "Single-use plastic bottles contribute to pollution and waste.",
        alternatives: [
            {
                name: "Stainless Steel Bottle",
                advantage: "Reusable, durable, and keeps drinks hot or cold.",
                image: "path/to/stainless-steel-bottle.jpg"
            },
            {
                name: "Glass Bottle",
                advantage: "Reusable and does not leach chemicals.",
                image: "path/to/glass-bottle.jpg"
            }
        ]
    },
    "toothbrush": {
        disadvantage: "Plastic toothbrushes contribute to landfill waste.",
        alternatives: [
            {
                name: "Bamboo Toothbrush",
                advantage: "Biodegradable and made from sustainable materials.",
                image: "path/to/bamboo-toothbrush.jpg"
            },
            {
                name: "Charcoal Toothbrush",
                advantage: "Natural antibacterial properties and biodegradable.",
                image: "path/to/charcoal-toothbrush.jpg"
            }
        ]
    },
    "cosmetic products": {
        disadvantage: "Many contain harmful chemicals and come in plastic packaging.",
        alternatives: [
            {
                name: "Natural Makeup",
                advantage: "Made from organic ingredients and often packaged in sustainable materials.",
                image: "path/to/natural-makeup.jpg"
            },
            {
                name: "Refillable Containers",
                advantage: "Reduces waste by allowing you to refill products.",
                image: "path/to/refillable-container.jpg"
            }
        ]
    },
    "fast fashion clothing": {
        disadvantage: "Contributes to pollution, waste, and exploitation of workers.",
        alternatives: [
            {
                name: "Thrifted Clothes",
                advantage: "Reduces waste and is often cheaper than new clothing.",
                image: "path/to/thrifted-clothes.jpg"
            },
            {
                name: "Sustainable Fashion Brands",
                advantage: "Ethically made with eco-friendly materials.",
                image: "path/to/sustainable-fashion.jpg"
            }
        ]
    },
    "shampoo bottle": {
        disadvantage: "Plastic shampoo bottles contribute to plastic pollution.",
        alternatives: [
            {
                name: "Solid Shampoo Bars",
                advantage: "Plastic-free and often made with natural ingredients.",
                image: "path/to/shampoo-bar.jpg"
            },
            {
                name: "Refillable Shampoo Bottles",
                advantage: "Encourages reuse and reduces plastic waste.",
                image: "path/to/refillable-shampoo.jpg"
            }
        ]
    },
    "disposable cutlery": {
        disadvantage: "Single-use plastics contribute significantly to environmental pollution.",
        alternatives: [
            {
                name: "Bamboo Cutlery",
                advantage: "Compostable and sustainable.",
                image: "path/to/bamboo-cutlery.jpg"
            },
            {
                name: "Stainless Steel Cutlery",
                advantage: "Reusable and durable, reducing waste.",
                image: "path/to/stainless-steel-cutlery.jpg"
            }
        ]
    },
    "paper towels": {
        disadvantage: "Deforestation and high water usage in production.",
        alternatives: [
            {
                name: "Reusable Cloth Towels",
                advantage: "Washable and reduces waste.",
                image: "path/to/cloth-towels.jpg"
            },
            {
                name: "Bamboo Paper Towels",
                advantage: "Biodegradable and made from sustainable bamboo.",
                image: "path/to/bamboo-paper-towels.jpg"
            }
        ]
    },
    "cigarettes": {
        disadvantage: "Plastic filters harm the environment and contribute to pollution.",
        alternatives: [
            {
                name: "Herbal Cigarettes",
                advantage: "No tobacco or chemicals, reducing health risks.",
                image: "path/to/herbal-cigarettes.jpg"
            },
            {
                name: "Reusable Vape Pens",
                advantage: "Less waste than traditional cigarettes.",
                image: "path/to/reusable-vape-pen.jpg"
            }
        ]
    }
};

        // Add more products and their alternatives as needed


    if (products[query]) {
        const productInfo = products[query];
        resultsDiv.innerHTML += `<p><strong>Disadvantage:</strong> ${productInfo.disadvantage}</p>`;
        resultsDiv.innerHTML += `<h3>Alternative Suggestions:</h3>`;
        
        productInfo.alternatives.forEach(alt => {
            resultsDiv.innerHTML += `
                <div class="alternative">
                    <img src="${alt.image}" alt="${alt.name}" style="width: 100px; height: auto;">
                    <h4>${alt.name}</h4>
                    <p><strong>Advantage:</strong> ${alt.advantage}</p>
                </div>
            `;
        });
    } else if (query) {
        resultsDiv.innerHTML = `<p>No specific suggestions found for "${query}". Try using more general terms.</p>`;
    } else {
        resultsDiv.innerHTML = `<p>Please enter a product name to search for alternatives.</p>`;
    }

    document.getElementById("results-section").style.display = "block"; // Show results section
}
// Toggle the visibility of the dropdown list
function toggleDropdown() {
    const dropdownList = document.getElementById("dropdown-list");
    dropdownList.style.display = dropdownList.style.display === "block" ? "none" : "block";
}

// Set the search input value when a product is clicked from the dropdown
function selectProduct(product) {
    document.getElementById("search-input").value = product;
    document.getElementById("dropdown-list").style.display = "none"; // Hide the dropdown after selection
}
