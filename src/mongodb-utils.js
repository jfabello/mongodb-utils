/**
 * MongoDB utilities for Node.js.
 * @module jfabello/mongodb-utils
 * @license MIT
 * @author Juan F. Abello <juan@jfabello.com>
 */

// Sets strict mode
"use strict";

// Module imports
import mongodb from "mongodb";

// Errors
import { errors } from "./mongodb-utils.errors.js";

/**
 * Converts JavaScript types of an object to BSON types using a MongoDB JSON schema.
 * @param {object} object - The object whose JavaScript types will be converted to BSON types.
 * @param {object} mongodbJSONSchema - The MongoDB JSON schema used to determine the BSON types.
 * @returns {object} - The object with its JavaScript types converted to BSON types.
 * @throws {ERROR_MONGODB_UTILS_OBJECT_ARGUMENT_TYPE_INVALID} - If the object argument type is not an object.
 * @throws {ERROR_MONGODB_UTILS_JSON_SCHEMA_ARGUMENT_TYPE_INVALID} - If the MongoDB JSON schema argument type is not an object.
 * @throws {ERROR_MONGODB_UTILS_JSONSCHEMA_PROPERTY_NOT_FOUND} - If the "$jsonSchema" property was not found in the MongoDB JSON schema.
 * @throws {ERROR_MONGODB_UTILS_JSONSCHEMA_TYPE_INVALID} - If the "$jsonSchema" property type is not an object.
 * @throws {ERROR_MONGODB_UTILS_BSONTYPE_PROPERTY_NOT_FOUND} - If the "bsonType" property was not found in the MongoDB JSON schema fragment.
 * @throws {ERROR_MONGODB_UTILS_UNEXPECTED_OBJECT_FRAGMENT_TYPE} - If the object fragment type is not expected.
 * @throws {ERROR_MONGODB_UTILS_ADDITIONAL_PROPERTIES_NOT_ALLOWED} - If additional properties are not allowed in the MongoDB JSON schema fragment.
 * @throws {ERROR_MONGODB_UTILS_ITEMS_PROPERTY_NOT_FOUND} - If the "items" property was not found in the MongoDB JSON schema fragment.
 * @throws {ERROR_MONGODB_UTILS_UNEXPECTED_BSON_TYPE} - If the BSON type in the MongoDB JSON schema fragment is not expected.
 */
function convertJSTypesToBSONTypes(object, mongodbJSONSchema) {
	if (typeof object !== "object") {
		throw new errors.ERROR_MONGODB_UTILS_OBJECT_ARGUMENT_TYPE_INVALID();
	}

	if (typeof mongodbJSONSchema !== "object") {
		throw new errors.ERROR_MONGODB_UTILS_JSON_SCHEMA_ARGUMENT_TYPE_INVALID();
	}

	if ("$jsonSchema" in mongodbJSONSchema === false) {
		throw new errors.ERROR_MONGODB_UTILS_JSONSCHEMA_PROPERTY_NOT_FOUND();
	}

	if (typeof mongodbJSONSchema.$jsonSchema !== "object") {
		throw new errors.ERROR_MONGODB_UTILS_JSONSCHEMA_TYPE_INVALID();
	}

	const objectPath = ["<root>"];

	return processObjectAndSchemaFragments(object, mongodbJSONSchema.$jsonSchema);

	function processObjectAndSchemaFragments(objectFragment, jsonSchemaFragment) {
		if ("bsonType" in jsonSchemaFragment === false) {
			throw new errors.ERROR_MONGODB_UTILS_BSONTYPE_PROPERTY_NOT_FOUND(objectPath);
		}

		if (jsonSchemaFragment.bsonType === "object") {
			if (typeof objectFragment !== "object") {
				throw new errors.ERROR_MONGODB_UTILS_UNEXPECTED_OBJECT_FRAGMENT_TYPE(typeof objectFragment, "object", objectPath);
			}

			const processedObjectFragment = {};

			if ("properties" in jsonSchemaFragment) {
				// Process each object fragment's property
				for (const propertyName in objectFragment) {
					if (propertyName in jsonSchemaFragment.properties) {
						// Normal processing: The object fragment's property is in the JSON schema fragment
						objectPath.push(propertyName);
						processedObjectFragment[propertyName] = processObjectAndSchemaFragments(objectFragment[propertyName], jsonSchemaFragment.properties[propertyName]);
						objectPath.pop();
					} else if ("additionalProperties" in jsonSchemaFragment && typeof jsonSchemaFragment.additionalProperties === "object") {
						// Special case: The object fragment's property is not in the JSON schema fragment and the additionalProperties property is in the JSON schema fragment with specific rules
						objectPath.push("<additionalProperties>");
						processedObjectFragment[propertyName] = processObjectAndSchemaFragments(objectFragment[propertyName], jsonSchemaFragment.additionalProperties);
						objectPath.pop();
					} else if ("additionalProperties" in jsonSchemaFragment && jsonSchemaFragment.additionalProperties === false) {
						// Special case: The object fragment's property is not in the JSON schema fragment, the additionalProperties property is in the JSON schema fragment and is set to false
						throw new errors.ERROR_MONGODB_UTILS_ADDITIONAL_PROPERTIES_NOT_ALLOWED(objectPath);
					} else {
						// Special case: The object fragment's property is not in the JSON schema fragment, and the additionalProperties property in the JSON schema fragment is true or is not set
						processedObjectFragment[propertyName] = objectFragment[propertyName];
					}
				}
				// All object fragment's properties were processed, return the processed object fragment
				return processedObjectFragment;
			} else if ("additionalProperties" in jsonSchemaFragment && typeof jsonSchemaFragment.additionalProperties === "object") {
				// Special case: The JSON schema fragment does not have a properties property, but has the additionalProperties property with specific rules
				for (const propertyName in objectFragment) {
					processedObjectFragment[propertyName] = processObjectAndSchemaFragments(objectFragment[propertyName], jsonSchemaFragment.additionalProperties);
				}
				// All object fragment's properties were processed, return the processed object fragment
				return processedObjectFragment;
			} else if ("additionalProperties" in jsonSchemaFragment && jsonSchemaFragment.additionalProperties === false) {
				throw new errors.ERROR_MONGODB_UTILS_ADDITIONAL_PROPERTIES_NOT_ALLOWED(objectPath);
			} else {
				// Either additionalProperties is true, has another value type, or is not set
				return objectFragment;
			}
		}

		if (jsonSchemaFragment.bsonType === "array") {
			if ("items" in jsonSchemaFragment === false) {
				throw new errors.ERROR_MONGODB_UTILS_ITEMS_PROPERTY_NOT_FOUND(objectPath);
			}

			if (Array.isArray(objectFragment) === false) {
				throw new errors.ERROR_MONGODB_UTILS_UNEXPECTED_OBJECT_FRAGMENT_TYPE(typeof objectFragment, "array", objectPath);
			}

			const processedArray = [];

			for (const item of objectFragment) {
				objectPath.push("<array>");
				processedArray.push(processObjectAndSchemaFragments(item, jsonSchemaFragment.items));
				objectPath.pop();
			}

			return processedArray;
		}

		if (jsonSchemaFragment.bsonType === "string") {
			if (typeof objectFragment === "string") return objectFragment;
			throw new errors.ERROR_MONGODB_UTILS_UNEXPECTED_OBJECT_FRAGMENT_TYPE(typeof objectFragment, "string", objectPath);
		}

		if (jsonSchemaFragment.bsonType === "int") {
			if (typeof objectFragment === "number") return objectFragment;
			throw new errors.ERROR_MONGODB_UTILS_UNEXPECTED_OBJECT_FRAGMENT_TYPE(typeof objectFragment, "number", objectPath);
		}

		if (jsonSchemaFragment.bsonType === "long") {
			if (typeof objectFragment === "number") return mongodb.Long.fromNumber(objectFragment);
			if (typeof objectFragment === "string") return mongodb.Long.fromString(objectFragment);
			throw new errors.ERROR_MONGODB_UTILS_UNEXPECTED_OBJECT_FRAGMENT_TYPE(typeof objectFragment, 'number" or "string', objectPath);
		}

		if (jsonSchemaFragment.bsonType === "double") {
			if (typeof objectFragment === "number") return new mongodb.Double(objectFragment);
			if (typeof objectFragment === "string") return mongodb.Double.fromString(objectFragment);
			throw new errors.ERROR_MONGODB_UTILS_UNEXPECTED_OBJECT_FRAGMENT_TYPE(typeof objectFragment, 'number" or "string', objectPath);
		}

		if (jsonSchemaFragment.bsonType === "bool") {
			if (typeof objectFragment === "boolean") return objectFragment;
			throw new errors.ERROR_MONGODB_UTILS_UNEXPECTED_OBJECT_FRAGMENT_TYPE(typeof objectFragment, "boolean", objectPath);
		}

		if (jsonSchemaFragment.bsonType === "date") {
			if (typeof objectFragment === "string") return new Date(objectFragment);
			throw new errors.ERROR_MONGODB_UTILS_UNEXPECTED_OBJECT_FRAGMENT_TYPE(typeof objectFragment, "string", objectPath);
		}

		throw new errors.ERROR_MONGODB_UTILS_UNEXPECTED_BSON_TYPE(jsonSchemaFragment.bsonType, objectPath);
	}
}

export { convertJSTypesToBSONTypes, errors };
