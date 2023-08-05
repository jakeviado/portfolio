function myFunction() {
    var dropdownContent = document.getElementsByClassName("dropdown-content")[0];
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  }


fetch('https://catfact.ninja/breeds',{
    method: 'GET',
  })
  .then((response) => {
    if (response.ok){
      console.log('Success')
    } else {
      console.log('Not Successful')
    }
  response.json() 
})
