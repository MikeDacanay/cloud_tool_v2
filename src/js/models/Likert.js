export default class Likert {
    constructor() {       
    	this.val = 0;
    }

    changeValue(v){            
    	v = 17 * (v/100);
    	this.val = v;    	
    }
}



