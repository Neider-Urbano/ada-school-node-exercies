const middlePost = (req, res, next) => {
  const newTask = req.body;
  if (Object.entries(newTask).length === 0) {
    res.status(400).send("Debes enviar informacion");
  } else {
    let arrayKey = Object.keys(newTask);
    if (!validateKeys(arrayKey, "name") || !validateKeys(arrayKey, "state")) {
      res
        .status(400)
        .send("Son requeridas las siguientes propiedades de name, status");
    } else if (!validateValueKeys(newTask, arrayKey)) {
      res.status(400).send("Algunos valores no son correctos");
    } else {
      next();
    }
  }
};

const middlePut = (req, res, next) => {
  const newTask = req.body;
  if (Object.entries(newTask).length === 0) {
    res.status(400).send("Debes enviar informacion");
  } else {
    let arrayKey = Object.keys(newTask);
    if (!validateKeys(arrayKey, "name") || !validateKeys(arrayKey, "state")) {
      res
        .status(400)
        .send("Son requeridas las siguientes propiedades de name, status");
    } else if (!validateValueKeys(newTask, arrayKey)) {
      res.status(400).send("Algunos valores no son correctos");
    } else {
      next();
    }
  }
};

function validateKeys(array, key) {
  let found = false;
  array.map((valueKey) => {
    if (valueKey == key) {
      found = true;
    }
  });
  return found;
}

function validateValueKeys(json, array) {
  let found = true;
  array.map((valueKey) => {
    if (
      json[valueKey] == null ||
      json[valueKey] === 0 ||
      json[valueKey] == undefined ||
      json[valueKey] === false ||
      json[valueKey] === true
    ) {
      found = false;
    }
  });
  return found;
}

module.exports = { middlePost, middlePut };
