import dayjs from "dayjs";
import { atendNew, atendDelete } from "../services/operations";

const form = document.querySelector(".form");
const modalTime = document.getElementById("modalTime");
const modalDate = document.getElementById("modalDate");

const listMorning = document.getElementById("listMorning");
const listAfternoon = document.getElementById("listAfternoon");
const listNight = document.getElementById("listNight");

function periodByHour(hhmm) {
  const hour = Number(hhmm.split(":")[0]);
  if (hour < 12) return "morning";
  if (hour < 18) return "afternoon";
  return "night";
}

function getListByPeriod(period) {
  if (period === "morning") return listMorning;
  if (period === "afternoon") return listAfternoon;
  return listNight;
}

function renderAtendimento({ id, tutor, pet, service, time }) {
  const period = periodByHour(time);  
  const list = getListByPeriod(period);

  list.innerHTML += `
    <div class="row" data-id="${id}">
      <div class="row__time">${time}</div>
      <div class="row__main">
        <div class="row__pet"><strong>${pet}</strong> <span>/ ${tutor}</span></div>
      </div>
      <div class="row__service">${service}</div>
      <button class="row__remove" type="button">Remover agendamento</button>
    </div>
  `;
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const tutor = document.getElementById("tutorName").value.trim();
  const pet = document.getElementById("petName").value.trim();
  const service = document.getElementById("serviceDesc").value.trim();
  const time = modalTime.value; // "14:00"
  const date = modalDate.value; // "2026-01-18"

  const when = dayjs(`${date} ${time}`).toISOString(); // 
  const id = Date.now(); // 

  try {
    await atendNew({ id, tutor, pet, service, when });
    renderAtendimento({ id, tutor, pet, service, time });
    form.reset();
  } catch (error) {
    alert("Não foi possível agendar um novo atendimento");
    console.log(error);
  }
});

document.addEventListener("click", async (event) => {
  const btnDelete = event.target.closest(".row__remove"); 
  if (!btnDelete) return;

  const row = btnDelete.closest(".row");
  const id = row?.dataset?.id;
  if (!id) return;

  try {
    await atendDelete({ id });
    row.remove();
    alert("Agendamento cancelado com sucesso!");
  } catch (error) {
    alert("Não foi possível cancelar o agendamento");
    console.log(error);
  }
});
