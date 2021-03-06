// v1.2

import 'bodymovin';
import 'jquery';
import 'rangeslider.js';
import 'jquery-knob';
import 'cpr_scrollpath';
import 'cpr_bopup';
import 'lottie-web';
import './form.js';

import {e} from './views/base';

import Dial from './models/Dial';
import Selector from './models/Selector';
import Page from './models/Page';
import * as PeersData from './models/PeersData';
import CompareResults from './models/CompareResults';
import SliderGroup from './models/Slider';

import * as bP from './views/buttonProgressView';
import * as css from './views/cssView';
import * as dial from './views/dialView';
import * as dp from './views/detailedProgress';
import * as drv from './views/detResultsView';
import * as dw from './views/detWrapper';
import * as grwtxt from './views/growTxt';
import * as header from './views/headerView';
import * as line from './views/lineView';
import * as pagination from './views/paginationView';
import * as page from './views/pageView';
import * as path from './views/pathView';
import * as result from './views/resultsView';
import * as selector from './views/selectorView';
import * as sl from './views/sliderView';
import * as footer from './views/footerView';

import * as func from './functions';
import peersJson from './peerCloud.json';
import userJson from './userCloud.json';
import scrollJson from './scrollDown.json';

import largeDetailHigh from './large_high-score.json';
import largeDetailMid from './large_mid-score.json';
import largeDetailLow from './large_low-score.json';
import loadLoop from './loading-loop.json';




if(sessionStorage.gate === undefined){
	console.log('sessionStorage');
	window.localStorage.clear();
	sessionStorage.clear();
}

$(document).ready(function(){
	
 	const state = {};

/**************** PRELOADER ********************/ 
	setTimeout(function(){
		$('.preload').addClass('fade');	
	}, 2000);
		setTimeout(function(){
		$('.preload').addClass('hide');	
	}, 3000);
	setTimeout(function(){
		$('.main-container').addClass('fade-in');	
		$('.footer--x').addClass('fade-in');
		$('.header__wrapper--2').addClass('fade-in');
	}, 3000);



/**************** DETAILED PAGE CONTENT CONTROLLER ********************/ 
	dw.dialGrouper();	

	$(window).resize(function(){
  	dw.dialGrouper();  
	});


/**************** DETAILED PAGE CONTROLLER ********************/				

	if(Number(sessionStorage.dial2)){	
		const results = new CompareResults();
		results.allocateValues(sessionStorage,PeersData.retrievePeerScore);						
		
		drv.displayResults(results);

		//SELECTORS
		const selectorValues = results.val['3'].split(',');
		selectorValues.forEach(function (element, index) {
			
			const selectorContainer = $(`#select-${element}`).closest('.selection__container--x');
			// $(`#select-${element}`).addClass('activate');
			selectorContainer.addClass('activate');
		});

		//SLIDER
		let detscroll1Values = results.val[5].split(','); //4
		let detscroll2Values = results.val[6].split(','); //6

		function removeArrDups(arr){
			let arrtemp = [];			
			for(const [i,v] of arr.entries()){
				if(i % 2 === 0){
					arrtemp.push(v);
				}
			}
			return arrtemp;	
		}

		detscroll1Values = (detscroll1Values.length > 5) ? removeArrDups(detscroll1Values) : detscroll1Values;
		detscroll2Values = (detscroll2Values.length > 7) ? removeArrDups(detscroll2Values) : detscroll2Values;

		const peersDetScroll1 = [71, 73, 71, 69];
		const peersDetScroll2 = [74, 74, 70, 71, 71, 71];

		detscroll1Values.forEach(function (element, index) {
			$(`#detscroll1-${index}`).css('background', `linear-gradient(to right, #fcfbfa ${element}%, transparent ${element}%`);

			if (Number(element) < peersDetScroll1[index]) {
				$(`#detscroll1__txt-${index}`).text('Your peers are slightly more confident with security and management.');
			} else if (Number(element) > peersDetScroll1[index]) {
				$(`#detscroll1__txt-${index}`).text('You are slightly more confident with security and management than your peers. Congratulations!');
			} else {
				$(`#detscroll1__txt-${index}`).text('You and your peers are equally as confident in security and management. Congratulations!');
			}
		});
		detscroll2Values.forEach(function (element, index) {
			$(`#detscroll2-${index}`).css('background', `linear-gradient(to right, #fcfbfa ${element}%, transparent ${element}%`);

			if (Number(element) < peersDetScroll2[index]) {
				$(`#detscroll2__txt-${index}`).text('Your peers are slightly more confident with data and analytics.');

			} else if (Number(element) > peersDetScroll2[index]) {
				$(`#detscroll2__txt-${index}`).text('You are slightly more confident with data and analytics than your peers. Congratulations!');
			} else {
				$(`#detscroll2__txt-${index}`).text('You and your peers are equally as confident in data and analytics. Congratulations!');
			}
		});
	};

/****** DETAILED MAP CONTROLLER ******/
	$('.page__overlay').on('click', function () {
		const self = $(this);		
		
		$('.header__nav--btn').toggleClass('activate');
		$('.detailed__title--wrapper').toggleClass('hide');
		$('.line__group--1').hide();
		const val = self.data('val');

		$('.header__nav--btn').removeClass('disable');

		if(val === 2){
			$('.header__nav--btn--1').addClass('disable');
		}else if(val === 7){
			$('.header__nav--btn--2').addClass('disable');
		}else{
			$('.header__nav--btn').removeClass('disable');
		}		

		$('.line--y').toggleClass('deactivate');
		$('.main-container--x').toggleClass('in');
		$('.footer--x').addClass('hide');
		$('.pathfinder--x').addClass(`zoom-in--${val}`);
		// $('.page').toggleClass('zoomed');
		$('.page').toggleClass('zoomed deactivate--z');
		$(`.page--${val}`).addClass('activate--z');
		$(`.page--${val}`).removeClass('deactivate--z');
		$('.footer-x').toggleClass('hide');

		if($('body').width() < 767){
			const mainHeight = $('.activate--z').height() + 83;
			$('.main-container--x').css('height',mainHeight);
		}

		setTimeout(function(){			
			$('.pathfinder--x').addClass(`zoom-in--${val}-x`);
			$('.header__nav').toggleClass('activate');
		}, 1500);
		
		setTimeout(function(){
			$('.pathfinder--x').toggleClass('zoom-in');
		}, 2000);
		$('.page__overlay').toggle();

		$('.header__nav--btn--2').attr('context',`${val}`);
    $('.header__nav--btn--1').attr('context',`${val-1}`);

    pagination.retrievePagination(self);
	});

	$('.icon__zoomout').on('click', function () {
		$('.footer-x').toggleClass('hide');
		$('.header__nav--btn').toggleClass('activate');
		$('.detailed__title--wrapper').toggleClass('hide');
		$('.line__group--1').show();
		$('.main-container--x').toggleClass('in');
		$('.footer--x').toggleClass('hide');
		$('.header__nav').toggleClass('activate');
		$('.page').toggleClass('zoomed');
		$('.page').removeClass('deactivate--z activate--z');
		$('.pathfinder--x').toggleClass('zoom-in');
		$('.line--y').toggleClass('deactivate');

		if($('body').width() < 767){
			$('.main-container--x').css('height','100vh');
		}
		setTimeout(function(){
			$('.page__overlay').toggle();			
		}, 1500);
		$('.pathfinder--x').removeClass('zoom-in--2 zoom-in--2-x');
		$('.pathfinder--x').removeClass('zoom-in--3 zoom-in--3-x');
		$('.pathfinder--x').removeClass('zoom-in--4 zoom-in--4-x');
		$('.pathfinder--x').removeClass('zoom-in--5 zoom-in--5-x');
		$('.pathfinder--x').removeClass('zoom-in--6 zoom-in--6-x');
		$('.pathfinder--x').removeClass('zoom-in--7 zoom-in--7-x');
		$('.pathfinder--x').removeClass('zoom-in--8 zoom-in--8-x');
	});

	$('.main-container--x').on('scroll', function () {
		const pos = $(this).scrollTop();
		
		if(pos > 0){
			$('.detailed__title--wrapper').addClass('scrolled');
		}else if(pos === 0){
			$('.detailed__title--wrapper').removeClass('scrolled');
		}
	})


	// DETAILED MAP FOOTER CONTROLLER
 	$('.footer--x').on('click', function(){
		sessionStorage.gate = 'false';
		sessionStorage.page= '1';
	});	

 
	/****** HEADER NAV BTN CONTROLLER ******/
	$('.header__nav--btn, .mobile-nav').on('click', function () {
		const self = $(this);
		let val = Number(self.attr('context'));

		console.log('tadsfasdf',val);

		if(val !== 1){
			$('.header__nav--btn--1').removeClass('disable');
		}

		if(val === 2){
			$('.header__nav--btn--1').addClass('disable');
		}

		if(val === 6 && self.attr('direction') === 'up'){
			$('.header__nav--btn--2').addClass('disable');
		}else{
			$('.header__nav--btn--2').removeClass('disable');
		}

		if(self.attr('direction') === 'up'){
			if(val === 2){
				$('.header__nav--btn--1').removeClass('disable');
			}
			val = val + 1;

		}
		
		pagination.changePagination(self);		

		$('.activate--z').toggleClass('deactivate--z activate--z');
		
		$(`.page--${val}`).toggleClass('deactivate--z activate--z');


		if($('body').width() < 767){
			const mainHeight = $('.activate--z').height() + 83;
			$('.main-container--x').css('height',mainHeight);
		}

		dp.movePathfinderX(self);
	});

	/****************  CLOUD/ LOTTIE INIT  ********************/

	if (document.getElementById('scroll_down')) {
		var scrollTip = lottie.loadAnimation({
			container: document.getElementById('scroll_down'),
			renderer: 'svg',
			autoplay: true,
			animationData: scrollJson,
			loop: true,
		});
	}
	;

	lottie.loadAnimation({
	  container: document.getElementById('preload__container'),
	  renderer: 'svg',
	  autoplay: true,
	  animationData: loadLoop,
	  loop: true,
	});

	/****** CTA POPUPS ******/
	$('.cta__btn').on('click', function () {
		const val = $(this).attr('val')
		if (val === '1') {
			func.openVideoOverlay('5703531352001');
		}
	});

	/****** PAGE/LINE CONTROLLER ******/
	state.width = $('body').width();
	state.height = e.page.height();

	page.reformWandH(state.width, state.height);


	line.resizeLines();

	console.log(sessionStorage.gate);

	if(!sessionStorage.gate){
		footer.hidePageNumber();
	}

	$(window).on('resize', function () {
		state.width = $('body').width();
		state.height = $('body').height();
		// state.height = $(window).height();
		page.reformWandH();
		$('.footer--x').addClass('hide');
		line.resizeLines();
	});

	$('.page--8').on('scroll', function () {
		const pos = $(this).scrollTop();
		$('.page--8').addClass('activate');

		if (pos > 0) {
			$('.line--13').addClass('deactivate');
			scrollTip.isPaused = true;
		} else {
			$('.line--13').removeClass('deactivate');
			scrollTip.isPaused = false;
		}
	});

	/****** CPRSCROLLPATH/MOVEMENT CONTROLLER ******/

	state.userAggregateValue = 0;	

	// PROGRESS
	e.btnProgress.sp(path.movement, path.easing);

	state.pageNum = new Page();

	e.btnProgress.on('click', function () {
		const value = $(this).data('val');

		grwtxt.changeGrowTxt(value);
		state.pageNum.incrementPageNum();
		bP.animateFwd(value);
		header.toggleRestartBtn(state.pageNum.pageNumber);
		css.changeBodyColor('black');
	});

	e.btnProgress1.on('click', function () {
		e.headerWrapper.addClass('activate');
	});


	e.btnProgress7.on('click', function () {

		// Change color after click
		css.changeBodyColor('white');

		// Shows score in results after click
		state.userAggregateValue =
			state.dial1.val +
			state.dial2.val +
			state.dial3.val +
			state.slider1.val +
			state.slider2.val;

		result.displayValues(state.userAggregateValue, PeersData.peerScore);

		// Animate cloud after click
		const cloudPeer = peersJson;
		const cloudUser = userJson;

		cloudPeer.layers[0].shapes[1].e.k[1].s[0] = PeersData.peerScore;
		cloudUser.layers[0].shapes[1].e.k[1].s[0] = state.userAggregateValue;

		result.displayResultsCopy(state.userAggregateValue, PeersData.peerScore);

		setTimeout(function () {
			loadCloudAnimation(cloudUser, cloudPeer);
		}, 3000);

		// Change button item color

		$('.header__rectangle--1 > img').attr('src',$('.header__rectangle--1 > img').attr( "alt"));
		$('.header__rectangle--3 > img').attr('src',$('.header__rectangle--3 > img').attr( "alt"));
		$('.grow--text').css('color', '#00758f'); 
		$('.header__rectangle--grow').css('background-color', 'white'); 

	});	 


	e.btnBackX.on('click', function () {
		const contextValue = e.btnBackX.attr('context');
		const hdrValue = e.hdrProgress.attr('context');
		const prevSection = $(`.page--${contextValue}`);

		const prevLeft = prevSection.css('left').slice(0, -2);
		const prevTop = prevSection.css('top').slice(0, -2);

		$('.pathfinder').css('transform', `translate(${Number(prevLeft) * -1}px,${Number(prevTop) * -1}px)`);

		$(this).attr('context', `${Number(contextValue) - 1}`);
		e.hdrProgress.attr('context', contextValue);
	});


	// DETAILED FOOTER CLICK
		if(sessionStorage.page === '1'){
			$('.pathfinder').css('transform',`translateY(-189.19rem)`);
			$('.html--bg').addClass('html--bg--white');
			$('.header__rectangle--1').addClass('toggle');
			e.headerCopyright.css('margin-right', '1.25rem')
			
			const cloudPeer = peersJson;
			const cloudUser = userJson;

			cloudPeer.layers[0].shapes[1].e.k[1].s[0] = PeersData.peerScore;
			cloudUser.layers[0].shapes[1].e.k[1].s[0] = sessionStorage.userAgg;			
			
			result.displayValues(Number(sessionStorage.userAgg), PeersData.peerScore);
			
			result.displayResultsCopy(Number(sessionStorage.userAgg), PeersData.peerScore);

			loadCloudAnimation(cloudUser, cloudPeer);
		}

	// REGRESS

	e.btnBack.dp(path.movement2, path.easing2, path.pageList);

	e.btnBack.on('click', function () {
		const contextVal = $(this).attr('context');
		grwtxt.changeGrowTxt(contextVal);
		const hdrVal = e.hdrProgress.data('val');
		bP.animateBack(contextVal);

		$('.btn__navi__button').click();

		e.hdrProgress.data('val', `${Number(hdrVal) - 1}`);

		$(this).attr('context', `${Number(contextVal) - 1}`)
	});

	/****** DIAL CONTROLLER ******/
	state.dial1 = new Dial(); // do state.dial1.val to retrieve user's answer
	state.dial2 = new Dial(); // do state.dial2.val to retrieve user's answer
	state.dial3 = new Dial(); // do state.dial3.val to retrieve user's answer

	e.dialTracker.knob({
		'min': 0,
		'max': 180,
		'angleArc': 180,
		'angleOffset': -90,
		'thickness': .12,
		'height': '200%',
		'displayInput': false,
		'bgColor': '#56504b',
		'fgColor': '#fff',
		// "readOnly": true,

		'change': function (v, context) {

			const self = $(this);
			dial.dialRotator(self, v);
			dial.dialContextualize(self, v);
			this.context = (self[0].$div.prevObject.data('context'));
		},
		'release': function (v) {
			;
			const self = $(this);
			this.selfID = self[0].$div.prevObject.data('id');
			this.dial = assignDial(this.selfID);
			this.dial.changeValue(v);

			this.context = false;

			if (this.context === false) {
				dial.progressBtn(self);
			}
		},
	});

	dial.handResize();
	dial.changeDialText();
	dial.lineResize();

	$(window).on('resize', function () {
		dial.changeDialText();
		dial.handResize();
		dial.lineResize();
	});


	function dialWrapperMove(){		
	  $( ".dial-tracker__wrapper" )
	  .mousemove(function( event ) {

	  	const yAxis = func.returnNumOnly($('.dial-group').css('height'),2)+func.returnNumOnly($('.dial-group').css('margin-top'),2)+func.returnNumOnly($('.page__content').css('padding-top'),2);
	  	const xAxis = func.returnNumOnly($('.page__content').css('margin-left'),2)+func.returnNumOnly($('.dial-group').css('height'),2);
	  	
		  const dy = yAxis - event.pageY;
			const dx = xAxis - event.pageX;
			let theta = Math.atan2(dy, dx); // range (-PI, PI]
			theta *= 180 / Math.PI; // rads to degs, range (-180, 180]

			const dial = $(this).find('.dial-tracker'); 

			dial.data('context', true);

			dial.val(theta).trigger('change');

		  // $({
    //     value:0
    //   }).animate({
    //     value: theta
    //   },{
    //     duration: 2000,
    //     easing: 'swing',
    //     step: function(){
    //       dial.val(this.value).trigger('change');       
    //     	// currentState = theta;
    //     }
    //   });


		
		})
		.mouseleave(function(){
			const dial = $(this).find('.dial-tracker');

			// dial.val(0).trigger('change');

			// console.log(dial.val());

		 $({
        value: dial.val()
      }).animate({
        value: 0
      },{
        duration: 500,
        easing: 'swing',
        step: function(){
          dial.val(this.value).trigger('change');       
        	// currentState = theta;
        }
      });

		});	
  }

	function assignDial(dataId){
		let x;
		if(dataId === 1){
			x = state.dial1;
		}else if(dataId === 2){
			x = state.dial2;
		}else{
			x = state.dial3;
		}
		return x;
	}  

	/****** SELECTOR CONTROLLER ******/
	state.selected = new Selector();

	e.selection.on('click', function () {
		const self = $(this);
		const select = self.data('val');
		const pageContentElement = self.closest('.page__content');
		let stateChoicesLength;

		if(state.selected.choices.length < 3){
			if (!state.selected.choices.includes(select)) {
				selector.highlightSelected(self);
				state.selected.selectOption(select);
			} else {
				selector.deHighlightSelected(self);
				state.selected.removeOption(select);
			}
		}else if(state.selected.choices.length === 3){
			if (!state.selected.choices.includes(select)){
				const lastVal = state.selected.choices[2];
				state.selected.choices.pop();
				$(`.selection__container--${lastVal}`).removeClass('selection__container--active');				
				selector.highlightSelected(self);
				state.selected.selectOption(select);
			}else{
				selector.deHighlightSelected(self);
				state.selected.removeOption(select);
			}
		}

		stateChoicesLength = state.selected.choices.length;

		pagination.highlightPagination(pageContentElement, stateChoicesLength);

		if (state.selected.choices.length === 3) {
			selector.progressBtn(self);
		}
	});

	/****** SLIDER CONTROLLER ******/
	state.slider1 = new SliderGroup($('.scroller__wrapper--1'));
	state.slider2 = new SliderGroup($('.scroller__wrapper--2'));

	sl.setSliderGroupSize();

	$(window).on('resize', function () {
		sl.setSliderGroupSize();
	});

	$('input[type="range"]').rangeslider({
		polyfill: false,

		// Callback function on slide
		onSlide: function (position, value) {
		},

		// Callback function on end
		onSlideEnd: function (position, value) {
			const slider = this.identifier;
			const pageContentElement = $(`#${slider}`).closest('.page__content');
			let sliderGroup;

			if (pageContentElement.find('.scroller__wrapper').hasClass('scroller__wrapper--1')) {
				sliderGroup = state.slider1;
			} else if (pageContentElement.find('.scroller__wrapper').hasClass('scroller__wrapper--2')) {
				sliderGroup = state.slider2;
			}
			sliderGroup.progression++;
			pagination.highlightPagination(pageContentElement, sliderGroup.progression);

			sliderGroup.pushToVal(value);

			if (sl.nextScrollerExist(slider)) {

				// console.log(slider);
				sl.progressScrollerContent(slider);
				sliderGroup.calculateVal();
			} else {
				sliderGroup.calculateVal();
				sl.progressBtn(slider);
			}
			;
		}
	});

	$('.scroller__wrapper').on('mouseup','.scroller__content--deactive',function() {

		const self = $(this); 

		sl.setSlideActive(self)
	});

	/****************  LINE CONTROLLER  ********************/


	/****************  ELOQUA CONTROLLER  ********************/
	$('.detailed-score__btn').on('click', function () {
		// css.displayEloqua();

		sessionStorage.gate = true;

		sessionStorage.page = '2';

		sessionStorage.dial1 = state.dial1.val;
		sessionStorage.dial2 = state.dial2.val;
		sessionStorage.dial3 = state.dial3.val;
		sessionStorage.selector1 = state.selected.choices;
		sessionStorage.slider1 = state.slider1.arrayVal;
		sessionStorage.slider2 = state.slider2.arrayVal;

		sessionStorage.userAgg = state.userAggregateValue;
		sessionStorage.peerAgg = PeersData.peerScore;
	
		// window.location.href = "/results.html";
	});
	/****Eloqua Gate**/
	/***popuplate countries dropdown**/
	if(!sessionStorage.gate){
		func.populateCountries("field17");
	}
	$('.elq-sumbit__btn').on('click', function () {
		func.validateFields();
	});
	$('.eloqua-close').on('click', function () {
		$('.results__eloqua').removeClass('activate');
	});
	var options = {
		iframe: true,
		target:'#output1'
	}

	if(!sessionStorage.gate){
		$('#form1048').ajaxForm(options);
	}
	/**************** SESSION STORAGE CONTROLLER ********************/

	$('.header__rectangle--1').on('click', function () {
		sessionStorage.clear();
	})
	/***popuplate countries dropdown**/
	if(!sessionStorage.gate){
		func.populateCountries("field17");
	}

	/****************  CLOUD LOTTIE  ********************/

	function loadCloudAnimation(user, peer) {
		$('#cloud__wrapper').css('opacity', 1);

		lottie.loadAnimation({
			container: document.getElementById('cloud__wrapper'),
			renderer: 'svg',
			autoplay: true,
			animationData: user,
		});

		lottie.loadAnimation({
			container: document.getElementById('cloud__wrapper'),
			renderer: 'svg',
			autoplay: true,
			animationData: peer,
		});
	};

	function retrieveLottieDialAnimation(result) {
		let variable;
		if (result > 10) {
			variable = largeDetailHigh;
		} else if (result <= 10 && result >= -10) {
			variable = largeDetailMid;
		} else {
			variable = largeDetailLow;
		}
		return variable;

	}
});

