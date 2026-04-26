/* script.js */
document.addEventListener('DOMContentLoaded', () => {
    
    // Configuración del botón de novedades (puedes enlazarlo a un modal o formulario más adelante)
    const btnNovedades = document.getElementById('btn-novedades');
    btnNovedades.addEventListener('click', () => {
        alert('¡Pronto habilitaremos un formulario para que te anotes y recibas descuentos en la inauguración!');
    });

    // Configuración dinámica de WhatsApp
    // Reemplaza este número por el celular de Víctor incluyendo el código de país (ej. 549 para Argentina)
    const numeroVictor = "5492966000000"; 
    const mensajePredefinido = encodeURIComponent("¡Hola Víctor! Vi la página de la rosticería. Quería consultar sobre...");
    
    const whatsappLink = document.getElementById('whatsapp-link');
    whatsappLink.href = `https://wa.me/${numeroVictor}?text=${mensajePredefinido}`;

    // Efecto de scroll suave para la barra de navegación
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
