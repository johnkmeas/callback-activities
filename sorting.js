var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

var result = students.sort(descAge);

function descAge(a, b){
  if(a.name == b.name){
    return b.age - a.age;
  }
  return a.name > b.name;
}

console.log(result);
// sort by name asc and if name is similar sort descdending age