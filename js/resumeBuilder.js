var bio = {
    "name": "Ana Garcia",
    "role": "Front End Developer",
    "contacts": {
        "mobile": "07958689542",
        "email": "anab.garciauk@gmail.com",
        "github": "https://github.com/anbegaral/",
        "location": "Swindon, Wiltshire, UK"
    },
    "welcomeMessage": "Welcome to my resume",
    "skills": ["js", "html", "css"],
    "biopic": "http://placekitten.com/200/300",
    "display": function() {
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").prepend(formattedName);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#topContacts, #footerContacts").append(formattedMobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#topContacts, #footerContacts").append(formattedEmail);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#topContacts, #footerContacts").append(formattedGithub);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts, #footerContacts").append(formattedLocation);
        var formattedPicture = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(formattedPicture);
        var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedMessage);
        if (bio.skills.length) {
            $("#header").append(HTMLskillsStart);
            for (var i = 0; i < bio.skills.length; i++) {
                var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
                $("#skills").append(formattedSkills);
            }
        }
    }
};

var work = {
    "jobs": [{
        "employer": "Intoware",
        "title": "Front End Developer",
        "location": "Swindon, UK",
        "dates": "2016",
        "description": "Developing web pages for the company's customers."
    }, {
        "employer": "OmPrompt",
        "title": "Full stack developer",
        "location": "Milton Park, UK",
        "dates": "2015 - 2016",
        "description": "Worked as java developer, developing applications for the company's customers."
    }, {
        "employer": "Deusto Sistemas",
        "title": "Software developer",
        "location": "Vitoria, Spain",
        "dates": "2010 - 2014",
        "description": "Worked as java developer, developing applications for the company's customers."
    }],
    "display": function() {
        if (work.jobs.length) {
            for (var i = 0; i < work.jobs.length; i++) {
                $("#workExperience").append(HTMLworkStart);
                var formattedCurrent = HTMLworkEmployer.replace("%data%", work.jobs[i].employer) + " " + HTMLworkTitle.replace("%data%", work.jobs[i].title);
                $(".work-entry:last").append(formattedCurrent);
                var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
                $(".work-entry:last").append(formattedLocation);
                var formattedYears = HTMLworkDates.replace("%data%", work.jobs[i].dates);
                $(".work-entry:last").append(formattedYears);
                var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
                $(".work-entry:last").append(formattedWorkDescription);
            }
        }
    }
};

var projects = {
    "projects": [{
        "title": "Personal projects",
        "description": "Projects developed in HTML5, CSS and the MEAN framework, Mongodb, Express, Angularjs, Nodejs.",
        "dates": "2016",
        "images": ["images/cats-400_small.jpg", "images/chef-400_small.jpg"]
    }],
    "display": function() {
        if (projects.projects.length) {
            for (var i = 0; i < projects.projects.length; i++) {
                $("#projects").append(HTMLprojectStart);
                var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
                $(".project-entry:last").append(formattedProjectTitle);
                var formattedProjectYears = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
                $(".project-entry:last").append(formattedProjectYears);
                var formattedProjectDesc = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
                $(".project-entry:last").append(formattedProjectDesc);
                if (projects.projects[i].images.length) {
                    for (var y = 0; y < projects.projects[i].images.length; y++) {
                        var formattedProjectImg = HTMLprojectImage.replace("%data%", projects.projects[i].images[y]);
                        $(".project-entry:last").append(formattedProjectImg);
                    }
                }
            }
        }
    }
};

var education = {
    "schools": [{
        "name": "Deusto University",
        "location": "Bilbao, Spain",
        "degree": "Tourism",
        "majors": ["economy", " laws", " business administration"],
        "dates": "1993 - 1996",
        "url": "http://www.deusto.es"
    }],
    "onlineCourses": [{
        "title": "Java for Android",
        "school": "UCLA",
        "dates": "2010 - 2011",
        "url": "http://www.ucla.com"
    }, {
        "title": "Nodejs",
        "school": "Udemy",
        "dates": "2016",
        "url": "http://www.udemy.com"
    }],
    "display": function() {
        if (education.schools.length) {
            $("#education").append(HTMLschoolStart);
            for (var i = 0; i < education.schools.length; i++) {
                var formattedSchool = HTMLschoolName.replace("%data%", education.schools[i].name) + " " + HTMLschoolDegree.replace("%data%", education.schools[i].degree);
                $(".education-entry").append(formattedSchool.replace("#", education.schools[i].url));
                var formattedEduCity = HTMLschoolLocation.replace("%data%", education.schools[i].location);
                $(".education-entry").append(formattedEduCity);
                var formattedEduYears = HTMLschoolDates.replace("%data%", education.schools[i].dates);
                $(".education-entry").append(formattedEduYears);
                var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
                $(".education-entry").append(formattedMajors);
            }
        }
        if (education.onlineCourses.length) {
            $("#education").append(HTMLonlineClasses);
            for (var x = 0; x < education.onlineCourses.length; x++) {
                var formattedonline = HTMLonlineTitle.replace("%data%", education.onlineCourses[x].title) + " " + HTMLonlineSchool.replace("%data%", education.onlineCourses[x].school);
                $("#education").find("h3").append(formattedonline.replace("#", education.onlineCourses[x].url));
                var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[x].dates);
                $("#education").find("h3").append(formattedonlineDates);
                var formattedonlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[x].url);
                $("#education").find("h3").append(formattedonlineUrl.replace("#", education.onlineCourses[x].url));

            }
        }
    }
};

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);