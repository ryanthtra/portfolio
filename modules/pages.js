angular.module('pages', [])
    .controller('aboutCtrl', AboutCtrl)
    .controller('skillsCtrl', SkillsCtrl)
    .controller('experienceCtrl', ExperienceCtrl)
    .controller('projectsCtrl', ProjectsCtrl)
    .controller('contactMeCtrl', ContactMeCtrl);

function AboutCtrl(currentView)
{
}

function SkillsCtrl(currentView)
{
}

function ExperienceCtrl(currentView)
{
}

function ProjectsCtrl($scope, currentView)
{
    $scope.projects = projects;
    $scope.getProjectLink = getProjectLink;
    $scope.getProjectThumbnail = getProjectThumbnail;
    $scope.getProjectLabel = getProjectLabel;

    $scope.blinkFrame = function(index)
    {
        var frame = $('#project-gallery').find('.project-frame-blink')[index];

        $(frame).addClass("show-blink");
    }
    $scope.unblinkFrame = function(index)
    {
        var frame = $('#project-gallery').find('.project-frame-blink')[index];

        $(frame).removeClass("show-blink");
    }
    function getProjectLink(index)
    {
        return projects[index].linkUrl;
    }
    function getProjectThumbnail(index)
    {
        return projects[index].thumbnail;
    }
    function getProjectLabel(index)
    {
        return projects[index].label;
    }
}

function ContactMeCtrl(currentView)
{
}

