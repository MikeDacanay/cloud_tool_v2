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

export const isTouchDevice = () =>{  
  try {  
    document.createEvent("TouchEvent");  
    return true;  
  } catch (e) {  
    return false;  
  }  
}