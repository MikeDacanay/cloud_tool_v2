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
import SliderGroup from './models/Slider';

import * as bP from './views/buttonProgressView';
import * as css from './views/cssView';
import * as dial from './views/dialView';
import * as header from './views/headerView';
import * as line from './views/lineView';
import * as pagination from './views/paginationView';
import * as page from './views/pageView';
import * as path from './views/pathView';
import * as result from './views/resultsView';
import * as selector from './views/selectorView';
import * as sl from './views/sliderView';

import * as func from './functions';

import peersJson from './peerCloud.json';
import userJson from './userCloud.json';
import scrollJson from './scrollDown.json';

$(document).ready(function(){

 	const state = {};

/****** CTA POPUPS ******/ 
	$('.cta__btn').on('click',function(){
		const val = $(this).attr('val')
		if(val === '1'){
			func.openVideoOverlay('5703531352001');
		}
	});

/****** PAGE/LINE CONTROLLER ******/
	state.width = $('body').width();
	// state.height = e.page.height();
	// page.reformWandH(state.width, state.height);

	line.resizeLines(state.width);

	$(window).on('resize',function(){
		state.width = $('body').width();
		// state.height = $(window).height();
		page.reformWandH();

		line.resizeLines(state.width);
	});

	$('.page--8').on('scroll',function(){
		$('.page--8').addClass('activate');
	})

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
	});

	$('.btn__progress--6').click();


	// Hooking header nav buttons to btnprogress
	e.hdrProgress.on('click',function(){
		const hdrValue = $(this).attr('context');
		const nextSection = $(`.page--${Number(hdrValue)+1}`);
		const nextLeft = nextSection.css('left').slice(0, -2);
		const nextTop = nextSection.css('top').slice(0, -2);

		console.log(nextLeft,nextTop);

		$('.pathfinder').css('transform',`translate(${Number(nextLeft)*-1}px,${Number(nextTop)*-1}px)`);

		$(this).attr('context',`${Number(hdrValue)+1}`);

		e.btnBackX.attr('context',hdrValue);
	});		

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
	state.dial1 = new Dial();
	state.dial2 = new Dial();
	state.dial3 = new Dial();

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


    'change' : function (v) {
      const self = $(this);

	 		dial.dialRotator(self,v);
			dial.dialContextualize(self,v);
    },
    'release': function (v){
      const self = $(this);
	 		this.selfID = self[0].$div.prevObject.data('id');
	 		this.dial = assignDial(this.selfID);

	 		this.dial.changeValue(v);

	  dial.progressBtn(self);
    },
	});

	dial.handResize();
	dial.changeDialText();

	$(window).on('resize',function(){
		dial.changeDialText();
		dial.handResize();
		dial.lineResize();

	});

/****** DETAILED MAP CONTROLLER ******/
	$('.detailed__square').on('click',function(){
		const self = $(this);
		const val = self.data('val');
		const context = $(`.page--${val}`);
		const nextTop = Number(context.css('top').slice(0,-2))*-1;
		const nextLeft = Number(context.css('left').slice(0,-2))*-1;		

		console.log(nextTop, nextLeft);

		context.addClass('activate');
		
		$('.detailed__map--container').addClass('activate');
		$('.detailed__results--title').addClass('deactivate');
		// $('.detailed__map > *').addClass('deactivate');
		$('.detailed__map').children().not(this).addClass('deactivate');
		$('.line__wrapper').addClass('deactivate');
		$('.detailed__map--center').addClass('deactivate');

		setTimeout(function(){
			self.addClass('activate');
			if(val === 2){
				$('.detailed__map').css('transform','scale(7.34) translate(-15.45%,-24.05%)');
			}else if(val === 3){
				$('.detailed__map').css('transform','scale(7.34) translate(-40%,-43.1%)');
			}else if(val === 4){
				$('.detailed__map').css('transform', 'scale(7.34) translate(-40%,43.1%)');
			}else if(val === 5){
				$('.detailed__map').css('transform', 'scale(7.34) translateY(43.1%)');
			}else if(val === 6){
				$('.detailed__map').css('transform', 'scale(7.34) translate(43.16%,43.1%)');
			}else if(val === 7){
				$('.detailed__map').css('transform', 'scale(7.34) translate(23.48%,-43.2%)');
			}

			

			setTimeout(function(){						
				$('.page--x').addClass('deactivate');
				$('.main-container').addClass('activate');
				$('.header__nav').addClass('activate');
			}, 800)
			
		}, 800);
		
		$('.pathfinder').css("transform", `translate(${nextLeft}px,${nextTop}px)`);

		// Changing header nav value's to corresponding square

		$('.header__nav--btn--2').attr('context',`${val}`);
		$('.header__nav--btn--1').attr('context',`${Number(val)-1}`);
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
	});

/****************  CLOUD/ LOTTIE INIT  ********************/
	lottie.loadAnimation({
	  container: document.getElementById('scroll_down'),
	  renderer: 'svg',
	  autoplay: true,
	  animationData: scrollJson,
	  loop: true,
	});
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
