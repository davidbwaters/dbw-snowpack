module.exports = {
  alias: {},
  buildOptions: {
    clean: true, 
    metaDir: 'meta',
    webModulesUrl: 'modules'
  },
  devOptions: {},
  install: [
    'three/examples/jsm/postprocessing/EffectComposer',
    'three/examples/jsm/postprocessing/RenderPass',
    'three/examples/jsm/postprocessing/ShaderPass',
    'three/src/Three.js'
  ],
  installOptions: {
    namedExports: [
      'curtainsjs',
      'three/examples/jsm/postprocessing/EffectComposer'
    ]
  },
  exclude: [
    '**/*.scss',
    '**/modules/*',
    '**/node_modules/*',
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
        cmd: 'sass -I ./ src/stylesheets/main.scss:static/stylesheets/main.css --no-source-map',
        watch: '$1 --watch'
      }
    ]
  ]
}
