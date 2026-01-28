import { Response } from "express";

export const setCookie = (res: Response, name: string, value: string) => {
  const isProd = process.env.NODE_ENV === "production";

  res.cookie(name, value, {
    httpOnly: true,
    secure: isProd,
    sameSite: isProd ? "none" : "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });
};
