import { toImmutable } from "nuclear-js";

export const eventsMap = ["events"];

export const events = [
	eventsMap,
	(map) => map.toList()
];

export const interested = [
	["interested"],
	(map) => map.toList()
];


export const currentEvent = [
	events,
	["current"],
	(es, current) => { return es.get(current) || toImmutable({}); }
];
