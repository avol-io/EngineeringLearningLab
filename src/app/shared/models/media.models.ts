export class Media {
    private _url: string;
    private _preview: string;
    private _embedded: string;

    constructor(url:string,preview:string, embedded?:string){
        this.url=url;
        this.preview=preview;
        this.embedded=embedded;

    }

	public get url(): string {
		return this._url;
	}

	public set url(value: string) {
		this._url = value;
	}
    

	public get preview(): string {
		return this._preview;
	}

	public set preview(value: string) {
		this._preview = value;
	}
    

	public get embedded(): string {
		return this._embedded;
	}

	public set embedded(value: string) {
		this._embedded = value;
	}
    
}