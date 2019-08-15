import largeDetailHigh from '.././large_high-score.json';
import largeDetailMid from '.././large_mid-score.json';
import largeDetailLow from '.././large_low-score.json';

const retrieveLottieDialAnimation = result =>{
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


const displayDialLottie= res => {

	console.log(res);
	
	let 	detailFirst = retrieveLottieDialAnimation(res.val['1']);		
	let 	detailSecond = retrieveLottieDialAnimation(res.val['2']);
	let 	detailForth = retrieveLottieDialAnimation(res.val['4']);

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
}

export const displayResults = (res) => {

	displayDialLottie(res);

	// // dials


	// 	let detailFirst='';
	// let detailSecond='';
	// let detailForth='';

	// drv.displayResults(results);

	// // DIALS
	// 	detailFirst = retrieveLottieDialAnimation(results.val['1']);		
	// 	detailSecond = retrieveLottieDialAnimation(results.val['2']);
	// 	detailForth = retrieveLottieDialAnimation(results.val['4']);

	// 	// Contextualize where user is in the dial(NEED TO make this into a function)
	// 	const dialsUserElements = [$('#dial__text--users-1'),$('#dial__text--users-2'),$('#dial__text--users-3')];
	// 	const dialUserResults = [results.val['1'],results.val['2'],results.val['4']];

	// 	(function(arr){				

	// 		dialUserResults.forEach( function(element, index) {
	// 			if(element > 10){
	// 				dialsUserElements[index].prepend( '<b>You are:</b><span>Starting to use the cloud</span>' );
	// 				dialsUserElements[index].addClass('dial__text--users-more');
	// 				$(`#main__direction--user-${index}`).text('You are ahead of your peers and the global average on your cloud journey.');
	// 			}else if(element <= 10 &&  element >= -10){
	// 				dialsUserElements[index].prepend( '<b>You are:</b><span>Starting to use the cloud</span>');
	// 				dialsUserElements[index].addClass('dial__text--users-equal');
	// 				$(`#main__direction--user-${index}`).text('You and your peers are equal in cloud journey.');
	// 			}else{						
	// 				dialsUserElements[index].prepend( '<b>You are:</b><span>Starting to use the cloud</span>');
	// 				dialsUserElements[index].addClass('dial__text--users-less');
	// 				$(`#main__direction--user-${index}`).text('You are behind of your peers and the global average on your cloud journey.');
	// 			}
	// 		});				

	// 	})([dialUserResults, dialsUserElements]);

	// 	var detailedResults1 = lottie.loadAnimation({
	// 	  container: document.getElementById('detail-1'),
	// 	  renderer: 'svg',
	// 	  autoplay: true,
	// 	  animationData: detailFirst,
	// 	  loop: false,
	// 	});

	// 	var detailedResults2 = lottie.loadAnimation({
	// 	  container: document.getElementById('detail-2'),
	// 	  renderer: 'svg',
	// 	  autoplay: true,
	// 	  animationData: detailSecond,
	// 	  loop: false,
	// 	});

	// 	var detailedResults3 = lottie.loadAnimation({
	// 	  container: document.getElementById('detail-3'),
	// 	  renderer: 'svg',
	// 	  autoplay: true,
	// 	  animationData: detailForth,
	// 	  loop: false,
	// 	});

};

