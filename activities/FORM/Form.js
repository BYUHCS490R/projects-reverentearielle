document.getElementById('myForm').addEventListener('submit', function (event) {
        event.preventDefault();
        //alert("Form Submitted");

        const fullname = document.getElementById('fname').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const age = document.getElementById('Age').value;

        if (!fname || !email) {
            alert("You need a name and email.");
            return;
        }
        if (!age || age <18) {
        alert("You need to be 18");
        return;
        }
        
        const formData = {
            name: fname,
            email: email,
            password: password,
            age: age
        };
        console.log("Form Data:", formData);
    });

    console.log(formData);
    const xhr = new XMLttpRequest();
    xhr.setRequestHEader("Content-Type", "applictaion/json;charset=UTF-8");
    xr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert("Form submitted successfull!");
            const response = JSON.parse(xhr.responseText);
            console.log(response);
            //document.getElementById('myForm').reset();
            document.getElementById('myForm').innerHTML = '';
            document.getElementById('message').innerText = response.message ;
        } else if (xhr.readyState ==== 4) {
            alert("Error submitting form.")
        }
    };
    xhr.send(JSON.stringify(formData));
});