console.log("teste123");

const _addEventListener = EventTarget.prototype.addEventListener;
const _removeEventListener = EventTarget.prototype.removeEventListener;
EventTarget.prototype.events = {};
EventTarget.prototype.addEventListener = function(name, listener, etc) {
  let events = EventTarget.prototype.events;
  if (events[name] == null) {
    events[name] = [];
  }

  if (events[name].indexOf(listener) == -1) {
    events[name].push(listener);
  }

  _addEventListener(name, listener);
};
EventTarget.prototype.removeEventListener = function(name, listener) {
  let events = EventTarget.prototype.events;

  if (events[name] != null && events[name].indexOf(listener) != -1) {
    events[name].splice(events[name].indexOf(listener), 1);
  }

  _removeEventListener(name, listener);
};
EventTarget.prototype.hasEventListener = function(name) {
  let events = EventTarget.prototype.events;
  if (events[name] == null) {
    return false;
  }

  return events[name].length;
};