export const isEmail = (email: string) => {
  const emailRegExp = "[a-z0-9]+@[a-z]+.[a-z]{2,3}";
  const regex = new RegExp(emailRegExp);

  if (regex.test(email)) {
    return true;
  }
  return false;
};

export const isMoreThan8Length = (pw: string) => {
  if (pw.length >= 8) {
    return true;
  }
  return false;
};

export const doPasswordMatch = (pw: string, checkPw: string) => {
  if (pw === checkPw) {
    return true;
  }
  return false;
};
