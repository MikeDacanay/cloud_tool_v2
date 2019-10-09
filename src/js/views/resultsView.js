import {e} from './base';

export const displayValues = (user, peers) =>{
	e.userValue.text(`${user}`);
	e.peersValue.text(`${peers}`);

	setTimeout(function(){
		$('.cloud__text').css('opacity', 1);		
		$('.results__logo').css('opacity',1);
		$('.results__copy').css('opacity',1);
		$('#scroll_down').css('opacity',1);
	},2200);
}

export const displayResultsCopy = (user) => {	

	if(user < 40){
		e.results__copy.append(
			"<span class='block'><b>Catch up!</b> Your score indicates that you are behind the curve with Marketing Maturity. But don’t worry, we have curated plenty of resources below to help you get up to speed. We are here to help you succeed with more accurate segmentation, automation and ultimately more leads.</span>" 			
		)
	}else if(user >= 40 && user <= 60){
		e.results__copy.append(
			"<span class='block'><b>On par!</b> Your score indicates that you are on par with Marketing Maturity. Your company has an opportunity to lower costs, greater topline growth, and easier access to innovation and is well positioned to benefit and evolve with emerging technologies well into the future.</span>"
		)		
	}else if(user > 60){
		e.results__copy.append( 						
			"<span class='block'><b>Congratulations!</b> Your score indicates that you are ahead of the curve with Marketing Maturity. Your company understands the promise of lower costs, greater topline growth, and easier access to innovation and is well positioned to benefit and evolve with emerging technologies well into the future.</span>" 			
	)};
};
