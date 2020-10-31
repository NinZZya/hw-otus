import React from "react";
import { Card, Indicator, Label } from "../../../../componets";
import { getRandomColor } from "../../../../utils/utils";

export interface MaxCourseProp {
  value: number;
  indicatorColor?: string;
}

export interface MaxCourseState {
  maxValue: number;
  color: string;
}

export class MaxCourse extends React.PureComponent<
  MaxCourseProp,
  MaxCourseState
> {
  constructor(props: MaxCourseProp) {
    super(props);

    this.state = {
      maxValue: 0,
      color: "#00ff00",
    };
  }

  componentDidMount(): void {
    const { value: maxValue } = this.props;
    this.setState({ maxValue });
  }

  componentDidUpdate(prevProps: MaxCourseProp): void {
    const { value } = this.props;
    const { maxValue } = this.state;
    const isNeedUpdate = value !== prevProps.value && value > maxValue;

    if (isNeedUpdate) {
      this.setState({
        maxValue: value,
        color: getRandomColor(),
      });
    }
  }

  render(): React.ReactNode {
    const { maxValue, color } = this.state;

    return (
      <Card>
        <Indicator type={"card"} color={color} />
        <span>Max course:</span>
        <Label value={`$${maxValue}`} />
      </Card>
    );
  }
}
