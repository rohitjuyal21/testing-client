import { NextApiRequest, NextApiResponse } from "next";
import httpProxyMiddleware from "next-http-proxy-middleware";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default (req: NextApiRequest, res: NextApiResponse) =>
  httpProxyMiddleware(req, res, {
    target: "https://testing-server-z6n6.onrender.com",
    changeOrigin: true,
    pathRewrite: [
      {
        patternStr: "^/api",
        replaceStr: "",
      },
    ],
  });
