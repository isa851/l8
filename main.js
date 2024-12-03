function fun() {
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    
    
    if (name.replace(/[A-Za-z]/g, '') !== '') {
        alert('Имя должно содержать только латинские буквы');
        return false;
    }

    let fun2 = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/;
    if (!fun2.test(password)) {
        alert('Пароль должен содержать сочетание букв и цифр');
        return false;
    }

    alert('Ваши данные записаны');
    return true;
}