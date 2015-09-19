import Microcosm from "microcosm";

import EventsStore from "stores/EventsStore";

export default class Fomo extends Microcosm {
	constructor() {
		super();
		this.addStore("events", EventsStore);
	}
}
