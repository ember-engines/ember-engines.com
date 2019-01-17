import showdown from 'showdown';
import showdownHighlight from 'showdown-highlight';

export function initialize() {
  showdown.extension('highlight', showdownHighlight);
}

export default {
	name: 'showdown-highlight',
	initialize
};
