export const resizeLines = (width,height) => {	
	let size1 = `calc(4rem + 5.7rem + 2px + 68.33vh)`;
	let ysize2 = 92.7;

	if(width <= 1450 && height <= 650){

		size1 = `calc(14.35rem + 40.83vh)`;

	}

	//Line for Question 1
	$('.line--1').attr({
	    y1: size1,
	});


	// $('.line--2').attr({
	// 	y1: `${size1}rem`,
	//     y2: `${size1}rem`,
	//     x2: `${size2}rem`
	// });
	// $('.line--2-a').attr({
	// 	y1: `${size1}rem`,
	//     y2: `${size1}rem`
	// });
	// $('.line--3').attr({
	//     y1: `${size1}rem`
	// });

	// //Line for Question 3
	// $('.line--3').attr({
	// 	y2: `${size3}rem`,
	// });
	// $('.line--4').attr({
	// 	y1: `${size3}rem`,
	// 	y2: `${size3}rem`,
	// 	x2: `${size4}rem`
	// });
	// $('.line--5').attr({
	// 	y1: `${size3}rem`,
	// 	y2: `${size3}rem`
	// });
	// $('.line--6').attr({
	// 	y1: `${size3}rem`
	// });

	// //Line height for Question 3
	// $('.line--6').attr({
	// 	y2: `${size5}rem`
	// });
	// $('.line--7').attr({
	// 	y1: `${size5}rem`,
	// 	y2: `${size5}rem`,
	// 	x2: `${size6}rem`
	// });
	// $('.line--8').attr({
	// 	y1: `${size5}rem`,
	// 	y2: `${size5}rem`,
	// 	x1: `${size6}rem`,
	// 	x2: `${size7}rem`
	// });
	// $('.line--9').attr({
	// 	y1: `${size5}rem`,
	// 	y2: `${size5}rem`,
	// 	x1: `${size7}rem`
	// });
	// $('.line--10').attr({
	// 	y1: `${size5}rem`
	// });


}