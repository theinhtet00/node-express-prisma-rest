const authDocs = {
  "/register": {
    post: {
      summary: "Register a new user",
      tags: ["Auth"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                name: {
                  type: "string",
                  description: "The user's name",
                },
                email: {
                  type: "string",
                  description: "The user's email",
                },
                password: {
                  type: "string",
                  description: "The user's password",
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "User registered successfully",
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
            schema: {
              type: "object",
              properties: {
                email: {
                  type: "string",
                  description: "The user's email",
                },
                password: {
                  type: "string",
                  description: "The user's password",
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "User registered successfully",
        },
        400: {
          description: "Bad request",
        },
      },
    },
  },
};

export default authDocs;
