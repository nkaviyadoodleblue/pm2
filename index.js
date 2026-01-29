  GNU nano 6.3                                                                      index.js                                                                      Modified
/**
 * Copyright 2013-2022 the PM2 project authors. All rights reserved.
 * Use of this source code is governed by a license that
 * can be found in the LICENSE file.
 */
const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello! Node.js app is running with PM2 🚀');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
