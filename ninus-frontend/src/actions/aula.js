import api from "@/api/api";

export async function getAulas() {
    const resp = await api.get('/api/v1/class/all');
    return resp.data["_embedded"]['classNinusDetailsList'];
}

