export default class CompareResults {
    constructor() {       
    	this.val = {
				'1': '',
				'2': '',    		
				'3': '',
				'4': '',
				'5': '',
				'6': '',
    	};
    }

    allocateValues(user, peer){        
    	this.val['1'] = (Number(user.dial1)*5 - peer[1]);
    	this.val['2'] = (Number(user.dial2)*5 - peer[2]);
    	this.val['3'] = user.selector1;    	
    	this.val['4'] = (Number(user.dial3)*5 - peer[4]);
    	this.val['5'] = user.slider1;
    	this.val['6'] = user.slider2;
    }

}
