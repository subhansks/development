"use server";

import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { cookies } from "next/headers";

export const AuthValidation = async () => {
  const cookie = cookies();
  const isValid = await validateCookie(cookie);

  return isValid;
};

const validateCookie = async (cookie: ReadonlyRequestCookies) => {
  return false;
};
