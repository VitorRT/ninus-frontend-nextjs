"use server";

import api from "@/api/api";

const baseUrl = "http://localhost:8080";

export async function createAccount(formData) {
  try {
    const options = {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: {
        "Content-Type": "application/json"
      }
    };

    const resp = await fetch(`${baseUrl}/api/v1/class/`, options);
    
    if (resp.data && resp.data["name"]) {
      return resp.data;
    } else {
      throw new Error("Resposta inválida do servidor");
    }
  } catch (error) {
    console.error("Erro ao criar a classe:", error);
    throw error;
  }
}
