// "Main" function, executed when the page finishes loading
document.addEventListener("DOMContentLoaded", function(event)
{
    // Flag to check if the backside of the billboard is 
    // currently visible.
    var isBackShown = false;
    
    $('.navbar-nav').on('click', 'a', function() {
        var $li = $(this).parent();
        
        // If we're clicking on the same item that's already active
        // then just exit the function.
        if ($li.hasClass('active'))
            return;
        
        // Set the clicked label to active
        $('.active').removeClass('active');
        $li.addClass('active'); 
        
        var side = isBackShown ? 'front' : 'back';
        isBackShown = !isBackShown;
        
        // Remove the back class from the previous back class
        var $prevBack = $('.billboard .' + side);
        $prevBack.addClass('hidden');
        $prevBack.removeClass(side);

        // Add the back class to the section that will 
        var label = $li.attr('label');
        var $newBack = $('#' + label);
        $newBack.removeClass('hidden');
        $newBack.addClass(side);
       
       $('.billboard').toggleClass('flip-horiz');
    });
});