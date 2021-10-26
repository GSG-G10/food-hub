exports.auth = async (req, res) => {
  const { authorization } = req.headers;
  res.json({ success: true, token: authorization });
  // res.send('HELLO FROM SERVER !');
};
