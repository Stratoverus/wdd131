window.onload = function() {
    //current year area
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
    
    //Last Modified area
    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = lastModified;

    if (window.location.pathname.includes("review.html")) {
      displaySubmissionCount();
    } else {
      setupForm();
    };
};

const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

populateProductNames()

function populateProductNames() {
  const productSelct = document.getElementById('pName');
  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    productSelct.appendChild(option);
  })
}

function setupForm() {
  const form = document.querySelector('form');

  if (form) {
      form.addEventListener('submit', function() {
          incrementCounter();
      });
  }
}

function incrementCounter() {
  let submissionCount = localStorage.getItem('submissionCount');

  if (submissionCount) {
      submissionCount = parseInt(submissionCount) + 1;
  } else {
      submissionCount = 1;
  }

  localStorage.setItem('submissionCount', submissionCount);
}

function displaySubmissionCount() {
  let submissionCount = localStorage.getItem('submissionCount');

  if (!submissionCount) {
      submissionCount = 0;
  }

  document.getElementById('submissionCounter').textContent = submissionCount;
}