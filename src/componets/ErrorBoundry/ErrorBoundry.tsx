import React from "react";

interface ErrorBoundryProp {
  children: React.ReactNode;
  component?: React.ReactNode;
}

interface ErrorBoundryState {
  hasError: boolean;
}

export const DefaultError: React.FC = () => {
  return (
    <div>
      <h2>Error</h2>
    </div>
  );
};

export class ErrorBoundry extends React.Component<
  ErrorBoundryProp,
  ErrorBoundryState
> {
  constructor(props: ErrorBoundryProp) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(): void {
    this.setState({
      hasError: true,
    });
  }

  render(): ErrorBoundryProp | React.ReactNode {
    if (this.state.hasError) {
      const error = this.props.component ? this.props.component : DefaultError;
      return error;
    }

    return this.props.children;
  }
}
