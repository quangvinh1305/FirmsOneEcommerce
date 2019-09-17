"use strict";
/*
 * spurtcommerce API
 * version 3.0
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const Banner_1 = require("../models/Banner");
let BannerRepository = class BannerRepository extends typeorm_1.Repository {
};
BannerRepository = tslib_1.__decorate([
    typeorm_1.EntityRepository(Banner_1.Banner)
], BannerRepository);
exports.BannerRepository = BannerRepository;
//# sourceMappingURL=BannerRepository.js.map