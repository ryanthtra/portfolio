var cardContent =  
{
	// Introduction Section
	intro_programmer: [
		"Programmer.",		
		"<b>Description:</b> I'm a web developer with skills in both the front-end and the back-end.  I'm looking forward to helping a company make lots of money by filling their web applications with pretty things!",
		[
			"Recent graduate of the LearningFuze Full Immersion Training Course (i.e. coding bootcamp).",
			"Eager to apply new-found skills and discover new ones for future personal endevors and for the modern enterprise seeking enthusiastic talent.",
			"Previously a mobile game and application developer, using J2ME, Windows Phone, iOS, and the Unity 3D game engine."
		]
	],
	intro_gamer: [
		"Gamer.",
		"<b>Description:</b> I've been a gamer since the ColecoVision and up to and including the current PS4/Xbox One generation.",
		[
			"Enjoys most games, but especially those that include RPG elements.",
			"Current favorites include Mass Effect, NBA 2K, and Diablo III.",
			"Also enjoys highly-thematic board and card games, such as Netrunner, X-Wing Miniatures, and The Resistance.",
			"Has a Steam backlog of well into the hundreds :-("
		]
	],
	intro_singer: [
		"Singer.",
		"<b>Description:</b> I'm a self-trained baritone who's gone from \"horrible\" to \"not too bad\" over the past decade.",
		[
			"Serenades his wife everyday (usually with Josh Turner's \"Your Man\").",
			"A member of the St. Frances of Rome Church Filipino Ministry Choir.",
			"Occasionally guilty of hogging the karaoke machine at parties."
		]
	],
	intro_fitness: [
		"Fitness Enthusiast.",
		"<b>Description:</b> I'm a casual gym rat whose voracious appetite needs to be offset by working out (at least) four times a week in order to stay in decent shape.",
		[
			"Has been a member of 24 Hour Fitness for nearly 10 years.",
			"At the gym, prefers at least 30 minutes of cardio before any resistance training.",
			"At home, enjoys (or tortures himself with) Insanity, P90X, or running in the neighborhood park."
		]
	],
	
	// Skills section
	skills_html: [
		"HyperText Markup Language.",
		"<b>Action:</b> Use this for defining the \"skeleton\" and most basic layout of a webpage (<b>Psst:</b> I used it making this portfolio!).",
		[
			"<b>Twitter Bootstrap:</b> Front-End framework for quickly creating ergonomic and responsive layouts using only HTML (Lightly used in this portfolio for the top navigation bar.)."
		]
	],
	skills_css: [
		"Cascading Style Sheets.",
		"<b>Action:</b> Use this for defining the visual style of a webpage  (<b>Psst:</b> I also used this for this portfolio!).",
		"CSS features I have proficiency in include:",
		[
			"Selectors and Inheritance",
			"Element Positionings and Layouts",
			"Media Queries",
			"Animations and Transforms",
			"Responsive Design"
		]
	],
	skills_javascript: [
		"JavaScript.",
		"<b>Action:</b> Use this to add interaction with and functionality to a webpage (<b>Psst:</b> Yep, I used it here, too!).",
		"Other JavaScript Skills:",
		[
			"<b>jQuery:</b> Provides easier manipulation of Document Object Model (DOM) elements of a webpage (heavily used in this portfolio)",
			"<b>Object-Oriented Programming</b>",
			"<b>Front-End MVC Frameworks:</b> Familar with and eager to learn, such as Angular and Ember.",
			"<b>Visualization Frameworks:</b> Familiar with and eager to learn, such as React and D3."
		]
		
	],
	skills_lamp: [
		"LAMP Stack (Back-End Development).",
	],
	skills_agile: [
		"Agile Development Process.",
	],
	skills_version: [
		"Version Control.",
		
	],
	skills_past: [
		"Prior Technical Skills.",
		[
			"<b>Programming Languages:</b> C#, XAML, Java, Objective-C",
			"<b>Platforms:</b> J2ME, .NET 4.5+, WinRT, iOS",
			"<b>Other Tools:</b> Unity3D, MVVM design pattern"				
		]
	],
	
	// Projects Section
	
	// Experience Section
	experience_namco: [
		"Namco Bandai Games America.",
	],
	experience_brandyl: [
		"Brandyl.",
	],
	experience_seismic: [
		"Seismic Games.",
	],
	experience_learningfuze: [
		"LearningFuze (Web Development Training).",
	]
};

function loadCardContent(sectionSelector, propertyName)
{
	// Get the bottom half of the card.
	var $textDiv = $(sectionSelector).find('.card-big-right-down'); 
	// Empty its contents.
	$textDiv.html('');
	// Get the corrent property from the cardContent object
	var contentArr = cardContent[propertyName];
	// Re-fill its contents
	for (var i = 0; i < contentArr.length; i++)
	{
		if (i == 0)
			$textDiv.append($('<p>').append($('<b>').text(contentArr[i])));			
		else
		{
			// Checks to see if the current item is an array
			if (Object.prototype.toString.call(contentArr[i]) == '[object Array]')
			{
				$textDiv.append($('<ul>'));
				var $list = $textDiv.find('ul');
				for (var j = 0; j < contentArr[i].length; j++)
					$list.append($('<li>').html(contentArr[i][j]));
			}
			else
			{
				$textDiv.append($('<p>').html(contentArr[i]));
			}
		}				
	}
}