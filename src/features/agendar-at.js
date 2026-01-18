const form = document.querySelector(".form"); 
const modalTime = document.getElementById("modalTime");

const listMorning = document.getElementById("listMorning");
const listAfternoon = document.getElementById("listAfternoon");
const listNight = document.getElementById("listNight");

function periodByHour(hhmm) {
  const hour = Number(hhmm.split(":")[0]); // "18:00" -> 18

  if (hour < 12) return "morning";
  if (hour < 18) return "afternoon";
  return "night"; // >= 18
}

function getListByPeriod(period) {
  if (period === "morning") return listMorning;
  if (period === "afternoon") return listAfternoon;
  return listNight;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameTutor = document.getElementById("tutorName").value.trim();
  const namePet = document.getElementById("petName").value.trim();
  const service = document.getElementById("serviceDesc").value.trim();
  const hour = modalTime.value; // "14:00"

  const period = periodByHour(hour);
  const list = getListByPeriod(period);

  list.innerHTML += `
    <div class="row">
      <div class="row__time">${hour}</div>
      <div class="row__main">
        <div class="row__pet"><strong>${namePet}</strong> <span>/ ${nameTutor}</span></div>
      </div>
      <div class="row__service">${service}</div>
      <button class="row__remove" type="button">Remover agendamento</button>
    </div>
  `;

  form.reset();
});
