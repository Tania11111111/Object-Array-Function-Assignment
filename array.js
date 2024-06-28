//Assignment 1: Building Your Friend List
//Learning Objective: Practice working with objects and arrays in TypeScript to create a data
//structure. 
//Task: Create a program that manages a simple friend list.
//1.Define an object named people containing an empty array called friends.
//2.Create three separate objects, each representing a friend, with properties like firstName,
//lastName, and optionally id.
//3.Add these friend objects to the friends array within the people object.
//4.output the entire people object to the console, displaying your information and your
//friend list.
//type Friend={
//firstname:string,
//lastname:string,
// id?:string
//}
//let people={
//friends:[] as Friend[]
//}
//let friend1:Friend={
//firstname:"sara",
// lastname:"khan",
// id:"sarakhan@gmail.com"
//}
//let friend2:Friend={
// firstname:"sadia",
//lastname:"abbasi",
//id:"sadiaabbasi124@gmail.com"   
//}
//let friend3:Friend={
//firstname:"aandil",
//lastname:"talib",
//id:"aandiltalib164@gmail.com"   
//};
//people.friends.push(friend1);
//people.friends.push(friend2);
//people.friends.push(friend3);
//console.log(people);
//Assignment 2:Manipulating an Array: Rearranging Words
//Objective:
//Rearrange an array using array methods to form the sentence "I am a student of GIAIC".
//Steps:
//1.Scrambled Array:
//.Start with an array of elements in a scrambled order, like:
var Students = [];
var student1 = { name: "khizar", isSenior: true, Hascompletedassignment: true };
var student2 = { name: "khadija", isSenior: true, Hascompletedassignment: false };
var student3 = { name: "aandil", isSenior: false, Hascompletedassignment: false };
var student4 = { name: "rabia", isSenior: true, Hascompletedassignment: true };
var student5 = { name: "rimsha", isSenior: true, Hascompletedassignment: false };
Students.push(student1, student2, student3, student4, student5);
console.log(Students);
function seniorStudentwithassignment(Students) {
    var seniorStudentwithassignment = [];
    Students.forEach(function (student) {
        if (student.isSenior && student.Hascompletedassignment) {
            seniorStudentwithassignment.push(student);
        }
    });
    return seniorStudentwithassignment;
}
var seniorStudent = seniorStudentwithassignment(Students);
console.log(seniorStudentwithassignment);
seniorStudent.forEach(function (student) {
    console.log(student.name);
});
function updatedlist(students) {
    var updatedclasslist = [];
    students.forEach(function (student) {
        if (!student.isSenior || student.Hascompletedassignment) {
            updatedclasslist.push(student);
        }
    });
    return updatedclasslist;
}
var updatedclasslist = updatedlist(Students);
console.log(updatedclasslist);
updatedclasslist.forEach(function (student) {
    console.log(student.name);
});
