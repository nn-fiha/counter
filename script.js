function setInitialValue() {
  document.getElementById("marks-inp").value = 0;
}

function calculateGrade() {
  const marks = parseInt(document.getElementById("marks-inp").value);
  if(marks <= 0 || marks >=100){
    document.getElementById("grade").innerText = "Invalid Marks";}
  else if (marks >= 80 && marks <= 100) {
    document.getElementById("grade").innerText = "A+";
  }
  else if(marks >= 70 && marks <= 79){
    document.getElementById("grade").innerText = "A";
  }
  else if (marks >= 60 && marks <= 69) {
    document.getElementById("grade").innerText = "A-";
  }
  else if(marks >= 50 && marks <= 59){
    document.getElementById("grade").innerText = "B";
  }
  else if (marks >= 40 && marks <= 49) {
    document.getElementById("grade").innerText = "B-";
  }
  else if(marks >= 33 && marks <= 39){
    document.getElementById("grade").innerText = "C";
  }
  else if(marks >= 0 && marks <= 32){
    document.getElementById("grade").innerText = "F";
  }


}

setInitialValue();
