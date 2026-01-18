import dayjs from "dayjs"

const hoursOpen = [
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00"
]

const modalTime = document.getElementById("modalTime")

const now = dayjs();
const currentHour = now.hour()

modalTime.innerHTML = ""

for(const h of hoursOpen){

    const hourNumber = Number(h.split(":")[0]); // "14:00" -> 14

    if(hourNumber >= currentHour){
        modalTime.innerHTML += `<option value="${h}">${h}</option>`;
    }
}
