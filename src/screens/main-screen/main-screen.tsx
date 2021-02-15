import React from "react";
import moment from "moment";
import { Col, BarChart } from "../../componets";
import { BarChartForm } from "./components";
import { AppApi } from "../../services/AppApi";

const UPDATE_TIME = 2 * 1000;
const DEFAULT_COUNT = 5;
const MIN_COUNT = 2;
const MIN_WIDTH = 500;
const MIN_HEIGHT = 200;
const DEFAULT_BAR_COLOR = "#3700b3";

const chartConfig = {
  margin: 20,
  padding: 20,
  barWidth: 200,
};

interface MainScreenProp {
  [key: string]: unknown;
}

interface MainScreenState {
  [key: string]: string | number | string[] | number[];
  title: string;
  count: number;
  width: number;
  height: number;
  barColor: string;
  values: number[];
  labels: string[];
}

export class MainScreen extends React.Component<
  MainScreenProp,
  MainScreenState
> {
  private interval: NodeJS.Timeout | null;
  constructor(props: MainScreenProp) {
    super(props);
    this.state = {
      title: "base course is $75",
      count: DEFAULT_COUNT,
      width: MIN_WIDTH,
      height: MIN_HEIGHT,
      barColor: DEFAULT_BAR_COLOR,
      values: [],
      labels: [],
    };

    this.interval = null;

    this.handleBarChartFormChange = this.handleBarChartFormChange.bind(this);
  }

  componentDidMount(): void {
    this.interval = setInterval(() => {
      AppApi.getRandomUSDAsync().then((value) => {
        this.setState({
          values: [...this.state.values, value],
          labels: [...this.state.labels, moment().format("h:mm:ss")],
        });
      });
    }, UPDATE_TIME);
  }

  componentWillUnmount(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  private handleBarChartFormChange(evt: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  render(): React.ReactNode {
    const { values, labels } = this.state;
    const barCount = values.length;
    const startBar =
      barCount > this.state.count ? barCount - this.state.count : 0;
    return (
      <Col>
        <BarChartForm
          minWidth={MIN_WIDTH}
          minHeight={MIN_HEIGHT}
          count={this.state.count}
          minCount={MIN_COUNT}
          barColor={this.state.barColor}
          onBarChartFormChange={this.handleBarChartFormChange}
        />
        <div>
          <p>{`USD, ${moment().format("DD:MM:YYYY")}: ${this.state.title}`}</p>
          {this.state.values.length ? (
            <BarChart
              {...chartConfig}
              values={values.slice(startBar, barCount)}
              labels={labels.slice(startBar, barCount)}
              barColor={this.state.barColor}
              width={Number(this.state.width)}
              height={Number(this.state.height)}
            />
          ) : null}
        </div>
      </Col>
    );
  }
}
