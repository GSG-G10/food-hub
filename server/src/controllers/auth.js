exports.auth = async (req, res) => {
  const { uid, name, email } = req.user;
  console.log(uid, name, email);
};
