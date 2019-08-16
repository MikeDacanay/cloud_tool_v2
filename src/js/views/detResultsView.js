import largeDetailHigh from '.././large_high-score.json';
import largeDetailMid from '.././large_mid-score.json';
import largeDetailLow from '.././large_low-score.json';

export const displayResults = (res) => {

	// DIALS
	displayDialLottie(res);
	displayDialText(res);

	// SELECTORS
	displaySelector(res);

	// SLIDER
	displaySliderDirectionText(res);
	displaySliderContainerTextAndFill(res);
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
		}else{
			if(element > 10){
				$('#main__direction--user-2').text('You are ahead of your peers and the global average in cloud data impact.');
				$('#dial__text--users-3').text('Improve data use');
				$('#dial__text--users-3').addClass('dial__text--users-more');				
			}else if(element <= 10 &&  element >= -10){
				$('#main__direction--user-2').text('You are on par with your peers and the global average in cloud data impact.');
				$('#dial__text--users-3').text('No impact');
				$('#dial__text--users-3').addClass('dial__text--users-equal');				
			}else{
				$('#main__direction--user-2').text('You are behind your peers and the global average in cloud data impact.');
				$('#dial__text--users-3').text('Impede the current process');
				$('#dial__text--users-3').addClass('dial__text--users-less');				
			}
		}



	});

}

function retrieveLottieDialAnimation(result) {
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

function displaySelector (res) {
	const selectorValues = res.val['3'].split(',');
	selectorValues.forEach( function(element, index) {
		$(`#select-${element}`).addClass('activate');
	});
}

function displaySliderDirectionText (res) {
	const detscroll1Values = res.val[5].split(',');
	const detscroll2Values = res.val[6].split(',');

	const peersDetScroll1 = [71,73,71,69];
	const peersDetScroll2 = [74,74,70,71,71,71];

	let sliderMeanResult0;
	let sliderMeanResult1;

	// Text for #sliderMean elements

	(function(user,peer){
		user.forEach( function(element, index) {			
			let userSum = 0;
			let peerSum = 0;

			let userAve = 0;
			let peerAve = 0;

			element.forEach( function(element, index) {
				userSum = userSum + Number(element);
			});
			peer[index].forEach(function(element,index){
				peerSum = peerSum + Number(element);
			});				

			userAve = userSum/element.length;
			peerAve = peerSum/element.length;

			if(index === 0){
				sliderMeanResult0 = userAve - peerAve; 
			}else{
				sliderMeanResult1 = userAve - peerAve;
			}
		});
	})([detscroll1Values,detscroll2Values],[peersDetScroll1,peersDetScroll2]);

	if(sliderMeanResult0 > 10){
		$('#sliderMean-0').text('You are ahead of your peers and the global average for security and management practices.');
							
	}else if(sliderMeanResult0 <= 10 &&  sliderMeanResult0 >= -10){
		$('#sliderMean-0').text('You are on par with your peers and the global average for security and management practices.');							
	}else{
		$('#sliderMean-0').text('You are behind your peers and the global average for security and management practices.');
	}	


	if(sliderMeanResult1 > 10){
		$('#sliderMean-1').text('You are ahead of your peers and the global average for data and analytics practices.');
							
	}else if(sliderMeanResult1 <= 10 &&  sliderMeanResult1 >= -10){
		$('#sliderMean-1').text(' You are on par with your peers and the global average for data and analytics practices.');							
	}else{
		$('#sliderMean-1').text('You are behind your peers and the global average for data and analytics practices.');
	}
}

function displaySliderContainerTextAndFill(res){
	const detscroll1Values = res.val[5].split(',');
	const detscroll2Values = res.val[6].split(',');

	const peersDetScroll1 = [71,73,71,69];
	const peersDetScroll2 = [74,74,70,71,71,71];

	detscroll1Values.forEach( function(element, index) {
		// Your peers are slightly more confident with
		// You are on par with your peers and the global average in 
		// You are slightly more confident with xxx than your peers. Congratulations!
		const val = Number(element) - Number(peersDetScroll1[index]);
		
		$(`#detscroll1-${index}`).css('background', `linear-gradient(to right, #00758f ${element}%, transparent ${element}%`);

		if(index === 0){
			if(val > 10){
				$(`#detscroll1__txt-${index}`).text('You are slightly more confident with cyber security prevention than your peers. Congratulations!');
			}else if(val <= 10 &&  val >= -10){
				$(`#detscroll1__txt-${index}`).text('You are on par with your peers and the global average in cyber security prevention.');
			}else{
				$(`#detscroll1__txt-${index}`).text('Your peers are slightly more confident with cyber security prevention.');
			}
		}
		if(index === 1){
			if(val > 10){
				$(`#detscroll1__txt-${index}`).text('You are slightly more confident with cyber threat detection than your peers. Congratulations!');
			}else if(val <= 10 &&  val >= -10){
				$(`#detscroll1__txt-${index}`).text('You are on par with your peers and the global average in cyber threat detection.');
			}else{
				$(`#detscroll1__txt-${index}`).text('Your peers are slightly more confident with cyber threat detection.');
			}			
		}
		if(index === 2){
			if(val > 10){
				$(`#detscroll1__txt-${index}`).text('You are slightly more confident with capacity planning than your peers. Congratulations!');
			}else if(val <= 10 &&  val >= -10){
				$(`#detscroll1__txt-${index}`).text('You are on par with your peers and the global average in capacity planning.');
			}else{
				$(`#detscroll1__txt-${index}`).text('Your peers are slightly more confident with capacity planning.');
			}			
		}
		if(index === 3){
			if(val > 10){
				$(`#detscroll1__txt-${index}`).text('You are slightly more confident with outage prevention than your peers. Congratulations!');
			}else if(val <= 10 &&  val >= -10){
				$(`#detscroll1__txt-${index}`).text('You are on par with your peers and the global average in outage prevention.');
			}else{
				$(`#detscroll1__txt-${index}`).text('Your peers are slightly more confident with outage prevention.');
			}			
		}
	});

	detscroll2Values.forEach( function(element, index) {
		// Your peers are slightly more confident with
		// You are on par with your peers and the global average in 
		// You are slightly more confident with xxx than your peers. Congratulations!
		const val = Number(element) - Number(peersDetScroll2[index]);

		$(`#detscroll2-${index}`).css('background', `linear-gradient(to right, #00758f ${element}%, transparent ${element}%`);

		if(index === 0){
			if(val > 10){
				$(`#detscroll2__txt-${index}`).text('You are slightly more confident with data sophistication than your peers. Congratulations!');
			}else if(val <= 10 &&  val >= -10){
				$(`#detscroll2__txt-${index}`).text('You are on par with your peers and the global average in data sophistication.');
			}else{
				$(`#detscroll2__txt-${index}`).text('Your peers are slightly more confident with data sophistication.');
			}
		}
		if(index === 1){
			if(val > 10){
				$(`#detscroll2__txt-${index}`).text('You are slightly more confident with data sources than your peers. Congratulations!');
			}else if(val <= 10 &&  val >= -10){
				$(`#detscroll2__txt-${index}`).text('You are on par with your peers and the global average in data sources.');
			}else{
				$(`#detscroll2__txt-${index}`).text('Your peers are slightly more confident with data sources.');
			}			
		}
		if(index === 2){
			if(val > 10){
				$(`#detscroll2__txt-${index}`).text('You are slightly more confident with big data skill sets than your peers. Congratulations!');
			}else if(val <= 10 &&  val >= -10){
				$(`#detscroll2__txt-${index}`).text('You are on par with your peers and the global average in big data skill sets.');
			}else{
				$(`#detscroll2__txt-${index}`).text('Your peers are slightly more confident with big data skill sets.');
			}			
		}
		if(index === 3){
			if(val > 10){
				$(`#detscroll2__txt-${index}`).text('You are slightly more confident with machine learning than your peers. Congratulations!');
			}else if(val <= 10 &&  val >= -10){
				$(`#detscroll2__txt-${index}`).text('You are on par with your peers and the global average in machine learning.');
			}else{
				$(`#detscroll2__txt-${index}`).text('Your peers are slightly more confident with machine learning.');
			}			
		}
		if(index === 5){
			if(val > 10){
				$(`#detscroll2__txt-${index}`).text('You are slightly more confident with visualization than your peers. Congratulations!');
			}else if(val <= 10 &&  val >= -10){
				$(`#detscroll2__txt-${index}`).text('You are on par with your peers and the global average in visualization.');
			}else{
				$(`#detscroll2__txt-${index}`).text('Your peers are slightly more confident with visualization.');
			}			
		}
		if(index === 6){
			if(val > 10){
				$(`#detscroll2__txt-${index}`).text('You are slightly more confident with distribution than your peers. Congratulations!');
			}else if(val <= 10 &&  val >= -10){
				$(`#detscroll2__txt-${index}`).text('You are on par with your peers and the global average in distribution.');
			}else{
				$(`#detscroll2__txt-${index}`).text('Your peers are slightly more confident with distribution.');
			}			
		}				
	});	
}