import reactor from "../../reactor";

reactor.registerStores({
	events: require("./stores/eventsStore.js")
});

export default {
	actions: require("./actions.js"),
	getters: require("./getters.js")
};