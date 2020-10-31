import React from "react";
import { Label, Card, Indicator } from "../../../../componets";
import { getRandomColor } from "../../../../utils/utils";

export interface PanicCourseProp {
  value: number;
  indicatorColor?: string;
}

export interface PanicCourseState {
  count: number;
}

const PANIC_RANGE = 1;
const MAX_COUNT = 3;

export class PanicCourse extends React.Component<
  PanicCourseProp,
  PanicCourseState
> {
  constructor(props: PanicCourseProp) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentDidUpdate(): void {
    if (this.state.count === MAX_COUNT) {
      throw new Error("Stop! You are very afraid");
    } else {
      this.setState({
        count: this.state.count + 1,
      });
    }
  }

  shouldComponentUpdate(nextProps: PanicCourseProp): boolean {
    return nextProps.value - this.props.value > PANIC_RANGE;
  }

  render(): React.ReactNode {
    const { count } = this.state;
    const { indicatorColor } = this.props;
    const color = indicatorColor ? indicatorColor : getRandomColor();

    return (
      <Card>
        <Indicator type={"card"} color={color} />
        <span>{`If the course is grov than $${PANIC_RANGE}, you have panic`}</span>
        <span>{`If the panic counter is ${MAX_COUNT}, there will be an error`}</span>
        <Label value={`Panic count: ${count}`} />
      </Card>
    );
  }
}
