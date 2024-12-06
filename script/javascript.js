function validateForm(e) {
    e.preventDefault()
   let fName = document.getElementById('f_name').value
   let lName = document.getElementById('l_name').value
   let lNamee = document.getElementById('l_name').value
   let lNamet = document.getElementById('l_name').value
   let lNames = document.getElementById('l_name').value
   let flightt = document.getElementById('flightt')
   
  
    f_name_err = document.getElementById('f_name_err')
    l_name_err = document.getElementById('l_name_err')
    l_name_err = document.getElementById('l_name_err')
    l_name_err = document.getElementById('l_name_err')
    l_name_err = document.getElementById('l_name_err')
  
  
  
   if (fName === '') {
     f_name_err.textContent ="First name is requried"
     isValid = false
   
   }
   
   if (lName === '') {
     l_name_err.textContent ="Last name is requried"
    isValid = false
   }
   
  
   if (lNamee === '') {
    l_name_err.textContent ="phone number is requried"
   isValid = false
  }

  
  if (lNamet === '') {
    l_name_err.textContent ="age is requried"
   isValid = false
  }
 
  
  if (lNames === '') {
    l_name_err.textContent ="email is requried"
   isValid = false
  }

  if(isValid) {
    flightt.textContent = "you flight is by monday 12/12/2024  "
  
  }else{
  
    flightt.textContent = "No flight Available"
  }

  Style
  }