//List of roles and the competencies / courses related to the role
var a = {
    Roles: [
        {
          "role" : "--- Select Role ---",
          "roleID" : "",
          "compID": "",
          "compTitle" : "",
          "compValue" : "",
          "relCourses" : ""
      },
        {
        "role"  : "Account Manager",
        "roleID" : "role1",
        "compID" : ["d5","d6","d7","e1","e4"],
        "compTitle" : [ "Sales Proposal Development", 
                        "Channel Management",
                        "Sales Management",
                        "Forecast Development",
                        "Relationship Management"],
        "compValue" : ["4","3","5","3","4"]
      },
      {
        "role"  : "Business Analyst",
        "roleID" : "role2",
        "compID" : ["a1","a3","e5"],
        "compTitle" : [ "IS and Business Strategy alignment", 
                        "Business Plan Development", 
                        "Process improvement"],
        "compValue" : ["4", "4", "4"]
      },
      {
        "role"  : "Business Information Manager",
        "roleID" : "role3",
        "compID" : ["a1","a3","d10","e2","e7"],
        "compTitle" : [ "IS and Business Strategy alignment", 
                        "Business Plan Development",
                        "Information and Knowledge Management",
                        "Project and portfolio management",
                        "Business Change Management"],
        "compValue" : ["4","4","5","4","4"]
      },
      {
        "role"  : "Chief Information Officer",
        "roleID" : "role4",
        "compID" : ["a1","a3","e2","e4","e9"],
        "compTitle" : [ "IS and Business Strategy alignment", 
                        "Business Plan Development",
                        "Project and portfolio management",
                        "Relationship Management",
                        "IT Governance"],
        "compValue" : ["5","5","5","4","5"]
      },
      {
        "role"  : "Database Administrator",
        "roleID" : "role5",
        "compID" : ["a6","b1","b2","c4","d10"],
        "compTitle" : [ "Application Design", 
                        "Application Development",
                        "System Integration",
                        "Problem management",
                        "Information and Knowledge Management"],
        "compValue" : ["1","3","2/3","3","3"]
      },
      {
        "role"  : "Developer",
        "roleID" : "role6",
        "compID" : ["b1","b2","b3","b5","c4"],
        "compTitle" : [ "Application Development", 
                        "System Integration",
                        "Testing",
                        "Documentation Production",
                        "Problem management"],
        "compValue" : ["3","2","2","3","3"]
      },
      {
        "role"  : "Digital Media Specialist",
        "roleID" : "role7",
        "compID" : ["a6","b1","b3","b4","b5"],
        "compTitle" : [ "Application Design", 
                        "Application Development",
                        "Testing",
                        "Solution Deployment",
                        "Documentation Production"],
        "compValue" : ["2","3","2","3","3"]
      },
      {
        "role"  : "Enterprise Architect",
        "roleID" : "role8",
        "compID" : ["a1","a3","a5","a7","e7"],
        "compTitle" : [ "IS and Business Strategy alignment", 
                        "Business Plan Development",
                        "Architecture Design",
                        "Technology Watching",
                        "Business Change Management"],
        "compValue" : ["4/5","3/4","4","5","4/5"]
      },
      {
        "role"  : "ICT Consultant",
        "roleID" : "role9",
        "compID" : ["a1","a7","e3","e7"],
        "compTitle" : [ "Product or Project Planning",
                        "Technology Watching", 
                        "Risk management",
                        "Business Change Management"],
        "compValue" : ["4","3","5","3"]
      },
      {
        "role"  : "ICT Operations Manager",
        "roleID" : "role10",
        "compID" : ["d9","e3","e6","e7","e8"],
        "compTitle" : [ "Personnel Development", 
                        "Risk management",
                        "ICT Quality Management",
                        "Business Change Management",
                        "Information Security Management"],
        "compValue" : ["4","3","3","4","3"]
      },
      {
        "role"  : "ICT Security Specialist",
        "roleID" : "role11",
        "compID" : ["a7","d1","e3","e8","e9"],
        "compTitle" : [ "Technology Watching", 
                        "Information Security Strategy Development",
                        "Risk management",
                        "Information Security Management",
                        "IT Governance"],
        "compValue" : ["4","5","3","4","4"]
      },
      {
        "role"  : "ICT Specialist",
        "roleID" : "role12",
        "compID" : ["c2","c3","d9","d10","e8"],
        "compTitle" : [ "Change Support", 
                        "Service delivery",
                        "Personnel Development",
                        "Information and Knowledge Management",
                        "Information Security Management"],
        "compValue" : ["3","3","3","3","3/4"]
      },
      {
        "role"  : "ICT Trainer",
        "roleID" : "role13",
        "compID" : ["d3","d9"],
        "compTitle" : [ "Education and Training Provision", 
                        "Personnel Development"],
        "compValue" : ["2/3","2"]
      },
      {
        "role"  : "Network Specialist",
        "roleID" : "role14",
        "compID" : ["b1","b2","b4","c4","e8"],
        "compTitle" : [ "Application Development", 
                        "System Integration",
                        "Solution Deployment",
                        "Problem management",
                        "Information Security Management"],
        "compValue" : ["2/3","2/3","2/3","2/3","2"]
      },
      {
        "role"  : "Project Manager",
        "roleID" : "role15",
        "compID" : ["a4","e2","e3","e4","e7"],
        "compTitle" : [ "Product or Project Planning", 
                        "Project and portfolio management",
                        "Risk management",
                        "Relationship Management",
                        "Business Change Management"],
        "compValue" : ["4","4","3","3","4"]
      },
      {
        "role"  : "Quality Assuance Manager",
        "roleID" : "role16",
        "compID" : ["d2","e3","e5","e6"],
        "compTitle" : [ "ICT quality strategy development", 
                        "Risk management",
                        "Process improvement",
                        "ICT Quality Management"],
        "compValue" : ["4/5","3","3","4"]
      },
      {
        "role"  : "Service Desk Agent",
        "roleID" : "role17",
        "compID" : ["c1","c3","c4"],
        "compTitle" : [ "User support", 
                        "Service delivery",
                        "Problem management"],
        "compValue" : ["2","1","2"]
      },
      {
        "role"  : "Service Manager",
        "roleID" : "role18",
        "compID" : ["a2","c3","c4","d8","d9"],
        "compTitle" : [ "Service Level Management", 
                        "Service delivery",
                        "Problem management",
                        "Contract Management",
                        "Personnel Development"],
        "compValue" : ["4","3","4","4","3"]
      },
      {
        "role"  : "System Architect",
        "roleID" : "role19",
        "compID" : ["b2","b3","b4","c1","c4","e8"],
        "compTitle" : [ "System Integration", 
                        "Testing",
                        "Solution Deployment",
                        "User support",
                        "Problem management",
                        "Information Security Management"],
        "compValue" : ["2","2","2","2/3","2/3","2"]
      },
      {
        "role"  : "Systems Administrator",
        "roleID" : "role20",
        "compID" : ["a5","b1","e5"],
        "compTitle" : [ "Architecture Design", 
                        "Application Development",
                        "Process improvement"],
        "compValue" : ["3","3/4","3/4"]
      },
      {
        "role"  : "Systems Analyst",
        "roleID" : "role21",
        "compID" : ["a5","a7","b1","b2"],
        "compTitle" : [ "Architecture Design", 
                        "Technology Watching",
                        "Application Development",
                        "System Integration"],
        "compValue" : ["4","4/5","4/5","4"]
      },
      {
        "role"  : "Technical Specialist",
        "roleID" : "role22",
        "compID" : ["c2","c3","c4"],
        "compTitle" : [ "Change Support", 
                        "Service delivery",
                        "Problem management"],
        "compValue" : ["3","2","3"]
      },
      {
        "role"  : "Test Specialist",
        "roleID" : "role23",
        "compID" : ["b1","b2","b3","b4","c4"],
        "compTitle" : [ "Application Development", 
                        "System Integration",
                        "Testing",
                        "Solution Deployment",
                        "Problem management"],
        "compValue" : ["3/4","2/3","2/3","3","2/3"]
      }
    ]
};
//List of competencies with associated courses and values
var b = {
  compCourses: [
    {
      "compID" : "a1",
      "courses" : ["t1","t7","t12","t14","t21","t26","t34","t38"]
    },
    {
      "compID" : "a2",
      "courses" : [ "t1","t14","t16","t17","t23","t29","t31","t32","t36"]
    },
    {
      "compID" : "a3",
      "courses" : [ "t1","t2","t3","t4","t7","t9","t12","t26","t29","t34","t36","t37"]
    },
    {
      "compID" : "a4",
      "courses" : [ "t1","t2","t3","t5","t6","t8","t9","t13","t14","t18","t19","t20","t21","t23","t28","t29","t31","t36","t37"],
      "courseLinks" : [""]
    },
    {
      "compID" : "a5",
      "courses" : [ "t10","t11","t15","t22","t31"],
      "courseLinks" : [""]
    },
    {
      "compID" : "a6",
      "courses" : [ "t8","t9","t11","t13","t14","t15","t18","t19","t20","t30","t31","t35"],
      "courseLinks" : [""]
    },
    {
      "compID" : "a7",
      "courses" : [ "t1","t34"],
      "courseLinks" : [""]
    },
    {
      "compID" : "a8",
      "courses" : [ ""],
      "courseLinks" : [""]
    },
    {
      "compID" : "a9",
      "courses" : [ "t1","t8","t9","t13","t14","t18","t19","t20","t26","t34"],
      "courseLinks" : [""]
    },
    {
      "compID" : "b1",
      "courses" : [ "t5","t6","t8","t9","t13","t14","t18","t19","t30","t35"],
      "courseLinks" : [""]
    },
    {
      "compID" : "b2",
      "courses" : [ "t8","t9","t15","t18","t19","t28","t30","t31","t35"],
      "courseLinks" : [""]
    },
    {
      "compID" : "b3",
      "courses" : [ "t5","t8","t9","t13","t18","t19","t30","t35"],
      "courseLinks" : [""]
    },
    {
      "compID" : "b4",
      "courses" : [ "t2","t3","t4","t5","t6","t8","t9","t13","t14","t18","t19","t30","t35"],
      "courseLinks" : [""]
    },
    {
      "compID" : "b5",
      "courses" : [ "t5","t8","t9","t10","t11","t13","t14","t15","t18","t19","t22","t23","t30","t35","t36","t37"],
      "courseLinks" : [""]
    },
    {
      "compID" : "b6",
      "courses" : [ "t15","t28","t31"],
      "courseLinks" : [""]
    },
    {
      "compID" : "c1",
      "courses" : [ "t1","t13","t25","t27","t33","t37","t39"],
      "courseLinks" : [""]
    },
    {
      "compID" : "c2",
      "courses" : [ "t5","t8","t9","t10","t11","t13","t14","t18","t19","t25","t30","t35"],
      "courseLinks" : [""]
    },
    {
      "compID" : "c3",
      "courses" : [ "t1","t13","t16","t23","t25","t33","t38","t39"],
      "courseLinks" : [""]
    },
    {
      "compID" : "c4",
      "courses" : [ "t25","t27","t33","t37","t38","t39"],
      "courseLinks" : [""]
    },
    {
      "compID" : "d1",
      "courses" : [ "t1","t10","t11","t12","t22","t31"],
      "courseLinks" : [""]
    },
    {
      "compID" : "d2",
      "courses" : [ "t1","t12","t13","t14","t21","t23","t26","t34","t36","t37","t38"],
      "courseLinks" : [""]
    },
    {
      "compID" : "d3",
      "courses" : [ "t3","t4","t5","t6","t17","t23","t29","t30","t35","t36","t38"],
      "courseLinks" : [""]
    },
    {
      "compID" : "d4",
      "courses" : [ "t31"],
      "courseLinks" : [""]
    },
    {
      "compID" : "d5",
      "courses" : [ "t1","t17","t34"],
      "courseLinks" : [""]
    },
    {
      "compID" : "d6",
      "courses" : [ "t1","t34"],
      "courseLinks" : [""]
    },
    {
      "compID" : "d7",
      "courses" : [ "t1","t16"],
      "courseLinks" : [""]
    },
    {
      "compID" : "d8",
      "courses" : [ "t1","t28","t31","t32"],
      "courseLinks" : [""]
    },
    {
      "compID" : "d9",
      "courses" : [ "t7","t12","t23","t30","t35","t36","t38"],
      "courseLinks" : [""]
    },
    {
      "compID" : "d10",
      "courses" : [ "t1","t10","t11","t13","t15","t22","t34","t35","t36","t37"],
      "courseLinks" : [""]
    },
    {
      "compID" : "d11",
      "courses" : [ "t1","t3","t4","t7","t8","t9","t12","t13","t14","t16","t18","t19","t21","t26","t27","t29","t31","t33","t34","t36","t37"],
      "courseLinks" : [""]
    },
    {
      "compID" : "d12",
      "courses" : [ ""],
      "courseLinks" : [""]
    },
    {
      "compID" : "e1",
      "courses" : [ "t1","t26","t28","t34"],
      "courseLinks" : [""]
    },
    {
      "compID" : "e2",
      "courses" : [ "t1","t5","t6","t8","t9","t13","t14","t18","t34","t35"],
      "courseLinks" : [""]
    },
    {
      "compID" : "e3",
      "courses" : [ "t5","t6","t10","t11","t12","t22","t34","t37"],
      "courseLinks" : [""]
    },
    {
      "compID" : "e4",
      "courses" : [ "t1","t3","t4","t7","t13","t26","t32","t34"],
      "courseLinks" : [""]
    },
    {
      "compID" : "e5",
      "courses" : [ "t8","t9","t12","t13","t17","t18","t21","t23","t25","t26","t29","t36","t37","t38","t39"],
      "courseLinks" : [""]
    },
    {
      "compID" : "e6",
      "courses" : [ "t12","t23","t36","t37"],
      "courseLinks" : [""]
    },
    {
      "compID" : "e7",
      "courses" : [ "t2","t3","t4","t5","t6","t7","t8","t13","t18","t29","t38"],
      "courseLinks" : [""]
    },
    {
      "compID" : "e8",
      "courses" : [ "t31","t33"],
      "courseLinks" : [""]
    },
    {
      "compID" : "e9",
      "courses" : [ "t12","t21","t23","t34","t38"],
      "courseLinks" : [""]
    },

  ]
};
//List of courses with their url links
var c ={
  Courses:[
    {
      "courseID": "t1",
      "name": "Business Relationship Management",
      "url": "https://www.pinkelephant.com/en-US/Course/Business-Relationship-Management-Professional"
    },
    {
      "courseID": "t2",
      "name": "Leading the Organizational Change Process",
      "url": "https://www.pinkelephant.com/en-US/Course/Leading-The-Organizational-Change-Process"
    },
    {
      "courseID": "t3",
      "name": "Organizational Change Management Foundation",
      "url": "https://www.pinkelephant.com/en-US/Course/Organizational-Change-Management-Foundation"
    },
    {
      "courseID": "t4",
      "name": "Organizational Change Management Practitioner",
      "url": "https://www.pinkelephant.com/en-US/Course/Organizational-Change-Management-Practitioner"
    },
    {
      "courseID": "t5",
      "name": "Project Management Foundation",
      "url": "https://www.pinkelephant.com/en-US/Course/PRINCE2-Foundation"
    },
    {
      "courseID": "t6",
      "name": "Project Management Practitioner",
      "url": "https://www.pinkelephant.com/en-US/Course/PRINCE2-Practitioner"
    },
    {
      "courseID": "t7",
      "name": "Leadership Masterclass",
      //Need new link
      "url": "https://www.pinkelephant.com/en-US/Course/PRINCE2-Boot-Camp"
    },
    {
      "courseID": "t8",
      "name": "Agile Scrum Foundation",
      "url": "https://www.pinkelephant.com/en-US/Course/Agile-Scrum-Foundation"
    },
    {
      "courseID": "t9",
      "name": "Certified Agile Scrum Master & Leader",
      "url": "https://www.pinkelephant.com/en-US/Course/Certified-Agile-Scrum-Master-And-Leader"
    },
    {
      "courseID": "t10",
      "name": "Certified Hardware Asset Management Professional",
      "url": "https://www.pinkelephant.com/en-US/Course/Certified-Hardware-Asset-Manager"
    },
    {
      "courseID": "t11",
      "name": "Certified Software Asset Manager",
      "url": "https://www.pinkelephant.com/en-US/Course/Certified-Software-Asset-Manager"
    },
    {
      "courseID": "t12",
      "name": "Defining & Governing Enterprise IT To Deliver Business Value",
      "url": "https://www.pinkelephant.com/en-US/Course/COBIT"
    },
    {
      "courseID": "t13",
      "name": "DevOps Essentials",
      "url": "https://www.pinkelephant.com/en-US/Course/DevOps-Essentials"
    },
    {
      "courseID": "t14",
      "name": "DevOps Advanced",
      "url": "https://www.pinkelephant.com/en-US/Course/DevOps-Advanced"
    },
    {
      "courseID": "t15",
      "name": "How to Define & Implement a CMDB According to Best Practices",
      "url": "https://www.pinkelephant.com/en-US/Course/How-To-Define-And-Implement-A-CMDB"
    },
    {
      "courseID": "t16",
      "name": "How to Define & Implement a Service Catalog",
      "url": "https://www.pinkelephant.com/en-US/Course/How-To-Define-And-Implement-A-Service-Catalog"
    },
    {
      "courseID": "t17",
      "name": "Implementing IT Service Management Boot Camp",
      "url": "https://www.pinkelephant.com/en-US/Course/Implementing-IT-Service-Management-Bootcamp"
    },
    {
      "courseID": "t18",
      "name": "Integrated Service Management Essentials",
      "url": "https://www.pinkelephant.com/en-US/Course/Integrated-Service-Management-Essentials"
    },
    {
      "courseID": "t19",
      "name": "Integrated Service Management Overview",
      "url": "https://www.pinkelephant.com/en-US/Course/Integrated-Service-Management-Overview"
    },
    {
      "courseID": "t20",
      "name": "Integrated Service Management Roadmap",
      "url": "#"
    },
    {
      "courseID": "t21",
      "name": "IT Service Management Strategic Roadmap",
      "url": "https://www.pinkelephant.com/en-US/Course/IT-Service-Management-Strategic-Roadmap"
    },
    {
      "courseID": "t22",
      "name": "ITAM Foundations",
      "url": "https://www.pinkelephant.com/en-US/Course/IT-Asset-Management-Professional"
    },
    {
      "courseID": "t23",
      "name": "ITIL Continual Service improvement",
      "url": "https://www.pinkelephant.com/en-US/Course/ITIL-Continual-Service-Improvement"
    },
    {
      "courseID": "t24",
      "name": "ITIL Executive Overview",
      "url": "https://www.pinkelephant.com/en-US/Course/ITIL-Executive-Overview"
    },
    {
      "courseID": "t25",
      "name": "ITIL Foundation",
      "url": "https://www.pinkelephant.com/en-US/Course/ITIL-Foundation"
    },
    {
      "courseID": "t26",
      "name": "ITIL Managing Across the Lifecycle",
      "url": "https://www.pinkelephant.com/en-US/Course/ITIL-Managing-Across-The-Lifecycle"
    },
    {
      "courseID": "t27",
      "name": "ITIL Operational Support & Analysis",
      "url": "https://www.pinkelephant.com/en-US/Course/ITIL-Operational-Support-And-Analysis"
    },
    {
      "courseID": "t28",
      "name": "IIL Planning, Protection & Optimization",
      "url": "https://www.pinkelephant.com/en-US/Course/ITIL-Planning-Protection-And-Optimization"
    },
    {
      "courseID": "t29",
      "name": "ITIL Practitioner: Enabling Critical Competencies",
      "url": "https://www.pinkelephant.com/en-US/Course/ITIL-Practitioner"
    },
    {
      "courseID": "t30",
      "name": "ITIL Release, Control & Validation",
      "url": "https://www.pinkelephant.com/en-US/Course/ITIL-Release-Control-And-Validation"
    },
    {
      "courseID": "t31",
      "name": "ITIL Service Design",
      "url": "https://www.pinkelephant.com/en-US/Course/ITIL-Service-Design"
    },
    {
      "courseID": "t32",
      "name": "ITIL Service Offerings & Agreements",
      "url": "https://www.pinkelephant.com/en-US/Course/ITIL-Service-Offerings-And-Agreements"
    },
    {
      "courseID": "t33",
      "name": "ITIL Service Operation",
      "url": "https://www.pinkelephant.com/en-US/Course/ITIL-Service-Operation"
    },
    {
      "courseID": "t34",
      "name": "ITIL Service Strategy",
      "url": "https://www.pinkelephant.com/en-US/Course/ITIL-Service-Strategy"
    },
    {
      "courseID": "t35",
      "name": "ITIL Service Transition",
      "url": "https://www.pinkelephant.com/en-US/Course/ITIL-Service-Transition"
    },
    {
      "courseID": "t36",
      "name": "Lean IT Foundation",
      "url": "https://www.pinkelephant.com/en-US/Course/Lean-IT-Foundation"
    },
    {
      "courseID": "t37",
      "name": "Lean IT Kaizen",
      "url": "https://www.pinkelephant.com/en-US/Course/Lean-IT-Kaizen-Lead"
    },
    {
      "courseID": "t38",
      "name": "Lean IT Leadership",
      "url": "https://www.pinkelephant.com/en-US/Course/Lean-IT-Leadership"
    },
    {
      "courseID": "t39",
      "name": "Problem Management: Root Cause Analysis",
      "url": "https://www.pinkelephant.com/en-US/Course/Problem-Management-Root-Cause-Analysis"
    }
    
  ]
}

$(document).ready(function(){


$.each(a.Roles, function (key, val) {
    $("#selRole").append($('<option></option>').val(val.roleID).html(val.role));
});

//Add button click function
$('#selRole').change(function () {
  $("#roleProducts").hide();
    var html = "";

    for (var i = 0; i < a.Roles.length; i++){
      if (a.Roles[i].roleID == $(this).val() && $(this).val() != ""){
        html += "<h3> Role: " + a.Roles[i].role + "</h3>"
        html += "<div class='alert alert-info'><strong>Info!</strong> Click on a competency to view related courses.</div>";
        html += "<table id='roleResults' class='table table-striped  col-lg-12' border='1'>";
        html += "<thead>";
        html += "<th> Competency </th>";
        //html += "<th> Grade </th>";
        html += "</thead>";
        for (var j = 0; j < a.Roles[i].compTitle.length; j++){
        html += "<tr>";
        html += "<td> <a href='javascript:void(0)' class='compLink' onclick='compCourse(\""+(a.Roles[i].compID[j])+"\")' href='#'>"+ a.Roles[i].compTitle[j] + "</a></td>"
        //html += "<td>" + a.Roles[i].compValue[j] + "</td>";
        html += "</tr>";
        }
        html += "</tr>";
        html += "</table>";
      }
    }
    $("#compTable").html(html);
    //Code to select image based on selected car id
});

})
