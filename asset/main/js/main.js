let audDOM = document.getElementById('audsrc');
let plyBtn = $('#pl');
let pseBtn = $('#ps');

$(document).ready(function () {
    pseBtn.hide();

    let audVzr = new Wave();
    let player = $('#player');
    let cvsSiz = Math.max(player.height(), player.width());
    let cvsDOM = document.getElementById('wavevw');
    cvsDOM.height = cvsSiz;
    cvsDOM.width = cvsSiz;
    audVzr.fromElement('audsrc', 'wavevw', {type: 'flower', colors:['#ababab']});
})

function play() {
    audDOM.load();
    audDOM.play();
    plyBtn.hide();
    pseBtn.show();
}

function pause() {
    audDOM.pause();
    pseBtn.hide();
    plyBtn.show();
}

function backward() {
    pause();
    audDOM.currentTime = 0;
}

function forward() {
    pause();
    audDOM.currentTime = audDOM.duration;
}