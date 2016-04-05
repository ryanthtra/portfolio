function Billboard()
{
    // Flag to check if the backside of the billboard is 
    // currently visible.
    this.isBackShown = false;
}

Billboard.prototype.flip = function($clickedMenuItem)
{	
    // If we're clicking on the same item that's already active
    // then just exit the function.
    if ($clickedMenuItem.hasClass('active'))
        return;
    
    // Set the clicked label to active
    $('.active').removeClass('active');
    $clickedMenuItem.addClass('active'); 
    
    var side = this.isBackShown ? 'front' : 'back';
    var otherside = !this.isBackShown ? 'front' : 'back';
    this.isBackShown = !this.isBackShown;    
    
    // Remove the back class from the previous back class
    var $prevBack = $('.billboard .' + side);
    $prevBack.addClass('hidden');
    $prevBack.removeClass(side);

    // Add the back class to the section that will 
    var label = $clickedMenuItem.attr('label');
    var $newBack = $('#' + label);
    $newBack.addClass(side);
		
    $('.billboard').toggleClass('flip-horiz');
    
    setTimeout(function()
    {
        $('.' + otherside).addClass('hidden');
    }, 280);
	setTimeout(function()
    {
        $newBack.removeClass('hidden');
    }, 230);
	// $('.' + otherside).addClass('hidden');
	// $newBack.removeClass('hidden');
};