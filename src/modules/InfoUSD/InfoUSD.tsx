import React from "react";
import styled from "@emotion/styled";
import { ErrorBoundry, Message } from "../../componets";
import { Course, MaxCourse, PanicCourse } from "./components";
import { getRandomUSD } from "../../utils/utils";

const UPDATE_TIME = 2 * 1000;

export const DataContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 2rem;
  box-sizing: border-box;
`;

interface InfoUSDProp {
  [key: string]: unknown;
}

interface InfoUSDState {
  value: number;
}

export class InfoUSD extends React.Component<InfoUSDProp, InfoUSDState> {
  private interval: NodeJS.Timeout | null;

  constructor(props: InfoUSDProp) {
    super(props);

    this.state = {
      value: 0,
    };

    this.interval = null;
  }

  componentDidMount(): void {
    this.interval = setInterval(
      () => this.setState({ value: getRandomUSD() }),
      UPDATE_TIME
    );
  }

  componentWillUnmount(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render(): React.ReactNode {
    const { value } = this.state;

    return (
      <div>
        <DataContainer>
          <Course value={value} />
          <MaxCourse value={value} />
          <ErrorBoundry
            component={<Message title="Stop!" text="You are very afraid" />}
          >
            <PanicCourse value={value} />
          </ErrorBoundry>
        </DataContainer>
      </div>
    );
  }
}
