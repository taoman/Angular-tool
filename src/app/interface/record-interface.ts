export namespace RecordInterface {
    export interface StoreParams{
        user_id:number,
        date:Date,
        amount:number,
        text:string
    }
    export interface IndexDataInterface {
        id: number;
        user_id: number;
        date: string;
        amount: number;
        text: string;
    }

    export interface IndexInterface {
        code: number;
        msg: string;
        data: IndexDataInterface[];
    }
}
