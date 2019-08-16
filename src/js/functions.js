import largeDetailHigh from './large_high-score.json';
import largeDetailMid from './large_mid-score.json';
import largeDetailLow from './large_low-score.json';

export const openVideoOverlay = (ob) => {
    var videoID=ob;
  //  ob.data ? videoID = ob.data.video : videoID = $(ob.currentTarget).attr("vid");
    var cwidth = 639;
    var cheight = 404;
    if(window.innerWidth<768){
       cwidth=300;
       cheight=168;

    }

    if(window.innerWidth>766){
        $("#voverlay-container").css({
            'display': 'block',
            'width': cwidth + 'px',
            // 'height': 'auto',
            'height': (cheight+75) + 'px',
        });
        $("#voverlay-content").css({
            'display': 'block',
            'width': cwidth + 'px',
            'height': cheight + 'px',
        });
    //2017 player
        $("#voverlay-content").html(
                '<video data-account="1460825906" data-player="SyzXcjbW8f" data-embed="default" data-video-id="' + videoID + '" class="video-js" controls style="width:100%;height: 100%;position:relative;top: 0px; bottom: 0px; right: 0px; left: 0px;"></video>'+
                '<script src="//players.brightcove.net/1460825906/SyzXcjbW8f_default/index.min.js"></script>'
        );


        $("#voverlay-container").bPopup({
            follow: [true, true],
            position: ['auto', 'auto'],
            appendTo:'html'
        });
    }else{
        window.open(
          'https://video.oracle.com/detail/video/'+videoID // <- This is what makes it open in a new window.
        );
    }
}

export const iterateObjSet = (obj, callback) =>{

    const array = Array.prototype.slice.call(obj);
    array.forEach( function(element, index) {
        callback(element, index);
    });
};

export const covertObjtoArr = (obj) =>{

    const array = Array.prototype.slice.call(obj);

    return array;
};

export const returnNumOnly = (str, n) =>{
    return Number(str.slice(0, `-${n}`));
};

export const validateFields = (ob) => {
    console.log('validate');
    test = document.forms[0];
    incomplete = false;


    if ($('select[name=country]').val() == "Country" || $('select[name=country]').val() == "" || $('select[name=country]').val() == "None Selected") {
        $('#field17').addClass("error");
        incomplete = true;
    }

    if ($('input[name=firstName]').val() == "First Name" || $('input[name=firstName]').val() == "") {
        $('input[name=firstName]').addClass("error");
        incomplete = true;
    }
    if ($('input[name=lastName]').val() == "Last Name" || $('input[name=lastName]').val() == "") {
        $('input[name=lastName]').addClass("error");
        incomplete = true;
    }
    if ($('input[name=emailAddress]').val() == "E-mail Address" || $('input[name=emailAddress]').val() == "") {
        $('input[name=emailAddress]').addClass("error");
        incomplete = true;
    }

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($('input[name=emailAddress]').val())) {
    }

    else {
        $('input[name=emailAddress]').addClass("error");
        incomplete = true;
    }

    var selectedCountryIndex = document.getElementById('field17').selectedIndex;
    switch (selectedCountryIndex) {
        case 122:
            if ($('.korea:checked').length < $('.korea').length) {
                $('.korea').addClass('error');
                $('.korea:checked').removeClass('error');
                incomplete = true;
            }
            break;
        case 186:
            if ($('.russia:checked').length < $('.russia').length) {
                $('.russia').addClass('error');
                $('.russia:checked').removeClass('error');
                incomplete = true;
            }
            break;
        default:
        //everyone else
    }
    if (incomplete == true) {
        $("#end_alert").css("display", "block");
        return;
    }
    else {
        var first = $('input[name=firstName]').val();
        eloquaInfo();
    }
}

export const populateCountries = (ob) => {
    //Country codes
    var codes_arr = new Array("None Selected","AF", "AL", "DZ", "AS", "AO", "AI", "AQ", "AG", "AR", "AM", "AW", "AC", "AU", "AT", "AZ", "BS", "BH", "BD", "BB", "BY", "BE", "BZ", "BJ", "BM", "BT", "BO", "BA", "BW", "BR", "VG", "BN", "BG", "BF", "Burma", "BI", "KH", "CM", "CA", "CV", "KY", "CF", "TD", "CL", "CN", "CX", "CP", "CC", "CO", "KM", "CD", "CG", "CK", "CR", "CI", "HR","CY", "CZ", "DK", "DJ", "DM", "DO", "EC", "EG", "SV", "GQ", "ER", "EE", "ET", "EU", "FK", "FO", "FJ", "FI", "FR", "GF", "PF", "TF", "GA", "GM", "PS", "GE", "DE", "GH", "GI", "GO", "GR", "GL", "GD", "GP", "GU", "GT", "GGy", "GN", "GW", "GY", "HT", "HM", "VA", "HN", "HK", "HQ", "HU", "IS", "IN", "ID","IQ", "IE", "GB", "IL", "IT", "JM", "JN", "JP", "UM", "JE", "UM", "JO", "Juan de Nova Island", "KZ", "KE", "KI","KR", "KW", "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LI", "LT", "LU", "MO", "MK", "MG", "MW", "MY", "MV", "ML", "MT", "Man, Isle of", "MH", "MQ", "MR", "MU", "YT", "MX", "FM", "Midway Islands", "MD", "MC", "MN", "MS", "MA", "MZ", "NA", "NR", "NP", "NL", "AN", "NC", "NZ", "NI", "NE", "NG", "NU", "NF", "MP", "NO", "OM", "PK", "PW", "PA", "PG", "PY", "PE", "PH", "PN", "PL", "PT", "PR", "QA", "RE", "RO", "RU", "RW", "SH", "KN", "LC", "PM", "VC", "WS", "SM", "ST", "SA", "ST", "SN", "SC", "SL", "SG", "SK", "SI", "SB", "SO", "South Africa", "GS", "ES", "PG", "LK","SR", "SJ", "SZ", "SE", "CH","TW", "TJ", "TZ", "TH", "TD", "TG", "TK", "TO", "TT", "TN", "TR", "TM", "TV", "UG", "UK", "AE", "GB", "UY", "US", "UZ", "VU", "VE", "VN", "VG", "GB", "WF", "WE", "EH", "YE", "YG", "ZM", "ZW");

// Countries
    var country_arr = new Array("Select Country","Afghanistan", "Albania", "Algeria", "American Samoa", "Angola", "Anguilla", "Antartica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Ashmore and Cartier Island", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burma", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Clipperton Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo, Democratic Republic of the", "Congo, Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia","Cyprus", "Czeck Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Europa Island", "Falkland Islands (Islas Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "French Southern and Antarctic Lands", "Gabon", "Gambia, The", "Gaza Strip", "Georgia", "Germany", "Ghana", "Gibraltar", "Glorioso Islands", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard Island and McDonald Islands", "Holy See (Vatican City)", "Honduras", "Hong Kong", "Howland Island", "Hungary", "Iceland", "India", "Indonesia","Iraq", "Ireland", "Ireland, Northern", "Israel", "Italy", "Jamaica", "Jan Mayen", "Japan", "Jarvis Island", "Jersey", "Johnston Atoll", "Jordan", "Juan de Nova Island", "Kazakhstan", "Kenya", "Kiribati","Korea, South", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia, Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Man, Isle of", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Midway Islands", "Moldova", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcaim Islands", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romainia", "Russia", "Rwanda", "Saint Helena", "Saint Kitts and Nevis", "Saint Lucia", "Saint Pierre and Miquelon", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Scotland", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and South Sandwich Islands", "Spain", "Spratly Islands", "Sri Lanka","Suriname", "Svalbard", "Swaziland", "Sweden", "Switzerland","Taiwan", "Tajikistan", "Tanzania", "Thailand", "Tobago", "Toga", "Tokelau", "Tonga", "Trinidad", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "USA", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands", "Wales", "Wallis and Futuna", "West Bank", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe");

    var option_str = document.getElementById(ob);
    option_str.length=0;
    //  option_str.options[0] = new Option('Select Country','');
    option_str.selectedIndex = 0;
    for (var i=0; i<country_arr.length; i++) {
        option_str.options[option_str.length] = new Option(country_arr[i],codes_arr[i]);
    }

    option_str.onchange = function() {
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


    };
}
