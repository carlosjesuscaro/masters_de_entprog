$('#button').click(()=>{
    $('#p1').toggleClass('p2b');
    let name = $('#button').text()
    if (name == "Show me") {
        $('#button').html("Hide me")
    } else {
        $('#button').html('Show me')
    }
});