const fild = { x: 0, y: 0, size: [] };
const mower = {
  x: 0,
  y: 0,
  oriantation: "",
  path: "",
};

//this function initialize the field. It's process the first input of the test.
const setFild = (size) => {
  const newSize = size.toString();
  const fildSize = fild.size;

  if (newSize.length !== 2) {
    console.log(`[INPUT ERROR] : value [${newSize}] is no correct`);
  } else {
    for (let i = 0; i < newSize.length; i++) {
      fildSize.push(Number(newSize[i]));
    }
    fild.x = fild.size[0];
    fild.y = fild.size[1];
  }
};
//this function initialize the initial mower position. It's process the second & fourth inputs of the test.
const setMowerPosition = (mowerPosition) => {
  mower.oriantation = mowerPosition.charAt(mowerPosition.length - 1);

  const coordinate = [];
  const position = mowerPosition.substring(0, 2);

  for (let i = 0; i < position.length; i++) {
    coordinate.push(Number(position[i]));
  }
  mower.x = coordinate[0];
  mower.y = coordinate[1];
};
//this function initialize the initial mower Path. It's process the third & fifth inputs of the test.
const setMowerPath = (mowerPath) => {
  mower.path = mowerPath;
};
//these 3 functions process each path action.
const turnLeft = (mower) => {
  switch (mower.oriantation) {
    case "S":
      mower.oriantation = "E";
      break;
    case "E":
      mower.oriantation = "N";
      break;
    case "N":
      mower.oriantation = "W";
      break;
    case "W":
      mower.oriantation = "S";
      break;
    default:
      console.log("Unnexpected path input");
  }
};
const turnRight = (mower) => {
  switch (mower.oriantation) {
    case "S":
      mower.oriantation = "W";
      break;
    case "W":
      mower.oriantation = "N";
      break;
    case "N":
      mower.oriantation = "E";
      break;
    case "E":
      mower.oriantation = "S";
      break;
    default:
      console.log("Unnexpected path input");
  }
};
const moveForward = (mower) => {
  switch (mower.oriantation) {
    case "N":
      if (mower.y === fild.y) {
        return mower.y;
      }
      mower.y += 1;
      break;
    case "E":
      if (mower.x === fild.x) {
        return mower.x;
      }
      mower.x += 1;
      break;
    case "S":
      if (mower.y === 0) {
        return mower.y;
      }
      mower.y -= 1;
      break;
    case "W":
      if (mower.x === 0) {
        return mower.x;
      }
      mower.x -= 1;
      break;
    default:
      break;
  }
};
//this function process the mower path.
const mowerAction = (mower) => {
  let paths = mower.path.split("");
  paths.map((path) => {
    if (path === "G") {
      turnLeft(mower);
    } else if (path === "D") {
      turnRight(mower);
    } else if (path === "A") {
      moveForward(mower);
    } else {
      console.log("ERROR : mowerShif");
    }
  });
};

//TEST
setFild(55);

setMowerPosition("44 S");
setMowerPath("GADDAAGADAA");

mowerAction(mower);
console.log(`${mower.x}${mower.y}${mower.oriantation}`);

setMowerPosition("22 N");
setMowerPath("AADGGDADGA");

mowerAction(mower);
console.log(`${mower.x}${mower.y}${mower.oriantation}`);
