const fs = require('fs');

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;

const title = process.argv.slice(2).join(" ") || 'New Post';
const _title = title.toLowerCase().replaceAll(" ", "-");
const path = `./src/pages/posts/${year}/${month}/${_title}`;

fs.mkdirSync(path, {recursive: true});

const fm = `---
title: ${title}
banner: holder.js/100px180?theme=industrial&text=${title}
tags: []
created: ${date.toISOString()}
---

# ${title}

`

fs.writeFileSync(`${path}/index.mdx`, fm);
