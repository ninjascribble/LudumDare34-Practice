let messageTypes = {};

function register (messageType) {
  if (messageTypes[messageType]) {
    throw new Error(`messenger: messageType ${messageType} is already registered`);
  }

  messageTypes[messageType] = [];
}

function dispatch (messageType, ...args) {
  if (!messageTypes[messageType]) {
    throw new Error(`messenger: cannot dispatch messageType ${messageType}, try registering first`);
  }

  messageTypes[messageType].forEach(listener => {
    listener.callback.apply(listener.context, args);
  });
}

function listen (messageType, callback, context) {
  if (!messageTypes[messageType]) {
    throw new Error(`messenger: cannot listen to messageType ${messageType} since it is not registered`);
  }

  let listener = {
    callback,
    context
  };

  messageTypes[messageType].push(listener);
}

export default {
  register,
  dispatch,
  listen
};
