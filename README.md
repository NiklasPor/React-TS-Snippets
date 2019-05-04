# React-TS-Snippets
1. [Components](#components)
    1. [Basic](#c-basic)
    2. [With Props](#c-with-props)

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
