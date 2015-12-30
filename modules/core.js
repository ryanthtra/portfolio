angular.module('core', [])
    .factory('currentView', currentView)
    .directive('ratActiveNav', ratActiveNav)
    .directive('ratMenuId', ratMenuId);

function currentView()
{
    var activeNavId = '';
    var activeTitleText = '';

    var retObj =
        {
            setCurrentView: function(navId, titleText)
            {
                activeNavId = navId;
                activeTitleText = titleText;
            },
            getActiveNavId: function()
            {
                return activeNavId;
            },
            getTitleText: function()
            {
                return activeTitleText;
            }
        };

    return retObj;
}

function ratActiveNav(currentView)
{
    return function(scope, element, attrs)
    {
        var activeNavId = attrs["ratActiveNav"];
        var activeTitle = attrs["ratActiveTitle"];
        currentView.setCurrentView(activeNavId, activeTitle);
    };
}

function ratMenuId(currentView)
{
    var navElements = [];

    function setActive(element, navId)
    {
        if (currentView.getActiveNavId() == navId)
        {
            element.addClass('active');
        }
        else
        {
            element.removeClass('active');
        }
    }

    return function(scope, element, attrs)
    {
        var menuId = attrs["ratMenuId"];

        navElements.push(
            {
                id: menuId,
                node: element
            });

        var watcherFn = function(watchScope)
        {
            return watchScope.$eval('getActiveNavId()');
        };
        scope.$watch(watcherFn, function(newValue, oldValue)
        {
            for (var i = 0; i < navElements.length; i++)
            {
                var navElement = navElements[i];
                setActive(navElement.node, navElement.id);
            }
        });
    };
}

