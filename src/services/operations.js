import dayjs from "dayjs";
import { apiConfig } from "./api-config";

export async function atendNew({ id, tutor, pet, service, when }) {
  try {
    await fetch(`${apiConfig.baseURL}/atendimentos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, tutor, pet, service, when })
    });
  } catch (error) {
    console.log(error);
    alert("Não foi possível agendar. Tente novamente mais tarde");
    throw error;
  }
}

export async function atendGet({ date }) {
  try {
    const response = await fetch(`${apiConfig.baseURL}/atendimentos`);
    const data = await response.json();

    // Filtra pelo dia selecionado
    return data.filter((a) => dayjs(date).isSame(a.when, "day"));
  } catch (error) {
    console.log(error);
    alert("Não foi possível buscar os agendamentos do dia");
    throw error;
  }
}

export async function atendDelete({ id }) {
  try {
    await fetch(`${apiConfig.baseURL}/atendimentos/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log(error);
    alert("Não foi possível cancelar o agendamento");
    throw error;
  }
}
