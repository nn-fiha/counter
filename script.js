function setInitialValue() {
  document.getElementById("marks-inp").value = 0;
}

function showGrade(grade) {
  document.getElementById("grade").innerText = grade;
}

function isValidateInput(input){
  return (input >= 0 && input <= 100) ? true : false;
}

function calculateGrade() {
  const marks = parseInt(document.getElementById("marks-inp").value);
  if (!isValidateInput(marks)) {
    alert("Invalid Input!!!");
    return;
  } 
  if (marks >= 80 && marks <= 100) {
    showGrade("A+");
  } else if (marks >= 70 && marks <= 79) {
    showGrade("A");
  } else if (marks >= 60 && marks <= 69) {
    showGrade("A-");
  } else if (marks >= 50 && marks <= 59) {
    showGrade("B");
  } else if (marks >= 40 && marks <= 49) {
    showGrade("C-");
  } else if (marks >= 33 && marks <= 39) {
    showGrade("D");
  } else if (marks >= 0 && marks <= 32) {
    showGrade("F");
  }
}

setInitialValue();
