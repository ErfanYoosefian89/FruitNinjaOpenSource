import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Balloon1 from "./Balloon1/Balloon1.js";
import Button1 from "./Button1/Button1.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Button3 from "./Button3/Button3.js";
import FoodTruck from "./FoodTruck/FoodTruck.js";

const stage = new Stage({ costumeNumber: 3 });

const sprites = {
  Balloon1: new Balloon1({
    x: 68,
    y: -149,
    direction: 90,
    costumeNumber: 7,
    size: 100,
    visible: true
  }),
  Button1: new Button1({
    x: -214,
    y: -153,
    direction: 90,
    costumeNumber: 1,
    size: 50,
    visible: true
  }),
  Sprite1: new Sprite1({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Button3: new Button3({
    x: 0,
    y: -20,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: false
  }),
  FoodTruck: new FoodTruck({
    x: 58,
    y: 63,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  })
};

const project = new Project(stage, sprites);
export default project;
