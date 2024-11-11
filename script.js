document.getElementById('localStorageButton').addEventListener('click', function() {
    const clave = 'M4_UD02_P02';
    const valor = 'Laura';
    if (localStorage.getItem(clave) === null) {
        localStorage.setItem(clave, valor);
    } else {
        alert('Error: La clave ya existe en localStorage.');
    }
});

document.getElementById('sessionStorageButton').addEventListener('click', function() {
    const clave = 'Date';
    const valor = Date.now().toString();
    if (sessionStorage.getItem(clave) === null) {
        sessionStorage.setItem(clave, valor);
    } else {
        alert('Error: La clave ya existe en sessionStorage.');
    }
});

document.getElementById('showStorageButton').addEventListener('click', function() {
    let localData = '';
    for (let i = 0; i < localStorage.length; i++) {
        const clave = localStorage.key(i);
        const valor = localStorage.getItem(clave);
        localData += `${clave}: ${valor}\n`;
    }

    let sessionData = '';
    for (let i = 0; i < sessionStorage.length; i++) {
        const clave = sessionStorage.key(i);
        const valor = sessionStorage.getItem(clave);
        sessionData += `${clave}: ${valor}\n`;
    }

    alert(`LocalStorage:\n${localData}\nSessionStorage:\n${sessionData}`);
});
