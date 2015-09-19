import reactor from "../../reactor";

reactor.registerStores({
	location: require("./stores/locationStore.js")
});

export default {
	actions: require("./actions.js"),
	getters: require("./getters.js")
};