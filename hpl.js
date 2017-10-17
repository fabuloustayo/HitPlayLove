$(document).ready(function () {
     
    var mySwiper = new Swiper ('#swiper1', {
      
      direction: 'horizontal',
      pagination: '#pagination1',
      paginationClickable: false,
      effect: 'flip',
      autoplay: 2750,
      
      autoplayDisableOnInteraction: false,
      loop: true
    })
    
    var mySwiper = new Swiper ('#swiper2', {
      
      direction: 'horizontal',
      pagination: '#pagination2',
      paginationClickable: false,
      effect: 'slide',
      
      loop: true
    })
    
   
            
  });
  
 
  
  $('#homeLink').click(function() {

    	      location.reload();

	});