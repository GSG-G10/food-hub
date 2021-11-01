exports.auth = async (req) => {
  const { uid, name, email } = req.user;
  // eslint-disable-next-line no-console
  console.log(uid, name, email);
};
