function Room(map_controller)
{
    this.map_controller = map_controller;
}
Room.prototype.init = function() {};
Room.prototype.execute = function($button) {};


/**
 * Room_A02 Class
 */
function Room_A02(map_controller)
{
    Room.call(this, map_controller);
}
Room_A02.prototype = new Room();
Room_A02.prototype.constructor = Room_A02;
Room_A02.prototype.init = function()
{
    this.map_controller.setTranslateClass('translate-A-02');
    this.map_controller.enableAllButtons();
    this.map_controller.disableButton(this.map_controller.button_up);
    this.map_controller.setButtonLabel(this.map_controller.button_down, 'Projects');
    this.map_controller.disableButton(this.map_controller.button_left);
    this.map_controller.disableButton(this.map_controller.button_right);
};
Room_A02.prototype.execute = function($button)
{
    var button_id = $button.attr('id');
    switch (button_id)
    {
        case 'button-down':
            this.map_controller.changeRoom(new Room_B02(this.map_controller));
            break;
    }
};

/**
 * Room_B01 Class
 */
function Room_B01(map_controller)
{
    Room.call(this, map_controller);
}
Room_B01.prototype = new Room();
Room_B01.prototype.constructor = Room_B01;
Room_B01.prototype.init = function()
{
    this.map_controller.setTranslateClass('translate-B-01');
    this.map_controller.enableAllButtons();
    this.map_controller.disableButton(this.map_controller.button_up);
    this.map_controller.disableButton(this.map_controller.button_down);
    this.map_controller.disableButton(this.map_controller.button_left);
    this.map_controller.setButtonLabel(this.map_controller.button_right, 'Projects');
};
Room_B01.prototype.execute = function($button)
{
    var button_id = $button.attr('id');
    switch (button_id)
    {
        //case 'button-up':
        //    this.map_controller.changeRoom(new Room_A01(this.map_controller));
        //    break;
        //case 'button-down':
        //    this.map_controller.changeRoom(new Room_C02(this.map_controller));
        //    break;
        //case 'button-left':
        //    this.map_controller.changeRoom(new Room_B01(this.map_controller));
        //    break;
        case 'button-right':
            this.map_controller.changeRoom(new Room_B02(this.map_controller));
            break;
    }
};

/**
 * Room_B02 Class
 */
function Room_B02(map_controller)
{
    Room.call(this, map_controller);
}
Room_B02.prototype = new Room();
Room_B02.prototype.constructor = Room_B02;
Room_B02.prototype.init = function()
{
    this.map_controller.setTranslateClass('translate-B-02');
    this.map_controller.enableAllButtons();
    this.map_controller.setButtonLabel(this.map_controller.button_up, 'About Me');
    this.map_controller.setButtonLabel(this.map_controller.button_down, 'Contact Me');
    this.map_controller.setButtonLabel(this.map_controller.button_left, 'Skills');
    this.map_controller.setButtonLabel(this.map_controller.button_right, 'Experience');
};
Room_B02.prototype.execute = function($button)
{
    var button_id = $button.attr('id');
    switch (button_id)
    {
        case 'button-up':
            this.map_controller.changeRoom(new Room_A02(this.map_controller));
            break;
        case 'button-down':
            this.map_controller.changeRoom(new Room_C02(this.map_controller));
            break;
        case 'button-left':
            this.map_controller.changeRoom(new Room_B01(this.map_controller));
            break;
        case 'button-right':
            this.map_controller.changeRoom(new Room_B03(this.map_controller));
            break;
    }
};

/**
 * Room_B03 Class
 */
function Room_B03(map_controller)
{
    Room.call(this, map_controller);
}
Room_B03.prototype = new Room();
Room_B03.prototype.constructor = Room_B03;
Room_B03.prototype.init = function()
{
    this.map_controller.setTranslateClass('translate-B-03');
    this.map_controller.enableAllButtons();
    this.map_controller.disableButton(this.map_controller.button_up);
    this.map_controller.disableButton(this.map_controller.button_down);
    this.map_controller.setButtonLabel(this.map_controller.button_left, 'Projects');
    this.map_controller.disableButton(this.map_controller.button_right);
};
Room_B03.prototype.execute = function($button)
{
    var button_id = $button.attr('id');
    switch (button_id)
    {
        //case 'button-up':
        //    this.map_controller.changeRoom(new Room_A01(this.map_controller));
        //    break;
        //case 'button-down':
        //    this.map_controller.changeRoom(new Room_C02(this.map_controller));
        //    break;
        case 'button-left':
            this.map_controller.changeRoom(new Room_B02(this.map_controller));
            break;
        //case 'button-right':
        //    this.map_controller.changeRoom(new Room_B02(this.map_controller));
        //    break;
    }
};

/**
 * Room_C02 Class
 */
function Room_C02(map_controller)
{
    Room.call(this, map_controller);
}
Room_C02.prototype = new Room();
Room_C02.prototype.constructor = Room_C02;
Room_C02.prototype.init = function()
{
    this.map_controller.setTranslateClass('translate-C-02');
    this.map_controller.enableAllButtons();
    this.map_controller.setButtonLabel(this.map_controller.button_up, 'Projects');
    this.map_controller.disableButton(this.map_controller.button_down);
    this.map_controller.disableButton(this.map_controller.button_left);
    this.map_controller.disableButton(this.map_controller.button_right);
};
Room_C02.prototype.execute = function($button)
{
    var button_id = $button.attr('id');
    switch (button_id)
    {
        case 'button-up':
            this.map_controller.changeRoom(new Room_B02(this.map_controller));
            break;
        //case 'button-down':
        //    this.map_controller.changeRoom(new Room_C02(this.map_controller));
        //    break;
        //case 'button-left':
        //    this.map_controller.changeRoom(new Room_B02(this.map_controller));
        //    break;
        //case 'button-right':
        //    this.map_controller.changeRoom(new Room_B02(this.map_controller));
        //    break;
    }
};