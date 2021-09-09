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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chat = void 0;
const type_graphql_1 = require("type-graphql");
let IChat = class IChat {
    constructor() {
        this.id = 0;
        this.message = "";
        this.name = "";
    }
};
__decorate([
    (0, type_graphql_1.Field)((type) => type_graphql_1.Float),
    __metadata("design:type", Number)
], IChat.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], IChat.prototype, "message", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], IChat.prototype, "name", void 0);
IChat = __decorate([
    (0, type_graphql_1.InterfaceType)(),
    __metadata("design:paramtypes", [])
], IChat);
let Chat = class Chat {
    constructor() {
        this.id = 0;
        this.message = "";
        this.name = "";
    }
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], Chat.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Chat.prototype, "message", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Chat.prototype, "name", void 0);
Chat = __decorate([
    (0, type_graphql_1.ObjectType)({ implements: IChat }),
    __metadata("design:paramtypes", [])
], Chat);
exports.Chat = Chat;
