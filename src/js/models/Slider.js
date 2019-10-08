export default class SliderGroup {
    constructor(group) {
        this.group = group;
        this.sliderArray = this.retrieveSliders();
        this.progression = 0;
        this.arrayVal = [];
        this.val = 0;
    }

    pushToVal(x){
        this.arrayVal.push(x);        
    }

    calculateVal(){    
        let avg;
        let sum = 0;

        this.arrayVal.forEach( function(element, index) {
            sum+=element;
        });

        avg = Math.round(16.67*((sum/this.arrayVal.length)/100));

        this.val = avg;
    }

    retrieveSliders(){
        const sliderList= this.group.find('.scroller__content');

        const sliderArray = [];
        for(let i = 0; i < sliderList.length; i++){
            sliderArray.push(sliderList[i]);
        }  
        return sliderArray;
    }

}
