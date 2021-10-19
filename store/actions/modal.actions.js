export const OPEN = "OPEN";
export const CLOSE = "CLOSE";

export const openModal = message => {
  return { type: OPEN, message };
};
export const closeModal = () => {
  return { type: CLOSE };
};
