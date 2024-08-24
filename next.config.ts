module.exports = {
  async rewrites() {
    console.log("Rewrites are being applied");
    return [
      {
        source: "/api/:path*", // Matches any API requests starting with /api/
        destination: "https://testing-server-z6n6.onrender.com/:path*", // Proxy to your backend
      },
    ];
  },
};
