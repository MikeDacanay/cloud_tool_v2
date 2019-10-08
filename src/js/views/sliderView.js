import {e} from './base';
import * as func from '.././functions';

export const nextScrollerExist = slider => {
	return e.thisNextScrollElement(slider).hasClass('scroller__content');
}

export const progressScrollerContent = slider => {	
	e.thisScrollElement(slider).addClass('scroller__content--deactive');
	e.thisScrollElement(slider).removeClass('scroller__content--active');
	e.thisNextScrollElement(slider).addClass('scroller__content--active');
	
	e.thisNextScrollElement(slider).prevAll('scroller__content--deactive');


	const pageHeight = func.returnNumOnly(e.pageContent.css('height'),2);

	//Shrinks previous siblings into a row if body is below height 1015;
	if(pageHeight <= 1015){
		const previousSiblingToActive = e.thisNextScrollElement(slider).prevAll();
		const nextSiblingToActive = e.thisNextScrollElement(slider).nextAll();
		
		applySliderGroupShrink(previousSiblingToActive);
		applySliderGroupShrink(nextSiblingToActive);

		$('.scroller__content--active').css({
			'width':'100%',
			'opacity':'1'
		});
	};
}

export const setSliderGroupSize = () =>{
	const pageHeight = func.returnNumOnly(e.pageContent.css('height'),2);

	if(pageHeight <= 1015){
		const nextSiblingToActive1 = $('.scroller__wrapper--1 > .scroller__content--active').nextAll();
		const nextSiblingToActive2 = $('.scroller__wrapper--2 > .scroller__content--active').nextAll();
		const nextSiblingToActive3 = $('.scroller__wrapper--3 > .scroller__content--active').nextAll();
	
		applySliderGroupShrink(nextSiblingToActive1);
		applySliderGroupShrink(nextSiblingToActive2);
		applySliderGroupShrink(nextSiblingToActive3);
	} 
}

export const progressBtn = slider => {
	const pageBtnProgress =e.thisPageContent(slider).find( ".btn__progress");
	pageBtnProgress.click();
}

export const setSlideActive = (slide) => {
	const self = slide;
	const wrapper = $(self).closest('.scroller__wrapper');	
	const children = wrapper.children();

		// * THIS GETS ACTIVE

		//remove all deactives and actives on this wrapper

	children.removeClass('scroller__content--deactive scroller__content--active');
	
		// get this active

	self.addClass('scroller__content--active');
	self.prevAll().addClass('scroller__content--deactive');

	const pageHeight = func.returnNumOnly(e.pageContent.css('height'),2);

	if(pageHeight <= 1015){
	
		const previousSiblingToActive = $('scroller__content--active').prevAll();
		const nextSiblingToActive = $('scroller__content--active').nextAll();
		
		applySliderGroupShrink(previousSiblingToActive);
		applySliderGroupShrink(nextSiblingToActive);

		$('.scroller__content--active').css({
			'width':'100%',
			'opacity':'1'
		});
	};
};;


function applySliderGroupShrink(sibling){
	// $('.scroller__content').css('transition-delay', '.s');
	func.iterateObjSet(sibling, function(element, index){
		let width = 97;
		let opacity = .9;
		$(element).css('width',`${width - (index*3)}%`);
		$(element).css('opacity',`${opacity - (index*.2)}`);				
	});	
}