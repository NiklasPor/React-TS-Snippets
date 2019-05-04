# React-TS-Snippets
1. [Components](#components)
    1. [Basic](#c-basic)
    2. [With Props](#c-with-props)
    3. [With State](#c-with-state)

<a name="components"></a>
## Components

<a name="c-basic"></a>
### Basic
```typescript
class HelloMessage extends React.Component{
  render() {
    return <h2>Hello there!</h2>;
  }
}
```

<a name="c-with-props"></a>
### With Props (Input Parameter)
```typescript
class HelloMessage extends React.Component<{userName: string}>{
  render() {
    return <h2>Hello user: {this.props.userName} !</h2>;
  }
}
```

<a name="c-with-state"></a>
### With State (and Props)
```typescript
class Ticker extends React.Component<{start: number}, {ticker: number}> {
  private timer!: NodeJS.Timeout;

  constructor(props: Readonly<{start: number}>) {
    super(props);
    this.state = {ticker: props.start};
  }

  componentDidMount() {
    this.timer = setInterval(
      () => this.setState({ticker: this.state.ticker + 1}),
      250
    )
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return (
      <div>
        <h1>Actually, I can count: { this.state.ticker}</h1>
      </div>
    );
  }
}
```
