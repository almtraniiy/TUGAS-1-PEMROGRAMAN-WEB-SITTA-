function handleLogin(event) {
    event.preventDefault();
    const emailInput = document.getElementById("email").value.trim();
    const passwordInput = document.getElementById("password").value.trim();
    const notificationBox = document.getElementById("login-notification");

    const userFound = dataPengguna.find(user => user.email === emailInput && user.password === passwordInput);

    if (userFound || (emailInput === "admin@ut.ac.id" && passwordInput === "admin123")) {
        if (notificationBox) {
            notificationBox.style.display = "block";
            notificationBox.style.color = "#155724";
            notificationBox.style.backgroundColor = "#d4edda";
            notificationBox.style.padding = "8px";
            notificationBox.style.borderRadius = "6px";
            notificationBox.style.marginBottom = "15px";
            notificationBox.innerText = "Login Berhasil! Mengalihkan...";
        }

        setTimeout(function() {
            window.location.href = "dashboard.html";
        }, 1200);
    } else {
        if (notificationBox) {
            notificationBox.style.display = "block";
            notificationBox.style.color = "#721c24";
            notificationBox.style.backgroundColor = "#f8d7da";
            notificationBox.style.padding = "8px";
            notificationBox.style.borderRadius = "6px";
            notificationBox.style.marginBottom = "15px";
            notificationBox.innerText = "Email atau password salah!";
        } else {
            alert("Email atau password salah!");
        }
    }
}