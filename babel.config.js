module.exports = {
  plugins: [
    [
      '@babel/plugin-proposal-decorators', 
      { decoratorsBeforeExport: true }
    ],
    [
      '@babel/plugin-proposal-class-properties', 
      { loose: true }
    ],
  ],
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        targets: {
          esmodules: true,
        },
        useBuiltIns: 'usage',
        corejs: { version: '3' }
      }
    ]
  ]
}
