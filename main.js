/******************
 * YOUR CODE HERE *
 ******************/
const Grade = function (assignment, score){
  return {
    assignment,
    score
  }
}
const Term = function(hours, grades){
  
  return{
hours,
grades:[]
  }
  }
const Course = function(name, term){
  return {
name
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
