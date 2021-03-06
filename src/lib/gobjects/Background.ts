import { GObject } from "../GObject";
import { Vector2 } from "../Utils";
import { Rectangle } from "../assets/Rectangle";

export class Background extends GObject {
  color: string;

  constructor(props: {
    color: string,
    children?: GObject[],
    dimensions?: Vector2
  }) {
    super({
      position: new Vector2(0, 0),
      dimensions: props.dimensions || new Vector2(500, 500),
      scale: 1,
      rotation: 0,
      children: props.children
    });
    this.color = props.color;
    this.sprite = new Rectangle(this.dimensions.getX(), this.dimensions.getY(), this.color);
  }
}
