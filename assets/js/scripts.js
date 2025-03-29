// Función para cambiar el tema
function toggleTheme() {
    const modeToggle = document.getElementById('modeToggle'); // Asegúrate de que el id coincida

    // Verifica si el switch está activado (modo nocturno)
    modeToggle.addEventListener('change', function() {
        if (modeToggle.checked) {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark'); // Guardar en el localStorage
        } else {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
            localStorage.setItem('theme', 'light'); // Guardar en el localStorage
        }
    });
}

// Cargar el tema almacenado en localStorage al cargar la página
window.addEventListener('load', function() {
    const savedTheme = localStorage.getItem('theme');
    const modeToggle = document.getElementById('modeToggle'); // Asegúrate de que el id coincida

    // Si el tema guardado es "dark", activa el modo oscuro
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        modeToggle.checked = true; // Activar el switch (modo nocturno)
    } else {
        document.body.classList.add('light-mode');
        modeToggle.checked = false; // Desactivar el switch (modo claro)
    }

    // Llamamos a la función para asegurarnos de que el switch funciona correctamente
    toggleTheme();
});



// Función para enviar un mensaje (simulación)
function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const messagesDiv = document.querySelector('.messages');

    // Verifica si el mensaje no está vacío
    if (messageInput.value.trim() !== "") {
        const newMessage = document.createElement('p');
        newMessage.innerHTML = `<strong>Usuario:</strong> ${messageInput.value}`;
        messagesDiv.appendChild(newMessage);

        messageInput.value = ''; // Limpiar el campo de texto después de enviar
        messagesDiv.scrollTop = messagesDiv.scrollHeight; // Desplazar hacia abajo el área de mensajes
    } else {
        alert("Por favor, escribe un mensaje antes de enviar."); // Alerta si el mensaje está vacío
    }
}

// Detectar cuando el usuario presiona Enter para enviar el mensaje
const messageInput = document.getElementById('messageInput');
messageInput.addEventListener('keydown', function(event) {
    if (event.key === "Enter") { // Verifica si la tecla presionada es Enter
        event.preventDefault(); // Evitar el salto de línea en el input
        sendMessage(); // Llamar a la función para enviar el mensaje
    }
});