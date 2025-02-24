import CircleBuilder from "./classes/Builders/CircleBuilder.js";
import PolygonBuilder from "./classes/Builders/PolygonBuilder.js";
import RectBuilder from "./classes/Builders/RectBuilder.js";
export const htmlObjList = document.querySelector(".container .obj_list");
export const circleBuilder = CircleBuilder.instance;
export const rectBuilder = RectBuilder.instance;
export const polygonBuilder = PolygonBuilder.instance;
