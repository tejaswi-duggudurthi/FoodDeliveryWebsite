function loginValidation(){
    var Email_id = document.getElementById("inputEmail").value;
    var Password = document.getElementById("inputPassword").value;
    if(Email_id.length<=0){
      // alert("username is required");
      document.getElementById("message1").innerHTML="!Please enter your email"
      Email_id.focus();
      
    }
    else if(Password.length<=0){
      document.getElementById("message2").innerHTML="!Please enter password"
      Password.focus();
    }
    if(Email_id.length!=0 && Password.length!=0){
      var data = {
        Email : Email_id,
        Password : Password
      }
    console.log(data);
    };
    fetch('/loginData',{
      method:'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      window.location.href="/customer/home"
    })
    .catch((error)=>{
        alert("Not Valid")
      })
  };
 
  const togglePassword = document.querySelector('#togglePassword');
  const password = document.querySelector('#inputPassword');
 
  togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});