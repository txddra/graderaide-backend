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
addGrade: function(given){
  this.push(given)
 
}  
  }

  }
const Course = function(name, terms){
  return {
name:name,
terms:[]
  }

}
const Student = function(name,course,term =1){
  return {
name,
course, 
term


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
