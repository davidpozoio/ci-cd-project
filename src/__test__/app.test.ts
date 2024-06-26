import { describe, expect, test } from "@jest/globals";
import request from "supertest";
import app from "../app";
import ENV from "../consts/env";

describe("app", () => {
  test("should start", async () => {
    const response = await request(app).get(`${ENV.API_PREFIX}/health`);

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("health");
  });

  test("should show not found message", async () => {
    const response = await request(app).get(
      `${ENV.API_PREFIX}/${Math.random()}`
    );

    expect(response.statusCode).toBe(404);
    expect(response.body.message).toBe("route not found");
  });
});
