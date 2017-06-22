import { Media } from './media.models';
import {User} from "./user.model";
export class Event {
    private _title: string;
    private _description: string;
    private _date: Date;
    private _slide: Media;
    private _video: Media;
    private _favorite:boolean = false;
    private _id: number;
    private _speaker: User;

    public get title(): string {
        return this._title;
    }

    public set title(value: string) {
        this._title = value;
    }

    public get description(): string {
        return this._description;
    }

    public set description(value: string) {
        this._description = value;
    }

    public get date(): Date {
        return this._date;
    }

    public set date(value: Date) {
        this._date = value;
    }

    public get slide(): Media {
        return this._slide;
    }

    public set slide(value: Media) {
        this._slide = value;
    }

    public get video(): Media {
        return this._video;
    }

    public set video(value: Media) {
        this._video = value;
    }


	public get favorite(): boolean {
		return this._favorite;
	}

	public set favorite(value: boolean) {
		this._favorite = value;
	}

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get speaker(): User {
        return this._speaker;
    }

    set speaker(value: User) {
        this._speaker = value;
    }
}