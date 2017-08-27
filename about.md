# Preact
a performant library version of React.

## Perfromance
- To add performance few features are not supported like propTypes.
- Also the major gain is obtained by the way virtualDom compariosion is carried out. (Diffing algo).


# Lifecycle methods

- componentWillMount()
- componentDidMount()
- componentWillUnMount()
- shouldComponentUpdate()
- componentWillUpdate()
- componentDidUpdate()
- componentWillReceiveProps()

# other methods

Render -
Gets parameters prop and state and
takes additional boolean param setting context
this is similar to using React.context

Even this.props and this.state is availabel prop and state are passed as param stating it is more clear to perform destructuring etc.

React:

render () {
	let props = this.props,
		state = this.state;
}

Preact:

render (props, state) {
	// props = this.props
	// state = this.state
}


linkstate -
A replacement for wiriting a function just to have this context and setstate accordingly

React:

setText = (text) => {
	this.setState({text});
}

<childComponent setText= { this.setText }></childComponent>

Preact:
import linkstate from 'linkstate';

<childComponent setText= { linkstate(this, 'text') }></childComponent>
