export class User {
    private _id: number;
    private _name: string;
    private _surname: string;
    private _email: string;
    private _venue: string;

    constructor(name: string, surname: string, email: string, venue: string, id?: number) {
        this._id = id;
        this._name = name;
        this._surname = surname;
        this._email = email;
        this._venue = venue;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get surname(): string {
        return this._surname;
    }

    set surname(value: string) {
        this._surname = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get venue(): string {
        return this._venue;
    }

    set venue(value: string) {
        this._venue = value;
    }
}