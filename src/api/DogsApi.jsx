const BIN_ID = import.meta.env.VITE_JSONBIN_BIN_ID;
const X_MASTER_KEY = import.meta.env.VITE_X_MASTER_KEY;

const url = `https://api.jsonbin.io/v3/b/${BIN_ID}/latest`;
const headers = { "X-Bin-Meta": "false" };
if (X_MASTER_KEY) headers["X-Master-Key"] = X_MASTER_KEY;

const toArray = (data) =>
  Array.isArray(data) ? data : Array.isArray(data?.record) ? data.record : [];

export async function fetchDogList() {
  const res = await fetch(url, { headers });
  if (!res.ok) throw new Error(`[${res.status}] ${await res.text()}`);
  const data = await res.json();
  return toArray(data);
}

export async function fetchDogByChip(chip) {
  const list = await fetchDogList();
  return list.find((d) => String(d?.chipNumber) === String(chip)) || null;
}
