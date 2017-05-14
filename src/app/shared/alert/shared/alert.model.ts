export class Alert {    

    static readonly TYPE_DANGER: string = 'danger';
    static readonly TYPE_SUCCESS: string = 'success';
    static readonly TYPE_INFO: string = 'info';
    static readonly TYPE_WARNING: string = 'warning';

    type: string;
    message: string;

    constructor(type: string, message: string) {
        this.type = type;
        this.message = message;
    }
}