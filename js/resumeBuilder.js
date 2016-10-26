var model = {
    bio: {
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
        "biopic": "http://placekitten.com/200/300"
    },
    work: {
        "jobs": [
            {
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
            }
        ]
    },
    project: {
        "projects": [{
            "title": "Personal projects",
            "description": "Projects developed in HTML5, CSS and the MEAN framework, Mongodb, Express, Angularjs, Nodejs.",
            "dates": "2016",
            "images": ["images/cats-400_small.jpg", "images/chef-400_small.jpg"]
        }]
    },
    education: {
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
        }]
    }
}

var control = {
        formattedRole: HTMLheaderRole.replace("%data%", model.bio.role),
        formattedName: HTMLheaderName.replace("%data%", model.bio.name),
        formattedMobile: HTMLmobile.replace("%data%", model.bio.contacts.mobile),
        formattedEmail: HTMLemail.replace("%data%", model.bio.contacts.email),
        formattedGithub: HTMLgithub.replace("%data%", model.bio.contacts.github),
        formattedLocation: HTMLlocation.replace("%data%", model.bio.contacts.location),
        formattedPicture: HTMLbioPic.replace("%data%", model.bio.biopic),
        formattedMessage: HTMLwelcomeMsg.replace("%data%", model.bio.welcomeMessage),
        skills: function(){
            if (model.bio.skills.length) {
                $("#header").append(HTMLskillsStart);
                for (var i = 0; i < model.bio.skills.length; i++) {
                    var formattedSkills = HTMLskills.replace("%data%", model.bio.skills[i]);
                    $("#skills").append(formattedSkills);
                }
            }
        },
        jobs: function(){
            if (model.work.jobs.length) {
                for (var i = 0; i < model.work.jobs.length; i++) {
                    $("#workExperience").append(HTMLworkStart);
                    var formattedCurrent = HTMLworkEmployer.replace("%data%", model.work.jobs[i].employer) + " " + HTMLworkTitle.replace("%data%", model.work.jobs[i].title);
                    $(".work-entry:last").append(formattedCurrent);
                    var formattedLocation = HTMLworkLocation.replace("%data%", model.work.jobs[i].location);
                    $(".work-entry:last").append(formattedLocation);
                    var formattedYears = HTMLworkDates.replace("%data%", model.work.jobs[i].dates);
                    $(".work-entry:last").append(formattedYears);
                    var formattedWorkDescription = HTMLworkDescription.replace("%data%", model.work.jobs[i].description);
                    $(".work-entry:last").append(formattedWorkDescription);
                }
            }
        },
        projects: function(){
            if (model.project.projects.length) {
                for (var i = 0; i < model.project.projects.length; i++) {
                    $("#projects").append(HTMLprojectStart);
                    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", model.project.projects[i].title);
                    $(".project-entry:last").append(formattedProjectTitle);
                    var formattedProjectYears = HTMLprojectDates.replace("%data%", model.project.projects[i].dates);
                    $(".project-entry:last").append(formattedProjectYears);
                    var formattedProjectDesc = HTMLprojectDescription.replace("%data%", model.project.projects[i].description);
                    $(".project-entry:last").append(formattedProjectDesc);
                    if (model.project.projects[i].images.length) {
                        for (var y = 0; y < model.project.projects[i].images.length; y++) {
                            var formattedProjectImg = HTMLprojectImage.replace("%data%", model.project.projects[i].images[y]);
                            $(".project-entry:last").append(formattedProjectImg);
                        }
                    }
                }
            }
        },
        education: function(){
            if (model.education.schools.length) {
                $("#education").append(HTMLschoolStart);
                for (var i = 0; i < model.education.schools.length; i++) {
                    var formattedSchool = HTMLschoolName.replace("%data%", model.education.schools[i].name) + " " + HTMLschoolDegree.replace("%data%", model.education.schools[i].degree);
                    $(".education-entry").append(formattedSchool.replace("#", model.education.schools[i].url));
                    var formattedEduCity = HTMLschoolLocation.replace("%data%", model.education.schools[i].location);
                    $(".education-entry").append(formattedEduCity);
                    var formattedEduYears = HTMLschoolDates.replace("%data%", model.education.schools[i].dates);
                    $(".education-entry").append(formattedEduYears);
                    var formattedMajors = HTMLschoolMajor.replace("%data%", model.education.schools[i].majors);
                    $(".education-entry").append(formattedMajors);
                }
            }
            if (model.education.onlineCourses.length) {
                $("#education").append(HTMLonlineClasses);
                for (var x = 0; x < model.education.onlineCourses.length; x++) {
                    var formattedonline = HTMLonlineTitle.replace("%data%", model.education.onlineCourses[x].title) + " " + HTMLonlineSchool.replace("%data%", model.education.onlineCourses[x].school);
                    $("#education").find("h3").append(formattedonline.replace("#", model.education.onlineCourses[x].url));
                    var formattedonlineDates = HTMLonlineDates.replace("%data%", model.education.onlineCourses[x].dates);
                    $("#education").find("h3").append(formattedonlineDates);
                    var formattedonlineUrl = HTMLonlineURL.replace("%data%", model.education.onlineCourses[x].url);
                    $("#education").find("h3").append(formattedonlineUrl.replace("#", model.education.onlineCourses[x].url));

                }
            }
        }
}
var view = {
    init: function() {
        $("#header").prepend(control.formattedRole);
        $("#header").prepend(control.formattedName);
        $("#topContacts, #footerContacts").append(control.formattedMobile);
        $("#topContacts, #footerContacts").append(control.formattedEmail);
        $("#topContacts, #footerContacts").append(control.formattedGithub);
        $("#topContacts, #footerContacts").append(control.formattedLocation);
        $("#header").append(control.formattedPicture);
        $("#header").append(control.formattedMessage);
        control.skills();
        control.jobs();
        control.projects();
        control.education();
    }
}

view.init();
$("#mapDiv").append(googleMap);