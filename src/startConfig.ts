import Structure from "./classes/Structure.js";
import { circleBuilder, polygonBuilder, rectBuilder } from "./static.js";

let objList: Structure[] = [];

circleBuilder.init();
circleBuilder.setPos(100, 150);
circleBuilder.setR(10);
objList.push(circleBuilder.build());

rectBuilder.init();
rectBuilder.setPos(200, 100);
rectBuilder.setWidthHeight(100, 10);
rectBuilder.setAngle(20);
objList.push(rectBuilder.build());

polygonBuilder.init();
polygonBuilder.setThickness(5);
polygonBuilder.setNewPoint(200, 250);
polygonBuilder.setNewPoint(400, 350);
polygonBuilder.setNewPoint(330, 500);
objList.push(polygonBuilder.build());

export default objList;
