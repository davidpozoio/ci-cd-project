import { beforeEach, describe, expect, jest, test } from "@jest/globals";
import request from "supertest";
import app from "../../app";
import ENV from "../../consts/env";
import formSchemeRepositoryMock from "../../__mocks__/form-scheme-repository";
import { FormScheme } from "../../types/form-scheme";
import ErrorsIdentifier from "../../consts/errors-identifiers";

describe("GET /form-schemes", () => {
  const formSchemeMock: FormScheme = {
    id: "123",
    label: "Hola",
    formGroups: [],
  };

  test("should get all form schemes", async () => {
    formSchemeRepositoryMock.findAll.mockImplementation(async () => [
      formSchemeMock,
    ]);
    const response = await request(app).get(`${ENV.API_PREFIX}/form-schemes`);
    expect(response.statusCode).toBe(200);
    expect(response.body.formSchemes).not.toBeUndefined();
    expect(response.body.formSchemes?.[0]?.id).toBe(formSchemeMock.id);
    expect(response.body.formSchemes?.[0]?.label).toBe(formSchemeMock.label);
    expect(response.body.formSchemes?.[0]?.formGroups?.length).toBe(0);
  });

  test("should get form-scheme by id", async () => {
    formSchemeRepositoryMock.findById.mockImplementation(
      async () => formSchemeMock
    );
    const response = await request(app).get(
      `${ENV.API_PREFIX}/form-schemes/${crypto.randomUUID()}`
    );
    console.log(response.body);
    expect(response.statusCode).toBe(200);
    expect(response.body.formScheme.id).toBe(formSchemeMock.id);
    expect(response.body.formScheme.label).toBe(formSchemeMock.label);
  });

  test("should return invalid UUID provided", async () => {
    formSchemeRepositoryMock.findById.mockImplementation(
      async () => formSchemeMock
    );
    const response = await request(app).get(`${ENV.API_PREFIX}/form-schemes/1`);
    expect(response.statusCode).toBe(400);
    expect(response.body.code).toBe(ErrorsIdentifier.InvalidUUID);
  });

  test("should return not found formScheme error", async () => {
    formSchemeRepositoryMock.findById.mockImplementation(async () => undefined);

    const response = await request(app).get(
      `${ENV.API_PREFIX}/form-schemes/${crypto.randomUUID()}`
    );
    expect(response.statusCode).toBe(404);
    expect(response.body.code).toBe(ErrorsIdentifier.NotFound);
  });
});
