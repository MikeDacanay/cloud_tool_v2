import largeDetailHigh from '.././large_high-score.json';
import largeDetailMid from '.././large_mid-score.json';
import largeDetailLow from '.././large_low-score.json';

export const displayResults = (res) => {	
	if(sessionStorage.gate == 'true'){		
		displayDetailedDial(res);
		displayDialContext(res);
	}	
};

function displayDetailedDial(res){	
	const detailFirst = retrieveLottieDialAnimation(res.val['1']);		
	const detailSecond = retrieveLottieDialAnimation(res.val['2']);
	const detailForth = retrieveLottieDialAnimation(res.val['4']);

	const detailedResults1 = lottie.loadAnimation({
	  container: document.getElementById('detail-1'),
	  renderer: 'svg',
	  autoplay: true,
	  animationData: detailFirst,
	  loop: false,
	});

	const detailedResults2 = lottie.loadAnimation({
	  container: document.getElementById('detail-2'),
	  renderer: 'svg',
	  autoplay: true,
	  animationData: detailSecond,
	  loop: false,
	});

	const detailedResults3 = lottie.loadAnimation({
	  container: document.getElementById('detail-3'),
	  renderer: 'svg',
	  autoplay: true,
	  animationData: detailForth,
	  loop: false,
	});		
};

function displayDialContext(res){

	const dialsUserElements = [$('#dial__text--users-1'),$('#dial__text--users-2'),$('#dial__text--users-3')];
	const dialUserResults = [res.val['1'],res.val['2'],res.val['4']];

	dialUserResults.forEach( function(element, index) {
		if(element > 10){
			dialsUserElements[index].prepend( '<b>You are:</b><span>Starting to use the cloud</span>' );
			dialsUserElements[index].addClass('dial__text--users-more');
			$(`#main__direction--user-${index}`).text('You are ahead of your peers and the global average on your cloud journey.');
		}else if(element <= 10 &&  element >= -10){
			dialsUserElements[index].prepend( '<b>You are:</b><span>Starting to use the cloud</span>');
			dialsUserElements[index].addClass('dial__text--users-equal');
			$(`#main__direction--user-${index}`).text('You and your peers are equal in cloud journey.');
		}else{						
			dialsUserElements[index].prepend( '<b>You are:</b><span>Starting to use the cloud</span>');
			dialsUserElements[index].addClass('dial__text--users-less');
			$(`#main__direction--user-${index}`).text('You are behind of your peers and the global average on your cloud journey.');
		}
	});		
};

function retrieveLottieDialAnimation(result) {
	let variable;
	if (result > 10) {
		variable = largeDetailHigh;
	} else if (result <= 10 && result >= -10) {
		variable = largeDetailMid;
	} else {
		variable = largeDetailLow;
	}
	return variable;
};