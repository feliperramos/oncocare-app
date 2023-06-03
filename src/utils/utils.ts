export const validate = (email: string) => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

  if (reg.test(email) === false) {
    return false;
  } else {
    return true;
  }
};
