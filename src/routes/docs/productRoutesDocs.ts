const productDocs = {
  "/products": {
    get: {
      summary: "Get all products",
      description: "Retrieve a list of all products.",
      security: [{ bearerAuth: [] }],
      responses: {
        "200": {
          description: "A list of products.",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/Product" },
              },
            },
          },
        },
      },
    },
    post: {
      summary: "Create a new product",
      description: "Create a new product.",
      security: [{ bearerAuth: [] }],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/productDto" },
          },
        },
      },
      responses: {
        "201": {
          description: "Product created successfully.",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Product" },
            },
          },
        },
      },
    },
  },
  "/products/{id}": {
    get: {
      summary: "Get a product by ID",
      description: "Retrieve a specific product by its ID.",
      security: [{ bearerAuth: [] }],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "ID of the product to retrieve.",
          schema: { type: "string" },
        },
      ],
      responses: {
        "200": {
          description: "Product found.",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Product" },
            },
          },
        },
        "404": { description: "Product not found." },
      },
    },
    put: {
      summary: "Update a product",
      description: "Update an existing product.",
      security: [{ bearerAuth: [] }],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "ID of the product to update.",
          schema: { type: "string" },
        },
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/productDto" },
          },
        },
      },
      responses: {
        "200": {
          description: "Product updated successfully.",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Product" },
            },
          },
        },
        "404": { description: "Product not found." },
      },
    },
    delete: {
      summary: "Delete a product",
      description: "Remove a product by its ID.",
      security: [{ bearerAuth: [] }],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "ID of the product to delete.",
          schema: { type: "string" },
        },
      ],
      responses: {
        "204": { description: "Product deleted successfully." },
        "404": { description: "Product not found." },
      },
    },
  },
};

export default productDocs;
