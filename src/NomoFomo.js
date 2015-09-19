import Microcosm from "microcosm";

import EventsStore from "stores/EventsStore";
import SessionsStore from "stores/SessionsStore";

export default class Fomo extends Microcosm {
	constructor() {
		super();
		this.addStore("events", EventsStore);
		this.addStore("session", SessionsStore);
	}
}
