export const validateEmail = email => {
  const emailRegEx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const correctEmail = emailRegEx.test(email);

  if (!email) {
    return { ok: false, message: "Email field is required. Please try again." };
  }
  if (!correctEmail) {
    return { ok: false, message: "Email field is invalid. Please try again." };
  }

  return { ok: true, message: "Email is ok." };
};

export const validatePassword = password => {
  if (!password)
    return {
      ok: false,
      message: "Password field is required. Please try again.",
    };
  if (password.length < 6)
    return {
      ok: false,
      message:
        "Passwords must be at least 6 characters long. Please try again.",
    };

  return { ok: true, message: "Password is ok." };
};
