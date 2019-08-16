import largeDetailHigh from '.././large_high-score.json';
import largeDetailMid from '.././large_mid-score.json';
import largeDetailLow from '.././large_low-score.json';

export const displayResults = (res) => {

	// DIALS
	displayDialLottie(res);
	displayDialText(res);

};

function displayDialLottie (res) {
	
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

function displayDialText (res) {
	const dialsUserElements = [$('#dial__text--users-1'),$('#dial__text--users-2'),$('#dial__text--users-3')];
	const dialUserResults = [res.val['1'],res.val['2'],res.val['4']];
	


	dialUserResults.forEach( function(element, index) {		

		if(index === 0){
			if(element > 10){
				$('#main__direction--user-0').text('You are ahead of your peers and the global average in cloud utilization.');
				$('#dial__text--users-1').text('Using cloud services');
				$('#dial__text--users-1').addClass('dial__text--users-more');				
			}else if(element <= 10 &&  element >= -10){
				$('#main__direction--user-0').text('You are on par with your peers and the global average in cloud utilization.');
				$('#dial__text--users-1').text('Planning for the cloud');
				$('#dial__text--users-1').addClass('dial__text--users-equal');				
			}else{
				$('#main__direction--user-0').text('You are behind your peers and the global average in cloud utilization.');
				$('#dial__text--users-1').text('Not using the cloud');
				$('#dial__text--users-1').addClass('dial__text--users-less');				
			}
		}else if(index === 1){
			if(element > 10){
				$('#main__direction--user-1').text('You are ahead of your peers and the global average in cloud migration impact.');
				$('#dial__text--users-2').text('More impact');
				$('#dial__text--users-2').addClass('dial__text--users-more');				
			}else if(element <= 10 &&  element >= -10){
				$('#main__direction--user-1').text('You are on par with your peers and the global average in cloud migration impact.');
				$('#dial__text--users-2').text('Some impact');
				$('#dial__text--users-2').addClass('dial__text--users-equal');				
			}else{
				$('#main__direction--user-1').text('You are behind your peers and the global average in cloud migration impact.');
				$('#dial__text--users-2').text('Less Impact');
				$('#dial__text--users-2').addClass('dial__text--users-less');				
			}
		};


		// if(index === 2){
		// 	if(result > 10){
		// 		variable = largeDetailHigh;
		// 	}else if(result <= 10 &&  result >= -10){
		// 		variable = largeDetailMid;
		// 	}else{
		// 		variable = largeDetailLow;
		// 	}
		// };


	});

}

function retrieveLottieDialAnimation(result){
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