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
    test = document.forms[0];
    incomplete = false;

    if ($('select[name=stateOrProvince]').val() == "State" || $('select[name=stateOrProvince]').val() == "") {
        $('#field15').addClass("error");
        incomplete = true;
    }

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
    if ($('input[name=phoneNumber]').val() == "Phone Number" || $('input[name=phoneNumber]').val() == "") {
        $('input[name=phoneNumber]').addClass("error");
        incomplete = true;
    }
    if ($('input[name=company]').val() == "Company" || $('input[name=company]').val() == "") {
        $('input[name=company]').addClass("error");
        incomplete = true;
    }
    if ($('input[name=address]').val() == "Address Line 1" || $('input[name=address]').val() == "") {
        $('input[name=address]').addClass("error");
        incomplete = true;
    }
    if ($('input[name=city]').val() == "City" || $('input[name=city]').val() == "") {
        $('input[name=city]').addClass("error");
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
        $(".scrollable").animate({scrollTop: 0}, "fast");
        $('.results-bttn-holder').addClass('after');
        //$('#sign_in_popup').bPopup().close();
        eloquaInfo();
    }
}
