const WEB_API: string = "http://localhost:51147/";
import { UserLogin } from '../models/UserLogin';

class UserApi {
    get(url: string, access_token?: string) {
        return new Promise((resolve: any, reject: any) => {
            var req = new XMLHttpRequest();

            req.open('GET', url);
            req.setRequestHeader('Content-type', 'application/json');
            if (access_token != undefined) {
                req.setRequestHeader('Authorization', access_token);
            }

            req.onload = (() => {
                if (req.status === 200) {
                    resolve(req.response);
                } else {
                    reject(Error(req.statusText));
                }
            });

            req.onerror = ((e: ErrorEvent) => {
                reject(Error(e.message));
            });

            req.send();
        });
    };

    change(method: string, url: string, body: any, access_token?: string) {
        return new Promise((resolve: any, reject: any) => {
            var req = new XMLHttpRequest();

            req.open(method, url);
            req.setRequestHeader('Content-type', 'application/json');
            req.setRequestHeader( 'Access-Control-Allow-Origin', '*');
            
            if (access_token != undefined) {
                req.setRequestHeader('Authorization', access_token);
            }

            // req.onload = function () {
            //     resolve(req.response);
            // } // success case
            // req.onerror = function (error: any) {
            //     reject(Error(error));
            // } // failure case

            req.onload = function () {
                if (this.status >= 200 && this.status < 300) {
                    resolve(req.response);
                } else {
                    reject({
                        status: this.status,
                        statusText: req.statusText,
                        error: req.response
                    });
                }
            };
            req.onerror = function () {
                reject({
                    status: this.status,
                    statusText: req.statusText,
                    error: req.response
                });
            };

            if (body != null) {
                req.send(JSON.stringify(body));
            } else {
                req.send();
            }
        });
    }



    login(user: UserLogin) {
        var url = WEB_API + 'api/user/login';

        return this.change('POST', url, user).then(JSON.parse);
    }
}

export default new UserApi();