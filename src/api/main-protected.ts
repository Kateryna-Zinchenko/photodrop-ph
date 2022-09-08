import HttpClientProtected from './http-client-protected';


export default class MainProtected extends HttpClientProtected {
    private static instanceCached: MainProtected;

    private constructor() {
        super(process.env.REACT_APP_BASE_URL);
    }

    static getInstance = () => {
        if (!MainProtected.instanceCached) {
            MainProtected.instanceCached = new MainProtected();
        }

        return MainProtected.instanceCached;
    };

    public getAlbums = () =>
        this.instance.get<any>(`/albums`);

    public addAlbum = (data: {title: string, location: string, date: any}) =>
        this.instance.post<any>(`/albums`, data);

    public getPhotos = (albumId: string) =>
        this.instance.get<any>(`/photos/album?id=${albumId}`);
}