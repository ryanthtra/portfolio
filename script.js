// Set the parent of the .big-card-right-up to a height of 100% and width of 100%
    $('.card-big-left-up').parent().css(
        {
            'height': '100%',
            'width': '100%',
            'margin': '0'
        }
    );
    
// "Main" function, executed when the page finishes loading
document.addEventListener("DOMContentLoaded", function(event)
{
    var billboard = new Billboard();
    var cardCollection = null;
    
    if (typeof(Storage) !== "undefined")
    {
        // Check if variable exists.
        if (sessionStorage.initialSession !== undefined)
        {
            showSplash(false, cardCollection);  
        }
        else
        {
            sessionStorage.setItem('initialSession', 'true');
            cardCollection = new CardCollection("RYAN TRANSFIGURACION", "FULL-STACK DEVELOPER");
            showSplash(true, cardCollection);
        }
    }
    else
    {
        // No storage support
    }
    
    // cardCollection = new CardCollection("RYAN TRANSFIGURACION", "FULL-STACK DEVELOPER");
    // showSplash(true, cardCollection);
    
    // Functionality when navbar element is clicked.
    $('.navbar-nav').on('click', 'a', function() {
        billboard.flip($(this).parent());
    });
    
    // Functionality when the splash card collection is clicked.
    $('.billboard>#splash').on('click', '.card-collection', function(){
      cardCollection.flip(cardCollection.cards);
    });
    
    // Functionality when the button on the splash div is clicked.
    $('.billboard>#splash').on('click', '#button-proceed', function()
    {
        clearInterval(cardCollection.flipCardsLoop);
        $('.navbar').show();
        billboard.flip($('.navbar-nav>li[label="introduction"]')); 
    });
    
    // Functionality when a card icon is clicked.
    $('.card-icon-row, .card-icon-row-2').on('click', '.card-icon', function()
    {        
        var label = $(this).attr('content-id');
        var section = $(this).parent().parent().parent();
        section.find('.card-icon-selected').removeClass('card-icon-selected');
        $(this).addClass('card-icon-selected');
        loadCardContent(section, label);
    });
    
    // Trigger certain card icons to be clicked.
    $($('#introduction .card-icon')[0]).trigger('click');
    $($('#skills .card-icon')[0]).trigger('click');
    $($('#projects .card-icon')[0]).trigger('click');
    $($('#experience .card-icon')[3]).trigger('click');
});

function showSplash(show, cardCollection)
{
    if (show)
    {
        // Hide the navigation menu
        $('.navbar').hide();
        
        // Create the 'proceed' button, to appear
        // below the card collection.
        var row = $('<div>', { class: 'row' });
        var buttonDiv = $('<div>',
        {
            class: 'col-xs-offset-8 col-sm-offset-9 col-md-offset-10'
        });
        var buttonProceed = $('<button>',
        {
            type: 'button',
            id: 'button-proceed',
            class: 'btn btn-default' 
        }).html("Proceed");
        buttonDiv.append(buttonProceed);
        row.append(buttonDiv);            
        
        // Delay the appearance of the Proceed button until after
        // the first flip of the card collection. 
        setTimeout(function()
        {
            $('.billboard>#splash').append(row);               
        }, 6000);
        
        sessionStorage.setItem('initialSession', 'false');
    }
    // Show the intro instead.
    else
    {
        $('.billboard>#splash').hide();
        $('.billboard>#introduction').removeClass('hidden');
        $('.billboard>#introduction').addClass('front');
        $('.navbar-nav>li[label="introduction"]').addClass('active');
    }
}