import { Media } from './media.models';
export class Event {

    private _title: string;
    private _descriptition: string;
    private _date: Date;
    private _slide: Media;
    private _video: Media;
    private _favorite:boolean=false;



    public get title(): string {
        return this._title;
    }

    public set title(value: string) {
        this._title = value;
    }

    public get descriptition(): string {
        return this._descriptition;
    }

    public set descriptition(value: string) {
        this._descriptition = value;
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


}