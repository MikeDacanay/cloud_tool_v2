export const changeGrowTxt = (pgVal) => {
	pgVal = Number(pgVal);
	console.log(pgVal);
	if(pgVal === 0){
		$('#grow--text').text('Tap on the circle in the center of your screen to get advance to Question 1. Get help answering a question, or navigating this tool by coming here anytime. Still need help? Contact Customer Service at 1 (800) 392-2999 or Technical Support at 1 (800) 223-1711.');
	}
	if(pgVal === 1){		
		$('#grow--text').text('Select a position on the dial to advance to the next question. Get help answering a question, or navigating this tool by coming here anytime. Still need help? Contact Customer Service at 1 (800) 392-2999 or Technical Support at 1 (800) 223-1711.');
	}
	if(pgVal === 2){		
		$('#grow--text').text('Select a position on the dial to advance to the next question. Get help answering a question, or navigating this tool by coming here anytime. Still need help? Contact Customer Service at 1 (800) 392-2999 or Technical Support at 1 (800) 223-1711.');	
	}
	if(pgVal === 3){		
		$('#grow--text').text('Select 3 boxes from the list to advance to the next question. Get help answering a question, or navigating this tool by coming here anytime. Still need help? Contact Customer Service at 1 (800) 392-2999 or Technical Support at 1 (800) 223-1711.');
	}
	if(pgVal === 4){		
		$('#grow--text').text('Select a position on the dial to advance to the next question. Get help answering a question, or navigating this tool by coming here anytime. Still need help? Contact Customer Service at 1 (800) 392-2999 or Technical Support at 1 (800) 223-1711.');	
	}
	if(pgVal === 5){		
		$('#grow--text').text('Select a position on each slider to advance to the next question. Get help answering a question, or navigating this tool by coming here anytime. Still need help? Contact Customer Service at 1 (800) 392-2999 or Technical Support at 1 (800) 223-1711.');
	}
	if(pgVal === 6){		
		$('#grow--text').text('Select a position on each slider to advance to the next question. Get help answering a question, or navigating this tool by coming here anytime. Still need help? Contact Customer Service at 1 (800) 392-2999 or Technical Support at 1 (800) 223-1711.');
	}
}
