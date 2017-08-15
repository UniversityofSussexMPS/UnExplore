    var responsiveNav = document.getElementById('js-responsive-nav');
    var responsiveNavBreakpoint =730;
    
    responsiveNav.addEventListener('click', function() {
      if(window.innerWidth < responsiveNavBreakpoint) {
        responsiveNav.classList.toggle("is-open");
      }
    });
