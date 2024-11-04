const authDocs = {
  "/register": {
    post: {
      summary: "Register a new user",
      tags: ["Auth"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/userDto" },
          },
        },
      },
      responses: {
        "200": {
          description: "Product created successfully.",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/User" },
            },
          },
        },
        400: {
          description: "Bad request",
        },
      },
    },
  },
  "/login": {
    post: {
      summary: "Login a new user",
      tags: ["Auth"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/login" },
          },
        },
      },
      responses: {
        200: {
          description: "User registered successfully",
          content: {
            "application/json": {
              schema: { $ref: "#/components/login" },
            },
          },
        },
        400: {
          description: "Bad request",
        },
      },
    },
  },
};

export default authDocs;
