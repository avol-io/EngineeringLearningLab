import { Media } from './../../shared/models/media.models';
import { Event } from './../../shared/models/event.models';

var events: Array<Event> = [];

var event1: Event = new Event();
event1.title = "26° incontro - Android #1";
event1.descriptition = "descrizione";
event1.video = new Media("https://www.youtube.com/watch?v=a8IbM1ixcBc&list=PLQ2Px0t4VmLwM5T-cvGRJ-bMhppTgpjlg&index=16", "https://i.ytimg.com/vi/xCfNpA9NGAU/hqdefault.jpg?custom=true&w=168&h=94&stc=true&jpg444=true&jpgq=90&sp=68&sigh=NdXHz46d6VmElrzFknuf22mqXuc", '<iframe width="560" height="315" src="https://www.youtube.com/embed/a8IbM1ixcBc" frameborder="0" allowfullscreen></iframe>')
event1.slide = new Media("https://drive.google.com/open?id=1DWqN-WkgKbAVv6d-yNxX19SsMJ7kq_ecYXBG6yxKcPo", "");
events.push(event1);

var event2: Event = new Event();
event2.title = "27° incontro - Android #2";
event2.descriptition = "descrizione 2";
event2.video = new Media("https://www.youtube.com/watch?v=FWxfQQ-exDY", "https://lh3.googleusercontent.com/proxy/sv8jJZKyFnpzKtn9GyyzY6YZQYRBltFVwMYnNaCzb1AYnLWmTkGjIv-kG7-43kgJctUESsbSuqisJ9voFUTaXi7Ge7zcA-s=w1060-h596-p-rw", '<iframe width="560" height="315" src="https://www.youtube.com/embed/FWxfQQ-exDY" frameborder="0" allowfullscreen></iframe>')
event2.slide = new Media("https://drive.google.com/open?id=1DWqN-WkgKbAVv6d-yNxX19SsMJ7kq_ecYXBG6yxKcPo", "");

events.push(event2);

export const EVENT_MOCK: Array<Event> = events;
