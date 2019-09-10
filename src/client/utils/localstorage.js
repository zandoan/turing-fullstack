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
  const currentSession = ls.get("sessionID");
  const updatedSession = { ...currentSession, ...data };
  const updatedData = [updatedSession];
  ls.set("data", updatedData);
};

export const getSessionID = () => {
  if (ls.get("sessionID")) {
    return ls.get("sessionID").id;
  }
  return null;
};

export const getSessionCart = id => {
  const sessionData = ls.get("data") || [];
  return sessionData.filter(data => data.id === id)[0];
};
