/*
 *	Original script by: Shafiul Azam
 *	Version 4.0
 *	Modified by: Erin Kerrigan for use w/ Oracle Eloqua



 *
 *	License: Free to copy, distribute, modify, whatever you want to.
 *	Aurthor's Website: http://bdhacker.wordpress.com
 *
 *
 */



//Country codes
var codes_arr = new Array("None Selected","AF", "AL", "DZ", "AS", "AO", "AI", "AQ", "AG", "AR", "AM", "AW", "AC", "AU", "AT", "AZ", "BS", "BH", "BD", "BB", "BY", "BE", "BZ", "BJ", "BM", "BT", "BO", "BA", "BW", "BR", "VG", "BN", "BG", "BF", "Burma", "BI", "KH", "CM", "CA", "CV", "KY", "CF", "TD", "CL", "CN", "CX", "CP", "CC", "CO", "KM", "CD", "CG", "CK", "CR", "CI", "HR","CY", "CZ", "DK", "DJ", "DM", "DO", "EC", "EG", "SV", "GQ", "ER", "EE", "ET", "EU", "FK", "FO", "FJ", "FI", "FR", "GF", "PF", "TF", "GA", "GM", "PS", "GE", "DE", "GH", "GI", "GO", "GR", "GL", "GD", "GP", "GU", "GT", "GGy", "GN", "GW", "GY", "HT", "HM", "VA", "HN", "HK", "HQ", "HU", "IS", "IN", "ID","IQ", "IE", "GB", "IL", "IT", "JM", "JN", "JP", "UM", "JE", "UM", "JO", "Juan de Nova Island", "KZ", "KE", "KI","KR", "KW", "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LI", "LT", "LU", "MO", "MK", "MG", "MW", "MY", "MV", "ML", "MT", "Man, Isle of", "MH", "MQ", "MR", "MU", "YT", "MX", "FM", "Midway Islands", "MD", "MC", "MN", "MS", "MA", "MZ", "NA", "NR", "NP", "NL", "AN", "NC", "NZ", "NI", "NE", "NG", "NU", "NF", "MP", "NO", "OM", "PK", "PW", "PA", "PG", "PY", "PE", "PH", "PN", "PL", "PT", "PR", "QA", "RE", "RO", "RU", "RW", "SH", "KN", "LC", "PM", "VC", "WS", "SM", "ST", "SA", "ST", "SN", "SC", "SL", "SG", "SK", "SI", "SB", "SO", "South Africa", "GS", "ES", "PG", "LK","SR", "SJ", "SZ", "SE", "CH","TW", "TJ", "TZ", "TH", "TD", "TG", "TK", "TO", "TT", "TN", "TR", "TM", "TV", "UG", "UK", "AE", "GB", "UY", "US", "UZ", "VU", "VE", "VN", "VG", "GB", "WF", "WE", "EH", "YE", "YG", "ZM", "ZW");

// Countries
var country_arr = new Array("Select Country","Afghanistan", "Albania", "Algeria", "American Samoa", "Angola", "Anguilla", "Antartica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Ashmore and Cartier Island", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burma", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Clipperton Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo, Democratic Republic of the", "Congo, Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia","Cyprus", "Czeck Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Europa Island", "Falkland Islands (Islas Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "French Southern and Antarctic Lands", "Gabon", "Gambia, The", "Gaza Strip", "Georgia", "Germany", "Ghana", "Gibraltar", "Glorioso Islands", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard Island and McDonald Islands", "Holy See (Vatican City)", "Honduras", "Hong Kong", "Howland Island", "Hungary", "Iceland", "India", "Indonesia","Iraq", "Ireland", "Ireland, Northern", "Israel", "Italy", "Jamaica", "Jan Mayen", "Japan", "Jarvis Island", "Jersey", "Johnston Atoll", "Jordan", "Juan de Nova Island", "Kazakhstan", "Kenya", "Kiribati","Korea, South", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia, Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Man, Isle of", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Midway Islands", "Moldova", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcaim Islands", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romainia", "Russia", "Rwanda", "Saint Helena", "Saint Kitts and Nevis", "Saint Lucia", "Saint Pierre and Miquelon", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Scotland", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and South Sandwich Islands", "Spain", "Spratly Islands", "Sri Lanka","Suriname", "Svalbard", "Swaziland", "Sweden", "Switzerland","Taiwan", "Tajikistan", "Tanzania", "Thailand", "Tobago", "Toga", "Tokelau", "Tonga", "Trinidad", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "USA", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands", "Wales", "Wallis and Futuna", "West Bank", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe");


function populateCountries(countryElementId, stateElementId) {
    // given the id of the <select> tag as function argument, it inserts <option> tags

    var option_str = document.getElementById(countryElementId);
    option_str.length=0;
 //  option_str.options[0] = new Option('Select Country','');
    option_str.selectedIndex = 0;
    for (var i=0; i<country_arr.length; i++) {
        option_str.options[option_str.length] = new Option(country_arr[i],codes_arr[i]);
    }

    option_str.onchange = function() {
        setLegal();

    };

}

function setLegal(){
    var selectedCountryIndex = document.getElementById('field17').selectedIndex;
    switch(selectedCountryIndex) {
        case 122:
            $('.terms').hide();
            $('#terms_korea').show();
            break;
        case 178:
            $('.terms').hide();
            $('#terms_phillipines').show();
            break;
        case 186:
            $('.terms').hide();
            $('#terms_russia').show();
            break;

        default:
            $('.terms').hide();
            $('#terms_main').show();
    }


}

