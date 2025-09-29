const ageInput = document.getElementById("age");
const nameInput = document.getElementById("name");
const btn = document.getElementById("btn");

function checkVotingEligibility(age, name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000); 
  });
}

const form = document.getElementById("votingForm");
form.addEventListener("submit", (e) => {
  e.preventDefault(); 

  const age = ageInput.value.trim();
  const name = nameInput.value.trim();

  if (!age || !name) {
    alert("Please enter valid details"); 
    return;
  }

  checkVotingEligibility(Number(age), name)
    .then((msg) => alert(msg))
    .catch((msg) => alert(msg));
});
