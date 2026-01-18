import dayjs from "dayjs";

const hoursOpen = [
  "09:00","10:00","11:00","12:00","13:00","14:00",
  "15:00","16:00","17:00","18:00","19:00","20:00","21:00"
];

const modalDate = document.getElementById("modalDate");
const modalTime = document.getElementById("modalTime");

function renderHours() {
  const selected = dayjs(modalDate.value); // yyyy-mm-dd
  const today = dayjs();

  modalTime.innerHTML = "";

  // Data no passado: não deixa agendar
  if (selected.isBefore(today, "day")) {
    modalTime.innerHTML = `<option value="" disabled selected>Data inválida</option>`;
    modalTime.disabled = true;
    return;
  }

  modalTime.disabled = false;

  // Se for futuro: mostra tudo
  if (selected.isAfter(today, "day")) {
    for (const h of hoursOpen) {
      modalTime.innerHTML += `<option value="${h}">${h}</option>`;
    }
    return;
  }

  // Se for hoje: filtra só horários que ainda não passaram
  const now = dayjs();
  const selectedHours = hoursOpen.filter((h) => {
    const slot = dayjs(`${modalDate.value} ${h}`); // hoje + hora
    return slot.isAfter(now); // só os futuros
  });

  if (selectedHours.length === 0) {
    modalTime.innerHTML = `<option value="" disabled selected>Sem horários disponíveis</option>`;
    modalTime.disabled = true;
    return;
  }

  for (const h of selectedHours) {
    modalTime.innerHTML += `<option value="${h}">${h}</option>`;
  }
}

// Quando abrir o modal, já define hoje e renderiza
modalDate.value = dayjs().format("YYYY-MM-DD");
modalDate.min = dayjs().format("YYYY-MM-DD"); // bloqueia datas passadas no input
renderHours();

// Atualiza horários quando mudar a data
modalDate.addEventListener("change", renderHours);
