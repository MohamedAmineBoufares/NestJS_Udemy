"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportsController = void 0;
const common_1 = require("@nestjs/common");
const current_user_decorator_1 = require("../users/decoraters/current-user.decorator");
const user_entity_1 = require("../users/user.entity");
const auth_gaurd_1 = require("../gards/auth.gaurd");
const create_repport_dto_1 = require("./dtos/create-repport.dto");
const reports_service_1 = require("./reports.service");
const serialize_interceptor_1 = require("../interceptors/serialize.interceptor");
const report_dto_1 = require("./dtos/report.dto");
const approve_repport_dto_1 = require("./dtos/approve-repport.dto");
const admin_guard_1 = require("../gards/admin.guard");
const get_estimate_dto_1 = require("./dtos/get-estimate.dto");
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    getEstimate(query) {
        return this.reportsService.createEstimate(query);
    }
    createRepport(body, user) {
        return this.reportsService.create(body, user);
    }
    approveRepport(id, body) {
        return this.reportsService.changeApproval(id, body.approved);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_estimate_dto_1.GetEstimatetDto]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "getEstimate", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(auth_gaurd_1.AuthGard),
    (0, serialize_interceptor_1.Serialize)(report_dto_1.ReportDto),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_repport_dto_1.CreateRepportDto, user_entity_1.User]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "createRepport", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, approve_repport_dto_1.ApproveRepportDto]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "approveRepport", null);
ReportsController = __decorate([
    (0, common_1.Controller)('reports'),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
exports.ReportsController = ReportsController;
//# sourceMappingURL=reports.controller.js.map