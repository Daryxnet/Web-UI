function expandSection(section) {
    // Obtener todas las secciones
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(sec) {
        // Comprimir todas las secciones
        sec.classList.remove('expanded');
    });
    // Expandir la sección seleccionada
    section.classList.add('expanded');
}