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
const EmailTemplate_1 = require("../models/EmailTemplate");
let EmailTemplateRepository = class EmailTemplateRepository extends typeorm_1.Repository {
};
EmailTemplateRepository = tslib_1.__decorate([
    typeorm_1.EntityRepository(EmailTemplate_1.EmailTemplate)
], EmailTemplateRepository);
exports.EmailTemplateRepository = EmailTemplateRepository;
//# sourceMappingURL=EmailTemplateRepository.js.map