function setInitialValue() {
  document.getElementById("marks-inp").value = 0;
}

function showGrade(grade) {
  document.getElementById("grade").innerText = grade;
}

function isValidateIuput(input) {
  return (input >= 0 && input <= 100);
}

function calculateGrade() {
  const marks = parseInt(document.getElementById("marks-inp").value);

  if (!isValidateIuput(marks)) {
    alert("Invalid input");
    return;
  } 

  if (marks >= 80 && marks <= 100) {
    showGrade("A+");
  } else if (marks >= 70 && marks < 80) {
    showGrade("A");
  } else if (marks >= 60 && marks < 70) {
    showGrade("A-");
  } else if (marks >= 50 && marks < 60) {
    showGrade("B");
  } else if (marks >= 40 && marks < 50) {
    showGrade("C");
  } else if (marks >= 33 && marks < 40) {
    showGrade("D");
  } else if (marks >= 0 && marks < 33) {
    showGrade("F");
  }
}

setInitialValue();
