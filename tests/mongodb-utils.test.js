/**
 * @module mongodb-utils-tests
 * @description MongoDB utilities for Node.js tests.
 * @license MIT
 * @author Juan F. Abello <juan@jfabello.com>
 */

// Sets strict mode
"use strict";

// Module imports
import { describe, expect, test } from "@jest/globals";
import { convertJSTypesToBSONTypes, errors } from "../src/mongodb-utils.js";
import { queueJSONSchema } from "./test-data/queue-json-schema.js";
import { queues } from "./test-data/queues.js";

describe("MongoDB utilities convertJSTypesToBSONTypes() tests", () => {
	test("An attempt to call the convertJSTypesToBSONTypes() function without arguments should throw an ERROR_MONGODB_UTILS_OBJECT_ARGUMENT_TYPE_INVALID error", () => {
		expect.assertions(1);
		try {
			convertJSTypesToBSONTypes();
		} catch (error) {
			expect(error).toBeInstanceOf(errors.ERROR_MONGODB_UTILS_OBJECT_ARGUMENT_TYPE_INVALID);
		}
	});

	test("An attempt to call the convertJSTypesToBSONTypes() function with an invalid type of object argument should throw an ERROR_MONGODB_UTILS_OBJECT_ARGUMENT_TYPE_INVALID error", () => {
		expect.assertions(4);
		try {
			convertJSTypesToBSONTypes(1234);
		} catch (error) {
			expect(error).toBeInstanceOf(errors.ERROR_MONGODB_UTILS_OBJECT_ARGUMENT_TYPE_INVALID);
		}
		try {
			convertJSTypesToBSONTypes(true);
		} catch (error) {
			expect(error).toBeInstanceOf(errors.ERROR_MONGODB_UTILS_OBJECT_ARGUMENT_TYPE_INVALID);
		}
		try {
			convertJSTypesToBSONTypes("Genesys Cloud");
		} catch (error) {
			expect(error).toBeInstanceOf(errors.ERROR_MONGODB_UTILS_OBJECT_ARGUMENT_TYPE_INVALID);
		}
		try {
			convertJSTypesToBSONTypes(() => {
				return {};
			});
		} catch (error) {
			expect(error).toBeInstanceOf(errors.ERROR_MONGODB_UTILS_OBJECT_ARGUMENT_TYPE_INVALID);
		}
	});

	test("An attempt to call the convertJSTypesToBSONTypes() function with an invalid type of MongoDB JSON schema argument should throw an ERROR_MONGODB_UTILS_JSON_SCHEMA_ARGUMENT_TYPE_INVALID error", () => {
		expect.assertions(4);
		try {
			convertJSTypesToBSONTypes({}, 1234);
		} catch (error) {
			expect(error).toBeInstanceOf(errors.ERROR_MONGODB_UTILS_JSON_SCHEMA_ARGUMENT_TYPE_INVALID);
		}
		try {
			convertJSTypesToBSONTypes({}, true);
		} catch (error) {
			expect(error).toBeInstanceOf(errors.ERROR_MONGODB_UTILS_JSON_SCHEMA_ARGUMENT_TYPE_INVALID);
		}
		try {
			convertJSTypesToBSONTypes({}, "Queue");
		} catch (error) {
			expect(error).toBeInstanceOf(errors.ERROR_MONGODB_UTILS_JSON_SCHEMA_ARGUMENT_TYPE_INVALID);
		}
		try {
			convertJSTypesToBSONTypes({}, () => {
				return {};
			});
		} catch (error) {
			expect(error).toBeInstanceOf(errors.ERROR_MONGODB_UTILS_JSON_SCHEMA_ARGUMENT_TYPE_INVALID);
		}
	});

	test("An attempt to call the convertJSTypesToBSONTypes() function with an invalid MongoDB JSON schema argument should throw an ERROR_MONGODB_UTILS_JSONSCHEMA_PROPERTY_NOT_FOUND error", () => {
		expect.assertions(1);
		try {
			convertJSTypesToBSONTypes({}, {});
		} catch (error) {
			expect(error).toBeInstanceOf(errors.ERROR_MONGODB_UTILS_JSONSCHEMA_PROPERTY_NOT_FOUND);
		}
	});

	test("An attempt to call the convertJSTypesToBSONTypes() function with an invalid \"$jsonSchema\" property type in the MongoDB JSON Schema argument should throw an ERROR_MONGODB_UTILS_JSONSCHEMA_TYPE_INVALID error", () => {
		expect.assertions(3);
		try {
			convertJSTypesToBSONTypes({}, { $jsonSchema: 1234 });
		} catch (error) {
			expect(error).toBeInstanceOf(errors.ERROR_MONGODB_UTILS_JSONSCHEMA_TYPE_INVALID);
		}
		try {
			convertJSTypesToBSONTypes({}, { $jsonSchema: true });
		} catch (error) {
			expect(error).toBeInstanceOf(errors.ERROR_MONGODB_UTILS_JSONSCHEMA_TYPE_INVALID);
		}
		try {
			convertJSTypesToBSONTypes({}, { $jsonSchema: "Queue" });
		} catch (error) {
			expect(error).toBeInstanceOf(errors.ERROR_MONGODB_UTILS_JSONSCHEMA_TYPE_INVALID);
		}
	});

	test("An attempt to call the convertJSTypesToBSONTypes() function with valid arguments should return an object", () => {
		expect.assertions(1);
		let convertedObject = convertJSTypesToBSONTypes(queues.entities[0], queueJSONSchema);
		expect(typeof convertedObject).toBe("object");
	});

	test("The convertJSTypesToBSONTypes() function should be able to convert all the objects in the test data", () => {
		expect.assertions(queues.entities.length);

		for (const gcQueue of queues.entities) {
			let convertedObject = convertJSTypesToBSONTypes(gcQueue, queueJSONSchema);
			expect(typeof convertedObject).toBe("object");
		}
	});
});
