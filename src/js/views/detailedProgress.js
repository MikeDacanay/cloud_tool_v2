import {e} from './base';
import * as func from '.././functions';
//test
export const movePathfinderX = (btn) => {

	const direction = btn.attr('direction');
 	let val = Number(btn.attr('context'));

  console.log(val, 'before');
  if(direction === 'up'){
    $('.header__nav--btn--2').attr('context',Number($('.header__nav--btn--2').attr('context'))+1);
    $('.header__nav--btn--1').attr('context',Number($('.header__nav--btn--1').attr('context'))+1);
    val = val+1;    
  }else{
    $('.header__nav--btn--2').attr('context',Number($('.header__nav--btn--2').attr('context'))-1);
    $('.header__nav--btn--1').attr('context',Number($('.header__nav--btn--2').attr('context'))-1);
        
  };
  
  $('.pathfinder--x').removeClass('zoom-in--2 zoom-in--3 zoom-in--4 zoom-in--5 zoom-in--6 zoom-in--7');
  $('.pathfinder--x').removeClass('zoom-in--2-x zoom-in--3-x zoom-in--4-x zoom-in--5-x zoom-in--6-x zoom-in--7-x');

  $('.pathfinder--x').addClass(`zoom-in--${val} zoom-in--${val}-x`);
  
};