import React from "react";
import { Card, Indicator, Label } from "../../../../componets";
import { getRandomColor } from "../../../../utils/utils";
import { AppApi } from "../../../../services/AppApi";

const isUPressed = (evt: KeyboardEvent): boolean =>
  evt.key === "U" || evt.key === "u";

interface RandomCourseProp {
  [key: string]: unknown;
}

interface RandomCourseState {
  value: number;
  color: string;
}

export class RandomCourse extends React.Component<
  RandomCourseProp,
  RandomCourseState
> {
  constructor(props: RandomCourseProp) {
    super(props);
    this.state = {
      value: 0,
      color: "#ff0000",
    };

    this.handleUPressed = this.handleUPressed.bind(this);
  }

  private handleUPressed(evt: KeyboardEvent): void {
    if (isUPressed(evt)) {
      AppApi.getRandomUSDAsync().then((value) => {
        this.setState({
          value,
          color: getRandomColor(),
        });
      });
    }
  }

  componentDidMount(): void {
    document.addEventListener("keydown", this.handleUPressed);
  }

  componentWillUnmount(): void {
    document.removeEventListener("keydown", this.handleUPressed);
  }

  render(): React.ReactNode {
    const { value, color } = this.state;

    return (
      <Card>
        <Indicator type={"card"} color={color} />
        <span>{`For get Random Course from server press "U":`}</span>
        <Label value={`$${value}`} />
      </Card>
    );
  }
}
