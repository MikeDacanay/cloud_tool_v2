export const dialGrouper = () => {
  if($('body').width() < 910){  	
  	// Q1

  	$("#detail-1").detach().appendTo('.det_map--container--2');
  	$("#main__direction--1").detach().appendTo('.det_map--container--2');
 
  }
};
