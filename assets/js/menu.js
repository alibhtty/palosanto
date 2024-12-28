
// Menu Lateral
// @alibhtty

$ = jQuery;
    /// ADD CLASS TO HEADER ON SCROLL ///
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 70) {
            $("header").addClass("active");
        } else {
            $("header").removeClass("active");
        }
    });

    AOS.init({
        easing: 'ease-in-out-sine'
    });

    /// SHOW/HIDE MENU ///
    $(document).ready(function() {
        $(".menuSeven, .hamburger_close, .fs_menu_overlay").click(function() {
            $(".logo-image").toggleClass("showmenu");
            $("html").toggleClass("no-scroll");
            if ($(".logo-image").hasClass("showmenu")) {
                $("body").append('<div class="blur-background"></div>');
                $("header").addClass("menu-active");
            } else {
                $(".blur-background").remove();
                $("header").removeClass("menu-active");
            }
        });
    });

    /// Menú Lateral ///
    const menuSeven = document.querySelector('.menuSeven');

    function addClassFunSeven() {
        this.classList.toggle("clickMenuSeven");
    }
    menuSeven.addEventListener('click', addClassFunSeven);




    // Swipe botón Instagram
    const button = document.querySelector('.make-btn-main');
    const footerCopyBlock = document.querySelector('footer .copy-block');
    let startX = 0;
    let currentX = 0;
    
    button.addEventListener('touchstart', function(event) {
        startX = event.touches[0].clientX;
        button.classList.remove('swipe-out');
        button.querySelector('.carta').classList.add('active-blur');
        
        // Desactivar scroll en el body
        document.body.style.overflow = 'hidden';
    });
    
    button.addEventListener('touchmove', function(event) {
        event.preventDefault(); // Prevent scrolling only during touch move
        currentX = event.touches[0].clientX - startX;
        button.style.transform = `translateX(${currentX}px)`;
    });
    
    button.addEventListener('touchend', function(event) {
        button.querySelector('.carta').classList.remove('active-blur');
        if (Math.abs(currentX) > button.offsetWidth / 2) {
            button.classList.add('swipe-out');
            button.style.transform = currentX > 0 ? `translateX(${window.innerWidth}px)` : `translateX(-${window.innerWidth}px)`;
    
            // Cambiar el height de "footer .copy-block" a 9em
            footerCopyBlock.style.height = '9em';
        } else {
            button.style.transform = 'translateX(0)';
            
            // Restaurar el height de "footer .copy-block" a 18em
            footerCopyBlock.style.height = '18em';
        }
        
        // Reactivar scroll en el body
        document.body.style.overflow = 'auto';
    });





    /* TIEMPO LIMITE */
    const dueDate = new Date('2024-12-27'); // Fecha límite
    const deadline = 8; // 8 DIAS PARA DESAPARECER
    
    // Calcular días transcurridos
    const daysPassed = Math.floor(
      (new Date() - dueDate) / (1000 * 60 * 60 * 24)
    );
    
    if (daysPassed > 0) {
      const daysLate = deadline - daysPassed;
      let opacity = daysLate / deadline;
    
      // Asegurarse de que la opacidad esté entre 0 y 1
      opacity = Math.min(opacity, 1);
      opacity = Math.max(opacity, 0);
    
      // Aplicar opacidad al cuerpo del sitio web
      document.body.style.opacity = opacity;
    }



    /* PASADOS 3 MIN */
    // Redirigir después de 3 minutos
    /* setTimeout(() => {
        window.location.href = '/contacto'; // Cambia "/contacto" según la ruta que necesites
      }, 18000); */



    // Función para mostrar el modal
function showModal() {
    const modal = document.getElementById("modal");
    const countdownElement = document.getElementById("countdown");
    let countdown = 5; // Tiempo de cuenta regresiva en segundos
  
    modal.classList.remove("hidden");
  
    // Actualizar la cuenta regresiva
    const countdownInterval = setInterval(() => {
      countdown--;
      countdownElement.textContent = countdown;
  
      if (countdown === 0) {
        clearInterval(countdownInterval);
        redirectToContact();
      }
    }, 1000);
  }
  
  // Función para redirigir suavemente
  function redirectToContact() {
    document.body.classList.add("fade-out"); // Aplicar la clase para la transición
    setTimeout(() => {
      window.location.href = "/contacto"; // Cambiar a la ruta deseada
    }, 1000); // Esperar el tiempo de la transición antes de redirigir
  }
  
  // Mostrar el modal la primera vez después de 3 minutos (180000 ms)
  setTimeout(() => {
    showModal();
  }, 5000); // 3 minutos
  
  // Repetir el modal cada 10 minutos (600000 ms)
  setInterval(() => {
    showModal();
  }, 300000); // 5 minutos