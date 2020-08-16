module.exports = {
  buildOptions: {
    clean: true, 
    metaDir: 'meta',
    webModulesUrl: 'modules'
  },
  devOptions: {},
  exclude: [
    '**/*.scss',
    '**/modules/*',
    '**/node_modules/*',
    '**/static/*',
    '**/tests/*',
  ],
  mount: {
    src: '/',
    static: '/'
  },
  plugins: [
    '@snowpack/plugin-babel', 
    '@snowpack/plugin-dotenv',
    'legacy-bundle-snowpack-plugin',
    [
      '@snowpack/plugin-run-script',
      {
        cmd: 'sass -I ./ src/stylesheets/main.scss:static/main.css --no-source-map',
        watch: '$1 --watch'
      }
    ]
  ]
}
