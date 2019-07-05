module.exports = {
  'src/**/*.{css|sass|scss}': ['npm run fix:style', 'git add'],
  'src/**/*.{js|json}': ['npm run fix:code', 'git add']
};
