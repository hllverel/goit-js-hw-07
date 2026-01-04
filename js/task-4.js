'use strict';

//login-form gönderimini preventDefault ile engelleyin; alanlar boşsa alert gösterin. Doluysa elements üzerinden trimmed değerlerle { email, password } nesnesi oluşturup console.log, sonra reset().

//Kullanıcı tüm alanları doldurur ve formu gönderirse, alan değerlerini iki özellikli bir nesneye toplayın; anahtar alan adları olmalı ve değerler, bu alan adlarının karşılık gelen değerleri, kenarlardaki boşluklardan temizlenmelidir. Form öğelerine erişmek için elements özelliğini kullanın.

const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email === "" || password === "") {
        alert("All form fields must be filled in!")
    };

    const loginInfo = {
        email: email.trim(),
        password: password.trim(),
    };

    console.log(loginInfo);
    form.reset();
});
