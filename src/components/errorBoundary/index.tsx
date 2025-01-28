import { Component, ComponentType, ReactNode } from "react";

interface ErrorBoundaryState {
  error: Error | null;
}

interface ErrorBoundaryProps {
  children: ReactNode;
  ErrorComponent: ComponentType<{ message: string }>;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    error: null,
  };
  static getDerivedStateFromError(error: unknown): Partial<ErrorBoundaryState> {
    if (error instanceof Error) {
      return { error };
    }
    return { error: null };
  }

  render() {
    const { error } = this.state;
    const { ErrorComponent, children} = this.props;

    if (error) {
      return (
        <div>
          <ErrorComponent message={error.message} />
        </div>
      );
    }
    return children;
  }
}


