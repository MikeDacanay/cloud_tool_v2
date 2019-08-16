// v1.1

import 'bodymovin';
import 'jquery';
import 'rangeslider.js';
import 'jquery-knob';
import 'cpr_scrollpath';
import 'cpr_bopup';
import 'lottie-web';

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





$(document).ready(function(){
 	const state = {};

/**************** DETAILED PAGE CONTROLLER ********************/
	
	if(sessionStorage.dial2){	
		const results = new CompareResults();
		results.allocateValues(sessionStorage,PeersData.retrievePeerScore)
		let detailFirst='';
		let detailSecond='';
		let detailForth='';

		drv.displayResults(results);

		// DIALS
			detailFirst = retrieveLottieDialAnimation(results.val['1']);		
			detailSecond = retrieveLottieDialAnimation(results.val['2']);
			detailForth = retrieveLottieDialAnimation(results.val['4']);

			// Contextualize where user is in the dial(NEED TO make this into a function)
			const dialsUserElements = [$('#dial__text--users-1'),$('#dial__text--users-2'),$('#dial__text--users-3')];
			const dialUserResults = [results.val['1'],results.val['2'],results.val['4']];

			(function(arr){				

				dialUserResults.forEach( function(element, index) {
					if(element > 10){
						dialsUserElements[index].prepend( '<b>You are:</b><span>Starting to use the cloud</span>' );
						dialsUserElements[index].addClass('dial__text--users-more');
						$(`#main__direction--user-${index}`).text('You are ahead of your peers and the global average on your cloud journey.');
					}else if(element <= 10 &&  element >= -10){
						dialsUserElements[index].prepend( '<b>You are:</b><span>Starting to use the cloud</span>');
						dialsUserElements[index].addClass('dial__text--users-equal');
						$(`#main__direction--user-${index}`).text('You and your peers are equal in cloud journey.');
					}else{						
						dialsUserElements[index].prepend( '<b>You are:</b><span>Starting to use the cloud</span>');
						dialsUserElements[index].addClass('dial__text--users-less');
						$(`#main__direction--user-${index}`).text('You are behind of your peers and the global average on your cloud journey.');
					}
				});				

			})([dialUserResults, dialsUserElements]);

			var detailedResults1 = lottie.loadAnimation({
			  container: document.getElementById('detail-1'),
			  renderer: 'svg',
			  autoplay: true,
			  animationData: detailFirst,
			  loop: false,
			});

			var detailedResults2 = lottie.loadAnimation({
			  container: document.getElementById('detail-2'),
			  renderer: 'svg',
			  autoplay: true,
			  animationData: detailSecond,
			  loop: false,
			});

			var detailedResults3 = lottie.loadAnimation({
			  container: document.getElementById('detail-3'),
			  renderer: 'svg',
			  autoplay: true,
			  animationData: detailForth,
			  loop: false,
			});

		//SELECTORS
			const selectorValues = results.val['3'].split(',');
			selectorValues.forEach( function(element, index) {
				$(`#select-${element}`).addClass('activate');
			});

		//SLIDER		
			const detscroll1Values = results.val[5].split(',');
			const detscroll2Values = results.val[6].split(',');

			const peersDetScroll1 = [71,73,71,69];
			const peersDetScroll2 = [74,74,70,71,71,71];

			detscroll1Values.forEach( function(element, index) {
				$(`#detscroll1-${index}`).css('background', `linear-gradient(to right, #00758f ${element}%, transparent ${element}%`);
				
				if(Number(element) < peersDetScroll1[index]){
					$(`#detscroll1__txt-${index}`).text('Your peers are slightly more confident with data sources.');										
				}else if(Number(element) > peersDetScroll1[index]){					
					$(`#detscroll1__txt-${index}`).text('You are slightly more confident with data sources than your peers. Congratulations!');									
				}else{
					$(`#detscroll1__txt-${index}`).text('You and your peers are equally as confident in data sources. Congratulations!');
				}
			});
			detscroll2Values.forEach( function(element, index) {
				$(`#detscroll2-${index}`).css('background', `linear-gradient(to right, #00758f ${element}%, transparent ${element}%`);

				if(Number(element) < peersDetScroll2[index]){
					$(`#detscroll2__txt-${index}`).text('Your peers are slightly more confident with data sources.');								
				
				}else if(Number(element) > peersDetScroll2[index]){					
					$(`#detscroll2__txt-${index}`).text('You are slightly more confident with data sources than your peers. Congratulations!');														
				}else{
					$(`#detscroll2__txt-${index}`).text('You and your peers are equally as confident in data sources. Congratulations!');
				}				
			});


	};

/****** DETAILED MAP CONTROLLER ******/

	$('.page__overlay').on('click', function(){
		const self = $(this);
		const val = self.data('val');
		

		$('.pathfinder--x').addClass(`zoom-in--${val}`);
		// $('.page').toggleClass('zoomed');
		$('.page').toggleClass('zoomed deactivate--z');
		$(`.page--${val}`).addClass('activate--z');
		$(`.page--${val}`).removeClass('deactivate--z');
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

	$('.icon__zoomout').on('click',function(){		
		$('.header__nav').toggleClass('activate');
		$('.page').toggleClass('zoomed');
		$('.page').removeClass('deactivate--z activate--z');
		$('.pathfinder--x').toggleClass('zoom-in');
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

/****** HEADER NAV BTN CONTROLLER ******/ 
	$('.header__nav--btn').on('click',function(){
		const self = $(this);
		let val = Number(self.attr('context'));

		if(self.attr('direction') === 'up'){
			val = val + 1;
		}
		
		pagination.changePagination(self);		

		$('.activate--z').toggleClass('deactivate--z activate--z');
		
		$(`.page--${val}`).toggleClass('deactivate--z activate--z');

		dp.movePathfinderX(self);
	});
	
/****************  CLOUD/ LOTTIE INIT  ********************/

	if(document.getElementById('scroll_down')){
		var scrollTip = lottie.loadAnimation({
		  container: document.getElementById('scroll_down'),
		  renderer: 'svg',
		  autoplay: true,
		  animationData: scrollJson,
		  loop: true,
		});	
	};

/****** CTA POPUPS ******/ 
	$('.cta__btn').on('click',function(){
		const val = $(this).attr('val')
		if(val === '1'){
			func.openVideoOverlay('5703531352001');
		}
	});

/****** PAGE/LINE CONTROLLER ******/
	state.width = $('body').width();	
	state.height = e.page.height();

	page.reformWandH(state.width, state.height);

	
	line.resizeLines();
	footer.hidePageNumber();

	$(window).on('resize',function(){
		state.width = $('body').width();
		state.height = $('body').height();		
		// state.height = $(window).height();
		page.reformWandH();

		line.resizeLines();
	});

	$('.page--8').on('scroll',function(){
		const pos = $(this).scrollTop();
		$('.page--8').addClass('activate');
		
		if(pos > 0 ){
			$('.line--13').addClass('deactivate');
			scrollTip.isPaused = true;		
		}else{
			$('.line--13').removeClass('deactivate');
			scrollTip.isPaused = false;
		}
	});

/****** CPRSCROLLPATH/MOVEMENT CONTROLLER ******/
 
	state.userAggregateValue = 0;

	// PROGRESS
	e.btnProgress.sp(path.movement, path.easing);

	state.pageNum = new Page();

	e.btnProgress.on('click',function(){
		const value = $(this).data('val');
		state.pageNum.incrementPageNum();
		bP.animateFwd(value);
		header.toggleRestartBtn(state.pageNum.pageNumber);
		css.changeBodyColor('black');
	});

	e.btnProgress1.on('click',function(){
		e.headerWrapper.addClass('activate');
	});

	e.btnProgress7.on('click',function(){

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

		setTimeout(function(){
			loadCloudAnimation(cloudUser, cloudPeer);
		},3000);

		// Change button item color
		$('.header__rectangle--1 > img').attr('src',$('.header__rectangle--1 > img').attr( "alt"));
		$('.header__rectangle--3 > img').attr('src',$('.header__rectangle--3 > img').attr( "alt"));
		$('.grow--text').css('color', '#00758f'); 
		$('.header__rectangle--grow').css('background-color', 'white'); 
	});


	// $('.btn__progress--1').click(); 

	e.btnBackX.on('click',function(){
		const contextValue = e.btnBackX.attr('context');
		const hdrValue = e.hdrProgress.attr('context');
		const prevSection = $(`.page--${contextValue}`);

		const prevLeft = prevSection.css('left').slice(0, -2);
		const prevTop = prevSection.css('top').slice(0, -2);

		$('.pathfinder').css('transform',`translate(${Number(prevLeft)*-1}px,${Number(prevTop)*-1}px)`);

		$(this).attr('context', `${Number(contextValue)-1}`);
		e.hdrProgress.attr('context', contextValue);		
	});

	// REGRESS

	e.btnBack.dp(path.movement2,path.easing2,path.pageList);

	e.btnBack.on('click', function(){
		const contextVal = $(this).attr('context');
		const hdrVal = e.hdrProgress.data('val');
		bP.animateBack(contextVal);

		e.hdrProgress.data('val', `${Number(hdrVal)-1}`);

		$(this).attr('context',`${Number(contextVal)-1}`)
	});

/****** DIAL CONTROLLER ******/
	state.dial1 = new Dial(); // do state.dial1.val to retrieve user's answer
	state.dial2 = new Dial(); // do state.dial2.val to retrieve user's answer
	state.dial3 = new Dial(); // do state.dial3.val to retrieve user's answer

	e.dialTracker.knob({
    'min':0,
    'max':180,
    'angleArc':180,
    'angleOffset': -90,
    'thickness': .12,
		'height': '200%',
		'displayInput': false,
		'bgColor': '#fff',
		'fgColor': '#00758f',

    'change' : function (v,context) {

      const self = $(this);
	 		dial.dialRotator(self,v);
			dial.dialContextualize(self,v);			
			this.context = (self[0].$div.prevObject.data('context'));
			
    },
    'release': function (v){;
      const self = $(this);
	 		this.selfID = self[0].$div.prevObject.data('id');
	 		this.dial = assignDial(this.selfID);
	 		this.dial.changeValue(v);
  		
	 		if(this.context=== false){
	  		dial.progressBtn(self);
    	}
    },
	});

	dial.handResize();
	dial.changeDialText();
	dial.lineResize();

	$(window).on('resize',function(){
		dial.changeDialText();
		dial.handResize();
		dial.lineResize();
	});


  $( ".dial-tracker__wrapper" ).mousemove(function( event ) {

  	const yAxis = func.returnNumOnly($('.dial-group').css('height'),2)+func.returnNumOnly($('.dial-group').css('margin-top'),2)+func.returnNumOnly($('.page__content').css('padding-top'),2);
  	const xAxis = func.returnNumOnly($('.page__content').css('margin-left'),2)+func.returnNumOnly($('.dial-group').css('height'),2);
  	
	  const dy = yAxis - event.pageY;
		const dx = xAxis - event.pageX;
		let theta = Math.atan2(dy, dx); // range (-PI, PI]
		theta *= 180 / Math.PI; // rads to degs, range (-180, 180]

		const dial = $(this).find('.dial-tracker'); 

		dial.data('context', true);

		dial.val(theta).trigger('change');
	
	});

	$('.dial-tracker__wrapper').mouseup(function(){
		// console.log('hello');
	  const dy = 819 - event.pageY;
		const dx = 633.5 - event.pageX;
		let theta = Math.atan2(dy, dx); // range (-PI, PI]
		theta *= 180 / Math.PI; // rads to degs, range (-180, 180]	
	
		const dtracker = $(this).find('.dial-tracker'); 

		dtracker.data('context', false);
		dtracker.val(theta).trigger('change');
	
		dial.progressBtn(dtracker);
	});


/****** SELECTOR CONTROLLER ******/
	state.selected = new Selector();

	e.selection.on('click',function(){
		const self =  $(this);
		const select = self.data('val');
		const pageContentElement = self.closest('.page__content');
		let stateChoicesLength;

		if(!state.selected.choices.includes(select)){
			selector.highlightSelected(self);
			state.selected.selectOption(select);
		}else{
			selector.deHighlightSelected(self);
			state.selected.removeOption(select);
		}

		stateChoicesLength = state.selected.choices.length;

		pagination.highlightPagination(pageContentElement, stateChoicesLength);

		if(state.selected.choices.length === 3){
    	selector.progressBtn(self);
		}
	});

/****** SLIDER CONTROLLER ******/
	state.slider1 = new SliderGroup($('.scroller__wrapper--1'));
	state.slider2 = new SliderGroup($('.scroller__wrapper--2'));

	sl.setSliderGroupSize();

	$(window).on('resize',function(){
		sl.setSliderGroupSize();
	});

	$('input[type="range"]').rangeslider({
	  polyfill: false,

    // Callback function on slide
    onSlide: function(position, value) {
    },

    // Callback function on end
    onSlideEnd: function(position, value) {
    	const slider = this.identifier;
    	const pageContentElement = $(`#${slider}`).closest('.page__content');
    	let sliderGroup;

    	if(pageContentElement.find('.scroller__wrapper').hasClass('scroller__wrapper--1')){
    		sliderGroup = state.slider1;
    	}else if(pageContentElement.find('.scroller__wrapper').hasClass('scroller__wrapper--2')){
    		sliderGroup = state.slider2;
    	}
    	sliderGroup.progression++;
    	pagination.highlightPagination(pageContentElement, sliderGroup.progression);

    	sliderGroup.pushToVal(value);

    	if(sl.nextScrollerExist(slider)){

    		// console.log(slider);
    		sl.progressScrollerContent(slider);
    		sliderGroup.calculateVal();
    	}else{
    		sliderGroup.calculateVal();
	    	sl.progressBtn(slider);	    	
    	};
    }
	});

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
/****************  LINE CONTROLLER  ********************/


/****************  ELOQUA CONTROLLER  ********************/
	$('.detailed-score__btn').on('click',function(){
		css.displayEloqua();
		sessionStorage.dial1=state.dial1.val;
		sessionStorage.dial2=state.dial2.val;
		sessionStorage.dial3=state.dial3.val;
		sessionStorage.selector1=state.selected.choices;
		sessionStorage.slider1=state.slider1.arrayVal;
		sessionStorage.slider2=state.slider2.arrayVal;
	});
/**************** SESSION STORAGE CONTROLLER ********************/

	$('.header__rectangle--1').on('click', function(){
		sessionStorage.clear();
	})

});

/****************  CLOUD LOTTIE  ********************/

function loadCloudAnimation(user,peer){
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
}

function retrieveLottieDialAnimation(result){
		let  variable;		
		if(result > 10){
			variable = largeDetailHigh;
		}else if(result <= 10 &&  result >= -10){
			variable = largeDetailMid;
		}else{
			variable = largeDetailLow;
		}
		return variable;
}

/****************  MOBILE NAVIGATION  ********************/




