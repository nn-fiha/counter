function setInitialValue() {
  document.getElementById("marks-inp").value = 0;
}

function calculateGrade() {
  const marks = parseInt(document.getElementById("marks-inp").value);
  
  if (marks >= 80 && marks <= 100) {
    document.getElementById("grade").innerText = "A+";
  }
}

setInitialValue();
