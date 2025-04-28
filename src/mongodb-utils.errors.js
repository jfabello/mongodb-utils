/**
 * MongoDB utilities for Node.js errors.
 * @module mongodb-utils-errors
 * @license MIT
 * @author Juan F. Abello <juan@jfabello.com>
 */

// Sets strict mode
"use strict";

/**
 * Thrown when the object argument type is not an object.
 * @class ERROR_MONGODB_UTILS_OBJECT_ARGUMENT_TYPE_INVALID
 * @extends TypeError
 */
class ERROR_MONGODB_UTILS_OBJECT_ARGUMENT_TYPE_INVALID extends TypeError {
	/**
	 * @constructor
	 */
	constructor() {
		super("The object argument type is not valid. It must be an object.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}

/**
 * Thrown when the MongoDB JSON schema argument type is not an object.
 * @class ERROR_MONGODB_UTILS_MONGODB_JSON_SCHEMA_ARGUMENT_TYPE_INVALID
 * @extends TypeError
 */
class ERROR_MONGODB_UTILS_JSON_SCHEMA_ARGUMENT_TYPE_INVALID extends TypeError {
	/**
	 * @constructor
	 */
	constructor() {
		super("The MongoDB JSON schema argument type is not valid. It must be an object.");
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}

/**
 * Thrown when the "$jsonSchema" property was not found in the MongoDB JSON schema.
 * @class ERROR_MONGODB_UTILS_JSONSCHEMA_PROPERTY_NOT_FOUND
 * @extends ReferenceError
 */
class ERROR_MONGODB_UTILS_JSONSCHEMA_PROPERTY_NOT_FOUND extends ReferenceError {
	/**
	 * @constructor
	 */
	constructor() {
		super(`The "$jsonSchema" property was not found in the MongoDB JSON schema.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}

/**
 * Thrown when the "$jsonSchema" property type is not an object.
 * @class ERROR_MONGODB_UTILS_JSONSCHEMA_TYPE_INVALID
 * @extends TypeError
 */
class ERROR_MONGODB_UTILS_JSONSCHEMA_TYPE_INVALID extends TypeError {
	/**
	 * @constructor
	 */
	constructor() {
		super(`The "$jsonSchema" property type is not valid. It must be an object.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
	}
}

/**
 * Thrown when the "bsonType" property was not found in the MongoDB JSON schema.
 * @class ERROR_MONGODB_UTILS_BSON_TYPE_PROPERTY_NOT_FOUND
 * @extends ReferenceError
 */
class ERROR_MONGODB_UTILS_BSONTYPE_PROPERTY_NOT_FOUND extends ReferenceError {
	/**
	 * @constructor
	 * @param {Array} objectPath - The path to the object fragment where the property was not found.
	 */
	constructor(objectPath) {
		super(`The "bsonType" property was not found in the MongoDB JSON schema.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
		if (typeof objectPath === "object" && Array.isArray(objectPath)) this.objectPath = objectPath;
	}
}

/* Thrown when the object fragment type is not expected.
 * @class ERROR_MONGODB_UTILS_UNEXPECTED_OBJECT_FRAGMENT_TYPE
 * @extends TypeError
 */
class ERROR_MONGODB_UTILS_UNEXPECTED_OBJECT_FRAGMENT_TYPE extends TypeError {
	/**
	 * @constructor
	 * @param {string} objectFragmentType - The type of the object fragment.
	 * @param {string} expectedObjectFragmentType - The expected type of the object fragment.
	 * @param {Array} objectPath - The path to the object fragment.
	 */
	constructor(objectFragmentType, expectedObjectFragmentType, objectPath) {
		super(`Unexpected fragment object type "${objectFragmentType}", expected "${expectedObjectFragmentType}".`);
		this.name = Object.getPrototypeOf(this).constructor.name;
		if (typeof objectPath === "object" && Array.isArray(objectPath)) this.objectPath = objectPath;
	}
}

/**
 * Thrown when additional properties are not allowed by the MondoDB JSON schema.
 * @class ERROR_MONGODB_UTILS_ADDITIONAL_PROPERTIES_NOT_ALLOWED
 * @extends Error
 */
class ERROR_MONGODB_UTILS_ADDITIONAL_PROPERTIES_NOT_ALLOWED extends Error {
	/**
	 * @constructor
	 * @param {Array} objectPath - The path to the object fragment where additional properties are not allowed.
	 */
	constructor(objectPath) {
		super(`Additional properties are not allowed.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
		if (typeof objectPath === "object" && Array.isArray(objectPath)) this.objectPath = objectPath;
	}
}

/**
 * Thrown when the "items" property was not found in the MongoDB JSON schema.
 * @class ERROR_MONGODB_UTILS_ITEMS_PROPERTY_NOT_FOUND
 * @extends ReferenceError
 */
class ERROR_MONGODB_UTILS_ITEMS_PROPERTY_NOT_FOUND extends ReferenceError {
	/**
	 * @constructor
	 * @param {Array} objectPath - The path to object fragment where the property was not found.
	 */
	constructor(objectPath) {
		super(`The "items" property was not found in the MongoDB JSON schema.`);
		this.name = Object.getPrototypeOf(this).constructor.name;
		if (typeof objectPath === "object" && Array.isArray(objectPath)) this.objectPath = objectPath;
	}
}

/**
 * Thrown when an unexpected BSON type is found.
 * @class ERROR_MONGODB_UTILS_UNEXPECTED_BSON_TYPE
 * @extends TypeError
 */
class ERROR_MONGODB_UTILS_UNEXPECTED_BSON_TYPE extends TypeError {
	/**
	 * @constructor
	 * @param {string} bsonType - The unexpected BSON type.
	 * @param {Array} objectPath - The path to the object fragment where the unexpected BSON type was found.
	 */
	constructor(bsonType, objectPath) {
		super(`Unexpected BSON type "${bsonType}".`);
		this.name = Object.getPrototypeOf(this).constructor.name;
		if (typeof objectPath === "object" && Array.isArray(objectPath)) this.objectPath = objectPath;
	}
}

const errors = {
	ERROR_MONGODB_UTILS_OBJECT_ARGUMENT_TYPE_INVALID,
	ERROR_MONGODB_UTILS_JSON_SCHEMA_ARGUMENT_TYPE_INVALID,
	ERROR_MONGODB_UTILS_JSONSCHEMA_PROPERTY_NOT_FOUND,
	ERROR_MONGODB_UTILS_JSONSCHEMA_TYPE_INVALID,
	ERROR_MONGODB_UTILS_BSONTYPE_PROPERTY_NOT_FOUND,
	ERROR_MONGODB_UTILS_UNEXPECTED_OBJECT_FRAGMENT_TYPE,
	ERROR_MONGODB_UTILS_ADDITIONAL_PROPERTIES_NOT_ALLOWED,
	ERROR_MONGODB_UTILS_ITEMS_PROPERTY_NOT_FOUND,
	ERROR_MONGODB_UTILS_UNEXPECTED_BSON_TYPE
};

Object.freeze(errors);

export { errors };
