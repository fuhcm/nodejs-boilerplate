function errorHandler(fn) {
  return (req, res, next) => {
    const routePromise = fn(req, res, next);
    routePromise.catch && routePromise.catch(err => next(err));
  };
}

function addErrorHandlerWrapper(handlers) {
  function createWrapper(key, handler) {
    return {
      key: key,
      value: errorHandler(handler)
    };
  }

  const handlersArr = Object.keys(handlers).map(key =>
    createWrapper(key, handlers[key])
  );

  const initialObj = Object.create(null);
  const wrappedHandlers = handlersArr.reduce(
    (obj, item) => ((obj[item.key] = item.value), obj),
    initialObj
  );

  return wrappedHandlers;
}

module.exports = addErrorHandlerWrapper;
