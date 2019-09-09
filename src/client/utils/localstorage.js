import ls from "local-storage";

const nanoid = require("nanoid");

export const createSession = () => {
  const id = nanoid();
  ls.set("sessionID", { id });
  return id;
};

export const clearSession = () => {
  ls.clear();
};

export const updateSession = (id, data) => {
  // const currentSession = ls.get("sessionID");
  // const updatedSession = { ...currentSession, data };
  ls.set("data", data);
};

export const getSession = () => {
  return ls.get("sessionID");
};
