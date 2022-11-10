const mouseStalker = "#stkr";
const mouseTarget = ".box";
const mouseStalkerArea = window;

const stkrSize = parseInt($(mouseStalker).css("width").replace(/px/, ""));
const stkrPosX = parseInt($(mouseStalker).css("left").replace(/px/, ""));
const stkrPosY = parseInt($(mouseStalker).css("top").replace(/px/, ""));
const cssPosAjust = stkrPosX + (stkrSize / 2);
let scale = 1;

$(mouseStalkerArea).hover(function(){
    $(mouseStalkerArea).mousemove(function(e){
    let x = e.clientX - cssPosAjust;
    let y = e.clientY - cssPosAjust;
    $(mouseStalker).css({
        "transform": "translate(" + x + "px," + y + "px) scale(" + scale + ")",
    });
});
});

$(mouseTarget).hover(function(e){
    scale = 4;
    let x = e.clientX - cssPosAjust;
    let y = e.clientY - cssPosAjust;
    $(mouseStalker).css({
    "transform": "translate(" + x + "px," + y + "px) scale(" + scale + ")",
    });
}, function(){
    scale = 1;
});

function MouseOverImg(){
    document.Image1.src = ImgOver.src;
}