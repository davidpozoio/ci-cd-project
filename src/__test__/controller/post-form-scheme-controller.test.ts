import { describe, expect, test } from "@jest/globals";
import request from "supertest";
import app from "../../app";
import ENV from "../../consts/env";
import formSchemeRepositoryMock from "../../__mocks__/form-scheme-repository";

describe("POST /form-schemes", () => {
  test("should return label is required validation error", async () => {
    formSchemeRepositoryMock.save.mockImplementation(
      async (formScheme) => formScheme
    );

    const response = await request(app).post(`${ENV.API_PREFIX}/form-schemes`);

    expect(response.statusCode).toBe(400);
    expect(response.body.errors).not.toBeUndefined();
  });

  test("should create new formScheme", async () => {
    formSchemeRepositoryMock.save.mockImplementation(
      async (formScheme) => formScheme
    );

    const response = await request(app)
      .post(`${ENV.API_PREFIX}/form-schemes`)
      .send({ label: "uno" });
    expect(response.statusCode).toBe(200);
    expect(response.body.formScheme.label).toBe("uno");
  });
});
