let audVzr = new Wave();
let audDat = [{'title': 'Un Monde Sans Danger (Instrumental)', 'source': 'asset/audio/un-monde-sans-danger.mp3'}];
let audIdx = 0;
let cvsSiz = Math.max($(window).height(), $(window).width());
let cvsDOM = document.getElementById('wavevw');
let audDOM = document.getElementById('audsrc');

cvsDOM.height = cvsSiz;
cvsDOM.width = cvsSiz;
audVzr.fromElement('audsrc', 'wavevw', {type: 'flower', colors:['#000000']});
audLod(audIdx);
audUpt();

function sec2Timestamp(sec) {
    let hr = Math.floor(sec / 3600);
    let mn = Math.floor((sec - (hr * 3600)) / 60);
    let sc = Math.floor(sec - (hr * 3600) - (mn * 60));

    hr = (hr < 10) ? '0' + hr : hr;
    mn = (mn < 10) ? '0' + mn : mn;
    sc = (sc < 10) ? '0' + sc : sc;

    return hr + ':' + mn + ':' + sc;
}

function audTrg(){
    $('#pl').toggleClass('d-none');
    $('#ps').toggleClass('d-none');
}

function audUpt(){
    $('#audtime').html(sec2Timestamp(audDOM.currentTime));
}

function audLod(idx){
    audDOM.src = audDat[idx].source;
    $('#audtitle').html(audDat[idx].title);
}

function btnPly() {
    audDOM.play();
}

function btnPse() {
    audDOM.pause();
}

function btnBwd() {
    btnPse();
    if (audDOM.currentTime !== 0){
        audDOM.currentTime = 0;
    }else{
        audIdx = (audIdx > 0) ? audIdx - 1 : audIdx;
        audLod(audIdx);
    }
    audUpt();
}

function btnFwd() {
    btnPse();

    btnPse();
    if (audDOM.currentTime !== audDOM.duration){
        audDOM.currentTime = audDOM.duration;
    }else{
        audIdx = (audIdx < audDat.length) ? audIdx + 1 : audIdx;
        audLod(audIdx);
    }
    audUpt();
}