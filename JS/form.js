
 // Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyBDKHgFlfzJTafup8zEMbCvfl6t07HHxKs",
    authDomain: "rotaractcontact-f6d29.firebaseapp.com",
    databaseURL: "https://rotaractcontact-f6d29.firebaseio.com",
    projectId: "rotaractcontact-f6d29",
    storageBucket: "rotaractcontact-f6d29.appspot.com",
    messagingSenderId: "369189626330",
    appId: "1:369189626330:web:a5bd609f8a5f8a7dcfa0e3"
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');

    var email = getInputVal('email');

    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, email, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name,  email,  message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
     
      email:email,
     
      message:message
    });
  }