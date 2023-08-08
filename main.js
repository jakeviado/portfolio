function myFunction(dropdownNumber) {
   const dropdown = document.querySelector(`#dropdown${dropdownNumber}`);

   if (dropdown.style.display === "block") {
     dropdown.style.display = "none";
   } else {
    dropdown.style.display = "block";
   }
}

 
  

fetch('https://catfact.ninja/breeds', {
  method: 'GET',
})
  .then((response) => {
    if (response.ok) {
      console.log('Success');
      return response.json();
    } else {
      console.log('Not Successful');
    }
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });
