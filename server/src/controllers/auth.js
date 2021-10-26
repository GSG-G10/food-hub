exports.login = async (req, res) => {
  const info = req.headers;
  console.log(info);
  res.json({ success: true, token: info });
};
