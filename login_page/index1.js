
let x = false
var users = {
    "user1": {
        "email": "giorgi.kazishvili@gau.edu.ge",
        "password": "12345678"
    },
    "user2": {
        "email": "luka.gulverdashvili@gau.edu.ge",
        "password": "12341234"
    }
};


document.getElementById('submit').onclick = function(){
    var email = document.getElementById('email');
    if(email.value.length === 0) {
        document.getElementById('alert1').style.display = 'block';
        document.getElementById('alert2').style.display = 'none';
        email.previousElementSibling.style.color = 'red'
        x = false


    } else {
        var emailInput = document.getElementById('email');
        if (emailInput.validity.valid != true) {
            document.getElementById('alert2').style.display = 'block';
            document.getElementById('alert1').style.display = 'none';
            emailInput.previousElementSibling.style.color = 'red'
        x = false


        }else{
            document.getElementById('alert2').style.display = 'none';
            document.getElementById('alert1').style.display = 'none';
            emailInput.style.border = '2px solid green'
            email.previousElementSibling.style.color = 'green'
            x = true
        }
    }


    var password = document.getElementById('password')

    if(password.value.length === 0){
        document.getElementById('alert3').style.display = 'block';
        document.getElementById('alert4').style.display = 'none';
        password.previousElementSibling.style.color = 'red'
        x = false

    }
    else if(password.value.length < 8){
        document.getElementById('alert4').style.display = 'block';
        document.getElementById('alert3').style.display = 'none';
        password.previousElementSibling.style.color = 'red'
        x = false
    }
    else{
        document.getElementById('alert4').style.display = 'none';
        document.getElementById('alert3').style.display = 'none';
        password.style.border = '2px solid green'
        password.previousElementSibling.style.color = 'green'
        x = true
    }

    var users = JSON.parse(localStorage.getItem('users')) || {};
    
    function loginUser(email, password) {
        let isUserFound = false;
    
        Object.values(users).forEach(user1 => {
            if (user1.email == email.value && user1.password == password.value) {
                document.getElementById('alert5').style.display = 'none';
                password.previousElementSibling.style.color = 'green';
                email.previousElementSibling.style.color = 'green';
                document.getElementById('alert1').style.display = 'none';
                document.getElementById('alert2').style.display = 'none';
                password.style.border = 'green 2px solid';
                email.style.border = 'green 2px solid';
                localStorage.setItem('xIsTrue', 'true');
                isUserFound = true;
            }
        });
    
        if (!isUserFound) {
            document.getElementById('alert5').style.display = 'block';
            password.previousElementSibling.style.color = 'red';
            emailInput.previousElementSibling.style.color = 'red';
            password.style.border = 'red 2px solid';
            email.style.border = 'red 2px solid';
        }
    
        return isUserFound;
    }
    
    
    if (loginUser(email, password)) {
        console.log("Login successful!");
        setTimeout(function () {
            window.location.href = '../index.html?Username=' + encodeURIComponent(email.value);
        }, 1000);
    } else {
        console.log("Invalid credentials. Login failed.");
    }
    
};
document.getElementById('left').onclick = function () {
    window.location.href = '../index.html?#Username=email'
}