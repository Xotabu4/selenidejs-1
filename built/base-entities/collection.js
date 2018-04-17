"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const byIndexedWebElementLocator_1 = require("./locators/byIndexedWebElementLocator");
const byFilteredWebElementsLocator_1 = require("./locators/byFilteredWebElementsLocator");
const element_1 = require("./element");
const wait_1 = require("../wait");
const byWebElementsLocator_1 = require("./locators/byWebElementsLocator");
const with_1 = require("../locators/with");
const condition_1 = require("../conditions/condition");
class Collection {
    constructor(locator) {
        this.locator = locator;
    }
    async should(condition, timeout) {
        return timeout ? await wait_1.Wait.shouldMatch(this, condition, timeout) : await wait_1.Wait.shouldMatch(this, condition);
    }
    async shouldNot(condition, timeout) {
        return await this.should(condition_1.Condition.not(condition), timeout);
    }
    async is(condition, timeout) {
        return timeout ? await wait_1.Wait.isMatch(this, condition, timeout) : await wait_1.Wait.isMatch(this, condition);
    }
    async isNot(condition, timeout) {
        return await this.is(condition_1.Condition.not(condition), timeout);
    }
    get(index) {
        return new element_1.Element(new byIndexedWebElementLocator_1.ByIndexedWebElementLocator(index, this));
    }
    first() {
        return this.get(0);
    }
    filter(condition) {
        return new Collection(new byFilteredWebElementsLocator_1.ByFilteredWebElementsLocator(condition, this));
    }
    filterBy(condition) {
        return this.filter(condition);
    }
    findBy(condition) {
        return new Collection(new byFilteredWebElementsLocator_1.ByFilteredWebElementsLocator(condition, this)).get(0);
    }
    async size() {
        return (await this.getWebElements()).length;
    }
    async getWebElements() {
        return await this.locator.find();
    }
    toString() {
        return this.locator.toString();
    }
}
exports.Collection = Collection;
function all(locator) {
    return new Collection(new byWebElementsLocator_1.ByWebElementsLocator(typeof locator === "string"
        ? locator.includes("/") ? with_1.With.xpath(locator) : with_1.With.css(locator)
        : locator));
}
exports.all = all;
//# sourceMappingURL=collection.js.map