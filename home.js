document.addEventListener("DOMContentLoaded", function(event)
{
    $('#header-list').on('click', 'button', function()
    {
        moveMap(this);
    });

    $('.project-pic').hover(blinkFrame);

    map_controller = new MapController();
});

var map_controller = null;

function blinkFrame()
{
    var frame = $(this).find('.project-frame-blink');

    frame.toggleClass("show-blink");
}

function moveMap(button)
{
    switch($(button).text())
    {
        case 'About Me':
            $('#map').attr('class', 'translate-A-02');
            break;

        case 'Contact Me':
            $('#map').attr('class', 'translate-C-02');
            break;

        case 'Skills':
            $('#map').attr('class', 'translate-B-01');
            break;

        case 'Experience':
            $('#map').attr('class', 'translate-B-03');
            break;

        case 'Projects':
            $('#map').attr('class', 'translate-B-02');
            break;
    }
}

