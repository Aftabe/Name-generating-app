// Variables
const form = document.getElementById("generate-names");





// Event listners
addEventListener();

function addEventListener() {
  // Execute the function to query API
  form.addEventListener('submit', loadNames);
}


// function
function loadNames(e) {
  e.preventDefault();
  //Read the values from the form and create variables
  const origin = document.getElementById('country').value,
    gender = document.getElementById('gender').value,
    amount = document.getElementById('quantity').value;

  // Build the URL
  let url = 'https://uinames.com/api/';
  // Read the url and append to the url
  if (origin !== '') {
    url += `
  region=${origin}&
  `;
  };
  // Read the gender and append to the url
  if (gender !== '') {
    url += `
  gender=${gender}&
  `;
  };
  // Read the amount and append to the url
  if (amount !== '') {
    url += `
    amount=${amount}&
    `;
  }

  
  // Ajax call
  const xhr = new XMLHttpRequest();
  
  
  
  // Open the connection
  xhr.open('GET', url, true);
  // xhr.setRequestHeader('Access-Control-Allow-Headers', '*');

  
  
  // Execute the function
  xhr.onload = function(){
    console.log(xhr.responseText);
    if(this.status === 200){
      let names = JSON.parse(this.responseText);
      console.log(names);
      // Insert into html
      let html = '<h2>Generated Names</h2>';
      html += '<ul class="list">';
      names.forEach(function(name){
        html += `
        <li>${name.name}</li>
        `;
      });
      html += '</ul>';
    }
  }


  // Send
  xhr.send();

}