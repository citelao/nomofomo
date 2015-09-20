import reactor from "../../reactor";

reactor.registerStores({
	events: require("./stores/eventsStore.js"),
	interested: require("./stores/interestedStore.js"),
	current: require("./stores/currentEventStore.js"),
	newEvent: require("./stores/newEventStore.js")
});

export default {
	actions: require("./actions.js"),
	getters: require("./getters.js")
};