var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];
function listTopics() {
<<<<<<< HEAD
  
=======

>>>>>>> 92f743627a7e908849486160bbdb338ef950eabd
for (var x = 0; x < topics.length; x++) {
 console.log(topics[x]);
    }
}

function selectTopic() {
if (randomTopic === 'HTML') {
  console.log("Let's study HTML!");
} else if (randomTopic === 'CSS') {
  console.log("Let's study CSS!");
} else if (randomTopic === 'Git') {
  console.log("Let's study Git!");
} else if (randomTopic === 'JavaScript') {
  console.log("Let's study JavaScript!");
} else {
  console.log('Please try again!');
}
}
<<<<<<< HEAD
console.log('Here are the topics we learned through Prework:');
=======
console.log( 'Here are the topics we learned through Prework:');
>>>>>>> 92f743627a7e908849486160bbdb338ef950eabd
listTopics();
console.log('Which topic should we study first?');
selectTopic();