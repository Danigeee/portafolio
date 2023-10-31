$(document).ready(function(){
    $('.slick-carousel').slick({
      dots: true, // Muestra los puntos de navegación
      infinite: true, // Navegación infinita
      speed: 300, // Velocidad de transición
      slidesToShow: 3, // Cantidad de tarjetas a mostrar a la vez
      adaptiveHeight: true, // Ajuste automático de la altura
        autoplay: true, // Reproducción automáticamente
      responsive: [
        {
          breakpoint: 768, // Cambia a diseño móvil en pantallas de 768px o menos
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });
  });