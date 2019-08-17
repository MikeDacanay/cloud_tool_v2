export const animateFwd = (btnVal) => {

	if(btnVal === 1){
		$('.landing__container').addClass('landing__container--fadeout');
		$('.landing__title').addClass('landing__title--fadeout');
		$('.landing__subtitle').addClass('landing__subtitle--fadeout');

		$('.btn__regress').attr('context', '0')
		// setTimeout(function(){
		// 	$('.page--2').addClass('activate');
		// 	$('.line--1, .line--2').addClass('activate');
		// 	$('.footer').addClass('activate');
		// },8600);
		setTimeout(function(){
			$('.page--2').addClass('activate');
			$('.line--1, .line--2').addClass('activate');
			$('.footer').addClass('activate');
		},3000);
	}
		else if(btnVal === 2){
		$('.page--2').removeClass('activate');
		$('.footer').removeClass('activate');

		$('.btn__regress').attr('context', '1')
		// setTimeout(function(){
		// 	$('.page--3').addClass('activate');
		// 	$('.line--2-a, .line--3, .line--4').addClass('activate');
		// 	$('.footer').addClass('activate');
		// 	$('.footer-text').text('2/6');
		// },8600);
		setTimeout(function(){
			$('.page--3').addClass('activate');
			$('.line--2-a, .line--3, .line--4').addClass('activate');
			$('.footer').addClass('activate');
			$('.footer-text').text('2/6');
		},3000);
	}
	else if(btnVal === 3){
		$('.page--3').removeClass('activate');
		$('.footer').removeClass('activate');

		$('.btn__regress').attr('context', '2')

		setTimeout(function(){
			// $('.btn__regress').addClass('rotate');
			$('.page--4').addClass('activate');
			$('.line--5, .line--6, .line--7').addClass('activate');
			$('.footer').addClass('activate');
			$('.footer-text').text('3/6');
		},3800);
	}else if(btnVal === 4){
		$('.page--4').removeClass('activate');
		$('.footer').removeClass('activate');

		$('.btn__regress').attr('context', '3')
		// setTimeout(function(){
		// 	$('.page--5').addClass('activate');
		// 	$('.line--8').addClass('activate');
		// 	$('.footer').addClass('activate');
		// 	$('.footer-text').text('4/6');
		// },6100);
		setTimeout(function(){
			$('.page--5').addClass('activate');
			$('.line--8').addClass('activate');
			$('.footer').addClass('activate');
			$('.footer-text').text('4/6');
		},2500);
	}else if(btnVal === 5){
		$('.page--5').removeClass('activate');
		$('.footer').removeClass('activate');

		$('.btn__regress').attr('context', '4')
		// setTimeout(function(){
		// 	$('.page--6').addClass('activate');
		// 	$('.line--9').addClass('activate');
		// 	$('.footer').addClass('activate');
		// 	$('.footer-text').text('5/6');
		// },6100);
		setTimeout(function(){
			$('.page--6').addClass('activate');
			$('.line--9').addClass('activate');
			$('.footer').addClass('activate');
			$('.footer-text').text('5/6');
		},2500);
	}else if(btnVal === 6){
		$('.page--6').removeClass('activate');
		$('.footer').removeClass('activate');

		$('.btn__regress').attr('context', '5')

		setTimeout(function(){
			// $('.btn__regress').removeClass('rotate');
			$('.page--7').addClass('activate');
			$('.line--10, .line--11').addClass('activate');
			$('.footer').addClass('activate');
			$('.footer-text').text('6/6');
		},3000);
	}else if(btnVal === 7){
		$('.page--7').removeClass('activate');
		$('.footer').removeClass('activate');
		$('.header__container').addClass('deactivate');

		setTimeout(function(){
			$('.header__container').addClass('header__container--x');
		}, 1300);

		$('.btn__regress').attr('context', '6')
		setTimeout(function(){
			$('.line__wrapper--1').css('opacity',1)
		}, 3000);

		setTimeout(function(){
			$('.line__wrapper--1').css('opacity',1)
			$('.header__container').removeClass('deactivate');
		}, 3500);		
	};

};

export const animateBack = (btnVal) => {
	btnVal=Number(btnVal)+1;

	if(btnVal === 1){ //to Landing
		$('.page--2').removeClass('activate');
		$('.footer').removeClass('activate');
		setTimeout(function(){
			$('.landing__container').removeClass('landing__container--fadeout');
			$('.landing__title').removeClass('landing__title--fadeout');
			$('.landing__subtitle').removeClass('landing__subtitle--fadeout');
		},3000);
	}else if(btnVal === 2){ //to Q2
		$('.page--3').removeClass('activate');
		$('.footer').removeClass('activate');
		setTimeout(function(){
			$('.page--2').addClass('activate');
			// $('.line--1, .line--2').addClass('activate');
			$('.footer').addClass('activate');
			$('.footer-text').text('1/6');
		},3000);
	}else if(btnVal === 3){ //to Q3

		$('.page--4').removeClass('activate');
		$('.footer').removeClass('activate');

		setTimeout(function(){
			// $('.btn__regress').removeClass('rotate');
			$('.page--3').addClass('activate');
			$('.footer').addClass('activate');
			$('.footer-text').text('2/6');
		},3800);
	}else if(btnVal === 4){ //to Q4
		$('.page--5').removeClass('activate')
		$('.footer').removeClass('activate');
		setTimeout(function(){
			$('.page--4').addClass('activate');
			$('.footer').addClass('activate');
			$('.footer-text').text('3/6');
		},2500);
	}else if(btnVal === 5){ //to Q5
		$('.page--6').removeClass('activate')
		$('.footer').removeClass('activate');
		setTimeout(function(){
			$('.page--5').addClass('activate');
			$('.footer').addClass('activate');
			$('.footer-text').text('4/6');
		},2500);
	}else if(btnVal === 6){ //to Q6
		$('.page--7').removeClass('activate')
		$('.footer').removeClass('activate');
		setTimeout(function(){
			// $('.btn__regress').removeClass('rotate');
			$('.page--6').addClass('activate');
			$('.footer').addClass('activate');
			$('.footer-text').text('5/6');
		},3000);
	}

	console.log(btnVal);
};
