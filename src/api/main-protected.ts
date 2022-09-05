import HttpClientProtected from './http-client-protected';


export default class MainProtected extends HttpClientProtected {
    private static instanceCached: MainProtected;

    private constructor() {
        super(process.env.BASE_URL);
    }

    static getInstance = () => {
        if (!MainProtected.instanceCached) {
            MainProtected.instanceCached = new MainProtected();
        }

        return MainProtected.instanceCached;
    };

    public getAlbums = (token: any) =>
        this.instance.get<any>(`/albums`);
}