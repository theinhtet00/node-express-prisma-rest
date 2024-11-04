const components = {
  user: {
    type: "object",
    properties: {
      id: { type: "integer", example: 1 },
      name: { type: "string", example: "Thein Htet Oo" },
      email: { type: "string", format: "email" },
      password: { type: "string", format: "password", example: "1234" },
      createdAt: { type: "string", format: "date-time" },
    },
  },
  userDto: {
    type: "object",
    properties: {
      name: { type: "string", example: "Thein Htet Oo" },
      email: { type: "string", format: "email" },
      password: { type: "string", format: "password", example: "1234" },
    },
    required: ["name", "email", "password"],
  },
  login: {
    type: "object",
    properties: {
      token: { type: "string", format: "byte" },
    },
  },
  productDto: {
    type: "object",
    properties: {
      name: { type: "string", example: "iPhone 16 pro max" },
      price: { type: "number", format: "float", example: 50000 },
    },
  },
  schemas: {
    User: {
      type: "object",
      properties: {
        message: { type: "string", example: "User registered successfully" },
        user: { $ref: "#/components/user" },
      },
      required: ["id", "name", "email", "password"],
    },

    Product: {
      type: "object",
      properties: {
        id: { type: "integer", example: 1 },
        name: { type: "string", example: "iphone 16 pro max" },
        price: { type: "number", format: "float", example: 50000 },
        userId: { type: "integer", example: 1 },
      },
      required: ["id", "name", "price", "userId"],
    },
  },
};

export default components;
