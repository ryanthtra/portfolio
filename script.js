// "Main" function, executed when the page finishes loading
document.addEventListener("DOMContentLoaded", function(event)
{
    var billboard = new Billboard();
    var cardCollection = null;
    
    if (typeof(Storage) !== "undefined")
    {
        // Check if variable exists.
        if (sessionStorage.initialSession)
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
    
    $('.navbar-nav').on('click', 'a', function() {
        billboard.flip($(this).parent());
    });
    
    $('.billboard>#splash').on('click', '.card-collection', function(){
      cardCollection.flip(cardCollection.cards);
    });
    
    $('.billboard>#splash').on('click', '#button-proceed', function()
    {
        clearInterval(cardCollection.flipCardsLoop);
        $('.navbar').show();
        billboard.flip($('.navbar-nav>li[label="introduction"]')); 
    });
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
            class: 'col-xs-offset-8 col-sm-offset-10 col-md-offset-11'
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
        $('.navbar-nav>li[label="introduction"]').addClass('active');
    }
}