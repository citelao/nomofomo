import reactor from "../../reactor";

reactor.registerStores({
	events: require("./stores/eventsStore.js"),
	current: require("./stores/currentEventStore.js")
});

export default {
	actions: require("./actions.js"),
	getters: require("./getters.js")
};