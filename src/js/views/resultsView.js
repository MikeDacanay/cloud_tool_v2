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

export const displayResultsCopy = (user, peers) => {	

	if(user === peers){
		e.results__copy.append(
			"<span class='block'>Your score indicates that you are <b>on par with your peers</b> with cloud confidence and cloud adoption.</span><span class='block'>&nbsp;</span><span class='block'>To remain competitive, your company should actively pursue the promise of lower costs, greater topline growth, and easier access to innovation that comes with cloud adoption.</span>" 			
		)
	}else if(user > peers){
		e.results__copy.append(
			"<span class='block'><b>Congratulations!</b> Your score indicates that you are ahead of your peers with cloud confidence and cloud adoption.</span><span class='block'>&nbsp;</span><span class='block'>Your company understands the promise of lower costs, greater topline growth, and easier access to innovation and is well positioned to benefit and evolve with emerging technologies well into the future.</span>"
		)		
	}else if(user < peers){
		e.results__copy.append( 						
			"<span class='block'>&nbsp;</span><span class='block'>Your score indicates that you are <b>behind your peers</b> with cloud-confidence and cloud adoption.</span><span class='block'>&nbsp;</span><span class='block'>To remain competitive, your company should actively pursue the promise of lower costs, greater topline growth, and easier access to innovation that comes with cloud adoption.</span>" 			
	)};
};
