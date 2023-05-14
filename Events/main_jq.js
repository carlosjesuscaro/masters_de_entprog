// Showing-hiding a paragraph
// ===========================
/*function showParagraph(){
    $('#p2Hide').toggleClass('hidden');
}*/

// another way with a lambda function
$('#ShowP').click(()=>{
    $('#p2Hide').toggleClass('hidden');
});

// Adding a new paragraph
// ======================
function addP(){
    let p = $('<p>This P was added with JQuery</p>');
    $('#pContainer').append(p);
}
$('#AddP').click(addP)

// Changing the font color based on hover event
// ============================================
function mouseEnter(event){
    $(this).css('color', 'red');
}

function mouseLeave(event){
    $(this).css('color', 'black');
}

$('.mouseEnterLeave').mouseenter(mouseEnter);
$('.mouseEnterLeave').mouseleave(mouseLeave);

// Delay function
// ==============

function redToggle(){
    $("#lightning").toggleClass('red');
    setTimeout(redToggle, 1000);
}

setTimeout(redToggle, 1000);

// Square moving effect
// ====================
$("#scrollContainer").on('mousewheel', (event)=>{
    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
        $("#squareToMove").css('left', ($("#squareToMove").position().left-100)+'px');
    } else {
        $("#squareToMove").css('left', ($("#squareToMove").position().left+100)+'px');
    }
})
