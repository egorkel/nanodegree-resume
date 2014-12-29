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
    "skills": ["JS", "HTML", "CSS", "c++", "CUDA"]
};

var education = {
    "schools": [
        {
            "name": "school",
            "location": "Lozovaia",
            "years": "1993-2003",
            "grad": "gold medal"
        },
        {
            "name": "KNURE",
            "location": "Kharkov, Ukraine",
            "years": "2003-2008",
            "grad": "radioengineer"
        }
    ],
    "onlineCourses": [
        {
            "name": "JS Basiscs",
            "location": "Udacity.com",
            "years": "2014"
        }
    ]
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
    ]
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
    ]
};

//name and role
var fmt_name = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(fmt_name);
var role = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(role);

//contacts
var cont_mob = HTMLmobile.replace("%data%", bio.contacts.mobile);
var cont_mail = HTMLemail.replace("%data%", bio.contacts.email);
var cont_git = HTMLgithub.replace("%data%", bio.contacts.githab);
var cont_loc = HTMLlocation.replace("%data%", bio.contacts.location);
$("#header").append(cont_mob);
$("#header").append(cont_mail);
$("#header").append(cont_git);
$("#header").append(cont_loc);

//picture
var pic = HTMLbioPic.replace("%data%", bio.picture);
$("#header").append(pic);

//welcome mes
var mes = HTMLWelcomeMsg.replace("%data%", bio.mes);
$("#header").append(mes);

//skills
if (bio.skills !== undefined) {
	$("#header").append(HTMLskillsStart);
	var str_skill;
	for (var i of bio.skills) {
		str_skill = HTMLskills.replace("%data%", i);
		$("#skills").append(str_skill);
	}
}

//jbos
function displayWork() {
	if (work.jobs !== undefined) {
		var empl;
		var tit;
		var dates;
		var loc;
		var desc;
		for (var i in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			empl = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			tit = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			dates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
			loc = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			desc = HTMLworkDescription.replace("%data%",
											   work.jobs[i].description);
			$(".work-entry:last").append(empl+tit+dates+loc+desc);
		}
	}
}

displayWork();

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

//projects section
projects.display = function() {
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
projects.display();

//map
$("#mapDiv").append(googleMap);