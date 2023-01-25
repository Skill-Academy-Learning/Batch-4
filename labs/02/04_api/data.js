/// Fake database or mock databse

let id = 300;

let data = [
  { id: 100, name: "Virat", active: true },
  { id: 200, name: "Rishab", active: false },
];

module.exports = {
  add: function () {
    data.push({ id, name: "Random " + Math.random(), active: true });

    id++;
  },
  get: function () {
    return data;
  },
  del: function (id) {
    const newData = data.filter((element) => {
      return element.id != id;
    });

    data = [...newData];
  },
};
