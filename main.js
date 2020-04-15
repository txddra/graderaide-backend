/******************
 * YOUR CODE HERE *
 ******************/
const Grade = function (assignment, score){
  return {
    assignment,
    score
  }
}
const Term = function(hours, theGrades){
  let grades = []
  return{
hours

  }
  }
const Course = function(name, term){
  return {
name
  }
}
const Student = function(name,course ){
  return {
name,
course


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
