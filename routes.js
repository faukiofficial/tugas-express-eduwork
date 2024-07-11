const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(`
            <h1>Welcome</h1>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/json">JSON page</a></li>
            </ul>
        `);
});

router.get("/about", (req, res) => {
  res.send(`
            <h1>About</h1>
            <p>
                Express.js adalah kerangka kerja (framework) web untuk Node.js yang mempermudah pembuatan aplikasi web dan API. Framework ini menyediakan berbagai fitur untuk mengelola routing, middleware, dan penanganan permintaan HTTP secara efisien. Express.js mendukung arsitektur MVC (Model-View-Controller) dan sangat fleksibel, memungkinkan pengembang untuk menggunakan berbagai middleware dan template engine. Karena sifatnya yang minimalis dan performa tinggi, Express.js sangat populer dalam pengembangan aplikasi web modern.
            </p>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/json">JSON page</a></li>
            </ul>
        `);
});

router.get("/json", (req, res) => {
  res.json({
    message: 'Ini adalah halaman json',
    data: {
      nama: 'Fauki',
      alamat: 'Bogor',
    }
  });
});

module.exports = router;
