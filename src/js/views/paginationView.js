import * as func from '.././functions';

export const highlightPagination = (element, stateKey) => {
		var paginationNodeList = element.find( ".pagination__num");
		var paginationArray = [];

		for(let i = 0; i < paginationNodeList.length; i++){
			paginationArray.push(paginationNodeList[i]);
		}
		console.log(stateKey);
		// console.log(paginationArray);
		// console.log(paginationNodeList);
		paginationNodeList.removeClass('pagination--active');

		for(let j = 0; j < stateKey; j++){
			
			$(paginationArray[j]).addClass('pagination--active');			
		}
}

export const retrieveDetailPagination = () => {
	return func.covertObjtoArr($('.pagination__wrapper').children());
};

export const deactivateDetailPagination = () =>{
	$('.pagination__wrapper').children().removeClass('activate');
};

export const changePagination = (headerbtn) => {
	const direction =	(headerbtn.attr('direction') === 'up') ? 0 : -2;

	const currentActivatePagCirc = func.covertObjtoArr($('.pagination__circles.activate')).length;
	const paginationCircGroup = func.covertObjtoArr($('.pagination__wrapper').children());
	$('.pagination__wrapper').children().removeClass('activate');
		
	for(let i = 0; i <= (currentActivatePagCirc+direction); i++){
		$(paginationCircGroup[i]).addClass('activate');
		// console.log(paginationCircGroup[i]);
	};
	
}

export const retrievePagination = (pgOverlay) => {	
	
	const val = Number(pgOverlay.data('val'))-2;
	const paginationCircGroup = func.covertObjtoArr($('.pagination__wrapper').children());
	$('.pagination__wrapper').children().removeClass('activate');
	
	for(let i = 0; i <= val; i++){
		$(paginationCircGroup[i]).addClass('activate');
		// console.log(paginationCircGroup[i]);
	};
}

