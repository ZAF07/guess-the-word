/* eslint-disable no-console */
import bcrypt from 'bcrypt';

const hashPassword = (password) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  console.log(hash);
  return hash;
};

const authLogIn = async (userPassword, hashedPassword) => {
  try {
    const auth = await bcrypt.compare(userPassword, hashedPassword);
    return auth;
  } catch (error) {
    console.log('BCRYPT ERROR AUTH.JS', error);
  }
};

export { hashPassword, authLogIn };
