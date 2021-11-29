let autoUserId=1000;
let autoCourseId=100;
let auserid;
let aname;
class User
{
    name:string;
    age:number;
    mobileNo:number;
    userId:number;
    constructor(name:string,age:number,mobileNo:number)
    {
        autoUserId++;

        this.name=name;
        this.age=age;
        this.mobileNo=mobileNo;
        this.userId=+autoUserId;
    }
}
class Course
{
    coursename:string;
    userId:number;
    name:string;
    courseId:string;
    constructor(coursename:string,userId:number,name:string)
    {
        autoCourseId++;
        this.coursename=coursename;
        this.userId=userId;
        this.name=name;
        this.courseId='C'+autoCourseId;
    }

}

let userlist:Array<User>=new Array<User>();
let courselist:Array<Course>=[];
let user1=new User("sudarsan",23,7558183970);
let user2=new User("Nagaraj",24,9876543210);

userlist.push(user1);
userlist.push(user2);

function NewUser()
{
    (document.getElementById("main") as HTMLElement).style.visibility="hidden";
    (document.getElementById("newuser") as HTMLElement).style.visibility="visible";
}
function LogIn()
{
    (document.getElementById("main") as HTMLElement).style.visibility="hidden";
    (document.getElementById("login") as HTMLElement).style.visibility="visible";
}
function Register()
{
    let name=(document.getElementById("name") as HTMLInputElement).value;
    let age=parseInt((document.getElementById("age") as HTMLInputElement).value);
    let mobileNo=parseInt((document.getElementById("mobileno") as HTMLInputElement).value);
    let newuser=new User(name,age,mobileNo);
    userlist.push(newuser);
    alert("Succesfully Registered");
    for(let i=0;i<userlist.length;i++)
    {
        if(userlist[i].mobileNo==mobileNo)
        {
            alert("Please Note Your User ID : "+userlist[i].userId);
        }
    }
   
    (document.getElementById("newuser") as HTMLElement).style.visibility="hidden";
    (document.getElementById("main") as HTMLElement).style.visibility="visible";
}
function Validate()
{
    let j=0;
    let id=parseInt((document.getElementById("userid") as HTMLInputElement).value);
    for(let i=0;i<userlist.length;i++)
    {
        if(id==userlist[i].userId)
        {
            auserid=userlist[i].userId;
            aname=userlist[i].name;
            j=1;
            alert("Verified :)");
            (document.getElementById("login") as HTMLElement).style.visibility="hidden";
            (document.getElementById("course") as HTMLElement).style.visibility="visible";
        }
    }
    if(j==0)
    {
        alert("Such UserID is not Found :(");
    }

}
function Available()
{
    (document.getElementById("course") as HTMLElement).style.visibility="hidden";
    (document.getElementById("available") as HTMLElement).style.visibility="visible";
}
function Courses()
{
    let selectedcourse=(document.getElementById("selection") as HTMLInputElement).value;
    let course=new Course(selectedcourse,auserid,aname)
    courselist.push(course)
    alert("Succesfully Enrolled");
    (document.getElementById("available") as HTMLElement).style.visibility="hidden";
    (document.getElementById("course") as HTMLElement).style.visibility="visible";

}
function Enroll()
{
    let j=0;
    (document.getElementById("course") as HTMLElement).style.visibility="hidden";
    (document.getElementById("enrolled") as HTMLElement).style.visibility="visible";
    document.getElementById("labenroll").innerHTML ="";
    for(let i=0;i<courselist.length;i++)
    {
        if(auserid==courselist[i].userId)
        {
            j++;
            document.getElementById("labenroll").innerHTML +=` ${courselist[i].courseId}|| ${courselist[i].coursename} ---Next---`;  
            document.getElementById("days").innerHTML=`${j*5} days Required To Complete the Courses`
        }
    }
    if(j==0)
    {
        document.getElementById("labenroll").innerHTML ="No Courses Enrolled";
        document.getElementById("days").innerHTML ="";
        
    }
}
function Return()
{
    (document.getElementById("enrolled") as HTMLElement).style.visibility="hidden";
    (document.getElementById("main") as HTMLElement).style.visibility="visible";

}
function Navigate()
{
    (document.getElementById("enrolled") as HTMLElement).style.visibility="hidden";
    (document.getElementById("course") as HTMLElement).style.visibility="visible";
}
function Mainmenu()
{
    
    (document.getElementById("course") as HTMLElement).style.visibility="hidden";
    (document.getElementById("main") as HTMLElement).style.visibility="visible";
}