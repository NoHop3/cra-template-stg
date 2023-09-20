export const isEmailValid = (email: string) => {
  let errorMessage = '';

  if (email) {
    const isValidEmail =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
      !email.startsWith('.') &&
      !email.startsWith('@') &&
      !email.endsWith('.') &&
      !email.endsWith('@');

    if (!isValidEmail) {
      errorMessage = "It must contain '@' and '.' and not start or end with '.' or '@'";
    } else if (email.length < 7 || (email.length > 30 && email.length !== 0)) {
      errorMessage = 'Must be between 7 and 30 characters';
    }
  }

  return errorMessage;
};
