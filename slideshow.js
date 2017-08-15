 $("#unexplore-slideshow > div:gt(0)").hide();setInterval(function() {
    $("#unexplore-slideshow > div:first")
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo("#unexplore-slideshow");
    }, 3000);
