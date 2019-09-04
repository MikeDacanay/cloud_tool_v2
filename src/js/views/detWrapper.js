export const dialGrouper = () => {

  if($('body').width() < 910){  	
  	// Q1

  	$("#detail-1").detach().appendTo('.det_map--container--2');
  	$("#main__direction--1").detach().appendTo('.det_map--container--2');
 			
  	// Q2
  	$("#detail-2").detach().appendTo('.det_map--container--3');
  	$("#main__direction--2").detach().appendTo('.det_map--container--3');

  	//Q3
  	$("#detail-3").detach().appendTo('.det_map--container--4');
  	$("#main__direction--4").detach().appendTo('.det_map--container--4');
  }
};
