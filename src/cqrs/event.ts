import { DataFlowModel } from './data-flow-model';
import { UUID4 } from './types';

class Event {
    public uuid: UUID4;

    constructor(event_type: string, payload: DataFlowModel = null, prev: Event = null) {
        console.log(event_type, payload);
    }
}

export enum EventTypes {
    DRAW_EVENT = 'DRAW_EVENT',
}

export function createEvent(event_type: string, payload: DataFlowModel = null, prev: Event = null) {
    return new Event(event_type, payload, prev);
}
