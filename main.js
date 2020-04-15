/******************
 * YOUR CODE HERE *
 ******************/
const Grade = function (assignment, score){
  return {
    assignment:assignment,
    score:score
  }
}
const Term = function(hours, grades){
  
  return{
hours:hours,
grades:[], 
addGrade: function(givAsn,givScore){
  this.grades.push(Grade(givAsn,givScore))
 
}  
  }

  }
const Course = function(name, terms){
  return {
name:name,
terms:[],
addTerm: function(gHours, gGrades){
this.terms.push(Term(gHours, gGrades))
} 
}
}
const Student = function(name,course,term =1, courses){
  return {
name: name,
course:course, 
term:term,
courses :[],
addCourse : function(gName, gTerms){
this.courses.push(Course(gName, gTerms))
},
getAverage : function(){}
  }
}

/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/

if (typeof Grade === 'undefined') {
  Grade = undefined;
}

if (typeof Term === 'undefined') {
  Term = undefined;
}

if (typeof Course === 'undefined') {
  Course = undefined;
}

if (typeof Student === 'undefined') {
  Student = undefined;
}


module.exports = {
  Grade,
  Term,
  Course,
  Student,
}
