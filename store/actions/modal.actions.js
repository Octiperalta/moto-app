export const OPEN = "OPEN";
export const CLOSE = "CLOSE";

export const open = message => {
  return { type: OPEN, message };
};
export const close = () => {
  return { type: CLOSE };
};
