// Función para generar dinámicamente los tabs de categorías
function generarSelectores() {
    const menuTab = document.getElementById('myTab');
    Object.keys(menuItems).forEach((categoria, index) => {
        const li = document.createElement('li');
        li.className = 'nav-item';
        
        li.innerHTML = `
            <a class="nav-link ${index === 0 ? 'active' : ''}" id="${categoria}-tab" data-bs-toggle="tab" href="#${categoria}-content" role="tab" data-categoria="${categoria}">
                ${categoria}
            </a>`;
        
        menuTab.appendChild(li);
    });
}

// Función para generar el contenido del menú para una categoría
function generarMenu(categoria) {
    const container = document.getElementById('myTabContent');
    
    // Agregar clase fade-out para iniciar la animación de salida
    container.classList.remove('fade-in');
    container.classList.add('fade-out');
    
    // Esperar a que la animación de salida se complete antes de cambiar el contenido
    setTimeout(() => {
        container.innerHTML = ''; // Limpiar el contenido previo
        
        // Verificar si la categoría existe en menuItems
        if (menuItems[categoria]) {
            menuItems[categoria].forEach((item, index) => {
                const div = document.createElement('div');
                div.className = 'col-md-6';

                const alergenosHTML = item.alergenos ? item.alergenos.map(alergeno => {
                    const iconUrl = alergenosIcons[alergeno];
                    return iconUrl ? `<img loading="lazy" class="alergeno-icon" data-alergeno="${alergeno}" src="${iconUrl}" alt="${alergeno}">` : '';
                }).join('') : '';

                div.innerHTML = `
                    <div class="box ${item.especial ? 'especial' : ''}">
                        <div class="single_menu">
                            <div class="food-img">
                                <img loading="lazy" src="${item.img}" alt="${item.nombre}">
                            </div>
                            <div class="menu_content">
                                <div class="top-names">
                                    <p class="nombre">${item.nombre}</p>
                                    <div class="alergenos">
                                        ${alergenosHTML}
                                    </div>
                                </div>
                                <div class="low-content">
                                    <p>${item.descripcion}</p>
                                    <span>${item.precio}</span>
                                </div>
                            </div>
                        </div>
                    </div>`;
                
                // Agregar el elemento al contenedor
                container.appendChild(div);

                // Agregar la clase fade-in después de un pequeño retraso
                setTimeout(() => {
                    div.classList.add('fade-in');
                }, index * 300); // Delay incrementando para cada elemento
            });
        } else {
            console.warn(`La categoría "${categoria}" no existe en menuItems.`);
        }

        // Después de actualizar el contenido, aplicar el fade-in
        container.classList.remove('fade-out');
        container.classList.add('fade-in');
        
    }, 400); // Tiempo de espera para el fade-out antes de cambiar el contenido
}

// Evento para cargar la categoría seleccionada
function cargarCategoriaInicial() {
    const categoriaGuardada = localStorage.getItem('categoriaSeleccionada');
    return categoriaGuardada ? categoriaGuardada : Object.keys(menuItems)[0]; // Cargar la primera categoría si no hay guardada
}

// Función para cambiar la categoría activa
function cambiarCategoria(categoria) {
    localStorage.setItem('categoriaSeleccionada', categoria); // Guardar la categoría seleccionada
    generarMenu(categoria);

    // Cambiar la clase active del tab
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active'); // Eliminar active de todos los tabs
    });

    const tabSeleccionado = document.querySelector(`[data-categoria="${categoria}"]`);
    if (tabSeleccionado) {
        tabSeleccionado.classList.add('active'); // Añadir active al tab seleccionado
    }
}

// Generar todo el contenido al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    generarSelectores(); // Generar los tabs de categorías

    // Cargar la categoría inicial
    const categoriaInicial = cargarCategoriaInicial();
    cambiarCategoria(categoriaInicial);

    // Añadir evento a los tabs
    document.querySelectorAll('.nav-link').forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault(); // Evitar comportamiento por defecto de los enlaces
            const categoria = e.target.getAttribute('data-categoria');
            cambiarCategoria(categoria);
        });
    });
});