# MongoDB Utilities for Node.js

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

The MongoDB Utilities for Node.js is an easy-to-use toolbox to work with MongoDB data and schemas.

## Table of Contents

- [What is New](#what-is-new)
  - [Version 0.1.0](#version-010)
- [Installation](#installation)
- [Usage](#usage)
- [`convertJSTypesToBSONTypes`](#convertjstypestobsontypes)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## What is New

### Version 0.1.0

- Initial beta release.

## Installation

You can install this module via `npm`:

```shell
npm install @jfabello/mongodb-utils
```

## Usage

To use the `mongodb-utils` module, first import it into your code and then use the functions as needed. For example:

```javascript
import { convertJSTypesToBSONTypes } from '@jfabello/mongodb-utils';

const jsObject = {
  name: 'John Doe',
  age: 30,
  isActive: true,
  createdAt: new Date(),
  lastLogin: null,
};

const mongodbJSONSchema = {
  $jsonSchema: {
    bsonType: 'object',
    properties: {
      name: { bsonType: 'string' },
      age: { bsonType: 'int' },
      isActive: { bsonType: 'bool' },
      createdAt: { bsonType: 'date' },
      lastLogin: { bsonType: 'date' },
    },
  },
};

const bsonObject = convertJSTypesToBSONTypes(jsObject, mongodbJSONSchema);

console.dir(bsonObject, {depth: null});
```

## `convertJSTypesToBSONTypes()`

The `convertJSTypesToBSONTypes()` function converts the JavaScript types of an object to BSON types using a MongoDB JSON schema.

### Parameters

- `object` (object): The object whose JavaScript types will be converted to BSON types.
- `mongodbJSONSchema` (object): The MongoDB JSON schema used to determine the BSON types.

### Returns

An object with the JavaScript types converted to BSON types.

### Throws

- `ERROR_MONGODB_UTILS_OBJECT_ARGUMENT_TYPE_INVALID`: If the `object` argument type is not an object.
- `ERROR_MONGODB_UTILS_JSON_SCHEMA_ARGUMENT_TYPE_INVALID`: If the `mongodbJSONSchema` argument type is not an object.
- `ERROR_MONGODB_UTILS_JSONSCHEMA_PROPERTY_NOT_FOUND`: If the `$jsonSchema` property was not found in the MongoDB JSON schema.
- `ERROR_MONGODB_UTILS_JSONSCHEMA_TYPE_INVALID`: If the `$jsonSchema` property type is not an object.
- `ERROR_MONGODB_UTILS_BSONTYPE_PROPERTY_NOT_FOUND`: If the `bsonType` property was not found in the MongoDB JSON schema fragment.
- `ERROR_MONGODB_UTILS_UNEXPECTED_OBJECT_FRAGMENT_TYPE`: If the object fragment type is not expected.
- `ERROR_MONGODB_UTILS_ADDITIONAL_PROPERTIES_NOT_ALLOWED`: If additional properties are not allowed in the MongoDB JSON schema fragment.
- `ERROR_MONGODB_UTILS_ITEMS_PROPERTY_NOT_FOUND`: If the `items` property was not found in the MongoDB JSON schema fragment.
- `ERROR_MONGODB_UTILS_UNEXPECTED_BSON_TYPE`: If the BSON type in the MongoDB JSON schema fragment is not expected.

## Testing

To run the tests for this module, first clone the repository using the following command:

```shell
git clone https://github.com/jfabello/mongodb-utils.git
```

Then, navigate to the project directory and install the npm dependencies, this will install the Jest testing framework:

```shell
cd mongodb-utils
npm install
```

Finally, run the tests using the following command:

```shell
npm test
```

## Contributing

Unfortunately, we are not able to accept contributions at this time.

If you find a bug in the code, please open an issue.

Thank you for your understanding.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.