var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]
function theBeatlesPlay (musicians, instruments) {
  var array = []
  for (let i=0; i<musicians.length; i++){
  array.push (`${musicians[i]} plays ${instruments[i]}`)
}
return array
}
const facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"]

function johnLennonFacts(facts) {
  var array = []
  let i = 0;
  while (facts.length > i) {
    array.push(`${facts[i]}!!!`)
    i++
  }
  return array
}
function iLoveTheBeatles (n) {
  var array = []
  do {
    array.push('I love the Beatles!')
  n++
}
while (n < 15)
return array
}
