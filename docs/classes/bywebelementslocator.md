[selenidejs](../README.md) > [ByWebElementsLocator](../classes/bywebelementslocator.md)

# Class: ByWebElementsLocator

## Hierarchy

**ByWebElementsLocator**

## Implements

* [Locator](../interfaces/locator.md)<`Promise`<`WebElement`[]>>

## Index

### Constructors

* [constructor](bywebelementslocator.md#constructor)

### Properties

* [by](bywebelementslocator.md#by)
* [context](bywebelementslocator.md#context)

### Methods

* [find](bywebelementslocator.md#find)
* [toString](bywebelementslocator.md#tostring)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ByWebElementsLocator**(by: *`By`*, searchContext: *[SearchContext](../interfaces/searchcontext.md)*): [ByWebElementsLocator](bywebelementslocator.md)

*Defined in [locators/byWebElementsLocator.ts:23](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/locators/byWebElementsLocator.ts#L23)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| by | `By` |
| searchContext | [SearchContext](../interfaces/searchcontext.md) |

**Returns:** [ByWebElementsLocator](bywebelementslocator.md)

___

## Properties

<a id="by"></a>

### `<Private>` by

**● by**: *`By`*

*Defined in [locators/byWebElementsLocator.ts:22](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/locators/byWebElementsLocator.ts#L22)*

___
<a id="context"></a>

### `<Private>` context

**● context**: *[SearchContext](../interfaces/searchcontext.md)*

*Defined in [locators/byWebElementsLocator.ts:23](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/locators/byWebElementsLocator.ts#L23)*

___

## Methods

<a id="find"></a>

###  find

▸ **find**(): `Promise`<`WebElement`[]>

*Implementation of [Locator](../interfaces/locator.md).[find](../interfaces/locator.md#find)*

*Defined in [locators/byWebElementsLocator.ts:30](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/locators/byWebElementsLocator.ts#L30)*

**Returns:** `Promise`<`WebElement`[]>

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Defined in [locators/byWebElementsLocator.ts:34](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/locators/byWebElementsLocator.ts#L34)*

**Returns:** `string`

___

