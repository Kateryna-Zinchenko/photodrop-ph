import HttpClient from "./http-client";

export interface LoginResponse {
    token: string
}

class Main extends HttpClient {
    private static instanceCached: Main;

    private constructor() {
        super(process.env.REACT_APP_BASE_URL);
    }

    static getInstance = () => {
        if (!Main.instanceCached) {
            Main.instanceCached = new Main();
        }

        return Main.instanceCached;
    };

    public login = (data: {login: string, password: string}) =>
        this.instance.post<LoginResponse>("/auth/login", data);

}

export default Main;
