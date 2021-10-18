export const validateEmail = email => {
  const emailRegEx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const correctEmail = emailRegEx.test(email);

  if (!email) return { ok: false, message: "Email is required." };
  if (!correctEmail) return { ok: false, message: "Email is invalid." };

  return { ok: true };
};

export const validatePassword = password => {
  if (!password) return { ok: false, message: "Password is required." };
  if (password.length < 6)
    return {
      ok: false,
      message: "Sorry, that password is not strong enough. Passwords must be at least 6 characters long.",
    };

  return { ok: true };
};
