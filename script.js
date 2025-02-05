document.addEventListener('DOMContentLoaded', () => {
    const comenzarBtn = document.getElementById('comenzar-btn');
    const reiniciarBtn = document.getElementById('reiniciar-btn');
    const opcionBtns = document.querySelectorAll('.opcion-btn');
    const pantallas = document.querySelectorAll('.pantalla');
    const pantallaInicial = document.getElementById('pantalla-inicial');
    const pantallaJuego = document.getElementById('pantalla-juego');
    const pantallaFinal = document.getElementById('pantalla-final');
    const preguntaContainer = document.getElementById('pregunta-container');
    const preguntaElemento = document.getElementById('pregunta');
    const imagenPregunta = document.getElementById('imagen-pregunta');
    const mensaje = document.getElementById('mensaje');
    const iconoMensaje = document.getElementById('icono-mensaje');
    
    let preguntas = [
        {
            pregunta: "¿Qué planeta es conocido como el 'Planeta Rojo'?",
            opciones: ["Marte", "Júpiter", "Saturno"],
            correcta: "Marte",
            imagen: "images/marte.png"
        },
        {
            pregunta: "¿Cuál es el elemento químico con el símbolo 'O'?",
            opciones: ["Oxígeno", "Oro", "Osmio"],
            correcta: "Oxígeno",
            imagen: "images/oxigeno.png"
        },
        {
            pregunta: "¿Qué animal es conocido como el 'Rey de la Selva'?",
            opciones: ["Tigre", "León", "Elefante"],
            correcta: "León",
            imagen: "images/leon.png"
        },
        {
            pregunta: "¿Cuántos planetas tiene el sistema solar?",
            opciones: ["7", "8", "9"],
            correcta: "8",
            imagen: "images/planetas.png"
        },
        {
            pregunta: "¿Qué parte de la planta realiza la fotosíntesis?",
            opciones: ["Raíz", "Tallo", "Hoja"],
            correcta: "Hoja",
            imagen: "images/hoja.png"
        }
    ];
    let preguntaActual = 0;

    comenzarBtn.addEventListener('click', iniciarJuego);
    reiniciarBtn.addEventListener('click', () => location.reload());
    opcionBtns.forEach(btn => btn.addEventListener('click', verificarRespuesta));

    function iniciarJuego() {
        mostrarPantalla(pantallaJuego);
        mostrarPregunta();
    }

    function mostrarPregunta() {
        const pregunta = preguntas[preguntaActual];
        preguntaElemento.textContent = pregunta.pregunta;
        imagenPregunta.src = pregunta.imagen;
        imagenPregunta.classList.remove('oculto');
        opcionBtns.forEach((btn, index) => {
            btn.textContent = pregunta.opciones[index];
        });
        mensaje.textContent = '';
        iconoMensaje.classList.add('oculto');
        preguntaContainer.classList.remove('oculto');
    }

    function verificarRespuesta(event) {
        const respuesta = event.target.textContent;
        if (respuesta === preguntas[preguntaActual].correcta) {
            mensaje.textContent = '¡Correcto!';
            mensaje.style.color = '#00ff00';
            iconoMensaje.src = 'images/correcto.png';
            iconoMensaje.classList.remove('oculto');
            preguntaActual++;
            if (preguntaActual >= preguntas.length) {
                setTimeout(finalizarJuego, 1000);
            } else {
                setTimeout(mostrarPregunta, 1000);
            }
        } else {
            mensaje.textContent = 'Incorrecto. Inténtalo de nuevo.';
            mensaje.style.color = '#ff4500';
            iconoMensaje.src = 'images/incorrecto.png';
            iconoMensaje.classList.remove('oculto');
        }
    }

    function finalizarJuego() {
        mostrarPantalla(pantallaFinal);
    }

    function mostrarPantalla(pantalla) {
        pantallas.forEach(p => p.classList.remove('activa'));
        pantalla.classList.add('activa');
    }

    // Iniciar en pantalla inicial
    mostrarPantalla(pantallaInicial);
});
