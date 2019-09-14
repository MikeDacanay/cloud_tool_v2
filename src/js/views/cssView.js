export const changeBodyColor = (color) => {
  if(color === 'white'){

  	$('.html--bg').addClass('html--bg--remove');


  	setTimeout(function(){
			$('.html--bg').removeClass('html--bg--remove');  		
			$('.html--bg').addClass('html--bg--white');
  	}, 2000);
	  // $('html').addClass('bg-white');
	  // $('.header__background').addClass('bg-white');
  }else{
	  $('html').removeClass('bg-white');
	  $('.header__background').removeClass('bg-white');
  }
};

export const displayEloqua = () => {
	if($('.results__eloqua').hasClass('activate')){
		$('.results__eloqua').removeClass('activate');
	}else{
		$('.results__eloqua').addClass('activate');
	}
}