import {e} from './base';

// export const initHeader = (pageNum) => {
// 	if(pageNum === 0){
// 		e.restartBtn.hide();
// 	};
// }

export const toggleRestartBtn = (pageNum) => {
	if(pageNum !== 0){
		e.restartBtn.addClass('toggle');
		e.headerCopyright.css('margin-right', '1.25rem')
	}else{
		e.restartBtn.removeClass('toggle'); 
	}
}
