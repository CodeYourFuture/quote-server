const errorHandler = (err, res, next) => {
  console.log(err.name);
  console.error(err.stack);
  res.status(500).send(err.message);
};

module.exports = errorHandler;
