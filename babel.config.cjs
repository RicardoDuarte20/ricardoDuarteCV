module.exports = {
  presets: [require.resolve('@docusaurus/core/lib/babel/preset')],
  env: {
    test: {
      plugins: [
        "dynamic-import-node"
      ]
    }
  }
};
