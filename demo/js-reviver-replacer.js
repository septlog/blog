let obj = {
  name: 'obj',
  map: new Map(),
};
obj.map.set('k1', 'v1');
obj.map.set('k2', 'v2');
obj.map.set('k3', 'v3');

function replacer(key, value) {
  if (value instanceof Map) {
    return {
      dataType: 'Map',
      value: Array.from(value.entries()), // or with spread: value: [...value]
    };
  } else {
    return value;
  }
}
function reviver(key, value) {
  if (typeof value === 'object' && value !== null) {
    if (value.dataType === 'Map') {
      return new Map(value.value);
    }
  }
  return value;
}
console.log('without replacer:\n' + JSON.stringify(obj));
let str = JSON.stringify(obj, replacer);
console.log('with replacer:\n' + str);
let obj2 = JSON.parse(str, reviver);
console.log(obj2);
