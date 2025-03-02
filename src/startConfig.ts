import CircleBuilder from "./classes/Entities/Builders/CircleBuilder.js";
import PolygonBuilder from "./classes/Entities/Builders/PolygonBuilder.js";
import RectBuilder from "./classes/Entities/Builders/RectBuilder.js";
import Structure from "./classes/Entities/Structure.js";

let circleBuilder = CircleBuilder.instance;
let rectBuilder = RectBuilder.instance;
let polygonBuilder = PolygonBuilder.instance;

let objList: Structure[] = [];

circleBuilder.init();
circleBuilder.setPos(100, 155);
circleBuilder.setDiameter(10);
circleBuilder.setVelocity(3, 30);
circleBuilder.setDencity(1);
objList.push(circleBuilder.build());

circleBuilder.init();
circleBuilder.setPos(195, 100);
circleBuilder.setDiameter(15);
circleBuilder.setVelocity(3, 100);
circleBuilder.setDencity(1);
objList.push(circleBuilder.build());

circleBuilder.init();
circleBuilder.setPos(170, 300);
circleBuilder.setDiameter(20);
circleBuilder.setVelocity(3, 10);
circleBuilder.setDencity(1);
objList.push(circleBuilder.build());

circleBuilder.init();
circleBuilder.setPos(340, 200);
circleBuilder.setDiameter(12);
circleBuilder.pin();
//circleBuilder.setVelocity(3, 45);
//circleBuilder.setDencity(1);
objList.push(circleBuilder.build());

// rectBuilder.init();
// rectBuilder.setPos(550, 400);
// rectBuilder.setWidthHeight(200, 30);
// rectBuilder.setAngle(0);
// rectBuilder.setVelocity(0, 0);
// objList.push(rectBuilder.build());

// polygonBuilder.init();
// polygonBuilder.setThickness(10);
// polygonBuilder.setNewPoint(370, 384);
// polygonBuilder.setNewPoint(281, 403);
// polygonBuilder.setNewPoint(212, 490);
// polygonBuilder.setNewPoint(514, 500);
// polygonBuilder.setVelocity(0, 0);
// polygonBuilder.build();

export default objList;
