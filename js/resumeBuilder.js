var bio = {
    "name": "Yegor Kolesnikov",
    "role": "Junior web developer",
    "contacts": [
        {
            "mobile": "+380956546058",
            "email": "kelegorkel@gmail.com",
			"githbu": "egorkel"
        }
    ],
    "picture": "images\\me.jpg",
    "mes": "God lives!",
    "skills": ["JS", "HTML", "CSS", "c++", "CUDA"]
};

var education = {
    "schools": [
        {
            "name": "school",
            "city": "Lozovaia",
            "years": "1993-2003",
            "grad": "gold medal"
        },
        {
            "name": "KNURE",
            "city": "Kharkov",
            "years": "2003-2008",
            "grad": "radioengineer"
        }
    ],
    "onlineCourses": [
        {
            "name": "JS Basiscs",
            "Location": "Udacity.com",
            "years": "2014"
        }
    ]
};

var work = {
    "jobs": [
        {
            "employer": "Proton",
            "title": "Engineer",
            "location": "Kharkov",
            "dates": "2008-2010",
			"description": "Creating drawings of detales and assembles using AutoCAD and SolidWorks"
        },
        {
            "employer": "CCB Proton",
            "title": "Engineer",
            "location": "Kharkov",
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
var fmt_name = HTMLheaderName.replace("%data%",bio.name);
$("#header").append(fmt_name);
var role = HTMLheaderRole.replace("%data%",bio.role);
$("#header").append(role);

//contacts


//picture
var pic = HTMLbioPic.replace("%data%",bio.picture);
$("#header").append(pic);

//welcome mes
var mes = HTMLWelcomeMsg.replace("%data%",bio.mes);
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

//adding button
$("#main").append("<button> Button </button>");

function inName(loc_name) {
	var int_name = loc_name/*.text()*/.split(" ");
	int_name[1] = int_name[1].toUpperCase();
	return int_name[0] + " " + int_name[1];
}

/*$("#main").button().click(function(event) {
	var int_name = $("#name").text().split(" ");
	int_name[1] = int_name[1].toUpperCase();
});
*/	