document.getElementById("submit-button").addEventListener("click", function () {
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const email = document.getElementById("email").value;

    const datos = {
        name: name,
        surname: surname,
        email: email
    };

    console.log(datos);
});