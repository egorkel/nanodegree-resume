var bio = {
    "name": "Yegor Kolesnikov",
    "role": "Junior web developer",
    "contacts": {
		"mobile": "+380956546058",
		"email": "kelegorkel@gmail.com",
		"githab": "egorkel",
		"location": "Kharkov, Ukraine"
	},
    "picture": "images\\me.jpg",
    "mes": "God lives!",
    "skills": ["JS", "HTML", "CSS", "c++", "CUDA"],
	"display": function () {
		var fmt_name = HTMLheaderName.replace("%data%", bio.name);
		var role = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").append(fmt_name + role);

		var cont_mob = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var cont_mail = HTMLemail.replace("%data%", bio.contacts.email);
		var cont_git = HTMLgithub.replace("%data%", bio.contacts.githab);
		var cont_loc = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#header").append(cont_mob + cont_mail + cont_git + cont_loc);
		
		var pic = HTMLbioPic.replace("%data%", bio.picture);
		var mes = HTMLWelcomeMsg.replace("%data%", bio.mes);
		$("#header").append(pic + mes);

		$("#header").append(HTMLskillsStart);
		for (var i of bio.skills) {
			var str_skill = HTMLskills.replace("%data%", i);
			$("#skills").append(str_skill);
		}
	}
};

var education = {
    "schools": [
        {
            "name": "school",
            "location": "Lozovaia",
            "years": "1993-2003",
            "grad": "gold medal",
			"maj": "common"
        },
        {
            "name": "KNURE",
            "location": "Kharkov, Ukraine",
            "years": "2003-2008",
            "grad": "master",
			"maj": "radioengineer"
        }
    ],
    "onlineCourses": [
        {
            "name": "JS Basiscs",
            "location": "Udacity.com",
            "years": "2014"
        }
    ],
	"display": function () {
		for (var i in education.schools) {
			$("#education").append(HTMLschoolStart);
			var sc_name = HTMLschoolName.replace("%data%",
												 education.schools[i].name);
			var sc_loc =
				HTMLschoolLocation.replace("%data%",
										   education.schools[i].location);
			var sc_year = HTMLschoolDates.replace("%data%",
												  education.schools[i].years);
			var sc_grad = HTMLschoolDegree.replace("%data%",
												   education.schools[i].grad);
			var sc_maj = HTMLschoolMajor.replace("%data%",
												 education.schools[i].maj);
			$(".education-entry:last").append(sc_name + sc_grad + sc_year +
											  sc_loc + sc_maj);
		}
		
		$("#education").append(HTMLonlineClasses);
		
		for (var i in education.onlineCourses) {
			$("#education").append(HTMLschoolStart);
			var onc_name =
				HTMLonlineTitle.replace("%data%",
										education.onlineCourses[i].name);
			var onc_sch =
				HTMLonlineSchool.replace("%data%",
										 education.onlineCourses[i].location);
			var onc_year =
				HTMLonlineDates.replace("%data%",
										education.onlineCourses[i].years);
			$(".education-entry:last").append(onc_name + onc_sch + onc_year);
		}
	}
};

var work = {
    "jobs": [
        {
            "employer": "Proton",
            "title": "Engineer",
            "location": "Kharkov, Ukraine",
            "dates": "2008-2010",
			"description": "Creating drawings of detales and assembles using AutoCAD and SolidWorks"
        },
        {
            "employer": "CCB Proton",
            "title": "Engineer",
            "location": "Kharkov, Ukraine",
            "dates": "2010-2014",
			"description": "Modeling, routing and tuning pcbs for radioreceivers. Writing programms for controling, calculating and storring data from receivers using C++, CUDA and OpenGL"
        }
    ],
	"display": function () {
		for (var i in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			var empl = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var tit = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var dates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
			var loc = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var desc = HTMLworkDescription.replace("%data%",
											   work.jobs[i].description);
			$(".work-entry:last").append(empl+tit+dates+loc+desc);
		}
	}
};

var projects = {
    "projects": [
        {
            "title": "Minesweeper",
            "dates": "2001",
            "description": "written in Z80 assembler"
        },
        {
            "title": "Sudoku",
            "dates": "2010",
            "description": "Can generate sudoku pazzles"
        },
        {
            "title": "CUDAcorcalc",
            "dates": "2012-2014",
            "description": "calculates corfunction for 10000 samples per 1 second"
        }
    ],
	"display": function() {
		for (var i in projects.projects) {
			$("#projects").append(HTMLprojectStart);
			var prj_tit = HTMLprojectTitle.replace("%data%",
												   projects.projects[i].title);
			var prj_dates = HTMLprojectDates.replace("%data%",
													 projects.projects[i].dates);
			var prj_descr =
				HTMLprojectDescription.replace("%data%",
											   projects.projects[i].description);
			$(".project-entry:last").append(prj_tit + prj_dates + prj_descr);
		}
	}
};

bio.display();
work.display();
projects.display();
education.display();

//click events
//$(document).click(function(loc) {logClicks(loc.pageX,loc.pageY);});

//adding internationalizeButton
$("#main").append(internationalizeButton);
var name = bio.name;
function inName(loc_name) {
	var int_name = loc_name.trim().split(" ");
	int_name[1] = int_name[1].toUpperCase();
	int_name[0] = int_name[0].slice(0, 1).toUpperCase() +
		int_name[0].slice(1).toLowerCase();
	return int_name[0] + " " + int_name[1];
}

//map
$("#mapDiv").append(googleMap);