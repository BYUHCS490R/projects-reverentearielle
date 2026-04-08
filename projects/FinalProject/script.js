document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (!name || !email) {
        alert("Please fill out all fields.");
        return;
    }

    const formData = {
        name: name,
        email: email
    };

    console.log(formData);

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "formprocs.json", true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            document.getElementById('message').innerText = response.message;
            document.getElementById('myForm').reset();
        }
    };

    xhr.send();
});