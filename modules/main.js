angular.module('main', ['ngRoute', 'core', 'pages'])
    .controller('portfolioCtrl', PortfolioCtrl)
    .controller('homeCtrl', HomeCtrl)
    .config(function($routeProvider)
    {
        $routeProvider.when('/about',
            {
                templateUrl: 'views/about.html',
                controller: 'aboutCtrl'
            });
        $routeProvider.when('/skills',
            {
                templateUrl: 'views/skills.html',
                controller: 'skillsCtrl'
            });
        $routeProvider.when('/experience',
            {
                templateUrl: 'views/experience.html',
                controller: 'experienceCtrl'
            });
        $routeProvider.when('/projects',
            {
                templateUrl: 'views/projects.html',
                controller: 'projectsCtrl'
            });
        $routeProvider.when('/contactme',
            {
                templateUrl: 'views/contactme.html',
                controller: 'contactMeCtrl'
            });
        $routeProvider.otherwise(
            {
                templateUrl: 'views/home.html',
                controller: 'homeCtrl'
            });
    });

function PortfolioCtrl($scope, currentView)
{
    $scope.isActive = isActive;
    $scope.getTitleText = getTitleText;
    $scope.getActiveNavId = getActiveNavId;

    function isActive(navId)
    {
        return currentView.getActiveNavId() == navId;
    }
    function getTitleText()
    {
        return currentView.getTitleText();
    }
    function getActiveNavId()
    {
        return currentView.getActiveNavId();
    }
}

function HomeCtrl(currentView)
{

}