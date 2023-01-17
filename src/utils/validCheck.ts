export const isEmail = (email: string) => {
  const emailRegExp = "[a-z0-9]+@[a-z]+.[a-z]{2,3}";
  const regex = new RegExp(emailRegExp);
  return regex.test(email);
};

export const isMoreThan8Length = (pw: string) => {
  return pw.length >= 8;
};

export const doMatch = (a: string, b: string) => {
  return a === b;
};
