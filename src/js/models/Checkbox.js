export default class Checkbox {
    constructor() {       
    	this.val = 0;
    }

    changeValue(group){            

			const checkboxName = $(group).find('.checkbox__input').attr('name');		
			const checkboxVal = $(`input[name=${checkboxName}]:checked`).val();

    	const checkboxLen = $(group).find('.checkbox__input').length;
			const checkboxChxd = $(group).find('.checkbox__input:checked').length;
			const val =  Math.ceil(16.6666 * (checkboxChxd/checkboxLen));    	

			console.log(val);
    }
}