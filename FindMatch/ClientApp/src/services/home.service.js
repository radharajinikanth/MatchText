"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/Rx");
var HomeService = /** @class */ (function () {
    function HomeService(http) {
        this.http = http;
    }
    HomeService.prototype.findMatch = function (text, subText) {
        return this.http.get('/Home/FindMatch?text=' + text + '&subText=' + subText).
            map(function (res) { return res.text(); });
    };
    return HomeService;
}());
exports.HomeService = HomeService;
//# sourceMappingURL=home.service.js.map