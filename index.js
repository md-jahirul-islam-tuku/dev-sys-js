function handleComplete(id, work) {
  let assignText = document.getElementById('assign-num').innerText;
  let assignNum = parseInt(assignText);
  const btnOne = document.getElementById(id);
  btnOne.classList.remove('bg-blue-600');
  btnOne.setAttribute('disabled', 'disabled');
  btnOne.classList.add('bg-blue-200');
  if (assignNum === 1) {
    document.getElementById('assign-num').innerText = '';
  }
  else {
    document.getElementById('assign-num').innerText = assignNum - 1;
  }
  let headText = document.getElementById('head-num').innerText;
  let headNum = parseInt(headText);
  document.getElementById('head-num').innerText = headNum + 1;
  const activityContainer = document.getElementById('activity');
  const newParagraph = document.createElement('p');
  const workText = document.getElementById(work).innerText;
  newParagraph.textContent = `You have Complete The Task ${workText} at ${time}`;
  newParagraph.classList.add("bg-violet-50", "p-3", "rounded-xl", "text-gray-400", "font-medium", "mb-6");
  activityContainer.appendChild(newParagraph)
};

document.getElementById('clear-history').addEventListener('click', function () {
  const activityContainer = document.getElementById('activity');
  activityContainer.innerHTML = '';
});

function dayOfWeek() {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const today = new Date();
  const dayName = days[today.getDay()];
  return dayName;
}
document.getElementById('day-of-week').innerText = dayOfWeek();

const date = new Date();
const formatted = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
});

document.getElementById("current-date").innerText = formatted;

const time = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true
});





