<!--The dropdown js-->
// Dropdown
  $(function(){
    $(".dropdown").hover(            
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
                $(this).toggleClass('open');
                $('b', this).toggleClass("caret caret-up");                
            },
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeOut("");
                $(this).toggleClass('open');
                $('b', this).toggleClass("caret caret-up");                
            });
    });
	// Dropdown