// JavaScript Document

         function initResponsiveHeader() {
                 var sideslider = $('[data-toggle=collapse-side]');
                 var sel = sideslider.attr('data-target');
                 var sel2 = sideslider.attr('data-target-2');
                 sideslider.click(function(event) {
                     $(sel).toggleClass('in');
                     $(sel2).toggleClass('out');
                 });
         
             }
                  function stickDropdown(_elem){
               $(_elem).parent().removeClass('open').addClass('open');
         }
