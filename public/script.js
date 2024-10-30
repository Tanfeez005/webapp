function submitData() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById("responseMessage").textContent = data;
    })
    .catch(error => {
        console.error("Error:", error);
    });
}
