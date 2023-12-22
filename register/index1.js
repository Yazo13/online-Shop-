
let x = false

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
    

    if (x) {
        var users = {
            "user1" : {
                "email" : "giorgi.kazishvili@gau.edu.ge",
                "password" : "12345678"
            },
            "user2" : {
                "email" : "luka.gulverdashvili@gau.edu.ge",
                "password" : "12341234"
            } 
        }
        let isUserFound = false;
    
        Object.values(users).forEach(user => {
            if (user.email === email.value && user.password === password.value) {
                isUserFound = true;
            }
        });
        if (!isUserFound) {
        registerUser(email.value, password.value);
        window.location.href = '/../login_page/index.html';
        }
    }

    var users = JSON.parse(localStorage.getItem('users')) || {};

    function registerUser(email, password) {
        const newUserKey = `user${Object.keys(users).length + 1}`;
        users[newUserKey] = {
            "email": email,
            "password": password
        };

        localStorage.setItem('users', JSON.stringify(users));
    }
};

document.getElementById('left').onclick = function () {
    window.location.href = '../index.html'
}