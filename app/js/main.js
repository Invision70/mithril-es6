import m from 'mithril';

// Component example
var Header = {
	controller: (data) => {
		return {
			text: data.text,
		}
	},
	view: (c) =>
		m('h1', c.text)
}

export var controller = () => {
	return {
		header: 'Hello, Mithril!',
		onclick: function(e) {
			e.preventDefault();
			this.header = 'Clicked';
		},
		onunload: function(e) {
			console.log('Component will be unloaded');
		}
	}
};

export var view = (c) =>
	m('.container',
		// Nesting components
		m.component(Header, {text: 'Mithril test'}),
		m('h1', {
			onclick: c.onclick.bind(c),
		}, c.header))
