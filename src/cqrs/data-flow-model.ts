import { UUID4 } from './types';

export interface DataFlowModel {
    uuid: UUID4;
    [key: string]: any;
}

export interface UserDataModel extends DataFlowModel {
    bank_acount: string;
    credit_amount: number;
}

export interface DrawDataModel extends DataFlowModel {
    receiver: string;
    amount: number;
    payment_date: Date;
    duration: number;
    duration_unit: string;
    draw_date: Date;
    attachment1: string;
    attachment2: string;
    comment: string;
}

export interface PendingBusinessDataModel extends DataFlowModel {
    category: string;
    business_type: string;
    started_at: Date;
    finished_at: Date;
    draw: DrawDataModel;
}