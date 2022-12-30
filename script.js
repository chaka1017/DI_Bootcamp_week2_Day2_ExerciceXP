// 1
let sentence = "The movie is not that bad, I like it";
// 2
let wordNot = sentence.search("not");
// 3
let wordBad = sentence.search("bad");

// 4
if (wordBad > wordNot) {
  sentence = sentence.replace("not that bad", "good");
} else {
  console.log(sentence);
}
// 5

// wordBad =
