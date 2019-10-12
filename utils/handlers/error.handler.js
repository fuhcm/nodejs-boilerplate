const errorHandler = fn => (req, res, next) =>
  fn(req, res, next).catch && fn(req, res, next).catch(err => next(err));

const addErrorHandlerWrapper = handlers => {
  const handlersArr = Object.keys(handlers).map(key => ({
    key: key,
    value: errorHandler(handlers[key])
  }));

  const wrappedHandlers = handlersArr.reduce(
    (obj, item) => ((obj[item.key] = item.value), obj),
    Object.create(null)
  );

  return wrappedHandlers;
};

module.exports = addErrorHandlerWrapper;
