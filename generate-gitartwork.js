const fs = require('fs');

// Parameters
const userName = process.env.USER_NAME || 'jasineri';
const text = process.env.TEXT || 'ARPAN';

// Example SVG content
const svgContent = `
<svg width="600" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#f5f5f5"/>
  <text x="10" y="40" font-family="Arial" font-size="24" fill="#333">
    The following actions use Node.js version which is deprecated
  </text>
  <text x="10" y="80" font-family="Arial" font-size="20" fill="#666">
    and will be forced to run on Node 20:
  </text>
  <text x="10" y="120" font-family="Arial" font-size="20" fill="#000">
    actions/checkout@v3, jasineri/gitartwork@v1.
  </text>
  <text x="10" y="160" font-family="Arial" font-size="20" fill="#0073e6">
    For more info: https://github.blog/changelog/2024-03-07-github-actions-all-actions-will-run-on-node20-instead-of-node16-by-default/
  </text>
</svg>
`;

// Write the SVG content to a file
fs.writeFileSync('gitartwork.svg', svgContent, 'utf8');
