$(document).ready(function(){
   $('.item').click(function(){
      let thisActive= $(this).children('.list');
      let checkActive= $('.item').find('.active');
      if(checkActive.length !== 0 && thisActive.is('.active') !== true ){
         checkActive.removeClass('active')
      }

       thisActive.toggleClass('active');
       
   })
});

