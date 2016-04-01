function Card(cardDom) 
{
    this.cardDom = cardDom;
    this.cardFlipped = false;
}

Card.prototype.flipCard = function() 
{
    if (this.cardFlipped) 
    {
        $(this.cardDom).addClass('card-flipback');
        $(this.cardDom).removeClass('card-flip');
        $(this.cardDom).removeClass('card-flipped');
        var front = $(this.cardDom).find('.front').find('p');
        var back = $(this.cardDom).find('.back').find('p');
        setTimeout(function()
        {
            back.addClass('hidden');
            front.removeClass('hidden');
        }, 500);           
    }
    else 
    {
        $(this.cardDom).addClass('card-flip');
        $(this.cardDom).addClass('card-flipped');
        if ($(this.cardDom).hasClass('card-flipback'))
        $(this.cardDom).removeClass('card-flipback');
        var front = $(this.cardDom).find('.front').find('p');
        var back = $(this.cardDom).find('.back').find('p');
        setTimeout(function()
        {
            back.removeClass('hidden');
            front.addClass('hidden');
        }, 500);
    }
    
    this.cardFlipped = !this.cardFlipped;
};



function CardCollection(str1, str2)
{
    this.str1 = str1;
    this.str2 = str2;
    this.numCards = Math.max(this.str1.length, this.str2.length);
    this.cards = [];
    this.flipCardsLoop = null;
    
    this.init();
}

CardCollection.prototype.init = function()
{
    // Create the cards in the DOM
    for (var i = 0; i < this.numCards; i++)
    {
        var cardDom = $('<div>',
        {
            class: 'card',
            'card-index': i
        });
        var front = $('<div>',
        {
            class: 'front card-content' 
        });
        front.html($('<p>').html(this.str1.charAt(i)));
        var back = $('<div>',
        {
            class: 'back card-content' 
        });
        back.html($('<p>').html(this.str2.charAt(i)));
        cardDom.append(front);
        cardDom.append(back);
        $('.card-collection').append(cardDom);
        this.cards.push(new Card(cardDom));
    }
    
    // establish the animation loop
    var self = this;
    setTimeout(function()
    {
        self.flip(self.cards);
    }, 2000);
    setTimeout(function()
    {
        self.flipCardsLoop = setInterval(function()
        {
            self.flip(self.cards);
        }, 7000);
    }, 1000);
};

CardCollection.prototype.flip = function(cards)
{
    for (var i = 0; i < cards.length; i++) {
        (function() {
            var self = cards[i];
            
            setTimeout(function(){
                self.flipCard();
            }, 100 * i); 
        })();
    }
}

