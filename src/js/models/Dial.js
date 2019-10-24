export default class Dial {
    constructor() {       
    	this.val = 0;
    }

    changeValue(v){        
    	this.val = Math.round(16*(v/180));
    }
}
