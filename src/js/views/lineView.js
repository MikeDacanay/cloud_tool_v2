export const resizeLines = () => {	
	const width = $('.page__content').width();
	const screenWidth = $(window).width();
	const height = $('.page').height();
	const circleSize = $('.landing__container').height();

	/*** THIS IS example for size 1, I multiplied, (4x20) + (5.7x20) + 2 + (.6833 * height) ***/ 
		// let size1 = `calc(4rem + 5.7rem + 2px + 68.33vh)`;

	let x1_center = width/2; // Center and Down (start)
	let x2_q1 = 1854; // Activation point - Q1
	let x3_constWidth = 2554; // Turning point - Down
	let x4_q2 = 5572; // Activation point - Q2
	let x5_constWidth = 7877; // Turning point Up 
	let x6_q3 = 5600; // Line Activated 1
	let x7_q4 = 20; // Line Activated 2
	let x8_q5_constWidth = - 5542; // Activation point and Constant Down
	let x9_q6 = - 3681; // Line Activated
	
	let y1_start = 80+114+4+ circleSize;
	let y2_constHeight = 1000 + 1*height - 35.00; // Constant Height for Q1
	let y3_constHeight = 2000 + 1*height - 35; // Constant height for Q2
	let y4_constHeight = - 3000 + 1*height - 35; // Constant height for Q3, Q4 and Q5
	

	let y5_results = 3783.8; // Results Page

	// RESULTS PAGE

	// let y1x1 = '35rem';
	// let y3x1 = '128.7rem';
	// let y5x2 = '393.85rem';
	// let y10x1 = '-231.1rem';

	let y1x1 = 700;
	let y1x2 = 1700;
	let y3x1 = 2574.00;
	let y5x2 = 7877.00;
	let y10x1 = -4622.00;

	if(height <= 400) {
		y1_start = 2.6*20 + circleSize;
		x1_center = screenWidth - 60 - circleSize/2 ;
	} else if(height <= 480 && screenWidth >=768) {
		y1_start = 11.5*20 + circleSize;		
	} else if(height <= 530 && screenWidth >=768) {
		y1_start = 13.4*20 + circleSize;		
	} else if(height <= 480 && screenWidth <= 767){
		y1_start = 9.75*20 + circleSize;
	} else if(height <= 530 && screenWidth <= 767){
		y1_start = 11.6*20 + circleSize;
	} else if(height <= 650 && screenWidth <= 767){
		y1_start = 12.85*20 + circleSize;
	} else if(screenWidth <= 600){
		y1_start = 12.9*20 + circleSize;
	} else if(height <= 650){
		y1_start = 14.55*20 + circleSize;
	} else if(height <= 810){
		y1_start = 154+circleSize;
	} else if(height >= 1080){
		y1_start = 10.1*20 + circleSize;
	}; 

	if($('body').width() <= 1440){
		x3_constWidth = (width/2)+x2_q1;		
		x5_constWidth = (width*1.25)+(x2_q1*3);
		
		y1x1 = '50vw'
		y3x1 = '200vw';
		y5x2 = '500vw';
		y10x1 = '-300vw';
	}

	if($('body').width() <= 1300){
		var vh100 = $('.page').height();

		y2_constHeight = vh100+910.00;
		y3_constHeight = vh100+1910.00;
		y4_constHeight = vh100-3090.00;

	}

	//Lines for ResultsPage

	$('.line--1y').attr({
		x1: y1x1,
		x2: y1x1,
	});
	$('.line--2y').attr({
		x1: y1x1,
		x2: y1x2,
	});	
	$('.line--3y').attr({
	    x1: y3x1,
	    x2: y3x1,
	});
	$('.line--4y').attr({
	    x1: y3x1,
	});
	$('.line--5y').attr({
	    x2: y5x2,	    
	});
	$('.line--6y').attr({
	    x1: y5x2,
	    x2: y5x2,	    
	});
	$('.line--7y').attr({
	    x1: y5x2,	    
	});
	$('.line--9y').attr({
	    x2: y10x1,	    
	});
	$('.line--10y').attr({
	    x1: y10x1,	    
	    x2: y10x1
	});
	$('.line--11y').attr({
	    x1: y10x1,	    
	});
	$('.line--11y').attr({
		x2: y1x1,
	});
	$('.line--13y').attr({
		x1: y1x1,
		x2: y1x1,
	});


	//Line for Page 1
	$('.line--1').attr({
	    y1: y1_start,
	    y2: y2_constHeight,
	    x1: x1_center,
	    x2: x1_center,
	});
	//Lines for Question 1
	$('.line--2').attr({
	    y1: y2_constHeight,
	    y2: y2_constHeight,
	    x1: x1_center,
	    x2: x2_q1,
	});
	$('.line--2-a').attr({
	    y1: y2_constHeight,
	    y2: y2_constHeight,
	    x1: x2_q1,
	    x2: x3_constWidth,
	});
	//Line 3 (down)
	$('.line--3').attr({
	    y1: y2_constHeight,
	    y2: y3_constHeight,
	    x1: x3_constWidth,
	    x2: x3_constWidth,
	});
	//Lines for Question 2
	$('.line--4').attr({
	    y1: y3_constHeight,
	    y2: y3_constHeight,
	    x1: x3_constWidth,
	    x2: x4_q2,
	});
	$('.line--5').attr({
	    y1: y3_constHeight,
	    y2: y3_constHeight,
	    x1: x4_q2,
	    x2: x5_constWidth,
	});
	// Line 6 (up) 
	$('.line--6').attr({
		y1: y3_constHeight,
		y2: y4_constHeight,
		x1: x5_constWidth,
		x2: x5_constWidth,
	});
	// Lines 7, 8 and 9 for Questions 3, 4 and 5
	$('.line--7').attr({
	    y1: y4_constHeight,
	    y2: y4_constHeight,
	    x1: x5_constWidth,
	    x2: x6_q3,
	});
	$('.line--8').attr({
	    y1: y4_constHeight,
	    y2: y4_constHeight,
	    x1: x6_q3,
	    x2: x7_q4,
	});
	$('.line--9').attr({
	    y1: y4_constHeight,
	    y2: y4_constHeight,
	    x1: x7_q4,
	    x2: x8_q5_constWidth,
	});
	// Line 10 (down)
	$('.line--10').attr({
		y1: y4_constHeight,
		y2: y3_constHeight,
		x1: x8_q5_constWidth,
		x2: x8_q5_constWidth,
	});
	// Lines 11 and 12 for Question 6
	$('.line--11').attr({
	    y1: y3_constHeight,
	    y2: y3_constHeight,
	    x1: x8_q5_constWidth,
	    x2: x9_q6,
	});
	$('.line--12').attr({
	    y1: y3_constHeight,
	    y2: y3_constHeight,
	    x1: x9_q6,
	    x2: x1_center,
	});
	// Lines 13 for Results
	$('.line--13').attr({
	    y1: y3_constHeight,
	    y2: y5_results, // Resolve this one
	    x1: x1_center,
	    x2: x1_center,
	});
}