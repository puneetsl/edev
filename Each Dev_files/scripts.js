/*!
* Start Bootstrap - Landing Page v6.0.5 (https://startbootstrap.com/theme/landing-page)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-landing-page/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


// Add buttons to all text-modify-hover divs
var elements = document.getElementsByClassName("modify-hover");

// Loop through the elements and add the button
for (var i = 0; i < elements.length; i++) {

	var button = document.createElement("button");
	button.textContent = "Regenerate";

  // var icon = document.createElement("i");
  // icon.classList.add("bi", "bi-bootstrap-reboot", "text-white", "h5");
  // button.appendChild(icon);

  //button.classList.add("btn", "rounded-circle", "btn-sm", "modify-hover-button");
  button.classList.add("btn", "btn-primary", "btn-sm", "modify-hover-button", "indigo-button");

	button.addEventListener("click", function() {

		// Blur the current contents and disable button
		this.parentElement.classList.add('content-blur');
		this.disabled = true;


		// Define the request URL
 		const url = '/demo_modify_content';

		// Define the request data
		const data = {
			'element_id': this.parentElement.getAttribute('element-id')
		};

		// Define the request options
		const options = {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		};

		// Send the request and handle the response
		fetch(url, options)
			.then(response => response.json())
			.then(data => {
		  		for (const key in data) {
		  			el = document.getElementById(key);
		  			if (key.includes('img')) {
		  				el.src = data[key];
		  			} else {
		  				el.textContent = data[key];
		  			}
				}
				// unblur and enable button
				this.parentElement.classList.remove('content-blur');
				this.disabled = false;
			})
			.catch(error => {
		  		// Handle any errors
		  		console.error(error);
		  		// unblur and enable button
		  		this.parentElement.classList.remove('content-blur');
		  		this.disabled = false;
		});
  });

 	elements[i].appendChild(button);
}

// FAQs
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));