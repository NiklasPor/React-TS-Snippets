# React-TS-Snippets
1. [Components](#components)
    1. [Basic](#c-basic)
    2. [With Props](#c-with-props)
    3. [With State and Button](#c-with-state-and-button)
    4. [With State and Timer](#c-with-state-and-timer)
    5. [With Child Components](#c-children)
2. [Templating](#templating)
    1. [If](#t-if)
    2. [If-Else](#t-if-else)
    3. [List](#t-list)
    4. [Inline List](#t-inline-list)
3. [Forms](#forms)
    1. [Input](#f-input)
    2. [TextArea](#f-textarea)
    3. [Select or Dropdown](#f-select)

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

<a name="c-with-state-and-button"></a>
### With State and Button
```typescript
class Ticker extends React.Component<{start: number, modifier: number}, {counter: number}> {
  private timer!: NodeJS.Timeout;

  constructor(props: {start: number, modifier: number}) {
    super(props);
    this.state = {counter: props.start};
    this.onClick = this.onClick.bind(this);
  }

  onClick(): void {
    this.setState((state, props) => ({counter: state.counter + props.modifier}))
  }

  render() {
    return (
      <div>
        <h1>Actually, I can count: { this.state.counter }</h1>
        <button onClick={this.onClick}>Add {this.props.modifier}!</button>
      </div>
    );
  }
}
```

<a name="c-children"></a>
### Child Components or Containment
```typescript
class App extends React.Component {
  render() {
    return (
    <div>
      <Sidebar>
        <UserMenu/>
        <GeneralMenu/>
      </Sidebar>
    </div>
    );
  }
}

class Sidebar extends React.Component {
  render() {
    return (
      <div>
        { this.props.children }
      </div>
    );
  }
}

class GeneralMenu extends React.Component {
  render() {
    return (
      <div>
        <h2>General</h2>
        <ul>
          <li>Messages</li>
          <li>Groups</li>
          <li>Configuration</li>
        </ul>
      </div>
    );
  }
}

class UserMenu extends React.Component {
  render() {
    return (
      <div>
        <h2>User</h2>
        <ul>
          <li>Name</li>
          <li>Birthday</li>
          <li>Country</li>
        </ul>
      </div>
    );
  }
}
```

<a name="c-with-state-and-timer"></a>
### With State and Timer
```typescript
class Ticker extends React.Component<{start: number, modifier: number}, {ticker: number}> {
  private timer!: NodeJS.Timeout;

  constructor(props: {start: number, modifier: number}) {
    super(props);
    this.state = {ticker: props.start};
  }

  componentDidMount() {
    this.timer = setInterval(
      () => this.setState((state, props) => ({ticker: state.ticker + props.modifier})),
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

<a name="templating"></a>
## Templating

<a name="t-if"></a>
### If
```typescript
class Joke extends React.Component<{answer: boolean}> {
  render() {
    return (
      <div>
        <h1>Knock Knock!</h1>
        { this.props.answer &&
        <h2>Who is there??</h2>
        }
      </div>
    );
  }
}
```

<a name="t-if-else"></a>
### If-Else (Regular Ternary Operator)
```typescript
class Joke extends React.Component<{angry: boolean}> {
  render() {
    return (
      <div>
        <h1>Knock Knock!</h1>
        { this.props.angry
          ? <h1>Leave me alone!!</h1>
          : <h2>Yes...?</h2>
        }
      </div>
    );
  }
}
```

<a name="t-list"></a>
### Inline List
```typescript
class Numbers extends React.Component<{numbers: number[]}> {
  render() {
    return (
      this.renderNumbers()
    );
  }

  renderNumbers() {
    return this.props.numbers.map((n) =>
      <span key={n.toString()}> { n } </span>
    );
  }
}
```

<a name="t-inline-list"></a>
### List
```typescript
class Numbers extends React.Component<{numbers: number[]}> {
  render() {
    return (
      <div>
        { this.props.numbers.map((n) => 
          <span key={n.toString()}> { n } </span>
        )}
      </div>
    );
  }
}
```

<a name="forms"></a>
## Forms


<a name="f-input"></a>
### Input
```typescript
class InputTextSync extends React.Component<{}, {text: string}> {
  constructor(props: {}) {
    super(props)
    this.state = {text: 'Start Text'}
    this.onChange = this.onChange.bind(this);
  }

  onChange(event: FormEvent<HTMLInputElement>) {
    this.setState({text: event.currentTarget.value});
  }

  render() {
    return (
      <div>
        <h1>{ this.state.text }</h1>
        <input value={this.state.text} onChange={this.onChange}></input>
      </div>
    );
  }
}
```

<a name="f-textarea"></a>
### TextArea
```typescript
class TextAreaSync extends React.Component<{}, {text: string}> {
  constructor(props: {}) {
    super(props)
    this.state = {text: 'Start Text'}
    this.onChange = this.onChange.bind(this);
  }

  onChange(event: FormEvent<HTMLTextAreaElement>) {
    this.setState({text: event.currentTarget.value});
  }

  render() {
    return (
      <div>
        <h1>{ this.state.text }</h1>
        <textarea value={this.state.text} onChange={this.onChange}></textarea>
      </div>
    );
  }
}
```

<a name="f-select"></a>
### Select or Dropdown
```typescript
class FavoriteColor extends React.Component<{}, {selected: string}> {
  constructor(props: {}) {
    super(props)
    this.state = {selected: 'red'}
    this.onChange = this.onChange.bind(this);
  }

  onChange(event: FormEvent<HTMLSelectElement>) {
    this.setState({selected: event.currentTarget.value});
  }

  render() {
    return (
      <div>
        <h1>{ this.state.selected }</h1>
        <select value={this.state.selected} onChange={this.onChange}>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="black">Black is not a color.</option>
          </select>
      </div>
    );
  }
}
```

