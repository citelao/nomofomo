import assign from "object-assign";

const EventsStore = {
	getInitialState() {
		return {
			loading: true,
			location: undefined
		};
	},

	register() {
		return {
			[locationUpdated]: EventsStore.locationUpdated
		}
	},

	locationUpdated(store, location) {
		return assign({}, store, { location });
	}
};

export default EventsStore;
