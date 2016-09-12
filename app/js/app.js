import m from 'mithril';
import * as main from './main';

import '../less/styles.less';

m.route.mode = 'hash';
m.route(document.body, '/', {
	'/': main,
});
