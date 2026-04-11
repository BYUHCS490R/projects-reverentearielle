document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const copies = document.getElementById('copies').value;
    const template = document.getElementById('template').value;
    const comments = document.getElementById('comments').value.trim();

    if (!name || !email || !phone || !copies || !template) {
        alert("Please fill out the name, email, phone, number of copies, and template.");
        return;
    }

    if (Number(copies) < 1 || Number(copies) > 10) {
        alert("Number of copies must be between 1 and 10.");
        return;
    }

    const formData = {
        name: name,
        email: email,
        phone: phone,
        copies: copies,
        template: template,
        comments: comments
    };

    console.log(formData);

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "formprocs.json", true);

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