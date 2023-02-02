let testScore = 89;
let grade;
let collegeStudent = true;
if (testScore > 90) {
  grade = "A";
} else if (testScore >= 80) {
  grade = "B";
} else if (testScore >= 70) {
  grade = "c";
} else if (testScore >= 60) {
  grade = "d";
} else {
  if (collegeStudent) {
    grade = "u";
  } else {
    grade = "f";
  }
}
