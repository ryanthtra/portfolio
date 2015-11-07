document.addEventListener("DOMContentLoaded", function(event)
{
    $('#header-list').on('click', 'button', function()
    {
        moveMap(this);
    });

    $('.project-pic').hover(blinkFrame);
});

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
            $('#map').css(
                {
                    'transform': 'translate(0, 100%)',
                    'transition-duration': '1.5s'
                }
            );
            break;

        case 'Contact Me':
            $('#map').css(
                {
                    'transform': 'translate(0, -100%)',
                    'transition-duration': '1.5s'
                }
            );
            break;

        case 'Skills':
            $('#map').css(
                {
                    'transform': 'translate(100%, 0)',
                    'transition-duration': '1.5s'
                }
            );
            break;

        case 'Experience':
            $('#map').css(
                {
                    'transform': 'translate(-100%, 0)',
                    'transition-duration': '1.5s'
                }
            );
            break;

        case 'Projects':
            $('#map').css(
                {
                    'transform': 'translate(0, 0)',
                    'transition-duration': '1.5s'
                }
            );
            break;
    }
}

