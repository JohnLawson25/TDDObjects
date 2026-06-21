function sortStudents(studentA, studentB) {
  if(studentA.name < studentB.name){
    return studentA;
  }
  else{
    if(studentA.name === studentB.name){
      return studentA.cohort
      }
    }
  }

  sortStudents({cohort: 6, name: "Alice"}, {cohort: 1, name: "Alice"})


 
 
export function increment(count) {
   doo = count["value"];
   console.log(doo);
}

 increment({value: -5}); 