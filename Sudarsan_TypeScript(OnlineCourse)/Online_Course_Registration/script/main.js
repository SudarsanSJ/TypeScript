var autoUserId = 1000;
var autoCourseId = 100;
var auserid;
var aname;
var User = /** @class */ (function () {
    function User(name, age, mobileNo) {
        autoUserId++;
        this.name = name;
        this.age = age;
        this.mobileNo = mobileNo;
        this.userId = +autoUserId;
    }
    return User;
}());
var Course = /** @class */ (function () {
    function Course(coursename, userId, name) {
        autoCourseId++;
        this.coursename = coursename;
        this.userId = userId;
        this.name = name;
        this.courseId = 'C' + autoCourseId;
    }
    return Course;
}());
var userlist = new Array();
var courselist = [];
var user1 = new User("sudarsan", 23, 7558183970);
var user2 = new User("Nagaraj", 24, 9876543210);
userlist.push(user1);
userlist.push(user2);
function NewUser() {
    document.getElementById("main").style.visibility = "hidden";
    document.getElementById("newuser").style.visibility = "visible";
}
function LogIn() {
    document.getElementById("main").style.visibility = "hidden";
    document.getElementById("login").style.visibility = "visible";
}
function Register() {
    var name = document.getElementById("name").value;
    var age = parseInt(document.getElementById("age").value);
    var mobileNo = parseInt(document.getElementById("mobileno").value);
    var newuser = new User(name, age, mobileNo);
    userlist.push(newuser);
    alert("Succesfully Registered");
    for (var i = 0; i < userlist.length; i++) {
        if (userlist[i].mobileNo == mobileNo) {
            alert("Please Note Your User ID : " + userlist[i].userId);
        }
    }
    document.getElementById("newuser").style.visibility = "hidden";
    document.getElementById("main").style.visibility = "visible";
}
function Validate() {
    var j = 0;
    var id = parseInt(document.getElementById("userid").value);
    for (var i = 0; i < userlist.length; i++) {
        if (id == userlist[i].userId) {
            auserid = userlist[i].userId;
            aname = userlist[i].name;
            j = 1;
            alert("Verified :)");
            document.getElementById("login").style.visibility = "hidden";
            document.getElementById("course").style.visibility = "visible";
        }
    }
    if (j == 0) {
        alert("Such UserID is not Found :(");
    }
}
function Available() {
    document.getElementById("course").style.visibility = "hidden";
    document.getElementById("available").style.visibility = "visible";
}
function Courses() {
    var selectedcourse = document.getElementById("selection").value;
    var course = new Course(selectedcourse, auserid, aname);
    courselist.push(course);
    alert("Succesfully Enrolled");
    document.getElementById("available").style.visibility = "hidden";
    document.getElementById("course").style.visibility = "visible";
}
function Enroll() {
    var j = 0;
    document.getElementById("course").style.visibility = "hidden";
    document.getElementById("enrolled").style.visibility = "visible";
    document.getElementById("labenroll").innerHTML = "";
    for (var i = 0; i < courselist.length; i++) {
        if (auserid == courselist[i].userId) {
            j++;
            document.getElementById("labenroll").innerHTML += " ".concat(courselist[i].courseId, "|| ").concat(courselist[i].coursename, " ---Next---");
            document.getElementById("days").innerHTML = "".concat(j * 5, " days Required To Complete the Courses");
        }
    }
    if (j == 0) {
        document.getElementById("labenroll").innerHTML = "No Courses Enrolled";
        document.getElementById("days").innerHTML = "";
    }
}
function Return() {
    document.getElementById("enrolled").style.visibility = "hidden";
    document.getElementById("main").style.visibility = "visible";
}
function Navigate() {
    document.getElementById("enrolled").style.visibility = "hidden";
    document.getElementById("course").style.visibility = "visible";
}
function Mainmenu() {
    document.getElementById("course").style.visibility = "hidden";
    document.getElementById("main").style.visibility = "visible";
}
