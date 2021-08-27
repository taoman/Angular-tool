export interface UserInterface {
    code: string;
    data: UserInfoInterface[];
    msg: string;
}
export interface UserInfoInterface {
    token: string;
    name: string;
    id: number;
}
export interface UserRegister{
    name:string
    psd:string
}
export interface SnackBarInterface{
    message:string
    type:'success' | 'fail' | 'warning'
}
export interface ResponseInterface{
    code:number
    msg:string
}