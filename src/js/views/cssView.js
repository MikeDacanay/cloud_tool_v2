export const changeBodyColor = (color) => {
  if(color === 'white'){
	  $('body').addClass('bg-white');
	  $('.header__background').addClass('bg-white');
  }else{
	  $('body').removeClass('bg-white');
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