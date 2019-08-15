import {e} from './base';

const checkbox = document.getElementById('navi-toggle')

export const hidePageNumber = () => {
    checkbox.addEventListener('change', (event) => {
      if (event.target.checked) {
        e.footerNumber.css('display', 'none')
      } else {
        e.footerNumber.css('display', 'block')
      }
    })
}
