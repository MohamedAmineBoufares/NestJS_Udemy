"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGard = void 0;
class AuthGard {
    canActivate(context) {
        const req = context.switchToHttp().getRequest();
        return req.session.userId;
    }
}
exports.AuthGard = AuthGard;
//# sourceMappingURL=auth.gard.js.map