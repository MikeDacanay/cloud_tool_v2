const retrieveGroupText = (dialGroup) => {
	const textGroup = {};


  if(dialGroup.hasClass('dial-group--1')){
  	textGroup.first = 'Not using the cloud';
  	textGroup.second = 'Planning for the cloud';
  	textGroup.third = 'Using cloud services';

    if($('body').width() <= 1440) {
      textGroup.first = 'Not using';
      textGroup.second = 'Planning';
      textGroup.third = 'Using';
    }
  }else if(dialGroup.hasClass('dial-group--3')){
  	textGroup.first = 'Impede current process';
  	textGroup.second = 'No Impact';
  	textGroup.third = 'Improve Data use';

    if($('body').width() <= 1440){
      textGroup.first = 'Impede';
      textGroup.second = 'No Impact';
      textGroup.third = 'Improve';
    }
  }else{
  	textGroup.first = 'Less impact';
  	textGroup.second = 'More Impact';
  }

  return textGroup;
}

const retrieveText = (dialGroup, angle) => {

	const textGroup = retrieveGroupText(dialGroup);

// Dial 1 + 3

	if(dialGroup.hasClass('dial-group--1') || dialGroup.hasClass('dial-group--3')){
		if(angle < 60){
	  	textGroup.result = textGroup.first;
	  }else if (angle > 60 && angle < 120){
	  	textGroup.result = textGroup.second;
	  }else{
	  	textGroup.result = textGroup.third;
	  }
	}else{
		if(angle < 90){
	  	textGroup.result = textGroup.first;
	  }else{
	  	textGroup.result = textGroup.second;
	  }
	}

// Dial 2


  return textGroup.result;
}



export const dialRotator = (dial, val) => {
  const dialHand = dial[0].$div.closest('.dial-group').find( ".dial__hand" );
  const rotator = `translateX(-50%) rotate(${val-90}deg)`;
  dialHand.css('transform',rotator);
};

export const dialContextualize = (dial, angle) => {
	const dialGroup = dial[0].$div.closest('.dial-group');
  const dialContext = dialGroup.find(".dial__context-section--1, .dial__context-section--2");
  const dialContextMain = dialGroup.find(".dial__context-section--3");
  const dialContextMainText = dialGroup.find(".dial__text--4");

  const text = retrieveText(dialGroup,angle);

  dialContext.css('display', 'none');
  dialContextMain.css('display', 'flex');

  dialContextMainText.text(text);

};

export const changeDialText = () => {
  $('.dial__text--1c').text('Planning for the cloud');
  $('.dial__text--2c').text('Not using the cloud');
  $('.dial__text--3c').text('Using cloud services');
  $('.dial__text--2b').text('Impede current process');
  $('.dial__text--3b').text('Improve data use');

  if($('body').width() <= 1440 || $(window).height() <= 750){
    $('.dial__text--1c').text('Planning');
    $('.dial__text--2c').text('Not using');
    $('.dial__text--3c').text('Using services');
    $('.dial__text--2b').text('Impede');
    $('.dial__text--3b').text('Improve');
  }
}

export const progressBtn = (dial) => {  
  
  if($('body').width() < 1040){
    dial = dial[0].$;
  };
  const pageBtnProgress = dial.closest('.page__content').find( ".btn__progress");
  pageBtnProgress.click();
}

export const handResize = () => {
  const baseWidth = $('.dial-group').width();
 
  $('.dial__hand').css('border-width', `0 ${baseWidth*0.017}px ${baseWidth/2}px ${baseWidth*0.017}px`);
 };

export const lineResize = () => {
  const baseWidth = $('.dial-group').width();
  
  $('.dial__line').css('height', `${baseWidth*0.03}px`)
}

