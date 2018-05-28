const WEB_API: string = "http://localhost:51147/";

class BaseApi {
    get<T>(url: string, access_token?: string) {
        return new Promise<T>((resolve: any, reject: any) => {
            var req = new XMLHttpRequest();

            req.open('GET',  WEB_API +  url);
            req.setRequestHeader('Content-type', 'application/json');
            req.setRequestHeader( 'Access-Control-Allow-Origin', '*');
            
            if (access_token != undefined) {
                req.setRequestHeader('Authorization', access_token);
            }

            req.onload = function () {
                if (this.status >= 200 && this.status < 300) {
                    resolve(req.response);
                } else {
                    reject({
                        status: this.status,
                        statusText: req.statusText,
                        message: req
                    });
                }
            };

            req.onerror = function () {
                reject({
                    status: this.status,
                    statusText: req.statusText,
                    message: req
                });
            };

            req.send();
        });
    };

    change(method: string, url: string, body: any, access_token?: string) {
        return new Promise((resolve: any, reject: any) => {
            var req = new XMLHttpRequest();

            req.open(method, WEB_API + url);
            req.setRequestHeader('Content-type', 'application/json');
            req.setRequestHeader( 'Access-Control-Allow-Origin', '*');
            
            if (access_token != undefined) {
                req.setRequestHeader('Authorization', access_token);
            }

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

}

export default  BaseApi;