function MapController()
{
    this.current_room           = null;
    this.map                    = $('#map');
    this.button_up              = $('#button-up');
    this.button_down            = $('#button-down');
    this.button_left            = $('#button-left');
    this.button_right           = $('#button-right');

    this.init();
}

MapController.prototype.init = function()
{
    var map_controller = this;
    $('#directional-buttons').on('click', 'button', function()
    {
        map_controller.buttonClicked($(this));
    });

    this.changeRoom(new Room_B02(this));
};

/**
 *
 * @param new_room
 */
MapController.prototype.changeRoom = function(new_room)
{
    this.current_room = new_room;
    this.current_room.init();
};

MapController.prototype.disableButton = function($button)
{
    $button.attr('class', 'button-hidden');
};

MapController.prototype.enableAllButtons = function()
{
    this.button_up.attr('class', 'button-visible');
    this.button_down.attr('class', 'button-visible');
    this.button_left.attr('class', 'button-visible');
    this.button_right.attr('class', 'button-visible');
};

MapController.prototype.setButtonLabel = function(button, label)
{
    button.text(label);
};

MapController.prototype.buttonClicked = function($button)
{
    this.current_room.execute($button);
};


MapController.prototype.setTranslateClass = function(class_name)
{
    this.map.attr('class', class_name);
};