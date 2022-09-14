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

    public addAlbum = (data: {title: string, location: string, date: number}) =>
        this.instance.post<any>(`/albums`, data);

    public getUsers = () =>
        this.instance.get<any>(`/users`);

    public getUrl = (data: {albumId: string, contentType: string}) => (
        this.instance.post<any>(`/photos/s3url`, data)
    );
    public uploadPhoto = (data: {albumId: string, photos: [{key: string, users: []}]}) => (
        this.instance.post<any>(`/photos`, data)
    );
}