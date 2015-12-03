const events = [];

function push (event, time) {
  events.push({
    time: time,
    event: event
  });

  events.sort(function (a, b) {
    return a - b;
  });
}

function pop () {
  return events.shift();
}

function peek () {
  return events[0];
}

// check to see if events are pending
// TODO: implement pausing and non-pausing events
// TODO: grab all non-pausing events until a pausing event is found
function getActive (time) {
  const event = peek();

  if (event && event.time < time) {
    return pop().event;
  }
}

export default {
  push,
  pop,
  peek,
  getActive
};
