import App, { Container } from "next/app";

class MyApp extends App {
  render() {
    const { Component } = this.props;

    return (
      <Container>
        <h2>Hey! I'm on every page!</h2>
        <Component />
      </Container>
    );
  }
}

export default MyApp;
