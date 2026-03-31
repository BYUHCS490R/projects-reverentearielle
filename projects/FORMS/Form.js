document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const fullname = document.getElementById('fname').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const birth = document.getElementById('birth').value;
    const age = document.getElementById('Age').value;
    const password = document.getElementById('password').value;
    const state = document.getElementById('state').value;
    const comments = document.getElementById('comments').value.trim();

    const genderInput = document.querySelector('input[name="gender"]:checked');
    const gender = genderInput ? genderInput.value : "";

    const remember = document.querySelector('input[name="remember"]').checked;

    if (!fullname || !email || !phone) {
        alert("Please fill out your name, email, and phone.");
        return;
    }

    if (!age || Number(age) < 18 || Number(age) > 99) {
        alert("Please enter an age between 18 and 99.");
        return;
    }

    const formData = {
        name: fullname,
        email: email,
        phone: phone,
        birthdate: birth,
        age: age,
        password: password,
        state: state,
        comments: comments,
        gender: gender,
        remember: remember
    };

    console.log(formData);

    const xhr = new XMLHttpRequest();
    const queryString = new URLSearchParams(formData).toString();

    xhr.open("GET", "formprocs.json?" + queryString, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            document.getElementById('message').innerText = response.message;
            document.getElementById('myForm').reset();
        } else if (xhr.readyState === 4) {
            alert("Error submitting form.");
        }
    };

    xhr.send();
});