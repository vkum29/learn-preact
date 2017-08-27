import { h , render , Component } from 'preact';

export default class App extends Component {

	render ({ greetingsTo = 'Guest' }, state) {
		return (
			<h1>Hello {greetingsTo}!</h1>
		);
	}

}

render (
	<App greetingsTo="World" />,
	document.getElementById('App')
);
