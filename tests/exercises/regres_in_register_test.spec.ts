import { test } from "@playwright/test";
import { faker } from "@faker-js/faker";

test("regres_in_register_test.spec.ts", async ({
  request,
}) => {
await request.post(
    "https://reqres.in/api/register",
    {
      data: {
    "email": "eve.holt@reqres.in",
    "password": "pistol"
}
Header:
Accept-Encoding: gzip, deflate, br
    }
  );