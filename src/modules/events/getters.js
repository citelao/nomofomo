import { toImmutable } from "nuclear-js";

export const events = ["events"];

export const currentEvent = [["events"], ["current"],
	(events, current) => { return events.get(current) || toImmutable({}); }];

