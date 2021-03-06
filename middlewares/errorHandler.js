const errorHandler = (err, req, res, next) => {
  console.log(err);
  if (err.type === 'custom')
    res.status(err.code).json({ message: err.message });
  res.status(500).json({ message: 'Internal Server Error' });
};

module.exports = errorHandler;
