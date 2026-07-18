# Production Debug Support � Backend Source Export

## 1. Complete Project Structure

`	ext
Folder PATH listing for volume DATA
Volume serial number is 0000021D 8644:54DD
D:\ASSIGNMENT\PLAYSTACK\BACKEND
�   .env
�   .env.example
�   package-lock.json
�   package.json
�   tsconfig.json
�   
�   �   app.js
�   �   index.js
�   �   seed.js
�   �   server.js
�   �   verify_milestone2.js
�   �   verify_milestone3.js
�   �   verify_milestone4.js
�   �   verify_milestone6.js
�   �   
�   +---config
�   �       db.js
�   �       env.js
�   �       index.js
�   �       
�   +---controllers
�   �       auth.controller.js
�   �       dashboard.controller.js
�   �       employee.controller.js
�   �       index.js
�   �       organization.controller.js
�   �       
�   +---middlewares
�   �       auth.middleware.js
�   �       error.middleware.js
�   �       index.js
�   �       role.middleware.js
�   �       validate.middleware.js
�   �       
�   +---models
�   �       Employee.js
�   �       index.js
�   �       
�   +---repositories
�   �       dashboard.repository.js
�   �       employee.repository.js
�   �       index.js
�   �       organization.repository.js
�   �       
�   +---routes
�   �       auth.routes.js
�   �       dashboard.routes.js
�   �       employee.routes.js
�   �       index.js
�   �       organization.routes.js
�   �       
�   +---services
�   �       auth.service.js
�   �       dashboard.service.js
�   �       employee.service.js
�   �       index.js
�   �       organization.service.js
�   �       
�   +---utils
�   �       AppError.js
�   �       asyncWrapper.js
�   �       constants.js
�   �       hash.js
�   �       index.js
�   �       jwt.js
�   �       response.js
�   �       
�   +---validators
�           employee.validator.js
�           index.js
�           
�   �   .package-lock.json
�   �   
�   +---.bcrypt-xQSod6BH
�   �   +---prebuilds
�   �       +---win32-x64
�   �               bcrypt.node
�   �               
�   +---.bin
�   �       acorn
�   �       acorn.cmd
�   �       acorn.ps1
�   �       bcrypt
�   �       bcrypt.cmd
�   �       bcrypt.ps1
�   �       eslint
�   �       eslint.cmd
�   �       eslint.ps1
�   �       node-which
�   �       node-which.cmd
�   �       node-which.ps1
�   �       nodemon
�   �       nodemon.cmd
�   �       nodemon.ps1
�   �       nodetouch
�   �       nodetouch.cmd
�   �       nodetouch.ps1
�   �       prettier
�   �       prettier.cmd
�   �       prettier.ps1
�   �       semver
�   �       semver.cmd
�   �       semver.ps1
�   �       ts-node
�   �       ts-node-cwd
�   �       ts-node-cwd.cmd
�   �       ts-node-cwd.ps1
�   �       ts-node-esm
�   �       ts-node-esm.cmd
�   �       ts-node-esm.ps1
�   �       ts-node-script
�   �       ts-node-script.cmd
�   �       ts-node-script.ps1
�   �       ts-node-transpile-only
�   �       ts-node-transpile-only.cmd
�   �       ts-node-transpile-only.ps1
�   �       ts-node.cmd
�   �       ts-node.ps1
�   �       ts-script
�   �       ts-script.cmd
�   �       ts-script.ps1
�   �       tsc
�   �       tsc.cmd
�   �       tsc.ps1
�   �       
�   +---@cspotcode
�   �   +---source-map-support
�   �           browser-source-map-support.js
�   �           LICENSE.md
�   �           package.json
�   �           README.md
�   �           register-hook-require.d.ts
�   �           register-hook-require.js
�   �           register.d.ts
�   �           register.js
�   �           source-map-support.d.ts
�   �           source-map-support.js
�   �           
�   +---@eslint
�   �   +---config-array
�   �   �   �   LICENSE
�   �   �   �   package.json
�   �   �   �   README.md
�   �   �   �   
�   �   �       +---cjs
�   �   �       �   �   index.cjs
�   �   �       �   �   index.d.cts
�   �   �       �   �   types.cts
�   �   �       �   �   
�   �   �       �   +---std__path
�   �   �       �           posix.cjs
�   �   �       �           windows.cjs
�   �   �       �           
�   �   �       +---esm
�   �   �           �   index.d.ts
�   �   �           �   index.js
�   �   �           �   types.d.ts
�   �   �           �   types.ts
�   �   �           �   
�   �   �           +---std__path
�   �   �                   posix.js
�   �   �                   windows.js
�   �   �                   
�   �   +---config-helpers
�   �   �   �   LICENSE
�   �   �   �   package.json
�   �   �   �   README.md
�   �   �   �   
�   �   �       +---cjs
�   �   �       �       index.cjs
�   �   �       �       index.d.cts
�   �   �       �       types.cts
�   �   �       �       
�   �   �       +---esm
�   �   �               index.d.ts
�   �   �               index.js
�   �   �               types.d.ts
�   �   �               types.ts
�   �   �               
�   �   +---core
�   �   �   �   LICENSE
�   �   �   �   package.json
�   �   �   �   README.md
�   �   �   �   
�   �   �       +---cjs
�   �   �       �       types.d.cts
�   �   �       �       
�   �   �       +---esm
�   �   �               types.d.ts
�   �   �               
�   �   +---object-schema
�   �   �   �   LICENSE
�   �   �   �   package.json
�   �   �   �   README.md
�   �   �   �   
�   �   �       +---cjs
�   �   �       �       index.cjs
�   �   �       �       index.d.cts
�   �   �       �       types.cts
�   �   �       �       
�   �   �       +---esm
�   �   �               index.d.ts
�   �   �               index.js
�   �   �               types.d.ts
�   �   �               types.ts
�   �   �               
�   �   +---plugin-kit
�   �       �   LICENSE
�   �       �   package.json
�   �       �   README.md
�   �       �   
�   �           +---cjs
�   �           �       index.cjs
�   �           �       index.d.cts
�   �           �       types.cts
�   �           �       types.d.cts
�   �           �       
�   �           +---esm
�   �                   index.d.ts
�   �                   index.js
�   �                   types.d.ts
�   �                   types.ts
�   �                   
�   +---@eslint-community
�   �   +---eslint-utils
�   �   �   �   index.d.mts
�   �   �   �   index.d.ts
�   �   �   �   index.js
�   �   �   �   index.js.map
�   �   �   �   index.mjs
�   �   �   �   index.mjs.map
�   �   �   �   LICENSE
�   �   �   �   package.json
�   �   �   �   README.md
�   �   �   �   
�   �   �       +---eslint-visitor-keys
�   �   �           �   LICENSE
�   �   �           �   package.json
�   �   �           �   README.md
�   �   �           �   
�   �   �           �       eslint-visitor-keys.cjs
�   �   �           �       eslint-visitor-keys.d.cts
�   �   �           �       index.d.ts
�   �   �           �       visitor-keys.d.ts
�   �   �           �       
�   �   �           +---lib
�   �   �                   index.js
�   �   �                   visitor-keys.js
�   �   �                   
�   �   +---regexpp
�   �           index.d.ts
�   �           index.js
�   �           index.js.map
�   �           index.mjs
�   �           index.mjs.map
�   �           LICENSE
�   �           package.json
�   �           README.md
�   �           
�   +---@humanfs
�   �   +---core
�   �   �   �   LICENSE
�   �   �   �   package.json
�   �   �   �   README.md
�   �   �   �   
�   �   �   �       errors.d.ts
�   �   �   �       fsx.d.ts
�   �   �   �       hfs.d.ts
�   �   �   �       index.d.ts
�   �   �   �       path.d.ts
�   �   �   �       
�   �   �   +---src
�   �   �           errors.js
�   �   �           hfs.js
�   �   �           index.js
�   �   �           path.js
�   �   �           
�   �   +---node
�   �   �   �   LICENSE
�   �   �   �   package.json
�   �   �   �   README.md
�   �   �   �   
�   �   �   �       index.d.ts
�   �   �   �       node-fsx.d.ts
�   �   �   �       node-hfs.d.ts
�   �   �   �       
�   �   �   +---src
�   �   �           index.js
�   �   �           node-hfs.js
�   �   �           
�   �   +---types
�   �       �   CHANGELOG.md
�   �       �   package.json
�   �       �   README.md
�   �       �   tsconfig.json
�   �       �   
�   �       +---src
�   �               hfs-types.ts
�   �               
�   +---@humanwhocodes
�   �   +---module-importer
�   �   �   �   CHANGELOG.md
�   �   �   �   LICENSE
�   �   �   �   package.json
�   �   �   �   README.md
�   �   �   �   
�   �   �   �       module-importer.cjs
�   �   �   �       module-importer.d.cts
�   �   �   �       module-importer.d.ts
�   �   �   �       module-importer.js
�   �   �   �       
�   �   �   +---src
�   �   �           module-importer.cjs
�   �   �           module-importer.js
�   �   �           
�   �   +---retry
�   �       �   LICENSE
�   �       �   package.json
�   �       �   README.md
�   �       �   
�   �               retrier.cjs
�   �               retrier.d.cts
�   �               retrier.d.ts
�   �               retrier.js
�   �               retrier.min.js
�   �               retrier.mjs
�   �               
�   +---@jridgewell
�   �   +---resolve-uri
�   �   �   �   LICENSE
�   �   �   �   package.json
�   �   �   �   README.md
�   �   �   �   
�   �   �       �   resolve-uri.mjs
�   �   �       �   resolve-uri.mjs.map
�   �   �       �   resolve-uri.umd.js
�   �   �       �   resolve-uri.umd.js.map
�   �   �       �   
�   �   �       +---types
�   �   �               resolve-uri.d.ts
�   �   �               
�   �   +---sourcemap-codec
�   �   �   �   LICENSE
�   �   �   �   package.json
�   �   �   �   README.md
�   �   �   �   
�   �   �   �       sourcemap-codec.mjs
�   �   �   �       sourcemap-codec.mjs.map
�   �   �   �       sourcemap-codec.umd.js
�   �   �   �       sourcemap-codec.umd.js.map
�   �   �   �       
�   �   �   +---src
�   �   �   �       scopes.ts
�   �   �   �       sourcemap-codec.ts
�   �   �   �       strings.ts
�   �   �   �       vlq.ts
�   �   �   �       
�   �   �   +---types
�   �   �           scopes.d.cts
�   �   �           scopes.d.cts.map
�   �   �           scopes.d.mts
�   �   �           scopes.d.mts.map
�   �   �           sourcemap-codec.d.cts
�   �   �           sourcemap-codec.d.cts.map
�   �   �           sourcemap-codec.d.mts
�   �   �           sourcemap-codec.d.mts.map
�   �   �           strings.d.cts
�   �   �           strings.d.cts.map
�   �   �           strings.d.mts
�   �   �           strings.d.mts.map
�   �   �           vlq.d.cts
�   �   �           vlq.d.cts.map
�   �   �           vlq.d.mts
�   �   �           vlq.d.mts.map
�   �   �           
�   �   +---trace-mapping
�   �       �   LICENSE
�   �       �   package.json
�   �       �   README.md
�   �       �   
�   �           �   trace-mapping.mjs
�   �           �   trace-mapping.mjs.map
�   �           �   trace-mapping.umd.js
�   �           �   trace-mapping.umd.js.map
�   �           �   
�   �           +---types
�   �                   any-map.d.ts
�   �                   binary-search.d.ts
�   �                   by-source.d.ts
�   �                   resolve.d.ts
�   �                   sort.d.ts
�   �                   sourcemap-segment.d.ts
�   �                   strip-filename.d.ts
�   �                   trace-mapping.d.ts
�   �                   types.d.ts
�   �                   
�   +---@mongodb-js
�   �   +---saslprep
�   �       �   LICENSE
�   �       �   package.json
�   �       �   readme.md
�   �       �   
�   �               .esm-wrapper.mjs
�   �               browser.d.ts
�   �               browser.d.ts.map
�   �               browser.js
�   �               browser.js.map
�   �               code-points-data-browser.d.ts
�   �               code-points-data-browser.d.ts.map
�   �               code-points-data-browser.js
�   �               code-points-data-browser.js.map
�   �               code-points-data.d.ts
�   �               code-points-data.d.ts.map
�   �               code-points-data.js
�   �               code-points-data.js.map
�   �               code-points-src.d.ts
�   �               code-points-src.d.ts.map
�   �               code-points-src.js
�   �               code-points-src.js.map
�   �               generate-code-points.d.ts
�   �               generate-code-points.d.ts.map
�   �               generate-code-points.js
�   �               generate-code-points.js.map
�   �               index.d.ts
�   �               index.d.ts.map
�   �               index.js
�   �               index.js.map
�   �               memory-code-points.d.ts
�   �               memory-code-points.d.ts.map
�   �               memory-code-points.js
�   �               memory-code-points.js.map
�   �               node.d.ts
�   �               node.d.ts.map
�   �               node.js
�   �               node.js.map
�   �               util.d.ts
�   �               util.d.ts.map
�   �               util.js
�   �               util.js.map
�   �               
�   +---@standard-schema
�   �   +---spec
�   �       �   LICENSE
�   �       �   package.json
�   �       �   README.md
�   �       �   
�   �               index.cjs
�   �               index.d.cts
�   �               index.d.ts
�   �               index.js
�   �               
�   +---@tsconfig
�   �   +---node10
�   �   �       LICENSE
�   �   �       package.json
�   �   �       README.md
�   �   �       tsconfig.json
�   �   �       
�   �   +---node12
�   �   �       LICENSE
�   �   �       package.json
�   �   �       README.md
�   �   �       tsconfig.json
�   �   �       
�   �   +---node14
�   �   �       LICENSE
�   �   �       package.json
�   �   �       README.md
�   �   �       tsconfig.json
�   �   �       
�   �   +---node16
�   �           LICENSE
�   �           package.json
�   �           README.md
�   �           tsconfig.json
�   �           
�   +---@types
�   �   +---bcryptjs
�   �   �       index.d.ts
�   �   �       LICENSE
�   �   �       package.json
�   �   �       README.md
�   �   �       
�   �   +---body-parser
�   �   �       index.d.ts
�   �   �       LICENSE
�   �   �       package.json
�   �   �       README.md
�   �   �       
�   �   +---connect
�   �   �       index.d.ts
�   �   �       LICENSE
�   �   �       package.json
�   �   �       README.md
�   �   �       
�   �   +---cors
�   �   �       index.d.ts
�   �   �       LICENSE
�   �   �       package.json
�   �   �       README.md
�   �   �       
�   �   +---esrecurse
�   �   �       index.d.ts
�   �   �       LICENSE
�   �   �       package.json
�   �   �       README.md
�   �   �       
�   �   +---estree
�   �   �       flow.d.ts
�   �   �       index.d.ts
�   �   �       LICENSE
�   �   �       package.json
�   �   �       README.md
�   �   �       
�   �   +---express
�   �   �       index.d.ts
�   �   �       LICENSE
�   �   �       package.json
�   �   �       README.md
�   �   �       
�   �   +---express-serve-static-core
�   �   �       index.d.ts
�   �   �       LICENSE
�   �   �       package.json
�   �   �       README.md
�   �   �       
�   �   +---http-errors
�   �   �       index.d.ts
�   �   �       LICENSE
�   �   �       package.json
�   �   �       README.md
�   �   �       
�   �   +---json-schema
�   �   �       index.d.ts
�   �   �       LICENSE
�   �   �       package.json
�   �   �       README.md
�   �   �       
�   �   +---jsonwebtoken
�   �   �       index.d.ts
�   �   �       LICENSE
�   �   �       package.json
�   �   �       README.md
�   �   �       
�   �   +---ms
�   �   �       index.d.ts
�   �   �       LICENSE
�   �   �       package.json
�   �   �       README.md
�   �   �       
�   �   +---node
�   �   �   �   assert.d.ts
�   �   �   �   async_hooks.d.ts
�   �   �   �   buffer.buffer.d.ts
�   �   �   �   buffer.d.ts
�   �   �   �   child_process.d.ts
�   �   �   �   cluster.d.ts
�   �   �   �   console.d.ts
�   �   �   �   constants.d.ts
�   �   �   �   crypto.d.ts
�   �   �   �   dgram.d.ts
�   �   �   �   diagnostics_channel.d.ts
�   �   �   �   dns.d.ts
�   �   �   �   domain.d.ts
�   �   �   �   events.d.ts
�   �   �   �   ffi.d.ts
�   �   �   �   fs.d.ts
�   �   �   �   globals.d.ts
�   �   �   �   globals.typedarray.d.ts
�   �   �   �   http.d.ts
�   �   �   �   http2.d.ts
�   �   �   �   https.d.ts
�   �   �   �   index.d.ts
�   �   �   �   inspector.d.ts
�   �   �   �   inspector.generated.d.ts
�   �   �   �   LICENSE
�   �   �   �   module.d.ts
�   �   �   �   net.d.ts
�   �   �   �   os.d.ts
�   �   �   �   package.json
�   �   �   �   path.d.ts
�   �   �   �   perf_hooks.d.ts
�   �   �   �   process.d.ts
�   �   �   �   punycode.d.ts
�   �   �   �   querystring.d.ts
�   �   �   �   quic.d.ts
�   �   �   �   readline.d.ts
�   �   �   �   README.md
�   �   �   �   repl.d.ts
�   �   �   �   sea.d.ts
�   �   �   �   sqlite.d.ts
�   �   �   �   stream.d.ts
�   �   �   �   string_decoder.d.ts
�   �   �   �   test.d.ts
�   �   �   �   timers.d.ts
�   �   �   �   tls.d.ts
�   �   �   �   trace_events.d.ts
�   �   �   �   tty.d.ts
�   �   �   �   url.d.ts
�   �   �   �   util.d.ts
�   �   �   �   v8.d.ts
�   �   �   �   vm.d.ts
�   �   �   �   wasi.d.ts
�   �   �   �   worker_threads.d.ts
�   �   �   �   zlib.d.ts
�   �   �   �   
�   �   �   +---assert
�   �   �   �       strict.d.ts
�   �   �   �       
�   �   �   +---dns
�   �   �   �       promises.d.ts
�   �   �   �       
�   �   �   +---fs
�   �   �   �       promises.d.ts
�   �   �   �       
�   �   �   +---inspector
�   �   �   �       promises.d.ts
�   �   �   �       
�   �   �   +---path
�   �   �   �       posix.d.ts
�   �   �   �       win32.d.ts
�   �   �   �       
�   �   �   +---readline
�   �   �   �       promises.d.ts
�   �   �   �       
�   �   �   +---stream
�   �   �   �       consumers.d.ts
�   �   �   �       iter.d.ts
�   �   �   �       promises.d.ts
�   �   �   �       web.d.ts
�   �   �   �       
�   �   �   +---test
�   �   �   �       reporters.d.ts
�   �   �   �       
�   �   �   +---timers
�   �   �   �       promises.d.ts
�   �   �   �       
�   �   �   +---ts5.6
�   �   �   �   �   buffer.buffer.d.ts
�   �   �   �   �   globals.typedarray.d.ts
�   �   �   �   �   index.d.ts
�   �   �   �   �   
�   �   �   �   +---compatibility
�   �   �   �           float16array.d.ts
�   �   �   �           
�   �   �   +---ts5.7
�   �   �   �   �   index.d.ts
�   �   �   �   �   
�   �   �   �   +---compatibility
�   �   �   �           float16array.d.ts
�   �   �   �           
�   �   �   +---util
�   �   �   �       types.d.ts
�   �   �   �       
�   �   �   +---web-globals
�   �   �   �       abortcontroller.d.ts
�   �   �   �       blob.d.ts
�   �   �   �       console.d.ts
�   �   �   �       crypto.d.ts
�   �   �   �       domexception.d.ts
�   �   �   �       encoding.d.ts
�   �   �   �       events.d.ts
�   �   �   �       fetch.d.ts
�   �   �   �       importmeta.d.ts
�   �   �   �       messaging.d.ts
�   �   �   �       navigator.d.ts
�   �   �   �       performance.d.ts
�   �   �   �       storage.d.ts
�   �   �   �       streams.d.ts
�   �   �   �       timers.d.ts
�   �   �   �       url.d.ts
�   �   �   �       
�   �   �   +---zlib
�   �   �           iter.d.ts
�   �   �           
�   �   +---qs
�   �   �       index.d.ts
�   �   �       LICENSE
�   �   �       package.json
�   �   �       README.md
�   �   �       
�   �   +---range-parser
�   �   �       index.d.ts
�   �   �       LICENSE
�   �   �       package.json
�   �   �       README.md
�   �   �       
�   �   +---send
�   �   �       index.d.ts
�   �   �       LICENSE
�   �   �       package.json
�   �   �       README.md
�   �   �       
�   �   +---serve-static
�   �   �       index.d.ts
�   �   �       LICENSE
�   �   �       package.json
�   �   �       README.md
�   �   �       
�   �   +---webidl-conversions
�   �   �       index.d.ts
�   �   �       LICENSE
�   �   �       package.json
�   �   �       README.md
�   �   �       
�   �   +---whatwg-url
�   �       �   index.d.ts
�   �       �   LICENSE
�   �       �   package.json
�   �       �   README.md
�   �       �   webidl2js-wrapper.d.ts
�   �       �   
�   �       +---lib
�   �               URL-impl.d.ts
�   �               URL.d.ts
�   �               URLSearchParams-impl.d.ts
�   �               URLSearchParams.d.ts
�   �               
�   +---@typescript
�   �   +---typescript-win32-x64
�   �       �   LICENSE
�   �       �   NOTICE.txt
�   �       �   package.json
�   �       �   README.md
�   �       �   
�   �       +---lib
�   �               lib.d.ts
�   �               lib.decorators.d.ts
�   �               lib.decorators.legacy.d.ts
�   �               lib.dom.asynciterable.d.ts
�   �               lib.dom.d.ts
�   �               lib.dom.iterable.d.ts
�   �               lib.es2015.collection.d.ts
�   �               lib.es2015.core.d.ts
�   �               lib.es2015.d.ts
�   �               lib.es2015.generator.d.ts
�   �               lib.es2015.iterable.d.ts
�   �               lib.es2015.promise.d.ts
�   �               lib.es2015.proxy.d.ts
�   �               lib.es2015.reflect.d.ts
�   �               lib.es2015.symbol.d.ts
�   �               lib.es2015.symbol.wellknown.d.ts
�   �               lib.es2016.array.include.d.ts
�   �               lib.es2016.d.ts
�   �               lib.es2016.full.d.ts
�   �               lib.es2016.intl.d.ts
�   �               lib.es2017.arraybuffer.d.ts
�   �               lib.es2017.d.ts
�   �               lib.es2017.date.d.ts
�   �               lib.es2017.full.d.ts
�   �               lib.es2017.intl.d.ts
�   �               lib.es2017.object.d.ts
�   �               lib.es2017.sharedmemory.d.ts
�   �               lib.es2017.string.d.ts
�   �               lib.es2017.typedarrays.d.ts
�   �               lib.es2018.asyncgenerator.d.ts
�   �               lib.es2018.asynciterable.d.ts
�   �               lib.es2018.d.ts
�   �               lib.es2018.full.d.ts
�   �               lib.es2018.intl.d.ts
�   �               lib.es2018.promise.d.ts
�   �               lib.es2018.regexp.d.ts
�   �               lib.es2019.array.d.ts
�   �               lib.es2019.d.ts
�   �               lib.es2019.full.d.ts
�   �               lib.es2019.intl.d.ts
�   �               lib.es2019.object.d.ts
�   �               lib.es2019.string.d.ts
�   �               lib.es2019.symbol.d.ts
�   �               lib.es2020.bigint.d.ts
�   �               lib.es2020.d.ts
�   �               lib.es2020.date.d.ts
�   �               lib.es2020.full.d.ts
�   �               lib.es2020.intl.d.ts
�   �               lib.es2020.number.d.ts
�   �               lib.es2020.promise.d.ts
�   �               lib.es2020.sharedmemory.d.ts
�   �               lib.es2020.string.d.ts
�   �               lib.es2020.symbol.wellknown.d.ts
�   �               lib.es2021.d.ts
�   �               lib.es2021.full.d.ts
�   �               lib.es2021.intl.d.ts
�   �               lib.es2021.promise.d.ts
�   �               lib.es2021.string.d.ts
�   �               lib.es2021.weakref.d.ts
�   �               lib.es2022.array.d.ts
�   �               lib.es2022.d.ts
�   �               lib.es2022.error.d.ts
�   �               lib.es2022.full.d.ts
�   �               lib.es2022.intl.d.ts
�   �               lib.es2022.object.d.ts
�   �               lib.es2022.regexp.d.ts
�   �               lib.es2022.string.d.ts
�   �               lib.es2023.array.d.ts
�   �               lib.es2023.collection.d.ts
�   �               lib.es2023.d.ts
�   �               lib.es2023.full.d.ts
�   �               lib.es2023.intl.d.ts
�   �               lib.es2024.arraybuffer.d.ts
�   �               lib.es2024.collection.d.ts
�   �               lib.es2024.d.ts
�   �               lib.es2024.full.d.ts
�   �               lib.es2024.object.d.ts
�   �               lib.es2024.promise.d.ts
�   �               lib.es2024.regexp.d.ts
�   �               lib.es2024.sharedmemory.d.ts
�   �               lib.es2024.string.d.ts
�   �               lib.es2025.collection.d.ts
�   �               lib.es2025.d.ts
�   �               lib.es2025.float16.d.ts
�   �               lib.es2025.full.d.ts
�   �               lib.es2025.intl.d.ts
�   �               lib.es2025.iterator.d.ts
�   �               lib.es2025.promise.d.ts
�   �               lib.es2025.regexp.d.ts
�   �               lib.es5.d.ts
�   �               lib.es6.d.ts
�   �               lib.esnext.array.d.ts
�   �               lib.esnext.collection.d.ts
�   �               lib.esnext.d.ts
�   �               lib.esnext.date.d.ts
�   �               lib.esnext.decorators.d.ts
�   �               lib.esnext.disposable.d.ts
�   �               lib.esnext.error.d.ts
�   �               lib.esnext.full.d.ts
�   �               lib.esnext.intl.d.ts
�   �               lib.esnext.sharedmemory.d.ts
�   �               lib.esnext.temporal.d.ts
�   �               lib.esnext.typedarrays.d.ts
�   �               lib.scripthost.d.ts
�   �               lib.webworker.asynciterable.d.ts
�   �               lib.webworker.d.ts
�   �               lib.webworker.importscripts.d.ts
�   �               lib.webworker.iterable.d.ts
�   �               tsc.exe
�   �               
�   +---accepts
�   �       HISTORY.md
�   �       index.js
�   �       LICENSE
�   �       package.json
�   �       README.md
�   �       
�   +---acorn
�   �   �   CHANGELOG.md
�   �   �   LICENSE
�   �   �   package.json
�   �   �   README.md
�   �   �   
�   �   +---bin
�   �   �       acorn
�   �   �       
�   �           acorn.d.mts
�   �           acorn.d.ts
�   �           acorn.js
�   �           acorn.mjs
�   �           bin.js
�   �           
�   +---acorn-jsx
�   �       index.d.ts
�   �       index.js
�   �       LICENSE
�   �       package.json
�   �       README.md
�   �       xhtml.js
�   �       
�   +---acorn-walk
�   �   �   CHANGELOG.md
�   �   �   LICENSE
�   �   �   package.json
�   �   �   README.md
�   �   �   
�   �           walk.d.mts
�   �           walk.d.ts
�   �           walk.js
�   �           walk.mjs
�   �           
�   +---ajv
�   �   �   .tonic_example.js
�   �   �   LICENSE
�   �   �   package.json
�   �   �   README.md
�   �   �   
�   �   �       ajv.bundle.js
�   �   �       ajv.min.js
�   �   �       ajv.min.js.map
�   �   �       
�   �   +---lib
�   �   �   �   ajv.d.ts
�   �   �   �   ajv.js
�   �   �   �   cache.js
�   �   �   �   data.js
�   �   �   �   definition_schema.js
�   �   �   �   keyword.js
�   �   �   �   
�   �   �   +---compile
�   �   �   �       async.js
�   �   �   �       equal.js
�   �   �   �       error_classes.js
�   �   �   �       formats.js
�   �   �   �       index.js
�   �   �   �       resolve.js
�   �   �   �       rules.js
�   �   �   �       schema_obj.js
�   �   �   �       ucs2length.js
�   �   �   �       util.js
�   �   �   �       
�   �   �   +---dot
�   �   �   �       allOf.jst
�   �   �   �       anyOf.jst
�   �   �   �       coerce.def
�   �   �   �       comment.jst
�   �   �   �       const.jst
�   �   �   �       contains.jst
�   �   �   �       custom.jst
�   �   �   �       defaults.def
�   �   �   �       definitions.def
�   �   �   �       dependencies.jst
�   �   �   �       enum.jst
�   �   �   �       errors.def
�   �   �   �       format.jst
�   �   �   �       if.jst
�   �   �   �       items.jst
�   �   �   �       missing.def
�   �   �   �       multipleOf.jst
�   �   �   �       not.jst
�   �   �   �       oneOf.jst
�   �   �   �       pattern.jst
�   �   �   �       properties.jst
�   �   �   �       propertyNames.jst
�   �   �   �       ref.jst
�   �   �   �       required.jst
�   �   �   �       uniqueItems.jst
�   �   �   �       validate.jst
�   �   �   �       _limit.jst
�   �   �   �       _limitItems.jst
�   �   �   �       _limitLength.jst
�   �   �   �       _limitProperties.jst
�   �   �   �       
�   �   �   +---dotjs
�   �   �   �       allOf.js
�   �   �   �       anyOf.js
�   �   �   �       comment.js
�   �   �   �       const.js
�   �   �   �       contains.js
�   �   �   �       custom.js
�   �   �   �       dependencies.js
�   �   �   �       enum.js
�   �   �   �       format.js
�   �   �   �       if.js
�   �   �   �       index.js
�   �   �   �       items.js
�   �   �   �       multipleOf.js
�   �   �   �       not.js
�   �   �   �       oneOf.js
�   �   �   �       pattern.js
�   �   �   �       properties.js
�   �   �   �       propertyNames.js
�   �   �   �       README.md
�   �   �   �       ref.js
�   �   �   �       required.js
�   �   �   �       uniqueItems.js
�   �   �   �       validate.js
�   �   �   �       _limit.js
�   �   �   �       _limitItems.js
�   �   �   �       _limitLength.js
�   �   �   �       _limitProperties.js
�   �   �   �       
�   �   �   +---refs
�   �   �           data.json
�   �   �           json-schema-draft-04.json
�   �   �           json-schema-draft-06.json
�   �   �           json-schema-draft-07.json
�   �   �           json-schema-secure.json
�   �   �           
�   �   +---scripts
�   �           .eslintrc.yml
�   �           bundle.js
�   �           compile-dots.js
�   �           info
�   �           prepare-tests
�   �           publish-built-version
�   �           travis-gh-pages
�   �           
�   +---anymatch
�   �       index.d.ts
�   �       index.js
�   �       LICENSE
�   �       package.json
�   �       README.md
�   �       
�   +---arg
�   �       index.d.ts
�   �       index.js
�   �       LICENSE.md
�   �       package.json
�   �       README.md
�   �       
�   +---balanced-match
�   �   �   LICENSE.md
�   �   �   package.json
�   �   �   README.md
�   �   �   
�   �       +---commonjs
�   �       �       index.d.ts
�   �       �       index.d.ts.map
�   �       �       index.js
�   �       �       index.js.map
�   �       �       package.json
�   �       �       
�   �       +---esm
�   �               index.d.ts
�   �               index.d.ts.map
�   �               index.js
�   �               index.js.map
�   �               package.json
�   �               
�   +---bcryptjs
�   �   �   index.d.ts
�   �   �   index.js
�   �   �   LICENSE
�   �   �   package.json
�   �   �   README.md
�   �   �   types.d.ts
�   �   �   
�   �   +---bin
�   �   �       bcrypt
�   �   �       
�   �   +---umd
�   �           index.d.ts
�   �           index.js
�   �           package.json
�   �           types.d.ts
�   �           
�   +---binary-extensions
�   �       binary-extensions.json
�   �       binary-extensions.json.d.ts
�   �       index.d.ts
�   �       index.js
�   �       license
�   �       package.json
�   �       readme.md
�   �       
�   +---body-parser
�   �   �   index.js
�   �   �   LICENSE
�   �   �   package.json
�   �   �   README.md
�   �   �   
�   �   +---lib
�   �   �   �   read.js
�   �   �   �   utils.js
�   �   �   �   
�   �   �   +---types
�   �   �           json.js
�   �   �           raw.js
�   �   �           text.js
�   �   �           urlencoded.js
�   �   �           
�   �       +---content-type
�   �           �   LICENSE
�   �           �   package.json
�   �           �   README.md
�   �           �   
�   �                   index.d.ts
�   �                   index.js
�   �                   index.js.map
�   �                   
�   +---brace-expansion
�   �   �   LICENSE
�   �   �   package.json
�   �   �   README.md
�   �   �   
�   �       +---commonjs
�   �       �       index.d.ts
�   �       �       index.d.ts.map
�   �       �       index.js
�   �       �       index.js.map
�   �       �       package.json
�   �       �       
�   �       +---esm
�   �               index.d.ts
�   �               index.d.ts.map
�   �               index.js
�   �               index.js.map
�   �               package.json
�   �               
�   +---braces
�   �   �   index.js
�   �   �   LICENSE
�   �   �   package.json
�   �   �   README.md
�   �   �   
�   �   +---lib
�   �           compile.js
�   �           constants.js
�   �           expand.js
�   �           parse.js
�   �           stringify.js
�   �           utils.js
�   �           
�   +---bson
�   �   �   bson.d.ts
�   �   �   LICENSE.md
�   �   �   package.json
�   �   �   README.md
�   �   �   
�   �   +---etc
�   �   �       prepare.js
�   �   �       
�   �   +---lib
�   �   �       bson.bundle.js
�   �   �       bson.bundle.js.map
�   �   �       bson.cjs
�   �   �       bson.cjs.map
�   �   �       bson.mjs
�   �   �       bson.mjs.map
�   �   �       bson.node.mjs
�   �   �       bson.node.mjs.map
�   �   �       bson.rn.cjs
�   �   �       bson.rn.cjs.map
�   �   �       
�   �   +---src
�   �       �   binary.ts
�   �       �   bson.ts
�   �       �   bson_value.ts
�   �       �   code.ts
�   �       �   constants.ts
�   �       �   db_ref.ts
�   �       �   decimal128.ts
�   �       �   double.ts
�   �       �   error.ts
�   �       �   extended_json.ts
�   �       �   index.ts
�   �       �   int_32.ts
�   �       �   long.ts
�   �       �   max_key.ts
�   �       �   min_key.ts
�   �       �   objectid.ts
�   �       �   parse_utf8.ts
�   �       �   regexp.ts
�   �       �   symbol.ts
�   �       �   timestamp.ts
�   �       �   
�   �       +---parser
�   �       �   �   calculate_size.ts
�   �       �   �   deserializer.ts
�   �       �   �   serializer.ts
�   �       �   �   utils.ts
�   �       �   �   
�   �       �   +---on_demand
�   �       �           index.ts
�   �       �           parse_to_elements.ts
�   �       �           
�   �       +---utils
�   �               byte_utils.ts
�   �               latin.ts
�   �               node_byte_utils.ts
�   �               number_utils.ts
�   �               string_utils.ts
�   �               web_byte_utils.ts
�   �               
�   +---buffer-equal-constant-time
�   �       .npmignore
�   �       .travis.yml
�   �       index.js
�   �       LICENSE.txt
�   �       package.json
�   �       README.md
�   �       test.js
�   �       
�   +---bytes
�   �       History.md
�   �       index.js
�   �       LICENSE
�   �       package.json
�   �       Readme.md
�   �       
�   +---call-bind-apply-helpers
�   �   �   .eslintrc
�   �   �   .nycrc
�   �   �   actualApply.d.ts
�   �   �   actualApply.js
�   �   �   applyBind.d.ts
�   �   �   applyBind.js
�   �   �   CHANGELOG.md
�   �   �   functionApply.d.ts
�   �   �   functionApply.js
�   �   �   functionCall.d.ts
�   �   �   functionCall.js
�   �   �   index.d.ts
�   �   �   index.js
�   �   �   LICENSE
�   �   �   package.json
�   �   �   README.md
�   �   �   reflectApply.d.ts
�   �   �   reflectApply.js
�   �   �   tsconfig.json
�   �   �   
�   �   �       FUNDING.yml
�   �   �       
�   �   +---test
�   �           index.js
�   �           
�   +---call-bound
�   �   �   .eslintrc
�   �   �   .nycrc
�   �   �   CHANGELOG.md
�   �   �   index.d.ts
�   �   �   index.js
�   �   �   LICENSE
�   �   �   package.json
�   �   �   README.md
�   �   �   tsconfig.json
�   �   �   
�   �   �       FUNDING.yml
�   �   �       
�   �   +---test
�   �           index.js
�   �           
�   +---chokidar
�   �   �   index.js
�   �   �   LICENSE
�   �   �   package.json
�   �   �   README.md
�   �   �   
�   �   +---lib
�   �   �       constants.js
�   �   �       fsevents-handler.js
�   �   �       nodefs-handler.js
�   �   �       
�   �   �   +---glob-parent
�   �   �           CHANGELOG.md
�   �   �           index.js
�   �   �           LICENSE
�   �   �           package.json
�   �   �           README.md
�   �   �           
�   �   +---types
�   �           index.d.ts
�   �           
�   +---content-disposition
�   �       index.js
�   �       LICENSE
�   �       package.json
�   �       README.md
�   �       
�   +---content-type
�   �       HISTORY.md
�   �       index.js
�   �       LICENSE
�   �       package.json
�   �       README.md
�   �       
�   +---cookie
�   �       index.js
�   �       LICENSE
�   �       package.json
�   �       README.md
�   �       SECURITY.md
�   �       
�   +---cookie-signature
�   �       History.md
�   �       index.js
�   �       LICENSE
�   �       package.json
�   �       Readme.md
�   �       
�   +---cors
�   �   �   LICENSE
�   �   �   package.json
�   �   �   README.md
�   �   �   
�   �   +---lib
�   �           index.js
�   �           
�   +---create-require
�   �       CHANGELOG.md
�   �       create-require.d.ts
�   �       create-require.js
�   �       LICENSE
�   �       package.json
�   �       README.md
�   �       
�   +---cross-spawn
�   �   �   index.js
�   �   �   LICENSE
�   �   �   package.json
�   �   �   README.md
�   �   �   
�   �   +---lib
�   �       �   enoent.js
�   �       �   parse.js
�   �       �   
�   �       +---util
�   �               escape.js
�   �               readShebang.js
�   �               resolveCommand.js
�   �               
�   +---debug
�   �   �   LICENSE
�   �   �   package.json
�   �   �   README.md
�   �   �   
�   �   +---src
�   �           browser.js
�   �           common.js
�   �           index.js
�   �           node.js
�   �           
�   +---deep-is
�   �   �   .travis.yml
�   �   �   index.js
�   �   �   LICENSE
�   �   �   package.json
�   �   �   README.markdown
�   �   �   
�   �   +---example
�   �   �       cmp.js
�   �   �       
�   �   +---test
�   �           cmp.js
�   �           NaN.js
�   �           neg-vs-pos-0.js
�   �           
�   +---depd
�   �   �   History.md
�   �   �   index.js
�   �   �   LICENSE
�   �   �   package.json
�   �   �   Readme.md
�   �   �   
�   �   +---lib
�   �       +---browser
�   �               index.js
�   �               
�   +---diff
�   �   �   CONTRIBUTING.md
�   �   �   LICENSE
�   �   �   package.json
�   �   �   README.md
�   �   �   release-notes.md
�   �   �   runtime.js
�   �   �   
�   �   �       diff.js
�   �   �       diff.min.js
�   �   �       
�   �   +---lib
�   �       �   index.es6.js
�   �       �   index.js
�   �       �   
�   �       +---convert
�   �       �       dmp.js
�   �       �       xml.js
�   �       �       
�   �       +---diff
�   �       �       array.js
�   �       �       base.js
�   �       �       character.js
�   �       �       css.js
�   �       �       json.js
�   �       �       line.js
�   �       �       sentence.js
�   �       �       word.js
�   �       �       
�   �       +---patch
�   �       �       apply.js
�   �       �       create.js
�   �       �       merge.js
�   �       �       parse.js
�   �       �       
�   �       +---util
�   �               array.js
�   �               params.js
�   �               
�   +---dotenv
�   �   �   CHANGELOG.md
�   �   �   config.d.ts
�   �   �   config.js
�   �   �   LICENSE
�   �   �   package.json
�   �   �   README-es.md
�   �   �   README.md
�   �   �   SECURITY.md
�   �   �   
�   �   +---lib
�   �   �       cli-options.js
�   �   �       env-options.js
�   �   �       main.d.ts
�   �   �       main.js
�   �   �       
�   �   +---skills
�   �       +---dotenv
�   �       �       SKILL.md
�   �       �       
�   �       +---dotenvx
�   �               SKILL.md
�   �               
�   +---dunder-proto
�   �   �   .eslintrc
�   �   �   .nycrc
�   �   �   CHANGELOG.md
�   �   �   get.d.ts
�   �   �   get.js
�   �   �   LICENSE
�   �   �   package.json
�   �   �   README.md
�   �   �   set.d.ts
�   �   �   set.js
�   �   �   tsconfig.json
�   �   �   
�   �   �       FUNDING.yml
�   �   �       
�   �   +---test
�   �           get.js
�   �           index.js
�   �           set.js
�   �           
�   +---ecdsa-sig-formatter
�   �   �   CODEOWNERS
�   �   �   LICENSE
�   �   �   package.json
�   �   �   README.md
�   �   �   
�   �   +---src
�   �           ecdsa-sig-formatter.d.ts
�   �           ecdsa-sig-formatter.js
�   �           param-bytes-for-alg.js
�   �           
�   +---ee-first
�   �       index.js
�   �       LICENSE
�   �       package.json
�   �       README.md
�   �       
�   +---encodeurl
�   �       index.js
�   �       LICENSE
�   �       package.json
�   �       README.md
�   �       
�   +---es-define-property
�   �   �   .eslintrc
�   �   �   .nycrc
�   �   �   CHANGELOG.md
�   �   �   index.d.ts
�   �   �   index.js
�   �   �   LICENSE
�   �   �   package.json
�   �   �   README.md
�   �   �   tsconfig.json
�   �   �   
�   �   �       FUNDING.yml
�   �   �       
�   �   +---test
�   �           index.js
�   �           
�   +---es-errors
�   �   �   .eslintrc
�   �   �   CHANGELOG.md
�   �   �   eval.d.ts
�   �   �   eval.js
�   �   �   index.d.ts
�   �   �   index.js
�   �   �   LICENSE
�   �   �   package.json
�   �   �   range.d.ts
�   �   �   range.js
�   �   �   README.md
�   �   �   ref.d.ts
�   �   �   ref.js
�   �   �   syntax.d.ts
�   �   �   syntax.js
�   �   �   tsconfig.json
�   �   �   type.d.ts
�   �   �   type.js
�   �   �   uri.d.ts
�   �   �   uri.js
�   �   �   
�   �   �       FUNDING.yml
�   �   �       
�   �   +---test
�   �           index.js
�   �           
�   +---es-object-atoms
�   �   �   .eslintrc
�   �   �   CHANGELOG.md
�   �   �   index.d.ts
�   �   �   index.js
�   �   �   isObject.d.ts
�   �   �   isObject.js
�   �   �   LICENSE
�   �   �   package.json
�   �   �   README.md
�   �   �   RequireObjectCoercible.d.ts
�   �   �   RequireObjectCoercible.js
�   �   �   ToObject.d.ts
�   �   �   ToObject.js
�   �   �   tsconfig.json
�   �   �   
�   �   �       FUNDING.yml
�   �   �       
�   �   +---test
�   �           index.js
�   �           
�   +---escape-html
�   �       index.js
�   �       LICENSE
�   �       package.json
�   �       Readme.md
�   �       
�   +---escape-string-regexp
�   �       index.d.ts
�   �       index.js
�   �       license
�   �       package.json
�   �       readme.md
�   �       
�   +---eslint
�   �   �   LICENSE
�   �   �   package.json
�   �   �   README.md
�   �   �   
�   �   +---bin
�   �   �       eslint.js
�   �   �       
�   �   +---conf
�   �   �       ecma-version.js
�   �   �       globals.js
�   �   �       replacements.json
�   �   �       rule-type-list.json
�   �   �       
�   �   +---lib
�   �   �   �   api.js
�   �   �   �   cli.js
�   �   �   �   config-api.js
�   �   �   �   options.js
�   �   �   �   universal.js
�   �   �   �   unsupported-api.js
�   �   �   �   
�   �   �   +---cli-engine
�   �   �   �   �   hash.js
�   �   �   �   �   lint-result-cache.js
�   �   �   �   �   
�   �   �   �   +---formatters
�   �   �   �           formatters-meta.json
�   �   �   �           html.js
�   �   �   �           json-with-metadata.js
�   �   �   �           json.js
�   �   �   �           stylish.js
�   �   �   �           
�   �   �   +---config
�   �   �   �       config-loader.js
�   �   �   �       config.js
�   �   �   �       default-config.js
�   �   �   �       flat-config-array.js
�   �   �   �       flat-config-schema.js
�   �   �   �       
�   �   �   +---eslint
�   �   �   �       eslint-helpers.js
�   �   �   �       eslint.js
�   �   �   �       index.js
�   �   �   �       worker.js
�   �   �   �       
�   �   �   +---languages
�   �   �   �   +---js
�   �   �   �       �   index.js
�   �   �   �       �   validate-language-options.js
�   �   �   �       �   
�   �   �   �       +---source-code
�   �   �   �           �   index.js
�   �   �   �           �   source-code.js
�   �   �   �           �   
�   �   �   �           +---token-store
�   �   �   �                   backward-token-comment-cursor.js
�   �   �   �                   backward-token-cursor.js
�   �   �   �                   cursor.js
�   �   �   �                   cursors.js
�   �   �   �                   decorative-cursor.js
�   �   �   �                   filter-cursor.js
�   �   �   �                   forward-token-comment-cursor.js
�   �   �   �                   forward-token-cursor.js
�   �   �   �                   index.js
�   �   �   �                   limit-cursor.js
�   �   �   �                   padded-token-cursor.js
�   �   �   �                   skip-cursor.js
�   �   �   �                   utils.js
�   �   �   �                   
�   �   �   +---linter
�   �   �   �   �   apply-disable-directives.js
�   �   �   �   �   esquery.js
�   �   �   �   �   file-context.js
�   �   �   �   �   file-report.js
�   �   �   �   �   index.js
�   �   �   �   �   interpolate.js
�   �   �   �   �   linter.js
�   �   �   �   �   rule-fixer.js
�   �   �   �   �   source-code-fixer.js
�   �   �   �   �   source-code-traverser.js
�   �   �   �   �   source-code-visitor.js
�   �   �   �   �   timing.js
�   �   �   �   �   vfile.js
�   �   �   �   �   
�   �   �   �   +---code-path-analysis
�   �   �   �           code-path-analyzer.js
�   �   �   �           code-path-segment.js
�   �   �   �           code-path-state.js
�   �   �   �           code-path.js
�   �   �   �           debug-helpers.js
�   �   �   �           fork-context.js
�   �   �   �           id-generator.js
�   �   �   �           
�   �   �   +---rule-tester
�   �   �   �       index.js
�   �   �   �       rule-tester.js
�   �   �   �       
�   �   �   +---rules
�   �   �   �   �   accessor-pairs.js
�   �   �   �   �   array-bracket-newline.js
�   �   �   �   �   array-bracket-spacing.js
�   �   �   �   �   array-callback-return.js
�   �   �   �   �   array-element-newline.js
�   �   �   �   �   arrow-body-style.js
�   �   �   �   �   arrow-parens.js
�   �   �   �   �   arrow-spacing.js
�   �   �   �   �   block-scoped-var.js
�   �   �   �   �   block-spacing.js
�   �   �   �   �   brace-style.js
�   �   �   �   �   callback-return.js
�   �   �   �   �   camelcase.js
�   �   �   �   �   capitalized-comments.js
�   �   �   �   �   class-methods-use-this.js
�   �   �   �   �   comma-dangle.js
�   �   �   �   �   comma-spacing.js
�   �   �   �   �   comma-style.js
�   �   �   �   �   complexity.js
�   �   �   �   �   computed-property-spacing.js
�   �   �   �   �   consistent-return.js
�   �   �   �   �   consistent-this.js
�   �   �   �   �   constructor-super.js
�   �   �   �   �   curly.js
�   �   �   �   �   default-case-last.js
�   �   �   �   �   default-case.js
�   �   �   �   �   default-param-last.js
�   �   �   �   �   dot-location.js
�   �   �   �   �   dot-notation.js
�   �   �   �   �   eol-last.js
�   �   �   �   �   eqeqeq.js
�   �   �   �   �   for-direction.js
�   �   �   �   �   func-call-spacing.js
�   �   �   �   �   func-name-matching.js
�   �   �   �   �   func-names.js
�   �   �   �   �   func-style.js
�   �   �   �   �   function-call-argument-newline.js
�   �   �   �   �   function-paren-newline.js
�   �   �   �   �   generator-star-spacing.js
�   �   �   �   �   getter-return.js
�   �   �   �   �   global-require.js
�   �   �   �   �   grouped-accessor-pairs.js
�   �   �   �   �   guard-for-in.js
�   �   �   �   �   handle-callback-err.js
�   �   �   �   �   id-blacklist.js
�   �   �   �   �   id-denylist.js
�   �   �   �   �   id-length.js
�   �   �   �   �   id-match.js
�   �   �   �   �   implicit-arrow-linebreak.js
�   �   �   �   �   indent-legacy.js
�   �   �   �   �   indent.js
�   �   �   �   �   index.js
�   �   �   �   �   init-declarations.js
�   �   �   �   �   jsx-quotes.js
�   �   �   �   �   key-spacing.js
�   �   �   �   �   keyword-spacing.js
�   �   �   �   �   line-comment-position.js
�   �   �   �   �   linebreak-style.js
�   �   �   �   �   lines-around-comment.js
�   �   �   �   �   lines-around-directive.js
�   �   �   �   �   lines-between-class-members.js
�   �   �   �   �   logical-assignment-operators.js
�   �   �   �   �   max-classes-per-file.js
�   �   �   �   �   max-depth.js
�   �   �   �   �   max-len.js
�   �   �   �   �   max-lines-per-function.js
�   �   �   �   �   max-lines.js
�   �   �   �   �   max-nested-callbacks.js
�   �   �   �   �   max-params.js
�   �   �   �   �   max-statements-per-line.js
�   �   �   �   �   max-statements.js
�   �   �   �   �   multiline-comment-style.js
�   �   �   �   �   multiline-ternary.js
�   �   �   �   �   new-cap.js
�   �   �   �   �   new-parens.js
�   �   �   �   �   newline-after-var.js
�   �   �   �   �   newline-before-return.js
�   �   �   �   �   newline-per-chained-call.js
�   �   �   �   �   no-alert.js
�   �   �   �   �   no-array-constructor.js
�   �   �   �   �   no-async-promise-executor.js
�   �   �   �   �   no-await-in-loop.js
�   �   �   �   �   no-bitwise.js
�   �   �   �   �   no-buffer-constructor.js
�   �   �   �   �   no-caller.js
�   �   �   �   �   no-case-declarations.js
�   �   �   �   �   no-catch-shadow.js
�   �   �   �   �   no-class-assign.js
�   �   �   �   �   no-compare-neg-zero.js
�   �   �   �   �   no-cond-assign.js
�   �   �   �   �   no-confusing-arrow.js
�   �   �   �   �   no-console.js
�   �   �   �   �   no-const-assign.js
�   �   �   �   �   no-constant-binary-expression.js
�   �   �   �   �   no-constant-condition.js
�   �   �   �   �   no-constructor-return.js
�   �   �   �   �   no-continue.js
�   �   �   �   �   no-control-regex.js
�   �   �   �   �   no-debugger.js
�   �   �   �   �   no-delete-var.js
�   �   �   �   �   no-div-regex.js
�   �   �   �   �   no-dupe-args.js
�   �   �   �   �   no-dupe-class-members.js
�   �   �   �   �   no-dupe-else-if.js
�   �   �   �   �   no-dupe-keys.js
�   �   �   �   �   no-duplicate-case.js
�   �   �   �   �   no-duplicate-imports.js
�   �   �   �   �   no-else-return.js
�   �   �   �   �   no-empty-character-class.js
�   �   �   �   �   no-empty-function.js
�   �   �   �   �   no-empty-pattern.js
�   �   �   �   �   no-empty-static-block.js
�   �   �   �   �   no-empty.js
�   �   �   �   �   no-eq-null.js
�   �   �   �   �   no-eval.js
�   �   �   �   �   no-ex-assign.js
�   �   �   �   �   no-extend-native.js
�   �   �   �   �   no-extra-bind.js
�   �   �   �   �   no-extra-boolean-cast.js
�   �   �   �   �   no-extra-label.js
�   �   �   �   �   no-extra-parens.js
�   �   �   �   �   no-extra-semi.js
�   �   �   �   �   no-fallthrough.js
�   �   �   �   �   no-floating-decimal.js
�   �   �   �   �   no-func-assign.js
�   �   �   �   �   no-global-assign.js
�   �   �   �   �   no-implicit-coercion.js
�   �   �   �   �   no-implicit-globals.js
�   �   �   �   �   no-implied-eval.js
�   �   �   �   �   no-import-assign.js
�   �   �   �   �   no-inline-comments.js
�   �   �   �   �   no-inner-declarations.js
�   �   �   �   �   no-invalid-regexp.js
�   �   �   �   �   no-invalid-this.js
�   �   �   �   �   no-irregular-whitespace.js
�   �   �   �   �   no-iterator.js
�   �   �   �   �   no-label-var.js
�   �   �   �   �   no-labels.js
�   �   �   �   �   no-lone-blocks.js
�   �   �   �   �   no-lonely-if.js
�   �   �   �   �   no-loop-func.js
�   �   �   �   �   no-loss-of-precision.js
�   �   �   �   �   no-magic-numbers.js
�   �   �   �   �   no-misleading-character-class.js
�   �   �   �   �   no-mixed-operators.js
�   �   �   �   �   no-mixed-requires.js
�   �   �   �   �   no-mixed-spaces-and-tabs.js
�   �   �   �   �   no-multi-assign.js
�   �   �   �   �   no-multi-spaces.js
�   �   �   �   �   no-multi-str.js
�   �   �   �   �   no-multiple-empty-lines.js
�   �   �   �   �   no-native-reassign.js
�   �   �   �   �   no-negated-condition.js
�   �   �   �   �   no-negated-in-lhs.js
�   �   �   �   �   no-nested-ternary.js
�   �   �   �   �   no-new-func.js
�   �   �   �   �   no-new-native-nonconstructor.js
�   �   �   �   �   no-new-object.js
�   �   �   �   �   no-new-require.js
�   �   �   �   �   no-new-symbol.js
�   �   �   �   �   no-new-wrappers.js
�   �   �   �   �   no-new.js
�   �   �   �   �   no-nonoctal-decimal-escape.js
�   �   �   �   �   no-obj-calls.js
�   �   �   �   �   no-object-constructor.js
�   �   �   �   �   no-octal-escape.js
�   �   �   �   �   no-octal.js
�   �   �   �   �   no-param-reassign.js
�   �   �   �   �   no-path-concat.js
�   �   �   �   �   no-plusplus.js
�   �   �   �   �   no-process-env.js
�   �   �   �   �   no-process-exit.js
�   �   �   �   �   no-promise-executor-return.js
�   �   �   �   �   no-proto.js
�   �   �   �   �   no-prototype-builtins.js
�   �   �   �   �   no-redeclare.js
�   �   �   �   �   no-regex-spaces.js
�   �   �   �   �   no-restricted-exports.js
�   �   �   �   �   no-restricted-globals.js
�   �   �   �   �   no-restricted-imports.js
�   �   �   �   �   no-restricted-modules.js
�   �   �   �   �   no-restricted-properties.js
�   �   �   �   �   no-restricted-syntax.js
�   �   �   �   �   no-return-assign.js
�   �   �   �   �   no-return-await.js
�   �   �   �   �   no-script-url.js
�   �   �   �   �   no-self-assign.js
�   �   �   �   �   no-self-compare.js
�   �   �   �   �   no-sequences.js
�   �   �   �   �   no-setter-return.js
�   �   �   �   �   no-shadow-restricted-names.js
�   �   �   �   �   no-shadow.js
�   �   �   �   �   no-spaced-func.js
�   �   �   �   �   no-sparse-arrays.js
�   �   �   �   �   no-sync.js
�   �   �   �   �   no-tabs.js
�   �   �   �   �   no-template-curly-in-string.js
�   �   �   �   �   no-ternary.js
�   �   �   �   �   no-this-before-super.js
�   �   �   �   �   no-throw-literal.js
�   �   �   �   �   no-trailing-spaces.js
�   �   �   �   �   no-unassigned-vars.js
�   �   �   �   �   no-undef-init.js
�   �   �   �   �   no-undef.js
�   �   �   �   �   no-undefined.js
�   �   �   �   �   no-underscore-dangle.js
�   �   �   �   �   no-unexpected-multiline.js
�   �   �   �   �   no-unmodified-loop-condition.js
�   �   �   �   �   no-unneeded-ternary.js
�   �   �   �   �   no-unreachable-loop.js
�   �   �   �   �   no-unreachable.js
�   �   �   �   �   no-unsafe-finally.js
�   �   �   �   �   no-unsafe-negation.js
�   �   �   �   �   no-unsafe-optional-chaining.js
�   �   �   �   �   no-unused-expressions.js
�   �   �   �   �   no-unused-labels.js
�   �   �   �   �   no-unused-private-class-members.js
�   �   �   �   �   no-unused-vars.js
�   �   �   �   �   no-use-before-define.js
�   �   �   �   �   no-useless-assignment.js
�   �   �   �   �   no-useless-backreference.js
�   �   �   �   �   no-useless-call.js
�   �   �   �   �   no-useless-catch.js
�   �   �   �   �   no-useless-computed-key.js
�   �   �   �   �   no-useless-concat.js
�   �   �   �   �   no-useless-constructor.js
�   �   �   �   �   no-useless-escape.js
�   �   �   �   �   no-useless-rename.js
�   �   �   �   �   no-useless-return.js
�   �   �   �   �   no-var.js
�   �   �   �   �   no-void.js
�   �   �   �   �   no-warning-comments.js
�   �   �   �   �   no-whitespace-before-property.js
�   �   �   �   �   no-with.js
�   �   �   �   �   nonblock-statement-body-position.js
�   �   �   �   �   object-curly-newline.js
�   �   �   �   �   object-curly-spacing.js
�   �   �   �   �   object-property-newline.js
�   �   �   �   �   object-shorthand.js
�   �   �   �   �   one-var-declaration-per-line.js
�   �   �   �   �   one-var.js
�   �   �   �   �   operator-assignment.js
�   �   �   �   �   operator-linebreak.js
�   �   �   �   �   padded-blocks.js
�   �   �   �   �   padding-line-between-statements.js
�   �   �   �   �   prefer-arrow-callback.js
�   �   �   �   �   prefer-const.js
�   �   �   �   �   prefer-destructuring.js
�   �   �   �   �   prefer-exponentiation-operator.js
�   �   �   �   �   prefer-named-capture-group.js
�   �   �   �   �   prefer-numeric-literals.js
�   �   �   �   �   prefer-object-has-own.js
�   �   �   �   �   prefer-object-spread.js
�   �   �   �   �   prefer-promise-reject-errors.js
�   �   �   �   �   prefer-reflect.js
�   �   �   �   �   prefer-regex-literals.js
�   �   �   �   �   prefer-rest-params.js
�   �   �   �   �   prefer-spread.js
�   �   �   �   �   prefer-template.js
�   �   �   �   �   preserve-caught-error.js
�   �   �   �   �   quote-props.js
�   �   �   �   �   quotes.js
�   �   �   �   �   radix.js
�   �   �   �   �   require-atomic-updates.js
�   �   �   �   �   require-await.js
�   �   �   �   �   require-unicode-regexp.js
�   �   �   �   �   require-yield.js
�   �   �   �   �   rest-spread-spacing.js
�   �   �   �   �   semi-spacing.js
�   �   �   �   �   semi-style.js
�   �   �   �   �   semi.js
�   �   �   �   �   sort-imports.js
�   �   �   �   �   sort-keys.js
�   �   �   �   �   sort-vars.js
�   �   �   �   �   space-before-blocks.js
�   �   �   �   �   space-before-function-paren.js
�   �   �   �   �   space-in-parens.js
�   �   �   �   �   space-infix-ops.js
�   �   �   �   �   space-unary-ops.js
�   �   �   �   �   spaced-comment.js
�   �   �   �   �   strict.js
�   �   �   �   �   switch-colon-spacing.js
�   �   �   �   �   symbol-description.js
�   �   �   �   �   template-curly-spacing.js
�   �   �   �   �   template-tag-spacing.js
�   �   �   �   �   unicode-bom.js
�   �   �   �   �   use-isnan.js
�   �   �   �   �   valid-typeof.js
�   �   �   �   �   vars-on-top.js
�   �   �   �   �   wrap-iife.js
�   �   �   �   �   wrap-regex.js
�   �   �   �   �   yield-star-spacing.js
�   �   �   �   �   yoda.js
�   �   �   �   �   
�   �   �   �   +---utils
�   �   �   �       �   ast-utils.js
�   �   �   �       �   char-source.js
�   �   �   �       �   code-path-utils.js
�   �   �   �       �   fix-tracker.js
�   �   �   �       �   keywords.js
�   �   �   �       �   lazy-loading-rule-map.js
�   �   �   �       �   regular-expressions.js
�   �   �   �       �   
�   �   �   �       +---unicode
�   �   �   �               index.js
�   �   �   �               is-combining-character.js
�   �   �   �               is-emoji-modifier.js
�   �   �   �               is-regional-indicator-symbol.js
�   �   �   �               is-surrogate-pair.js
�   �   �   �               
�   �   �   +---services
�   �   �   �       parser-service.js
�   �   �   �       processor-service.js
�   �   �   �       suppressions-service.js
�   �   �   �       warning-service.js
�   �   �   �       
�   �   �   +---shared
�   �   �   �       ajv.js
�   �   �   �       assert.js
�   �   �   �       ast-utils.js
�   �   �   �       deep-merge-arrays.js
�   �   �   �       directives.js
�   �   �   �       flags.js
�   �   �   �       logging.js
�   �   �   �       message-counts.js
�   �   �   �       naming.js
�   �   �   �       option-utils.js
�   �   �   �       relative-module-resolver.js
�   �   �   �       runtime-info.js
�   �   �   �       serialization.js
�   �   �   �       severity.js
�   �   �   �       stats.js
�   �   �   �       string-utils.js
�   �   �   �       text-table.js
�   �   �   �       translate-cli-options.js
�   �   �   �       traverser.js
�   �   �   �       
�   �   �   +---types
�   �   �           config-api.d.ts
�   �   �           index.d.ts
�   �   �           rules.d.ts
�   �   �           universal.d.ts
�   �   �           use-at-your-own-risk.d.ts
�   �   �           
�   �   +---messages
�   �           all-matched-files-ignored.js
�   �           config-file-missing.js
�   �           config-plugin-missing.js
�   �           config-serialize-function.js
�   �           eslintrc-incompat.js
�   �           eslintrc-plugins.js
�   �           extend-config-missing.js
�   �           failed-to-read-json.js
�   �           file-not-found.js
�   �           invalid-rule-options.js
�   �           invalid-rule-severity.js
�   �           no-config-found.js
�   �           plugin-conflict.js
�   �           plugin-invalid.js
�   �           plugin-missing.js
�   �           rule-unsupported-language.js
�   �           shared.js
�   �           whitespace-found.js
�   �           
�   +---eslint-scope
�   �   �   LICENSE
�   �   �   package.json
�   �   �   README.md
�   �   �   
�   �   �       eslint-scope.cjs
�   �   �       
�   �   +---lib
�   �           assert.js
�   �           definition.js
�   �           index.d.cts
�   �           index.d.ts
�   �           index.js
�   �           pattern-visitor.js
�   �           reference.js
�   �           referencer.js
�   �           scope-manager.js
�   �           scope.js
�   �           variable.js
�   �           
�   +---eslint-visitor-keys
�   �   �   LICENSE
�   �   �   package.json
�   �   �   README.md
�   �   �   
�   �   �       eslint-visitor-keys.cjs
�   �   �       eslint-visitor-keys.d.cts
�   �   �       index.d.ts
�   �   �       visitor-keys.d.ts
�   �   �       
�   �   +---lib
�   �           index.js
�   �           visitor-keys.js
�   �           
�   +---espree
�   �   �   espree.js
�   �   �   LICENSE
�   �   �   package.json
�   �   �   README.md
�   �   �   
�   �   �       espree.cjs
�   �   �       espree.d.cts
�   �   �       espree.d.cts.map
�   �   �       espree.d.ts
�   �   �       espree.d.ts.map
�   �   �       
�   �   +---lib
�   �           espree.js
�   �           options.js
�   �           token-translator.js
�   �           types.js
�   �           
�   +---esquery
�   �   �   license.txt
�   �   �   package.json
�   �   �   parser.js
�   �   �   README.md
�   �   �   
�   �           esquery.esm.js
�   �           esquery.esm.min.js
�   �           esquery.esm.min.js.map
�   �           esquery.js
�   �           esquery.lite.js
�   �           esquery.lite.min.js
�   �           esquery.lite.min.js.map
�   �           esquery.min.js
�   �           esquery.min.js.map
�   �           
�   +---esrecurse
�   �       .babelrc
�   �       esrecurse.js
�   �       gulpfile.babel.js
�   �       package.json
�   �       README.md
�   �       
�   +---estraverse
�   �       .jshintrc
�   �       estraverse.js
�   �       gulpfile.js
�   �       LICENSE.BSD
�   �       package.json
�   �       README.md
�   �       
�   +---esutils
�   �   �   LICENSE.BSD
�   �   �   package.json
�   �   �   README.md
�   �   �   
�   �   +---lib
�   �           ast.js
�   �           code.js
�   �           keyword.js
�   �           utils.js
�   �           
�   +---etag
�   �       HISTORY.md
�   �       index.js
�   �       LICENSE
�   �       package.json
�   �       README.md
�   �       
�   +---express
�   �   �   index.js
�   �   �   LICENSE
�   �   �   package.json
�   �   �   Readme.md
�   �   �   
�   �   +---lib
�   �           application.js
�   �           express.js
�   �           request.js
�   �           response.js
�   �           utils.js
�   �           view.js
�   �           
�   +---fast-deep-equal
�   �   �   index.d.ts
�   �   �   index.js
�   �   �   LICENSE
�   �   �   package.json
�   �   �   react.d.ts
�   �   �   react.js
�   �   �   README.md
�   �   �   
�   �   +---es6
�   �           index.d.ts
�   �           index.js
�   �           react.d.ts
�   �           react.js
�   �           
�   +---fast-json-stable-stringify
�   �   �   .eslintrc.yml
�   �   �   .travis.yml
�   �   �   index.d.ts
�   �   �   index.js
�   �   �   LICENSE
�   �   �   package.json
�   �   �   README.md
�   �   �   
�   �   �       FUNDING.yml
�   �   �       
�   �   +---benchmark
�   �   �       index.js
�   �   �       test.json
�   �   �       
�   �   +---example
�   �   �       key_cmp.js
�   �   �       nested.js
�   �   �       str.js
�   �   �       value_cmp.js
�   �   �       
�   �   +---test
�   �           cmp.js
�   �           nested.js
�   �           str.js
�   �           to-json.js
�   �           
�   +---fast-levenshtein
�   �       levenshtein.js
�   �       LICENSE.md
�   �       package.json
�   �       README.md
�   �       
�   +---file-entry-cache
�   �       cache.js
�   �       LICENSE
�   �       package.json
�   �       README.md
�   �       
�   +---fill-range
�   �       index.js
�   �       LICENSE
�   �       package.json
�   �       README.md
�   �       
�   +---finalhandler
�   �       HISTORY.md
�   �       index.js
�   �       LICENSE
�   �       package.json
�   �       README.md
�   �       
�   +---find-up
�   �       index.d.ts
�   �       index.js
�   �       license
�   �       package.json
�   �       readme.md
�   �       
�   +---flat-cache
�   �   �   changelog.md
�   �   �   LICENSE
�   �   �   package.json
�   �   �   README.md
�   �   �   
�   �   +---src
�   �           cache.js
�   �           del.js
�   �           utils.js
�   �           
�   +---flatted
�   �   �   es.js
�   �   �   esm.js
�   �   �   index.js
�   �   �   LICENSE
�   �   �   min.js
�   �   �   package.json
�   �   �   README.md
�   �   �   
�   �   +---cjs
�   �   �       index.js
�   �   �       package.json
�   �   �       
�   �   +---esm
�   �   �       index.js
�   �   �       
�   �   +---golang
�   �   �   �   README.md
�   �   �   �   
�   �   �   +---pkg
�   �   �       +---flatted
�   �   �               flatted.go
�   �   �               
�   �   +---php
�   �   �       flatted.php
�   �   �       
�   �   +---python
�   �   �       flatted.py
�   �   �       
�   �   +---types
�   �           index.d.ts
�   �           
�   +---forwarded
�   �       HISTORY.md
�   �       index.js
�   �       LICENSE
�   �       package.json
�   �       README.md
�   �       
�   +---fresh
�   �       HISTORY.md
�   �       index.js
�   �       LICENSE
�   �       package.json
�   �       README.md
�   �       
�   +---function-bind
�   �   �   .eslintrc
�   �   �   .nycrc
�   �   �   CHANGELOG.md
�   �   �   implementation.js
�   �   �   index.js
�   �   �   LICENSE
�   �   �   package.json
�   �   �   README.md
�   �   �   
�   �   �       FUNDING.yml
�   �   �       SECURITY.md
�   �   �       
�   �   +---test
�   �           .eslintrc
�   �           index.js
�   �           
�   +---get-intrinsic
�   �   �   .eslintrc
�   �   �   .nycrc
�   �   �   CHANGELOG.md
�   �   �   index.js
�   �   �   LICENSE
�   �   �   package.json
�   �   �   README.md
�   �   �   
�   �   �       FUNDING.yml
�   �   �       
�   �   +---test
�   �           GetIntrinsic.js
�   �           
�   +---get-proto
�   �   �   .eslintrc
�   �   �   .nycrc
�   �   �   CHANGELOG.md
�   �   �   index.d.ts
�   �   �   index.js
�   �   �   LICENSE
�   �   �   Object.getPrototypeOf.d.ts
�   �   �   Object.getPrototypeOf.js
�   �   �   package.json
�   �   �   README.md
�   �   �   Reflect.getPrototypeOf.d.ts
�   �   �   Reflect.getPrototypeOf.js
�   �   �   tsconfig.json
�   �   �   
�   �   �       FUNDING.yml
�   �   �       
�   �   +---test
�   �           index.js
�   �           
�   +---glob-parent
�   �       index.js
�   �       LICENSE
�   �       package.json
�   �       README.md
�   �       
�   +---gopd
�   �   �   .eslintrc
�   �   �   CHANGELOG.md
�   �   �   gOPD.d.ts
�   �   �   gOPD.js
�   �   �   index.d.ts
�   �   �   index.js
�   �   �   LICENSE
�   �   �   package.json
�   �   �   README.md
�   �   �   tsconfig.json
�   �   �   
�   �   �       FUNDING.yml
�   �   �       
�   �   +---test
�   �           index.js
�   �           
�   +---has-flag
�   �       index.js
�   �       license
�   �       package.json
�   �       readme.md
�   �       
�   +---has-symbols
�   �   �   .eslintrc
�   �   �   .nycrc
�   �   �   CHANGELOG.md
�   �   �   index.d.ts
�   �   �   index.js
�   �   �   LICENSE
�   �   �   package.json
�   �   �   README.md
�   �   �   shams.d.ts
�   �   �   shams.js
�   �   �   tsconfig.json
�   �   �   
�   �   �       FUNDING.yml
�   �   �       
�   �   +---test
�   �       �   index.js
�   �       �   tests.js
�   �       �   
�   �       +---shams
�   �               core-js.js
�   �               get-own-property-symbols.js
�   �               
�   +---hasown
�   �   �   .nycrc
�   �   �   CHANGELOG.md
�   �   �   eslint.config.mjs
�   �   �   index.d.ts
�   �   �   index.js
�   �   �   LICENSE
�   �   �   package.json
�   �   �   README.md
�   �   �   tsconfig.json
�   �   �   
�   �           FUNDING.yml
�   �           
�   +---http-errors
�   �       HISTORY.md
�   �       index.js
�   �       LICENSE
�   �       package.json
�   �       README.md
�   �       
�   +---iconv-lite
�   �   �   LICENSE
�   �   �   package.json
�   �   �   README.md
�   �   �   
�   �   +---encodings
�   �   �   �   dbcs-codec.js
�   �   �   �   dbcs-data.js
�   �   �   �   index.js
�   �   �   �   internal.js
�   �   �   �   sbcs-codec.js
�   �   �   �   sbcs-data-generated.js
�   �   �   �   sbcs-data.js
�   �   �   �   utf16.js
�   �   �   �   utf32.js
�   �   �   �   utf7.js
�   �   �   �   
�   �   �   +---tables
�   �   �           big5-added.json
�   �   �           cp936.json
�   �   �           cp949.json
�   �   �           cp950.json
�   �   �           eucjp.json
�   �   �           gb18030-ranges.json
�   �   �           gbk-added.json
�   �   �           shiftjis.json
�   �   �           
�   �   +---lib
�   �   �   �   bom-handling.js
�   �   �   �   index.d.ts
�   �   �   �   index.js
�   �   �   �   streams.js
�   �   �   �   
�   �   �   +---helpers
�   �   �           merge-exports.js
�   �   �           
�   �   +---types
�   �           encodings.d.ts
�   �           
�   +---ignore
�   �       index.d.ts
�   �       index.js
�   �       legacy.js
�   �       LICENSE-MIT
�   �       package.json
�   �       README.md
�   �       
�   +---ignore-by-default
�   �       index.js
�   �       LICENSE
�   �       package.json
�   �       README.md
�   �       
�   +---imurmurhash
�   �       imurmurhash.js
�   �       imurmurhash.min.js
�   �       package.json
�   �       README.md
�   �       
�   +---inherits
�   �       inherits.js
�   �       inherits_browser.js
�   �       LICENSE
�   �       package.json
�   �       README.md
�   �       
�   +---ipaddr.js
�   �   �   ipaddr.min.js
�   �   �   LICENSE
�   �   �   package.json
�   �   �   README.md
�   �   �   
�   �   +---lib
�   �           ipaddr.js
�   �           ipaddr.js.d.ts
�   �           
�   +---is-binary-path
�   �       index.d.ts
�   �       index.js
�   �       license
�   �       package.json
�   �       readme.md
�   �       
�   +---is-extglob
�   �       index.js
�   �       LICENSE
�   �       package.json
�   �       README.md
�   �       
�   +---is-glob
�   �       index.js
�   �       LICENSE
�   �       package.json
�   �       README.md
�   �       
�   +---is-number
�   �       index.js
�   �       LICENSE
�   �       package.json
�   �       README.md
�   �       
�   +---is-promise
�   �       index.d.ts
�   �       index.js
�   �       index.mjs
�   �       LICENSE
�   �       package.json
�   �       readme.md
�   �       
�   +---isexe
�   �   �   .npmignore
�   �   �   index.js
�   �   �   LICENSE
�   �   �   mode.js
�   �   �   package.json
�   �   �   README.md
�   �   �   windows.js
�   �   �   
�   �   +---test
�   �           basic.js
�   �           
�   +---json-buffer
�   �   �   .travis.yml
�   �   �   index.js
�   �   �   LICENSE
�   �   �   package.json
�   �   �   README.md
�   �   �   
�   �   +---test
�   �           index.js
�   �           
�   +---json-schema-traverse
�   �   �   .eslintrc.yml
�   �   �   .travis.yml
�   �   �   index.js
�   �   �   LICENSE
�   �   �   package.json
�   �   �   README.md
�   �   �   
�   �   +---spec
�   �       �   .eslintrc.yml
�   �       �   index.spec.js
�   �       �   
�   �       +---fixtures
�   �               schema.js
�   �               
�   +---json-stable-stringify-without-jsonify
�   �   �   .npmignore
�   �   �   .travis.yml
�   �   �   index.js
�   �   �   LICENSE
�   �   �   package.json
�   �   �   readme.markdown
�   �   �   
�   �   +---example
�   �   �       key_cmp.js
�   �   �       nested.js
�   �   �       str.js
�   �   �       value_cmp.js
�   �   �       
�   �   +---test
�   �           cmp.js
�   �           nested.js
�   �           replacer.js
�   �           space.js
�   �           str.js
�   �           to-json.js
�   �           
�   +---jsonwebtoken
�   �   �   decode.js
�   �   �   index.js
�   �   �   LICENSE
�   �   �   package.json
�   �   �   README.md
�   �   �   sign.js
�   �   �   verify.js
�   �   �   
�   �   +---lib
�   �           asymmetricKeyDetailsSupported.js
�   �           JsonWebTokenError.js
�   �           NotBeforeError.js
�   �           psSupported.js
�   �           rsaPssKeyDetailsSupported.js
�   �           timespan.js
�   �           TokenExpiredError.js
�   �           validateAsymmetricKey.js
�   �           
�   +---jwa
�   �       index.js
�   �       LICENSE
�   �       opslevel.yml
�   �       package.json
�   �       README.md
�   �       
�   +---jws
�   �   �   CHANGELOG.md
�   �   �   index.js
�   �   �   LICENSE
�   �   �   opslevel.yml
�   �   �   package.json
�   �   �   readme.md
�   �   �   
�   �   +---lib
�   �           data-stream.js
�   �           sign-stream.js
�   �           tostring.js
�   �           verify-stream.js
�   �           
�   +---kareem
�   �       CHANGELOG.md
�   �       index.d.ts
�   �       index.js
�   �       LICENSE
�   �       package.json
�   �       README.md
�   �       SECURITY.md
�   �       
�   +---keyv
�   �   �   package.json
�   �   �   README.md
�   �   �   
�   �   +---src
�   �           index.d.ts
�   �           index.js
�   �           
�   +---levn
�   �   �   LICENSE
�   �   �   package.json
�   �   �   README.md
�   �   �   
�   �   +---lib
�   �           cast.js
�   �           index.js
�   �           parse-string.js
�   �           
�   +---locate-path
�   �       index.d.ts
�   �       index.js
�   �       license
�   �       package.json
�   �       readme.md
�   �       
�   +---lodash.includes
�   �       index.js
�   �       LICENSE
�   �       package.json
�   �       README.md
�   �       
�   +---lodash.isboolean
�   �       index.js
�   �       LICENSE
�   �       package.json
�   �       README.md
�   �       
�   +---lodash.isinteger
�   �       index.js
�   �       LICENSE
�   �       package.json
�   �       README.md
�   �       
�   +---lodash.isnumber
�   �       index.js
�   �       LICENSE
�   �       package.json
�   �       README.md
�   �       
�   +---lodash.isplainobject
�   �       index.js
�   �       LICENSE
�   �       package.json
�   �       README.md
�   �       
�   +---lodash.isstring
�   �       index.js
�   �       LICENSE
�   �       package.json
�   �       README.md
�   �       
�   +---lodash.once
�   �       index.js
�   �       LICENSE
�   �       package.json
�   �       README.md
�   �       
�   +---make-error
�   �   �   index.d.ts
�   �   �   index.js
�   �   �   LICENSE
�   �   �   package.json
�   �   �   README.md
�   �   �   
�   �           make-error.js
�   �           
�   +---math-intrinsics
�   �   �   .eslintrc
�   �   �   abs.d.ts
�   �   �   abs.js
�   �   �   CHANGELOG.md
�   �   �   floor.d.ts
�   �   �   floor.js
�   �   �   isFinite.d.ts
�   �   �   isFinite.js
�   �   �   isInteger.d.ts
�   �   �   isInteger.js
�   �   �   isNaN.d.ts
�   �   �   isNaN.js
�   �   �   isNegativeZero.d.ts
�   �   �   isNegativeZero.js
�   �   �   LICENSE
�   �   �   max.d.ts
�   �   �   max.js
�   �   �   min.d.ts
�   �   �   min.js
�   �   �   mod.d.ts
�   �   �   mod.js
�   �   �   package.json
�   �   �   pow.d.ts
�   �   �   pow.js
�   �   �   README.md
�   �   �   round.d.ts
�   �   �   round.js
�   �   �   sign.d.ts
�   �   �   sign.js
�   �   �   tsconfig.json
�   �   �   
�   �   �       FUNDING.yml
�   �   �       
�   �   +---constants
�   �   �       maxArrayLength.d.ts
�   �   �       maxArrayLength.js
�   �   �       maxSafeInteger.d.ts
�   �   �       maxSafeInteger.js
�   �   �       maxValue.d.ts
�   �   �       maxValue.js
�   �   �       
�   �   +---test
�   �           index.js
�   �           
�   +---media-typer
�   �       HISTORY.md
�   �       index.js
�   �       LICENSE
�   �       package.json
�   �       README.md
�   �       
�   +---memory-pager
�   �       .travis.yml
�   �       index.js
�   �       LICENSE
�   �       package.json
�   �       README.md
�   �       test.js
�   �       
�   +---merge-descriptors
�   �       index.d.ts
�   �       index.js
�   �       license
�   �       package.json
�   �       readme.md
�   �       
�   +---mime-db
�   �       db.json
�   �       HISTORY.md
�   �       index.js
�   �       LICENSE
�   �       package.json
�   �       README.md
�   �       
�   +---mime-types
�   �       HISTORY.md
�   �       index.js
�   �       LICENSE
�   �       mimeScore.js
�   �       package.json
�   �       README.md
�   �       
�   +---minimatch
�   �   �   LICENSE.md
�   �   �   package.json
�   �   �   README.md
�   �   �   
�   �       +---commonjs
�   �       �       assert-valid-pattern.d.ts
�   �       �       assert-valid-pattern.d.ts.map
�   �       �       assert-valid-pattern.js
�   �       �       assert-valid-pattern.js.map
�   �       �       ast.d.ts
�   �       �       ast.d.ts.map
�   �       �       ast.js
�   �       �       ast.js.map
�   �       �       brace-expressions.d.ts
�   �       �       brace-expressions.d.ts.map
�   �       �       brace-expressions.js
�   �       �       brace-expressions.js.map
�   �       �       escape.d.ts
�   �       �       escape.d.ts.map
�   �       �       escape.js
�   �       �       escape.js.map
�   �       �       index.d.ts
�   �       �       index.d.ts.map
�   �       �       index.js
�   �       �       index.js.map
�   �       �       package.json
�   �       �       unescape.d.ts
�   �       �       unescape.d.ts.map
�   �       �       unescape.js
�   �       �       unescape.js.map
�   �       �       
�   �       +---esm
�   �               assert-valid-pattern.d.ts
�   �               assert-valid-pattern.d.ts.map
�   �               assert-valid-pattern.js
�   �               assert-valid-pattern.js.map
�   �               ast.d.ts
�   �               ast.d.ts.map
�   �               ast.js
�   �               ast.js.map
�   �               brace-expressions.d.ts
�   �               brace-expressions.d.ts.map
�   �               brace-expressions.js
�   �               brace-expressions.js.map
�   �               escape.d.ts
�   �               escape.d.ts.map
�   �               escape.js
�   �               escape.js.map
�   �               index.d.ts
�   �               index.d.ts.map
�   �               index.js
�   �               index.js.map
�   �               package.json
�   �               unescape.d.ts
�   �               unescape.d.ts.map
�   �               unescape.js
�   �               unescape.js.map
�   �               
�   +---mongodb
�   �   �   LICENSE.md
�   �   �   mongodb.d.ts
�   �   �   package.json
�   �   �   README.md
�   �   �   tsconfig.json
�   �   �   
�   �   +---etc
�   �   �       prepare.js
�   �   �       
�   �   +---lib
�   �   �   �   admin.js
�   �   �   �   admin.js.map
�   �   �   �   bson.js
�   �   �   �   bson.js.map
�   �   �   �   change_stream.js
�   �   �   �   change_stream.js.map
�   �   �   �   collection.js
�   �   �   �   collection.js.map
�   �   �   �   connection_string.js
�   �   �   �   connection_string.js.map
�   �   �   �   constants.js
�   �   �   �   constants.js.map
�   �   �   �   db.js
�   �   �   �   db.js.map
�   �   �   �   deps.js
�   �   �   �   deps.js.map
�   �   �   �   encrypter.js
�   �   �   �   encrypter.js.map
�   �   �   �   error.js
�   �   �   �   error.js.map
�   �   �   �   explain.js
�   �   �   �   explain.js.map
�   �   �   �   index.js
�   �   �   �   index.js.map
�   �   �   �   mongo_client.js
�   �   �   �   mongo_client.js.map
�   �   �   �   mongo_client_auth_providers.js
�   �   �   �   mongo_client_auth_providers.js.map
�   �   �   �   mongo_logger.js
�   �   �   �   mongo_logger.js.map
�   �   �   �   mongo_types.js
�   �   �   �   mongo_types.js.map
�   �   �   �   read_concern.js
�   �   �   �   read_concern.js.map
�   �   �   �   read_preference.js
�   �   �   �   read_preference.js.map
�   �   �   �   runtime_adapters.js
�   �   �   �   runtime_adapters.js.map
�   �   �   �   sessions.js
�   �   �   �   sessions.js.map
�   �   �   �   sort.js
�   �   �   �   sort.js.map
�   �   �   �   timeout.js
�   �   �   �   timeout.js.map
�   �   �   �   transactions.js
�   �   �   �   transactions.js.map
�   �   �   �   utils.js
�   �   �   �   utils.js.map
�   �   �   �   write_concern.js
�   �   �   �   write_concern.js.map
�   �   �   �   
�   �   �   +---bulk
�   �   �   �       common.js
�   �   �   �       common.js.map
�   �   �   �       ordered.js
�   �   �   �       ordered.js.map
�   �   �   �       unordered.js
�   �   �   �       unordered.js.map
�   �   �   �       
�   �   �   +---client-side-encryption
�   �   �   �   �   auto_encrypter.js
�   �   �   �   �   auto_encrypter.js.map
�   �   �   �   �   client_encryption.js
�   �   �   �   �   client_encryption.js.map
�   �   �   �   �   errors.js
�   �   �   �   �   errors.js.map
�   �   �   �   �   mongocryptd_manager.js
�   �   �   �   �   mongocryptd_manager.js.map
�   �   �   �   �   state_machine.js
�   �   �   �   �   state_machine.js.map
�   �   �   �   �   
�   �   �   �   +---providers
�   �   �   �           aws.js
�   �   �   �           aws.js.map
�   �   �   �           azure.js
�   �   �   �           azure.js.map
�   �   �   �           gcp.js
�   �   �   �           gcp.js.map
�   �   �   �           index.js
�   �   �   �           index.js.map
�   �   �   �           
�   �   �   +---cmap
�   �   �   �   �   commands.js
�   �   �   �   �   commands.js.map
�   �   �   �   �   command_monitoring_events.js
�   �   �   �   �   command_monitoring_events.js.map
�   �   �   �   �   connect.js
�   �   �   �   �   connect.js.map
�   �   �   �   �   connection.js
�   �   �   �   �   connection.js.map
�   �   �   �   �   connection_pool.js
�   �   �   �   �   connection_pool.js.map
�   �   �   �   �   connection_pool_events.js
�   �   �   �   �   connection_pool_events.js.map
�   �   �   �   �   errors.js
�   �   �   �   �   errors.js.map
�   �   �   �   �   metrics.js
�   �   �   �   �   metrics.js.map
�   �   �   �   �   stream_description.js
�   �   �   �   �   stream_description.js.map
�   �   �   �   �   
�   �   �   �   +---auth
�   �   �   �   �   �   auth_provider.js
�   �   �   �   �   �   auth_provider.js.map
�   �   �   �   �   �   aws4.js
�   �   �   �   �   �   aws4.js.map
�   �   �   �   �   �   aws_temporary_credentials.js
�   �   �   �   �   �   aws_temporary_credentials.js.map
�   �   �   �   �   �   gssapi.js
�   �   �   �   �   �   gssapi.js.map
�   �   �   �   �   �   mongodb_aws.js
�   �   �   �   �   �   mongodb_aws.js.map
�   �   �   �   �   �   mongodb_oidc.js
�   �   �   �   �   �   mongodb_oidc.js.map
�   �   �   �   �   �   mongo_credentials.js
�   �   �   �   �   �   mongo_credentials.js.map
�   �   �   �   �   �   plain.js
�   �   �   �   �   �   plain.js.map
�   �   �   �   �   �   providers.js
�   �   �   �   �   �   providers.js.map
�   �   �   �   �   �   scram.js
�   �   �   �   �   �   scram.js.map
�   �   �   �   �   �   x509.js
�   �   �   �   �   �   x509.js.map
�   �   �   �   �   �   
�   �   �   �   �   +---mongodb_oidc
�   �   �   �   �           automated_callback_workflow.js
�   �   �   �   �           automated_callback_workflow.js.map
�   �   �   �   �           azure_machine_workflow.js
�   �   �   �   �           azure_machine_workflow.js.map
�   �   �   �   �           callback_workflow.js
�   �   �   �   �           callback_workflow.js.map
�   �   �   �   �           command_builders.js
�   �   �   �   �           command_builders.js.map
�   �   �   �   �           gcp_machine_workflow.js
�   �   �   �   �           gcp_machine_workflow.js.map
�   �   �   �   �           human_callback_workflow.js
�   �   �   �   �           human_callback_workflow.js.map
�   �   �   �   �           k8s_machine_workflow.js
�   �   �   �   �           k8s_machine_workflow.js.map
�   �   �   �   �           token_cache.js
�   �   �   �   �           token_cache.js.map
�   �   �   �   �           token_machine_workflow.js
�   �   �   �   �           token_machine_workflow.js.map
�   �   �   �   �           
�   �   �   �   +---handshake
�   �   �   �   �       client_metadata.js
�   �   �   �   �       client_metadata.js.map
�   �   �   �   �       
�   �   �   �   +---wire_protocol
�   �   �   �       �   compression.js
�   �   �   �       �   compression.js.map
�   �   �   �       �   constants.js
�   �   �   �       �   constants.js.map
�   �   �   �       �   on_data.js
�   �   �   �       �   on_data.js.map
�   �   �   �       �   responses.js
�   �   �   �       �   responses.js.map
�   �   �   �       �   shared.js
�   �   �   �       �   shared.js.map
�   �   �   �       �   
�   �   �   �       +---on_demand
�   �   �   �               document.js
�   �   �   �               document.js.map
�   �   �   �               
�   �   �   +---cursor
�   �   �   �       abstract_cursor.js
�   �   �   �       abstract_cursor.js.map
�   �   �   �       aggregation_cursor.js
�   �   �   �       aggregation_cursor.js.map
�   �   �   �       change_stream_cursor.js
�   �   �   �       change_stream_cursor.js.map
�   �   �   �       client_bulk_write_cursor.js
�   �   �   �       client_bulk_write_cursor.js.map
�   �   �   �       explainable_cursor.js
�   �   �   �       explainable_cursor.js.map
�   �   �   �       find_cursor.js
�   �   �   �       find_cursor.js.map
�   �   �   �       list_collections_cursor.js
�   �   �   �       list_collections_cursor.js.map
�   �   �   �       list_indexes_cursor.js
�   �   �   �       list_indexes_cursor.js.map
�   �   �   �       list_search_indexes_cursor.js
�   �   �   �       list_search_indexes_cursor.js.map
�   �   �   �       run_command_cursor.js
�   �   �   �       run_command_cursor.js.map
�   �   �   �       
�   �   �   +---gridfs
�   �   �   �       download.js
�   �   �   �       download.js.map
�   �   �   �       index.js
�   �   �   �       index.js.map
�   �   �   �       upload.js
�   �   �   �       upload.js.map
�   �   �   �       
�   �   �   +---operations
�   �   �   �   �   aggregate.js
�   �   �   �   �   aggregate.js.map
�   �   �   �   �   command.js
�   �   �   �   �   command.js.map
�   �   �   �   �   count.js
�   �   �   �   �   count.js.map
�   �   �   �   �   create_collection.js
�   �   �   �   �   create_collection.js.map
�   �   �   �   �   delete.js
�   �   �   �   �   delete.js.map
�   �   �   �   �   drop.js
�   �   �   �   �   drop.js.map
�   �   �   �   �   end_sessions.js
�   �   �   �   �   end_sessions.js.map
�   �   �   �   �   estimated_document_count.js
�   �   �   �   �   estimated_document_count.js.map
�   �   �   �   �   execute_operation.js
�   �   �   �   �   execute_operation.js.map
�   �   �   �   �   find.js
�   �   �   �   �   find.js.map
�   �   �   �   �   find_and_modify.js
�   �   �   �   �   find_and_modify.js.map
�   �   �   �   �   get_more.js
�   �   �   �   �   get_more.js.map
�   �   �   �   �   indexes.js
�   �   �   �   �   indexes.js.map
�   �   �   �   �   insert.js
�   �   �   �   �   insert.js.map
�   �   �   �   �   kill_cursors.js
�   �   �   �   �   kill_cursors.js.map
�   �   �   �   �   list_collections.js
�   �   �   �   �   list_collections.js.map
�   �   �   �   �   list_databases.js
�   �   �   �   �   list_databases.js.map
�   �   �   �   �   operation.js
�   �   �   �   �   operation.js.map
�   �   �   �   �   profiling_level.js
�   �   �   �   �   profiling_level.js.map
�   �   �   �   �   remove_user.js
�   �   �   �   �   remove_user.js.map
�   �   �   �   �   rename.js
�   �   �   �   �   rename.js.map
�   �   �   �   �   run_command.js
�   �   �   �   �   run_command.js.map
�   �   �   �   �   set_profiling_level.js
�   �   �   �   �   set_profiling_level.js.map
�   �   �   �   �   stats.js
�   �   �   �   �   stats.js.map
�   �   �   �   �   update.js
�   �   �   �   �   update.js.map
�   �   �   �   �   validate_collection.js
�   �   �   �   �   validate_collection.js.map
�   �   �   �   �   
�   �   �   �   +---client_bulk_write
�   �   �   �   �       client_bulk_write.js
�   �   �   �   �       client_bulk_write.js.map
�   �   �   �   �       command_builder.js
�   �   �   �   �       command_builder.js.map
�   �   �   �   �       common.js
�   �   �   �   �       common.js.map
�   �   �   �   �       executor.js
�   �   �   �   �       executor.js.map
�   �   �   �   �       results_merger.js
�   �   �   �   �       results_merger.js.map
�   �   �   �   �       
�   �   �   �   +---search_indexes
�   �   �   �           create.js
�   �   �   �           create.js.map
�   �   �   �           drop.js
�   �   �   �           drop.js.map
�   �   �   �           update.js
�   �   �   �           update.js.map
�   �   �   �           
�   �   �   +---sdam
�   �   �           common.js
�   �   �           common.js.map
�   �   �           events.js
�   �   �           events.js.map
�   �   �           monitor.js
�   �   �           monitor.js.map
�   �   �           server.js
�   �   �           server.js.map
�   �   �           server_description.js
�   �   �           server_description.js.map
�   �   �           server_selection.js
�   �   �           server_selection.js.map
�   �   �           server_selection_events.js
�   �   �           server_selection_events.js.map
�   �   �           srv_polling.js
�   �   �           srv_polling.js.map
�   �   �           topology.js
�   �   �           topology.js.map
�   �   �           topology_description.js
�   �   �           topology_description.js.map
�   �   �           
�   �   +---src
�   �       �   admin.ts
�   �       �   bson.ts
�   �       �   change_stream.ts
�   �       �   collection.ts
�   �       �   connection_string.ts
�   �       �   constants.ts
�   �       �   db.ts
�   �       �   deps.ts
�   �       �   encrypter.ts
�   �       �   error.ts
�   �       �   explain.ts
�   �       �   index.ts
�   �       �   mongo_client.ts
�   �       �   mongo_client_auth_providers.ts
�   �       �   mongo_logger.ts
�   �       �   mongo_types.ts
�   �       �   read_concern.ts
�   �       �   read_preference.ts
�   �       �   runtime_adapters.ts
�   �       �   sessions.ts
�   �       �   sort.ts
�   �       �   timeout.ts
�   �       �   transactions.ts
�   �       �   utils.ts
�   �       �   write_concern.ts
�   �       �   
�   �       +---bulk
�   �       �       common.ts
�   �       �       ordered.ts
�   �       �       unordered.ts
�   �       �       
�   �       +---client-side-encryption
�   �       �   �   auto_encrypter.ts
�   �       �   �   client_encryption.ts
�   �       �   �   errors.ts
�   �       �   �   mongocryptd_manager.ts
�   �       �   �   state_machine.ts
�   �       �   �   
�   �       �   +---providers
�   �       �           aws.ts
�   �       �           azure.ts
�   �       �           gcp.ts
�   �       �           index.ts
�   �       �           
�   �       +---cmap
�   �       �   �   commands.ts
�   �       �   �   command_monitoring_events.ts
�   �       �   �   connect.ts
�   �       �   �   connection.ts
�   �       �   �   connection_pool.ts
�   �       �   �   connection_pool_events.ts
�   �       �   �   errors.ts
�   �       �   �   metrics.ts
�   �       �   �   stream_description.ts
�   �       �   �   
�   �       �   +---auth
�   �       �   �   �   auth_provider.ts
�   �       �   �   �   aws4.ts
�   �       �   �   �   aws_temporary_credentials.ts
�   �       �   �   �   gssapi.ts
�   �       �   �   �   mongodb_aws.ts
�   �       �   �   �   mongodb_oidc.ts
�   �       �   �   �   mongo_credentials.ts
�   �       �   �   �   plain.ts
�   �       �   �   �   providers.ts
�   �       �   �   �   scram.ts
�   �       �   �   �   x509.ts
�   �       �   �   �   
�   �       �   �   +---mongodb_oidc
�   �       �   �           automated_callback_workflow.ts
�   �       �   �           azure_machine_workflow.ts
�   �       �   �           callback_workflow.ts
�   �       �   �           command_builders.ts
�   �       �   �           gcp_machine_workflow.ts
�   �       �   �           human_callback_workflow.ts
�   �       �   �           k8s_machine_workflow.ts
�   �       �   �           token_cache.ts
�   �       �   �           token_machine_workflow.ts
�   �       �   �           
�   �       �   +---handshake
�   �       �   �       client_metadata.ts
�   �       �   �       
�   �       �   +---wire_protocol
�   �       �       �   compression.ts
�   �       �       �   constants.ts
�   �       �       �   on_data.ts
�   �       �       �   responses.ts
�   �       �       �   shared.ts
�   �       �       �   
�   �       �       +---on_demand
�   �       �               document.ts
�   �       �               
�   �       +---cursor
�   �       �       abstract_cursor.ts
�   �       �       aggregation_cursor.ts
�   �       �       change_stream_cursor.ts
�   �       �       client_bulk_write_cursor.ts
�   �       �       explainable_cursor.ts
�   �       �       find_cursor.ts
�   �       �       list_collections_cursor.ts
�   �       �       list_indexes_cursor.ts
�   �       �       list_search_indexes_cursor.ts
�   �       �       run_command_cursor.ts
�   �       �       
�   �       +---gridfs
�   �       �       download.ts
�   �       �       index.ts
�   �       �       upload.ts
�   �       �       
�   �       +---operations
�   �       �   �   aggregate.ts
�   �       �   �   command.ts
�   �       �   �   count.ts
�   �       �   �   create_collection.ts
�   �       �   �   delete.ts
�   �       �   �   drop.ts
�   �       �   �   end_sessions.ts
�   �       �   �   estimated_document_count.ts
�   �       �   �   execute_operation.ts
�   �       �   �   find.ts
�   �       �   �   find_and_modify.ts
�   �       �   �   get_more.ts
�   �       �   �   indexes.ts
�   �       �   �   insert.ts
�   �       �   �   kill_cursors.ts
�   �       �   �   list_collections.ts
�   �       �   �   list_databases.ts
�   �       �   �   operation.ts
�   �       �   �   profiling_level.ts
�   �       �   �   remove_user.ts
�   �       �   �   rename.ts
�   �       �   �   run_command.ts
�   �       �   �   set_profiling_level.ts
�   �       �   �   stats.ts
�   �       �   �   update.ts
�   �       �   �   validate_collection.ts
�   �       �   �   
�   �       �   +---client_bulk_write
�   �       �   �       client_bulk_write.ts
�   �       �   �       command_builder.ts
�   �       �   �       common.ts
�   �       �   �       executor.ts
�   �       �   �       results_merger.ts
�   �       �   �       
�   �       �   +---search_indexes
�   �       �           create.ts
�   �       �           drop.ts
�   �       �           update.ts
�   �       �           
�   �       +---sdam
�   �               common.ts
�   �               events.ts
�   �               monitor.ts
�   �               server.ts
�   �               server_description.ts
�   �               server_selection.ts
�   �               server_selection_events.ts
�   �               srv_polling.ts
�   �               topology.ts
�   �               topology_description.ts
�   �               
�   +---mongodb-connection-string-url
�   �   �   .esm-wrapper.mjs
�   �   �   LICENSE
�   �   �   package.json
�   �   �   README.md
�   �   �   
�   �   +---lib
�   �           index.d.ts
�   �           index.js
�   �           index.js.map
�   �           redact.d.ts
�   �           redact.js
�   �           redact.js.map
�   �           
�   +---mongoose
�   �   �   eslint.config.mjs
�   �   �   index.js
�   �   �   LICENSE.md
�   �   �   package.json
�   �   �   README.md
�   �   �   SECURITY.md
�   �   �   tstyche.json
�   �   �   
�   �   +---lib
�   �   �   �   aggregate.js
�   �   �   �   cast.js
�   �   �   �   collection.js
�   �   �   �   connection.js
�   �   �   �   connectionState.js
�   �   �   �   constants.js
�   �   �   �   document.js
�   �   �   �   driver.js
�   �   �   �   index.js
�   �   �   �   internal.js
�   �   �   �   model.js
�   �   �   �   modifiedPathsSnapshot.js
�   �   �   �   mongoose.js
�   �   �   �   options.js
�   �   �   �   query.js
�   �   �   �   queryHelpers.js
�   �   �   �   schema.js
�   �   �   �   schemaType.js
�   �   �   �   stateMachine.js
�   �   �   �   tracing.js
�   �   �   �   utils.js
�   �   �   �   validOptions.js
�   �   �   �   virtualType.js
�   �   �   �   
�   �   �   +---cast
�   �   �   �       bigint.js
�   �   �   �       boolean.js
�   �   �   �       date.js
�   �   �   �       decimal128.js
�   �   �   �       double.js
�   �   �   �       int32.js
�   �   �   �       number.js
�   �   �   �       objectid.js
�   �   �   �       string.js
�   �   �   �       uuid.js
�   �   �   �       
�   �   �   +---cursor
�   �   �   �       aggregationCursor.js
�   �   �   �       changeStream.js
�   �   �   �       queryCursor.js
�   �   �   �       
�   �   �   +---drivers
�   �   �   �   �   SPEC.md
�   �   �   �   �   
�   �   �   �   +---node-mongodb-native
�   �   �   �           bulkWriteResult.js
�   �   �   �           collection.js
�   �   �   �           connection.js
�   �   �   �           index.js
�   �   �   �           
�   �   �   +---error
�   �   �   �       browserMissingSchema.js
�   �   �   �       bulkSaveIncompleteError.js
�   �   �   �       bulkWriteError.js
�   �   �   �       cast.js
�   �   �   �       createCollectionsError.js
�   �   �   �       divergentArray.js
�   �   �   �       eachAsyncMultiError.js
�   �   �   �       index.js
�   �   �   �       invalidSchemaOption.js
�   �   �   �       messages.js
�   �   �   �       missingSchema.js
�   �   �   �       mongooseError.js
�   �   �   �       notFound.js
�   �   �   �       objectExpected.js
�   �   �   �       objectParameter.js
�   �   �   �       overwriteModel.js
�   �   �   �       parallelSave.js
�   �   �   �       parallelValidate.js
�   �   �   �       serverSelection.js
�   �   �   �       setOptionError.js
�   �   �   �       strict.js
�   �   �   �       strictPopulate.js
�   �   �   �       syncIndexes.js
�   �   �   �       validation.js
�   �   �   �       validator.js
�   �   �   �       version.js
�   �   �   �       
�   �   �   +---helpers
�   �   �   �   �   arrayDepth.js
�   �   �   �   �   buildMiddlewareFilter.js
�   �   �   �   �   clone.js
�   �   �   �   �   common.js
�   �   �   �   �   each.js
�   �   �   �   �   firstKey.js
�   �   �   �   �   get.js
�   �   �   �   �   getConstructorName.js
�   �   �   �   �   getDefaultBulkwriteResult.js
�   �   �   �   �   getFunctionName.js
�   �   �   �   �   immediate.js
�   �   �   �   �   isAsyncFunction.js
�   �   �   �   �   isBsonType.js
�   �   �   �   �   isMongooseObject.js
�   �   �   �   �   isObject.js
�   �   �   �   �   isPOJO.js
�   �   �   �   �   isPromise.js
�   �   �   �   �   isSimpleValidator.js
�   �   �   �   �   minimize.js
�   �   �   �   �   omitUndefined.js
�   �   �   �   �   once.js
�   �   �   �   �   parallelLimit.js
�   �   �   �   �   pluralize.js
�   �   �   �   �   printJestWarning.js
�   �   �   �   �   processConnectionOptions.js
�   �   �   �   �   setDefaultsOnInsert.js
�   �   �   �   �   specialProperties.js
�   �   �   �   �   symbols.js
�   �   �   �   �   timers.js
�   �   �   �   �   updateValidators.js
�   �   �   �   �   
�   �   �   �   +---aggregate
�   �   �   �   �       prepareDiscriminatorPipeline.js
�   �   �   �   �       stringifyFunctionOperators.js
�   �   �   �   �       
�   �   �   �   +---cursor
�   �   �   �   �       eachAsync.js
�   �   �   �   �       
�   �   �   �   +---discriminator
�   �   �   �   �       applyEmbeddedDiscriminators.js
�   �   �   �   �       areDiscriminatorValuesEqual.js
�   �   �   �   �       checkEmbeddedDiscriminatorKeyProjection.js
�   �   �   �   �       getConstructor.js
�   �   �   �   �       getDiscriminatorByValue.js
�   �   �   �   �       getSchemaDiscriminatorByValue.js
�   �   �   �   �       mergeDiscriminatorSchema.js
�   �   �   �   �       
�   �   �   �   +---document
�   �   �   �   �       applyDefaults.js
�   �   �   �   �       applyTimestamps.js
�   �   �   �   �       applyVirtuals.js
�   �   �   �   �       cleanModifiedSubpaths.js
�   �   �   �   �       compile.js
�   �   �   �   �       getDeepestSubdocumentForPath.js
�   �   �   �   �       getEmbeddedDiscriminatorPath.js
�   �   �   �   �       handleSpreadDoc.js
�   �   �   �   �       isInPathsToSave.js
�   �   �   �   �       
�   �   �   �   +---error
�   �   �   �   �       combinePathErrors.js
�   �   �   �   �       
�   �   �   �   +---indexes
�   �   �   �   �       applySchemaCollation.js
�   �   �   �   �       decorateDiscriminatorIndexOptions.js
�   �   �   �   �       getRelatedIndexes.js
�   �   �   �   �       isDefaultIdIndex.js
�   �   �   �   �       isIndexEqual.js
�   �   �   �   �       isIndexSpecEqual.js
�   �   �   �   �       isTextIndex.js
�   �   �   �   �       isTimeseriesIndex.js
�   �   �   �   �       
�   �   �   �   +---model
�   �   �   �   �       applyDefaultsToPOJO.js
�   �   �   �   �       applyHooks.js
�   �   �   �   �       applyMethods.js
�   �   �   �   �       applyStaticHooks.js
�   �   �   �   �       applyStatics.js
�   �   �   �   �       castBulkWrite.js
�   �   �   �   �       decorateBulkWriteResult.js
�   �   �   �   �       discriminator.js
�   �   �   �   �       pushNestedArrayPaths.js
�   �   �   �   �       
�   �   �   �   +---path
�   �   �   �   �       parentPaths.js
�   �   �   �   �       setDottedPath.js
�   �   �   �   �       
�   �   �   �   +---populate
�   �   �   �   �       assignRawDocsToIdStructure.js
�   �   �   �   �       assignVals.js
�   �   �   �   �       createPopulateQueryFilter.js
�   �   �   �   �       getModelsMapForPopulate.js
�   �   �   �   �       getSchemaTypes.js
�   �   �   �   �       getVirtual.js
�   �   �   �   �       leanPopulateMap.js
�   �   �   �   �       lookupLocalFields.js
�   �   �   �   �       markArraySubdocsPopulated.js
�   �   �   �   �       modelNamesFromRefPath.js
�   �   �   �   �       removeDeselectedForeignField.js
�   �   �   �   �       setPopulatedVirtualValue.js
�   �   �   �   �       skipPopulateValue.js
�   �   �   �   �       splitPopulateQuery.js
�   �   �   �   �       validateRef.js
�   �   �   �   �       
�   �   �   �   +---projection
�   �   �   �   �       applyProjection.js
�   �   �   �   �       hasIncludedChildren.js
�   �   �   �   �       isDefiningProjection.js
�   �   �   �   �       isExclusive.js
�   �   �   �   �       isInclusive.js
�   �   �   �   �       isNestedProjection.js
�   �   �   �   �       isPathExcluded.js
�   �   �   �   �       isPathSelectedInclusive.js
�   �   �   �   �       isSubpath.js
�   �   �   �   �       parseProjection.js
�   �   �   �   �       
�   �   �   �   +---query
�   �   �   �   �       applyGlobalOption.js
�   �   �   �   �       cast$expr.js
�   �   �   �   �       castFilterPath.js
�   �   �   �   �       castUpdate.js
�   �   �   �   �       getEmbeddedDiscriminatorPath.js
�   �   �   �   �       handleImmutable.js
�   �   �   �   �       handleReadPreferenceAliases.js
�   �   �   �   �       hasDollarKeys.js
�   �   �   �   �       isOperator.js
�   �   �   �   �       sanitizeFilter.js
�   �   �   �   �       sanitizeProjection.js
�   �   �   �   �       selectPopulatedFields.js
�   �   �   �   �       trusted.js
�   �   �   �   �       validOps.js
�   �   �   �   �       
�   �   �   �   +---schema
�   �   �   �   �       addAutoId.js
�   �   �   �   �       applyBuiltinPlugins.js
�   �   �   �   �       applyPlugins.js
�   �   �   �   �       applyReadConcern.js
�   �   �   �   �       applyWriteConcern.js
�   �   �   �   �       cleanPositionalOperators.js
�   �   �   �   �       getIndexes.js
�   �   �   �   �       getKeysInSchemaOrder.js
�   �   �   �   �       getPath.js
�   �   �   �   �       getSubdocumentStrictValue.js
�   �   �   �   �       handleIdOption.js
�   �   �   �   �       handleTimestampOption.js
�   �   �   �   �       idGetter.js
�   �   �   �   �       merge.js
�   �   �   �   �       
�   �   �   �   +---schematype
�   �   �   �   �       handleImmutable.js
�   �   �   �   �       
�   �   �   �   +---timestamps
�   �   �   �   �       setDocumentTimestamps.js
�   �   �   �   �       setupTimestamps.js
�   �   �   �   �       
�   �   �   �   +---topology
�   �   �   �   �       allServersUnknown.js
�   �   �   �   �       isAtlas.js
�   �   �   �   �       isSSLError.js
�   �   �   �   �       
�   �   �   �   +---update
�   �   �   �           applyTimestampsToChildren.js
�   �   �   �           applyTimestampsToUpdate.js
�   �   �   �           castArrayFilters.js
�   �   �   �           decorateUpdateWithVersionKey.js
�   �   �   �           modifiedPaths.js
�   �   �   �           moveImmutableProperties.js
�   �   �   �           removeUnusedArrayFilters.js
�   �   �   �           updatedPathsByArrayFilter.js
�   �   �   �           
�   �   �   +---options
�   �   �   �       populateOptions.js
�   �   �   �       propertyOptions.js
�   �   �   �       saveOptions.js
�   �   �   �       schemaArrayOptions.js
�   �   �   �       schemaBufferOptions.js
�   �   �   �       schemaDateOptions.js
�   �   �   �       schemaDocumentArrayOptions.js
�   �   �   �       schemaMapOptions.js
�   �   �   �       schemaNumberOptions.js
�   �   �   �       schemaObjectIdOptions.js
�   �   �   �       schemaStringOptions.js
�   �   �   �       schemaSubdocumentOptions.js
�   �   �   �       schemaTypeOptions.js
�   �   �   �       schemaUnionOptions.js
�   �   �   �       virtualOptions.js
�   �   �   �       
�   �   �   +---plugins
�   �   �   �       index.js
�   �   �   �       saveSubdocs.js
�   �   �   �       sharding.js
�   �   �   �       trackTransaction.js
�   �   �   �       
�   �   �   +---schema
�   �   �   �   �   array.js
�   �   �   �   �   bigint.js
�   �   �   �   �   boolean.js
�   �   �   �   �   buffer.js
�   �   �   �   �   date.js
�   �   �   �   �   decimal128.js
�   �   �   �   �   documentArray.js
�   �   �   �   �   documentArrayElement.js
�   �   �   �   �   double.js
�   �   �   �   �   index.js
�   �   �   �   �   int32.js
�   �   �   �   �   map.js
�   �   �   �   �   mixed.js
�   �   �   �   �   number.js
�   �   �   �   �   objectId.js
�   �   �   �   �   string.js
�   �   �   �   �   subdocument.js
�   �   �   �   �   symbols.js
�   �   �   �   �   union.js
�   �   �   �   �   uuid.js
�   �   �   �   �   
�   �   �   �   +---operators
�   �   �   �           bitwise.js
�   �   �   �           exists.js
�   �   �   �           geospatial.js
�   �   �   �           helpers.js
�   �   �   �           text.js
�   �   �   �           type.js
�   �   �   �           
�   �   �   +---standardSchema
�   �   �   �       convertErrorToIssues.js
�   �   �   �       
�   �   �   +---types
�   �   �       �   arraySubdocument.js
�   �   �       �   buffer.js
�   �   �       �   decimal128.js
�   �   �       �   double.js
�   �   �       �   index.js
�   �   �       �   map.js
�   �   �       �   objectid.js
�   �   �       �   subdocument.js
�   �   �       �   uuid.js
�   �   �       �   
�   �   �       +---array
�   �   �       �   �   index.js
�   �   �       �   �   isMongooseArray.js
�   �   �       �   �   
�   �   �       �   +---methods
�   �   �       �           index.js
�   �   �       �           
�   �   �       +---documentArray
�   �   �           �   index.js
�   �   �           �   isMongooseDocumentArray.js
�   �   �           �   
�   �   �           +---methods
�   �   �                   index.js
�   �   �                   
�   �   +---types
�   �           aggregate.d.ts
�   �           augmentations.d.ts
�   �           callback.d.ts
�   �           collection.d.ts
�   �           connection.d.ts
�   �           cursor.d.ts
�   �           document.d.ts
�   �           error.d.ts
�   �           expressions.d.ts
�   �           helpers.d.ts
�   �           index.d.ts
�   �           indexes.d.ts
�   �           inferhydrateddoctype.d.ts
�   �           inferrawdoctype.d.ts
�   �           inferschematype.d.ts
�   �           middlewares.d.ts
�   �           models.d.ts
�   �           mongooseoptions.d.ts
�   �           pipelinestage.d.ts
�   �           populate.d.ts
�   �           query.d.ts
�   �           schemaoptions.d.ts
�   �           schematypes.d.ts
�   �           session.d.ts
�   �           tracing.d.ts
�   �           types.d.ts
�   �           utility.d.ts
�   �           validation.d.ts
�   �           virtuals.d.ts
�   �           
�   +---mpath
�   �   �   .travis.yml
�   �   �   History.md
�   �   �   index.js
�   �   �   LICENSE
�   �   �   package.json
�   �   �   README.md
�   �   �   SECURITY.md
�   �   �   
�   �   +---lib
�   �   �       index.js
�   �   �       stringToParts.js
�   �   �       
�   �   +---test
�   �           .eslintrc.yml
�   �           index.js
�   �           stringToParts.js
�   �           
�   +---mquery
�   �   �   History.md
�   �   �   LICENSE
�   �   �   package.json
�   �   �   README.md
�   �   �   SECURITY.md
�   �   �   
�   �   �       ISSUE_TEMPLATE.md
�   �   �       PULL_REQUEST_TEMPLATE.md
�   �   �       
�   �   +---lib
�   �       �   env.js
�   �       �   mquery.js
�   �       �   permissions.js
�   �       �   utils.js
�   �       �   
�   �       +---collection
�   �               collection.js
�   �               index.js
�   �               node.js
�   �               
�   +---ms
�   �       index.js
�   �       license.md
�   �       package.json
�   �       readme.md
�   �       
�   +---natural-compare
�   �       index.js
�   �       package.json
�   �       README.md
�   �       
�   +---negotiator
�   �   �   HISTORY.md
�   �   �   index.js
�   �   �   LICENSE
�   �   �   package.json
�   �   �   README.md
�   �   �   
�   �   +---lib
�   �           charset.js
�   �           encoding.js
�   �           language.js
�   �           mediaType.js
�   �           
�   +---nodemon
�   �   �   .prettierrc.json
�   �   �   index.d.ts
�   �   �   jsconfig.json
�   �   �   LICENSE
�   �   �   package.json
�   �   �   README.md
�   �   �   
�   �   +---bin
�   �   �       nodemon.js
�   �   �       windows-kill.exe
�   �   �       
�   �   +---doc
�   �   �   +---cli
�   �   �           authors.txt
�   �   �           config.txt
�   �   �           help.txt
�   �   �           logo.txt
�   �   �           options.txt
�   �   �           topics.txt
�   �   �           usage.txt
�   �   �           whoami.txt
�   �   �           
�   �   +---lib
�   �       �   index.js
�   �       �   nodemon.js
�   �       �   spawn.js
�   �       �   version.js
�   �       �   
�   �       +---cli
�   �       �       index.js
�   �       �       parse.js
�   �       �       
�   �       +---config
�   �       �       command.js
�   �       �       defaults.js
�   �       �       exec.js
�   �       �       index.js
�   �       �       load.js
�   �       �       
�   �       +---help
�   �       �       index.js
�   �       �       
�   �       +---monitor
�   �       �       index.js
�   �       �       match.js
�   �       �       run.js
�   �       �       signals.js
�   �       �       watch.js
�   �       �       
�   �       +---rules
�   �       �       add.js
�   �       �       index.js
�   �       �       parse.js
�   �       �       
�   �       +---utils
�   �               bus.js
�   �               clone.js
�   �               colour.js
�   �               index.js
�   �               log.js
�   �               merge.js
�   �               
�   +---normalize-path
�   �       index.js
�   �       LICENSE
�   �       package.json
�   �       README.md
�   �       
�   +---object-assign
�   �       index.js
�   �       license
�   �       package.json
�   �       readme.md
�   �       
�   +---object-inspect
�   �   �   .eslintrc
�   �   �   .nycrc
�   �   �   CHANGELOG.md
�   �   �   index.js
�   �   �   LICENSE
�   �   �   package-support.json
�   �   �   package.json
�   �   �   readme.markdown
�   �   �   test-core-js.js
�   �   �   util.inspect.js
�   �   �   
�   �   �       FUNDING.yml
�   �   �       
�   �   +---example
�   �   �       all.js
�   �   �       circular.js
�   �   �       fn.js
�   �   �       inspect.js
�   �   �       
�   �   +---test
�   �       �   bigint.js
�   �       �   circular.js
�   �       �   deep.js
�   �       �   element.js
�   �       �   err.js
�   �       �   fakes.js
�   �       �   fn.js
�   �       �   global.js
�   �       �   has.js
�   �       �   holes.js
�   �       �   indent-option.js
�   �       �   inspect.js
�   �       �   lowbyte.js
�   �       �   number.js
�   �       �   quoteStyle.js
�   �       �   toStringTag.js
�   �       �   undef.js
�   �       �   values.js
�   �       �   
�   �       +---browser
�   �               dom.js
�   �               
�   +---on-finished
�   �       HISTORY.md
�   �       index.js
�   �       LICENSE
�   �       package.json
�   �       README.md
�   �       
�   +---once
�   �       LICENSE
�   �       once.js
�   �       package.json
�   �       README.md
�   �       
�   +---optionator
�   �   �   CHANGELOG.md
�   �   �   LICENSE
�   �   �   package.json
�   �   �   README.md
�   �   �   
�   �   +---lib
�   �           help.js
�   �           index.js
�   �           util.js
�   �           
�   +---p-limit
�   �       index.d.ts
�   �       index.js
�   �       license
�   �       package.json
�   �       readme.md
�   �       
�   +---p-locate
�   �       index.d.ts
�   �       index.js
�   �       license
�   �       package.json
�   �       readme.md
�   �       
�   +---parseurl
�   �       HISTORY.md
�   �       index.js
�   �       LICENSE
�   �       package.json
�   �       README.md
�   �       
�   +---path-exists
�   �       index.d.ts
�   �       index.js
�   �       license
�   �       package.json
�   �       readme.md
�   �       
�   +---path-key
�   �       index.d.ts
�   �       index.js
�   �       license
�   �       package.json
�   �       readme.md
�   �       
�   +---path-to-regexp
�   �   �   LICENSE
�   �   �   package.json
�   �   �   Readme.md
�   �   �   
�   �           index.d.ts
�   �           index.js
�   �           index.js.map
�   �           
�   +---picomatch
�   �   �   index.js
�   �   �   LICENSE
�   �   �   package.json
�   �   �   README.md
�   �   �   
�   �   +---lib
�   �           constants.js
�   �           parse.js
�   �           picomatch.js
�   �           scan.js
�   �           utils.js
�   �           
�   +---prelude-ls
�   �   �   CHANGELOG.md
�   �   �   LICENSE
�   �   �   package.json
�   �   �   README.md
�   �   �   
�   �   +---lib
�   �           Func.js
�   �           index.js
�   �           List.js
�   �           Num.js
�   �           Obj.js
�   �           Str.js
�   �           
�   +---prettier
�   �   �   doc.d.ts
�   �   �   doc.js
�   �   �   doc.mjs
�   �   �   index.cjs
�   �   �   index.d.ts
�   �   �   index.mjs
�   �   �   LICENSE
�   �   �   package.json
�   �   �   README.md
�   �   �   standalone.d.ts
�   �   �   standalone.js
�   �   �   standalone.mjs
�   �   �   THIRD-PARTY-NOTICES.md
�   �   �   
�   �   +---bin
�   �   �       prettier.cjs
�   �   �       
�   �   +---internal
�   �   �       experimental-cli-worker.mjs
�   �   �       experimental-cli.mjs
�   �   �       legacy-cli.mjs
�   �   �       
�   �   +---plugins
�   �           acorn.d.ts
�   �           acorn.js
�   �           acorn.mjs
�   �           angular.d.ts
�   �           angular.js
�   �           angular.mjs
�   �           babel.d.ts
�   �           babel.js
�   �           babel.mjs
�   �           estree.d.ts
�   �           estree.js
�   �           estree.mjs
�   �           flow.d.ts
�   �           flow.js
�   �           flow.mjs
�   �           glimmer.d.ts
�   �           glimmer.js
�   �           glimmer.mjs
�   �           graphql.d.ts
�   �           graphql.js
�   �           graphql.mjs
�   �           html.d.ts
�   �           html.js
�   �           html.mjs
�   �           markdown.d.ts
�   �           markdown.js
�   �           markdown.mjs
�   �           meriyah.d.ts
�   �           meriyah.js
�   �           meriyah.mjs
�   �           postcss.d.ts
�   �           postcss.js
�   �           postcss.mjs
�   �           typescript.d.ts
�   �           typescript.js
�   �           typescript.mjs
�   �           yaml.d.ts
�   �           yaml.js
�   �           yaml.mjs
�   �           
�   +---proxy-addr
�   �       HISTORY.md
�   �       index.js
�   �       LICENSE
�   �       package.json
�   �       README.md
�   �       
�   +---pstree.remy
�   �   �   .travis.yml
�   �   �   LICENSE
�   �   �   package.json
�   �   �   README.md
�   �   �   
�   �   +---lib
�   �   �       index.js
�   �   �       tree.js
�   �   �       utils.js
�   �   �       
�   �   +---tests
�   �       �   index.test.js
�   �       �   
�   �       +---fixtures
�   �               index.js
�   �               out1
�   �               out2
�   �               
�   +---punycode
�   �       LICENSE-MIT.txt
�   �       package.json
�   �       punycode.es6.js
�   �       punycode.js
�   �       README.md
�   �       
�   +---qs
�   �   �   .editorconfig
�   �   �   .nycrc
�   �   �   CHANGELOG.md
�   �   �   eslint.config.mjs
�   �   �   LICENSE.md
�   �   �   package.json
�   �   �   README.md
�   �   �   
�   �   �       FUNDING.yml
�   �   �       SECURITY.md
�   �   �       THREAT_MODEL.md
�   �   �       
�   �   �       qs.js
�   �   �       
�   �   +---lib
�   �   �       formats.js
�   �   �       index.js
�   �   �       parse.js
�   �   �       stringify.js
�   �   �       utils.js
�   �   �       
�   �   +---test
�   �           empty-keys-cases.js
�   �           parse.js
�   �           stringify.js
�   �           utils.js
�   �           
�   +---range-parser
�   �       HISTORY.md
�   �       index.js
�   �       LICENSE
�   �       package.json
�   �       README.md
�   �       
�   +---raw-body
�   �       index.d.ts
�   �       index.js
�   �       LICENSE
�   �       package.json
�   �       README.md
�   �       
�   +---readdirp
�   �       index.d.ts
�   �       index.js
�   �       LICENSE
�   �       package.json
�   �       README.md
�   �       
�   +---router
�   �   �   HISTORY.md
�   �   �   index.js
�   �   �   LICENSE
�   �   �   package.json
�   �   �   README.md
�   �   �   
�   �   +---lib
�   �           layer.js
�   �           route.js
�   �           
�   +---safe-buffer
�   �       index.d.ts
�   �       index.js
�   �       LICENSE
�   �       package.json
�   �       README.md
�   �       
�   +---safer-buffer
�   �       dangerous.js
�   �       LICENSE
�   �       package.json
�   �       Porting-Buffer.md
�   �       Readme.md
�   �       safer.js
�   �       tests.js
�   �       
�   +---semver
�   �   �   index.js
�   �   �   LICENSE
�   �   �   package.json
�   �   �   preload.js
�   �   �   range.bnf
�   �   �   README.md
�   �   �   
�   �   +---bin
�   �   �       semver.js
�   �   �       
�   �   +---classes
�   �   �       comparator.js
�   �   �       index.js
�   �   �       range.js
�   �   �       semver.js
�   �   �       
�   �   +---functions
�   �   �       clean.js
�   �   �       cmp.js
�   �   �       coerce.js
�   �   �       compare-build.js
�   �   �       compare-loose.js
�   �   �       compare.js
�   �   �       diff.js
�   �   �       eq.js
�   �   �       gt.js
�   �   �       gte.js
�   �   �       inc.js
�   �   �       lt.js
�   �   �       lte.js
�   �   �       major.js
�   �   �       minor.js
�   �   �       neq.js
�   �   �       parse.js
�   �   �       patch.js
�   �   �       prerelease.js
�   �   �       rcompare.js
�   �   �       rsort.js
�   �   �       satisfies.js
�   �   �       sort.js
�   �   �       truncate.js
�   �   �       valid.js
�   �   �       
�   �   +---internal
�   �   �       constants.js
�   �   �       debug.js
�   �   �       identifiers.js
�   �   �       lrucache.js
�   �   �       parse-options.js
�   �   �       re.js
�   �   �       
�   �   +---ranges
�   �           gtr.js
�   �           intersects.js
�   �           ltr.js
�   �           max-satisfying.js
�   �           min-satisfying.js
�   �           min-version.js
�   �           outside.js
�   �           simplify.js
�   �           subset.js
�   �           to-comparators.js
�   �           valid.js
�   �           
�   +---send
�   �       index.js
�   �       LICENSE
�   �       package.json
�   �       README.md
�   �       
�   +---serve-static
�   �       index.js
�   �       LICENSE
�   �       package.json
�   �       README.md
�   �       
�   +---setprototypeof
�   �   �   index.d.ts
�   �   �   index.js
�   �   �   LICENSE
�   �   �   package.json
�   �   �   README.md
�   �   �   
�   �   +---test
�   �           index.js
�   �           
�   +---shebang-command
�   �       index.js
�   �       license
�   �       package.json
�   �       readme.md
�   �       
�   +---shebang-regex
�   �       index.d.ts
�   �       index.js
�   �       license
�   �       package.json
�   �       readme.md
�   �       
�   +---side-channel
�   �   �   .editorconfig
�   �   �   .eslintrc
�   �   �   .nycrc
�   �   �   CHANGELOG.md
�   �   �   index.d.ts
�   �   �   index.js
�   �   �   LICENSE
�   �   �   package.json
�   �   �   README.md
�   �   �   tsconfig.json
�   �   �   
�   �   �       FUNDING.yml
�   �   �       
�   �   +---test
�   �           index.js
�   �           
�   +---side-channel-list
�   �   �   .editorconfig
�   �   �   .eslintrc
�   �   �   .nycrc
�   �   �   CHANGELOG.md
�   �   �   index.d.ts
�   �   �   index.js
�   �   �   LICENSE
�   �   �   list.d.ts
�   �   �   package.json
�   �   �   README.md
�   �   �   tsconfig.json
�   �   �   
�   �   �       FUNDING.yml
�   �   �       
�   �   +---test
�   �           index.js
�   �           
�   +---side-channel-map
�   �   �   .editorconfig
�   �   �   .eslintrc
�   �   �   .nycrc
�   �   �   CHANGELOG.md
�   �   �   index.d.ts
�   �   �   index.js
�   �   �   LICENSE
�   �   �   package.json
�   �   �   README.md
�   �   �   tsconfig.json
�   �   �   
�   �   �       FUNDING.yml
�   �   �       
�   �   +---test
�   �           index.js
�   �           
�   +---side-channel-weakmap
�   �   �   .editorconfig
�   �   �   .eslintrc
�   �   �   .nycrc
�   �   �   CHANGELOG.md
�   �   �   index.d.ts
�   �   �   index.js
�   �   �   LICENSE
�   �   �   package.json
�   �   �   README.md
�   �   �   tsconfig.json
�   �   �   
�   �   �       FUNDING.yml
�   �   �       
�   �   +---test
�   �           index.js
�   �           
�   +---sift
�   �   �   index.d.ts
�   �   �   index.js
�   �   �   MIT-LICENSE.txt
�   �   �   package.json
�   �   �   README.md
�   �   �   sift.csp.min.js
�   �   �   sift.csp.min.js.map
�   �   �   sift.min.js
�   �   �   sift.min.js.map
�   �   �   
�   �   +---es
�   �   �       index.js
�   �   �       index.js.map
�   �   �       
�   �   +---es5m
�   �   �       index.js
�   �   �       index.js.map
�   �   �       
�   �   +---lib
�   �   �       core.d.ts
�   �   �       index.d.ts
�   �   �       index.js
�   �   �       index.js.map
�   �   �       operations.d.ts
�   �   �       utils.d.ts
�   �   �       
�   �   +---src
�   �           core.ts
�   �           index.ts
�   �           operations.ts
�   �           utils.ts
�   �           
�   +---simple-update-notifier
�   �   �   LICENSE
�   �   �   package.json
�   �   �   README.md
�   �   �   
�   �   +---build
�   �   �       index.d.ts
�   �   �       index.js
�   �   �       
�   �   +---src
�   �           borderedText.ts
�   �           cache.spec.ts
�   �           cache.ts
�   �           getDistVersion.spec.ts
�   �           getDistVersion.ts
�   �           hasNewVersion.spec.ts
�   �           hasNewVersion.ts
�   �           index.spec.ts
�   �           index.ts
�   �           isNpmOrYarn.ts
�   �           types.ts
�   �           
�   +---sparse-bitfield
�   �       .npmignore
�   �       .travis.yml
�   �       index.js
�   �       LICENSE
�   �       package.json
�   �       README.md
�   �       test.js
�   �       
�   +---statuses
�   �       codes.json
�   �       HISTORY.md
�   �       index.js
�   �       LICENSE
�   �       package.json
�   �       README.md
�   �       
�   +---supports-color
�   �       browser.js
�   �       index.js
�   �       license
�   �       package.json
�   �       readme.md
�   �       
�   +---to-regex-range
�   �       index.js
�   �       LICENSE
�   �       package.json
�   �       README.md
�   �       
�   +---toidentifier
�   �       HISTORY.md
�   �       index.js
�   �       LICENSE
�   �       package.json
�   �       README.md
�   �       
�   +---touch
�   �   �   index.js
�   �   �   LICENSE
�   �   �   package.json
�   �   �   README.md
�   �   �   
�   �   +---bin
�   �           nodetouch.js
�   �           
�   +---tr46
�   �   �   index.js
�   �   �   LICENSE.md
�   �   �   package.json
�   �   �   README.md
�   �   �   
�   �   +---lib
�   �           mappingTable.json
�   �           regexes.js
�   �           statusMapping.js
�   �           
�   +---ts-node
�   �   �   child-loader.mjs
�   �   �   esm.mjs
�   �   �   LICENSE
�   �   �   package.json
�   �   �   README.md
�   �   �   tsconfig.schema.json
�   �   �   tsconfig.schemastore-schema.json
�   �   �   
�   �   �   �   bin-cwd.d.ts
�   �   �   �   bin-cwd.js
�   �   �   �   bin-cwd.js.map
�   �   �   �   bin-esm.d.ts
�   �   �   �   bin-esm.js
�   �   �   �   bin-esm.js.map
�   �   �   �   bin-script-deprecated.d.ts
�   �   �   �   bin-script-deprecated.js
�   �   �   �   bin-script-deprecated.js.map
�   �   �   �   bin-script.d.ts
�   �   �   �   bin-script.js
�   �   �   �   bin-script.js.map
�   �   �   �   bin-transpile.d.ts
�   �   �   �   bin-transpile.js
�   �   �   �   bin-transpile.js.map
�   �   �   �   bin.d.ts
�   �   �   �   bin.js
�   �   �   �   bin.js.map
�   �   �   �   cjs-resolve-hooks.d.ts
�   �   �   �   cjs-resolve-hooks.js
�   �   �   �   cjs-resolve-hooks.js.map
�   �   �   �   configuration.d.ts
�   �   �   �   configuration.js
�   �   �   �   configuration.js.map
�   �   �   �   esm.d.ts
�   �   �   �   esm.js
�   �   �   �   esm.js.map
�   �   �   �   file-extensions.d.ts
�   �   �   �   file-extensions.js
�   �   �   �   file-extensions.js.map
�   �   �   �   index.d.ts
�   �   �   �   index.js
�   �   �   �   index.js.map
�   �   �   �   module-type-classifier.d.ts
�   �   �   �   module-type-classifier.js
�   �   �   �   module-type-classifier.js.map
�   �   �   �   node-module-type-classifier.d.ts
�   �   �   �   node-module-type-classifier.js
�   �   �   �   node-module-type-classifier.js.map
�   �   �   �   repl.d.ts
�   �   �   �   repl.js
�   �   �   �   repl.js.map
�   �   �   �   resolver-functions.d.ts
�   �   �   �   resolver-functions.js
�   �   �   �   resolver-functions.js.map
�   �   �   �   ts-compiler-types.d.ts
�   �   �   �   ts-compiler-types.js
�   �   �   �   ts-compiler-types.js.map
�   �   �   �   ts-internals.d.ts
�   �   �   �   ts-internals.js
�   �   �   �   ts-internals.js.map
�   �   �   �   ts-transpile-module.d.ts
�   �   �   �   ts-transpile-module.js
�   �   �   �   ts-transpile-module.js.map
�   �   �   �   tsconfig-schema.d.ts
�   �   �   �   tsconfig-schema.js
�   �   �   �   tsconfig-schema.js.map
�   �   �   �   tsconfigs.d.ts
�   �   �   �   tsconfigs.js
�   �   �   �   tsconfigs.js.map
�   �   �   �   util.d.ts
�   �   �   �   util.js
�   �   �   �   util.js.map
�   �   �   �   
�   �   �   +---child
�   �   �   �       argv-payload.d.ts
�   �   �   �       argv-payload.js
�   �   �   �       argv-payload.js.map
�   �   �   �       child-entrypoint.d.ts
�   �   �   �       child-entrypoint.js
�   �   �   �       child-entrypoint.js.map
�   �   �   �       child-loader.d.ts
�   �   �   �       child-loader.js
�   �   �   �       child-loader.js.map
�   �   �   �       child-require.d.ts
�   �   �   �       child-require.js
�   �   �   �       child-require.js.map
�   �   �   �       spawn-child.d.ts
�   �   �   �       spawn-child.js
�   �   �   �       spawn-child.js.map
�   �   �   �       
�   �   �   +---transpilers
�   �   �           swc.d.ts
�   �   �           swc.js
�   �   �           swc.js.map
�   �   �           types.d.ts
�   �   �           types.js
�   �   �           types.js.map
�   �   �           
�   �   �       node-internal-constants.js
�   �   �       node-internal-errors.js
�   �   �       node-internal-modules-cjs-helpers.js
�   �   �       node-internal-modules-cjs-loader.js
�   �   �       node-internal-modules-esm-get_format.js
�   �   �       node-internal-modules-esm-resolve.js
�   �   �       node-internal-modules-package_json_reader.js
�   �   �       node-internal-repl-await.js
�   �   �       node-internalBinding-fs.js
�   �   �       NODE-LICENSE.md
�   �   �       node-nativemodule.js
�   �   �       node-options.js
�   �   �       node-primordials.js
�   �   �       README.md
�   �   �       runmain-hack.js
�   �   �       
�   �   +---esm
�   �   �       transpile-only.mjs
�   �   �       
�   �   +---node10
�   �   �       tsconfig.json
�   �   �       
�   �   +---node12
�   �   �       tsconfig.json
�   �   �       
�   �   +---node14
�   �   �       tsconfig.json
�   �   �       
�   �   +---node16
�   �   �       tsconfig.json
�   �   �       
�   �   +---register
�   �   �       files.js
�   �   �       index.js
�   �   �       transpile-only.js
�   �   �       type-check.js
�   �   �       
�   �   +---transpilers
�   �           swc-experimental.js
�   �           swc.js
�   �           
�   +---type-check
�   �   �   LICENSE
�   �   �   package.json
�   �   �   README.md
�   �   �   
�   �   +---lib
�   �           check.js
�   �           index.js
�   �           parse-type.js
�   �           
�   +---type-is
�   �   �   HISTORY.md
�   �   �   index.js
�   �   �   LICENSE
�   �   �   package.json
�   �   �   README.md
�   �   �   
�   �       +---content-type
�   �           �   LICENSE
�   �           �   package.json
�   �           �   README.md
�   �           �   
�   �                   index.d.ts
�   �                   index.js
�   �                   index.js.map
�   �                   
�   +---typescript
�   �   �   LICENSE
�   �   �   NOTICE.txt
�   �   �   package.json
�   �   �   README.md
�   �   �   
�   �   +---bin
�   �   �       tsc
�   �   �       
�   �   �   +---api
�   �   �   �   �   compilerOptions.d.ts
�   �   �   �   �   compilerOptions.d.ts.map
�   �   �   �   �   compilerOptions.js
�   �   �   �   �   compilerOptions.js.map
�   �   �   �   �   fs.d.ts
�   �   �   �   �   fs.d.ts.map
�   �   �   �   �   fs.js
�   �   �   �   �   fs.js.map
�   �   �   �   �   options.d.ts
�   �   �   �   �   options.d.ts.map
�   �   �   �   �   options.js
�   �   �   �   �   options.js.map
�   �   �   �   �   path.d.ts
�   �   �   �   �   path.d.ts.map
�   �   �   �   �   path.js
�   �   �   �   �   path.js.map
�   �   �   �   �   proto.d.ts
�   �   �   �   �   proto.d.ts.map
�   �   �   �   �   proto.js
�   �   �   �   �   proto.js.map
�   �   �   �   �   sourceFileCache.d.ts
�   �   �   �   �   sourceFileCache.d.ts.map
�   �   �   �   �   sourceFileCache.js
�   �   �   �   �   sourceFileCache.js.map
�   �   �   �   �   syncChannel.d.ts
�   �   �   �   �   syncChannel.d.ts.map
�   �   �   �   �   syncChannel.js
�   �   �   �   �   syncChannel.js.map
�   �   �   �   �   timing.d.ts
�   �   �   �   �   timing.d.ts.map
�   �   �   �   �   timing.js
�   �   �   �   �   timing.js.map
�   �   �   �   �   
�   �   �   �   +---async
�   �   �   �   �       api.d.ts
�   �   �   �   �       api.d.ts.map
�   �   �   �   �       api.js
�   �   �   �   �       api.js.map
�   �   �   �   �       client.d.ts
�   �   �   �   �       client.d.ts.map
�   �   �   �   �       client.js
�   �   �   �   �       client.js.map
�   �   �   �   �       types.d.ts
�   �   �   �   �       types.d.ts.map
�   �   �   �   �       types.js
�   �   �   �   �       types.js.map
�   �   �   �   �       
�   �   �   �   +---node
�   �   �   �   �       encoder.d.ts
�   �   �   �   �       encoder.d.ts.map
�   �   �   �   �       encoder.generated.d.ts
�   �   �   �   �       encoder.generated.d.ts.map
�   �   �   �   �       encoder.generated.js
�   �   �   �   �       encoder.generated.js.map
�   �   �   �   �       encoder.js
�   �   �   �   �       encoder.js.map
�   �   �   �   �       msgpack.d.ts
�   �   �   �   �       msgpack.d.ts.map
�   �   �   �   �       msgpack.js
�   �   �   �   �       msgpack.js.map
�   �   �   �   �       node.d.ts
�   �   �   �   �       node.d.ts.map
�   �   �   �   �       node.generated.d.ts
�   �   �   �   �       node.generated.d.ts.map
�   �   �   �   �       node.generated.js
�   �   �   �   �       node.generated.js.map
�   �   �   �   �       node.infrastructure.d.ts
�   �   �   �   �       node.infrastructure.d.ts.map
�   �   �   �   �       node.infrastructure.js
�   �   �   �   �       node.infrastructure.js.map
�   �   �   �   �       node.js
�   �   �   �   �       node.js.map
�   �   �   �   �       protocol.d.ts
�   �   �   �   �       protocol.d.ts.map
�   �   �   �   �       protocol.generated.d.ts
�   �   �   �   �       protocol.generated.d.ts.map
�   �   �   �   �       protocol.generated.js
�   �   �   �   �       protocol.generated.js.map
�   �   �   �   �       protocol.js
�   �   �   �   �       protocol.js.map
�   �   �   �   �       wtf8.d.ts
�   �   �   �   �       wtf8.d.ts.map
�   �   �   �   �       wtf8.js
�   �   �   �   �       wtf8.js.map
�   �   �   �   �       
�   �   �   �   +---sync
�   �   �   �           api.d.ts
�   �   �   �           api.d.ts.map
�   �   �   �           api.js
�   �   �   �           api.js.map
�   �   �   �           client.d.ts
�   �   �   �           client.d.ts.map
�   �   �   �           client.js
�   �   �   �           client.js.map
�   �   �   �           types.d.ts
�   �   �   �           types.d.ts.map
�   �   �   �           types.js
�   �   �   �           types.js.map
�   �   �   �           
�   �   �   +---ast
�   �   �   �       ast.d.ts
�   �   �   �       ast.d.ts.map
�   �   �   �       ast.generated.d.ts
�   �   �   �       ast.generated.d.ts.map
�   �   �   �       ast.generated.js
�   �   �   �       ast.generated.js.map
�   �   �   �       ast.js
�   �   �   �       ast.js.map
�   �   �   �       astnav.d.ts
�   �   �   �       astnav.d.ts.map
�   �   �   �       astnav.js
�   �   �   �       astnav.js.map
�   �   �   �       clone.d.ts
�   �   �   �       clone.d.ts.map
�   �   �   �       clone.js
�   �   �   �       clone.js.map
�   �   �   �       factory.generated.d.ts
�   �   �   �       factory.generated.d.ts.map
�   �   �   �       factory.generated.js
�   �   �   �       factory.generated.js.map
�   �   �   �       index.d.ts
�   �   �   �       index.d.ts.map
�   �   �   �       index.js
�   �   �   �       index.js.map
�   �   �   �       is.d.ts
�   �   �   �       is.d.ts.map
�   �   �   �       is.generated.d.ts
�   �   �   �       is.generated.d.ts.map
�   �   �   �       is.generated.js
�   �   �   �       is.generated.js.map
�   �   �   �       is.js
�   �   �   �       is.js.map
�   �   �   �       jsdoc.d.ts
�   �   �   �       jsdoc.d.ts.map
�   �   �   �       jsdoc.js
�   �   �   �       jsdoc.js.map
�   �   �   �       scanner.d.ts
�   �   �   �       scanner.d.ts.map
�   �   �   �       scanner.js
�   �   �   �       scanner.js.map
�   �   �   �       utils.d.ts
�   �   �   �       utils.d.ts.map
�   �   �   �       utils.js
�   �   �   �       utils.js.map
�   �   �   �       visitor.d.ts
�   �   �   �       visitor.d.ts.map
�   �   �   �       visitor.generated.d.ts
�   �   �   �       visitor.generated.d.ts.map
�   �   �   �       visitor.generated.js
�   �   �   �       visitor.generated.js.map
�   �   �   �       visitor.js
�   �   �   �       visitor.js.map
�   �   �   �       
�   �   �   +---enums
�   �   �   �       characterCodes.d.ts
�   �   �   �       characterCodes.d.ts.map
�   �   �   �       characterCodes.enum.d.ts
�   �   �   �       characterCodes.enum.d.ts.map
�   �   �   �       characterCodes.enum.js
�   �   �   �       characterCodes.enum.js.map
�   �   �   �       characterCodes.js
�   �   �   �       characterCodes.js.map
�   �   �   �       commentDirectiveType.d.ts
�   �   �   �       commentDirectiveType.d.ts.map
�   �   �   �       commentDirectiveType.enum.d.ts
�   �   �   �       commentDirectiveType.enum.d.ts.map
�   �   �   �       commentDirectiveType.enum.js
�   �   �   �       commentDirectiveType.enum.js.map
�   �   �   �       commentDirectiveType.js
�   �   �   �       commentDirectiveType.js.map
�   �   �   �       completionItemKind.d.ts
�   �   �   �       completionItemKind.d.ts.map
�   �   �   �       completionItemKind.enum.d.ts
�   �   �   �       completionItemKind.enum.d.ts.map
�   �   �   �       completionItemKind.enum.js
�   �   �   �       completionItemKind.enum.js.map
�   �   �   �       completionItemKind.js
�   �   �   �       completionItemKind.js.map
�   �   �   �       diagnosticCategory.d.ts
�   �   �   �       diagnosticCategory.d.ts.map
�   �   �   �       diagnosticCategory.enum.d.ts
�   �   �   �       diagnosticCategory.enum.d.ts.map
�   �   �   �       diagnosticCategory.enum.js
�   �   �   �       diagnosticCategory.enum.js.map
�   �   �   �       diagnosticCategory.js
�   �   �   �       diagnosticCategory.js.map
�   �   �   �       elementFlags.d.ts
�   �   �   �       elementFlags.d.ts.map
�   �   �   �       elementFlags.enum.d.ts
�   �   �   �       elementFlags.enum.d.ts.map
�   �   �   �       elementFlags.enum.js
�   �   �   �       elementFlags.enum.js.map
�   �   �   �       elementFlags.js
�   �   �   �       elementFlags.js.map
�   �   �   �       internalSymbolName.d.ts
�   �   �   �       internalSymbolName.d.ts.map
�   �   �   �       internalSymbolName.enum.d.ts
�   �   �   �       internalSymbolName.enum.d.ts.map
�   �   �   �       internalSymbolName.enum.js
�   �   �   �       internalSymbolName.enum.js.map
�   �   �   �       internalSymbolName.js
�   �   �   �       internalSymbolName.js.map
�   �   �   �       jsxEmit.d.ts
�   �   �   �       jsxEmit.d.ts.map
�   �   �   �       jsxEmit.enum.d.ts
�   �   �   �       jsxEmit.enum.d.ts.map
�   �   �   �       jsxEmit.enum.js
�   �   �   �       jsxEmit.enum.js.map
�   �   �   �       jsxEmit.js
�   �   �   �       jsxEmit.js.map
�   �   �   �       languageVariant.d.ts
�   �   �   �       languageVariant.d.ts.map
�   �   �   �       languageVariant.enum.d.ts
�   �   �   �       languageVariant.enum.d.ts.map
�   �   �   �       languageVariant.enum.js
�   �   �   �       languageVariant.enum.js.map
�   �   �   �       languageVariant.js
�   �   �   �       languageVariant.js.map
�   �   �   �       modifierFlags.d.ts
�   �   �   �       modifierFlags.d.ts.map
�   �   �   �       modifierFlags.enum.d.ts
�   �   �   �       modifierFlags.enum.d.ts.map
�   �   �   �       modifierFlags.enum.js
�   �   �   �       modifierFlags.enum.js.map
�   �   �   �       modifierFlags.js
�   �   �   �       modifierFlags.js.map
�   �   �   �       moduleDetectionKind.d.ts
�   �   �   �       moduleDetectionKind.d.ts.map
�   �   �   �       moduleDetectionKind.enum.d.ts
�   �   �   �       moduleDetectionKind.enum.d.ts.map
�   �   �   �       moduleDetectionKind.enum.js
�   �   �   �       moduleDetectionKind.enum.js.map
�   �   �   �       moduleDetectionKind.js
�   �   �   �       moduleDetectionKind.js.map
�   �   �   �       moduleKind.d.ts
�   �   �   �       moduleKind.d.ts.map
�   �   �   �       moduleKind.enum.d.ts
�   �   �   �       moduleKind.enum.d.ts.map
�   �   �   �       moduleKind.enum.js
�   �   �   �       moduleKind.enum.js.map
�   �   �   �       moduleKind.js
�   �   �   �       moduleKind.js.map
�   �   �   �       moduleResolutionKind.d.ts
�   �   �   �       moduleResolutionKind.d.ts.map
�   �   �   �       moduleResolutionKind.enum.d.ts
�   �   �   �       moduleResolutionKind.enum.d.ts.map
�   �   �   �       moduleResolutionKind.enum.js
�   �   �   �       moduleResolutionKind.enum.js.map
�   �   �   �       moduleResolutionKind.js
�   �   �   �       moduleResolutionKind.js.map
�   �   �   �       newLineKind.d.ts
�   �   �   �       newLineKind.d.ts.map
�   �   �   �       newLineKind.enum.d.ts
�   �   �   �       newLineKind.enum.d.ts.map
�   �   �   �       newLineKind.enum.js
�   �   �   �       newLineKind.enum.js.map
�   �   �   �       newLineKind.js
�   �   �   �       newLineKind.js.map
�   �   �   �       nodeBuilderFlags.d.ts
�   �   �   �       nodeBuilderFlags.d.ts.map
�   �   �   �       nodeBuilderFlags.enum.d.ts
�   �   �   �       nodeBuilderFlags.enum.d.ts.map
�   �   �   �       nodeBuilderFlags.enum.js
�   �   �   �       nodeBuilderFlags.enum.js.map
�   �   �   �       nodeBuilderFlags.js
�   �   �   �       nodeBuilderFlags.js.map
�   �   �   �       nodeFlags.d.ts
�   �   �   �       nodeFlags.d.ts.map
�   �   �   �       nodeFlags.enum.d.ts
�   �   �   �       nodeFlags.enum.d.ts.map
�   �   �   �       nodeFlags.enum.js
�   �   �   �       nodeFlags.enum.js.map
�   �   �   �       nodeFlags.js
�   �   �   �       nodeFlags.js.map
�   �   �   �       objectFlags.d.ts
�   �   �   �       objectFlags.d.ts.map
�   �   �   �       objectFlags.enum.d.ts
�   �   �   �       objectFlags.enum.d.ts.map
�   �   �   �       objectFlags.enum.js
�   �   �   �       objectFlags.enum.js.map
�   �   �   �       objectFlags.js
�   �   �   �       objectFlags.js.map
�   �   �   �       outerExpressionKinds.d.ts
�   �   �   �       outerExpressionKinds.d.ts.map
�   �   �   �       outerExpressionKinds.enum.d.ts
�   �   �   �       outerExpressionKinds.enum.d.ts.map
�   �   �   �       outerExpressionKinds.enum.js
�   �   �   �       outerExpressionKinds.enum.js.map
�   �   �   �       outerExpressionKinds.js
�   �   �   �       outerExpressionKinds.js.map
�   �   �   �       regularExpressionFlags.d.ts
�   �   �   �       regularExpressionFlags.d.ts.map
�   �   �   �       regularExpressionFlags.enum.d.ts
�   �   �   �       regularExpressionFlags.enum.d.ts.map
�   �   �   �       regularExpressionFlags.enum.js
�   �   �   �       regularExpressionFlags.enum.js.map
�   �   �   �       regularExpressionFlags.js
�   �   �   �       regularExpressionFlags.js.map
�   �   �   �       scriptKind.d.ts
�   �   �   �       scriptKind.d.ts.map
�   �   �   �       scriptKind.enum.d.ts
�   �   �   �       scriptKind.enum.d.ts.map
�   �   �   �       scriptKind.enum.js
�   �   �   �       scriptKind.enum.js.map
�   �   �   �       scriptKind.js
�   �   �   �       scriptKind.js.map
�   �   �   �       scriptTarget.d.ts
�   �   �   �       scriptTarget.d.ts.map
�   �   �   �       scriptTarget.enum.d.ts
�   �   �   �       scriptTarget.enum.d.ts.map
�   �   �   �       scriptTarget.enum.js
�   �   �   �       scriptTarget.enum.js.map
�   �   �   �       scriptTarget.js
�   �   �   �       scriptTarget.js.map
�   �   �   �       signatureFlags.d.ts
�   �   �   �       signatureFlags.d.ts.map
�   �   �   �       signatureFlags.enum.d.ts
�   �   �   �       signatureFlags.enum.d.ts.map
�   �   �   �       signatureFlags.enum.js
�   �   �   �       signatureFlags.enum.js.map
�   �   �   �       signatureFlags.js
�   �   �   �       signatureFlags.js.map
�   �   �   �       signatureKind.d.ts
�   �   �   �       signatureKind.d.ts.map
�   �   �   �       signatureKind.enum.d.ts
�   �   �   �       signatureKind.enum.d.ts.map
�   �   �   �       signatureKind.enum.js
�   �   �   �       signatureKind.enum.js.map
�   �   �   �       signatureKind.js
�   �   �   �       signatureKind.js.map
�   �   �   �       symbolFlags.d.ts
�   �   �   �       symbolFlags.d.ts.map
�   �   �   �       symbolFlags.enum.d.ts
�   �   �   �       symbolFlags.enum.d.ts.map
�   �   �   �       symbolFlags.enum.js
�   �   �   �       symbolFlags.enum.js.map
�   �   �   �       symbolFlags.js
�   �   �   �       symbolFlags.js.map
�   �   �   �       syntaxKind.d.ts
�   �   �   �       syntaxKind.d.ts.map
�   �   �   �       syntaxKind.enum.d.ts
�   �   �   �       syntaxKind.enum.d.ts.map
�   �   �   �       syntaxKind.enum.js
�   �   �   �       syntaxKind.enum.js.map
�   �   �   �       syntaxKind.js
�   �   �   �       syntaxKind.js.map
�   �   �   �       tokenFlags.d.ts
�   �   �   �       tokenFlags.d.ts.map
�   �   �   �       tokenFlags.enum.d.ts
�   �   �   �       tokenFlags.enum.d.ts.map
�   �   �   �       tokenFlags.enum.js
�   �   �   �       tokenFlags.enum.js.map
�   �   �   �       tokenFlags.js
�   �   �   �       tokenFlags.js.map
�   �   �   �       typeFlags.d.ts
�   �   �   �       typeFlags.d.ts.map
�   �   �   �       typeFlags.enum.d.ts
�   �   �   �       typeFlags.enum.d.ts.map
�   �   �   �       typeFlags.enum.js
�   �   �   �       typeFlags.enum.js.map
�   �   �   �       typeFlags.js
�   �   �   �       typeFlags.js.map
�   �   �   �       typePredicateKind.d.ts
�   �   �   �       typePredicateKind.d.ts.map
�   �   �   �       typePredicateKind.enum.d.ts
�   �   �   �       typePredicateKind.enum.d.ts.map
�   �   �   �       typePredicateKind.enum.js
�   �   �   �       typePredicateKind.enum.js.map
�   �   �   �       typePredicateKind.js
�   �   �   �       typePredicateKind.js.map
�   �   �   �       
�   �   �   +---internal
�   �   �           utils.d.ts
�   �   �           utils.d.ts.map
�   �   �           utils.js
�   �   �           utils.js.map
�   �   �           
�   �   +---lib
�   �   �       getExePath.d.ts
�   �   �       getExePath.js
�   �   �       tsc.js
�   �   �       version.cjs
�   �   �       version.d.cts
�   �   �       
�   �   +---vendor
�   �       +---vscode-jsonrpc
�   �           �   License.txt
�   �           �   package.json
�   �           �   README.md
�   �           �   
�   �           +---lib
�   �           �   +---browser
�   �           �   �       main.d.ts
�   �           �   �       main.js
�   �           �   �       ril.d.ts
�   �           �   �       ril.js
�   �           �   �       
�   �           �   +---common
�   �           �   �       api.d.ts
�   �           �   �       api.js
�   �           �   �       cancellation.d.ts
�   �           �   �       cancellation.js
�   �           �   �       connection.d.ts
�   �           �   �       connection.js
�   �           �   �       disposable.d.ts
�   �           �   �       disposable.js
�   �           �   �       encoding.d.ts
�   �           �   �       encoding.js
�   �           �   �       events.d.ts
�   �           �   �       events.js
�   �           �   �       is.d.ts
�   �           �   �       is.js
�   �           �   �       linkedMap.d.ts
�   �           �   �       linkedMap.js
�   �           �   �       messageBuffer.d.ts
�   �           �   �       messageBuffer.js
�   �           �   �       messageReader.d.ts
�   �           �   �       messageReader.js
�   �           �   �       messages.d.ts
�   �           �   �       messages.js
�   �           �   �       messageWriter.d.ts
�   �           �   �       messageWriter.js
�   �           �   �       ral.d.ts
�   �           �   �       ral.js
�   �           �   �       semaphore.d.ts
�   �           �   �       semaphore.js
�   �           �   �       sharedArrayCancellation.d.ts
�   �           �   �       sharedArrayCancellation.js
�   �           �   �       
�   �           �   +---node
�   �           �           main.d.ts
�   �           �           main.js
�   �           �           ril.d.ts
�   �           �           ril.js
�   �           �           
�   �           +---typings
�   �                   thenable.d.ts
�   �                   
�   +---undefsafe
�   �   �   .jscsrc
�   �   �   .jshintrc
�   �   �   .travis.yml
�   �   �   example.js
�   �   �   LICENSE
�   �   �   package.json
�   �   �   README.md
�   �   �   
�   �   �   +---workflows
�   �   �           release.yml
�   �   �           
�   �   +---lib
�   �           undefsafe.js
�   �           
�   +---undici-types
�   �       agent.d.ts
�   �       api.d.ts
�   �       balanced-pool.d.ts
�   �       cache-interceptor.d.ts
�   �       cache.d.ts
�   �       client-stats.d.ts
�   �       client.d.ts
�   �       connector.d.ts
�   �       content-type.d.ts
�   �       cookies.d.ts
�   �       diagnostics-channel.d.ts
�   �       dispatcher.d.ts
�   �       dispatcher1-wrapper.d.ts
�   �       env-http-proxy-agent.d.ts
�   �       errors.d.ts
�   �       eventsource.d.ts
�   �       fetch.d.ts
�   �       formdata.d.ts
�   �       global-dispatcher.d.ts
�   �       global-origin.d.ts
�   �       h2c-client.d.ts
�   �       handlers.d.ts
�   �       header.d.ts
�   �       index.d.ts
�   �       interceptors.d.ts
�   �       LICENSE
�   �       mock-agent.d.ts
�   �       mock-call-history.d.ts
�   �       mock-client.d.ts
�   �       mock-errors.d.ts
�   �       mock-interceptor.d.ts
�   �       mock-pool.d.ts
�   �       package.json
�   �       patch.d.ts
�   �       pool-stats.d.ts
�   �       pool.d.ts
�   �       proxy-agent.d.ts
�   �       readable.d.ts
�   �       README.md
�   �       retry-agent.d.ts
�   �       retry-handler.d.ts
�   �       round-robin-pool.d.ts
�   �       snapshot-agent.d.ts
�   �       socks5-proxy-agent.d.ts
�   �       util.d.ts
�   �       utility.d.ts
�   �       webidl.d.ts
�   �       websocket.d.ts
�   �       
�   +---unpipe
�   �       HISTORY.md
�   �       index.js
�   �       LICENSE
�   �       package.json
�   �       README.md
�   �       
�   +---uri-js
�   �   �   LICENSE
�   �   �   package.json
�   �   �   README.md
�   �   �   yarn.lock
�   �   �   
�   �       +---es5
�   �       �       uri.all.d.ts
�   �       �       uri.all.js
�   �       �       uri.all.js.map
�   �       �       uri.all.min.d.ts
�   �       �       uri.all.min.js
�   �       �       uri.all.min.js.map
�   �       �       
�   �       +---esnext
�   �           �   index.d.ts
�   �           �   index.js
�   �           �   index.js.map
�   �           �   regexps-iri.d.ts
�   �           �   regexps-iri.js
�   �           �   regexps-iri.js.map
�   �           �   regexps-uri.d.ts
�   �           �   regexps-uri.js
�   �           �   regexps-uri.js.map
�   �           �   uri.d.ts
�   �           �   uri.js
�   �           �   uri.js.map
�   �           �   util.d.ts
�   �           �   util.js
�   �           �   util.js.map
�   �           �   
�   �           +---schemes
�   �                   http.d.ts
�   �                   http.js
�   �                   http.js.map
�   �                   https.d.ts
�   �                   https.js
�   �                   https.js.map
�   �                   mailto.d.ts
�   �                   mailto.js
�   �                   mailto.js.map
�   �                   urn-uuid.d.ts
�   �                   urn-uuid.js
�   �                   urn-uuid.js.map
�   �                   urn.d.ts
�   �                   urn.js
�   �                   urn.js.map
�   �                   ws.d.ts
�   �                   ws.js
�   �                   ws.js.map
�   �                   wss.d.ts
�   �                   wss.js
�   �                   wss.js.map
�   �                   
�   +---v8-compile-cache-lib
�   �       CHANGELOG.md
�   �       LICENSE
�   �       package.json
�   �       README.md
�   �       v8-compile-cache.d.ts
�   �       v8-compile-cache.js
�   �       
�   +---vary
�   �       HISTORY.md
�   �       index.js
�   �       LICENSE
�   �       package.json
�   �       README.md
�   �       
�   +---webidl-conversions
�   �   �   LICENSE.md
�   �   �   package.json
�   �   �   README.md
�   �   �   
�   �   +---lib
�   �           index.js
�   �           
�   +---whatwg-url
�   �   �   index.js
�   �   �   LICENSE.txt
�   �   �   package.json
�   �   �   README.md
�   �   �   webidl2js-wrapper.js
�   �   �   
�   �   +---lib
�   �           encoding.js
�   �           Function.js
�   �           infra.js
�   �           percent-encoding.js
�   �           URL-impl.js
�   �           url-state-machine.js
�   �           URL.js
�   �           urlencoded.js
�   �           URLSearchParams-impl.js
�   �           URLSearchParams.js
�   �           utils.js
�   �           VoidFunction.js
�   �           
�   +---which
�   �   �   CHANGELOG.md
�   �   �   LICENSE
�   �   �   package.json
�   �   �   README.md
�   �   �   which.js
�   �   �   
�   �   +---bin
�   �           node-which
�   �           
�   +---word-wrap
�   �       index.d.ts
�   �       index.js
�   �       LICENSE
�   �       package.json
�   �       README.md
�   �       
�   +---wrappy
�   �       LICENSE
�   �       package.json
�   �       README.md
�   �       wrappy.js
�   �       
�   +---yn
�   �       index.d.ts
�   �       index.js
�   �       lenient.js
�   �       license
�   �       package.json
�   �       readme.md
�   �       
�   +---yocto-queue
�   �       index.d.ts
�   �       index.js
�   �       license
�   �       package.json
�   �       readme.md
�   �       
�   +---zod
�       �   index.cjs
�       �   index.d.cts
�       �   index.d.ts
�       �   index.js
�       �   LICENSE
�       �   package.json
�       �   README.md
�       �   
�       +---locales
�       �       index.cjs
�       �       index.d.cts
�       �       index.d.ts
�       �       index.js
�       �       package.json
�       �       
�       +---mini
�       �       index.cjs
�       �       index.d.cts
�       �       index.d.ts
�       �       index.js
�       �       package.json
�       �       
�       +---src
�       �   �   index.ts
�       �   �   
�       �   +---locales
�       �   �       index.ts
�       �   �       
�       �   +---mini
�       �   �       index.ts
�       �   �       
�       �   +---v3
�       �   �   �   errors.ts
�       �   �   �   external.ts
�       �   �   �   index.ts
�       �   �   �   standard-schema.ts
�       �   �   �   types.ts
�       �   �   �   ZodError.ts
�       �   �   �   
�       �   �   +---benchmarks
�       �   �   �       datetime.ts
�       �   �   �       discriminatedUnion.ts
�       �   �   �       index.ts
�       �   �   �       ipv4.ts
�       �   �   �       object.ts
�       �   �   �       primitives.ts
�       �   �   �       realworld.ts
�       �   �   �       string.ts
�       �   �   �       union.ts
�       �   �   �       
�       �   �   +---helpers
�       �   �   �       enumUtil.ts
�       �   �   �       errorUtil.ts
�       �   �   �       parseUtil.ts
�       �   �   �       partialUtil.ts
�       �   �   �       typeAliases.ts
�       �   �   �       util.ts
�       �   �   �       
�       �   �   +---locales
�       �   �   �       en.ts
�       �   �   �       
�       �   �   +---tests
�       �   �           all-errors.test.ts
�       �   �           anyunknown.test.ts
�       �   �           array.test.ts
�       �   �           async-parsing.test.ts
�       �   �           async-refinements.test.ts
�       �   �           base.test.ts
�       �   �           bigint.test.ts
�       �   �           branded.test.ts
�       �   �           catch.test.ts
�       �   �           coerce.test.ts
�       �   �           complex.test.ts
�       �   �           custom.test.ts
�       �   �           date.test.ts
�       �   �           deepmasking.test.ts
�       �   �           default.test.ts
�       �   �           description.test.ts
�       �   �           discriminated-unions.test.ts
�       �   �           enum.test.ts
�       �   �           error.test.ts
�       �   �           firstparty.test.ts
�       �   �           firstpartyschematypes.test.ts
�       �   �           function.test.ts
�       �   �           generics.test.ts
�       �   �           instanceof.test.ts
�       �   �           intersection.test.ts
�       �   �           language-server.source.ts
�       �   �           language-server.test.ts
�       �   �           literal.test.ts
�       �   �           map.test.ts
�       �   �           masking.test.ts
�       �   �           mocker.test.ts
�       �   �           Mocker.ts
�       �   �           nan.test.ts
�       �   �           nativeEnum.test.ts
�       �   �           nullable.test.ts
�       �   �           number.test.ts
�       �   �           object-augmentation.test.ts
�       �   �           object-in-es5-env.test.ts
�       �   �           object.test.ts
�       �   �           optional.test.ts
�       �   �           parser.test.ts
�       �   �           parseUtil.test.ts
�       �   �           partials.test.ts
�       �   �           pickomit.test.ts
�       �   �           pipeline.test.ts
�       �   �           preprocess.test.ts
�       �   �           primitive.test.ts
�       �   �           promise.test.ts
�       �   �           readonly.test.ts
�       �   �           record.test.ts
�       �   �           recursive.test.ts
�       �   �           refine.test.ts
�       �   �           safeparse.test.ts
�       �   �           set.test.ts
�       �   �           standard-schema.test.ts
�       �   �           string.test.ts
�       �   �           transformer.test.ts
�       �   �           tuple.test.ts
�       �   �           unions.test.ts
�       �   �           validations.test.ts
�       �   �           void.test.ts
�       �   �           
�       �   +---v4
�       �   �   �   index.ts
�       �   �   �   
�       �   �   +---classic
�       �   �   �   �   checks.ts
�       �   �   �   �   coerce.ts
�       �   �   �   �   compat.ts
�       �   �   �   �   errors.ts
�       �   �   �   �   external.ts
�       �   �   �   �   from-json-schema.ts
�       �   �   �   �   index.ts
�       �   �   �   �   iso.ts
�       �   �   �   �   parse.ts
�       �   �   �   �   schemas.ts
�       �   �   �   �   
�       �   �   �   +---tests
�       �   �   �           anyunknown.test.ts
�       �   �   �           apply.test.ts
�       �   �   �           array.test.ts
�       �   �   �           assignability.test.ts
�       �   �   �           async-parsing.test.ts
�       �   �   �           async-refinements.test.ts
�       �   �   �           base.test.ts
�       �   �   �           bigint.test.ts
�       �   �   �           brand.test.ts
�       �   �   �           catch.test.ts
�       �   �   �           coalesce.test.ts
�       �   �   �           codec-examples.test.ts
�       �   �   �           codec.test.ts
�       �   �   �           coerce.test.ts
�       �   �   �           continuability.test.ts
�       �   �   �           custom.test.ts
�       �   �   �           date.test.ts
�       �   �   �           datetime.test.ts
�       �   �   �           default.test.ts
�       �   �   �           describe-meta-checks.test.ts
�       �   �   �           description.test.ts
�       �   �   �           detached-methods.test.ts
�       �   �   �           discriminated-unions.test.ts
�       �   �   �           enum.test.ts
�       �   �   �           error-utils.test.ts
�       �   �   �           error.test.ts
�       �   �   �           file.test.ts
�       �   �   �           firstparty.test.ts
�       �   �   �           fix-json-issue.test.ts
�       �   �   �           from-json-schema.test.ts
�       �   �   �           function.test.ts
�       �   �   �           generics.test.ts
�       �   �   �           global-config.test.ts
�       �   �   �           hash.test.ts
�       �   �   �           index.test.ts
�       �   �   �           instanceof.test.ts
�       �   �   �           intersection.test.ts
�       �   �   �           jitless-allows-eval.test.ts
�       �   �   �           json.test.ts
�       �   �   �           lazy.test.ts
�       �   �   �           literal.test.ts
�       �   �   �           locales_ka.test.ts
�       �   �   �           locales_ro.test.ts
�       �   �   �           map.test.ts
�       �   �   �           nan.test.ts
�       �   �   �           nested-refine.test.ts
�       �   �   �           nonoptional.test.ts
�       �   �   �           nullable.test.ts
�       �   �   �           number.test.ts
�       �   �   �           object.test.ts
�       �   �   �           optional.test.ts
�       �   �   �           partial.test.ts
�       �   �   �           pickomit.test.ts
�       �   �   �           pipe.test.ts
�       �   �   �           prefault.test.ts
�       �   �   �           preprocess-types.test.ts
�       �   �   �           preprocess.test.ts
�       �   �   �           primitive.test.ts
�       �   �   �           promise.test.ts
�       �   �   �           prototypes.test.ts
�       �   �   �           readonly.test.ts
�       �   �   �           record.test.ts
�       �   �   �           recursive-types.test.ts
�       �   �   �           refine.test.ts
�       �   �   �           registries.test.ts
�       �   �   �           set.test.ts
�       �   �   �           standard-schema.test.ts
�       �   �   �           string-formats.test.ts
�       �   �   �           string.test.ts
�       �   �   �           stringbool.test.ts
�       �   �   �           template-literal.test.ts
�       �   �   �           to-json-schema-methods.test.ts
�       �   �   �           to-json-schema.test.ts
�       �   �   �           transform.test.ts
�       �   �   �           tuple.test.ts
�       �   �   �           union.test.ts
�       �   �   �           url.test.ts
�       �   �   �           validations.test.ts
�       �   �   �           void.test.ts
�       �   �   �           
�       �   �   +---core
�       �   �   �   �   api.ts
�       �   �   �   �   checks.ts
�       �   �   �   �   config.ts
�       �   �   �   �   core.ts
�       �   �   �   �   doc.ts
�       �   �   �   �   errors.ts
�       �   �   �   �   index.ts
�       �   �   �   �   json-schema-generator.ts
�       �   �   �   �   json-schema-processors.ts
�       �   �   �   �   json-schema.ts
�       �   �   �   �   parse.ts
�       �   �   �   �   regexes.ts
�       �   �   �   �   registries.ts
�       �   �   �   �   schemas.ts
�       �   �   �   �   standard-schema.ts
�       �   �   �   �   to-json-schema.ts
�       �   �   �   �   util.ts
�       �   �   �   �   versions.ts
�       �   �   �   �   zsf.ts
�       �   �   �   �   
�       �   �   �   +---tests
�       �   �   �       �   extend.test.ts
�       �   �   �       �   index.test.ts
�       �   �   �       �   record-constructor.test.ts
�       �   �   �       �   recursive-tuples.test.ts
�       �   �   �       �   
�       �   �   �       +---locales
�       �   �   �               be.test.ts
�       �   �   �               el.test.ts
�       �   �   �               en.test.ts
�       �   �   �               es.test.ts
�       �   �   �               fr.test.ts
�       �   �   �               he.test.ts
�       �   �   �               hr.test.ts
�       �   �   �               nl.test.ts
�       �   �   �               ru.test.ts
�       �   �   �               tr.test.ts
�       �   �   �               uz.test.ts
�       �   �   �               
�       �   �   +---locales
�       �   �   �       ar.ts
�       �   �   �       az.ts
�       �   �   �       be.ts
�       �   �   �       bg.ts
�       �   �   �       ca.ts
�       �   �   �       cs.ts
�       �   �   �       da.ts
�       �   �   �       de.ts
�       �   �   �       el.ts
�       �   �   �       en.ts
�       �   �   �       eo.ts
�       �   �   �       es.ts
�       �   �   �       fa.ts
�       �   �   �       fi.ts
�       �   �   �       fr-CA.ts
�       �   �   �       fr.ts
�       �   �   �       he.ts
�       �   �   �       hr.ts
�       �   �   �       hu.ts
�       �   �   �       hy.ts
�       �   �   �       id.ts
�       �   �   �       index.ts
�       �   �   �       is.ts
�       �   �   �       it.ts
�       �   �   �       ja.ts
�       �   �   �       ka.ts
�       �   �   �       kh.ts
�       �   �   �       km.ts
�       �   �   �       ko.ts
�       �   �   �       lt.ts
�       �   �   �       mk.ts
�       �   �   �       ms.ts
�       �   �   �       nl.ts
�       �   �   �       no.ts
�       �   �   �       ota.ts
�       �   �   �       pl.ts
�       �   �   �       ps.ts
�       �   �   �       pt.ts
�       �   �   �       ro.ts
�       �   �   �       ru.ts
�       �   �   �       sl.ts
�       �   �   �       sv.ts
�       �   �   �       ta.ts
�       �   �   �       th.ts
�       �   �   �       tr.ts
�       �   �   �       ua.ts
�       �   �   �       uk.ts
�       �   �   �       ur.ts
�       �   �   �       uz.ts
�       �   �   �       vi.ts
�       �   �   �       yo.ts
�       �   �   �       zh-CN.ts
�       �   �   �       zh-TW.ts
�       �   �   �       
�       �   �   +---mini
�       �   �       �   checks.ts
�       �   �       �   coerce.ts
�       �   �       �   external.ts
�       �   �       �   index.ts
�       �   �       �   iso.ts
�       �   �       �   parse.ts
�       �   �       �   schemas.ts
�       �   �       �   
�       �   �       +---tests
�       �   �               apply.test.ts
�       �   �               assignability.test.ts
�       �   �               brand.test.ts
�       �   �               checks.test.ts
�       �   �               codec.test.ts
�       �   �               computed.test.ts
�       �   �               error.test.ts
�       �   �               functions.test.ts
�       �   �               index.test.ts
�       �   �               number.test.ts
�       �   �               object.test.ts
�       �   �               prototypes.test.ts
�       �   �               recursive-types.test.ts
�       �   �               standard-schema.test.ts
�       �   �               string.test.ts
�       �   �               
�       �   +---v4-mini
�       �           index.ts
�       �           
�       +---v3
�       �   �   errors.cjs
�       �   �   errors.d.cts
�       �   �   errors.d.ts
�       �   �   errors.js
�       �   �   external.cjs
�       �   �   external.d.cts
�       �   �   external.d.ts
�       �   �   external.js
�       �   �   index.cjs
�       �   �   index.d.cts
�       �   �   index.d.ts
�       �   �   index.js
�       �   �   package.json
�       �   �   standard-schema.cjs
�       �   �   standard-schema.d.cts
�       �   �   standard-schema.d.ts
�       �   �   standard-schema.js
�       �   �   types.cjs
�       �   �   types.d.cts
�       �   �   types.d.ts
�       �   �   types.js
�       �   �   ZodError.cjs
�       �   �   ZodError.d.cts
�       �   �   ZodError.d.ts
�       �   �   ZodError.js
�       �   �   
�       �   +---helpers
�       �   �       enumUtil.cjs
�       �   �       enumUtil.d.cts
�       �   �       enumUtil.d.ts
�       �   �       enumUtil.js
�       �   �       errorUtil.cjs
�       �   �       errorUtil.d.cts
�       �   �       errorUtil.d.ts
�       �   �       errorUtil.js
�       �   �       parseUtil.cjs
�       �   �       parseUtil.d.cts
�       �   �       parseUtil.d.ts
�       �   �       parseUtil.js
�       �   �       partialUtil.cjs
�       �   �       partialUtil.d.cts
�       �   �       partialUtil.d.ts
�       �   �       partialUtil.js
�       �   �       typeAliases.cjs
�       �   �       typeAliases.d.cts
�       �   �       typeAliases.d.ts
�       �   �       typeAliases.js
�       �   �       util.cjs
�       �   �       util.d.cts
�       �   �       util.d.ts
�       �   �       util.js
�       �   �       
�       �   +---locales
�       �           en.cjs
�       �           en.d.cts
�       �           en.d.ts
�       �           en.js
�       �           
�       +---v4
�       �   �   index.cjs
�       �   �   index.d.cts
�       �   �   index.d.ts
�       �   �   index.js
�       �   �   package.json
�       �   �   
�       �   +---classic
�       �   �       checks.cjs
�       �   �       checks.d.cts
�       �   �       checks.d.ts
�       �   �       checks.js
�       �   �       coerce.cjs
�       �   �       coerce.d.cts
�       �   �       coerce.d.ts
�       �   �       coerce.js
�       �   �       compat.cjs
�       �   �       compat.d.cts
�       �   �       compat.d.ts
�       �   �       compat.js
�       �   �       errors.cjs
�       �   �       errors.d.cts
�       �   �       errors.d.ts
�       �   �       errors.js
�       �   �       external.cjs
�       �   �       external.d.cts
�       �   �       external.d.ts
�       �   �       external.js
�       �   �       from-json-schema.cjs
�       �   �       from-json-schema.d.cts
�       �   �       from-json-schema.d.ts
�       �   �       from-json-schema.js
�       �   �       index.cjs
�       �   �       index.d.cts
�       �   �       index.d.ts
�       �   �       index.js
�       �   �       iso.cjs
�       �   �       iso.d.cts
�       �   �       iso.d.ts
�       �   �       iso.js
�       �   �       package.json
�       �   �       parse.cjs
�       �   �       parse.d.cts
�       �   �       parse.d.ts
�       �   �       parse.js
�       �   �       schemas.cjs
�       �   �       schemas.d.cts
�       �   �       schemas.d.ts
�       �   �       schemas.js
�       �   �       
�       �   +---core
�       �   �       api.cjs
�       �   �       api.d.cts
�       �   �       api.d.ts
�       �   �       api.js
�       �   �       checks.cjs
�       �   �       checks.d.cts
�       �   �       checks.d.ts
�       �   �       checks.js
�       �   �       core.cjs
�       �   �       core.d.cts
�       �   �       core.d.ts
�       �   �       core.js
�       �   �       doc.cjs
�       �   �       doc.d.cts
�       �   �       doc.d.ts
�       �   �       doc.js
�       �   �       errors.cjs
�       �   �       errors.d.cts
�       �   �       errors.d.ts
�       �   �       errors.js
�       �   �       index.cjs
�       �   �       index.d.cts
�       �   �       index.d.ts
�       �   �       index.js
�       �   �       json-schema-generator.cjs
�       �   �       json-schema-generator.d.cts
�       �   �       json-schema-generator.d.ts
�       �   �       json-schema-generator.js
�       �   �       json-schema-processors.cjs
�       �   �       json-schema-processors.d.cts
�       �   �       json-schema-processors.d.ts
�       �   �       json-schema-processors.js
�       �   �       json-schema.cjs
�       �   �       json-schema.d.cts
�       �   �       json-schema.d.ts
�       �   �       json-schema.js
�       �   �       package.json
�       �   �       parse.cjs
�       �   �       parse.d.cts
�       �   �       parse.d.ts
�       �   �       parse.js
�       �   �       regexes.cjs
�       �   �       regexes.d.cts
�       �   �       regexes.d.ts
�       �   �       regexes.js
�       �   �       registries.cjs
�       �   �       registries.d.cts
�       �   �       registries.d.ts
�       �   �       registries.js
�       �   �       schemas.cjs
�       �   �       schemas.d.cts
�       �   �       schemas.d.ts
�       �   �       schemas.js
�       �   �       standard-schema.cjs
�       �   �       standard-schema.d.cts
�       �   �       standard-schema.d.ts
�       �   �       standard-schema.js
�       �   �       to-json-schema.cjs
�       �   �       to-json-schema.d.cts
�       �   �       to-json-schema.d.ts
�       �   �       to-json-schema.js
�       �   �       util.cjs
�       �   �       util.d.cts
�       �   �       util.d.ts
�       �   �       util.js
�       �   �       versions.cjs
�       �   �       versions.d.cts
�       �   �       versions.d.ts
�       �   �       versions.js
�       �   �       
�       �   +---locales
�       �   �       ar.cjs
�       �   �       ar.d.cts
�       �   �       ar.d.ts
�       �   �       ar.js
�       �   �       az.cjs
�       �   �       az.d.cts
�       �   �       az.d.ts
�       �   �       az.js
�       �   �       be.cjs
�       �   �       be.d.cts
�       �   �       be.d.ts
�       �   �       be.js
�       �   �       bg.cjs
�       �   �       bg.d.cts
�       �   �       bg.d.ts
�       �   �       bg.js
�       �   �       ca.cjs
�       �   �       ca.d.cts
�       �   �       ca.d.ts
�       �   �       ca.js
�       �   �       cs.cjs
�       �   �       cs.d.cts
�       �   �       cs.d.ts
�       �   �       cs.js
�       �   �       da.cjs
�       �   �       da.d.cts
�       �   �       da.d.ts
�       �   �       da.js
�       �   �       de.cjs
�       �   �       de.d.cts
�       �   �       de.d.ts
�       �   �       de.js
�       �   �       el.cjs
�       �   �       el.d.cts
�       �   �       el.d.ts
�       �   �       el.js
�       �   �       en.cjs
�       �   �       en.d.cts
�       �   �       en.d.ts
�       �   �       en.js
�       �   �       eo.cjs
�       �   �       eo.d.cts
�       �   �       eo.d.ts
�       �   �       eo.js
�       �   �       es.cjs
�       �   �       es.d.cts
�       �   �       es.d.ts
�       �   �       es.js
�       �   �       fa.cjs
�       �   �       fa.d.cts
�       �   �       fa.d.ts
�       �   �       fa.js
�       �   �       fi.cjs
�       �   �       fi.d.cts
�       �   �       fi.d.ts
�       �   �       fi.js
�       �   �       fr-CA.cjs
�       �   �       fr-CA.d.cts
�       �   �       fr-CA.d.ts
�       �   �       fr-CA.js
�       �   �       fr.cjs
�       �   �       fr.d.cts
�       �   �       fr.d.ts
�       �   �       fr.js
�       �   �       he.cjs
�       �   �       he.d.cts
�       �   �       he.d.ts
�       �   �       he.js
�       �   �       hr.cjs
�       �   �       hr.d.cts
�       �   �       hr.d.ts
�       �   �       hr.js
�       �   �       hu.cjs
�       �   �       hu.d.cts
�       �   �       hu.d.ts
�       �   �       hu.js
�       �   �       hy.cjs
�       �   �       hy.d.cts
�       �   �       hy.d.ts
�       �   �       hy.js
�       �   �       id.cjs
�       �   �       id.d.cts
�       �   �       id.d.ts
�       �   �       id.js
�       �   �       index.cjs
�       �   �       index.d.cts
�       �   �       index.d.ts
�       �   �       index.js
�       �   �       is.cjs
�       �   �       is.d.cts
�       �   �       is.d.ts
�       �   �       is.js
�       �   �       it.cjs
�       �   �       it.d.cts
�       �   �       it.d.ts
�       �   �       it.js
�       �   �       ja.cjs
�       �   �       ja.d.cts
�       �   �       ja.d.ts
�       �   �       ja.js
�       �   �       ka.cjs
�       �   �       ka.d.cts
�       �   �       ka.d.ts
�       �   �       ka.js
�       �   �       kh.cjs
�       �   �       kh.d.cts
�       �   �       kh.d.ts
�       �   �       kh.js
�       �   �       km.cjs
�       �   �       km.d.cts
�       �   �       km.d.ts
�       �   �       km.js
�       �   �       ko.cjs
�       �   �       ko.d.cts
�       �   �       ko.d.ts
�       �   �       ko.js
�       �   �       lt.cjs
�       �   �       lt.d.cts
�       �   �       lt.d.ts
�       �   �       lt.js
�       �   �       mk.cjs
�       �   �       mk.d.cts
�       �   �       mk.d.ts
�       �   �       mk.js
�       �   �       ms.cjs
�       �   �       ms.d.cts
�       �   �       ms.d.ts
�       �   �       ms.js
�       �   �       nl.cjs
�       �   �       nl.d.cts
�       �   �       nl.d.ts
�       �   �       nl.js
�       �   �       no.cjs
�       �   �       no.d.cts
�       �   �       no.d.ts
�       �   �       no.js
�       �   �       ota.cjs
�       �   �       ota.d.cts
�       �   �       ota.d.ts
�       �   �       ota.js
�       �   �       package.json
�       �   �       pl.cjs
�       �   �       pl.d.cts
�       �   �       pl.d.ts
�       �   �       pl.js
�       �   �       ps.cjs
�       �   �       ps.d.cts
�       �   �       ps.d.ts
�       �   �       ps.js
�       �   �       pt.cjs
�       �   �       pt.d.cts
�       �   �       pt.d.ts
�       �   �       pt.js
�       �   �       ro.cjs
�       �   �       ro.d.cts
�       �   �       ro.d.ts
�       �   �       ro.js
�       �   �       ru.cjs
�       �   �       ru.d.cts
�       �   �       ru.d.ts
�       �   �       ru.js
�       �   �       sl.cjs
�       �   �       sl.d.cts
�       �   �       sl.d.ts
�       �   �       sl.js
�       �   �       sv.cjs
�       �   �       sv.d.cts
�       �   �       sv.d.ts
�       �   �       sv.js
�       �   �       ta.cjs
�       �   �       ta.d.cts
�       �   �       ta.d.ts
�       �   �       ta.js
�       �   �       th.cjs
�       �   �       th.d.cts
�       �   �       th.d.ts
�       �   �       th.js
�       �   �       tr.cjs
�       �   �       tr.d.cts
�       �   �       tr.d.ts
�       �   �       tr.js
�       �   �       ua.cjs
�       �   �       ua.d.cts
�       �   �       ua.d.ts
�       �   �       ua.js
�       �   �       uk.cjs
�       �   �       uk.d.cts
�       �   �       uk.d.ts
�       �   �       uk.js
�       �   �       ur.cjs
�       �   �       ur.d.cts
�       �   �       ur.d.ts
�       �   �       ur.js
�       �   �       uz.cjs
�       �   �       uz.d.cts
�       �   �       uz.d.ts
�       �   �       uz.js
�       �   �       vi.cjs
�       �   �       vi.d.cts
�       �   �       vi.d.ts
�       �   �       vi.js
�       �   �       yo.cjs
�       �   �       yo.d.cts
�       �   �       yo.d.ts
�       �   �       yo.js
�       �   �       zh-CN.cjs
�       �   �       zh-CN.d.cts
�       �   �       zh-CN.d.ts
�       �   �       zh-CN.js
�       �   �       zh-TW.cjs
�       �   �       zh-TW.d.cts
�       �   �       zh-TW.d.ts
�       �   �       zh-TW.js
�       �   �       
�       �   +---mini
�       �           checks.cjs
�       �           checks.d.cts
�       �           checks.d.ts
�       �           checks.js
�       �           coerce.cjs
�       �           coerce.d.cts
�       �           coerce.d.ts
�       �           coerce.js
�       �           external.cjs
�       �           external.d.cts
�       �           external.d.ts
�       �           external.js
�       �           index.cjs
�       �           index.d.cts
�       �           index.d.ts
�       �           index.js
�       �           iso.cjs
�       �           iso.d.cts
�       �           iso.d.ts
�       �           iso.js
�       �           package.json
�       �           parse.cjs
�       �           parse.d.cts
�       �           parse.d.ts
�       �           parse.js
�       �           schemas.cjs
�       �           schemas.d.cts
�       �           schemas.d.ts
�       �           schemas.js
�       �           
�       +---v4-mini
�               index.cjs
�               index.d.cts
�               index.d.ts
�               index.js
�               package.json
�               
+---src
    �   app.ts
    �   index.ts
    �   seed.ts
    �   
    +---config
    �       db.ts
    �       env.ts
    �       index.ts
    �       
    +---controllers
    �       auth.controller.ts
    �       dashboard.controller.ts
    �       employee.controller.ts
    �       index.ts
    �       organization.controller.ts
    �       
    +---middlewares
    �       auth.middleware.ts
    �       error.middleware.ts
    �       index.ts
    �       role.middleware.ts
    �       validate.middleware.ts
    �       
    +---models
    �       Employee.ts
    �       index.ts
    �       
    +---repositories
    �       dashboard.repository.ts
    �       employee.repository.ts
    �       index.ts
    �       organization.repository.ts
    �       
    +---routes
    �       auth.routes.ts
    �       dashboard.routes.ts
    �       employee.routes.ts
    �       index.ts
    �       organization.routes.ts
    �       
    +---services
    �       auth.service.ts
    �       dashboard.service.ts
    �       employee.service.ts
    �       index.ts
    �       organization.service.ts
    �       
    +---utils
    �       AppError.ts
    �       asyncWrapper.ts
    �       constants.ts
    �       hash.ts
    �       index.ts
    �       jwt.ts
    �       response.ts
    �       
    +---validators
            employee.validator.ts
            index.ts
            

`

## 2. Export Every Backend Source File

### backend/.env.example
`text
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/playstack

# Authentication
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRES_IN=1d

# CORS Configuration
CLIENT_URL=http://localhost:5173

`

### backend/package-lock.json
`json
{
  "name": "backend",
  "version": "1.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "backend",
      "version": "1.0.0",
      "license": "ISC",
      "dependencies": {
        "bcryptjs": "^3.0.3",
        "cors": "^2.8.6",
        "dotenv": "^17.4.2",
        "express": "^5.2.1",
        "jsonwebtoken": "^9.0.3",
        "mongoose": "^9.7.4",
        "zod": "^4.4.3"
      },
      "devDependencies": {
        "@types/bcryptjs": "^2.4.6",
        "@types/cors": "^2.8.19",
        "@types/express": "^5.0.6",
        "@types/jsonwebtoken": "^9.0.10",
        "@types/node": "^26.1.1",
        "eslint": "^10.7.0",
        "nodemon": "^3.1.14",
        "prettier": "^3.9.5",
        "ts-node": "^10.9.2",
        "typescript": "^7.0.2"
      }
    },
    "node_modules/@cspotcode/source-map-support": {
      "version": "0.8.1",
      "resolved": "https://registry.npmjs.org/@cspotcode/source-map-support/-/source-map-support-0.8.1.tgz",
      "integrity": "sha512-IchNf6dN4tHoMFIn/7OE8LWZ19Y6q/67Bmf6vnGREv8RSbBVb9LPJxEcnwrcwX6ixSvaiGoomAUvu4YSxXrVgw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/trace-mapping": "0.3.9"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@eslint-community/eslint-utils": {
      "version": "4.9.1",
      "resolved": "https://registry.npmjs.org/@eslint-community/eslint-utils/-/eslint-utils-4.9.1.tgz",
      "integrity": "sha512-phrYmNiYppR7znFEdqgfWHXR6NCkZEK7hwWDHZUjit/2/U0r6XvkDl0SYnoM51Hq7FhCGdLDT6zxCCOY1hexsQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "eslint-visitor-keys": "^3.4.3"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      },
      "peerDependencies": {
        "eslint": "^6.0.0 || ^7.0.0 || >=8.0.0"
      }
    },
    "node_modules/@eslint-community/eslint-utils/node_modules/eslint-visitor-keys": {
      "version": "3.4.3",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-3.4.3.tgz",
      "integrity": "sha512-wpc+LXeiyiisxPlEkUzU6svyS1frIO3Mgxj1fdy7Pm8Ygzguax2N3Fa/D/ag1WqbOprdI+uY6wMUl8/a2G+iag==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/@eslint-community/regexpp": {
      "version": "4.12.2",
      "resolved": "https://registry.npmjs.org/@eslint-community/regexpp/-/regexpp-4.12.2.tgz",
      "integrity": "sha512-EriSTlt5OC9/7SXkRSCAhfSxxoSUgBm33OH+IkwbdpgoqsSsUg7y3uh+IICI/Qg4BBWr3U2i39RpmycbxMq4ew==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^12.0.0 || ^14.0.0 || >=16.0.0"
      }
    },
    "node_modules/@eslint/config-array": {
      "version": "0.23.5",
      "resolved": "https://registry.npmjs.org/@eslint/config-array/-/config-array-0.23.5.tgz",
      "integrity": "sha512-Y3kKLvC1dvTOT+oGlqNQ1XLqK6D1HU2YXPc52NmAlJZbMMWDzGYXMiPRJ8TYD39muD/OTjlZmNJ4ib7dvSrMBA==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@eslint/object-schema": "^3.0.5",
        "debug": "^4.3.1",
        "minimatch": "^10.2.4"
      },
      "engines": {
        "node": "^20.19.0 || ^22.13.0 || >=24"
      }
    },
    "node_modules/@eslint/config-helpers": {
      "version": "0.6.0",
      "resolved": "https://registry.npmjs.org/@eslint/config-helpers/-/config-helpers-0.6.0.tgz",
      "integrity": "sha512-ii6Bw9jJ2zi2cWA2Z+9/QZ/+3DX6kwaV5Q986D/CdP3Lap3w/pgQZ373FV7byY/i7L4IRH/G43I5dz1ClsCbpA==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@eslint/core": "^1.2.1"
      },
      "engines": {
        "node": "^20.19.0 || ^22.13.0 || >=24"
      }
    },
    "node_modules/@eslint/core": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/@eslint/core/-/core-1.2.1.tgz",
      "integrity": "sha512-MwcE1P+AZ4C6DWlpin/OmOA54mmIZ/+xZuJiQd4SyB29oAJjN30UW9wkKNptW2ctp4cEsvhlLY/CsQ1uoHDloQ==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@types/json-schema": "^7.0.15"
      },
      "engines": {
        "node": "^20.19.0 || ^22.13.0 || >=24"
      }
    },
    "node_modules/@eslint/object-schema": {
      "version": "3.0.5",
      "resolved": "https://registry.npmjs.org/@eslint/object-schema/-/object-schema-3.0.5.tgz",
      "integrity": "sha512-vqTaUEgxzm+YDSdElad6PiRoX4t8VGDjCtt05zn4nU810UIx/uNEV7/lZJ6KwFThKZOzOxzXy48da+No7HZaMw==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^20.19.0 || ^22.13.0 || >=24"
      }
    },
    "node_modules/@eslint/plugin-kit": {
      "version": "0.7.2",
      "resolved": "https://registry.npmjs.org/@eslint/plugin-kit/-/plugin-kit-0.7.2.tgz",
      "integrity": "sha512-+CNAzxglkrpNf/kKywqQfk74QjtceuOE7Qm+AF8miRvPF/wmmK5+OJOgVh3AVTT3RP2mH3+FOaxlE5v72owk0A==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@eslint/core": "^1.2.1",
        "levn": "^0.4.1"
      },
      "engines": {
        "node": "^20.19.0 || ^22.13.0 || >=24"
      }
    },
    "node_modules/@humanfs/core": {
      "version": "0.19.2",
      "resolved": "https://registry.npmjs.org/@humanfs/core/-/core-0.19.2.tgz",
      "integrity": "sha512-UhXNm+CFMWcbChXywFwkmhqjs3PRCmcSa/hfBgLIb7oQ5HNb1wS0icWsGtSAUNgefHeI+eBrA8I1fxmbHsGdvA==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@humanfs/types": "^0.15.0"
      },
      "engines": {
        "node": ">=18.18.0"
      }
    },
    "node_modules/@humanfs/node": {
      "version": "0.16.8",
      "resolved": "https://registry.npmjs.org/@humanfs/node/-/node-0.16.8.tgz",
      "integrity": "sha512-gE1eQNZ3R++kTzFUpdGlpmy8kDZD/MLyHqDwqjkVQI0JMdI1D51sy1H958PNXYkM2rAac7e5/CnIKZrHtPh3BQ==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@humanfs/core": "^0.19.2",
        "@humanfs/types": "^0.15.0",
        "@humanwhocodes/retry": "^0.4.0"
      },
      "engines": {
        "node": ">=18.18.0"
      }
    },
    "node_modules/@humanfs/types": {
      "version": "0.15.0",
      "resolved": "https://registry.npmjs.org/@humanfs/types/-/types-0.15.0.tgz",
      "integrity": "sha512-ZZ1w0aoQkwuUuC7Yf+7sdeaNfqQiiLcSRbfI08oAxqLtpXQr9AIVX7Ay7HLDuiLYAaFPu8oBYNq/QIi9URHJ3Q==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=18.18.0"
      }
    },
    "node_modules/@humanwhocodes/module-importer": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/module-importer/-/module-importer-1.0.1.tgz",
      "integrity": "sha512-bxveV4V8v5Yb4ncFTT3rPSgZBOpCkjfK0y4oVVVJwIuDVBRMDXrPyXRL988i5ap9m9bnyEEjWfm5WkBmtffLfA==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=12.22"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/nzakas"
      }
    },
    "node_modules/@humanwhocodes/retry": {
      "version": "0.4.3",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/retry/-/retry-0.4.3.tgz",
      "integrity": "sha512-bV0Tgo9K4hfPCek+aMAn81RppFKv2ySDQeMoSZuvTASywNTnVJCArCZE2FWqpvIatKu7VMRLWlR1EazvVhDyhQ==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=18.18"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/nzakas"
      }
    },
    "node_modules/@jridgewell/resolve-uri": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz",
      "integrity": "sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/sourcemap-codec": {
      "version": "1.5.5",
      "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.5.tgz",
      "integrity": "sha512-cYQ9310grqxueWbl+WuIUIaiUaDcj7WOq5fVhEljNVgRfOUhY9fy2zTvfoqWsnebh8Sl70VScFbICvJnLKB0Og==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@jridgewell/trace-mapping": {
      "version": "0.3.9",
      "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.9.tgz",
      "integrity": "sha512-3Belt6tdc8bPgAtbcmdtNJlirVoTmEb5e2gC94PnkwEW9jI6CAHUeoG85tjWP5WquqfavoMtMwiG4P926ZKKuQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/resolve-uri": "^3.0.3",
        "@jridgewell/sourcemap-codec": "^1.4.10"
      }
    },
    "node_modules/@mongodb-js/saslprep": {
      "version": "1.4.12",
      "resolved": "https://registry.npmjs.org/@mongodb-js/saslprep/-/saslprep-1.4.12.tgz",
      "integrity": "sha512-QAfAMwNgnYxZ2C6D1HgeP7Gc4i/uvJRim415PCIL9ptRxWMNbWeLBYb2/9R4pGKny/s1FVu2JA2cxCUBUOggrA==",
      "license": "MIT",
      "dependencies": {
        "sparse-bitfield": "^3.0.3"
      }
    },
    "node_modules/@standard-schema/spec": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@standard-schema/spec/-/spec-1.1.0.tgz",
      "integrity": "sha512-l2aFy5jALhniG5HgqrD6jXLi/rUWrKvqN/qJx6yoJsgKhblVd+iqqU4RCXavm/jPityDo5TCvKMnpjKnOriy0w==",
      "license": "MIT"
    },
    "node_modules/@tsconfig/node10": {
      "version": "1.0.12",
      "resolved": "https://registry.npmjs.org/@tsconfig/node10/-/node10-1.0.12.tgz",
      "integrity": "sha512-UCYBaeFvM11aU2y3YPZ//O5Rhj+xKyzy7mvcIoAjASbigy8mHMryP5cK7dgjlz2hWxh1g5pLw084E0a/wlUSFQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@tsconfig/node12": {
      "version": "1.0.11",
      "resolved": "https://registry.npmjs.org/@tsconfig/node12/-/node12-1.0.11.tgz",
      "integrity": "sha512-cqefuRsh12pWyGsIoBKJA9luFu3mRxCA+ORZvA4ktLSzIuCUtWVxGIuXigEwO5/ywWFMZ2QEGKWvkZG1zDMTag==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@tsconfig/node14": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/@tsconfig/node14/-/node14-1.0.3.tgz",
      "integrity": "sha512-ysT8mhdixWK6Hw3i1V2AeRqZ5WfXg1G43mqoYlM2nc6388Fq5jcXyr5mRsqViLx/GJYdoL0bfXD8nmF+Zn/Iow==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@tsconfig/node16": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/@tsconfig/node16/-/node16-1.0.4.tgz",
      "integrity": "sha512-vxhUy4J8lyeyinH7Azl1pdd43GJhZH/tP2weN8TntQblOY+A0XbT8DJk1/oCPuOOyg/Ja757rG0CgHcWC8OfMA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/bcryptjs": {
      "version": "2.4.6",
      "resolved": "https://registry.npmjs.org/@types/bcryptjs/-/bcryptjs-2.4.6.tgz",
      "integrity": "sha512-9xlo6R2qDs5uixm0bcIqCeMCE6HiQsIyel9KQySStiyqNl2tnj2mP3DX1Nf56MD6KMenNNlBBsy3LJ7gUEQPXQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/body-parser": {
      "version": "1.19.6",
      "resolved": "https://registry.npmjs.org/@types/body-parser/-/body-parser-1.19.6.tgz",
      "integrity": "sha512-HLFeCYgz89uk22N5Qg3dvGvsv46B8GLvKKo1zKG4NybA8U2DiEO3w9lqGg29t/tfLRJpJ6iQxnVw4OnB7MoM9g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/connect": "*",
        "@types/node": "*"
      }
    },
    "node_modules/@types/connect": {
      "version": "3.4.38",
      "resolved": "https://registry.npmjs.org/@types/connect/-/connect-3.4.38.tgz",
      "integrity": "sha512-K6uROf1LD88uDQqJCktA4yzL1YYAK6NgfsI0v/mTgyPKWsX1CnJ0XPSDhViejru1GcRkLWb8RlzFYJRqGUbaug==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/node": "*"
      }
    },
    "node_modules/@types/cors": {
      "version": "2.8.19",
      "resolved": "https://registry.npmjs.org/@types/cors/-/cors-2.8.19.tgz",
      "integrity": "sha512-mFNylyeyqN93lfe/9CSxOGREz8cpzAhH+E93xJ4xWQf62V8sQ/24reV2nyzUWM6H6Xji+GGHpkbLe7pVoUEskg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/node": "*"
      }
    },
    "node_modules/@types/esrecurse": {
      "version": "4.3.1",
      "resolved": "https://registry.npmjs.org/@types/esrecurse/-/esrecurse-4.3.1.tgz",
      "integrity": "sha512-xJBAbDifo5hpffDBuHl0Y8ywswbiAp/Wi7Y/GtAgSlZyIABppyurxVueOPE8LUQOxdlgi6Zqce7uoEpqNTeiUw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/estree": {
      "version": "1.0.9",
      "resolved": "https://registry.npmjs.org/@types/estree/-/estree-1.0.9.tgz",
      "integrity": "sha512-GhdPgy1el4/ImP05X05Uw4cw2/M93BCUmnEvWZNStlCzEKME4Fkk+YpoA5OiHNQmoS7Cafb8Xa3Pya8m1Qrzeg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/express": {
      "version": "5.0.6",
      "resolved": "https://registry.npmjs.org/@types/express/-/express-5.0.6.tgz",
      "integrity": "sha512-sKYVuV7Sv9fbPIt/442koC7+IIwK5olP1KWeD88e/idgoJqDm3JV/YUiPwkoKK92ylff2MGxSz1CSjsXelx0YA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/body-parser": "*",
        "@types/express-serve-static-core": "^5.0.0",
        "@types/serve-static": "^2"
      }
    },
    "node_modules/@types/express-serve-static-core": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/@types/express-serve-static-core/-/express-serve-static-core-5.1.2.tgz",
      "integrity": "sha512-d3KvEXBSo/lOAMc2u6fkyDHBvetBHeqD7wm/AcXfLpSOQwlmG9D/aQ0SFswVjv05p7ullQS7Mjohj6/VdbZuTg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/node": "*",
        "@types/qs": "*",
        "@types/range-parser": "*",
        "@types/send": "*"
      }
    },
    "node_modules/@types/http-errors": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/@types/http-errors/-/http-errors-2.0.5.tgz",
      "integrity": "sha512-r8Tayk8HJnX0FztbZN7oVqGccWgw98T/0neJphO91KkmOzug1KkofZURD4UaD5uH8AqcFLfdPErnBod0u71/qg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/json-schema": {
      "version": "7.0.15",
      "resolved": "https://registry.npmjs.org/@types/json-schema/-/json-schema-7.0.15.tgz",
      "integrity": "sha512-5+fP8P8MFNC+AyZCDxrB2pkZFPGzqQWUzpSeuuVLvm8VMcorNYavBqoFcxK8bQz4Qsbn4oUEEem4wDLfcysGHA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/jsonwebtoken": {
      "version": "9.0.10",
      "resolved": "https://registry.npmjs.org/@types/jsonwebtoken/-/jsonwebtoken-9.0.10.tgz",
      "integrity": "sha512-asx5hIG9Qmf/1oStypjanR7iKTv0gXQ1Ov/jfrX6kS/EO0OFni8orbmGCn0672NHR3kXHwpAwR+B368ZGN/2rA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/ms": "*",
        "@types/node": "*"
      }
    },
    "node_modules/@types/ms": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/@types/ms/-/ms-2.1.0.tgz",
      "integrity": "sha512-GsCCIZDE/p3i96vtEqx+7dBUGXrc7zeSK3wwPHIaRThS+9OhWIXRqzs4d6k1SVU8g91DrNRWxWUGhp5KXQb2VA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/node": {
      "version": "26.1.1",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-26.1.1.tgz",
      "integrity": "sha512-nxAkRSVkN1Y0JC1W8ky/fTfkGsMmcrRsbx+3XoZE+rMOX71kLYTV7fLXpqud1GpbpP5TuffXFqfX7fH2GgZREw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "undici-types": "~8.3.0"
      }
    },
    "node_modules/@types/qs": {
      "version": "6.15.1",
      "resolved": "https://registry.npmjs.org/@types/qs/-/qs-6.15.1.tgz",
      "integrity": "sha512-GZHUBZR9hckSUhrxmp1nG6NwdpM9fCunJwyThLW1X3AyHgd9IlHb6VANpQQqDr2o/qQp6McZ3y/IA2rVzKzSbw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/range-parser": {
      "version": "1.2.7",
      "resolved": "https://registry.npmjs.org/@types/range-parser/-/range-parser-1.2.7.tgz",
      "integrity": "sha512-hKormJbkJqzQGhziax5PItDUTMAM9uE2XXQmM37dyd4hVM+5aVl7oVxMVUiVQn2oCQFN/LKCZdvSM0pFRqbSmQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/send": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/@types/send/-/send-1.2.1.tgz",
      "integrity": "sha512-arsCikDvlU99zl1g69TcAB3mzZPpxgw0UQnaHeC1Nwb015xp8bknZv5rIfri9xTOcMuaVgvabfIRA7PSZVuZIQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/node": "*"
      }
    },
    "node_modules/@types/serve-static": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/@types/serve-static/-/serve-static-2.2.0.tgz",
      "integrity": "sha512-8mam4H1NHLtu7nmtalF7eyBH14QyOASmcxHhSfEoRyr0nP/YdoesEtU+uSRvMe96TW/HPTtkoKqQLl53N7UXMQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/http-errors": "*",
        "@types/node": "*"
      }
    },
    "node_modules/@types/webidl-conversions": {
      "version": "7.0.3",
      "resolved": "https://registry.npmjs.org/@types/webidl-conversions/-/webidl-conversions-7.0.3.tgz",
      "integrity": "sha512-CiJJvcRtIgzadHCYXw7dqEnMNRjhGZlYK05Mj9OyktqV8uVT8fD2BFOB7S1uwBE3Kj2Z+4UyPmFw/Ixgw/LAlA==",
      "license": "MIT"
    },
    "node_modules/@types/whatwg-url": {
      "version": "13.0.0",
      "resolved": "https://registry.npmjs.org/@types/whatwg-url/-/whatwg-url-13.0.0.tgz",
      "integrity": "sha512-N8WXpbE6Wgri7KUSvrmQcqrMllKZ9uxkYWMt+mCSGwNc0Hsw9VQTW7ApqI4XNrx6/SaM2QQJCzMPDEXE058s+Q==",
      "license": "MIT",
      "dependencies": {
        "@types/webidl-conversions": "*"
      }
    },
    "node_modules/@typescript/typescript-aix-ppc64": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/@typescript/typescript-aix-ppc64/-/typescript-aix-ppc64-7.0.2.tgz",
      "integrity": "sha512-MTKKkWB7p/0E9xi1d1tHtZ5PiLkGEMIq88pK2CubZjOsLtYTLqhgIgi6zepFa+9GHZ6h05NMCkQxGKiPXMxXtQ==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "aix"
      ],
      "engines": {
        "node": ">=16.20.0"
      }
    },
    "node_modules/@typescript/typescript-darwin-arm64": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/@typescript/typescript-darwin-arm64/-/typescript-darwin-arm64-7.0.2.tgz",
      "integrity": "sha512-gowzar9MwS/aRWp6f3a4KUqzRjAZjOsmGNCM6LcTgXum+dBfgsBVMN+AgvOCCbguXyick6LJhpBszxMebJ8syA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=16.20.0"
      }
    },
    "node_modules/@typescript/typescript-darwin-x64": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/@typescript/typescript-darwin-x64/-/typescript-darwin-x64-7.0.2.tgz",
      "integrity": "sha512-SZ9xZInqApNlNGc9s0W1VSsktYSOe9cFqNOIqmN1Gs8SmkjKZYFt017G4VwPxASInODuAdbTW7sXiFUf893RgA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=16.20.0"
      }
    },
    "node_modules/@typescript/typescript-freebsd-arm64": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/@typescript/typescript-freebsd-arm64/-/typescript-freebsd-arm64-7.0.2.tgz",
      "integrity": "sha512-W5NH4y/J0plIIS5b2xvTEkU7JFxyqdMAOgf+Ilhl0vHQXKO5dZoxd+C/jEtq56c4F3wk71RB4BMRQ2XdI+bwYQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=16.20.0"
      }
    },
    "node_modules/@typescript/typescript-freebsd-x64": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/@typescript/typescript-freebsd-x64/-/typescript-freebsd-x64-7.0.2.tgz",
      "integrity": "sha512-UMGDx5sTpzNw3WiPebH7l90IWfJggEd+egHt/q6p7/Cm3zqoV7VxkGXt+3DxPIw8CcmvAB0j3sVVfbhX+M4Tpw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=16.20.0"
      }
    },
    "node_modules/@typescript/typescript-linux-arm": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/@typescript/typescript-linux-arm/-/typescript-linux-arm-7.0.2.tgz",
      "integrity": "sha512-gffT3xPz9sR7j/YJExkyPntrI0P2EP9XbOyWzth2/Gs0RstK+90RBcO0ncXoXy/beYll1SXw846Nf2zdnEz0QQ==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=16.20.0"
      }
    },
    "node_modules/@typescript/typescript-linux-arm64": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/@typescript/typescript-linux-arm64/-/typescript-linux-arm64-7.0.2.tgz",
      "integrity": "sha512-Qh4eU4/y3yDjnfjjyPYihMj5/ODIlmt+Bzu17OI+fiSRDW57QmU5SiN63exPRNJPKUzcc1INa1NXdrJ+MqHjUQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=16.20.0"
      }
    },
    "node_modules/@typescript/typescript-linux-loong64": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/@typescript/typescript-linux-loong64/-/typescript-linux-loong64-7.0.2.tgz",
      "integrity": "sha512-uEHck9i8hoAzXPiYRib1O7miOnz23SxIeVl6F4LXox+qov1K35jHcEW6VHKvZI+pyvl7fZEP4MCU5LYvIq1GuQ==",
      "cpu": [
        "loong64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=16.20.0"
      }
    },
    "node_modules/@typescript/typescript-linux-mips64el": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/@typescript/typescript-linux-mips64el/-/typescript-linux-mips64el-7.0.2.tgz",
      "integrity": "sha512-R4KvAMnE43W5Qeqb0Ly56O3mWMWIAgsMyz36DCaycd5nbg/9kzm0liw3JocfRqyJY0KPmzFjbswozXyW0DnIYA==",
      "cpu": [
        "mips64el"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=16.20.0"
      }
    },
    "node_modules/@typescript/typescript-linux-ppc64": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/@typescript/typescript-linux-ppc64/-/typescript-linux-ppc64-7.0.2.tgz",
      "integrity": "sha512-DORx5b3sd/4S7eayxm4FQv+A7CrkUIGRaHiwI8oiHTAI1fAPWhF4J0vAlkC8biAlHSVVwxMQ3tjZ2/DVbnQiiA==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=16.20.0"
      }
    },
    "node_modules/@typescript/typescript-linux-riscv64": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/@typescript/typescript-linux-riscv64/-/typescript-linux-riscv64-7.0.2.tgz",
      "integrity": "sha512-wf0jqEDOjrPRnKwYRyyJDRo11KMbvMFrU+q4zqKyChODBzvlkbhNQfKvLxQCcwTpdDaXSHZTVuh0JoCrKCUMHQ==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=16.20.0"
      }
    },
    "node_modules/@typescript/typescript-linux-s390x": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/@typescript/typescript-linux-s390x/-/typescript-linux-s390x-7.0.2.tgz",
      "integrity": "sha512-IkwJc3L7yhytWd/ewjyxNDfOmswCm9GWMJT/ue/dU4aZNbwZeYAetq42VyLmsmSjvoX7z74X6ZaYCtzAr0EuGw==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=16.20.0"
      }
    },
    "node_modules/@typescript/typescript-linux-x64": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/@typescript/typescript-linux-x64/-/typescript-linux-x64-7.0.2.tgz",
      "integrity": "sha512-EYdf2cNg7rgCWJnxCdJ+F3V39O8ihb37eHAu1LK8oAFizgTQbPOK7zHHXbPt8rX24COqODXeI3sIf0fCXG7H/A==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=16.20.0"
      }
    },
    "node_modules/@typescript/typescript-netbsd-arm64": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/@typescript/typescript-netbsd-arm64/-/typescript-netbsd-arm64-7.0.2.tgz",
      "integrity": "sha512-+polYF4MF04aPpO5FTkHran9yUQDSXqy5GiSDKpsll5jy3l3+g9QLhpf39T+ePtefhXLOGrLl0QIjkQP6VnelA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "netbsd"
      ],
      "engines": {
        "node": ">=16.20.0"
      }
    },
    "node_modules/@typescript/typescript-netbsd-x64": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/@typescript/typescript-netbsd-x64/-/typescript-netbsd-x64-7.0.2.tgz",
      "integrity": "sha512-8YIT0EHM/3dq10ZOVF/A7pc/YSMtbcecct4rWtexrnSCHOPcpC2KTLXfTCR6vDpnSiY12heNb1GiN/wu+T/FyA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "netbsd"
      ],
      "engines": {
        "node": ">=16.20.0"
      }
    },
    "node_modules/@typescript/typescript-openbsd-arm64": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/@typescript/typescript-openbsd-arm64/-/typescript-openbsd-arm64-7.0.2.tgz",
      "integrity": "sha512-APT8+ClYnuYm1u9+kgGXoMj2VzWzcymwh2gNSQVySHfkRDGOTVkoWLjCmOQSaO+PoqQ57B0flRp9SA+7GnnkzQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "openbsd"
      ],
      "engines": {
        "node": ">=16.20.0"
      }
    },
    "node_modules/@typescript/typescript-openbsd-x64": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/@typescript/typescript-openbsd-x64/-/typescript-openbsd-x64-7.0.2.tgz",
      "integrity": "sha512-yX7s+Q0Dln0Dt9tEzZsAjXXR/+ytBM7AlglaqyeMPxQszJ1JhlJdZ6jLA+IzldHtflX81em7lDao1xXu+aRRkg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "openbsd"
      ],
      "engines": {
        "node": ">=16.20.0"
      }
    },
    "node_modules/@typescript/typescript-sunos-x64": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/@typescript/typescript-sunos-x64/-/typescript-sunos-x64-7.0.2.tgz",
      "integrity": "sha512-dLJDGaLZ1D4HPQn62u1n8mBDkJREwMsAkCdkwd4Ieqw+x3TUyTsqY0YiBCtE6H6OzzgGk3iuZ3vFWRS+E8/d1g==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "sunos"
      ],
      "engines": {
        "node": ">=16.20.0"
      }
    },
    "node_modules/@typescript/typescript-win32-arm64": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/@typescript/typescript-win32-arm64/-/typescript-win32-arm64-7.0.2.tgz",
      "integrity": "sha512-Gyl1Vy6OsWesLzmq+EP0Fb7b4Nid5232AvcA2SFcdYreldpNtYFFofPjnt62y9hQy7VTaZp65ICJjuAQRaVcIQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=16.20.0"
      }
    },
    "node_modules/@typescript/typescript-win32-x64": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/@typescript/typescript-win32-x64/-/typescript-win32-x64-7.0.2.tgz",
      "integrity": "sha512-0BQ3HkAHHlKLSp1qRvf3SUhGpGsDuhB/jgFw75guyqbxJqEaS0Cw/VFO8i2nHglJUzQCRtMMR/IBAKE3ETMC4g==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=16.20.0"
      }
    },
    "node_modules/accepts": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/accepts/-/accepts-2.0.0.tgz",
      "integrity": "sha512-5cvg6CtKwfgdmVqY1WIiXKc3Q1bkRqGLi+2W/6ao+6Y7gu/RCwRuAhGEzh5B4KlszSuTLgZYuqFqo5bImjNKng==",
      "license": "MIT",
      "dependencies": {
        "mime-types": "^3.0.0",
        "negotiator": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/acorn": {
      "version": "8.17.0",
      "resolved": "https://registry.npmjs.org/acorn/-/acorn-8.17.0.tgz",
      "integrity": "sha512-xRQbDb9BnwDafYNn6Vwl839DYVjqXYb1XVGtWAZ1kcDc6iwAL4hg3B1dZlRiuENFeO2H53gFG3in621AdERVAg==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "acorn": "bin/acorn"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/acorn-jsx": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/acorn-jsx/-/acorn-jsx-5.3.2.tgz",
      "integrity": "sha512-rq9s+JNhf0IChjtDXxllJ7g41oZk5SlXtp0LHwyA5cejwn7vKmKp4pPri6YEePv2PU65sAsegbXtIinmDFDXgQ==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "acorn": "^6.0.0 || ^7.0.0 || ^8.0.0"
      }
    },
    "node_modules/acorn-walk": {
      "version": "8.3.5",
      "resolved": "https://registry.npmjs.org/acorn-walk/-/acorn-walk-8.3.5.tgz",
      "integrity": "sha512-HEHNfbars9v4pgpW6SO1KSPkfoS0xVOM/9UzkJltjlsHZmJasxg8aXkuZa7SMf8vKGIBhpUsPluQSqhJFCqebw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "acorn": "^8.11.0"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/ajv": {
      "version": "6.15.0",
      "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.15.0.tgz",
      "integrity": "sha512-fgFx7Hfoq60ytK2c7DhnF8jIvzYgOMxfugjLOSMHjLIPgenqa7S7oaagATUq99mV6IYvN2tRmC0wnTYX6iPbMw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fast-deep-equal": "^3.1.1",
        "fast-json-stable-stringify": "^2.0.0",
        "json-schema-traverse": "^0.4.1",
        "uri-js": "^4.2.2"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/epoberezkin"
      }
    },
    "node_modules/anymatch": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.3.tgz",
      "integrity": "sha512-KMReFUr0B4t+D+OBkjR3KYqvocp2XaSzO55UcB6mgQMd3KbcE+mWTyvVV7D/zsdEbNnV6acZUutkiHQXvTr1Rw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "normalize-path": "^3.0.0",
        "picomatch": "^2.0.4"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/arg": {
      "version": "4.1.3",
      "resolved": "https://registry.npmjs.org/arg/-/arg-4.1.3.tgz",
      "integrity": "sha512-58S9QDqG0Xx27YwPSt9fJxivjYl432YCwfDMfZ+71RAqUrZef7LrKQZ3LHLOwCS4FLNBplP533Zx895SeOCHvA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/balanced-match": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-4.0.4.tgz",
      "integrity": "sha512-BLrgEcRTwX2o6gGxGOCNyMvGSp35YofuYzw9h1IMTRmKqttAZZVU67bdb9Pr2vUHA8+j3i2tJfjO6C6+4myGTA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "18 || 20 || >=22"
      }
    },
    "node_modules/bcryptjs": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/bcryptjs/-/bcryptjs-3.0.3.tgz",
      "integrity": "sha512-GlF5wPWnSa/X5LKM1o0wz0suXIINz1iHRLvTS+sLyi7XPbe5ycmYI3DlZqVGZZtDgl4DmasFg7gOB3JYbphV5g==",
      "license": "BSD-3-Clause",
      "bin": {
        "bcrypt": "bin/bcrypt"
      }
    },
    "node_modules/binary-extensions": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.3.0.tgz",
      "integrity": "sha512-Ceh+7ox5qe7LJuLHoY0feh3pHuUDHAcRUeyL2VYghZwfpkNIy/+8Ocg0a3UuSoYzavmylwuLWQOf3hl0jjMMIw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/body-parser": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/body-parser/-/body-parser-2.3.0.tgz",
      "integrity": "sha512-2cGmJupaNgg+QUwVLAucDuWuoMZ6EX9iHDRswZ5lsNYEmwPaRknMPCLZz07yTzVq/83p4o/wzbDZbBrTvGGTIw==",
      "license": "MIT",
      "dependencies": {
        "bytes": "^3.1.2",
        "content-type": "^2.0.0",
        "debug": "^4.4.3",
        "http-errors": "^2.0.1",
        "iconv-lite": "^0.7.2",
        "on-finished": "^2.4.1",
        "qs": "^6.15.2",
        "raw-body": "^3.0.2",
        "type-is": "^2.1.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/body-parser/node_modules/content-type": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/content-type/-/content-type-2.0.0.tgz",
      "integrity": "sha512-j/O/d7GcZCyNl7/hwZAb606rzqkyvaDctLmckbxLzHvFBzTJHuGEdodATcP3yIRoDrLHkIATJuvzbFlp/ki2cQ==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/brace-expansion": {
      "version": "5.0.7",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-5.0.7.tgz",
      "integrity": "sha512-7oFy703dxfY3/NLxC1fh2SUCQ0H9rmAY+5EpDVfXjUTTs+HEwR2nYaqLv+GWcTsumwxPfiz6CzCNkwXwBUwqCA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^4.0.2"
      },
      "engines": {
        "node": "18 || 20 || >=22"
      }
    },
    "node_modules/braces": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.3.tgz",
      "integrity": "sha512-yQbXgO/OSZVD2IsiLlro+7Hf6Q18EJrKSEsdoMzKePKXct3gvD8oLcOQdIzGupr5Fj+EDe8gO/lxc1BzfMpxvA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fill-range": "^7.1.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/bson": {
      "version": "7.3.1",
      "resolved": "https://registry.npmjs.org/bson/-/bson-7.3.1.tgz",
      "integrity": "sha512-h/C0qe6857pQhcSJHLfsR1uYGj98Ge3wKAD3Ed9KqH3wcVh+BM4Jq4xISD7vs9OPuT07n+q3QQVjslJ286j6ag==",
      "license": "Apache-2.0",
      "engines": {
        "node": ">=20.19.0"
      }
    },
    "node_modules/buffer-equal-constant-time": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/buffer-equal-constant-time/-/buffer-equal-constant-time-1.0.1.tgz",
      "integrity": "sha512-zRpUiDwd/xk6ADqPMATG8vc9VPrkck7T07OIx0gnjmJAnHnTVXNQG3vfvWNuiZIkwu9KrKdA1iJKfsfTVxE6NA==",
      "license": "BSD-3-Clause"
    },
    "node_modules/bytes": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.2.tgz",
      "integrity": "sha512-/Nf7TyzTx6S3yRJObOAV7956r8cr2+Oj8AC5dt8wSP3BQAoeX58NoHyCU8P8zGkNXStjTSi6fzO6F0pBdcYbEg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/call-bind-apply-helpers": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/call-bind-apply-helpers/-/call-bind-apply-helpers-1.0.2.tgz",
      "integrity": "sha512-Sp1ablJ0ivDkSzjcaJdxEunN5/XvksFJ2sMBFfq6x0ryhQV/2b/KwFe21cMpmHtPOSij8K99/wSfoEuTObmuMQ==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/call-bound": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/call-bound/-/call-bound-1.0.4.tgz",
      "integrity": "sha512-+ys997U96po4Kx/ABpBCqhA9EuxJaQWDQg7295H4hBphv3IZg0boBKuwYpt4YXp6MZ5AmZQnU/tyMTlRpaSejg==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "get-intrinsic": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/chokidar": {
      "version": "3.6.0",
      "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.6.0.tgz",
      "integrity": "sha512-7VT13fmjotKpGipCW9JEQAusEPE+Ei8nl6/g4FBAmIm0GOOLMua9NDDo/DWp0ZAxCr3cPq5ZpBqmPAQgDda2Pw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "anymatch": "~3.1.2",
        "braces": "~3.0.2",
        "glob-parent": "~5.1.2",
        "is-binary-path": "~2.1.0",
        "is-glob": "~4.0.1",
        "normalize-path": "~3.0.0",
        "readdirp": "~3.6.0"
      },
      "engines": {
        "node": ">= 8.10.0"
      },
      "funding": {
        "url": "https://paulmillr.com/funding/"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.2"
      }
    },
    "node_modules/chokidar/node_modules/glob-parent": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
      "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/content-disposition": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-1.1.0.tgz",
      "integrity": "sha512-5jRCH9Z/+DRP7rkvY83B+yGIGX96OYdJmzngqnw2SBSxqCFPd0w2km3s5iawpGX8krnwSGmF0FW5Nhr0Hfai3g==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/content-type": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/content-type/-/content-type-1.0.5.tgz",
      "integrity": "sha512-nTjqfcBFEipKdXCv4YDQWCfmcLZKm81ldF0pAopTvyrFGVbcR6P/VAAd5G7N+0tTr8QqiU0tFadD6FK4NtJwOA==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/cookie": {
      "version": "0.7.2",
      "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.7.2.tgz",
      "integrity": "sha512-yki5XnKuf750l50uGTllt6kKILY4nQ1eNIQatoXEByZ5dWgnKqbnqmTrBE5B4N7lrMJKQ2ytWMiTO2o0v6Ew/w==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/cookie-signature": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.2.2.tgz",
      "integrity": "sha512-D76uU73ulSXrD1UXF4KE2TMxVVwhsnCgfAyTg9k8P6KGZjlXKrOLe4dJQKI3Bxi5wjesZoFXJWElNWBjPZMbhg==",
      "license": "MIT",
      "engines": {
        "node": ">=6.6.0"
      }
    },
    "node_modules/cors": {
      "version": "2.8.6",
      "resolved": "https://registry.npmjs.org/cors/-/cors-2.8.6.tgz",
      "integrity": "sha512-tJtZBBHA6vjIAaF6EnIaq6laBBP9aq/Y3ouVJjEfoHbRBcHBAHYcMh/w8LDrk2PvIMMq8gmopa5D4V8RmbrxGw==",
      "license": "MIT",
      "dependencies": {
        "object-assign": "^4",
        "vary": "^1"
      },
      "engines": {
        "node": ">= 0.10"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/create-require": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/create-require/-/create-require-1.1.1.tgz",
      "integrity": "sha512-dcKFX3jn0MpIaXjisoRvexIJVEKzaq7z2rZKxf+MSr9TkdmHmsU4m2lcLojrj/FHl8mk5VxMmYA+ftRkP/3oKQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/cross-spawn": {
      "version": "7.0.6",
      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.6.tgz",
      "integrity": "sha512-uV2QOWP2nWzsy2aMp8aRibhi9dlzF5Hgh5SHaB9OiTGEyDTiJJyx0uy51QXdyWbtAHNua4XJzUKca3OzKUd3vA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "path-key": "^3.1.0",
        "shebang-command": "^2.0.0",
        "which": "^2.0.1"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/debug": {
      "version": "4.4.3",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.3.tgz",
      "integrity": "sha512-RGwwWnwQvkVfavKVt22FGLw+xYSdzARwm0ru6DhTVA3umU5hZc28V3kO4stgYryrTlLpuvgI9GiijltAjNbcqA==",
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.3"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/deep-is": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/deep-is/-/deep-is-0.1.4.tgz",
      "integrity": "sha512-oIPzksmTg4/MriiaYGO+okXDT7ztn/w3Eptv/+gSIdMdKsJo0u4CfYNFJPy+4SKMuCqGw2wxnA+URMg3t8a/bQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/depd": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/depd/-/depd-2.0.0.tgz",
      "integrity": "sha512-g7nH6P6dyDioJogAAGprGpCtVImJhpPk/roCzdb3fIh61/s/nPsfR6onyMwkCAR/OlC3yBC0lESvUoQEAssIrw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/diff": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/diff/-/diff-4.0.4.tgz",
      "integrity": "sha512-X07nttJQkwkfKfvTPG/KSnE2OMdcUCao6+eXF3wmnIQRn2aPAHH3VxDbDOdegkd6JbPsXqShpvEOHfAT+nCNwQ==",
      "dev": true,
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.3.1"
      }
    },
    "node_modules/dotenv": {
      "version": "17.4.2",
      "resolved": "https://registry.npmjs.org/dotenv/-/dotenv-17.4.2.tgz",
      "integrity": "sha512-nI4U3TottKAcAD9LLud4Cb7b2QztQMUEfHbvhTH09bqXTxnSie8WnjPALV/WMCrJZ6UV/qHJ6L03OqO3LcdYZw==",
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://dotenvx.com"
      }
    },
    "node_modules/dunder-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/dunder-proto/-/dunder-proto-1.0.1.tgz",
      "integrity": "sha512-KIN/nDJBQRcXw0MLVhZE9iQHmG68qAVIBg9CqmUYjmQIhgij9U5MFvrqkUL5FbtyyzZuOeOt0zdeRe4UY7ct+A==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.1",
        "es-errors": "^1.3.0",
        "gopd": "^1.2.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/ecdsa-sig-formatter": {
      "version": "1.0.11",
      "resolved": "https://registry.npmjs.org/ecdsa-sig-formatter/-/ecdsa-sig-formatter-1.0.11.tgz",
      "integrity": "sha512-nagl3RYrbNv6kQkeJIpt6NJZy8twLB/2vtz6yN9Z4vRKHN4/QZJIEbqohALSgwKdnksuY3k5Addp5lg8sVoVcQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "safe-buffer": "^5.0.1"
      }
    },
    "node_modules/ee-first": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",
      "integrity": "sha512-WMwm9LhRUo+WUaRN+vRuETqG89IgZphVSNkdFgeb6sS/E4OrDIN7t48CAewSHXc6C8lefD8KKfr5vY61brQlow==",
      "license": "MIT"
    },
    "node_modules/encodeurl": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-2.0.0.tgz",
      "integrity": "sha512-Q0n9HRi4m6JuGIV1eFlmvJB7ZEVxu93IrMyiMsGC0lrMJMWzRgx6WGquyfQgZVb31vhGgXnfmPNNXmxnOkRBrg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/es-define-property": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/es-define-property/-/es-define-property-1.0.1.tgz",
      "integrity": "sha512-e3nRfgfUZ4rNGL232gUgX06QNyyez04KdjFrF+LTRoOXmrOgFKDg4BCdsjW8EnT69eqdYGmRpJwiPVYNrCaW3g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-errors": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/es-errors/-/es-errors-1.3.0.tgz",
      "integrity": "sha512-Zf5H2Kxt2xjTvbJvP2ZWLEICxA6j+hAmMzIlypy4xcBg1vKVnx89Wy0GbS+kf5cwCVFFzdCFh2XSCFNULS6csw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-object-atoms": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/es-object-atoms/-/es-object-atoms-1.1.2.tgz",
      "integrity": "sha512-HWcBoN6NileqtSydK2FqHbS/LoDd2pqrnQHLyJzBj4kOp/ky2MWMN694xOfkK8/SnUsW2DH7EfyVlydKCsm1Zw==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/escape-html": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",
      "integrity": "sha512-NiSupZ4OeuGwr68lGIeym/ksIZMJodUGOSCZ/FSnTxcrekbvqrgdUxlJOMpijaKZVjAJrWrGs/6Jy8OMuyj9ow==",
      "license": "MIT"
    },
    "node_modules/escape-string-regexp": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-4.0.0.tgz",
      "integrity": "sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/eslint": {
      "version": "10.7.0",
      "resolved": "https://registry.npmjs.org/eslint/-/eslint-10.7.0.tgz",
      "integrity": "sha512-GVTD7s1vdIl6UYvAfriOPeY1Df8LIZjfofLvHwde+erDHGGuHyuM6xoxRxmHiebhYuD2p1vN4wWh0XzPARSGDQ==",
      "dev": true,
      "license": "MIT",
      "workspaces": [
        "packages/*"
      ],
      "dependencies": {
        "@eslint-community/eslint-utils": "^4.8.0",
        "@eslint-community/regexpp": "^4.12.2",
        "@eslint/config-array": "^0.23.5",
        "@eslint/config-helpers": "^0.6.0",
        "@eslint/core": "^1.2.1",
        "@eslint/plugin-kit": "^0.7.2",
        "@humanfs/node": "^0.16.6",
        "@humanwhocodes/module-importer": "^1.0.1",
        "@humanwhocodes/retry": "^0.4.2",
        "@types/estree": "^1.0.6",
        "ajv": "^6.14.0",
        "cross-spawn": "^7.0.6",
        "debug": "^4.3.2",
        "escape-string-regexp": "^4.0.0",
        "eslint-scope": "^9.1.2",
        "eslint-visitor-keys": "^5.0.1",
        "espree": "^11.2.0",
        "esquery": "^1.7.0",
        "esutils": "^2.0.2",
        "fast-deep-equal": "^3.1.3",
        "file-entry-cache": "^8.0.0",
        "find-up": "^5.0.0",
        "glob-parent": "^6.0.2",
        "ignore": "^5.2.0",
        "imurmurhash": "^0.1.4",
        "is-glob": "^4.0.0",
        "json-stable-stringify-without-jsonify": "^1.0.1",
        "minimatch": "^10.2.4",
        "natural-compare": "^1.4.0",
        "optionator": "^0.9.3"
      },
      "bin": {
        "eslint": "bin/eslint.js"
      },
      "engines": {
        "node": "^20.19.0 || ^22.13.0 || >=24"
      },
      "funding": {
        "url": "https://eslint.org/donate"
      },
      "peerDependencies": {
        "jiti": "*"
      },
      "peerDependenciesMeta": {
        "jiti": {
          "optional": true
        }
      }
    },
    "node_modules/eslint-scope": {
      "version": "9.1.2",
      "resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-9.1.2.tgz",
      "integrity": "sha512-xS90H51cKw0jltxmvmHy2Iai1LIqrfbw57b79w/J7MfvDfkIkFZ+kj6zC3BjtUwh150HsSSdxXZcsuv72miDFQ==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "@types/esrecurse": "^4.3.1",
        "@types/estree": "^1.0.8",
        "esrecurse": "^4.3.0",
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": "^20.19.0 || ^22.13.0 || >=24"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/eslint-visitor-keys": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-5.0.1.tgz",
      "integrity": "sha512-tD40eHxA35h0PEIZNeIjkHoDR4YjjJp34biM0mDvplBe//mB+IHCqHDGV7pxF+7MklTvighcCPPZC7ynWyjdTA==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^20.19.0 || ^22.13.0 || >=24"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/espree": {
      "version": "11.2.0",
      "resolved": "https://registry.npmjs.org/espree/-/espree-11.2.0.tgz",
      "integrity": "sha512-7p3DrVEIopW1B1avAGLuCSh1jubc01H2JHc8B4qqGblmg5gI9yumBgACjWo4JlIc04ufug4xJ3SQI8HkS/Rgzw==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "acorn": "^8.16.0",
        "acorn-jsx": "^5.3.2",
        "eslint-visitor-keys": "^5.0.1"
      },
      "engines": {
        "node": "^20.19.0 || ^22.13.0 || >=24"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/esquery": {
      "version": "1.7.0",
      "resolved": "https://registry.npmjs.org/esquery/-/esquery-1.7.0.tgz",
      "integrity": "sha512-Ap6G0WQwcU/LHsvLwON1fAQX9Zp0A2Y6Y/cJBl9r/JbW90Zyg4/zbG6zzKa2OTALELarYHmKu0GhpM5EO+7T0g==",
      "dev": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "estraverse": "^5.1.0"
      },
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/esrecurse": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/esrecurse/-/esrecurse-4.3.0.tgz",
      "integrity": "sha512-KmfKL3b6G+RXvP8N1vr3Tq1kL/oCFgn2NYXEtqP8/L3pKapUA4G8cFVaoF3SU323CD4XypR/ffioHmkti6/Tag==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/estraverse": {
      "version": "5.3.0",
      "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.3.0.tgz",
      "integrity": "sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/esutils": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
      "integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/etag": {
      "version": "1.8.1",
      "resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",
      "integrity": "sha512-aIL5Fx7mawVa300al2BnEE4iNvo1qETxLrPI/o05L7z6go7fCw1J6EQmbK4FmJ2AS7kgVF/KEZWufBfdClMcPg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/express": {
      "version": "5.2.1",
      "resolved": "https://registry.npmjs.org/express/-/express-5.2.1.tgz",
      "integrity": "sha512-hIS4idWWai69NezIdRt2xFVofaF4j+6INOpJlVOLDO8zXGpUVEVzIYk12UUi2JzjEzWL3IOAxcTubgz9Po0yXw==",
      "license": "MIT",
      "dependencies": {
        "accepts": "^2.0.0",
        "body-parser": "^2.2.1",
        "content-disposition": "^1.0.0",
        "content-type": "^1.0.5",
        "cookie": "^0.7.1",
        "cookie-signature": "^1.2.1",
        "debug": "^4.4.0",
        "depd": "^2.0.0",
        "encodeurl": "^2.0.0",
        "escape-html": "^1.0.3",
        "etag": "^1.8.1",
        "finalhandler": "^2.1.0",
        "fresh": "^2.0.0",
        "http-errors": "^2.0.0",
        "merge-descriptors": "^2.0.0",
        "mime-types": "^3.0.0",
        "on-finished": "^2.4.1",
        "once": "^1.4.0",
        "parseurl": "^1.3.3",
        "proxy-addr": "^2.0.7",
        "qs": "^6.14.0",
        "range-parser": "^1.2.1",
        "router": "^2.2.0",
        "send": "^1.1.0",
        "serve-static": "^2.2.0",
        "statuses": "^2.0.1",
        "type-is": "^2.0.1",
        "vary": "^1.1.2"
      },
      "engines": {
        "node": ">= 18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/fast-deep-equal": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
      "integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-json-stable-stringify": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz",
      "integrity": "sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-levenshtein": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz",
      "integrity": "sha512-DCXu6Ifhqcks7TZKY3Hxp3y6qphY5SJZmrWMDrKcERSOXWQdMhU9Ig/PYrzyw/ul9jOIyh0N4M0tbC5hodg8dw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/file-entry-cache": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/file-entry-cache/-/file-entry-cache-8.0.0.tgz",
      "integrity": "sha512-XXTUwCvisa5oacNGRP9SfNtYBNAMi+RPwBFmblZEF7N7swHYQS6/Zfk7SRwx4D5j3CH211YNRco1DEMNVfZCnQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "flat-cache": "^4.0.0"
      },
      "engines": {
        "node": ">=16.0.0"
      }
    },
    "node_modules/fill-range": {
      "version": "7.1.1",
      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.1.1.tgz",
      "integrity": "sha512-YsGpe3WHLK8ZYi4tWDg2Jy3ebRz2rXowDxnld4bkQB00cc/1Zw9AWnC0i9ztDJitivtQvaI9KaLyKrc+hBW0yg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "to-regex-range": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/finalhandler": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-2.1.1.tgz",
      "integrity": "sha512-S8KoZgRZN+a5rNwqTxlZZePjT/4cnm0ROV70LedRHZ0p8u9fRID0hJUZQpkKLzro8LfmC8sx23bY6tVNxv8pQA==",
      "license": "MIT",
      "dependencies": {
        "debug": "^4.4.0",
        "encodeurl": "^2.0.0",
        "escape-html": "^1.0.3",
        "on-finished": "^2.4.1",
        "parseurl": "^1.3.3",
        "statuses": "^2.0.1"
      },
      "engines": {
        "node": ">= 18.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/find-up": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-5.0.0.tgz",
      "integrity": "sha512-78/PXT1wlLLDgTzDs7sjq9hzz0vXD+zn+7wypEe4fXQxCmdmqfGsEPQxmiCSQI3ajFV91bVSsvNtrJRiW6nGng==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "locate-path": "^6.0.0",
        "path-exists": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/flat-cache": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/flat-cache/-/flat-cache-4.0.1.tgz",
      "integrity": "sha512-f7ccFPK3SXFHpx15UIGyRJ/FJQctuKZ0zVuN3frBo4HnK3cay9VEW0R6yPYFHC0AgqhukPzKjq22t5DmAyqGyw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "flatted": "^3.2.9",
        "keyv": "^4.5.4"
      },
      "engines": {
        "node": ">=16"
      }
    },
    "node_modules/flatted": {
      "version": "3.4.2",
      "resolved": "https://registry.npmjs.org/flatted/-/flatted-3.4.2.tgz",
      "integrity": "sha512-PjDse7RzhcPkIJwy5t7KPWQSZ9cAbzQXcafsetQoD7sOJRQlGikNbx7yZp2OotDnJyrDcbyRq3Ttb18iYOqkxA==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/forwarded": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/forwarded/-/forwarded-0.2.0.tgz",
      "integrity": "sha512-buRG0fpBtRHSTCOASe6hD258tEubFoRLb4ZNA6NxMVHNw2gOcwHo9wyablzMzOA5z9xA9L1KNjk/Nt6MT9aYow==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/fresh": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/fresh/-/fresh-2.0.0.tgz",
      "integrity": "sha512-Rx/WycZ60HOaqLKAi6cHRKKI7zxWbJ31MhntmtwMoaTeF7XFH9hhBp8vITaMidfljRQ6eYWCKkaTK+ykVJHP2A==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/fsevents": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
      "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/function-bind": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.2.tgz",
      "integrity": "sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-intrinsic": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.3.0.tgz",
      "integrity": "sha512-9fSjSaos/fRIVIp+xSJlE6lfwhES7LNtKaCBIamHsjr2na1BiABJPo0mOjjz8GJDURarmCPGqaiVg5mfjb98CQ==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "es-define-property": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.1",
        "function-bind": "^1.1.2",
        "get-proto": "^1.0.1",
        "gopd": "^1.2.0",
        "has-symbols": "^1.1.0",
        "hasown": "^2.0.2",
        "math-intrinsics": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/get-proto/-/get-proto-1.0.1.tgz",
      "integrity": "sha512-sTSfBjoXBp89JvIKIefqw7U2CCebsc74kiY6awiGogKtoSGbgjYE/G/+l9sF3MWFPNc9IcoOC4ODfKHfxFmp0g==",
      "license": "MIT",
      "dependencies": {
        "dunder-proto": "^1.0.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/glob-parent": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-6.0.2.tgz",
      "integrity": "sha512-XxwI8EOhVQgWp6iDL+3b0r86f4d6AX6zSU55HfB4ydCEuXLXc5FcYeOu+nnGftS4TEju/11rt4KJPTMgbfmv4A==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.3"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/gopd": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/gopd/-/gopd-1.2.0.tgz",
      "integrity": "sha512-ZUKRh6/kUFoAiTAtTYPZJ3hw9wNxx+BIBOijnlG9PnrJsCcSjs1wyyD6vJpaYtgnzDrKYRSqf3OO6Rfa93xsRg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-flag": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
      "integrity": "sha512-sKJf1+ceQBr4SMkvQnBDNDtf4TXpVhVGateu0t918bl30FnbE2m4vNLX+VWe/dpjlb+HugGYzW7uQXH98HPEYw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/has-symbols": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.1.0.tgz",
      "integrity": "sha512-1cDNdwJ2Jaohmb3sg4OmKaMBwuC48sYni5HUw2DvsC8LjGTLK9h+eb1X6RyuOHe4hT0ULCW68iomhjUoKUqlPQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/hasown": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/hasown/-/hasown-2.0.4.tgz",
      "integrity": "sha512-T2UbfbBEF32wiepXIsMlTW9+dDYC6wMh/t/vYA4tuOMKqWz/n3vr1NFSxQiyP+zk2mXsoMA/i/7qV6LKut1t1A==",
      "license": "MIT",
      "dependencies": {
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/http-errors": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-2.0.1.tgz",
      "integrity": "sha512-4FbRdAX+bSdmo4AUFuS0WNiPz8NgFt+r8ThgNWmlrjQjt1Q7ZR9+zTlce2859x4KSXrwIsaeTqDoKQmtP8pLmQ==",
      "license": "MIT",
      "dependencies": {
        "depd": "~2.0.0",
        "inherits": "~2.0.4",
        "setprototypeof": "~1.2.0",
        "statuses": "~2.0.2",
        "toidentifier": "~1.0.1"
      },
      "engines": {
        "node": ">= 0.8"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/iconv-lite": {
      "version": "0.7.3",
      "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.7.3.tgz",
      "integrity": "sha512-IKXpvIzjnC9XTAUbVBcMfGS0EPaIXtW6v+zr+RRp+hqULEpo0owZax6wyRwPOJbWbzjYspQwusTsfVr0ifh4uQ==",
      "license": "MIT",
      "dependencies": {
        "safer-buffer": ">= 2.1.2 < 3.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/ignore": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/ignore/-/ignore-5.3.2.tgz",
      "integrity": "sha512-hsBTNUqQTDwkWtcdYI2i06Y/nUBEsNEDJKjWdigLvegy8kDuJAS8uRlpkkcQpyEXL0Z/pjDy5HBmMjRCJ2gq+g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/ignore-by-default": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/ignore-by-default/-/ignore-by-default-1.0.1.tgz",
      "integrity": "sha512-Ius2VYcGNk7T90CppJqcIkS5ooHUZyIQK+ClZfMfMNFEF9VSE73Fq+906u/CWu92x4gzZMWOwfFYckPObzdEbA==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/imurmurhash": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
      "integrity": "sha512-JmXMZ6wuvDmLiHEml9ykzqO6lwFbof0GG4IkcGaENdCRDDmMVnny7s5HsIgHCbaq0w2MyPhDqkhTUgS2LU2PHA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.8.19"
      }
    },
    "node_modules/inherits": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
      "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
      "license": "ISC"
    },
    "node_modules/ipaddr.js": {
      "version": "1.9.1",
      "resolved": "https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-1.9.1.tgz",
      "integrity": "sha512-0KI/607xoxSToH7GjN1FfSbLoU0+btTicjsQSWQlh/hZykN8KpmMf7uYwPW3R+akZ6R/w18ZlXSHBYXiYUPO3g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/is-binary-path": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-2.1.0.tgz",
      "integrity": "sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "binary-extensions": "^2.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-extglob": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
      "integrity": "sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-glob": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz",
      "integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-extglob": "^2.1.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-number": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
      "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.12.0"
      }
    },
    "node_modules/is-promise": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/is-promise/-/is-promise-4.0.0.tgz",
      "integrity": "sha512-hvpoI6korhJMnej285dSg6nu1+e6uxs7zG3BYAm5byqDsgJNWwxzM6z6iZiAgQR4TJ30JmBTOwqZUw3WlyH3AQ==",
      "license": "MIT"
    },
    "node_modules/isexe": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
      "integrity": "sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/json-buffer": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/json-buffer/-/json-buffer-3.0.1.tgz",
      "integrity": "sha512-4bV5BfR2mqfQTJm+V5tPPdf+ZpuhiIvTuAB5g8kcrXOZpTT/QwwVRWBywX1ozr6lEuPdbHxwaJlm9G6mI2sfSQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json-schema-traverse": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
      "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json-stable-stringify-without-jsonify": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/json-stable-stringify-without-jsonify/-/json-stable-stringify-without-jsonify-1.0.1.tgz",
      "integrity": "sha512-Bdboy+l7tA3OGW6FjyFHWkP5LuByj1Tk33Ljyq0axyzdk9//JSi2u3fP1QSmd1KNwq6VOKYGlAu87CisVir6Pw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/jsonwebtoken": {
      "version": "9.0.3",
      "resolved": "https://registry.npmjs.org/jsonwebtoken/-/jsonwebtoken-9.0.3.tgz",
      "integrity": "sha512-MT/xP0CrubFRNLNKvxJ2BYfy53Zkm++5bX9dtuPbqAeQpTVe0MQTFhao8+Cp//EmJp244xt6Drw/GVEGCUj40g==",
      "license": "MIT",
      "dependencies": {
        "jws": "^4.0.1",
        "lodash.includes": "^4.3.0",
        "lodash.isboolean": "^3.0.3",
        "lodash.isinteger": "^4.0.4",
        "lodash.isnumber": "^3.0.3",
        "lodash.isplainobject": "^4.0.6",
        "lodash.isstring": "^4.0.1",
        "lodash.once": "^4.0.0",
        "ms": "^2.1.1",
        "semver": "^7.5.4"
      },
      "engines": {
        "node": ">=12",
        "npm": ">=6"
      }
    },
    "node_modules/jwa": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/jwa/-/jwa-2.0.1.tgz",
      "integrity": "sha512-hRF04fqJIP8Abbkq5NKGN0Bbr3JxlQ+qhZufXVr0DvujKy93ZCbXZMHDL4EOtodSbCWxOqR8MS1tXA5hwqCXDg==",
      "license": "MIT",
      "dependencies": {
        "buffer-equal-constant-time": "^1.0.1",
        "ecdsa-sig-formatter": "1.0.11",
        "safe-buffer": "^5.0.1"
      }
    },
    "node_modules/jws": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/jws/-/jws-4.0.1.tgz",
      "integrity": "sha512-EKI/M/yqPncGUUh44xz0PxSidXFr/+r0pA70+gIYhjv+et7yxM+s29Y+VGDkovRofQem0fs7Uvf4+YmAdyRduA==",
      "license": "MIT",
      "dependencies": {
        "jwa": "^2.0.1",
        "safe-buffer": "^5.0.1"
      }
    },
    "node_modules/kareem": {
      "version": "3.3.0",
      "resolved": "https://registry.npmjs.org/kareem/-/kareem-3.3.0.tgz",
      "integrity": "sha512-kpSuLD3/7RenBnjnJdOHXCKC8dTd1JzeOiJhN0necWWci6cC+qX+VuwPnMVgb+a4+KNJSfgqahpnfWaeDXCimw==",
      "license": "Apache-2.0",
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/keyv": {
      "version": "4.5.4",
      "resolved": "https://registry.npmjs.org/keyv/-/keyv-4.5.4.tgz",
      "integrity": "sha512-oxVHkHR/EJf2CNXnWxRLW6mg7JyCCUcG0DtEGmL2ctUo1PNTin1PUil+r/+4r5MpVgC/fn1kjsx7mjSujKqIpw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "json-buffer": "3.0.1"
      }
    },
    "node_modules/levn": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/levn/-/levn-0.4.1.tgz",
      "integrity": "sha512-+bT2uH4E5LGE7h/n3evcS/sQlJXCpIp6ym8OWJ5eV6+67Dsql/LaaT7qJBAt2rzfoa/5QBGBhxDix1dMt2kQKQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "prelude-ls": "^1.2.1",
        "type-check": "~0.4.0"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/locate-path": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-6.0.0.tgz",
      "integrity": "sha512-iPZK6eYjbxRu3uB4/WZ3EsEIMJFMqAoopl3R+zuq0UjcAm/MO6KCweDgPfP3elTztoKP3KtnVHxTn2NHBSDVUw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-locate": "^5.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/lodash.includes": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/lodash.includes/-/lodash.includes-4.3.0.tgz",
      "integrity": "sha512-W3Bx6mdkRTGtlJISOvVD/lbqjTlPPUDTMnlXZFnVwi9NKJ6tiAk6LVdlhZMm17VZisqhKcgzpO5Wz91PCt5b0w==",
      "license": "MIT"
    },
    "node_modules/lodash.isboolean": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/lodash.isboolean/-/lodash.isboolean-3.0.3.tgz",
      "integrity": "sha512-Bz5mupy2SVbPHURB98VAcw+aHh4vRV5IPNhILUCsOzRmsTmSQ17jIuqopAentWoehktxGd9e/hbIXq980/1QJg==",
      "license": "MIT"
    },
    "node_modules/lodash.isinteger": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/lodash.isinteger/-/lodash.isinteger-4.0.4.tgz",
      "integrity": "sha512-DBwtEWN2caHQ9/imiNeEA5ys1JoRtRfY3d7V9wkqtbycnAmTvRRmbHKDV4a0EYc678/dia0jrte4tjYwVBaZUA==",
      "license": "MIT"
    },
    "node_modules/lodash.isnumber": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/lodash.isnumber/-/lodash.isnumber-3.0.3.tgz",
      "integrity": "sha512-QYqzpfwO3/CWf3XP+Z+tkQsfaLL/EnUlXWVkIk5FUPc4sBdTehEqZONuyRt2P67PXAk+NXmTBcc97zw9t1FQrw==",
      "license": "MIT"
    },
    "node_modules/lodash.isplainobject": {
      "version": "4.0.6",
      "resolved": "https://registry.npmjs.org/lodash.isplainobject/-/lodash.isplainobject-4.0.6.tgz",
      "integrity": "sha512-oSXzaWypCMHkPC3NvBEaPHf0KsA5mvPrOPgQWDsbg8n7orZ290M0BmC/jgRZ4vcJ6DTAhjrsSYgdsW/F+MFOBA==",
      "license": "MIT"
    },
    "node_modules/lodash.isstring": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/lodash.isstring/-/lodash.isstring-4.0.1.tgz",
      "integrity": "sha512-0wJxfxH1wgO3GrbuP+dTTk7op+6L41QCXbGINEmD+ny/G/eCqGzxyCsh7159S+mgDDcoarnBw6PC1PS5+wUGgw==",
      "license": "MIT"
    },
    "node_modules/lodash.once": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/lodash.once/-/lodash.once-4.1.1.tgz",
      "integrity": "sha512-Sb487aTOCr9drQVL8pIxOzVhafOjZN9UU54hiN8PU3uAiSV7lx1yYNpbNmex2PK6dSJoNTSJUUswT651yww3Mg==",
      "license": "MIT"
    },
    "node_modules/make-error": {
      "version": "1.3.6",
      "resolved": "https://registry.npmjs.org/make-error/-/make-error-1.3.6.tgz",
      "integrity": "sha512-s8UhlNe7vPKomQhC1qFelMokr/Sc3AgNbso3n74mVPA5LTZwkB9NlXf4XPamLxJE8h0gh73rM94xvwRT2CVInw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/math-intrinsics": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/math-intrinsics/-/math-intrinsics-1.1.0.tgz",
      "integrity": "sha512-/IXtbwEk5HTPyEwyKX6hGkYXxM9nbj64B+ilVJnC/R6B0pH5G4V3b0pVbL7DBj4tkhBAppbQUlf6F6Xl9LHu1g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/media-typer": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/media-typer/-/media-typer-1.1.0.tgz",
      "integrity": "sha512-aisnrDP4GNe06UcKFnV5bfMNPBUw4jsLGaWwWfnH3v02GnBuXX2MCVn5RbrWo0j3pczUilYblq7fQ7Nw2t5XKw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/memory-pager": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/memory-pager/-/memory-pager-1.5.0.tgz",
      "integrity": "sha512-ZS4Bp4r/Zoeq6+NLJpP+0Zzm0pR8whtGPf1XExKLJBAczGMnSi3It14OiNCStjQjM6NU1okjQGSxgEZN8eBYKg==",
      "license": "MIT"
    },
    "node_modules/merge-descriptors": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-2.0.0.tgz",
      "integrity": "sha512-Snk314V5ayFLhp3fkUREub6WtjBfPdCPY1Ln8/8munuLuiYhsABgBVWsozAG+MWMbVEvcdcpbi9R7ww22l9Q3g==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/mime-db": {
      "version": "1.54.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.54.0.tgz",
      "integrity": "sha512-aU5EJuIN2WDemCcAp2vFBfp/m4EAhWJnUNSSw0ixs7/kXbd6Pg64EmwJkNdFhB8aWt1sH2CTXrLxo/iAGV3oPQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/mime-types": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-3.0.2.tgz",
      "integrity": "sha512-Lbgzdk0h4juoQ9fCKXW4by0UJqj+nOOrI9MJ1sSj4nI8aI2eo1qmvQEie4VD1glsS250n15LsWsYtCugiStS5A==",
      "license": "MIT",
      "dependencies": {
        "mime-db": "^1.54.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/minimatch": {
      "version": "10.2.5",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-10.2.5.tgz",
      "integrity": "sha512-MULkVLfKGYDFYejP07QOurDLLQpcjk7Fw+7jXS2R2czRQzR56yHRveU5NDJEOviH+hETZKSkIk5c+T23GjFUMg==",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "dependencies": {
        "brace-expansion": "^5.0.5"
      },
      "engines": {
        "node": "18 || 20 || >=22"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/mongodb": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/mongodb/-/mongodb-7.2.0.tgz",
      "integrity": "sha512-F/2+BMZtLVhY30ioZp0dAmZ+IRZMBqI+nrv6t5+9/1AIwCa8sMRC3jBf81lpxMhnZgqq8CoUD503Z1oZWq1/sw==",
      "license": "Apache-2.0",
      "dependencies": {
        "@mongodb-js/saslprep": "^1.3.0",
        "bson": "^7.2.0",
        "mongodb-connection-string-url": "^7.0.0"
      },
      "engines": {
        "node": ">=20.19.0"
      },
      "peerDependencies": {
        "@aws-sdk/credential-providers": "^3.806.0",
        "@mongodb-js/zstd": "^7.0.0",
        "gcp-metadata": "^7.0.1",
        "kerberos": "^7.0.0",
        "mongodb-client-encryption": ">=7.0.0 <7.1.0",
        "snappy": "^7.3.2",
        "socks": "^2.8.6"
      },
      "peerDependenciesMeta": {
        "@aws-sdk/credential-providers": {
          "optional": true
        },
        "@mongodb-js/zstd": {
          "optional": true
        },
        "gcp-metadata": {
          "optional": true
        },
        "kerberos": {
          "optional": true
        },
        "mongodb-client-encryption": {
          "optional": true
        },
        "snappy": {
          "optional": true
        },
        "socks": {
          "optional": true
        }
      }
    },
    "node_modules/mongodb-connection-string-url": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/mongodb-connection-string-url/-/mongodb-connection-string-url-7.0.2.tgz",
      "integrity": "sha512-ZoS07RoFqpKYQwAk59qmrx8+jJHNHU30UjlU96QktiGn1ltvDr+vCznLX5DiUBLEpMAHatHNWV1nM/74ul66kA==",
      "license": "Apache-2.0",
      "dependencies": {
        "@types/whatwg-url": "^13.0.0",
        "whatwg-url": "^14.1.0"
      },
      "engines": {
        "node": ">=20.19.0"
      }
    },
    "node_modules/mongoose": {
      "version": "9.7.4",
      "resolved": "https://registry.npmjs.org/mongoose/-/mongoose-9.7.4.tgz",
      "integrity": "sha512-nuSYGUWWzNd4EAbGYxE469wPTL+kmxb5+91YvCvMkJ08rvNRht/usZUU3LuFuk7rDutF2QWBZHPHuzM8TxXApA==",
      "license": "MIT",
      "dependencies": {
        "@standard-schema/spec": "^1.1.0",
        "kareem": "3.3.0",
        "mongodb": "~7.2",
        "mpath": "0.9.0",
        "mquery": "6.0.0",
        "ms": "2.1.3",
        "sift": "17.1.3"
      },
      "engines": {
        "node": ">=20.19.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/mongoose"
      }
    },
    "node_modules/mpath": {
      "version": "0.9.0",
      "resolved": "https://registry.npmjs.org/mpath/-/mpath-0.9.0.tgz",
      "integrity": "sha512-ikJRQTk8hw5DEoFVxHG1Gn9T/xcjtdnOKIU1JTmGjZZlg9LST2mBLmcX3/ICIbgJydT2GOc15RnNy5mHmzfSew==",
      "license": "MIT",
      "engines": {
        "node": ">=4.0.0"
      }
    },
    "node_modules/mquery": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/mquery/-/mquery-6.0.0.tgz",
      "integrity": "sha512-b2KQNsmgtkscfeDgkYMcWGn9vZI9YoXh802VDEwE6qc50zxBFQ0Oo8ROkawbPAsXCY1/Z1yp0MagqsZStPWJjw==",
      "license": "MIT",
      "engines": {
        "node": ">=20.19.0"
      }
    },
    "node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
      "license": "MIT"
    },
    "node_modules/natural-compare": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/natural-compare/-/natural-compare-1.4.0.tgz",
      "integrity": "sha512-OWND8ei3VtNC9h7V60qff3SVobHr996CTwgxubgyQYEpg290h9J0buyECNNJexkFm5sOajh5G116RYA1c8ZMSw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/negotiator": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-1.0.0.tgz",
      "integrity": "sha512-8Ofs/AUQh8MaEcrlq5xOX0CQ9ypTF5dl78mjlMNfOK08fzpgTHQRQPBxcPlEtIw0yRpws+Zo/3r+5WRby7u3Gg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/nodemon": {
      "version": "3.1.14",
      "resolved": "https://registry.npmjs.org/nodemon/-/nodemon-3.1.14.tgz",
      "integrity": "sha512-jakjZi93UtB3jHMWsXL68FXSAosbLfY0In5gtKq3niLSkrWznrVBzXFNOEMJUfc9+Ke7SHWoAZsiMkNP3vq6Jw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "chokidar": "^3.5.2",
        "debug": "^4",
        "ignore-by-default": "^1.0.1",
        "minimatch": "^10.2.1",
        "pstree.remy": "^1.1.8",
        "semver": "^7.5.3",
        "simple-update-notifier": "^2.0.0",
        "supports-color": "^5.5.0",
        "touch": "^3.1.0",
        "undefsafe": "^2.0.5"
      },
      "bin": {
        "nodemon": "bin/nodemon.js"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/nodemon"
      }
    },
    "node_modules/normalize-path": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
      "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-assign": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
      "integrity": "sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-inspect": {
      "version": "1.13.4",
      "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.13.4.tgz",
      "integrity": "sha512-W67iLl4J2EXEGTbfeHCffrjDfitvLANg0UlX3wFUUSTx92KXRFegMHUVgSqE+wvhAbi4WqjGg9czysTV2Epbew==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/on-finished": {
      "version": "2.4.1",
      "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.4.1.tgz",
      "integrity": "sha512-oVlzkg3ENAhCk2zdv7IJwd/QUD4z2RxRwpkcGY8psCVcCYZNq4wYnVWALHM+brtuJjePWiYF/ClmuDr8Ch5+kg==",
      "license": "MIT",
      "dependencies": {
        "ee-first": "1.1.1"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/once": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
      "integrity": "sha512-lNaJgI+2Q5URQBkccEKHTQOPaXdUxnZZElQTZY0MFUAuaEqe1E+Nyvgdz/aIyNi6Z9MzO5dv1H8n58/GELp3+w==",
      "license": "ISC",
      "dependencies": {
        "wrappy": "1"
      }
    },
    "node_modules/optionator": {
      "version": "0.9.4",
      "resolved": "https://registry.npmjs.org/optionator/-/optionator-0.9.4.tgz",
      "integrity": "sha512-6IpQ7mKUxRcZNLIObR0hz7lxsapSSIYNZJwXPGeF0mTVqGKFIXj1DQcMoT22S3ROcLyY/rz0PWaWZ9ayWmad9g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "deep-is": "^0.1.3",
        "fast-levenshtein": "^2.0.6",
        "levn": "^0.4.1",
        "prelude-ls": "^1.2.1",
        "type-check": "^0.4.0",
        "word-wrap": "^1.2.5"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/p-limit": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-3.1.0.tgz",
      "integrity": "sha512-TYOanM3wGwNGsZN2cVTYPArw454xnXj5qmWF1bEoAc4+cU/ol7GVh7odevjp1FNHduHc3KZMcFduxU5Xc6uJRQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "yocto-queue": "^0.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/p-locate": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-5.0.0.tgz",
      "integrity": "sha512-LaNjtRWUBY++zB5nE/NwcaoMylSPk+S+ZHNB1TzdbMJMny6dynpAGt7X/tl/QYq3TIeE6nxHppbo2LGymrG5Pw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-limit": "^3.0.2"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/parseurl": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz",
      "integrity": "sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/path-exists": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
      "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-key": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz",
      "integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-to-regexp": {
      "version": "8.4.2",
      "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-8.4.2.tgz",
      "integrity": "sha512-qRcuIdP69NPm4qbACK+aDogI5CBDMi1jKe0ry5rSQJz8JVLsC7jV8XpiJjGRLLol3N+R5ihGYcrPLTno6pAdBA==",
      "license": "MIT",
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/picomatch": {
      "version": "2.3.2",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.2.tgz",
      "integrity": "sha512-V7+vQEJ06Z+c5tSye8S+nHUfI51xoXIXjHQ99cQtKUkQqqO1kO/KCJUfZXuB47h/YBlDhah2H3hdUGXn8ie0oA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/prelude-ls": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.2.1.tgz",
      "integrity": "sha512-vkcDPrRZo1QZLbn5RLGPpg/WmIQ65qoWWhcGKf/b5eplkkarX0m9z8ppCat4mlOqUsWpyNuYgO3VRyrYHSzX5g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/prettier": {
      "version": "3.9.5",
      "resolved": "https://registry.npmjs.org/prettier/-/prettier-3.9.5.tgz",
      "integrity": "sha512-/FVl766LpUfB5vXgCYOYa0MeV/441Ia99AeICQIQFTY/Nw0roZwULcXpku5i1/m5kt/baz+s4Zogspd839HSMg==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "prettier": "bin/prettier.cjs"
      },
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/prettier/prettier?sponsor=1"
      }
    },
    "node_modules/proxy-addr": {
      "version": "2.0.7",
      "resolved": "https://registry.npmjs.org/proxy-addr/-/proxy-addr-2.0.7.tgz",
      "integrity": "sha512-llQsMLSUDUPT44jdrU/O37qlnifitDP+ZwrmmZcoSKyLKvtZxpyV0n2/bD/N4tBAAZ/gJEdZU7KMraoK1+XYAg==",
      "license": "MIT",
      "dependencies": {
        "forwarded": "0.2.0",
        "ipaddr.js": "1.9.1"
      },
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/pstree.remy": {
      "version": "1.1.8",
      "resolved": "https://registry.npmjs.org/pstree.remy/-/pstree.remy-1.1.8.tgz",
      "integrity": "sha512-77DZwxQmxKnu3aR542U+X8FypNzbfJ+C5XQDk3uWjWxn6151aIMGthWYRXTqT1E5oJvg+ljaa2OJi+VfvCOQ8w==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/punycode": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.3.1.tgz",
      "integrity": "sha512-vYt7UD1U9Wg6138shLtLOvdAu+8DsC/ilFtEVHcH+wydcSpNE20AfSOduf6MkRFahL5FY7X1oU7nKVZFtfq8Fg==",
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/qs": {
      "version": "6.15.3",
      "resolved": "https://registry.npmjs.org/qs/-/qs-6.15.3.tgz",
      "integrity": "sha512-O9gl3zCl5h5blw1KGUzQKhA5oUXSl8rwUIM5o0S3nCXMliSvy5Dzx7/DJcI+SwgICv+IneSZwhBh1oSyEHA71A==",
      "license": "BSD-3-Clause",
      "dependencies": {
        "es-define-property": "^1.0.1",
        "side-channel": "^1.1.1"
      },
      "engines": {
        "node": ">=0.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/range-parser": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.3.0.tgz",
      "integrity": "sha512-hek2mFQpPuI4E1BBKrSto+BU3e3x4xuarsbiwr3+lf7p44juvFMV0XFWQAP3xUyqXA4RrXLIoaSUGbSt056ZMw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/raw-body": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/raw-body/-/raw-body-3.0.2.tgz",
      "integrity": "sha512-K5zQjDllxWkf7Z5xJdV0/B0WTNqx6vxG70zJE4N0kBs4LovmEYWJzQGxC9bS9RAKu3bgM40lrd5zoLJ12MQ5BA==",
      "license": "MIT",
      "dependencies": {
        "bytes": "~3.1.2",
        "http-errors": "~2.0.1",
        "iconv-lite": "~0.7.0",
        "unpipe": "~1.0.0"
      },
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/readdirp": {
      "version": "3.6.0",
      "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-3.6.0.tgz",
      "integrity": "sha512-hOS089on8RduqdbhvQ5Z37A0ESjsqz6qnRcffsMU3495FuTdqSm+7bhJ29JvIOsBDEEnan5DPu9t3To9VRlMzA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "picomatch": "^2.2.1"
      },
      "engines": {
        "node": ">=8.10.0"
      }
    },
    "node_modules/router": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/router/-/router-2.2.0.tgz",
      "integrity": "sha512-nLTrUKm2UyiL7rlhapu/Zl45FwNgkZGaCpZbIHajDYgwlJCOzLSk+cIPAnsEqV955GjILJnKbdQC1nVPz+gAYQ==",
      "license": "MIT",
      "dependencies": {
        "debug": "^4.4.0",
        "depd": "^2.0.0",
        "is-promise": "^4.0.0",
        "parseurl": "^1.3.3",
        "path-to-regexp": "^8.0.0"
      },
      "engines": {
        "node": ">= 18"
      }
    },
    "node_modules/safe-buffer": {
      "version": "5.2.1",
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
      "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/safer-buffer": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
      "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg==",
      "license": "MIT"
    },
    "node_modules/semver": {
      "version": "7.8.5",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.8.5.tgz",
      "integrity": "sha512-Y7/KDsb8LjooZpwaqGyulO6DQlksgCncchHGk+sZIY4SBvUocMBEFH5Ur1fI4dV+Jvl0w6cjvucaIi40puRioA==",
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/send": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/send/-/send-1.2.1.tgz",
      "integrity": "sha512-1gnZf7DFcoIcajTjTwjwuDjzuz4PPcY2StKPlsGAQ1+YH20IRVrBaXSWmdjowTJ6u8Rc01PoYOGHXfP1mYcZNQ==",
      "license": "MIT",
      "dependencies": {
        "debug": "^4.4.3",
        "encodeurl": "^2.0.0",
        "escape-html": "^1.0.3",
        "etag": "^1.8.1",
        "fresh": "^2.0.0",
        "http-errors": "^2.0.1",
        "mime-types": "^3.0.2",
        "ms": "^2.1.3",
        "on-finished": "^2.4.1",
        "range-parser": "^1.2.1",
        "statuses": "^2.0.2"
      },
      "engines": {
        "node": ">= 18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/serve-static": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/serve-static/-/serve-static-2.2.1.tgz",
      "integrity": "sha512-xRXBn0pPqQTVQiC8wyQrKs2MOlX24zQ0POGaj0kultvoOCstBQM5yvOhAVSUwOMjQtTvsPWoNCHfPGwaaQJhTw==",
      "license": "MIT",
      "dependencies": {
        "encodeurl": "^2.0.0",
        "escape-html": "^1.0.3",
        "parseurl": "^1.3.3",
        "send": "^1.2.0"
      },
      "engines": {
        "node": ">= 18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/setprototypeof": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.2.0.tgz",
      "integrity": "sha512-E5LDX7Wrp85Kil5bhZv46j8jOeboKq5JMmYM3gVGdGH8xFpPWXUMsNrlODCrkoxMEeNi/XZIwuRvY4XNwYMJpw==",
      "license": "ISC"
    },
    "node_modules/shebang-command": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz",
      "integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "shebang-regex": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/shebang-regex": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz",
      "integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/side-channel": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/side-channel/-/side-channel-1.1.1.tgz",
      "integrity": "sha512-6x6dK6zJdpTzF4sQeNYxwtvBzf6Eg4GtlesS94HOvTudUeyK2WXAaIfmDgsyslYrRBeFIlsi54AYsFGUuhmvrQ==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "object-inspect": "^1.13.4",
        "side-channel-list": "^1.0.1",
        "side-channel-map": "^1.0.1",
        "side-channel-weakmap": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-list": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/side-channel-list/-/side-channel-list-1.0.1.tgz",
      "integrity": "sha512-mjn/0bi/oUURjc5Xl7IaWi/OJJJumuoJFQJfDDyO46+hBWsfaVM65TBHq2eoZBhzl9EchxOijpkbRC8SVBQU0w==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "object-inspect": "^1.13.4"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-map": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/side-channel-map/-/side-channel-map-1.0.1.tgz",
      "integrity": "sha512-VCjCNfgMsby3tTdo02nbjtM/ewra6jPHmpThenkTYh8pG9ucZ/1P8So4u4FGBek/BjpOVsDCMoLA/iuBKIFXRA==",
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.5",
        "object-inspect": "^1.13.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-weakmap": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/side-channel-weakmap/-/side-channel-weakmap-1.0.2.tgz",
      "integrity": "sha512-WPS/HvHQTYnHisLo9McqBHOJk2FkHO/tlpvldyrnem4aeQp4hai3gythswg6p01oSoTl58rcpiFAjF2br2Ak2A==",
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.5",
        "object-inspect": "^1.13.3",
        "side-channel-map": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/sift": {
      "version": "17.1.3",
      "resolved": "https://registry.npmjs.org/sift/-/sift-17.1.3.tgz",
      "integrity": "sha512-Rtlj66/b0ICeFzYTuNvX/EF1igRbbnGSvEyT79McoZa/DeGhMyC5pWKOEsZKnpkqtSeovd5FL/bjHWC3CIIvCQ==",
      "license": "MIT"
    },
    "node_modules/simple-update-notifier": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/simple-update-notifier/-/simple-update-notifier-2.0.0.tgz",
      "integrity": "sha512-a2B9Y0KlNXl9u/vsW6sTIu9vGEpfKu2wRV6l1H3XEas/0gUIzGzBoP/IouTcUQbm9JWZLH3COxyn03TYlFax6w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "semver": "^7.5.3"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/sparse-bitfield": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/sparse-bitfield/-/sparse-bitfield-3.0.3.tgz",
      "integrity": "sha512-kvzhi7vqKTfkh0PZU+2D2PIllw2ymqJKujUcyPMd9Y75Nv4nPbGJZXNhxsgdQab2BmlDct1YnfQCguEvHr7VsQ==",
      "license": "MIT",
      "dependencies": {
        "memory-pager": "^1.0.2"
      }
    },
    "node_modules/statuses": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/statuses/-/statuses-2.0.2.tgz",
      "integrity": "sha512-DvEy55V3DB7uknRo+4iOGT5fP1slR8wQohVdknigZPMpMstaKJQWhwiYBACJE3Ul2pTnATihhBYnRhZQHGBiRw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/supports-color": {
      "version": "5.5.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
      "integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^3.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/to-regex-range": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
      "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-number": "^7.0.0"
      },
      "engines": {
        "node": ">=8.0"
      }
    },
    "node_modules/toidentifier": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.1.tgz",
      "integrity": "sha512-o5sSPKEkg/DIQNmH43V0/uerLrpzVedkUh8tGNvaeXpfpuwjKenlSox/2O/BTlZUtEe+JG7s5YhEz608PlAHRA==",
      "license": "MIT",
      "engines": {
        "node": ">=0.6"
      }
    },
    "node_modules/touch": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/touch/-/touch-3.1.1.tgz",
      "integrity": "sha512-r0eojU4bI8MnHr8c5bNo7lJDdI2qXlWWJk6a9EAFG7vbhTjElYhBVS3/miuE0uOuoLdb8Mc/rVfsmm6eo5o9GA==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "nodetouch": "bin/nodetouch.js"
      }
    },
    "node_modules/tr46": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/tr46/-/tr46-5.1.1.tgz",
      "integrity": "sha512-hdF5ZgjTqgAntKkklYw0R03MG2x/bSzTtkxmIRw/sTNV8YXsCJ1tfLAX23lhxhHJlEf3CRCOCGGWw3vI3GaSPw==",
      "license": "MIT",
      "dependencies": {
        "punycode": "^2.3.1"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/ts-node": {
      "version": "10.9.2",
      "resolved": "https://registry.npmjs.org/ts-node/-/ts-node-10.9.2.tgz",
      "integrity": "sha512-f0FFpIdcHgn8zcPSbf1dRevwt047YMnaiJM3u2w2RewrB+fob/zePZcrOyQoLMMO7aBIddLcQIEK5dYjkLnGrQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@cspotcode/source-map-support": "^0.8.0",
        "@tsconfig/node10": "^1.0.7",
        "@tsconfig/node12": "^1.0.7",
        "@tsconfig/node14": "^1.0.0",
        "@tsconfig/node16": "^1.0.2",
        "acorn": "^8.4.1",
        "acorn-walk": "^8.1.1",
        "arg": "^4.1.0",
        "create-require": "^1.1.0",
        "diff": "^4.0.1",
        "make-error": "^1.1.1",
        "v8-compile-cache-lib": "^3.0.1",
        "yn": "3.1.1"
      },
      "bin": {
        "ts-node": "dist/bin.js",
        "ts-node-cwd": "dist/bin-cwd.js",
        "ts-node-esm": "dist/bin-esm.js",
        "ts-node-script": "dist/bin-script.js",
        "ts-node-transpile-only": "dist/bin-transpile.js",
        "ts-script": "dist/bin-script-deprecated.js"
      },
      "peerDependencies": {
        "@swc/core": ">=1.2.50",
        "@swc/wasm": ">=1.2.50",
        "@types/node": "*",
        "typescript": ">=2.7"
      },
      "peerDependenciesMeta": {
        "@swc/core": {
          "optional": true
        },
        "@swc/wasm": {
          "optional": true
        }
      }
    },
    "node_modules/type-check": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/type-check/-/type-check-0.4.0.tgz",
      "integrity": "sha512-XleUoc9uwGXqjWwXaUTZAmzMcFZ5858QA2vvx1Ur5xIcixXIP+8LnFDgRplU30us6teqdlskFfu+ae4K79Ooew==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "prelude-ls": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/type-is": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/type-is/-/type-is-2.1.0.tgz",
      "integrity": "sha512-faYHw0anBbc/kWF3zFTEnxSFOAGUX9GFbOBthvDdLsIlEoWOFOtS0zgCiQYwIskL9iGXZL3kAXD8OoZ4GmMATA==",
      "license": "MIT",
      "dependencies": {
        "content-type": "^2.0.0",
        "media-typer": "^1.1.0",
        "mime-types": "^3.0.0"
      },
      "engines": {
        "node": ">= 18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/type-is/node_modules/content-type": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/content-type/-/content-type-2.0.0.tgz",
      "integrity": "sha512-j/O/d7GcZCyNl7/hwZAb606rzqkyvaDctLmckbxLzHvFBzTJHuGEdodATcP3yIRoDrLHkIATJuvzbFlp/ki2cQ==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/typescript": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/typescript/-/typescript-7.0.2.tgz",
      "integrity": "sha512-8FYau96o3NKOhbjKi/qNvG/W5jhzxkbdm5sj9AbZ/5T5sWqn3hJgLfGx27sRKZWTvyzCP8dLRBTf5tBTSRVUNA==",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "tsc": "bin/tsc"
      },
      "engines": {
        "node": ">=16.20.0"
      },
      "optionalDependencies": {
        "@typescript/typescript-aix-ppc64": "7.0.2",
        "@typescript/typescript-darwin-arm64": "7.0.2",
        "@typescript/typescript-darwin-x64": "7.0.2",
        "@typescript/typescript-freebsd-arm64": "7.0.2",
        "@typescript/typescript-freebsd-x64": "7.0.2",
        "@typescript/typescript-linux-arm": "7.0.2",
        "@typescript/typescript-linux-arm64": "7.0.2",
        "@typescript/typescript-linux-loong64": "7.0.2",
        "@typescript/typescript-linux-mips64el": "7.0.2",
        "@typescript/typescript-linux-ppc64": "7.0.2",
        "@typescript/typescript-linux-riscv64": "7.0.2",
        "@typescript/typescript-linux-s390x": "7.0.2",
        "@typescript/typescript-linux-x64": "7.0.2",
        "@typescript/typescript-netbsd-arm64": "7.0.2",
        "@typescript/typescript-netbsd-x64": "7.0.2",
        "@typescript/typescript-openbsd-arm64": "7.0.2",
        "@typescript/typescript-openbsd-x64": "7.0.2",
        "@typescript/typescript-sunos-x64": "7.0.2",
        "@typescript/typescript-win32-arm64": "7.0.2",
        "@typescript/typescript-win32-x64": "7.0.2"
      }
    },
    "node_modules/undefsafe": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/undefsafe/-/undefsafe-2.0.5.tgz",
      "integrity": "sha512-WxONCrssBM8TSPRqN5EmsjVrsv4A8X12J4ArBiiayv3DyyG3ZlIg6yysuuSYdZsVz3TKcTg2fd//Ujd4CHV1iA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/undici-types": {
      "version": "8.3.0",
      "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-8.3.0.tgz",
      "integrity": "sha512-j375ScV60dom+YkPFIfTLcOiPxkN/buHz5GobjLhixFuANaNs3C9l4GmrWqejgXWJ7BbJcFYpTEUkS1Ge8bpZQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/unpipe": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",
      "integrity": "sha512-pjy2bYhSsufwWlKwPc+l3cN7+wuJlK6uz0YdJEOlQDbl6jo/YlPi4mb8agUkVC8BF7V8NuzeyPNqRksA3hztKQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/uri-js": {
      "version": "4.4.1",
      "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.4.1.tgz",
      "integrity": "sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "punycode": "^2.1.0"
      }
    },
    "node_modules/v8-compile-cache-lib": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/v8-compile-cache-lib/-/v8-compile-cache-lib-3.0.1.tgz",
      "integrity": "sha512-wa7YjyUGfNZngI/vtK0UHAN+lgDCxBPCylVXGp0zu59Fz5aiGtNXaq3DhIov063MorB+VfufLh3JlF2KdTK3xg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/vary": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",
      "integrity": "sha512-BNGbWLfd0eUPabhkXUVm0j8uuvREyTh5ovRa/dyow/BqAbZJyC+5fU+IzQOzmAKzYqYRAISoRhdQr3eIZ/PXqg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/webidl-conversions": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-7.0.0.tgz",
      "integrity": "sha512-VwddBukDzu71offAQR975unBIGqfKZpM+8ZX6ySk8nYhVoo5CYaZyzt3YBvYtRtO+aoGlqxPg/B87NGVZ/fu6g==",
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/whatwg-url": {
      "version": "14.2.0",
      "resolved": "https://registry.npmjs.org/whatwg-url/-/whatwg-url-14.2.0.tgz",
      "integrity": "sha512-De72GdQZzNTUBBChsXueQUnPKDkg/5A5zp7pFDuQAj5UFoENpiACU0wlCvzpAGnTkj++ihpKwKyYewn/XNUbKw==",
      "license": "MIT",
      "dependencies": {
        "tr46": "^5.1.0",
        "webidl-conversions": "^7.0.0"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/which": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
      "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "isexe": "^2.0.0"
      },
      "bin": {
        "node-which": "bin/node-which"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/word-wrap": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/word-wrap/-/word-wrap-1.2.5.tgz",
      "integrity": "sha512-BN22B5eaMMI9UMtjrGd5g5eCYPpCPDUy0FJXbYsaT5zYxjFOckS53SQDE3pWkVoWpHXVb3BrYcEN4Twa55B5cA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/wrappy": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
      "integrity": "sha512-l4Sp/DRseor9wL6EvV2+TuQn63dMkPjZ/sp9XkghTEbV9KlPS1xUsZ3u7/IQO4wxtcFB4bgpQPRcR3QCvezPcQ==",
      "license": "ISC"
    },
    "node_modules/yn": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/yn/-/yn-3.1.1.tgz",
      "integrity": "sha512-Ux4ygGWsu2c7isFWe8Yu1YluJmqVhxqK2cLXNQA5AcC3QfbGNpM7fu0Y8b/z16pXLnFxZYvWhd3fhBY9DLmC6Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/yocto-queue": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/yocto-queue/-/yocto-queue-0.1.0.tgz",
      "integrity": "sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/zod": {
      "version": "4.4.3",
      "resolved": "https://registry.npmjs.org/zod/-/zod-4.4.3.tgz",
      "integrity": "sha512-ytENFjIJFl2UwYglde2jchW2Hwm4GJFLDiSXWdTrJQBIN9Fcyp7n4DhxJEiWNAJMV1/BqWfW/kkg71UDcHJyTQ==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/colinhacks"
      }
    }
  }
}

`

### backend/package.json
`json
{
  "name": "backend",
  "version": "1.0.0",
  "description": "",
  "main": "dist/index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "tsc",
    "start": "node dist/index.js",
    "dev": "nodemon src/index.ts"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "commonjs",
  "engines": {
    "node": ">=18.0.0"
  },
  "dependencies": {
    "bcryptjs": "^3.0.3",
    "cors": "^2.8.6",
    "dotenv": "^17.4.2",
    "express": "^5.2.1",
    "jsonwebtoken": "^9.0.3",
    "mongoose": "^9.7.4",
    "zod": "^4.4.3"
  },
  "devDependencies": {
    "@types/bcryptjs": "^2.4.6",
    "@types/cors": "^2.8.19",
    "@types/express": "^5.0.6",
    "@types/jsonwebtoken": "^9.0.10",
    "@types/node": "^26.1.1",
    "eslint": "^10.7.0",
    "nodemon": "^3.1.14",
    "prettier": "^3.9.5",
    "ts-node": "^10.9.2",
    "typescript": "^7.0.2"
  }
}

`

### backend/src/app.ts
`typescript
import express from 'express';
import cors from 'cors';
import { errorHandler } from './middlewares/error.middleware';
import apiRoutes from './routes';

export const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'success', message: 'API is running' });
});

app.get('/api/v1/health', (req, res) => {
  res.status(200).json({ status: 'success', message: 'API is running' });
});

app.use('/api', apiRoutes);

// Global Error Handler
app.use(errorHandler);

`

### backend/src/config/db.ts
`typescript
import mongoose from 'mongoose';
import { ENV } from './env';

export const connectDB = async (): Promise<void> => {
  try {
    const conn = await mongoose.connect(ENV.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error instanceof Error ? error.message : error}`);
    // Removed process.exit(1) to prevent healthcheck crashes
  }
};

`

### backend/src/config/env.ts
`typescript
import dotenv from 'dotenv';
import path from 'path';

// Load env vars
dotenv.config({ path: path.join(__dirname, '../../.env') });

export const ENV = {
  PORT: process.env.PORT || 3000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  MONGO_URI: process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/playstack_ems',
  JWT_SECRET: process.env.JWT_SECRET || 'super_secret_jwt_key_for_dev_only',
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '24h',
  BCRYPT_SALT_ROUNDS: parseInt(process.env.BCRYPT_SALT_ROUNDS || '10', 10),
};

`

### backend/src/config/index.ts
`typescript
// Placeholder for src\config\index.ts
// Responsibility: Define future logic for this architectural layer.

`

### backend/src/controllers/auth.controller.ts
`typescript
import { Request, Response } from 'express';
import { authService } from '../services/auth.service';
import { sendSuccess } from '../utils/response';

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const data = await authService.login(email, password);
  sendSuccess(res, 200, data, 'Login successful');
};

export const logout = async (req: Request, res: Response) => {
  // In a stateless JWT architecture, logout is typically handled client-side by destroying the token.
  // We can provide a generic success response.
  sendSuccess(res, 200, null, 'Logout successful');
};

`

### backend/src/controllers/dashboard.controller.ts
`typescript
import { Request, Response } from 'express';
import { dashboardService } from '../services/dashboard.service';
import { sendSuccess } from '../utils/response';

export const getDashboardSummary = async (req: Request, res: Response) => {
  const summary = await dashboardService.getDashboardSummary();
  sendSuccess(res, 200, summary, 'Dashboard summary fetched successfully');
};

`

### backend/src/controllers/employee.controller.ts
`typescript
import { Request, Response } from 'express';
import { employeeService } from '../services/employee.service';
import { sendSuccess } from '../utils/response';
import { ROLES } from '../utils/constants';

export const createEmployee = async (req: Request, res: Response) => {
  const employee = await employeeService.createEmployee(req.body);
  sendSuccess(res, 201, employee, 'Employee created successfully');
};

export const getEmployees = async (req: Request, res: Response) => {
  const { search, department, role, status, sortBy, sortOrder, page, limit } = req.query;

  const result = await employeeService.getEmployees({
    search: search as string,
    department: department as string,
    role: role as string,
    status: status as string,
    sortBy: sortBy as string,
    sortOrder: sortOrder as 'asc' | 'desc',
    page: page ? parseInt(page as string, 10) : 1,
    limit: limit ? parseInt(limit as string, 10) : 10,
  });

  sendSuccess(res, 200, result, 'Employees fetched successfully');
};

export const getEmployeeById = async (req: Request, res: Response) => {
  const id = req.params.id as string;
  const employee = await employeeService.getEmployeeById(id);
  sendSuccess(res, 200, employee, 'Employee fetched successfully');
};

export const updateEmployee = async (req: Request, res: Response) => {
  const id = req.params.id as string;
  const employee = await employeeService.updateEmployee(id, req.body);
  sendSuccess(res, 200, employee, 'Employee updated successfully');
};

export const deleteEmployee = async (req: Request, res: Response) => {
  const id = req.params.id as string;
  // Mock requester role for now since Auth is not fully implemented
  // In production, this comes from req.user.role
  const requesterRole = req.user?.role || ROLES.SUPER_ADMIN; 

  await employeeService.deleteEmployee(id, requesterRole);
  sendSuccess(res, 200, null, 'Employee deleted successfully');
};

`

### backend/src/controllers/index.ts
`typescript
// Placeholder for src\controllers\index.ts
// Responsibility: Define future logic for this architectural layer.

`

### backend/src/controllers/organization.controller.ts
`typescript
import { Request, Response } from 'express';
import { organizationService } from '../services/organization.service';
import { sendSuccess } from '../utils/response';

export const getOrganizationTree = async (req: Request, res: Response) => {
  const tree = await organizationService.getOrganizationTree();
  sendSuccess(res, 200, tree, 'Organization tree fetched successfully');
};

export const getDirectReports = async (req: Request, res: Response) => {
  const id = req.params.id as string;
  const reports = await organizationService.getDirectReports(id);
  sendSuccess(res, 200, reports, 'Direct reports fetched successfully');
};

export const updateManager = async (req: Request, res: Response) => {
  const id = req.params.id as string;
  const { newManagerId } = req.body;
  const employee = await organizationService.updateManager(id, newManagerId || null);
  sendSuccess(res, 200, employee, 'Manager updated successfully');
};

`

### backend/src/index.ts
`typescript
import { app } from './app';
import { connectDB } from './config/db';
import { ENV } from './config/env';
export let startupErrors: string[] = [];

process.on('uncaughtException', (err) => {
  console.error('UNCAUGHT EXCEPTION:', err);
  startupErrors.push('UNCAUGHT EXCEPTION: ' + err.message + '\n' + err.stack);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('UNHANDLED REJECTION:', reason);
  startupErrors.push('UNHANDLED REJECTION: ' + String(reason));
});

const startServer = async () => {
  app.listen(Number(ENV.PORT), '0.0.0.0', () => {
    console.log(`Server running in ${ENV.NODE_ENV} mode on port ${ENV.PORT}`);
  });
  
  await connectDB();
};

startServer();

`

### backend/src/middlewares/auth.middleware.ts
`typescript
import { Request, Response, NextFunction } from 'express';
import { verifyToken, JwtPayload } from '../utils/jwt';
import { AppError } from '../utils/AppError';

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload;
    }
  }
}

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return next(new AppError('Authentication token missing or invalid', 401));
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = verifyToken(token);
    req.user = decoded;
    next();
  } catch (err) {
    return next(new AppError('Invalid or expired token', 401));
  }
};

`

### backend/src/middlewares/error.middleware.ts
`typescript
import { Request, Response, NextFunction } from 'express';
import { sendError } from '../utils/response';
import { ZodError } from 'zod';
import { ENV } from '../config/env';

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || 'Internal Server Error';
  let errors = null;

  if (err instanceof ZodError) {
    statusCode = 400;
    message = 'Validation Error';
    errors = err.issues.map((e: any) => ({ path: e.path.join('.'), message: e.message }));
  } else if (err.name === 'ValidationError') {
    // Mongoose validation error
    statusCode = 400;
    message = 'Database Validation Error';
    errors = Object.values(err.errors).map((e: any) => e.message);
  } else if (err.code === 11000) {
    // Mongoose duplicate key error
    statusCode = 409;
    message = 'Duplicate field value entered';
    errors = Object.keys(err.keyValue);
  }

  // Hide stack trace in production unless operational
  if (ENV.NODE_ENV === 'production' && !err.isOperational && statusCode === 500) {
    message = 'Something went wrong';
  }

  const responseError = ENV.NODE_ENV === 'development' && statusCode === 500 ? err.stack : errors;

  sendError(res, statusCode, message, responseError);
};

`

### backend/src/middlewares/index.ts
`typescript
// Placeholder for src\middlewares\index.ts
// Responsibility: Define future logic for this architectural layer.

`

### backend/src/middlewares/role.middleware.ts
`typescript
import { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/AppError';
import { ROLES } from '../utils/constants';

export const authorize = (allowedRoles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      return next(new AppError('User not authenticated', 401));
    }

    // Super Admin has implicit full access to everything
    if (req.user.role === ROLES.SUPER_ADMIN) {
      return next();
    }

    if (!allowedRoles.includes(req.user.role)) {
      return next(new AppError('You do not have permission to perform this action', 403));
    }

    next();
  };
};

// Reusable preset middlewares
export const requireSuperAdmin = authorize([ROLES.SUPER_ADMIN]);
export const requireHrOrAbove = authorize([ROLES.SUPER_ADMIN, ROLES.HR_MANAGER]);

`

### backend/src/middlewares/validate.middleware.ts
`typescript
import { Request, Response, NextFunction } from 'express';
import { ZodSchema } from 'zod';

export const validate = (schema: ZodSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (error) {
      next(error);
    }
  };
};

`

### backend/src/models/Employee.ts
`typescript
import mongoose, { Document, Schema } from 'mongoose';
import { ROLES, STATUS, RoleType, StatusType } from '../utils/constants';
import { AppError } from '../utils/AppError';

export interface IEmployee extends Document {
  employeeId: string;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  phone: string;
  department: string;
  designation: string;
  salary: number;
  joiningDate: Date;
  status: StatusType;
  role: RoleType;
  reportingManager?: mongoose.Types.ObjectId;
  profileImage?: string;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const EmployeeSchema = new Schema<IEmployee>(
  {
    employeeId: { type: String, required: true, unique: true, index: true },
    firstName: { type: String, required: true, index: true },
    lastName: { type: String, required: true, index: true },
    email: { type: String, required: true, unique: true, lowercase: true, index: true },
    password: { type: String, required: true, select: false },
    phone: { type: String, required: true },
    department: { type: String, required: true, index: true },
    designation: { type: String, required: true },
    salary: { type: Number, required: true, min: 0 },
    joiningDate: { type: Date, required: true },
    status: { type: String, enum: Object.values(STATUS), default: STATUS.ACTIVE },
    role: { type: String, enum: Object.values(ROLES), default: ROLES.EMPLOYEE },
    reportingManager: { type: Schema.Types.ObjectId, ref: 'Employee', default: null },
    profileImage: { type: String, default: null },
    isDeleted: { type: Boolean, default: false, index: true },
  },
  {
    timestamps: true,
  }
);

// Prevent circular reporting
EmployeeSchema.pre('save', async function () {
  if (!this.isModified('reportingManager') || !this.reportingManager) {
    return;
  }

  // Prevent self-reporting
  if (this.reportingManager.equals(this._id)) {
    throw new AppError('An employee cannot report to themselves.', 400);
  }

  // Prevent circular reporting (Traverse up the tree)
  let currentManagerId = this.reportingManager;
  const visited = new Set<string>();

  while (currentManagerId) {
    if (visited.has(currentManagerId.toString())) {
      throw new AppError('Circular reporting loop detected.', 400);
    }
    visited.add(currentManagerId.toString());

    if (currentManagerId.equals(this._id)) {
      throw new AppError('Circular reporting loop detected. Subordinate cannot be a manager to their own manager.', 400);
    }

    const manager = await mongoose.model('Employee').findById(currentManagerId).select('reportingManager');
    if (!manager) break;
    
    currentManagerId = manager.reportingManager;
  }
});

export const Employee = mongoose.model<IEmployee>('Employee', EmployeeSchema);

`

### backend/src/models/index.ts
`typescript
// Placeholder for src\models\index.ts
// Responsibility: Define future logic for this architectural layer.

`

### backend/src/repositories/dashboard.repository.ts
`typescript
import { Employee } from '../models/Employee';

export class DashboardRepository {
  async getSummaryStatistics() {
    const pipeline: any[] = [
      { $match: { isDeleted: false } },
      {
        $facet: {
          totalCount: [{ $count: 'count' }],
          statusCounts: [
            {
              $group: {
                _id: '$status',
                count: { $sum: 1 },
              },
            },
          ],
          departmentCounts: [
            {
              $group: {
                _id: '$department',
                count: { $sum: 1 },
              },
            },
          ],
          roleCounts: [
            {
              $group: {
                _id: '$role',
                count: { $sum: 1 },
              },
            },
          ],
          monthlyTrend: [
            {
              $match: {
                joiningDate: {
                  $gte: new Date(new Date().setFullYear(new Date().getFullYear() - 1)),
                },
              },
            },
            {
              $group: {
                _id: {
                  year: { $year: '$joiningDate' },
                  month: { $month: '$joiningDate' },
                },
                count: { $sum: 1 },
              },
            },
            { $sort: { '_id.year': 1, '_id.month': 1 } },
          ],
        },
      },
    ];

    const result = await Employee.aggregate(pipeline);
    return result[0];
  }
}

export const dashboardRepository = new DashboardRepository();

`

### backend/src/repositories/employee.repository.ts
`typescript
import mongoose, { SortOrder } from 'mongoose';
import { Employee, IEmployee } from '../models/Employee';

export interface PaginationMeta {
  page: number;
  limit: number;
  totalPages: number;
  totalRecords: number;
}

export interface PaginatedResult<T> {
  data: T[];
  meta: PaginationMeta;
}

export interface EmployeeQueryParams {
  search?: string;
  department?: string;
  role?: string;
  status?: string;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  page?: number;
  limit?: number;
}

export class EmployeeRepository {
  async create(data: Partial<IEmployee>): Promise<IEmployee> {
    const employee = new Employee(data);
    return await employee.save();
  }

  async findById(id: string): Promise<IEmployee | null> {
    return await Employee.findOne({ _id: id, isDeleted: false });
  }

  async findByEmail(email: string): Promise<IEmployee | null> {
    return await Employee.findOne({ email, isDeleted: false });
  }

  async findByEmployeeId(employeeId: string): Promise<IEmployee | null> {
    return await Employee.findOne({ employeeId, isDeleted: false });
  }

  async update(id: string, data: Partial<IEmployee>): Promise<IEmployee | null> {
    const employee = await Employee.findOne({ _id: id, isDeleted: false });
    if (!employee) return null;

    Object.assign(employee, data);
    return await employee.save();
  }

  async softDelete(id: string): Promise<IEmployee | null> {
    const employee = await Employee.findOne({ _id: id, isDeleted: false });
    if (!employee) return null;

    employee.isDeleted = true;
    return await employee.save();
  }

  async findAllPaginated(params: EmployeeQueryParams): Promise<PaginatedResult<IEmployee>> {
    const {
      search,
      department,
      role,
      status,
      sortBy = 'createdAt',
      sortOrder = 'desc',
      page = 1,
      limit = 10,
    } = params;

    const query: Record<string, any> = { isDeleted: false };

    if (search) {
      query.$or = [
        { firstName: { $regex: search, $options: 'i' } },
        { lastName: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
      ];
    }

    if (department) query.department = department;
    if (role) query.role = role;
    if (status) query.status = status;

    const sort: Record<string, SortOrder> = { [sortBy]: sortOrder === 'asc' ? 1 : -1 };
    
    // Mapping specific sort fields to DB fields if necessary
    if (sortBy === 'name') {
      delete sort[sortBy];
      sort.firstName = sortOrder === 'asc' ? 1 : -1;
      sort.lastName = sortOrder === 'asc' ? 1 : -1;
    }

    const skip = (page - 1) * limit;

    const [data, totalRecords] = await Promise.all([
      Employee.find(query).sort(sort).skip(skip).limit(limit).select('-password'),
      Employee.countDocuments(query),
    ]);

    return {
      data,
      meta: {
        page,
        limit,
        totalRecords,
        totalPages: Math.ceil(totalRecords / limit),
      },
    };
  }
}

export const employeeRepository = new EmployeeRepository();

`

### backend/src/repositories/index.ts
`typescript
// Placeholder for src\repositories\index.ts
// Responsibility: Define future logic for this architectural layer.

`

### backend/src/repositories/organization.repository.ts
`typescript
import { Employee, IEmployee } from '../models/Employee';

export class OrganizationRepository {
  async getAllActiveEmployeesLean() {
    return await Employee.find({ isDeleted: false })
      .select('_id firstName lastName role department status reportingManager profileImage')
      .lean();
  }

  async getDirectReports(managerId: string) {
    return await Employee.find({ reportingManager: managerId, isDeleted: false })
      .select('-password -__v')
      .lean();
  }
}

export const organizationRepository = new OrganizationRepository();

`

### backend/src/routes/auth.routes.ts
`typescript
import { Router } from 'express';
import { login, logout } from '../controllers/auth.controller';
import { asyncWrapper } from '../utils/asyncWrapper';
import { validate } from '../middlewares/validate.middleware';
import { z } from 'zod';

const router = Router();

const loginSchema = z.object({
  body: z.object({
    email: z.string().email('Invalid email format'),
    password: z.string().min(1, 'Password is required'),
  }),
});

router.post('/login', validate(loginSchema), asyncWrapper(login));
router.post('/logout', asyncWrapper(logout));

export default router;

`

### backend/src/routes/dashboard.routes.ts
`typescript
import { Router } from 'express';
import { getDashboardSummary } from '../controllers/dashboard.controller';
import { authenticate } from '../middlewares/auth.middleware';
import { asyncWrapper } from '../utils/asyncWrapper';

const router = Router();

router.use(authenticate);
router.get('/summary', asyncWrapper(getDashboardSummary));

export default router;

`

### backend/src/routes/employee.routes.ts
`typescript
import { Router } from 'express';
import { createEmployee, getEmployees, getEmployeeById, updateEmployee, deleteEmployee } from '../controllers/employee.controller';
import { validate } from '../middlewares/validate.middleware';
import { authenticate } from '../middlewares/auth.middleware';
import { requireHrOrAbove } from '../middlewares/role.middleware';
import { createEmployeeSchema, updateEmployeeSchema } from '../validators/employee.validator';
import { asyncWrapper } from '../utils/asyncWrapper';

const router = Router();

// Protect all employee routes
router.use(authenticate);

// Routes
router.post('/', requireHrOrAbove, validate(createEmployeeSchema), asyncWrapper(createEmployee));
router.get('/', requireHrOrAbove, asyncWrapper(getEmployees));
router.get('/:id', asyncWrapper(getEmployeeById));
router.put('/:id', validate(updateEmployeeSchema), asyncWrapper(updateEmployee));
router.delete('/:id', requireHrOrAbove, asyncWrapper(deleteEmployee));

export default router;

`

### backend/src/routes/index.ts
`typescript
import { Router } from 'express';
import authRoutes from './auth.routes';
import employeeRoutes from './employee.routes';
import dashboardRoutes from './dashboard.routes';
import organizationRoutes from './organization.routes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/employees', employeeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/organization', organizationRoutes);

export default router;

`

### backend/src/routes/organization.routes.ts
`typescript
import { Router } from 'express';
import { getOrganizationTree, getDirectReports, updateManager } from '../controllers/organization.controller';
import { authenticate } from '../middlewares/auth.middleware';
import { requireHrOrAbove } from '../middlewares/role.middleware';
import { asyncWrapper } from '../utils/asyncWrapper';

const router = Router();

router.use(authenticate);
router.use(requireHrOrAbove); // Org features are for HR/Super Admin only

router.get('/tree', asyncWrapper(getOrganizationTree));
router.get('/:id/reportees', asyncWrapper(getDirectReports));
router.patch('/:id/manager', asyncWrapper(updateManager));

export default router;

`

### backend/src/seed.ts
`typescript
import mongoose from 'mongoose';
import { ENV } from './config/env';
import { Employee } from './models/Employee';
import { hashPassword } from './utils/hash';
import { ROLES, STATUS } from './utils/constants';

const seedDB = async () => {
  try {
    await mongoose.connect(ENV.MONGO_URI);
    console.log('Connected to MongoDB for seeding');

    // Clear existing data
    await Employee.deleteMany({});
    console.log('Cleared existing employees');

    const adminPassword = await hashPassword('Admin@123');
    const hrPassword = await hashPassword('Hr@123');
    const empPassword = await hashPassword('Employee@123');

    // Create Super Admin
    const superAdmin = await Employee.create({
      employeeId: 'EMP-001',
      firstName: 'System',
      lastName: 'Admin',
      email: 'admin@playstack.com',
      password: adminPassword,
      phone: '1234567890',
      department: 'Operations',
      designation: 'CEO',
      salary: 250000,
      joiningDate: new Date('2023-01-01'),
      status: STATUS.ACTIVE,
      role: ROLES.SUPER_ADMIN,
    });

    // Create HR Manager
    const hrManager = await Employee.create({
      employeeId: 'EMP-002',
      firstName: 'HR',
      lastName: 'Manager',
      email: 'hr@playstack.com',
      password: hrPassword,
      phone: '0987654321',
      department: 'HR',
      designation: 'HR Director',
      salary: 120000,
      joiningDate: new Date('2023-02-01'),
      status: STATUS.ACTIVE,
      role: ROLES.HR_MANAGER,
      reportingManager: superAdmin._id,
    });

    // Create Base Employee
    const baseEmployee = await Employee.create({
      employeeId: 'EMP-003',
      firstName: 'John',
      lastName: 'Doe',
      email: 'employee@playstack.com',
      password: empPassword,
      phone: '5555555555',
      department: 'Engineering',
      designation: 'Software Engineer',
      salary: 80000,
      joiningDate: new Date('2023-03-01'),
      status: STATUS.ACTIVE,
      role: ROLES.EMPLOYEE,
      reportingManager: superAdmin._id,
    });

    // Create 20 more employees
    const departments = ['Engineering', 'Finance', 'Marketing', 'Sales', 'Operations'];
    
    // Create department heads first
    const deptHeads: any = {};
    for (const dept of departments) {
      deptHeads[dept] = await Employee.create({
        employeeId: `EMP-${dept}-001`,
        firstName: `${dept}`,
        lastName: 'Head',
        email: `head.${dept.toLowerCase()}@playstack.com`,
        password: empPassword,
        phone: '1112223333',
        department: dept,
        designation: `${dept} Director`,
        salary: 150000,
        joiningDate: new Date('2023-04-01'),
        status: STATUS.ACTIVE,
        role: ROLES.EMPLOYEE,
        reportingManager: superAdmin._id,
      });
    }

    // Create standard employees under heads
    for (let i = 1; i <= 15; i++) {
      const dept = departments[i % departments.length];
      await Employee.create({
        employeeId: `EMP-${dept}-00${i+1}`,
        firstName: `Employee${i}`,
        lastName: `Staff`,
        email: `emp${i}.${dept.toLowerCase()}@playstack.com`,
        password: empPassword,
        phone: `222333444${i}`,
        department: dept,
        designation: `${dept} Specialist`,
        salary: 60000 + (i * 1000),
        joiningDate: new Date('2023-05-01'),
        status: STATUS.ACTIVE,
        role: ROLES.EMPLOYEE,
        reportingManager: deptHeads[dept]._id,
      });
    }

    console.log('Database seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Seeding error:', error);
    process.exit(1);
  }
};

seedDB();

`

### backend/src/services/auth.service.ts
`typescript
import { Employee } from '../models/Employee';
import { AppError } from '../utils/AppError';
import { generateToken } from '../utils/jwt';
import bcrypt from 'bcryptjs';
import { STATUS } from '../utils/constants';

export class AuthService {
  async login(email: string, passwordString: string) {
    const employee = await Employee.findOne({ email }).select('+password');
    
    if (!employee) {
      throw new AppError('Invalid credentials', 401);
    }

    if (employee.isDeleted) {
      throw new AppError('Account has been deleted', 403);
    }

    if (employee.status === STATUS.INACTIVE) {
      throw new AppError('Account is disabled', 403);
    }

    const isMatch = await bcrypt.compare(passwordString, employee.password as string);
    if (!isMatch) {
      throw new AppError('Invalid credentials', 401);
    }

    const token = generateToken({
      id: employee._id as unknown as string,
      role: employee.role,
    });

    const employeeProfile = employee.toObject();
    delete employeeProfile.password;

    return {
      token,
      employee: employeeProfile,
    };
  }
}

export const authService = new AuthService();

`

### backend/src/services/dashboard.service.ts
`typescript
import { dashboardRepository } from '../repositories/dashboard.repository';
import { STATUS } from '../utils/constants';

export class DashboardService {
  async getDashboardSummary() {
    const rawStats = await dashboardRepository.getSummaryStatistics();
    
    const totalEmployees = rawStats.totalCount[0]?.count || 0;
    const activeEmployees = rawStats.statusCounts.find((s: any) => s._id === STATUS.ACTIVE)?.count || 0;
    const inactiveEmployees = rawStats.statusCounts.find((s: any) => s._id === STATUS.INACTIVE)?.count || 0;
    
    const departmentCount = rawStats.departmentCounts.length;
    
    // Format monthly trend to readable format
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const formattedTrend = rawStats.monthlyTrend.map((t: any) => ({
      month: `${monthNames[t._id.month - 1]} ${t._id.year}`,
      count: t.count,
    }));

    return {
      totalEmployees,
      activeEmployees,
      inactiveEmployees,
      departmentCount,
      employeesPerDepartment: rawStats.departmentCounts,
      employeesPerRole: rawStats.roleCounts,
      monthlyTrend: formattedTrend,
    };
  }
}

export const dashboardService = new DashboardService();

`

### backend/src/services/employee.service.ts
`typescript
import { IEmployee } from '../models/Employee';
import { employeeRepository, EmployeeQueryParams, PaginatedResult } from '../repositories/employee.repository';
import { AppError } from '../utils/AppError';
import { hashPassword } from '../utils/hash';
import { ROLES } from '../utils/constants';

export class EmployeeService {
  async createEmployee(data: Partial<IEmployee>): Promise<IEmployee> {
    // Business Rule: Duplicate Employee ID Check
    if (data.employeeId) {
      const existingId = await employeeRepository.findByEmployeeId(data.employeeId);
      if (existingId) throw new AppError('Employee ID already exists', 400);
    }

    // Business Rule: Duplicate Email Check
    if (data.email) {
      const existingEmail = await employeeRepository.findByEmail(data.email);
      if (existingEmail) throw new AppError('Email already exists', 400);
    }

    // Hash password if provided (required on create, but just safe-guarding)
    if (data.password) {
      data.password = await hashPassword(data.password);
    }

    return await employeeRepository.create(data);
  }

  async getEmployeeById(id: string): Promise<IEmployee> {
    const employee = await employeeRepository.findById(id);
    if (!employee) throw new AppError('Employee not found or has been deleted', 404);
    return employee;
  }

  async getEmployees(params: EmployeeQueryParams): Promise<PaginatedResult<IEmployee>> {
    return await employeeRepository.findAllPaginated(params);
  }

  async updateEmployee(id: string, data: Partial<IEmployee>): Promise<IEmployee> {
    const employee = await employeeRepository.findById(id);
    if (!employee) throw new AppError('Employee not found or has been deleted', 404);

    // Business Rule: Duplicate checks on update if fields are changed
    if (data.email && data.email !== employee.email) {
      const existingEmail = await employeeRepository.findByEmail(data.email);
      if (existingEmail) throw new AppError('Email already exists', 400);
    }

    if (data.password) {
      data.password = await hashPassword(data.password);
    }

    // Prevent role escalation tricks via regular endpoints if necessary (handled by RBAC controllers usually)
    const updated = await employeeRepository.update(id, data);
    if (!updated) throw new AppError('Failed to update employee', 500);
    
    return updated;
  }

  async deleteEmployee(id: string, requesterRole: string): Promise<void> {
    const employee = await employeeRepository.findById(id);
    if (!employee) throw new AppError('Employee not found or has been deleted', 404);

    // Business Rule: Deleting Super Admin constraint
    if (employee.role === ROLES.SUPER_ADMIN && requesterRole !== ROLES.SUPER_ADMIN) {
      throw new AppError('Only a Super Admin can delete another Super Admin', 403);
    }

    const deleted = await employeeRepository.softDelete(id);
    if (!deleted) throw new AppError('Failed to delete employee', 500);
  }
}

export const employeeService = new EmployeeService();

`

### backend/src/services/index.ts
`typescript
// Placeholder for src\services\index.ts
// Responsibility: Define future logic for this architectural layer.

`

### backend/src/services/organization.service.ts
`typescript
import { organizationRepository } from '../repositories/organization.repository';
import { employeeRepository } from '../repositories/employee.repository';
import { AppError } from '../utils/AppError';

export class OrganizationService {
  async getOrganizationTree() {
    const employees = await organizationRepository.getAllActiveEmployeesLean();
    
    // Hash map to quickly access nodes and store their children
    const map = new Map<string, any>();
    const roots: any[] = [];

    // Initialize map
    employees.forEach((emp: any) => {
      map.set(emp._id.toString(), { ...emp, directReports: [] });
    });

    // Build tree
    employees.forEach((emp: any) => {
      const node = map.get(emp._id.toString());
      if (emp.reportingManager) {
        const managerId = emp.reportingManager.toString();
        const managerNode = map.get(managerId);
        
        if (managerNode) {
          managerNode.directReports.push(node);
        } else {
          // If manager is not active/found, attach to roots temporarily or handle orphaned node
          roots.push(node); 
        }
      } else {
        roots.push(node); // Has no manager, so it's a root
      }
    });

    return roots;
  }

  async getDirectReports(managerId: string) {
    const manager = await employeeRepository.findById(managerId);
    if (!manager) throw new AppError('Manager not found', 404);

    return await organizationRepository.getDirectReports(managerId);
  }

  async updateManager(employeeId: string, newManagerId: string | null) {
    const employee = await employeeRepository.findById(employeeId);
    if (!employee) throw new AppError('Employee not found', 404);

    if (newManagerId) {
      const manager = await employeeRepository.findById(newManagerId);
      if (!manager) throw new AppError('Assigned manager does not exist or is deleted', 400);
    }

    // Set the new manager
    employee.reportingManager = newManagerId as any;

    // Trigger save which invokes the Mongoose pre('save') hook to validate circular reporting
    try {
      await employee.save();
    } catch (err: any) {
      // Catch mongoose validation errors (like our custom AppError from pre('save'))
      if (err instanceof AppError) throw err;
      throw new AppError(err.message || 'Failed to update manager', 400);
    }

    return employee;
  }
}

export const organizationService = new OrganizationService();

`

### backend/src/utils/AppError.ts
`typescript
export class AppError extends Error {
  public statusCode: number;
  public isOperational: boolean;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

`

### backend/src/utils/asyncWrapper.ts
`typescript
import { Request, Response, NextFunction } from 'express';

export const asyncWrapper = (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next);
  };
};

`

### backend/src/utils/constants.ts
`typescript
export const ROLES = {
  SUPER_ADMIN: 'SUPER_ADMIN',
  HR_MANAGER: 'HR_MANAGER',
  EMPLOYEE: 'EMPLOYEE',
} as const;

export type RoleType = keyof typeof ROLES;

export const STATUS = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
} as const;

export type StatusType = keyof typeof STATUS;

`

### backend/src/utils/hash.ts
`typescript
import bcrypt from 'bcryptjs';
import { ENV } from '../config/env';

export const hashPassword = async (password: string): Promise<string> => {
  return await bcrypt.hash(password, ENV.BCRYPT_SALT_ROUNDS);
};

export const comparePassword = async (password: string, hash: string): Promise<boolean> => {
  return await bcrypt.compare(password, hash);
};

`

### backend/src/utils/index.ts
`typescript
// Placeholder for src\utils\index.ts
// Responsibility: Define future logic for this architectural layer.

`

### backend/src/utils/jwt.ts
`typescript
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret_for_development_only';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '24h';

export interface JwtPayload {
  id: string;
  role: string;
}

export const generateToken = (payload: JwtPayload): string => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN as any });
};

export const verifyToken = (token: string): JwtPayload => {
  return jwt.verify(token, JWT_SECRET) as JwtPayload;
};

`

### backend/src/utils/response.ts
`typescript
import { Response } from 'express';

export const sendSuccess = (res: Response, statusCode: number, data: any, message = 'Success') => {
  return res.status(statusCode).json({
    status: 'success',
    message,
    data,
  });
};

export const sendError = (res: Response, statusCode: number, message: string, errors: any = null) => {
  return res.status(statusCode).json({
    status: 'error',
    message,
    errors,
  });
};

`

### backend/src/validators/employee.validator.ts
`typescript
import { z } from 'zod';
import { ROLES, STATUS } from '../utils/constants';

export const createEmployeeSchema = z.object({
  body: z.object({
    employeeId: z.string().min(1, 'Employee ID is required'),
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    phone: z.string().min(10, 'Phone must be at least 10 digits'),
    department: z.string().min(1, 'Department is required'),
    designation: z.string().min(1, 'Designation is required'),
    salary: z.number().positive('Salary must be positive'),
    joiningDate: z.string().datetime({ message: 'Invalid joining date format' }),
    status: z.enum([STATUS.ACTIVE, STATUS.INACTIVE]).default(STATUS.ACTIVE),
    role: z.enum([ROLES.SUPER_ADMIN, ROLES.HR_MANAGER, ROLES.EMPLOYEE]).default(ROLES.EMPLOYEE),
    reportingManager: z.string().optional(),
    profileImage: z.string().url().optional(),
  }),
});

export const updateEmployeeSchema = z.object({
  body: z.object({
    firstName: z.string().min(1).optional(),
    lastName: z.string().min(1).optional(),
    phone: z.string().min(10).optional(),
    department: z.string().min(1).optional(),
    designation: z.string().min(1).optional(),
    salary: z.number().positive().optional(),
    status: z.enum([STATUS.ACTIVE, STATUS.INACTIVE]).optional(),
    role: z.enum([ROLES.SUPER_ADMIN, ROLES.HR_MANAGER, ROLES.EMPLOYEE]).optional(),
    reportingManager: z.string().optional(),
    profileImage: z.string().url().optional(),
  }),
});

`

### backend/src/validators/index.ts
`typescript
// Placeholder for src\validators\index.ts
// Responsibility: Define future logic for this architectural layer.

`

### backend/tsconfig.json
`json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "CommonJS",
    "rootDir": "./src",
    "outDir": "./dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src/**/*"]
}

`

## 3. MongoDB Startup Chain

The startup chain flows from ackend/dist/index.js -> ackend/dist/app.js -> ackend/dist/config/db.js.

### ./backend/src/index.ts
`	ypescript
import { app } from './app';
import { connectDB } from './config/db';
import { ENV } from './config/env';
export let startupErrors: string[] = [];

process.on('uncaughtException', (err) => {
  console.error('UNCAUGHT EXCEPTION:', err);
  startupErrors.push('UNCAUGHT EXCEPTION: ' + err.message + '\n' + err.stack);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('UNHANDLED REJECTION:', reason);
  startupErrors.push('UNHANDLED REJECTION: ' + String(reason));
});

const startServer = async () => {
  app.listen(Number(ENV.PORT), '0.0.0.0', () => {
    console.log(`Server running in ${ENV.NODE_ENV} mode on port ${ENV.PORT}`);
  });
  
  await connectDB();
};

startServer();

`

### ./backend/src/app.ts
`	ypescript
import express from 'express';
import cors from 'cors';
import { errorHandler } from './middlewares/error.middleware';
import apiRoutes from './routes';

export const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'success', message: 'API is running' });
});

app.get('/api/v1/health', (req, res) => {
  res.status(200).json({ status: 'success', message: 'API is running' });
});

app.use('/api', apiRoutes);

// Global Error Handler
app.use(errorHandler);

`

### ./backend/src/config/db.ts
`	ypescript
import mongoose from 'mongoose';
import { ENV } from './env';

export const connectDB = async (): Promise<void> => {
  try {
    const conn = await mongoose.connect(ENV.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error instanceof Error ? error.message : error}`);
    // Removed process.exit(1) to prevent healthcheck crashes
  }
};

`

## 4. Dependency Search

### backend/.env.example
`	ypescript
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/playstack

# Authentication
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRES_IN=1d

# CORS Configuration
CLIENT_URL=http://localhost:5173

`

### backend/package-lock.json
`	ypescript
{
  "name": "backend",
  "version": "1.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "backend",
      "version": "1.0.0",
      "license": "ISC",
      "dependencies": {
        "bcryptjs": "^3.0.3",
        "cors": "^2.8.6",
        "dotenv": "^17.4.2",
        "express": "^5.2.1",
        "jsonwebtoken": "^9.0.3",
        "mongoose": "^9.7.4",
        "zod": "^4.4.3"
      },
      "devDependencies": {
        "@types/bcryptjs": "^2.4.6",
        "@types/cors": "^2.8.19",
        "@types/express": "^5.0.6",
        "@types/jsonwebtoken": "^9.0.10",
        "@types/node": "^26.1.1",
        "eslint": "^10.7.0",
        "nodemon": "^3.1.14",
        "prettier": "^3.9.5",
        "ts-node": "^10.9.2",
        "typescript": "^7.0.2"
      }
    },
    "node_modules/@cspotcode/source-map-support": {
      "version": "0.8.1",
      "resolved": "https://registry.npmjs.org/@cspotcode/source-map-support/-/source-map-support-0.8.1.tgz",
      "integrity": "sha512-IchNf6dN4tHoMFIn/7OE8LWZ19Y6q/67Bmf6vnGREv8RSbBVb9LPJxEcnwrcwX6ixSvaiGoomAUvu4YSxXrVgw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/trace-mapping": "0.3.9"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@eslint-community/eslint-utils": {
      "version": "4.9.1",
      "resolved": "https://registry.npmjs.org/@eslint-community/eslint-utils/-/eslint-utils-4.9.1.tgz",
      "integrity": "sha512-phrYmNiYppR7znFEdqgfWHXR6NCkZEK7hwWDHZUjit/2/U0r6XvkDl0SYnoM51Hq7FhCGdLDT6zxCCOY1hexsQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "eslint-visitor-keys": "^3.4.3"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      },
      "peerDependencies": {
        "eslint": "^6.0.0 || ^7.0.0 || >=8.0.0"
      }
    },
    "node_modules/@eslint-community/eslint-utils/node_modules/eslint-visitor-keys": {
      "version": "3.4.3",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-3.4.3.tgz",
      "integrity": "sha512-wpc+LXeiyiisxPlEkUzU6svyS1frIO3Mgxj1fdy7Pm8Ygzguax2N3Fa/D/ag1WqbOprdI+uY6wMUl8/a2G+iag==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/@eslint-community/regexpp": {
      "version": "4.12.2",
      "resolved": "https://registry.npmjs.org/@eslint-community/regexpp/-/regexpp-4.12.2.tgz",
      "integrity": "sha512-EriSTlt5OC9/7SXkRSCAhfSxxoSUgBm33OH+IkwbdpgoqsSsUg7y3uh+IICI/Qg4BBWr3U2i39RpmycbxMq4ew==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^12.0.0 || ^14.0.0 || >=16.0.0"
      }
    },
    "node_modules/@eslint/config-array": {
      "version": "0.23.5",
      "resolved": "https://registry.npmjs.org/@eslint/config-array/-/config-array-0.23.5.tgz",
      "integrity": "sha512-Y3kKLvC1dvTOT+oGlqNQ1XLqK6D1HU2YXPc52NmAlJZbMMWDzGYXMiPRJ8TYD39muD/OTjlZmNJ4ib7dvSrMBA==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@eslint/object-schema": "^3.0.5",
        "debug": "^4.3.1",
        "minimatch": "^10.2.4"
      },
      "engines": {
        "node": "^20.19.0 || ^22.13.0 || >=24"
      }
    },
    "node_modules/@eslint/config-helpers": {
      "version": "0.6.0",
      "resolved": "https://registry.npmjs.org/@eslint/config-helpers/-/config-helpers-0.6.0.tgz",
      "integrity": "sha512-ii6Bw9jJ2zi2cWA2Z+9/QZ/+3DX6kwaV5Q986D/CdP3Lap3w/pgQZ373FV7byY/i7L4IRH/G43I5dz1ClsCbpA==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@eslint/core": "^1.2.1"
      },
      "engines": {
        "node": "^20.19.0 || ^22.13.0 || >=24"
      }
    },
    "node_modules/@eslint/core": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/@eslint/core/-/core-1.2.1.tgz",
      "integrity": "sha512-MwcE1P+AZ4C6DWlpin/OmOA54mmIZ/+xZuJiQd4SyB29oAJjN30UW9wkKNptW2ctp4cEsvhlLY/CsQ1uoHDloQ==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@types/json-schema": "^7.0.15"
      },
      "engines": {
        "node": "^20.19.0 || ^22.13.0 || >=24"
      }
    },
    "node_modules/@eslint/object-schema": {
      "version": "3.0.5",
      "resolved": "https://registry.npmjs.org/@eslint/object-schema/-/object-schema-3.0.5.tgz",
      "integrity": "sha512-vqTaUEgxzm+YDSdElad6PiRoX4t8VGDjCtt05zn4nU810UIx/uNEV7/lZJ6KwFThKZOzOxzXy48da+No7HZaMw==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^20.19.0 || ^22.13.0 || >=24"
      }
    },
    "node_modules/@eslint/plugin-kit": {
      "version": "0.7.2",
      "resolved": "https://registry.npmjs.org/@eslint/plugin-kit/-/plugin-kit-0.7.2.tgz",
      "integrity": "sha512-+CNAzxglkrpNf/kKywqQfk74QjtceuOE7Qm+AF8miRvPF/wmmK5+OJOgVh3AVTT3RP2mH3+FOaxlE5v72owk0A==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@eslint/core": "^1.2.1",
        "levn": "^0.4.1"
      },
      "engines": {
        "node": "^20.19.0 || ^22.13.0 || >=24"
      }
    },
    "node_modules/@humanfs/core": {
      "version": "0.19.2",
      "resolved": "https://registry.npmjs.org/@humanfs/core/-/core-0.19.2.tgz",
      "integrity": "sha512-UhXNm+CFMWcbChXywFwkmhqjs3PRCmcSa/hfBgLIb7oQ5HNb1wS0icWsGtSAUNgefHeI+eBrA8I1fxmbHsGdvA==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@humanfs/types": "^0.15.0"
      },
      "engines": {
        "node": ">=18.18.0"
      }
    },
    "node_modules/@humanfs/node": {
      "version": "0.16.8",
      "resolved": "https://registry.npmjs.org/@humanfs/node/-/node-0.16.8.tgz",
      "integrity": "sha512-gE1eQNZ3R++kTzFUpdGlpmy8kDZD/MLyHqDwqjkVQI0JMdI1D51sy1H958PNXYkM2rAac7e5/CnIKZrHtPh3BQ==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@humanfs/core": "^0.19.2",
        "@humanfs/types": "^0.15.0",
        "@humanwhocodes/retry": "^0.4.0"
      },
      "engines": {
        "node": ">=18.18.0"
      }
    },
    "node_modules/@humanfs/types": {
      "version": "0.15.0",
      "resolved": "https://registry.npmjs.org/@humanfs/types/-/types-0.15.0.tgz",
      "integrity": "sha512-ZZ1w0aoQkwuUuC7Yf+7sdeaNfqQiiLcSRbfI08oAxqLtpXQr9AIVX7Ay7HLDuiLYAaFPu8oBYNq/QIi9URHJ3Q==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=18.18.0"
      }
    },
    "node_modules/@humanwhocodes/module-importer": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/module-importer/-/module-importer-1.0.1.tgz",
      "integrity": "sha512-bxveV4V8v5Yb4ncFTT3rPSgZBOpCkjfK0y4oVVVJwIuDVBRMDXrPyXRL988i5ap9m9bnyEEjWfm5WkBmtffLfA==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=12.22"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/nzakas"
      }
    },
    "node_modules/@humanwhocodes/retry": {
      "version": "0.4.3",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/retry/-/retry-0.4.3.tgz",
      "integrity": "sha512-bV0Tgo9K4hfPCek+aMAn81RppFKv2ySDQeMoSZuvTASywNTnVJCArCZE2FWqpvIatKu7VMRLWlR1EazvVhDyhQ==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=18.18"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/nzakas"
      }
    },
    "node_modules/@jridgewell/resolve-uri": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz",
      "integrity": "sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/sourcemap-codec": {
      "version": "1.5.5",
      "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.5.tgz",
      "integrity": "sha512-cYQ9310grqxueWbl+WuIUIaiUaDcj7WOq5fVhEljNVgRfOUhY9fy2zTvfoqWsnebh8Sl70VScFbICvJnLKB0Og==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@jridgewell/trace-mapping": {
      "version": "0.3.9",
      "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.9.tgz",
      "integrity": "sha512-3Belt6tdc8bPgAtbcmdtNJlirVoTmEb5e2gC94PnkwEW9jI6CAHUeoG85tjWP5WquqfavoMtMwiG4P926ZKKuQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/resolve-uri": "^3.0.3",
        "@jridgewell/sourcemap-codec": "^1.4.10"
      }
    },
    "node_modules/@mongodb-js/saslprep": {
      "version": "1.4.12",
      "resolved": "https://registry.npmjs.org/@mongodb-js/saslprep/-/saslprep-1.4.12.tgz",
      "integrity": "sha512-QAfAMwNgnYxZ2C6D1HgeP7Gc4i/uvJRim415PCIL9ptRxWMNbWeLBYb2/9R4pGKny/s1FVu2JA2cxCUBUOggrA==",
      "license": "MIT",
      "dependencies": {
        "sparse-bitfield": "^3.0.3"
      }
    },
    "node_modules/@standard-schema/spec": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@standard-schema/spec/-/spec-1.1.0.tgz",
      "integrity": "sha512-l2aFy5jALhniG5HgqrD6jXLi/rUWrKvqN/qJx6yoJsgKhblVd+iqqU4RCXavm/jPityDo5TCvKMnpjKnOriy0w==",
      "license": "MIT"
    },
    "node_modules/@tsconfig/node10": {
      "version": "1.0.12",
      "resolved": "https://registry.npmjs.org/@tsconfig/node10/-/node10-1.0.12.tgz",
      "integrity": "sha512-UCYBaeFvM11aU2y3YPZ//O5Rhj+xKyzy7mvcIoAjASbigy8mHMryP5cK7dgjlz2hWxh1g5pLw084E0a/wlUSFQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@tsconfig/node12": {
      "version": "1.0.11",
      "resolved": "https://registry.npmjs.org/@tsconfig/node12/-/node12-1.0.11.tgz",
      "integrity": "sha512-cqefuRsh12pWyGsIoBKJA9luFu3mRxCA+ORZvA4ktLSzIuCUtWVxGIuXigEwO5/ywWFMZ2QEGKWvkZG1zDMTag==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@tsconfig/node14": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/@tsconfig/node14/-/node14-1.0.3.tgz",
      "integrity": "sha512-ysT8mhdixWK6Hw3i1V2AeRqZ5WfXg1G43mqoYlM2nc6388Fq5jcXyr5mRsqViLx/GJYdoL0bfXD8nmF+Zn/Iow==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@tsconfig/node16": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/@tsconfig/node16/-/node16-1.0.4.tgz",
      "integrity": "sha512-vxhUy4J8lyeyinH7Azl1pdd43GJhZH/tP2weN8TntQblOY+A0XbT8DJk1/oCPuOOyg/Ja757rG0CgHcWC8OfMA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/bcryptjs": {
      "version": "2.4.6",
      "resolved": "https://registry.npmjs.org/@types/bcryptjs/-/bcryptjs-2.4.6.tgz",
      "integrity": "sha512-9xlo6R2qDs5uixm0bcIqCeMCE6HiQsIyel9KQySStiyqNl2tnj2mP3DX1Nf56MD6KMenNNlBBsy3LJ7gUEQPXQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/body-parser": {
      "version": "1.19.6",
      "resolved": "https://registry.npmjs.org/@types/body-parser/-/body-parser-1.19.6.tgz",
      "integrity": "sha512-HLFeCYgz89uk22N5Qg3dvGvsv46B8GLvKKo1zKG4NybA8U2DiEO3w9lqGg29t/tfLRJpJ6iQxnVw4OnB7MoM9g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/connect": "*",
        "@types/node": "*"
      }
    },
    "node_modules/@types/connect": {
      "version": "3.4.38",
      "resolved": "https://registry.npmjs.org/@types/connect/-/connect-3.4.38.tgz",
      "integrity": "sha512-K6uROf1LD88uDQqJCktA4yzL1YYAK6NgfsI0v/mTgyPKWsX1CnJ0XPSDhViejru1GcRkLWb8RlzFYJRqGUbaug==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/node": "*"
      }
    },
    "node_modules/@types/cors": {
      "version": "2.8.19",
      "resolved": "https://registry.npmjs.org/@types/cors/-/cors-2.8.19.tgz",
      "integrity": "sha512-mFNylyeyqN93lfe/9CSxOGREz8cpzAhH+E93xJ4xWQf62V8sQ/24reV2nyzUWM6H6Xji+GGHpkbLe7pVoUEskg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/node": "*"
      }
    },
    "node_modules/@types/esrecurse": {
      "version": "4.3.1",
      "resolved": "https://registry.npmjs.org/@types/esrecurse/-/esrecurse-4.3.1.tgz",
      "integrity": "sha512-xJBAbDifo5hpffDBuHl0Y8ywswbiAp/Wi7Y/GtAgSlZyIABppyurxVueOPE8LUQOxdlgi6Zqce7uoEpqNTeiUw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/estree": {
      "version": "1.0.9",
      "resolved": "https://registry.npmjs.org/@types/estree/-/estree-1.0.9.tgz",
      "integrity": "sha512-GhdPgy1el4/ImP05X05Uw4cw2/M93BCUmnEvWZNStlCzEKME4Fkk+YpoA5OiHNQmoS7Cafb8Xa3Pya8m1Qrzeg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/express": {
      "version": "5.0.6",
      "resolved": "https://registry.npmjs.org/@types/express/-/express-5.0.6.tgz",
      "integrity": "sha512-sKYVuV7Sv9fbPIt/442koC7+IIwK5olP1KWeD88e/idgoJqDm3JV/YUiPwkoKK92ylff2MGxSz1CSjsXelx0YA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/body-parser": "*",
        "@types/express-serve-static-core": "^5.0.0",
        "@types/serve-static": "^2"
      }
    },
    "node_modules/@types/express-serve-static-core": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/@types/express-serve-static-core/-/express-serve-static-core-5.1.2.tgz",
      "integrity": "sha512-d3KvEXBSo/lOAMc2u6fkyDHBvetBHeqD7wm/AcXfLpSOQwlmG9D/aQ0SFswVjv05p7ullQS7Mjohj6/VdbZuTg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/node": "*",
        "@types/qs": "*",
        "@types/range-parser": "*",
        "@types/send": "*"
      }
    },
    "node_modules/@types/http-errors": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/@types/http-errors/-/http-errors-2.0.5.tgz",
      "integrity": "sha512-r8Tayk8HJnX0FztbZN7oVqGccWgw98T/0neJphO91KkmOzug1KkofZURD4UaD5uH8AqcFLfdPErnBod0u71/qg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/json-schema": {
      "version": "7.0.15",
      "resolved": "https://registry.npmjs.org/@types/json-schema/-/json-schema-7.0.15.tgz",
      "integrity": "sha512-5+fP8P8MFNC+AyZCDxrB2pkZFPGzqQWUzpSeuuVLvm8VMcorNYavBqoFcxK8bQz4Qsbn4oUEEem4wDLfcysGHA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/jsonwebtoken": {
      "version": "9.0.10",
      "resolved": "https://registry.npmjs.org/@types/jsonwebtoken/-/jsonwebtoken-9.0.10.tgz",
      "integrity": "sha512-asx5hIG9Qmf/1oStypjanR7iKTv0gXQ1Ov/jfrX6kS/EO0OFni8orbmGCn0672NHR3kXHwpAwR+B368ZGN/2rA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/ms": "*",
        "@types/node": "*"
      }
    },
    "node_modules/@types/ms": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/@types/ms/-/ms-2.1.0.tgz",
      "integrity": "sha512-GsCCIZDE/p3i96vtEqx+7dBUGXrc7zeSK3wwPHIaRThS+9OhWIXRqzs4d6k1SVU8g91DrNRWxWUGhp5KXQb2VA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/node": {
      "version": "26.1.1",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-26.1.1.tgz",
      "integrity": "sha512-nxAkRSVkN1Y0JC1W8ky/fTfkGsMmcrRsbx+3XoZE+rMOX71kLYTV7fLXpqud1GpbpP5TuffXFqfX7fH2GgZREw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "undici-types": "~8.3.0"
      }
    },
    "node_modules/@types/qs": {
      "version": "6.15.1",
      "resolved": "https://registry.npmjs.org/@types/qs/-/qs-6.15.1.tgz",
      "integrity": "sha512-GZHUBZR9hckSUhrxmp1nG6NwdpM9fCunJwyThLW1X3AyHgd9IlHb6VANpQQqDr2o/qQp6McZ3y/IA2rVzKzSbw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/range-parser": {
      "version": "1.2.7",
      "resolved": "https://registry.npmjs.org/@types/range-parser/-/range-parser-1.2.7.tgz",
      "integrity": "sha512-hKormJbkJqzQGhziax5PItDUTMAM9uE2XXQmM37dyd4hVM+5aVl7oVxMVUiVQn2oCQFN/LKCZdvSM0pFRqbSmQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/send": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/@types/send/-/send-1.2.1.tgz",
      "integrity": "sha512-arsCikDvlU99zl1g69TcAB3mzZPpxgw0UQnaHeC1Nwb015xp8bknZv5rIfri9xTOcMuaVgvabfIRA7PSZVuZIQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/node": "*"
      }
    },
    "node_modules/@types/serve-static": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/@types/serve-static/-/serve-static-2.2.0.tgz",
      "integrity": "sha512-8mam4H1NHLtu7nmtalF7eyBH14QyOASmcxHhSfEoRyr0nP/YdoesEtU+uSRvMe96TW/HPTtkoKqQLl53N7UXMQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/http-errors": "*",
        "@types/node": "*"
      }
    },
    "node_modules/@types/webidl-conversions": {
      "version": "7.0.3",
      "resolved": "https://registry.npmjs.org/@types/webidl-conversions/-/webidl-conversions-7.0.3.tgz",
      "integrity": "sha512-CiJJvcRtIgzadHCYXw7dqEnMNRjhGZlYK05Mj9OyktqV8uVT8fD2BFOB7S1uwBE3Kj2Z+4UyPmFw/Ixgw/LAlA==",
      "license": "MIT"
    },
    "node_modules/@types/whatwg-url": {
      "version": "13.0.0",
      "resolved": "https://registry.npmjs.org/@types/whatwg-url/-/whatwg-url-13.0.0.tgz",
      "integrity": "sha512-N8WXpbE6Wgri7KUSvrmQcqrMllKZ9uxkYWMt+mCSGwNc0Hsw9VQTW7ApqI4XNrx6/SaM2QQJCzMPDEXE058s+Q==",
      "license": "MIT",
      "dependencies": {
        "@types/webidl-conversions": "*"
      }
    },
    "node_modules/@typescript/typescript-aix-ppc64": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/@typescript/typescript-aix-ppc64/-/typescript-aix-ppc64-7.0.2.tgz",
      "integrity": "sha512-MTKKkWB7p/0E9xi1d1tHtZ5PiLkGEMIq88pK2CubZjOsLtYTLqhgIgi6zepFa+9GHZ6h05NMCkQxGKiPXMxXtQ==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "aix"
      ],
      "engines": {
        "node": ">=16.20.0"
      }
    },
    "node_modules/@typescript/typescript-darwin-arm64": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/@typescript/typescript-darwin-arm64/-/typescript-darwin-arm64-7.0.2.tgz",
      "integrity": "sha512-gowzar9MwS/aRWp6f3a4KUqzRjAZjOsmGNCM6LcTgXum+dBfgsBVMN+AgvOCCbguXyick6LJhpBszxMebJ8syA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=16.20.0"
      }
    },
    "node_modules/@typescript/typescript-darwin-x64": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/@typescript/typescript-darwin-x64/-/typescript-darwin-x64-7.0.2.tgz",
      "integrity": "sha512-SZ9xZInqApNlNGc9s0W1VSsktYSOe9cFqNOIqmN1Gs8SmkjKZYFt017G4VwPxASInODuAdbTW7sXiFUf893RgA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=16.20.0"
      }
    },
    "node_modules/@typescript/typescript-freebsd-arm64": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/@typescript/typescript-freebsd-arm64/-/typescript-freebsd-arm64-7.0.2.tgz",
      "integrity": "sha512-W5NH4y/J0plIIS5b2xvTEkU7JFxyqdMAOgf+Ilhl0vHQXKO5dZoxd+C/jEtq56c4F3wk71RB4BMRQ2XdI+bwYQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=16.20.0"
      }
    },
    "node_modules/@typescript/typescript-freebsd-x64": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/@typescript/typescript-freebsd-x64/-/typescript-freebsd-x64-7.0.2.tgz",
      "integrity": "sha512-UMGDx5sTpzNw3WiPebH7l90IWfJggEd+egHt/q6p7/Cm3zqoV7VxkGXt+3DxPIw8CcmvAB0j3sVVfbhX+M4Tpw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=16.20.0"
      }
    },
    "node_modules/@typescript/typescript-linux-arm": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/@typescript/typescript-linux-arm/-/typescript-linux-arm-7.0.2.tgz",
      "integrity": "sha512-gffT3xPz9sR7j/YJExkyPntrI0P2EP9XbOyWzth2/Gs0RstK+90RBcO0ncXoXy/beYll1SXw846Nf2zdnEz0QQ==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=16.20.0"
      }
    },
    "node_modules/@typescript/typescript-linux-arm64": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/@typescript/typescript-linux-arm64/-/typescript-linux-arm64-7.0.2.tgz",
      "integrity": "sha512-Qh4eU4/y3yDjnfjjyPYihMj5/ODIlmt+Bzu17OI+fiSRDW57QmU5SiN63exPRNJPKUzcc1INa1NXdrJ+MqHjUQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=16.20.0"
      }
    },
    "node_modules/@typescript/typescript-linux-loong64": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/@typescript/typescript-linux-loong64/-/typescript-linux-loong64-7.0.2.tgz",
      "integrity": "sha512-uEHck9i8hoAzXPiYRib1O7miOnz23SxIeVl6F4LXox+qov1K35jHcEW6VHKvZI+pyvl7fZEP4MCU5LYvIq1GuQ==",
      "cpu": [
        "loong64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=16.20.0"
      }
    },
    "node_modules/@typescript/typescript-linux-mips64el": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/@typescript/typescript-linux-mips64el/-/typescript-linux-mips64el-7.0.2.tgz",
      "integrity": "sha512-R4KvAMnE43W5Qeqb0Ly56O3mWMWIAgsMyz36DCaycd5nbg/9kzm0liw3JocfRqyJY0KPmzFjbswozXyW0DnIYA==",
      "cpu": [
        "mips64el"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=16.20.0"
      }
    },
    "node_modules/@typescript/typescript-linux-ppc64": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/@typescript/typescript-linux-ppc64/-/typescript-linux-ppc64-7.0.2.tgz",
      "integrity": "sha512-DORx5b3sd/4S7eayxm4FQv+A7CrkUIGRaHiwI8oiHTAI1fAPWhF4J0vAlkC8biAlHSVVwxMQ3tjZ2/DVbnQiiA==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=16.20.0"
      }
    },
    "node_modules/@typescript/typescript-linux-riscv64": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/@typescript/typescript-linux-riscv64/-/typescript-linux-riscv64-7.0.2.tgz",
      "integrity": "sha512-wf0jqEDOjrPRnKwYRyyJDRo11KMbvMFrU+q4zqKyChODBzvlkbhNQfKvLxQCcwTpdDaXSHZTVuh0JoCrKCUMHQ==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=16.20.0"
      }
    },
    "node_modules/@typescript/typescript-linux-s390x": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/@typescript/typescript-linux-s390x/-/typescript-linux-s390x-7.0.2.tgz",
      "integrity": "sha512-IkwJc3L7yhytWd/ewjyxNDfOmswCm9GWMJT/ue/dU4aZNbwZeYAetq42VyLmsmSjvoX7z74X6ZaYCtzAr0EuGw==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=16.20.0"
      }
    },
    "node_modules/@typescript/typescript-linux-x64": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/@typescript/typescript-linux-x64/-/typescript-linux-x64-7.0.2.tgz",
      "integrity": "sha512-EYdf2cNg7rgCWJnxCdJ+F3V39O8ihb37eHAu1LK8oAFizgTQbPOK7zHHXbPt8rX24COqODXeI3sIf0fCXG7H/A==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=16.20.0"
      }
    },
    "node_modules/@typescript/typescript-netbsd-arm64": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/@typescript/typescript-netbsd-arm64/-/typescript-netbsd-arm64-7.0.2.tgz",
      "integrity": "sha512-+polYF4MF04aPpO5FTkHran9yUQDSXqy5GiSDKpsll5jy3l3+g9QLhpf39T+ePtefhXLOGrLl0QIjkQP6VnelA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "netbsd"
      ],
      "engines": {
        "node": ">=16.20.0"
      }
    },
    "node_modules/@typescript/typescript-netbsd-x64": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/@typescript/typescript-netbsd-x64/-/typescript-netbsd-x64-7.0.2.tgz",
      "integrity": "sha512-8YIT0EHM/3dq10ZOVF/A7pc/YSMtbcecct4rWtexrnSCHOPcpC2KTLXfTCR6vDpnSiY12heNb1GiN/wu+T/FyA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "netbsd"
      ],
      "engines": {
        "node": ">=16.20.0"
      }
    },
    "node_modules/@typescript/typescript-openbsd-arm64": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/@typescript/typescript-openbsd-arm64/-/typescript-openbsd-arm64-7.0.2.tgz",
      "integrity": "sha512-APT8+ClYnuYm1u9+kgGXoMj2VzWzcymwh2gNSQVySHfkRDGOTVkoWLjCmOQSaO+PoqQ57B0flRp9SA+7GnnkzQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "openbsd"
      ],
      "engines": {
        "node": ">=16.20.0"
      }
    },
    "node_modules/@typescript/typescript-openbsd-x64": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/@typescript/typescript-openbsd-x64/-/typescript-openbsd-x64-7.0.2.tgz",
      "integrity": "sha512-yX7s+Q0Dln0Dt9tEzZsAjXXR/+ytBM7AlglaqyeMPxQszJ1JhlJdZ6jLA+IzldHtflX81em7lDao1xXu+aRRkg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "openbsd"
      ],
      "engines": {
        "node": ">=16.20.0"
      }
    },
    "node_modules/@typescript/typescript-sunos-x64": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/@typescript/typescript-sunos-x64/-/typescript-sunos-x64-7.0.2.tgz",
      "integrity": "sha512-dLJDGaLZ1D4HPQn62u1n8mBDkJREwMsAkCdkwd4Ieqw+x3TUyTsqY0YiBCtE6H6OzzgGk3iuZ3vFWRS+E8/d1g==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "sunos"
      ],
      "engines": {
        "node": ">=16.20.0"
      }
    },
    "node_modules/@typescript/typescript-win32-arm64": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/@typescript/typescript-win32-arm64/-/typescript-win32-arm64-7.0.2.tgz",
      "integrity": "sha512-Gyl1Vy6OsWesLzmq+EP0Fb7b4Nid5232AvcA2SFcdYreldpNtYFFofPjnt62y9hQy7VTaZp65ICJjuAQRaVcIQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=16.20.0"
      }
    },
    "node_modules/@typescript/typescript-win32-x64": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/@typescript/typescript-win32-x64/-/typescript-win32-x64-7.0.2.tgz",
      "integrity": "sha512-0BQ3HkAHHlKLSp1qRvf3SUhGpGsDuhB/jgFw75guyqbxJqEaS0Cw/VFO8i2nHglJUzQCRtMMR/IBAKE3ETMC4g==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=16.20.0"
      }
    },
    "node_modules/accepts": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/accepts/-/accepts-2.0.0.tgz",
      "integrity": "sha512-5cvg6CtKwfgdmVqY1WIiXKc3Q1bkRqGLi+2W/6ao+6Y7gu/RCwRuAhGEzh5B4KlszSuTLgZYuqFqo5bImjNKng==",
      "license": "MIT",
      "dependencies": {
        "mime-types": "^3.0.0",
        "negotiator": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/acorn": {
      "version": "8.17.0",
      "resolved": "https://registry.npmjs.org/acorn/-/acorn-8.17.0.tgz",
      "integrity": "sha512-xRQbDb9BnwDafYNn6Vwl839DYVjqXYb1XVGtWAZ1kcDc6iwAL4hg3B1dZlRiuENFeO2H53gFG3in621AdERVAg==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "acorn": "bin/acorn"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/acorn-jsx": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/acorn-jsx/-/acorn-jsx-5.3.2.tgz",
      "integrity": "sha512-rq9s+JNhf0IChjtDXxllJ7g41oZk5SlXtp0LHwyA5cejwn7vKmKp4pPri6YEePv2PU65sAsegbXtIinmDFDXgQ==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "acorn": "^6.0.0 || ^7.0.0 || ^8.0.0"
      }
    },
    "node_modules/acorn-walk": {
      "version": "8.3.5",
      "resolved": "https://registry.npmjs.org/acorn-walk/-/acorn-walk-8.3.5.tgz",
      "integrity": "sha512-HEHNfbars9v4pgpW6SO1KSPkfoS0xVOM/9UzkJltjlsHZmJasxg8aXkuZa7SMf8vKGIBhpUsPluQSqhJFCqebw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "acorn": "^8.11.0"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/ajv": {
      "version": "6.15.0",
      "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.15.0.tgz",
      "integrity": "sha512-fgFx7Hfoq60ytK2c7DhnF8jIvzYgOMxfugjLOSMHjLIPgenqa7S7oaagATUq99mV6IYvN2tRmC0wnTYX6iPbMw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fast-deep-equal": "^3.1.1",
        "fast-json-stable-stringify": "^2.0.0",
        "json-schema-traverse": "^0.4.1",
        "uri-js": "^4.2.2"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/epoberezkin"
      }
    },
    "node_modules/anymatch": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.3.tgz",
      "integrity": "sha512-KMReFUr0B4t+D+OBkjR3KYqvocp2XaSzO55UcB6mgQMd3KbcE+mWTyvVV7D/zsdEbNnV6acZUutkiHQXvTr1Rw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "normalize-path": "^3.0.0",
        "picomatch": "^2.0.4"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/arg": {
      "version": "4.1.3",
      "resolved": "https://registry.npmjs.org/arg/-/arg-4.1.3.tgz",
      "integrity": "sha512-58S9QDqG0Xx27YwPSt9fJxivjYl432YCwfDMfZ+71RAqUrZef7LrKQZ3LHLOwCS4FLNBplP533Zx895SeOCHvA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/balanced-match": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-4.0.4.tgz",
      "integrity": "sha512-BLrgEcRTwX2o6gGxGOCNyMvGSp35YofuYzw9h1IMTRmKqttAZZVU67bdb9Pr2vUHA8+j3i2tJfjO6C6+4myGTA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "18 || 20 || >=22"
      }
    },
    "node_modules/bcryptjs": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/bcryptjs/-/bcryptjs-3.0.3.tgz",
      "integrity": "sha512-GlF5wPWnSa/X5LKM1o0wz0suXIINz1iHRLvTS+sLyi7XPbe5ycmYI3DlZqVGZZtDgl4DmasFg7gOB3JYbphV5g==",
      "license": "BSD-3-Clause",
      "bin": {
        "bcrypt": "bin/bcrypt"
      }
    },
    "node_modules/binary-extensions": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.3.0.tgz",
      "integrity": "sha512-Ceh+7ox5qe7LJuLHoY0feh3pHuUDHAcRUeyL2VYghZwfpkNIy/+8Ocg0a3UuSoYzavmylwuLWQOf3hl0jjMMIw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/body-parser": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/body-parser/-/body-parser-2.3.0.tgz",
      "integrity": "sha512-2cGmJupaNgg+QUwVLAucDuWuoMZ6EX9iHDRswZ5lsNYEmwPaRknMPCLZz07yTzVq/83p4o/wzbDZbBrTvGGTIw==",
      "license": "MIT",
      "dependencies": {
        "bytes": "^3.1.2",
        "content-type": "^2.0.0",
        "debug": "^4.4.3",
        "http-errors": "^2.0.1",
        "iconv-lite": "^0.7.2",
        "on-finished": "^2.4.1",
        "qs": "^6.15.2",
        "raw-body": "^3.0.2",
        "type-is": "^2.1.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/body-parser/node_modules/content-type": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/content-type/-/content-type-2.0.0.tgz",
      "integrity": "sha512-j/O/d7GcZCyNl7/hwZAb606rzqkyvaDctLmckbxLzHvFBzTJHuGEdodATcP3yIRoDrLHkIATJuvzbFlp/ki2cQ==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/brace-expansion": {
      "version": "5.0.7",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-5.0.7.tgz",
      "integrity": "sha512-7oFy703dxfY3/NLxC1fh2SUCQ0H9rmAY+5EpDVfXjUTTs+HEwR2nYaqLv+GWcTsumwxPfiz6CzCNkwXwBUwqCA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^4.0.2"
      },
      "engines": {
        "node": "18 || 20 || >=22"
      }
    },
    "node_modules/braces": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.3.tgz",
      "integrity": "sha512-yQbXgO/OSZVD2IsiLlro+7Hf6Q18EJrKSEsdoMzKePKXct3gvD8oLcOQdIzGupr5Fj+EDe8gO/lxc1BzfMpxvA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fill-range": "^7.1.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/bson": {
      "version": "7.3.1",
      "resolved": "https://registry.npmjs.org/bson/-/bson-7.3.1.tgz",
      "integrity": "sha512-h/C0qe6857pQhcSJHLfsR1uYGj98Ge3wKAD3Ed9KqH3wcVh+BM4Jq4xISD7vs9OPuT07n+q3QQVjslJ286j6ag==",
      "license": "Apache-2.0",
      "engines": {
        "node": ">=20.19.0"
      }
    },
    "node_modules/buffer-equal-constant-time": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/buffer-equal-constant-time/-/buffer-equal-constant-time-1.0.1.tgz",
      "integrity": "sha512-zRpUiDwd/xk6ADqPMATG8vc9VPrkck7T07OIx0gnjmJAnHnTVXNQG3vfvWNuiZIkwu9KrKdA1iJKfsfTVxE6NA==",
      "license": "BSD-3-Clause"
    },
    "node_modules/bytes": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.2.tgz",
      "integrity": "sha512-/Nf7TyzTx6S3yRJObOAV7956r8cr2+Oj8AC5dt8wSP3BQAoeX58NoHyCU8P8zGkNXStjTSi6fzO6F0pBdcYbEg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/call-bind-apply-helpers": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/call-bind-apply-helpers/-/call-bind-apply-helpers-1.0.2.tgz",
      "integrity": "sha512-Sp1ablJ0ivDkSzjcaJdxEunN5/XvksFJ2sMBFfq6x0ryhQV/2b/KwFe21cMpmHtPOSij8K99/wSfoEuTObmuMQ==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/call-bound": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/call-bound/-/call-bound-1.0.4.tgz",
      "integrity": "sha512-+ys997U96po4Kx/ABpBCqhA9EuxJaQWDQg7295H4hBphv3IZg0boBKuwYpt4YXp6MZ5AmZQnU/tyMTlRpaSejg==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "get-intrinsic": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/chokidar": {
      "version": "3.6.0",
      "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.6.0.tgz",
      "integrity": "sha512-7VT13fmjotKpGipCW9JEQAusEPE+Ei8nl6/g4FBAmIm0GOOLMua9NDDo/DWp0ZAxCr3cPq5ZpBqmPAQgDda2Pw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "anymatch": "~3.1.2",
        "braces": "~3.0.2",
        "glob-parent": "~5.1.2",
        "is-binary-path": "~2.1.0",
        "is-glob": "~4.0.1",
        "normalize-path": "~3.0.0",
        "readdirp": "~3.6.0"
      },
      "engines": {
        "node": ">= 8.10.0"
      },
      "funding": {
        "url": "https://paulmillr.com/funding/"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.2"
      }
    },
    "node_modules/chokidar/node_modules/glob-parent": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
      "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/content-disposition": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-1.1.0.tgz",
      "integrity": "sha512-5jRCH9Z/+DRP7rkvY83B+yGIGX96OYdJmzngqnw2SBSxqCFPd0w2km3s5iawpGX8krnwSGmF0FW5Nhr0Hfai3g==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/content-type": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/content-type/-/content-type-1.0.5.tgz",
      "integrity": "sha512-nTjqfcBFEipKdXCv4YDQWCfmcLZKm81ldF0pAopTvyrFGVbcR6P/VAAd5G7N+0tTr8QqiU0tFadD6FK4NtJwOA==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/cookie": {
      "version": "0.7.2",
      "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.7.2.tgz",
      "integrity": "sha512-yki5XnKuf750l50uGTllt6kKILY4nQ1eNIQatoXEByZ5dWgnKqbnqmTrBE5B4N7lrMJKQ2ytWMiTO2o0v6Ew/w==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/cookie-signature": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.2.2.tgz",
      "integrity": "sha512-D76uU73ulSXrD1UXF4KE2TMxVVwhsnCgfAyTg9k8P6KGZjlXKrOLe4dJQKI3Bxi5wjesZoFXJWElNWBjPZMbhg==",
      "license": "MIT",
      "engines": {
        "node": ">=6.6.0"
      }
    },
    "node_modules/cors": {
      "version": "2.8.6",
      "resolved": "https://registry.npmjs.org/cors/-/cors-2.8.6.tgz",
      "integrity": "sha512-tJtZBBHA6vjIAaF6EnIaq6laBBP9aq/Y3ouVJjEfoHbRBcHBAHYcMh/w8LDrk2PvIMMq8gmopa5D4V8RmbrxGw==",
      "license": "MIT",
      "dependencies": {
        "object-assign": "^4",
        "vary": "^1"
      },
      "engines": {
        "node": ">= 0.10"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/create-require": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/create-require/-/create-require-1.1.1.tgz",
      "integrity": "sha512-dcKFX3jn0MpIaXjisoRvexIJVEKzaq7z2rZKxf+MSr9TkdmHmsU4m2lcLojrj/FHl8mk5VxMmYA+ftRkP/3oKQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/cross-spawn": {
      "version": "7.0.6",
      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.6.tgz",
      "integrity": "sha512-uV2QOWP2nWzsy2aMp8aRibhi9dlzF5Hgh5SHaB9OiTGEyDTiJJyx0uy51QXdyWbtAHNua4XJzUKca3OzKUd3vA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "path-key": "^3.1.0",
        "shebang-command": "^2.0.0",
        "which": "^2.0.1"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/debug": {
      "version": "4.4.3",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.3.tgz",
      "integrity": "sha512-RGwwWnwQvkVfavKVt22FGLw+xYSdzARwm0ru6DhTVA3umU5hZc28V3kO4stgYryrTlLpuvgI9GiijltAjNbcqA==",
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.3"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/deep-is": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/deep-is/-/deep-is-0.1.4.tgz",
      "integrity": "sha512-oIPzksmTg4/MriiaYGO+okXDT7ztn/w3Eptv/+gSIdMdKsJo0u4CfYNFJPy+4SKMuCqGw2wxnA+URMg3t8a/bQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/depd": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/depd/-/depd-2.0.0.tgz",
      "integrity": "sha512-g7nH6P6dyDioJogAAGprGpCtVImJhpPk/roCzdb3fIh61/s/nPsfR6onyMwkCAR/OlC3yBC0lESvUoQEAssIrw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/diff": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/diff/-/diff-4.0.4.tgz",
      "integrity": "sha512-X07nttJQkwkfKfvTPG/KSnE2OMdcUCao6+eXF3wmnIQRn2aPAHH3VxDbDOdegkd6JbPsXqShpvEOHfAT+nCNwQ==",
      "dev": true,
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.3.1"
      }
    },
    "node_modules/dotenv": {
      "version": "17.4.2",
      "resolved": "https://registry.npmjs.org/dotenv/-/dotenv-17.4.2.tgz",
      "integrity": "sha512-nI4U3TottKAcAD9LLud4Cb7b2QztQMUEfHbvhTH09bqXTxnSie8WnjPALV/WMCrJZ6UV/qHJ6L03OqO3LcdYZw==",
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://dotenvx.com"
      }
    },
    "node_modules/dunder-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/dunder-proto/-/dunder-proto-1.0.1.tgz",
      "integrity": "sha512-KIN/nDJBQRcXw0MLVhZE9iQHmG68qAVIBg9CqmUYjmQIhgij9U5MFvrqkUL5FbtyyzZuOeOt0zdeRe4UY7ct+A==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.1",
        "es-errors": "^1.3.0",
        "gopd": "^1.2.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/ecdsa-sig-formatter": {
      "version": "1.0.11",
      "resolved": "https://registry.npmjs.org/ecdsa-sig-formatter/-/ecdsa-sig-formatter-1.0.11.tgz",
      "integrity": "sha512-nagl3RYrbNv6kQkeJIpt6NJZy8twLB/2vtz6yN9Z4vRKHN4/QZJIEbqohALSgwKdnksuY3k5Addp5lg8sVoVcQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "safe-buffer": "^5.0.1"
      }
    },
    "node_modules/ee-first": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",
      "integrity": "sha512-WMwm9LhRUo+WUaRN+vRuETqG89IgZphVSNkdFgeb6sS/E4OrDIN7t48CAewSHXc6C8lefD8KKfr5vY61brQlow==",
      "license": "MIT"
    },
    "node_modules/encodeurl": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-2.0.0.tgz",
      "integrity": "sha512-Q0n9HRi4m6JuGIV1eFlmvJB7ZEVxu93IrMyiMsGC0lrMJMWzRgx6WGquyfQgZVb31vhGgXnfmPNNXmxnOkRBrg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/es-define-property": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/es-define-property/-/es-define-property-1.0.1.tgz",
      "integrity": "sha512-e3nRfgfUZ4rNGL232gUgX06QNyyez04KdjFrF+LTRoOXmrOgFKDg4BCdsjW8EnT69eqdYGmRpJwiPVYNrCaW3g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-errors": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/es-errors/-/es-errors-1.3.0.tgz",
      "integrity": "sha512-Zf5H2Kxt2xjTvbJvP2ZWLEICxA6j+hAmMzIlypy4xcBg1vKVnx89Wy0GbS+kf5cwCVFFzdCFh2XSCFNULS6csw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-object-atoms": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/es-object-atoms/-/es-object-atoms-1.1.2.tgz",
      "integrity": "sha512-HWcBoN6NileqtSydK2FqHbS/LoDd2pqrnQHLyJzBj4kOp/ky2MWMN694xOfkK8/SnUsW2DH7EfyVlydKCsm1Zw==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/escape-html": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",
      "integrity": "sha512-NiSupZ4OeuGwr68lGIeym/ksIZMJodUGOSCZ/FSnTxcrekbvqrgdUxlJOMpijaKZVjAJrWrGs/6Jy8OMuyj9ow==",
      "license": "MIT"
    },
    "node_modules/escape-string-regexp": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-4.0.0.tgz",
      "integrity": "sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/eslint": {
      "version": "10.7.0",
      "resolved": "https://registry.npmjs.org/eslint/-/eslint-10.7.0.tgz",
      "integrity": "sha512-GVTD7s1vdIl6UYvAfriOPeY1Df8LIZjfofLvHwde+erDHGGuHyuM6xoxRxmHiebhYuD2p1vN4wWh0XzPARSGDQ==",
      "dev": true,
      "license": "MIT",
      "workspaces": [
        "packages/*"
      ],
      "dependencies": {
        "@eslint-community/eslint-utils": "^4.8.0",
        "@eslint-community/regexpp": "^4.12.2",
        "@eslint/config-array": "^0.23.5",
        "@eslint/config-helpers": "^0.6.0",
        "@eslint/core": "^1.2.1",
        "@eslint/plugin-kit": "^0.7.2",
        "@humanfs/node": "^0.16.6",
        "@humanwhocodes/module-importer": "^1.0.1",
        "@humanwhocodes/retry": "^0.4.2",
        "@types/estree": "^1.0.6",
        "ajv": "^6.14.0",
        "cross-spawn": "^7.0.6",
        "debug": "^4.3.2",
        "escape-string-regexp": "^4.0.0",
        "eslint-scope": "^9.1.2",
        "eslint-visitor-keys": "^5.0.1",
        "espree": "^11.2.0",
        "esquery": "^1.7.0",
        "esutils": "^2.0.2",
        "fast-deep-equal": "^3.1.3",
        "file-entry-cache": "^8.0.0",
        "find-up": "^5.0.0",
        "glob-parent": "^6.0.2",
        "ignore": "^5.2.0",
        "imurmurhash": "^0.1.4",
        "is-glob": "^4.0.0",
        "json-stable-stringify-without-jsonify": "^1.0.1",
        "minimatch": "^10.2.4",
        "natural-compare": "^1.4.0",
        "optionator": "^0.9.3"
      },
      "bin": {
        "eslint": "bin/eslint.js"
      },
      "engines": {
        "node": "^20.19.0 || ^22.13.0 || >=24"
      },
      "funding": {
        "url": "https://eslint.org/donate"
      },
      "peerDependencies": {
        "jiti": "*"
      },
      "peerDependenciesMeta": {
        "jiti": {
          "optional": true
        }
      }
    },
    "node_modules/eslint-scope": {
      "version": "9.1.2",
      "resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-9.1.2.tgz",
      "integrity": "sha512-xS90H51cKw0jltxmvmHy2Iai1LIqrfbw57b79w/J7MfvDfkIkFZ+kj6zC3BjtUwh150HsSSdxXZcsuv72miDFQ==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "@types/esrecurse": "^4.3.1",
        "@types/estree": "^1.0.8",
        "esrecurse": "^4.3.0",
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": "^20.19.0 || ^22.13.0 || >=24"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/eslint-visitor-keys": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-5.0.1.tgz",
      "integrity": "sha512-tD40eHxA35h0PEIZNeIjkHoDR4YjjJp34biM0mDvplBe//mB+IHCqHDGV7pxF+7MklTvighcCPPZC7ynWyjdTA==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^20.19.0 || ^22.13.0 || >=24"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/espree": {
      "version": "11.2.0",
      "resolved": "https://registry.npmjs.org/espree/-/espree-11.2.0.tgz",
      "integrity": "sha512-7p3DrVEIopW1B1avAGLuCSh1jubc01H2JHc8B4qqGblmg5gI9yumBgACjWo4JlIc04ufug4xJ3SQI8HkS/Rgzw==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "acorn": "^8.16.0",
        "acorn-jsx": "^5.3.2",
        "eslint-visitor-keys": "^5.0.1"
      },
      "engines": {
        "node": "^20.19.0 || ^22.13.0 || >=24"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/esquery": {
      "version": "1.7.0",
      "resolved": "https://registry.npmjs.org/esquery/-/esquery-1.7.0.tgz",
      "integrity": "sha512-Ap6G0WQwcU/LHsvLwON1fAQX9Zp0A2Y6Y/cJBl9r/JbW90Zyg4/zbG6zzKa2OTALELarYHmKu0GhpM5EO+7T0g==",
      "dev": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "estraverse": "^5.1.0"
      },
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/esrecurse": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/esrecurse/-/esrecurse-4.3.0.tgz",
      "integrity": "sha512-KmfKL3b6G+RXvP8N1vr3Tq1kL/oCFgn2NYXEtqP8/L3pKapUA4G8cFVaoF3SU323CD4XypR/ffioHmkti6/Tag==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/estraverse": {
      "version": "5.3.0",
      "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.3.0.tgz",
      "integrity": "sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/esutils": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
      "integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/etag": {
      "version": "1.8.1",
      "resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",
      "integrity": "sha512-aIL5Fx7mawVa300al2BnEE4iNvo1qETxLrPI/o05L7z6go7fCw1J6EQmbK4FmJ2AS7kgVF/KEZWufBfdClMcPg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/express": {
      "version": "5.2.1",
      "resolved": "https://registry.npmjs.org/express/-/express-5.2.1.tgz",
      "integrity": "sha512-hIS4idWWai69NezIdRt2xFVofaF4j+6INOpJlVOLDO8zXGpUVEVzIYk12UUi2JzjEzWL3IOAxcTubgz9Po0yXw==",
      "license": "MIT",
      "dependencies": {
        "accepts": "^2.0.0",
        "body-parser": "^2.2.1",
        "content-disposition": "^1.0.0",
        "content-type": "^1.0.5",
        "cookie": "^0.7.1",
        "cookie-signature": "^1.2.1",
        "debug": "^4.4.0",
        "depd": "^2.0.0",
        "encodeurl": "^2.0.0",
        "escape-html": "^1.0.3",
        "etag": "^1.8.1",
        "finalhandler": "^2.1.0",
        "fresh": "^2.0.0",
        "http-errors": "^2.0.0",
        "merge-descriptors": "^2.0.0",
        "mime-types": "^3.0.0",
        "on-finished": "^2.4.1",
        "once": "^1.4.0",
        "parseurl": "^1.3.3",
        "proxy-addr": "^2.0.7",
        "qs": "^6.14.0",
        "range-parser": "^1.2.1",
        "router": "^2.2.0",
        "send": "^1.1.0",
        "serve-static": "^2.2.0",
        "statuses": "^2.0.1",
        "type-is": "^2.0.1",
        "vary": "^1.1.2"
      },
      "engines": {
        "node": ">= 18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/fast-deep-equal": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
      "integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-json-stable-stringify": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz",
      "integrity": "sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-levenshtein": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz",
      "integrity": "sha512-DCXu6Ifhqcks7TZKY3Hxp3y6qphY5SJZmrWMDrKcERSOXWQdMhU9Ig/PYrzyw/ul9jOIyh0N4M0tbC5hodg8dw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/file-entry-cache": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/file-entry-cache/-/file-entry-cache-8.0.0.tgz",
      "integrity": "sha512-XXTUwCvisa5oacNGRP9SfNtYBNAMi+RPwBFmblZEF7N7swHYQS6/Zfk7SRwx4D5j3CH211YNRco1DEMNVfZCnQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "flat-cache": "^4.0.0"
      },
      "engines": {
        "node": ">=16.0.0"
      }
    },
    "node_modules/fill-range": {
      "version": "7.1.1",
      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.1.1.tgz",
      "integrity": "sha512-YsGpe3WHLK8ZYi4tWDg2Jy3ebRz2rXowDxnld4bkQB00cc/1Zw9AWnC0i9ztDJitivtQvaI9KaLyKrc+hBW0yg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "to-regex-range": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/finalhandler": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-2.1.1.tgz",
      "integrity": "sha512-S8KoZgRZN+a5rNwqTxlZZePjT/4cnm0ROV70LedRHZ0p8u9fRID0hJUZQpkKLzro8LfmC8sx23bY6tVNxv8pQA==",
      "license": "MIT",
      "dependencies": {
        "debug": "^4.4.0",
        "encodeurl": "^2.0.0",
        "escape-html": "^1.0.3",
        "on-finished": "^2.4.1",
        "parseurl": "^1.3.3",
        "statuses": "^2.0.1"
      },
      "engines": {
        "node": ">= 18.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/find-up": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-5.0.0.tgz",
      "integrity": "sha512-78/PXT1wlLLDgTzDs7sjq9hzz0vXD+zn+7wypEe4fXQxCmdmqfGsEPQxmiCSQI3ajFV91bVSsvNtrJRiW6nGng==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "locate-path": "^6.0.0",
        "path-exists": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/flat-cache": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/flat-cache/-/flat-cache-4.0.1.tgz",
      "integrity": "sha512-f7ccFPK3SXFHpx15UIGyRJ/FJQctuKZ0zVuN3frBo4HnK3cay9VEW0R6yPYFHC0AgqhukPzKjq22t5DmAyqGyw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "flatted": "^3.2.9",
        "keyv": "^4.5.4"
      },
      "engines": {
        "node": ">=16"
      }
    },
    "node_modules/flatted": {
      "version": "3.4.2",
      "resolved": "https://registry.npmjs.org/flatted/-/flatted-3.4.2.tgz",
      "integrity": "sha512-PjDse7RzhcPkIJwy5t7KPWQSZ9cAbzQXcafsetQoD7sOJRQlGikNbx7yZp2OotDnJyrDcbyRq3Ttb18iYOqkxA==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/forwarded": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/forwarded/-/forwarded-0.2.0.tgz",
      "integrity": "sha512-buRG0fpBtRHSTCOASe6hD258tEubFoRLb4ZNA6NxMVHNw2gOcwHo9wyablzMzOA5z9xA9L1KNjk/Nt6MT9aYow==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/fresh": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/fresh/-/fresh-2.0.0.tgz",
      "integrity": "sha512-Rx/WycZ60HOaqLKAi6cHRKKI7zxWbJ31MhntmtwMoaTeF7XFH9hhBp8vITaMidfljRQ6eYWCKkaTK+ykVJHP2A==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/fsevents": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
      "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/function-bind": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.2.tgz",
      "integrity": "sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-intrinsic": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.3.0.tgz",
      "integrity": "sha512-9fSjSaos/fRIVIp+xSJlE6lfwhES7LNtKaCBIamHsjr2na1BiABJPo0mOjjz8GJDURarmCPGqaiVg5mfjb98CQ==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "es-define-property": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.1",
        "function-bind": "^1.1.2",
        "get-proto": "^1.0.1",
        "gopd": "^1.2.0",
        "has-symbols": "^1.1.0",
        "hasown": "^2.0.2",
        "math-intrinsics": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/get-proto/-/get-proto-1.0.1.tgz",
      "integrity": "sha512-sTSfBjoXBp89JvIKIefqw7U2CCebsc74kiY6awiGogKtoSGbgjYE/G/+l9sF3MWFPNc9IcoOC4ODfKHfxFmp0g==",
      "license": "MIT",
      "dependencies": {
        "dunder-proto": "^1.0.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/glob-parent": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-6.0.2.tgz",
      "integrity": "sha512-XxwI8EOhVQgWp6iDL+3b0r86f4d6AX6zSU55HfB4ydCEuXLXc5FcYeOu+nnGftS4TEju/11rt4KJPTMgbfmv4A==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.3"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/gopd": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/gopd/-/gopd-1.2.0.tgz",
      "integrity": "sha512-ZUKRh6/kUFoAiTAtTYPZJ3hw9wNxx+BIBOijnlG9PnrJsCcSjs1wyyD6vJpaYtgnzDrKYRSqf3OO6Rfa93xsRg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-flag": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
      "integrity": "sha512-sKJf1+ceQBr4SMkvQnBDNDtf4TXpVhVGateu0t918bl30FnbE2m4vNLX+VWe/dpjlb+HugGYzW7uQXH98HPEYw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/has-symbols": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.1.0.tgz",
      "integrity": "sha512-1cDNdwJ2Jaohmb3sg4OmKaMBwuC48sYni5HUw2DvsC8LjGTLK9h+eb1X6RyuOHe4hT0ULCW68iomhjUoKUqlPQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/hasown": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/hasown/-/hasown-2.0.4.tgz",
      "integrity": "sha512-T2UbfbBEF32wiepXIsMlTW9+dDYC6wMh/t/vYA4tuOMKqWz/n3vr1NFSxQiyP+zk2mXsoMA/i/7qV6LKut1t1A==",
      "license": "MIT",
      "dependencies": {
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/http-errors": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-2.0.1.tgz",
      "integrity": "sha512-4FbRdAX+bSdmo4AUFuS0WNiPz8NgFt+r8ThgNWmlrjQjt1Q7ZR9+zTlce2859x4KSXrwIsaeTqDoKQmtP8pLmQ==",
      "license": "MIT",
      "dependencies": {
        "depd": "~2.0.0",
        "inherits": "~2.0.4",
        "setprototypeof": "~1.2.0",
        "statuses": "~2.0.2",
        "toidentifier": "~1.0.1"
      },
      "engines": {
        "node": ">= 0.8"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/iconv-lite": {
      "version": "0.7.3",
      "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.7.3.tgz",
      "integrity": "sha512-IKXpvIzjnC9XTAUbVBcMfGS0EPaIXtW6v+zr+RRp+hqULEpo0owZax6wyRwPOJbWbzjYspQwusTsfVr0ifh4uQ==",
      "license": "MIT",
      "dependencies": {
        "safer-buffer": ">= 2.1.2 < 3.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/ignore": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/ignore/-/ignore-5.3.2.tgz",
      "integrity": "sha512-hsBTNUqQTDwkWtcdYI2i06Y/nUBEsNEDJKjWdigLvegy8kDuJAS8uRlpkkcQpyEXL0Z/pjDy5HBmMjRCJ2gq+g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/ignore-by-default": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/ignore-by-default/-/ignore-by-default-1.0.1.tgz",
      "integrity": "sha512-Ius2VYcGNk7T90CppJqcIkS5ooHUZyIQK+ClZfMfMNFEF9VSE73Fq+906u/CWu92x4gzZMWOwfFYckPObzdEbA==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/imurmurhash": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
      "integrity": "sha512-JmXMZ6wuvDmLiHEml9ykzqO6lwFbof0GG4IkcGaENdCRDDmMVnny7s5HsIgHCbaq0w2MyPhDqkhTUgS2LU2PHA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.8.19"
      }
    },
    "node_modules/inherits": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
      "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
      "license": "ISC"
    },
    "node_modules/ipaddr.js": {
      "version": "1.9.1",
      "resolved": "https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-1.9.1.tgz",
      "integrity": "sha512-0KI/607xoxSToH7GjN1FfSbLoU0+btTicjsQSWQlh/hZykN8KpmMf7uYwPW3R+akZ6R/w18ZlXSHBYXiYUPO3g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/is-binary-path": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-2.1.0.tgz",
      "integrity": "sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "binary-extensions": "^2.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-extglob": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
      "integrity": "sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-glob": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz",
      "integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-extglob": "^2.1.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-number": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
      "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.12.0"
      }
    },
    "node_modules/is-promise": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/is-promise/-/is-promise-4.0.0.tgz",
      "integrity": "sha512-hvpoI6korhJMnej285dSg6nu1+e6uxs7zG3BYAm5byqDsgJNWwxzM6z6iZiAgQR4TJ30JmBTOwqZUw3WlyH3AQ==",
      "license": "MIT"
    },
    "node_modules/isexe": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
      "integrity": "sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/json-buffer": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/json-buffer/-/json-buffer-3.0.1.tgz",
      "integrity": "sha512-4bV5BfR2mqfQTJm+V5tPPdf+ZpuhiIvTuAB5g8kcrXOZpTT/QwwVRWBywX1ozr6lEuPdbHxwaJlm9G6mI2sfSQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json-schema-traverse": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
      "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json-stable-stringify-without-jsonify": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/json-stable-stringify-without-jsonify/-/json-stable-stringify-without-jsonify-1.0.1.tgz",
      "integrity": "sha512-Bdboy+l7tA3OGW6FjyFHWkP5LuByj1Tk33Ljyq0axyzdk9//JSi2u3fP1QSmd1KNwq6VOKYGlAu87CisVir6Pw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/jsonwebtoken": {
      "version": "9.0.3",
      "resolved": "https://registry.npmjs.org/jsonwebtoken/-/jsonwebtoken-9.0.3.tgz",
      "integrity": "sha512-MT/xP0CrubFRNLNKvxJ2BYfy53Zkm++5bX9dtuPbqAeQpTVe0MQTFhao8+Cp//EmJp244xt6Drw/GVEGCUj40g==",
      "license": "MIT",
      "dependencies": {
        "jws": "^4.0.1",
        "lodash.includes": "^4.3.0",
        "lodash.isboolean": "^3.0.3",
        "lodash.isinteger": "^4.0.4",
        "lodash.isnumber": "^3.0.3",
        "lodash.isplainobject": "^4.0.6",
        "lodash.isstring": "^4.0.1",
        "lodash.once": "^4.0.0",
        "ms": "^2.1.1",
        "semver": "^7.5.4"
      },
      "engines": {
        "node": ">=12",
        "npm": ">=6"
      }
    },
    "node_modules/jwa": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/jwa/-/jwa-2.0.1.tgz",
      "integrity": "sha512-hRF04fqJIP8Abbkq5NKGN0Bbr3JxlQ+qhZufXVr0DvujKy93ZCbXZMHDL4EOtodSbCWxOqR8MS1tXA5hwqCXDg==",
      "license": "MIT",
      "dependencies": {
        "buffer-equal-constant-time": "^1.0.1",
        "ecdsa-sig-formatter": "1.0.11",
        "safe-buffer": "^5.0.1"
      }
    },
    "node_modules/jws": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/jws/-/jws-4.0.1.tgz",
      "integrity": "sha512-EKI/M/yqPncGUUh44xz0PxSidXFr/+r0pA70+gIYhjv+et7yxM+s29Y+VGDkovRofQem0fs7Uvf4+YmAdyRduA==",
      "license": "MIT",
      "dependencies": {
        "jwa": "^2.0.1",
        "safe-buffer": "^5.0.1"
      }
    },
    "node_modules/kareem": {
      "version": "3.3.0",
      "resolved": "https://registry.npmjs.org/kareem/-/kareem-3.3.0.tgz",
      "integrity": "sha512-kpSuLD3/7RenBnjnJdOHXCKC8dTd1JzeOiJhN0necWWci6cC+qX+VuwPnMVgb+a4+KNJSfgqahpnfWaeDXCimw==",
      "license": "Apache-2.0",
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/keyv": {
      "version": "4.5.4",
      "resolved": "https://registry.npmjs.org/keyv/-/keyv-4.5.4.tgz",
      "integrity": "sha512-oxVHkHR/EJf2CNXnWxRLW6mg7JyCCUcG0DtEGmL2ctUo1PNTin1PUil+r/+4r5MpVgC/fn1kjsx7mjSujKqIpw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "json-buffer": "3.0.1"
      }
    },
    "node_modules/levn": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/levn/-/levn-0.4.1.tgz",
      "integrity": "sha512-+bT2uH4E5LGE7h/n3evcS/sQlJXCpIp6ym8OWJ5eV6+67Dsql/LaaT7qJBAt2rzfoa/5QBGBhxDix1dMt2kQKQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "prelude-ls": "^1.2.1",
        "type-check": "~0.4.0"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/locate-path": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-6.0.0.tgz",
      "integrity": "sha512-iPZK6eYjbxRu3uB4/WZ3EsEIMJFMqAoopl3R+zuq0UjcAm/MO6KCweDgPfP3elTztoKP3KtnVHxTn2NHBSDVUw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-locate": "^5.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/lodash.includes": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/lodash.includes/-/lodash.includes-4.3.0.tgz",
      "integrity": "sha512-W3Bx6mdkRTGtlJISOvVD/lbqjTlPPUDTMnlXZFnVwi9NKJ6tiAk6LVdlhZMm17VZisqhKcgzpO5Wz91PCt5b0w==",
      "license": "MIT"
    },
    "node_modules/lodash.isboolean": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/lodash.isboolean/-/lodash.isboolean-3.0.3.tgz",
      "integrity": "sha512-Bz5mupy2SVbPHURB98VAcw+aHh4vRV5IPNhILUCsOzRmsTmSQ17jIuqopAentWoehktxGd9e/hbIXq980/1QJg==",
      "license": "MIT"
    },
    "node_modules/lodash.isinteger": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/lodash.isinteger/-/lodash.isinteger-4.0.4.tgz",
      "integrity": "sha512-DBwtEWN2caHQ9/imiNeEA5ys1JoRtRfY3d7V9wkqtbycnAmTvRRmbHKDV4a0EYc678/dia0jrte4tjYwVBaZUA==",
      "license": "MIT"
    },
    "node_modules/lodash.isnumber": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/lodash.isnumber/-/lodash.isnumber-3.0.3.tgz",
      "integrity": "sha512-QYqzpfwO3/CWf3XP+Z+tkQsfaLL/EnUlXWVkIk5FUPc4sBdTehEqZONuyRt2P67PXAk+NXmTBcc97zw9t1FQrw==",
      "license": "MIT"
    },
    "node_modules/lodash.isplainobject": {
      "version": "4.0.6",
      "resolved": "https://registry.npmjs.org/lodash.isplainobject/-/lodash.isplainobject-4.0.6.tgz",
      "integrity": "sha512-oSXzaWypCMHkPC3NvBEaPHf0KsA5mvPrOPgQWDsbg8n7orZ290M0BmC/jgRZ4vcJ6DTAhjrsSYgdsW/F+MFOBA==",
      "license": "MIT"
    },
    "node_modules/lodash.isstring": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/lodash.isstring/-/lodash.isstring-4.0.1.tgz",
      "integrity": "sha512-0wJxfxH1wgO3GrbuP+dTTk7op+6L41QCXbGINEmD+ny/G/eCqGzxyCsh7159S+mgDDcoarnBw6PC1PS5+wUGgw==",
      "license": "MIT"
    },
    "node_modules/lodash.once": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/lodash.once/-/lodash.once-4.1.1.tgz",
      "integrity": "sha512-Sb487aTOCr9drQVL8pIxOzVhafOjZN9UU54hiN8PU3uAiSV7lx1yYNpbNmex2PK6dSJoNTSJUUswT651yww3Mg==",
      "license": "MIT"
    },
    "node_modules/make-error": {
      "version": "1.3.6",
      "resolved": "https://registry.npmjs.org/make-error/-/make-error-1.3.6.tgz",
      "integrity": "sha512-s8UhlNe7vPKomQhC1qFelMokr/Sc3AgNbso3n74mVPA5LTZwkB9NlXf4XPamLxJE8h0gh73rM94xvwRT2CVInw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/math-intrinsics": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/math-intrinsics/-/math-intrinsics-1.1.0.tgz",
      "integrity": "sha512-/IXtbwEk5HTPyEwyKX6hGkYXxM9nbj64B+ilVJnC/R6B0pH5G4V3b0pVbL7DBj4tkhBAppbQUlf6F6Xl9LHu1g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/media-typer": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/media-typer/-/media-typer-1.1.0.tgz",
      "integrity": "sha512-aisnrDP4GNe06UcKFnV5bfMNPBUw4jsLGaWwWfnH3v02GnBuXX2MCVn5RbrWo0j3pczUilYblq7fQ7Nw2t5XKw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/memory-pager": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/memory-pager/-/memory-pager-1.5.0.tgz",
      "integrity": "sha512-ZS4Bp4r/Zoeq6+NLJpP+0Zzm0pR8whtGPf1XExKLJBAczGMnSi3It14OiNCStjQjM6NU1okjQGSxgEZN8eBYKg==",
      "license": "MIT"
    },
    "node_modules/merge-descriptors": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-2.0.0.tgz",
      "integrity": "sha512-Snk314V5ayFLhp3fkUREub6WtjBfPdCPY1Ln8/8munuLuiYhsABgBVWsozAG+MWMbVEvcdcpbi9R7ww22l9Q3g==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/mime-db": {
      "version": "1.54.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.54.0.tgz",
      "integrity": "sha512-aU5EJuIN2WDemCcAp2vFBfp/m4EAhWJnUNSSw0ixs7/kXbd6Pg64EmwJkNdFhB8aWt1sH2CTXrLxo/iAGV3oPQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/mime-types": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-3.0.2.tgz",
      "integrity": "sha512-Lbgzdk0h4juoQ9fCKXW4by0UJqj+nOOrI9MJ1sSj4nI8aI2eo1qmvQEie4VD1glsS250n15LsWsYtCugiStS5A==",
      "license": "MIT",
      "dependencies": {
        "mime-db": "^1.54.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/minimatch": {
      "version": "10.2.5",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-10.2.5.tgz",
      "integrity": "sha512-MULkVLfKGYDFYejP07QOurDLLQpcjk7Fw+7jXS2R2czRQzR56yHRveU5NDJEOviH+hETZKSkIk5c+T23GjFUMg==",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "dependencies": {
        "brace-expansion": "^5.0.5"
      },
      "engines": {
        "node": "18 || 20 || >=22"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/mongodb": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/mongodb/-/mongodb-7.2.0.tgz",
      "integrity": "sha512-F/2+BMZtLVhY30ioZp0dAmZ+IRZMBqI+nrv6t5+9/1AIwCa8sMRC3jBf81lpxMhnZgqq8CoUD503Z1oZWq1/sw==",
      "license": "Apache-2.0",
      "dependencies": {
        "@mongodb-js/saslprep": "^1.3.0",
        "bson": "^7.2.0",
        "mongodb-connection-string-url": "^7.0.0"
      },
      "engines": {
        "node": ">=20.19.0"
      },
      "peerDependencies": {
        "@aws-sdk/credential-providers": "^3.806.0",
        "@mongodb-js/zstd": "^7.0.0",
        "gcp-metadata": "^7.0.1",
        "kerberos": "^7.0.0",
        "mongodb-client-encryption": ">=7.0.0 <7.1.0",
        "snappy": "^7.3.2",
        "socks": "^2.8.6"
      },
      "peerDependenciesMeta": {
        "@aws-sdk/credential-providers": {
          "optional": true
        },
        "@mongodb-js/zstd": {
          "optional": true
        },
        "gcp-metadata": {
          "optional": true
        },
        "kerberos": {
          "optional": true
        },
        "mongodb-client-encryption": {
          "optional": true
        },
        "snappy": {
          "optional": true
        },
        "socks": {
          "optional": true
        }
      }
    },
    "node_modules/mongodb-connection-string-url": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/mongodb-connection-string-url/-/mongodb-connection-string-url-7.0.2.tgz",
      "integrity": "sha512-ZoS07RoFqpKYQwAk59qmrx8+jJHNHU30UjlU96QktiGn1ltvDr+vCznLX5DiUBLEpMAHatHNWV1nM/74ul66kA==",
      "license": "Apache-2.0",
      "dependencies": {
        "@types/whatwg-url": "^13.0.0",
        "whatwg-url": "^14.1.0"
      },
      "engines": {
        "node": ">=20.19.0"
      }
    },
    "node_modules/mongoose": {
      "version": "9.7.4",
      "resolved": "https://registry.npmjs.org/mongoose/-/mongoose-9.7.4.tgz",
      "integrity": "sha512-nuSYGUWWzNd4EAbGYxE469wPTL+kmxb5+91YvCvMkJ08rvNRht/usZUU3LuFuk7rDutF2QWBZHPHuzM8TxXApA==",
      "license": "MIT",
      "dependencies": {
        "@standard-schema/spec": "^1.1.0",
        "kareem": "3.3.0",
        "mongodb": "~7.2",
        "mpath": "0.9.0",
        "mquery": "6.0.0",
        "ms": "2.1.3",
        "sift": "17.1.3"
      },
      "engines": {
        "node": ">=20.19.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/mongoose"
      }
    },
    "node_modules/mpath": {
      "version": "0.9.0",
      "resolved": "https://registry.npmjs.org/mpath/-/mpath-0.9.0.tgz",
      "integrity": "sha512-ikJRQTk8hw5DEoFVxHG1Gn9T/xcjtdnOKIU1JTmGjZZlg9LST2mBLmcX3/ICIbgJydT2GOc15RnNy5mHmzfSew==",
      "license": "MIT",
      "engines": {
        "node": ">=4.0.0"
      }
    },
    "node_modules/mquery": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/mquery/-/mquery-6.0.0.tgz",
      "integrity": "sha512-b2KQNsmgtkscfeDgkYMcWGn9vZI9YoXh802VDEwE6qc50zxBFQ0Oo8ROkawbPAsXCY1/Z1yp0MagqsZStPWJjw==",
      "license": "MIT",
      "engines": {
        "node": ">=20.19.0"
      }
    },
    "node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
      "license": "MIT"
    },
    "node_modules/natural-compare": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/natural-compare/-/natural-compare-1.4.0.tgz",
      "integrity": "sha512-OWND8ei3VtNC9h7V60qff3SVobHr996CTwgxubgyQYEpg290h9J0buyECNNJexkFm5sOajh5G116RYA1c8ZMSw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/negotiator": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-1.0.0.tgz",
      "integrity": "sha512-8Ofs/AUQh8MaEcrlq5xOX0CQ9ypTF5dl78mjlMNfOK08fzpgTHQRQPBxcPlEtIw0yRpws+Zo/3r+5WRby7u3Gg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/nodemon": {
      "version": "3.1.14",
      "resolved": "https://registry.npmjs.org/nodemon/-/nodemon-3.1.14.tgz",
      "integrity": "sha512-jakjZi93UtB3jHMWsXL68FXSAosbLfY0In5gtKq3niLSkrWznrVBzXFNOEMJUfc9+Ke7SHWoAZsiMkNP3vq6Jw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "chokidar": "^3.5.2",
        "debug": "^4",
        "ignore-by-default": "^1.0.1",
        "minimatch": "^10.2.1",
        "pstree.remy": "^1.1.8",
        "semver": "^7.5.3",
        "simple-update-notifier": "^2.0.0",
        "supports-color": "^5.5.0",
        "touch": "^3.1.0",
        "undefsafe": "^2.0.5"
      },
      "bin": {
        "nodemon": "bin/nodemon.js"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/nodemon"
      }
    },
    "node_modules/normalize-path": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
      "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-assign": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
      "integrity": "sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-inspect": {
      "version": "1.13.4",
      "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.13.4.tgz",
      "integrity": "sha512-W67iLl4J2EXEGTbfeHCffrjDfitvLANg0UlX3wFUUSTx92KXRFegMHUVgSqE+wvhAbi4WqjGg9czysTV2Epbew==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/on-finished": {
      "version": "2.4.1",
      "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.4.1.tgz",
      "integrity": "sha512-oVlzkg3ENAhCk2zdv7IJwd/QUD4z2RxRwpkcGY8psCVcCYZNq4wYnVWALHM+brtuJjePWiYF/ClmuDr8Ch5+kg==",
      "license": "MIT",
      "dependencies": {
        "ee-first": "1.1.1"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/once": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
      "integrity": "sha512-lNaJgI+2Q5URQBkccEKHTQOPaXdUxnZZElQTZY0MFUAuaEqe1E+Nyvgdz/aIyNi6Z9MzO5dv1H8n58/GELp3+w==",
      "license": "ISC",
      "dependencies": {
        "wrappy": "1"
      }
    },
    "node_modules/optionator": {
      "version": "0.9.4",
      "resolved": "https://registry.npmjs.org/optionator/-/optionator-0.9.4.tgz",
      "integrity": "sha512-6IpQ7mKUxRcZNLIObR0hz7lxsapSSIYNZJwXPGeF0mTVqGKFIXj1DQcMoT22S3ROcLyY/rz0PWaWZ9ayWmad9g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "deep-is": "^0.1.3",
        "fast-levenshtein": "^2.0.6",
        "levn": "^0.4.1",
        "prelude-ls": "^1.2.1",
        "type-check": "^0.4.0",
        "word-wrap": "^1.2.5"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/p-limit": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-3.1.0.tgz",
      "integrity": "sha512-TYOanM3wGwNGsZN2cVTYPArw454xnXj5qmWF1bEoAc4+cU/ol7GVh7odevjp1FNHduHc3KZMcFduxU5Xc6uJRQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "yocto-queue": "^0.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/p-locate": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-5.0.0.tgz",
      "integrity": "sha512-LaNjtRWUBY++zB5nE/NwcaoMylSPk+S+ZHNB1TzdbMJMny6dynpAGt7X/tl/QYq3TIeE6nxHppbo2LGymrG5Pw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-limit": "^3.0.2"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/parseurl": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz",
      "integrity": "sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/path-exists": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
      "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-key": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz",
      "integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-to-regexp": {
      "version": "8.4.2",
      "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-8.4.2.tgz",
      "integrity": "sha512-qRcuIdP69NPm4qbACK+aDogI5CBDMi1jKe0ry5rSQJz8JVLsC7jV8XpiJjGRLLol3N+R5ihGYcrPLTno6pAdBA==",
      "license": "MIT",
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/picomatch": {
      "version": "2.3.2",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.2.tgz",
      "integrity": "sha512-V7+vQEJ06Z+c5tSye8S+nHUfI51xoXIXjHQ99cQtKUkQqqO1kO/KCJUfZXuB47h/YBlDhah2H3hdUGXn8ie0oA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/prelude-ls": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.2.1.tgz",
      "integrity": "sha512-vkcDPrRZo1QZLbn5RLGPpg/WmIQ65qoWWhcGKf/b5eplkkarX0m9z8ppCat4mlOqUsWpyNuYgO3VRyrYHSzX5g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/prettier": {
      "version": "3.9.5",
      "resolved": "https://registry.npmjs.org/prettier/-/prettier-3.9.5.tgz",
      "integrity": "sha512-/FVl766LpUfB5vXgCYOYa0MeV/441Ia99AeICQIQFTY/Nw0roZwULcXpku5i1/m5kt/baz+s4Zogspd839HSMg==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "prettier": "bin/prettier.cjs"
      },
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/prettier/prettier?sponsor=1"
      }
    },
    "node_modules/proxy-addr": {
      "version": "2.0.7",
      "resolved": "https://registry.npmjs.org/proxy-addr/-/proxy-addr-2.0.7.tgz",
      "integrity": "sha512-llQsMLSUDUPT44jdrU/O37qlnifitDP+ZwrmmZcoSKyLKvtZxpyV0n2/bD/N4tBAAZ/gJEdZU7KMraoK1+XYAg==",
      "license": "MIT",
      "dependencies": {
        "forwarded": "0.2.0",
        "ipaddr.js": "1.9.1"
      },
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/pstree.remy": {
      "version": "1.1.8",
      "resolved": "https://registry.npmjs.org/pstree.remy/-/pstree.remy-1.1.8.tgz",
      "integrity": "sha512-77DZwxQmxKnu3aR542U+X8FypNzbfJ+C5XQDk3uWjWxn6151aIMGthWYRXTqT1E5oJvg+ljaa2OJi+VfvCOQ8w==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/punycode": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.3.1.tgz",
      "integrity": "sha512-vYt7UD1U9Wg6138shLtLOvdAu+8DsC/ilFtEVHcH+wydcSpNE20AfSOduf6MkRFahL5FY7X1oU7nKVZFtfq8Fg==",
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/qs": {
      "version": "6.15.3",
      "resolved": "https://registry.npmjs.org/qs/-/qs-6.15.3.tgz",
      "integrity": "sha512-O9gl3zCl5h5blw1KGUzQKhA5oUXSl8rwUIM5o0S3nCXMliSvy5Dzx7/DJcI+SwgICv+IneSZwhBh1oSyEHA71A==",
      "license": "BSD-3-Clause",
      "dependencies": {
        "es-define-property": "^1.0.1",
        "side-channel": "^1.1.1"
      },
      "engines": {
        "node": ">=0.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/range-parser": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.3.0.tgz",
      "integrity": "sha512-hek2mFQpPuI4E1BBKrSto+BU3e3x4xuarsbiwr3+lf7p44juvFMV0XFWQAP3xUyqXA4RrXLIoaSUGbSt056ZMw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/raw-body": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/raw-body/-/raw-body-3.0.2.tgz",
      "integrity": "sha512-K5zQjDllxWkf7Z5xJdV0/B0WTNqx6vxG70zJE4N0kBs4LovmEYWJzQGxC9bS9RAKu3bgM40lrd5zoLJ12MQ5BA==",
      "license": "MIT",
      "dependencies": {
        "bytes": "~3.1.2",
        "http-errors": "~2.0.1",
        "iconv-lite": "~0.7.0",
        "unpipe": "~1.0.0"
      },
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/readdirp": {
      "version": "3.6.0",
      "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-3.6.0.tgz",
      "integrity": "sha512-hOS089on8RduqdbhvQ5Z37A0ESjsqz6qnRcffsMU3495FuTdqSm+7bhJ29JvIOsBDEEnan5DPu9t3To9VRlMzA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "picomatch": "^2.2.1"
      },
      "engines": {
        "node": ">=8.10.0"
      }
    },
    "node_modules/router": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/router/-/router-2.2.0.tgz",
      "integrity": "sha512-nLTrUKm2UyiL7rlhapu/Zl45FwNgkZGaCpZbIHajDYgwlJCOzLSk+cIPAnsEqV955GjILJnKbdQC1nVPz+gAYQ==",
      "license": "MIT",
      "dependencies": {
        "debug": "^4.4.0",
        "depd": "^2.0.0",
        "is-promise": "^4.0.0",
        "parseurl": "^1.3.3",
        "path-to-regexp": "^8.0.0"
      },
      "engines": {
        "node": ">= 18"
      }
    },
    "node_modules/safe-buffer": {
      "version": "5.2.1",
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
      "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/safer-buffer": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
      "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg==",
      "license": "MIT"
    },
    "node_modules/semver": {
      "version": "7.8.5",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.8.5.tgz",
      "integrity": "sha512-Y7/KDsb8LjooZpwaqGyulO6DQlksgCncchHGk+sZIY4SBvUocMBEFH5Ur1fI4dV+Jvl0w6cjvucaIi40puRioA==",
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/send": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/send/-/send-1.2.1.tgz",
      "integrity": "sha512-1gnZf7DFcoIcajTjTwjwuDjzuz4PPcY2StKPlsGAQ1+YH20IRVrBaXSWmdjowTJ6u8Rc01PoYOGHXfP1mYcZNQ==",
      "license": "MIT",
      "dependencies": {
        "debug": "^4.4.3",
        "encodeurl": "^2.0.0",
        "escape-html": "^1.0.3",
        "etag": "^1.8.1",
        "fresh": "^2.0.0",
        "http-errors": "^2.0.1",
        "mime-types": "^3.0.2",
        "ms": "^2.1.3",
        "on-finished": "^2.4.1",
        "range-parser": "^1.2.1",
        "statuses": "^2.0.2"
      },
      "engines": {
        "node": ">= 18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/serve-static": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/serve-static/-/serve-static-2.2.1.tgz",
      "integrity": "sha512-xRXBn0pPqQTVQiC8wyQrKs2MOlX24zQ0POGaj0kultvoOCstBQM5yvOhAVSUwOMjQtTvsPWoNCHfPGwaaQJhTw==",
      "license": "MIT",
      "dependencies": {
        "encodeurl": "^2.0.0",
        "escape-html": "^1.0.3",
        "parseurl": "^1.3.3",
        "send": "^1.2.0"
      },
      "engines": {
        "node": ">= 18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/setprototypeof": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.2.0.tgz",
      "integrity": "sha512-E5LDX7Wrp85Kil5bhZv46j8jOeboKq5JMmYM3gVGdGH8xFpPWXUMsNrlODCrkoxMEeNi/XZIwuRvY4XNwYMJpw==",
      "license": "ISC"
    },
    "node_modules/shebang-command": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz",
      "integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "shebang-regex": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/shebang-regex": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz",
      "integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/side-channel": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/side-channel/-/side-channel-1.1.1.tgz",
      "integrity": "sha512-6x6dK6zJdpTzF4sQeNYxwtvBzf6Eg4GtlesS94HOvTudUeyK2WXAaIfmDgsyslYrRBeFIlsi54AYsFGUuhmvrQ==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "object-inspect": "^1.13.4",
        "side-channel-list": "^1.0.1",
        "side-channel-map": "^1.0.1",
        "side-channel-weakmap": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-list": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/side-channel-list/-/side-channel-list-1.0.1.tgz",
      "integrity": "sha512-mjn/0bi/oUURjc5Xl7IaWi/OJJJumuoJFQJfDDyO46+hBWsfaVM65TBHq2eoZBhzl9EchxOijpkbRC8SVBQU0w==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "object-inspect": "^1.13.4"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-map": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/side-channel-map/-/side-channel-map-1.0.1.tgz",
      "integrity": "sha512-VCjCNfgMsby3tTdo02nbjtM/ewra6jPHmpThenkTYh8pG9ucZ/1P8So4u4FGBek/BjpOVsDCMoLA/iuBKIFXRA==",
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.5",
        "object-inspect": "^1.13.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-weakmap": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/side-channel-weakmap/-/side-channel-weakmap-1.0.2.tgz",
      "integrity": "sha512-WPS/HvHQTYnHisLo9McqBHOJk2FkHO/tlpvldyrnem4aeQp4hai3gythswg6p01oSoTl58rcpiFAjF2br2Ak2A==",
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.5",
        "object-inspect": "^1.13.3",
        "side-channel-map": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/sift": {
      "version": "17.1.3",
      "resolved": "https://registry.npmjs.org/sift/-/sift-17.1.3.tgz",
      "integrity": "sha512-Rtlj66/b0ICeFzYTuNvX/EF1igRbbnGSvEyT79McoZa/DeGhMyC5pWKOEsZKnpkqtSeovd5FL/bjHWC3CIIvCQ==",
      "license": "MIT"
    },
    "node_modules/simple-update-notifier": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/simple-update-notifier/-/simple-update-notifier-2.0.0.tgz",
      "integrity": "sha512-a2B9Y0KlNXl9u/vsW6sTIu9vGEpfKu2wRV6l1H3XEas/0gUIzGzBoP/IouTcUQbm9JWZLH3COxyn03TYlFax6w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "semver": "^7.5.3"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/sparse-bitfield": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/sparse-bitfield/-/sparse-bitfield-3.0.3.tgz",
      "integrity": "sha512-kvzhi7vqKTfkh0PZU+2D2PIllw2ymqJKujUcyPMd9Y75Nv4nPbGJZXNhxsgdQab2BmlDct1YnfQCguEvHr7VsQ==",
      "license": "MIT",
      "dependencies": {
        "memory-pager": "^1.0.2"
      }
    },
    "node_modules/statuses": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/statuses/-/statuses-2.0.2.tgz",
      "integrity": "sha512-DvEy55V3DB7uknRo+4iOGT5fP1slR8wQohVdknigZPMpMstaKJQWhwiYBACJE3Ul2pTnATihhBYnRhZQHGBiRw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/supports-color": {
      "version": "5.5.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
      "integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^3.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/to-regex-range": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
      "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-number": "^7.0.0"
      },
      "engines": {
        "node": ">=8.0"
      }
    },
    "node_modules/toidentifier": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.1.tgz",
      "integrity": "sha512-o5sSPKEkg/DIQNmH43V0/uerLrpzVedkUh8tGNvaeXpfpuwjKenlSox/2O/BTlZUtEe+JG7s5YhEz608PlAHRA==",
      "license": "MIT",
      "engines": {
        "node": ">=0.6"
      }
    },
    "node_modules/touch": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/touch/-/touch-3.1.1.tgz",
      "integrity": "sha512-r0eojU4bI8MnHr8c5bNo7lJDdI2qXlWWJk6a9EAFG7vbhTjElYhBVS3/miuE0uOuoLdb8Mc/rVfsmm6eo5o9GA==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "nodetouch": "bin/nodetouch.js"
      }
    },
    "node_modules/tr46": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/tr46/-/tr46-5.1.1.tgz",
      "integrity": "sha512-hdF5ZgjTqgAntKkklYw0R03MG2x/bSzTtkxmIRw/sTNV8YXsCJ1tfLAX23lhxhHJlEf3CRCOCGGWw3vI3GaSPw==",
      "license": "MIT",
      "dependencies": {
        "punycode": "^2.3.1"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/ts-node": {
      "version": "10.9.2",
      "resolved": "https://registry.npmjs.org/ts-node/-/ts-node-10.9.2.tgz",
      "integrity": "sha512-f0FFpIdcHgn8zcPSbf1dRevwt047YMnaiJM3u2w2RewrB+fob/zePZcrOyQoLMMO7aBIddLcQIEK5dYjkLnGrQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@cspotcode/source-map-support": "^0.8.0",
        "@tsconfig/node10": "^1.0.7",
        "@tsconfig/node12": "^1.0.7",
        "@tsconfig/node14": "^1.0.0",
        "@tsconfig/node16": "^1.0.2",
        "acorn": "^8.4.1",
        "acorn-walk": "^8.1.1",
        "arg": "^4.1.0",
        "create-require": "^1.1.0",
        "diff": "^4.0.1",
        "make-error": "^1.1.1",
        "v8-compile-cache-lib": "^3.0.1",
        "yn": "3.1.1"
      },
      "bin": {
        "ts-node": "dist/bin.js",
        "ts-node-cwd": "dist/bin-cwd.js",
        "ts-node-esm": "dist/bin-esm.js",
        "ts-node-script": "dist/bin-script.js",
        "ts-node-transpile-only": "dist/bin-transpile.js",
        "ts-script": "dist/bin-script-deprecated.js"
      },
      "peerDependencies": {
        "@swc/core": ">=1.2.50",
        "@swc/wasm": ">=1.2.50",
        "@types/node": "*",
        "typescript": ">=2.7"
      },
      "peerDependenciesMeta": {
        "@swc/core": {
          "optional": true
        },
        "@swc/wasm": {
          "optional": true
        }
      }
    },
    "node_modules/type-check": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/type-check/-/type-check-0.4.0.tgz",
      "integrity": "sha512-XleUoc9uwGXqjWwXaUTZAmzMcFZ5858QA2vvx1Ur5xIcixXIP+8LnFDgRplU30us6teqdlskFfu+ae4K79Ooew==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "prelude-ls": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/type-is": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/type-is/-/type-is-2.1.0.tgz",
      "integrity": "sha512-faYHw0anBbc/kWF3zFTEnxSFOAGUX9GFbOBthvDdLsIlEoWOFOtS0zgCiQYwIskL9iGXZL3kAXD8OoZ4GmMATA==",
      "license": "MIT",
      "dependencies": {
        "content-type": "^2.0.0",
        "media-typer": "^1.1.0",
        "mime-types": "^3.0.0"
      },
      "engines": {
        "node": ">= 18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/type-is/node_modules/content-type": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/content-type/-/content-type-2.0.0.tgz",
      "integrity": "sha512-j/O/d7GcZCyNl7/hwZAb606rzqkyvaDctLmckbxLzHvFBzTJHuGEdodATcP3yIRoDrLHkIATJuvzbFlp/ki2cQ==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/typescript": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/typescript/-/typescript-7.0.2.tgz",
      "integrity": "sha512-8FYau96o3NKOhbjKi/qNvG/W5jhzxkbdm5sj9AbZ/5T5sWqn3hJgLfGx27sRKZWTvyzCP8dLRBTf5tBTSRVUNA==",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "tsc": "bin/tsc"
      },
      "engines": {
        "node": ">=16.20.0"
      },
      "optionalDependencies": {
        "@typescript/typescript-aix-ppc64": "7.0.2",
        "@typescript/typescript-darwin-arm64": "7.0.2",
        "@typescript/typescript-darwin-x64": "7.0.2",
        "@typescript/typescript-freebsd-arm64": "7.0.2",
        "@typescript/typescript-freebsd-x64": "7.0.2",
        "@typescript/typescript-linux-arm": "7.0.2",
        "@typescript/typescript-linux-arm64": "7.0.2",
        "@typescript/typescript-linux-loong64": "7.0.2",
        "@typescript/typescript-linux-mips64el": "7.0.2",
        "@typescript/typescript-linux-ppc64": "7.0.2",
        "@typescript/typescript-linux-riscv64": "7.0.2",
        "@typescript/typescript-linux-s390x": "7.0.2",
        "@typescript/typescript-linux-x64": "7.0.2",
        "@typescript/typescript-netbsd-arm64": "7.0.2",
        "@typescript/typescript-netbsd-x64": "7.0.2",
        "@typescript/typescript-openbsd-arm64": "7.0.2",
        "@typescript/typescript-openbsd-x64": "7.0.2",
        "@typescript/typescript-sunos-x64": "7.0.2",
        "@typescript/typescript-win32-arm64": "7.0.2",
        "@typescript/typescript-win32-x64": "7.0.2"
      }
    },
    "node_modules/undefsafe": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/undefsafe/-/undefsafe-2.0.5.tgz",
      "integrity": "sha512-WxONCrssBM8TSPRqN5EmsjVrsv4A8X12J4ArBiiayv3DyyG3ZlIg6yysuuSYdZsVz3TKcTg2fd//Ujd4CHV1iA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/undici-types": {
      "version": "8.3.0",
      "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-8.3.0.tgz",
      "integrity": "sha512-j375ScV60dom+YkPFIfTLcOiPxkN/buHz5GobjLhixFuANaNs3C9l4GmrWqejgXWJ7BbJcFYpTEUkS1Ge8bpZQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/unpipe": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",
      "integrity": "sha512-pjy2bYhSsufwWlKwPc+l3cN7+wuJlK6uz0YdJEOlQDbl6jo/YlPi4mb8agUkVC8BF7V8NuzeyPNqRksA3hztKQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/uri-js": {
      "version": "4.4.1",
      "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.4.1.tgz",
      "integrity": "sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "punycode": "^2.1.0"
      }
    },
    "node_modules/v8-compile-cache-lib": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/v8-compile-cache-lib/-/v8-compile-cache-lib-3.0.1.tgz",
      "integrity": "sha512-wa7YjyUGfNZngI/vtK0UHAN+lgDCxBPCylVXGp0zu59Fz5aiGtNXaq3DhIov063MorB+VfufLh3JlF2KdTK3xg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/vary": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",
      "integrity": "sha512-BNGbWLfd0eUPabhkXUVm0j8uuvREyTh5ovRa/dyow/BqAbZJyC+5fU+IzQOzmAKzYqYRAISoRhdQr3eIZ/PXqg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/webidl-conversions": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-7.0.0.tgz",
      "integrity": "sha512-VwddBukDzu71offAQR975unBIGqfKZpM+8ZX6ySk8nYhVoo5CYaZyzt3YBvYtRtO+aoGlqxPg/B87NGVZ/fu6g==",
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/whatwg-url": {
      "version": "14.2.0",
      "resolved": "https://registry.npmjs.org/whatwg-url/-/whatwg-url-14.2.0.tgz",
      "integrity": "sha512-De72GdQZzNTUBBChsXueQUnPKDkg/5A5zp7pFDuQAj5UFoENpiACU0wlCvzpAGnTkj++ihpKwKyYewn/XNUbKw==",
      "license": "MIT",
      "dependencies": {
        "tr46": "^5.1.0",
        "webidl-conversions": "^7.0.0"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/which": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
      "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "isexe": "^2.0.0"
      },
      "bin": {
        "node-which": "bin/node-which"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/word-wrap": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/word-wrap/-/word-wrap-1.2.5.tgz",
      "integrity": "sha512-BN22B5eaMMI9UMtjrGd5g5eCYPpCPDUy0FJXbYsaT5zYxjFOckS53SQDE3pWkVoWpHXVb3BrYcEN4Twa55B5cA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/wrappy": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
      "integrity": "sha512-l4Sp/DRseor9wL6EvV2+TuQn63dMkPjZ/sp9XkghTEbV9KlPS1xUsZ3u7/IQO4wxtcFB4bgpQPRcR3QCvezPcQ==",
      "license": "ISC"
    },
    "node_modules/yn": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/yn/-/yn-3.1.1.tgz",
      "integrity": "sha512-Ux4ygGWsu2c7isFWe8Yu1YluJmqVhxqK2cLXNQA5AcC3QfbGNpM7fu0Y8b/z16pXLnFxZYvWhd3fhBY9DLmC6Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/yocto-queue": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/yocto-queue/-/yocto-queue-0.1.0.tgz",
      "integrity": "sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/zod": {
      "version": "4.4.3",
      "resolved": "https://registry.npmjs.org/zod/-/zod-4.4.3.tgz",
      "integrity": "sha512-ytENFjIJFl2UwYglde2jchW2Hwm4GJFLDiSXWdTrJQBIN9Fcyp7n4DhxJEiWNAJMV1/BqWfW/kkg71UDcHJyTQ==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/colinhacks"
      }
    }
  }
}

`

### backend/package.json
`	ypescript
{
  "name": "backend",
  "version": "1.0.0",
  "description": "",
  "main": "dist/index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "tsc",
    "start": "node dist/index.js",
    "dev": "nodemon src/index.ts"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "commonjs",
  "engines": {
    "node": ">=18.0.0"
  },
  "dependencies": {
    "bcryptjs": "^3.0.3",
    "cors": "^2.8.6",
    "dotenv": "^17.4.2",
    "express": "^5.2.1",
    "jsonwebtoken": "^9.0.3",
    "mongoose": "^9.7.4",
    "zod": "^4.4.3"
  },
  "devDependencies": {
    "@types/bcryptjs": "^2.4.6",
    "@types/cors": "^2.8.19",
    "@types/express": "^5.0.6",
    "@types/jsonwebtoken": "^9.0.10",
    "@types/node": "^26.1.1",
    "eslint": "^10.7.0",
    "nodemon": "^3.1.14",
    "prettier": "^3.9.5",
    "ts-node": "^10.9.2",
    "typescript": "^7.0.2"
  }
}

`

### backend/src/config/db.ts
`	ypescript
import mongoose from 'mongoose';
import { ENV } from './env';

export const connectDB = async (): Promise<void> => {
  try {
    const conn = await mongoose.connect(ENV.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error instanceof Error ? error.message : error}`);
    // Removed process.exit(1) to prevent healthcheck crashes
  }
};

`

### backend/src/config/env.ts
`	ypescript
import dotenv from 'dotenv';
import path from 'path';

// Load env vars
dotenv.config({ path: path.join(__dirname, '../../.env') });

export const ENV = {
  PORT: process.env.PORT || 3000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  MONGO_URI: process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/playstack_ems',
  JWT_SECRET: process.env.JWT_SECRET || 'super_secret_jwt_key_for_dev_only',
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '24h',
  BCRYPT_SALT_ROUNDS: parseInt(process.env.BCRYPT_SALT_ROUNDS || '10', 10),
};

`

### backend/src/index.ts
`	ypescript
import { app } from './app';
import { connectDB } from './config/db';
import { ENV } from './config/env';
export let startupErrors: string[] = [];

process.on('uncaughtException', (err) => {
  console.error('UNCAUGHT EXCEPTION:', err);
  startupErrors.push('UNCAUGHT EXCEPTION: ' + err.message + '\n' + err.stack);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('UNHANDLED REJECTION:', reason);
  startupErrors.push('UNHANDLED REJECTION: ' + String(reason));
});

const startServer = async () => {
  app.listen(Number(ENV.PORT), '0.0.0.0', () => {
    console.log(`Server running in ${ENV.NODE_ENV} mode on port ${ENV.PORT}`);
  });
  
  await connectDB();
};

startServer();

`

### backend/src/models/Employee.ts
`	ypescript
import mongoose, { Document, Schema } from 'mongoose';
import { ROLES, STATUS, RoleType, StatusType } from '../utils/constants';
import { AppError } from '../utils/AppError';

export interface IEmployee extends Document {
  employeeId: string;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  phone: string;
  department: string;
  designation: string;
  salary: number;
  joiningDate: Date;
  status: StatusType;
  role: RoleType;
  reportingManager?: mongoose.Types.ObjectId;
  profileImage?: string;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const EmployeeSchema = new Schema<IEmployee>(
  {
    employeeId: { type: String, required: true, unique: true, index: true },
    firstName: { type: String, required: true, index: true },
    lastName: { type: String, required: true, index: true },
    email: { type: String, required: true, unique: true, lowercase: true, index: true },
    password: { type: String, required: true, select: false },
    phone: { type: String, required: true },
    department: { type: String, required: true, index: true },
    designation: { type: String, required: true },
    salary: { type: Number, required: true, min: 0 },
    joiningDate: { type: Date, required: true },
    status: { type: String, enum: Object.values(STATUS), default: STATUS.ACTIVE },
    role: { type: String, enum: Object.values(ROLES), default: ROLES.EMPLOYEE },
    reportingManager: { type: Schema.Types.ObjectId, ref: 'Employee', default: null },
    profileImage: { type: String, default: null },
    isDeleted: { type: Boolean, default: false, index: true },
  },
  {
    timestamps: true,
  }
);

// Prevent circular reporting
EmployeeSchema.pre('save', async function () {
  if (!this.isModified('reportingManager') || !this.reportingManager) {
    return;
  }

  // Prevent self-reporting
  if (this.reportingManager.equals(this._id)) {
    throw new AppError('An employee cannot report to themselves.', 400);
  }

  // Prevent circular reporting (Traverse up the tree)
  let currentManagerId = this.reportingManager;
  const visited = new Set<string>();

  while (currentManagerId) {
    if (visited.has(currentManagerId.toString())) {
      throw new AppError('Circular reporting loop detected.', 400);
    }
    visited.add(currentManagerId.toString());

    if (currentManagerId.equals(this._id)) {
      throw new AppError('Circular reporting loop detected. Subordinate cannot be a manager to their own manager.', 400);
    }

    const manager = await mongoose.model('Employee').findById(currentManagerId).select('reportingManager');
    if (!manager) break;
    
    currentManagerId = manager.reportingManager;
  }
});

export const Employee = mongoose.model<IEmployee>('Employee', EmployeeSchema);

`

### backend/src/repositories/employee.repository.ts
`	ypescript
import mongoose, { SortOrder } from 'mongoose';
import { Employee, IEmployee } from '../models/Employee';

export interface PaginationMeta {
  page: number;
  limit: number;
  totalPages: number;
  totalRecords: number;
}

export interface PaginatedResult<T> {
  data: T[];
  meta: PaginationMeta;
}

export interface EmployeeQueryParams {
  search?: string;
  department?: string;
  role?: string;
  status?: string;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  page?: number;
  limit?: number;
}

export class EmployeeRepository {
  async create(data: Partial<IEmployee>): Promise<IEmployee> {
    const employee = new Employee(data);
    return await employee.save();
  }

  async findById(id: string): Promise<IEmployee | null> {
    return await Employee.findOne({ _id: id, isDeleted: false });
  }

  async findByEmail(email: string): Promise<IEmployee | null> {
    return await Employee.findOne({ email, isDeleted: false });
  }

  async findByEmployeeId(employeeId: string): Promise<IEmployee | null> {
    return await Employee.findOne({ employeeId, isDeleted: false });
  }

  async update(id: string, data: Partial<IEmployee>): Promise<IEmployee | null> {
    const employee = await Employee.findOne({ _id: id, isDeleted: false });
    if (!employee) return null;

    Object.assign(employee, data);
    return await employee.save();
  }

  async softDelete(id: string): Promise<IEmployee | null> {
    const employee = await Employee.findOne({ _id: id, isDeleted: false });
    if (!employee) return null;

    employee.isDeleted = true;
    return await employee.save();
  }

  async findAllPaginated(params: EmployeeQueryParams): Promise<PaginatedResult<IEmployee>> {
    const {
      search,
      department,
      role,
      status,
      sortBy = 'createdAt',
      sortOrder = 'desc',
      page = 1,
      limit = 10,
    } = params;

    const query: Record<string, any> = { isDeleted: false };

    if (search) {
      query.$or = [
        { firstName: { $regex: search, $options: 'i' } },
        { lastName: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
      ];
    }

    if (department) query.department = department;
    if (role) query.role = role;
    if (status) query.status = status;

    const sort: Record<string, SortOrder> = { [sortBy]: sortOrder === 'asc' ? 1 : -1 };
    
    // Mapping specific sort fields to DB fields if necessary
    if (sortBy === 'name') {
      delete sort[sortBy];
      sort.firstName = sortOrder === 'asc' ? 1 : -1;
      sort.lastName = sortOrder === 'asc' ? 1 : -1;
    }

    const skip = (page - 1) * limit;

    const [data, totalRecords] = await Promise.all([
      Employee.find(query).sort(sort).skip(skip).limit(limit).select('-password'),
      Employee.countDocuments(query),
    ]);

    return {
      data,
      meta: {
        page,
        limit,
        totalRecords,
        totalPages: Math.ceil(totalRecords / limit),
      },
    };
  }
}

export const employeeRepository = new EmployeeRepository();

`

### backend/src/seed.ts
`	ypescript
import mongoose from 'mongoose';
import { ENV } from './config/env';
import { Employee } from './models/Employee';
import { hashPassword } from './utils/hash';
import { ROLES, STATUS } from './utils/constants';

const seedDB = async () => {
  try {
    await mongoose.connect(ENV.MONGO_URI);
    console.log('Connected to MongoDB for seeding');

    // Clear existing data
    await Employee.deleteMany({});
    console.log('Cleared existing employees');

    const adminPassword = await hashPassword('Admin@123');
    const hrPassword = await hashPassword('Hr@123');
    const empPassword = await hashPassword('Employee@123');

    // Create Super Admin
    const superAdmin = await Employee.create({
      employeeId: 'EMP-001',
      firstName: 'System',
      lastName: 'Admin',
      email: 'admin@playstack.com',
      password: adminPassword,
      phone: '1234567890',
      department: 'Operations',
      designation: 'CEO',
      salary: 250000,
      joiningDate: new Date('2023-01-01'),
      status: STATUS.ACTIVE,
      role: ROLES.SUPER_ADMIN,
    });

    // Create HR Manager
    const hrManager = await Employee.create({
      employeeId: 'EMP-002',
      firstName: 'HR',
      lastName: 'Manager',
      email: 'hr@playstack.com',
      password: hrPassword,
      phone: '0987654321',
      department: 'HR',
      designation: 'HR Director',
      salary: 120000,
      joiningDate: new Date('2023-02-01'),
      status: STATUS.ACTIVE,
      role: ROLES.HR_MANAGER,
      reportingManager: superAdmin._id,
    });

    // Create Base Employee
    const baseEmployee = await Employee.create({
      employeeId: 'EMP-003',
      firstName: 'John',
      lastName: 'Doe',
      email: 'employee@playstack.com',
      password: empPassword,
      phone: '5555555555',
      department: 'Engineering',
      designation: 'Software Engineer',
      salary: 80000,
      joiningDate: new Date('2023-03-01'),
      status: STATUS.ACTIVE,
      role: ROLES.EMPLOYEE,
      reportingManager: superAdmin._id,
    });

    // Create 20 more employees
    const departments = ['Engineering', 'Finance', 'Marketing', 'Sales', 'Operations'];
    
    // Create department heads first
    const deptHeads: any = {};
    for (const dept of departments) {
      deptHeads[dept] = await Employee.create({
        employeeId: `EMP-${dept}-001`,
        firstName: `${dept}`,
        lastName: 'Head',
        email: `head.${dept.toLowerCase()}@playstack.com`,
        password: empPassword,
        phone: '1112223333',
        department: dept,
        designation: `${dept} Director`,
        salary: 150000,
        joiningDate: new Date('2023-04-01'),
        status: STATUS.ACTIVE,
        role: ROLES.EMPLOYEE,
        reportingManager: superAdmin._id,
      });
    }

    // Create standard employees under heads
    for (let i = 1; i <= 15; i++) {
      const dept = departments[i % departments.length];
      await Employee.create({
        employeeId: `EMP-${dept}-00${i+1}`,
        firstName: `Employee${i}`,
        lastName: `Staff`,
        email: `emp${i}.${dept.toLowerCase()}@playstack.com`,
        password: empPassword,
        phone: `222333444${i}`,
        department: dept,
        designation: `${dept} Specialist`,
        salary: 60000 + (i * 1000),
        joiningDate: new Date('2023-05-01'),
        status: STATUS.ACTIVE,
        role: ROLES.EMPLOYEE,
        reportingManager: deptHeads[dept]._id,
      });
    }

    console.log('Database seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Seeding error:', error);
    process.exit(1);
  }
};

seedDB();

`

### backend/src/services/auth.service.ts
`	ypescript
import { Employee } from '../models/Employee';
import { AppError } from '../utils/AppError';
import { generateToken } from '../utils/jwt';
import bcrypt from 'bcryptjs';
import { STATUS } from '../utils/constants';

export class AuthService {
  async login(email: string, passwordString: string) {
    const employee = await Employee.findOne({ email }).select('+password');
    
    if (!employee) {
      throw new AppError('Invalid credentials', 401);
    }

    if (employee.isDeleted) {
      throw new AppError('Account has been deleted', 403);
    }

    if (employee.status === STATUS.INACTIVE) {
      throw new AppError('Account is disabled', 403);
    }

    const isMatch = await bcrypt.compare(passwordString, employee.password as string);
    if (!isMatch) {
      throw new AppError('Invalid credentials', 401);
    }

    const token = generateToken({
      id: employee._id as unknown as string,
      role: employee.role,
    });

    const employeeProfile = employee.toObject();
    delete employeeProfile.password;

    return {
      token,
      employee: employeeProfile,
    };
  }
}

export const authService = new AuthService();

`

### backend/src/services/organization.service.ts
`	ypescript
import { organizationRepository } from '../repositories/organization.repository';
import { employeeRepository } from '../repositories/employee.repository';
import { AppError } from '../utils/AppError';

export class OrganizationService {
  async getOrganizationTree() {
    const employees = await organizationRepository.getAllActiveEmployeesLean();
    
    // Hash map to quickly access nodes and store their children
    const map = new Map<string, any>();
    const roots: any[] = [];

    // Initialize map
    employees.forEach((emp: any) => {
      map.set(emp._id.toString(), { ...emp, directReports: [] });
    });

    // Build tree
    employees.forEach((emp: any) => {
      const node = map.get(emp._id.toString());
      if (emp.reportingManager) {
        const managerId = emp.reportingManager.toString();
        const managerNode = map.get(managerId);
        
        if (managerNode) {
          managerNode.directReports.push(node);
        } else {
          // If manager is not active/found, attach to roots temporarily or handle orphaned node
          roots.push(node); 
        }
      } else {
        roots.push(node); // Has no manager, so it's a root
      }
    });

    return roots;
  }

  async getDirectReports(managerId: string) {
    const manager = await employeeRepository.findById(managerId);
    if (!manager) throw new AppError('Manager not found', 404);

    return await organizationRepository.getDirectReports(managerId);
  }

  async updateManager(employeeId: string, newManagerId: string | null) {
    const employee = await employeeRepository.findById(employeeId);
    if (!employee) throw new AppError('Employee not found', 404);

    if (newManagerId) {
      const manager = await employeeRepository.findById(newManagerId);
      if (!manager) throw new AppError('Assigned manager does not exist or is deleted', 400);
    }

    // Set the new manager
    employee.reportingManager = newManagerId as any;

    // Trigger save which invokes the Mongoose pre('save') hook to validate circular reporting
    try {
      await employee.save();
    } catch (err: any) {
      // Catch mongoose validation errors (like our custom AppError from pre('save'))
      if (err instanceof AppError) throw err;
      throw new AppError(err.message || 'Failed to update manager', 400);
    }

    return employee;
  }
}

export const organizationService = new OrganizationService();

`

### backend/src/utils/hash.ts
`	ypescript
import bcrypt from 'bcryptjs';
import { ENV } from '../config/env';

export const hashPassword = async (password: string): Promise<string> => {
  return await bcrypt.hash(password, ENV.BCRYPT_SALT_ROUNDS);
};

export const comparePassword = async (password: string, hash: string): Promise<boolean> => {
  return await bcrypt.compare(password, hash);
};

`

### backend/src/utils/jwt.ts
`	ypescript
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret_for_development_only';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '24h';

export interface JwtPayload {
  id: string;
  role: string;
}

export const generateToken = (payload: JwtPayload): string => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN as any });
};

export const verifyToken = (token: string): JwtPayload => {
  return jwt.verify(token, JWT_SECRET) as JwtPayload;
};

`

## 5. Environment Configuration

### ./backend/src/config/env.ts
`	ypescript
import dotenv from 'dotenv';
import path from 'path';

// Load env vars
dotenv.config({ path: path.join(__dirname, '../../.env') });

export const ENV = {
  PORT: process.env.PORT || 3000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  MONGO_URI: process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/playstack_ems',
  JWT_SECRET: process.env.JWT_SECRET || 'super_secret_jwt_key_for_dev_only',
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '24h',
  BCRYPT_SALT_ROUNDS: parseInt(process.env.BCRYPT_SALT_ROUNDS || '10', 10),
};

`

### ./backend/src/config/db.ts
`	ypescript
import mongoose from 'mongoose';
import { ENV } from './env';

export const connectDB = async (): Promise<void> => {
  try {
    const conn = await mongoose.connect(ENV.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error instanceof Error ? error.message : error}`);
    // Removed process.exit(1) to prevent healthcheck crashes
  }
};

`

## 6. Runtime Entry Files

### ./backend/src/index.ts
`javascript
import { app } from './app';
import { connectDB } from './config/db';
import { ENV } from './config/env';
export let startupErrors: string[] = [];

process.on('uncaughtException', (err) => {
  console.error('UNCAUGHT EXCEPTION:', err);
  startupErrors.push('UNCAUGHT EXCEPTION: ' + err.message + '\n' + err.stack);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('UNHANDLED REJECTION:', reason);
  startupErrors.push('UNHANDLED REJECTION: ' + String(reason));
});

const startServer = async () => {
  app.listen(Number(ENV.PORT), '0.0.0.0', () => {
    console.log(`Server running in ${ENV.NODE_ENV} mode on port ${ENV.PORT}`);
  });
  
  await connectDB();
};

startServer();

`

### ./backend/src/server.ts
This file does not exist.

### ./backend/src/app.ts
`javascript
import express from 'express';
import cors from 'cors';
import { errorHandler } from './middlewares/error.middleware';
import apiRoutes from './routes';

export const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'success', message: 'API is running' });
});

app.get('/api/v1/health', (req, res) => {
  res.status(200).json({ status: 'success', message: 'API is running' });
});

app.use('/api', apiRoutes);

// Global Error Handler
app.use(errorHandler);

`

### ./backend/dist/index.js
`javascript
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const db_1 = require("./config/db");
const env_1 = require("./config/env");
process.on('uncaughtException', (err) => {
    console.error('UNCAUGHT EXCEPTION:', err);
});
process.on('unhandledRejection', (reason, promise) => {
    console.error('UNHANDLED REJECTION:', reason);
});
const startServer = async () => {
    app_1.app.listen(Number(env_1.ENV.PORT), '0.0.0.0', () => {
        console.log(`Server running in ${env_1.ENV.NODE_ENV} mode on port ${env_1.ENV.PORT}`);
    });
    await (0, db_1.connectDB)();
};
startServer();

`

### ./backend/dist/server.js
`javascript
��r e q u i r e ( ' . / i n d e x . j s ' ) ;  
 
`

## 7. Package Information

### ./backend/package.json
`json
{
  "name": "backend",
  "version": "1.0.0",
  "description": "",
  "main": "dist/index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "tsc",
    "start": "node dist/index.js",
    "dev": "nodemon src/index.ts"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "commonjs",
  "engines": {
    "node": ">=18.0.0"
  },
  "dependencies": {
    "bcryptjs": "^3.0.3",
    "cors": "^2.8.6",
    "dotenv": "^17.4.2",
    "express": "^5.2.1",
    "jsonwebtoken": "^9.0.3",
    "mongoose": "^9.7.4",
    "zod": "^4.4.3"
  },
  "devDependencies": {
    "@types/bcryptjs": "^2.4.6",
    "@types/cors": "^2.8.19",
    "@types/express": "^5.0.6",
    "@types/jsonwebtoken": "^9.0.10",
    "@types/node": "^26.1.1",
    "eslint": "^10.7.0",
    "nodemon": "^3.1.14",
    "prettier": "^3.9.5",
    "ts-node": "^10.9.2",
    "typescript": "^7.0.2"
  }
}

`

### ./backend/package-lock.json
`json
{
  "name": "backend",
  "version": "1.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "backend",
      "version": "1.0.0",
      "license": "ISC",
      "dependencies": {
        "bcryptjs": "^3.0.3",
        "cors": "^2.8.6",
        "dotenv": "^17.4.2",
        "express": "^5.2.1",
        "jsonwebtoken": "^9.0.3",
        "mongoose": "^9.7.4",
        "zod": "^4.4.3"
      },
      "devDependencies": {
        "@types/bcryptjs": "^2.4.6",
        "@types/cors": "^2.8.19",
        "@types/express": "^5.0.6",
        "@types/jsonwebtoken": "^9.0.10",
        "@types/node": "^26.1.1",
        "eslint": "^10.7.0",
        "nodemon": "^3.1.14",
        "prettier": "^3.9.5",
        "ts-node": "^10.9.2",
        "typescript": "^7.0.2"
      }
    },
    "node_modules/@cspotcode/source-map-support": {
      "version": "0.8.1",
      "resolved": "https://registry.npmjs.org/@cspotcode/source-map-support/-/source-map-support-0.8.1.tgz",
      "integrity": "sha512-IchNf6dN4tHoMFIn/7OE8LWZ19Y6q/67Bmf6vnGREv8RSbBVb9LPJxEcnwrcwX6ixSvaiGoomAUvu4YSxXrVgw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/trace-mapping": "0.3.9"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@eslint-community/eslint-utils": {
      "version": "4.9.1",
      "resolved": "https://registry.npmjs.org/@eslint-community/eslint-utils/-/eslint-utils-4.9.1.tgz",
      "integrity": "sha512-phrYmNiYppR7znFEdqgfWHXR6NCkZEK7hwWDHZUjit/2/U0r6XvkDl0SYnoM51Hq7FhCGdLDT6zxCCOY1hexsQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "eslint-visitor-keys": "^3.4.3"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      },
      "peerDependencies": {
        "eslint": "^6.0.0 || ^7.0.0 || >=8.0.0"
      }
    },
    "node_modules/@eslint-community/eslint-utils/node_modules/eslint-visitor-keys": {
      "version": "3.4.3",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-3.4.3.tgz",
      "integrity": "sha512-wpc+LXeiyiisxPlEkUzU6svyS1frIO3Mgxj1fdy7Pm8Ygzguax2N3Fa/D/ag1WqbOprdI+uY6wMUl8/a2G+iag==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/@eslint-community/regexpp": {
      "version": "4.12.2",
      "resolved": "https://registry.npmjs.org/@eslint-community/regexpp/-/regexpp-4.12.2.tgz",
      "integrity": "sha512-EriSTlt5OC9/7SXkRSCAhfSxxoSUgBm33OH+IkwbdpgoqsSsUg7y3uh+IICI/Qg4BBWr3U2i39RpmycbxMq4ew==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^12.0.0 || ^14.0.0 || >=16.0.0"
      }
    },
    "node_modules/@eslint/config-array": {
      "version": "0.23.5",
      "resolved": "https://registry.npmjs.org/@eslint/config-array/-/config-array-0.23.5.tgz",
      "integrity": "sha512-Y3kKLvC1dvTOT+oGlqNQ1XLqK6D1HU2YXPc52NmAlJZbMMWDzGYXMiPRJ8TYD39muD/OTjlZmNJ4ib7dvSrMBA==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@eslint/object-schema": "^3.0.5",
        "debug": "^4.3.1",
        "minimatch": "^10.2.4"
      },
      "engines": {
        "node": "^20.19.0 || ^22.13.0 || >=24"
      }
    },
    "node_modules/@eslint/config-helpers": {
      "version": "0.6.0",
      "resolved": "https://registry.npmjs.org/@eslint/config-helpers/-/config-helpers-0.6.0.tgz",
      "integrity": "sha512-ii6Bw9jJ2zi2cWA2Z+9/QZ/+3DX6kwaV5Q986D/CdP3Lap3w/pgQZ373FV7byY/i7L4IRH/G43I5dz1ClsCbpA==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@eslint/core": "^1.2.1"
      },
      "engines": {
        "node": "^20.19.0 || ^22.13.0 || >=24"
      }
    },
    "node_modules/@eslint/core": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/@eslint/core/-/core-1.2.1.tgz",
      "integrity": "sha512-MwcE1P+AZ4C6DWlpin/OmOA54mmIZ/+xZuJiQd4SyB29oAJjN30UW9wkKNptW2ctp4cEsvhlLY/CsQ1uoHDloQ==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@types/json-schema": "^7.0.15"
      },
      "engines": {
        "node": "^20.19.0 || ^22.13.0 || >=24"
      }
    },
    "node_modules/@eslint/object-schema": {
      "version": "3.0.5",
      "resolved": "https://registry.npmjs.org/@eslint/object-schema/-/object-schema-3.0.5.tgz",
      "integrity": "sha512-vqTaUEgxzm+YDSdElad6PiRoX4t8VGDjCtt05zn4nU810UIx/uNEV7/lZJ6KwFThKZOzOxzXy48da+No7HZaMw==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^20.19.0 || ^22.13.0 || >=24"
      }
    },
    "node_modules/@eslint/plugin-kit": {
      "version": "0.7.2",
      "resolved": "https://registry.npmjs.org/@eslint/plugin-kit/-/plugin-kit-0.7.2.tgz",
      "integrity": "sha512-+CNAzxglkrpNf/kKywqQfk74QjtceuOE7Qm+AF8miRvPF/wmmK5+OJOgVh3AVTT3RP2mH3+FOaxlE5v72owk0A==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@eslint/core": "^1.2.1",
        "levn": "^0.4.1"
      },
      "engines": {
        "node": "^20.19.0 || ^22.13.0 || >=24"
      }
    },
    "node_modules/@humanfs/core": {
      "version": "0.19.2",
      "resolved": "https://registry.npmjs.org/@humanfs/core/-/core-0.19.2.tgz",
      "integrity": "sha512-UhXNm+CFMWcbChXywFwkmhqjs3PRCmcSa/hfBgLIb7oQ5HNb1wS0icWsGtSAUNgefHeI+eBrA8I1fxmbHsGdvA==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@humanfs/types": "^0.15.0"
      },
      "engines": {
        "node": ">=18.18.0"
      }
    },
    "node_modules/@humanfs/node": {
      "version": "0.16.8",
      "resolved": "https://registry.npmjs.org/@humanfs/node/-/node-0.16.8.tgz",
      "integrity": "sha512-gE1eQNZ3R++kTzFUpdGlpmy8kDZD/MLyHqDwqjkVQI0JMdI1D51sy1H958PNXYkM2rAac7e5/CnIKZrHtPh3BQ==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@humanfs/core": "^0.19.2",
        "@humanfs/types": "^0.15.0",
        "@humanwhocodes/retry": "^0.4.0"
      },
      "engines": {
        "node": ">=18.18.0"
      }
    },
    "node_modules/@humanfs/types": {
      "version": "0.15.0",
      "resolved": "https://registry.npmjs.org/@humanfs/types/-/types-0.15.0.tgz",
      "integrity": "sha512-ZZ1w0aoQkwuUuC7Yf+7sdeaNfqQiiLcSRbfI08oAxqLtpXQr9AIVX7Ay7HLDuiLYAaFPu8oBYNq/QIi9URHJ3Q==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=18.18.0"
      }
    },
    "node_modules/@humanwhocodes/module-importer": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/module-importer/-/module-importer-1.0.1.tgz",
      "integrity": "sha512-bxveV4V8v5Yb4ncFTT3rPSgZBOpCkjfK0y4oVVVJwIuDVBRMDXrPyXRL988i5ap9m9bnyEEjWfm5WkBmtffLfA==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=12.22"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/nzakas"
      }
    },
    "node_modules/@humanwhocodes/retry": {
      "version": "0.4.3",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/retry/-/retry-0.4.3.tgz",
      "integrity": "sha512-bV0Tgo9K4hfPCek+aMAn81RppFKv2ySDQeMoSZuvTASywNTnVJCArCZE2FWqpvIatKu7VMRLWlR1EazvVhDyhQ==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=18.18"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/nzakas"
      }
    },
    "node_modules/@jridgewell/resolve-uri": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz",
      "integrity": "sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/sourcemap-codec": {
      "version": "1.5.5",
      "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.5.tgz",
      "integrity": "sha512-cYQ9310grqxueWbl+WuIUIaiUaDcj7WOq5fVhEljNVgRfOUhY9fy2zTvfoqWsnebh8Sl70VScFbICvJnLKB0Og==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@jridgewell/trace-mapping": {
      "version": "0.3.9",
      "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.9.tgz",
      "integrity": "sha512-3Belt6tdc8bPgAtbcmdtNJlirVoTmEb5e2gC94PnkwEW9jI6CAHUeoG85tjWP5WquqfavoMtMwiG4P926ZKKuQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/resolve-uri": "^3.0.3",
        "@jridgewell/sourcemap-codec": "^1.4.10"
      }
    },
    "node_modules/@mongodb-js/saslprep": {
      "version": "1.4.12",
      "resolved": "https://registry.npmjs.org/@mongodb-js/saslprep/-/saslprep-1.4.12.tgz",
      "integrity": "sha512-QAfAMwNgnYxZ2C6D1HgeP7Gc4i/uvJRim415PCIL9ptRxWMNbWeLBYb2/9R4pGKny/s1FVu2JA2cxCUBUOggrA==",
      "license": "MIT",
      "dependencies": {
        "sparse-bitfield": "^3.0.3"
      }
    },
    "node_modules/@standard-schema/spec": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@standard-schema/spec/-/spec-1.1.0.tgz",
      "integrity": "sha512-l2aFy5jALhniG5HgqrD6jXLi/rUWrKvqN/qJx6yoJsgKhblVd+iqqU4RCXavm/jPityDo5TCvKMnpjKnOriy0w==",
      "license": "MIT"
    },
    "node_modules/@tsconfig/node10": {
      "version": "1.0.12",
      "resolved": "https://registry.npmjs.org/@tsconfig/node10/-/node10-1.0.12.tgz",
      "integrity": "sha512-UCYBaeFvM11aU2y3YPZ//O5Rhj+xKyzy7mvcIoAjASbigy8mHMryP5cK7dgjlz2hWxh1g5pLw084E0a/wlUSFQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@tsconfig/node12": {
      "version": "1.0.11",
      "resolved": "https://registry.npmjs.org/@tsconfig/node12/-/node12-1.0.11.tgz",
      "integrity": "sha512-cqefuRsh12pWyGsIoBKJA9luFu3mRxCA+ORZvA4ktLSzIuCUtWVxGIuXigEwO5/ywWFMZ2QEGKWvkZG1zDMTag==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@tsconfig/node14": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/@tsconfig/node14/-/node14-1.0.3.tgz",
      "integrity": "sha512-ysT8mhdixWK6Hw3i1V2AeRqZ5WfXg1G43mqoYlM2nc6388Fq5jcXyr5mRsqViLx/GJYdoL0bfXD8nmF+Zn/Iow==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@tsconfig/node16": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/@tsconfig/node16/-/node16-1.0.4.tgz",
      "integrity": "sha512-vxhUy4J8lyeyinH7Azl1pdd43GJhZH/tP2weN8TntQblOY+A0XbT8DJk1/oCPuOOyg/Ja757rG0CgHcWC8OfMA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/bcryptjs": {
      "version": "2.4.6",
      "resolved": "https://registry.npmjs.org/@types/bcryptjs/-/bcryptjs-2.4.6.tgz",
      "integrity": "sha512-9xlo6R2qDs5uixm0bcIqCeMCE6HiQsIyel9KQySStiyqNl2tnj2mP3DX1Nf56MD6KMenNNlBBsy3LJ7gUEQPXQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/body-parser": {
      "version": "1.19.6",
      "resolved": "https://registry.npmjs.org/@types/body-parser/-/body-parser-1.19.6.tgz",
      "integrity": "sha512-HLFeCYgz89uk22N5Qg3dvGvsv46B8GLvKKo1zKG4NybA8U2DiEO3w9lqGg29t/tfLRJpJ6iQxnVw4OnB7MoM9g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/connect": "*",
        "@types/node": "*"
      }
    },
    "node_modules/@types/connect": {
      "version": "3.4.38",
      "resolved": "https://registry.npmjs.org/@types/connect/-/connect-3.4.38.tgz",
      "integrity": "sha512-K6uROf1LD88uDQqJCktA4yzL1YYAK6NgfsI0v/mTgyPKWsX1CnJ0XPSDhViejru1GcRkLWb8RlzFYJRqGUbaug==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/node": "*"
      }
    },
    "node_modules/@types/cors": {
      "version": "2.8.19",
      "resolved": "https://registry.npmjs.org/@types/cors/-/cors-2.8.19.tgz",
      "integrity": "sha512-mFNylyeyqN93lfe/9CSxOGREz8cpzAhH+E93xJ4xWQf62V8sQ/24reV2nyzUWM6H6Xji+GGHpkbLe7pVoUEskg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/node": "*"
      }
    },
    "node_modules/@types/esrecurse": {
      "version": "4.3.1",
      "resolved": "https://registry.npmjs.org/@types/esrecurse/-/esrecurse-4.3.1.tgz",
      "integrity": "sha512-xJBAbDifo5hpffDBuHl0Y8ywswbiAp/Wi7Y/GtAgSlZyIABppyurxVueOPE8LUQOxdlgi6Zqce7uoEpqNTeiUw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/estree": {
      "version": "1.0.9",
      "resolved": "https://registry.npmjs.org/@types/estree/-/estree-1.0.9.tgz",
      "integrity": "sha512-GhdPgy1el4/ImP05X05Uw4cw2/M93BCUmnEvWZNStlCzEKME4Fkk+YpoA5OiHNQmoS7Cafb8Xa3Pya8m1Qrzeg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/express": {
      "version": "5.0.6",
      "resolved": "https://registry.npmjs.org/@types/express/-/express-5.0.6.tgz",
      "integrity": "sha512-sKYVuV7Sv9fbPIt/442koC7+IIwK5olP1KWeD88e/idgoJqDm3JV/YUiPwkoKK92ylff2MGxSz1CSjsXelx0YA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/body-parser": "*",
        "@types/express-serve-static-core": "^5.0.0",
        "@types/serve-static": "^2"
      }
    },
    "node_modules/@types/express-serve-static-core": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/@types/express-serve-static-core/-/express-serve-static-core-5.1.2.tgz",
      "integrity": "sha512-d3KvEXBSo/lOAMc2u6fkyDHBvetBHeqD7wm/AcXfLpSOQwlmG9D/aQ0SFswVjv05p7ullQS7Mjohj6/VdbZuTg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/node": "*",
        "@types/qs": "*",
        "@types/range-parser": "*",
        "@types/send": "*"
      }
    },
    "node_modules/@types/http-errors": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/@types/http-errors/-/http-errors-2.0.5.tgz",
      "integrity": "sha512-r8Tayk8HJnX0FztbZN7oVqGccWgw98T/0neJphO91KkmOzug1KkofZURD4UaD5uH8AqcFLfdPErnBod0u71/qg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/json-schema": {
      "version": "7.0.15",
      "resolved": "https://registry.npmjs.org/@types/json-schema/-/json-schema-7.0.15.tgz",
      "integrity": "sha512-5+fP8P8MFNC+AyZCDxrB2pkZFPGzqQWUzpSeuuVLvm8VMcorNYavBqoFcxK8bQz4Qsbn4oUEEem4wDLfcysGHA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/jsonwebtoken": {
      "version": "9.0.10",
      "resolved": "https://registry.npmjs.org/@types/jsonwebtoken/-/jsonwebtoken-9.0.10.tgz",
      "integrity": "sha512-asx5hIG9Qmf/1oStypjanR7iKTv0gXQ1Ov/jfrX6kS/EO0OFni8orbmGCn0672NHR3kXHwpAwR+B368ZGN/2rA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/ms": "*",
        "@types/node": "*"
      }
    },
    "node_modules/@types/ms": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/@types/ms/-/ms-2.1.0.tgz",
      "integrity": "sha512-GsCCIZDE/p3i96vtEqx+7dBUGXrc7zeSK3wwPHIaRThS+9OhWIXRqzs4d6k1SVU8g91DrNRWxWUGhp5KXQb2VA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/node": {
      "version": "26.1.1",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-26.1.1.tgz",
      "integrity": "sha512-nxAkRSVkN1Y0JC1W8ky/fTfkGsMmcrRsbx+3XoZE+rMOX71kLYTV7fLXpqud1GpbpP5TuffXFqfX7fH2GgZREw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "undici-types": "~8.3.0"
      }
    },
    "node_modules/@types/qs": {
      "version": "6.15.1",
      "resolved": "https://registry.npmjs.org/@types/qs/-/qs-6.15.1.tgz",
      "integrity": "sha512-GZHUBZR9hckSUhrxmp1nG6NwdpM9fCunJwyThLW1X3AyHgd9IlHb6VANpQQqDr2o/qQp6McZ3y/IA2rVzKzSbw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/range-parser": {
      "version": "1.2.7",
      "resolved": "https://registry.npmjs.org/@types/range-parser/-/range-parser-1.2.7.tgz",
      "integrity": "sha512-hKormJbkJqzQGhziax5PItDUTMAM9uE2XXQmM37dyd4hVM+5aVl7oVxMVUiVQn2oCQFN/LKCZdvSM0pFRqbSmQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/send": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/@types/send/-/send-1.2.1.tgz",
      "integrity": "sha512-arsCikDvlU99zl1g69TcAB3mzZPpxgw0UQnaHeC1Nwb015xp8bknZv5rIfri9xTOcMuaVgvabfIRA7PSZVuZIQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/node": "*"
      }
    },
    "node_modules/@types/serve-static": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/@types/serve-static/-/serve-static-2.2.0.tgz",
      "integrity": "sha512-8mam4H1NHLtu7nmtalF7eyBH14QyOASmcxHhSfEoRyr0nP/YdoesEtU+uSRvMe96TW/HPTtkoKqQLl53N7UXMQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/http-errors": "*",
        "@types/node": "*"
      }
    },
    "node_modules/@types/webidl-conversions": {
      "version": "7.0.3",
      "resolved": "https://registry.npmjs.org/@types/webidl-conversions/-/webidl-conversions-7.0.3.tgz",
      "integrity": "sha512-CiJJvcRtIgzadHCYXw7dqEnMNRjhGZlYK05Mj9OyktqV8uVT8fD2BFOB7S1uwBE3Kj2Z+4UyPmFw/Ixgw/LAlA==",
      "license": "MIT"
    },
    "node_modules/@types/whatwg-url": {
      "version": "13.0.0",
      "resolved": "https://registry.npmjs.org/@types/whatwg-url/-/whatwg-url-13.0.0.tgz",
      "integrity": "sha512-N8WXpbE6Wgri7KUSvrmQcqrMllKZ9uxkYWMt+mCSGwNc0Hsw9VQTW7ApqI4XNrx6/SaM2QQJCzMPDEXE058s+Q==",
      "license": "MIT",
      "dependencies": {
        "@types/webidl-conversions": "*"
      }
    },
    "node_modules/@typescript/typescript-aix-ppc64": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/@typescript/typescript-aix-ppc64/-/typescript-aix-ppc64-7.0.2.tgz",
      "integrity": "sha512-MTKKkWB7p/0E9xi1d1tHtZ5PiLkGEMIq88pK2CubZjOsLtYTLqhgIgi6zepFa+9GHZ6h05NMCkQxGKiPXMxXtQ==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "aix"
      ],
      "engines": {
        "node": ">=16.20.0"
      }
    },
    "node_modules/@typescript/typescript-darwin-arm64": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/@typescript/typescript-darwin-arm64/-/typescript-darwin-arm64-7.0.2.tgz",
      "integrity": "sha512-gowzar9MwS/aRWp6f3a4KUqzRjAZjOsmGNCM6LcTgXum+dBfgsBVMN+AgvOCCbguXyick6LJhpBszxMebJ8syA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=16.20.0"
      }
    },
    "node_modules/@typescript/typescript-darwin-x64": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/@typescript/typescript-darwin-x64/-/typescript-darwin-x64-7.0.2.tgz",
      "integrity": "sha512-SZ9xZInqApNlNGc9s0W1VSsktYSOe9cFqNOIqmN1Gs8SmkjKZYFt017G4VwPxASInODuAdbTW7sXiFUf893RgA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=16.20.0"
      }
    },
    "node_modules/@typescript/typescript-freebsd-arm64": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/@typescript/typescript-freebsd-arm64/-/typescript-freebsd-arm64-7.0.2.tgz",
      "integrity": "sha512-W5NH4y/J0plIIS5b2xvTEkU7JFxyqdMAOgf+Ilhl0vHQXKO5dZoxd+C/jEtq56c4F3wk71RB4BMRQ2XdI+bwYQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=16.20.0"
      }
    },
    "node_modules/@typescript/typescript-freebsd-x64": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/@typescript/typescript-freebsd-x64/-/typescript-freebsd-x64-7.0.2.tgz",
      "integrity": "sha512-UMGDx5sTpzNw3WiPebH7l90IWfJggEd+egHt/q6p7/Cm3zqoV7VxkGXt+3DxPIw8CcmvAB0j3sVVfbhX+M4Tpw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=16.20.0"
      }
    },
    "node_modules/@typescript/typescript-linux-arm": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/@typescript/typescript-linux-arm/-/typescript-linux-arm-7.0.2.tgz",
      "integrity": "sha512-gffT3xPz9sR7j/YJExkyPntrI0P2EP9XbOyWzth2/Gs0RstK+90RBcO0ncXoXy/beYll1SXw846Nf2zdnEz0QQ==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=16.20.0"
      }
    },
    "node_modules/@typescript/typescript-linux-arm64": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/@typescript/typescript-linux-arm64/-/typescript-linux-arm64-7.0.2.tgz",
      "integrity": "sha512-Qh4eU4/y3yDjnfjjyPYihMj5/ODIlmt+Bzu17OI+fiSRDW57QmU5SiN63exPRNJPKUzcc1INa1NXdrJ+MqHjUQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=16.20.0"
      }
    },
    "node_modules/@typescript/typescript-linux-loong64": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/@typescript/typescript-linux-loong64/-/typescript-linux-loong64-7.0.2.tgz",
      "integrity": "sha512-uEHck9i8hoAzXPiYRib1O7miOnz23SxIeVl6F4LXox+qov1K35jHcEW6VHKvZI+pyvl7fZEP4MCU5LYvIq1GuQ==",
      "cpu": [
        "loong64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=16.20.0"
      }
    },
    "node_modules/@typescript/typescript-linux-mips64el": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/@typescript/typescript-linux-mips64el/-/typescript-linux-mips64el-7.0.2.tgz",
      "integrity": "sha512-R4KvAMnE43W5Qeqb0Ly56O3mWMWIAgsMyz36DCaycd5nbg/9kzm0liw3JocfRqyJY0KPmzFjbswozXyW0DnIYA==",
      "cpu": [
        "mips64el"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=16.20.0"
      }
    },
    "node_modules/@typescript/typescript-linux-ppc64": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/@typescript/typescript-linux-ppc64/-/typescript-linux-ppc64-7.0.2.tgz",
      "integrity": "sha512-DORx5b3sd/4S7eayxm4FQv+A7CrkUIGRaHiwI8oiHTAI1fAPWhF4J0vAlkC8biAlHSVVwxMQ3tjZ2/DVbnQiiA==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=16.20.0"
      }
    },
    "node_modules/@typescript/typescript-linux-riscv64": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/@typescript/typescript-linux-riscv64/-/typescript-linux-riscv64-7.0.2.tgz",
      "integrity": "sha512-wf0jqEDOjrPRnKwYRyyJDRo11KMbvMFrU+q4zqKyChODBzvlkbhNQfKvLxQCcwTpdDaXSHZTVuh0JoCrKCUMHQ==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=16.20.0"
      }
    },
    "node_modules/@typescript/typescript-linux-s390x": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/@typescript/typescript-linux-s390x/-/typescript-linux-s390x-7.0.2.tgz",
      "integrity": "sha512-IkwJc3L7yhytWd/ewjyxNDfOmswCm9GWMJT/ue/dU4aZNbwZeYAetq42VyLmsmSjvoX7z74X6ZaYCtzAr0EuGw==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=16.20.0"
      }
    },
    "node_modules/@typescript/typescript-linux-x64": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/@typescript/typescript-linux-x64/-/typescript-linux-x64-7.0.2.tgz",
      "integrity": "sha512-EYdf2cNg7rgCWJnxCdJ+F3V39O8ihb37eHAu1LK8oAFizgTQbPOK7zHHXbPt8rX24COqODXeI3sIf0fCXG7H/A==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=16.20.0"
      }
    },
    "node_modules/@typescript/typescript-netbsd-arm64": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/@typescript/typescript-netbsd-arm64/-/typescript-netbsd-arm64-7.0.2.tgz",
      "integrity": "sha512-+polYF4MF04aPpO5FTkHran9yUQDSXqy5GiSDKpsll5jy3l3+g9QLhpf39T+ePtefhXLOGrLl0QIjkQP6VnelA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "netbsd"
      ],
      "engines": {
        "node": ">=16.20.0"
      }
    },
    "node_modules/@typescript/typescript-netbsd-x64": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/@typescript/typescript-netbsd-x64/-/typescript-netbsd-x64-7.0.2.tgz",
      "integrity": "sha512-8YIT0EHM/3dq10ZOVF/A7pc/YSMtbcecct4rWtexrnSCHOPcpC2KTLXfTCR6vDpnSiY12heNb1GiN/wu+T/FyA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "netbsd"
      ],
      "engines": {
        "node": ">=16.20.0"
      }
    },
    "node_modules/@typescript/typescript-openbsd-arm64": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/@typescript/typescript-openbsd-arm64/-/typescript-openbsd-arm64-7.0.2.tgz",
      "integrity": "sha512-APT8+ClYnuYm1u9+kgGXoMj2VzWzcymwh2gNSQVySHfkRDGOTVkoWLjCmOQSaO+PoqQ57B0flRp9SA+7GnnkzQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "openbsd"
      ],
      "engines": {
        "node": ">=16.20.0"
      }
    },
    "node_modules/@typescript/typescript-openbsd-x64": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/@typescript/typescript-openbsd-x64/-/typescript-openbsd-x64-7.0.2.tgz",
      "integrity": "sha512-yX7s+Q0Dln0Dt9tEzZsAjXXR/+ytBM7AlglaqyeMPxQszJ1JhlJdZ6jLA+IzldHtflX81em7lDao1xXu+aRRkg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "openbsd"
      ],
      "engines": {
        "node": ">=16.20.0"
      }
    },
    "node_modules/@typescript/typescript-sunos-x64": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/@typescript/typescript-sunos-x64/-/typescript-sunos-x64-7.0.2.tgz",
      "integrity": "sha512-dLJDGaLZ1D4HPQn62u1n8mBDkJREwMsAkCdkwd4Ieqw+x3TUyTsqY0YiBCtE6H6OzzgGk3iuZ3vFWRS+E8/d1g==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "sunos"
      ],
      "engines": {
        "node": ">=16.20.0"
      }
    },
    "node_modules/@typescript/typescript-win32-arm64": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/@typescript/typescript-win32-arm64/-/typescript-win32-arm64-7.0.2.tgz",
      "integrity": "sha512-Gyl1Vy6OsWesLzmq+EP0Fb7b4Nid5232AvcA2SFcdYreldpNtYFFofPjnt62y9hQy7VTaZp65ICJjuAQRaVcIQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=16.20.0"
      }
    },
    "node_modules/@typescript/typescript-win32-x64": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/@typescript/typescript-win32-x64/-/typescript-win32-x64-7.0.2.tgz",
      "integrity": "sha512-0BQ3HkAHHlKLSp1qRvf3SUhGpGsDuhB/jgFw75guyqbxJqEaS0Cw/VFO8i2nHglJUzQCRtMMR/IBAKE3ETMC4g==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=16.20.0"
      }
    },
    "node_modules/accepts": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/accepts/-/accepts-2.0.0.tgz",
      "integrity": "sha512-5cvg6CtKwfgdmVqY1WIiXKc3Q1bkRqGLi+2W/6ao+6Y7gu/RCwRuAhGEzh5B4KlszSuTLgZYuqFqo5bImjNKng==",
      "license": "MIT",
      "dependencies": {
        "mime-types": "^3.0.0",
        "negotiator": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/acorn": {
      "version": "8.17.0",
      "resolved": "https://registry.npmjs.org/acorn/-/acorn-8.17.0.tgz",
      "integrity": "sha512-xRQbDb9BnwDafYNn6Vwl839DYVjqXYb1XVGtWAZ1kcDc6iwAL4hg3B1dZlRiuENFeO2H53gFG3in621AdERVAg==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "acorn": "bin/acorn"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/acorn-jsx": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/acorn-jsx/-/acorn-jsx-5.3.2.tgz",
      "integrity": "sha512-rq9s+JNhf0IChjtDXxllJ7g41oZk5SlXtp0LHwyA5cejwn7vKmKp4pPri6YEePv2PU65sAsegbXtIinmDFDXgQ==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "acorn": "^6.0.0 || ^7.0.0 || ^8.0.0"
      }
    },
    "node_modules/acorn-walk": {
      "version": "8.3.5",
      "resolved": "https://registry.npmjs.org/acorn-walk/-/acorn-walk-8.3.5.tgz",
      "integrity": "sha512-HEHNfbars9v4pgpW6SO1KSPkfoS0xVOM/9UzkJltjlsHZmJasxg8aXkuZa7SMf8vKGIBhpUsPluQSqhJFCqebw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "acorn": "^8.11.0"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/ajv": {
      "version": "6.15.0",
      "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.15.0.tgz",
      "integrity": "sha512-fgFx7Hfoq60ytK2c7DhnF8jIvzYgOMxfugjLOSMHjLIPgenqa7S7oaagATUq99mV6IYvN2tRmC0wnTYX6iPbMw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fast-deep-equal": "^3.1.1",
        "fast-json-stable-stringify": "^2.0.0",
        "json-schema-traverse": "^0.4.1",
        "uri-js": "^4.2.2"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/epoberezkin"
      }
    },
    "node_modules/anymatch": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.3.tgz",
      "integrity": "sha512-KMReFUr0B4t+D+OBkjR3KYqvocp2XaSzO55UcB6mgQMd3KbcE+mWTyvVV7D/zsdEbNnV6acZUutkiHQXvTr1Rw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "normalize-path": "^3.0.0",
        "picomatch": "^2.0.4"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/arg": {
      "version": "4.1.3",
      "resolved": "https://registry.npmjs.org/arg/-/arg-4.1.3.tgz",
      "integrity": "sha512-58S9QDqG0Xx27YwPSt9fJxivjYl432YCwfDMfZ+71RAqUrZef7LrKQZ3LHLOwCS4FLNBplP533Zx895SeOCHvA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/balanced-match": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-4.0.4.tgz",
      "integrity": "sha512-BLrgEcRTwX2o6gGxGOCNyMvGSp35YofuYzw9h1IMTRmKqttAZZVU67bdb9Pr2vUHA8+j3i2tJfjO6C6+4myGTA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "18 || 20 || >=22"
      }
    },
    "node_modules/bcryptjs": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/bcryptjs/-/bcryptjs-3.0.3.tgz",
      "integrity": "sha512-GlF5wPWnSa/X5LKM1o0wz0suXIINz1iHRLvTS+sLyi7XPbe5ycmYI3DlZqVGZZtDgl4DmasFg7gOB3JYbphV5g==",
      "license": "BSD-3-Clause",
      "bin": {
        "bcrypt": "bin/bcrypt"
      }
    },
    "node_modules/binary-extensions": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.3.0.tgz",
      "integrity": "sha512-Ceh+7ox5qe7LJuLHoY0feh3pHuUDHAcRUeyL2VYghZwfpkNIy/+8Ocg0a3UuSoYzavmylwuLWQOf3hl0jjMMIw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/body-parser": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/body-parser/-/body-parser-2.3.0.tgz",
      "integrity": "sha512-2cGmJupaNgg+QUwVLAucDuWuoMZ6EX9iHDRswZ5lsNYEmwPaRknMPCLZz07yTzVq/83p4o/wzbDZbBrTvGGTIw==",
      "license": "MIT",
      "dependencies": {
        "bytes": "^3.1.2",
        "content-type": "^2.0.0",
        "debug": "^4.4.3",
        "http-errors": "^2.0.1",
        "iconv-lite": "^0.7.2",
        "on-finished": "^2.4.1",
        "qs": "^6.15.2",
        "raw-body": "^3.0.2",
        "type-is": "^2.1.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/body-parser/node_modules/content-type": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/content-type/-/content-type-2.0.0.tgz",
      "integrity": "sha512-j/O/d7GcZCyNl7/hwZAb606rzqkyvaDctLmckbxLzHvFBzTJHuGEdodATcP3yIRoDrLHkIATJuvzbFlp/ki2cQ==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/brace-expansion": {
      "version": "5.0.7",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-5.0.7.tgz",
      "integrity": "sha512-7oFy703dxfY3/NLxC1fh2SUCQ0H9rmAY+5EpDVfXjUTTs+HEwR2nYaqLv+GWcTsumwxPfiz6CzCNkwXwBUwqCA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^4.0.2"
      },
      "engines": {
        "node": "18 || 20 || >=22"
      }
    },
    "node_modules/braces": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.3.tgz",
      "integrity": "sha512-yQbXgO/OSZVD2IsiLlro+7Hf6Q18EJrKSEsdoMzKePKXct3gvD8oLcOQdIzGupr5Fj+EDe8gO/lxc1BzfMpxvA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fill-range": "^7.1.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/bson": {
      "version": "7.3.1",
      "resolved": "https://registry.npmjs.org/bson/-/bson-7.3.1.tgz",
      "integrity": "sha512-h/C0qe6857pQhcSJHLfsR1uYGj98Ge3wKAD3Ed9KqH3wcVh+BM4Jq4xISD7vs9OPuT07n+q3QQVjslJ286j6ag==",
      "license": "Apache-2.0",
      "engines": {
        "node": ">=20.19.0"
      }
    },
    "node_modules/buffer-equal-constant-time": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/buffer-equal-constant-time/-/buffer-equal-constant-time-1.0.1.tgz",
      "integrity": "sha512-zRpUiDwd/xk6ADqPMATG8vc9VPrkck7T07OIx0gnjmJAnHnTVXNQG3vfvWNuiZIkwu9KrKdA1iJKfsfTVxE6NA==",
      "license": "BSD-3-Clause"
    },
    "node_modules/bytes": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.2.tgz",
      "integrity": "sha512-/Nf7TyzTx6S3yRJObOAV7956r8cr2+Oj8AC5dt8wSP3BQAoeX58NoHyCU8P8zGkNXStjTSi6fzO6F0pBdcYbEg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/call-bind-apply-helpers": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/call-bind-apply-helpers/-/call-bind-apply-helpers-1.0.2.tgz",
      "integrity": "sha512-Sp1ablJ0ivDkSzjcaJdxEunN5/XvksFJ2sMBFfq6x0ryhQV/2b/KwFe21cMpmHtPOSij8K99/wSfoEuTObmuMQ==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/call-bound": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/call-bound/-/call-bound-1.0.4.tgz",
      "integrity": "sha512-+ys997U96po4Kx/ABpBCqhA9EuxJaQWDQg7295H4hBphv3IZg0boBKuwYpt4YXp6MZ5AmZQnU/tyMTlRpaSejg==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "get-intrinsic": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/chokidar": {
      "version": "3.6.0",
      "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.6.0.tgz",
      "integrity": "sha512-7VT13fmjotKpGipCW9JEQAusEPE+Ei8nl6/g4FBAmIm0GOOLMua9NDDo/DWp0ZAxCr3cPq5ZpBqmPAQgDda2Pw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "anymatch": "~3.1.2",
        "braces": "~3.0.2",
        "glob-parent": "~5.1.2",
        "is-binary-path": "~2.1.0",
        "is-glob": "~4.0.1",
        "normalize-path": "~3.0.0",
        "readdirp": "~3.6.0"
      },
      "engines": {
        "node": ">= 8.10.0"
      },
      "funding": {
        "url": "https://paulmillr.com/funding/"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.2"
      }
    },
    "node_modules/chokidar/node_modules/glob-parent": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
      "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/content-disposition": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-1.1.0.tgz",
      "integrity": "sha512-5jRCH9Z/+DRP7rkvY83B+yGIGX96OYdJmzngqnw2SBSxqCFPd0w2km3s5iawpGX8krnwSGmF0FW5Nhr0Hfai3g==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/content-type": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/content-type/-/content-type-1.0.5.tgz",
      "integrity": "sha512-nTjqfcBFEipKdXCv4YDQWCfmcLZKm81ldF0pAopTvyrFGVbcR6P/VAAd5G7N+0tTr8QqiU0tFadD6FK4NtJwOA==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/cookie": {
      "version": "0.7.2",
      "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.7.2.tgz",
      "integrity": "sha512-yki5XnKuf750l50uGTllt6kKILY4nQ1eNIQatoXEByZ5dWgnKqbnqmTrBE5B4N7lrMJKQ2ytWMiTO2o0v6Ew/w==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/cookie-signature": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.2.2.tgz",
      "integrity": "sha512-D76uU73ulSXrD1UXF4KE2TMxVVwhsnCgfAyTg9k8P6KGZjlXKrOLe4dJQKI3Bxi5wjesZoFXJWElNWBjPZMbhg==",
      "license": "MIT",
      "engines": {
        "node": ">=6.6.0"
      }
    },
    "node_modules/cors": {
      "version": "2.8.6",
      "resolved": "https://registry.npmjs.org/cors/-/cors-2.8.6.tgz",
      "integrity": "sha512-tJtZBBHA6vjIAaF6EnIaq6laBBP9aq/Y3ouVJjEfoHbRBcHBAHYcMh/w8LDrk2PvIMMq8gmopa5D4V8RmbrxGw==",
      "license": "MIT",
      "dependencies": {
        "object-assign": "^4",
        "vary": "^1"
      },
      "engines": {
        "node": ">= 0.10"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/create-require": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/create-require/-/create-require-1.1.1.tgz",
      "integrity": "sha512-dcKFX3jn0MpIaXjisoRvexIJVEKzaq7z2rZKxf+MSr9TkdmHmsU4m2lcLojrj/FHl8mk5VxMmYA+ftRkP/3oKQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/cross-spawn": {
      "version": "7.0.6",
      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.6.tgz",
      "integrity": "sha512-uV2QOWP2nWzsy2aMp8aRibhi9dlzF5Hgh5SHaB9OiTGEyDTiJJyx0uy51QXdyWbtAHNua4XJzUKca3OzKUd3vA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "path-key": "^3.1.0",
        "shebang-command": "^2.0.0",
        "which": "^2.0.1"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/debug": {
      "version": "4.4.3",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.3.tgz",
      "integrity": "sha512-RGwwWnwQvkVfavKVt22FGLw+xYSdzARwm0ru6DhTVA3umU5hZc28V3kO4stgYryrTlLpuvgI9GiijltAjNbcqA==",
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.3"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/deep-is": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/deep-is/-/deep-is-0.1.4.tgz",
      "integrity": "sha512-oIPzksmTg4/MriiaYGO+okXDT7ztn/w3Eptv/+gSIdMdKsJo0u4CfYNFJPy+4SKMuCqGw2wxnA+URMg3t8a/bQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/depd": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/depd/-/depd-2.0.0.tgz",
      "integrity": "sha512-g7nH6P6dyDioJogAAGprGpCtVImJhpPk/roCzdb3fIh61/s/nPsfR6onyMwkCAR/OlC3yBC0lESvUoQEAssIrw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/diff": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/diff/-/diff-4.0.4.tgz",
      "integrity": "sha512-X07nttJQkwkfKfvTPG/KSnE2OMdcUCao6+eXF3wmnIQRn2aPAHH3VxDbDOdegkd6JbPsXqShpvEOHfAT+nCNwQ==",
      "dev": true,
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.3.1"
      }
    },
    "node_modules/dotenv": {
      "version": "17.4.2",
      "resolved": "https://registry.npmjs.org/dotenv/-/dotenv-17.4.2.tgz",
      "integrity": "sha512-nI4U3TottKAcAD9LLud4Cb7b2QztQMUEfHbvhTH09bqXTxnSie8WnjPALV/WMCrJZ6UV/qHJ6L03OqO3LcdYZw==",
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://dotenvx.com"
      }
    },
    "node_modules/dunder-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/dunder-proto/-/dunder-proto-1.0.1.tgz",
      "integrity": "sha512-KIN/nDJBQRcXw0MLVhZE9iQHmG68qAVIBg9CqmUYjmQIhgij9U5MFvrqkUL5FbtyyzZuOeOt0zdeRe4UY7ct+A==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.1",
        "es-errors": "^1.3.0",
        "gopd": "^1.2.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/ecdsa-sig-formatter": {
      "version": "1.0.11",
      "resolved": "https://registry.npmjs.org/ecdsa-sig-formatter/-/ecdsa-sig-formatter-1.0.11.tgz",
      "integrity": "sha512-nagl3RYrbNv6kQkeJIpt6NJZy8twLB/2vtz6yN9Z4vRKHN4/QZJIEbqohALSgwKdnksuY3k5Addp5lg8sVoVcQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "safe-buffer": "^5.0.1"
      }
    },
    "node_modules/ee-first": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",
      "integrity": "sha512-WMwm9LhRUo+WUaRN+vRuETqG89IgZphVSNkdFgeb6sS/E4OrDIN7t48CAewSHXc6C8lefD8KKfr5vY61brQlow==",
      "license": "MIT"
    },
    "node_modules/encodeurl": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-2.0.0.tgz",
      "integrity": "sha512-Q0n9HRi4m6JuGIV1eFlmvJB7ZEVxu93IrMyiMsGC0lrMJMWzRgx6WGquyfQgZVb31vhGgXnfmPNNXmxnOkRBrg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/es-define-property": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/es-define-property/-/es-define-property-1.0.1.tgz",
      "integrity": "sha512-e3nRfgfUZ4rNGL232gUgX06QNyyez04KdjFrF+LTRoOXmrOgFKDg4BCdsjW8EnT69eqdYGmRpJwiPVYNrCaW3g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-errors": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/es-errors/-/es-errors-1.3.0.tgz",
      "integrity": "sha512-Zf5H2Kxt2xjTvbJvP2ZWLEICxA6j+hAmMzIlypy4xcBg1vKVnx89Wy0GbS+kf5cwCVFFzdCFh2XSCFNULS6csw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-object-atoms": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/es-object-atoms/-/es-object-atoms-1.1.2.tgz",
      "integrity": "sha512-HWcBoN6NileqtSydK2FqHbS/LoDd2pqrnQHLyJzBj4kOp/ky2MWMN694xOfkK8/SnUsW2DH7EfyVlydKCsm1Zw==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/escape-html": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",
      "integrity": "sha512-NiSupZ4OeuGwr68lGIeym/ksIZMJodUGOSCZ/FSnTxcrekbvqrgdUxlJOMpijaKZVjAJrWrGs/6Jy8OMuyj9ow==",
      "license": "MIT"
    },
    "node_modules/escape-string-regexp": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-4.0.0.tgz",
      "integrity": "sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/eslint": {
      "version": "10.7.0",
      "resolved": "https://registry.npmjs.org/eslint/-/eslint-10.7.0.tgz",
      "integrity": "sha512-GVTD7s1vdIl6UYvAfriOPeY1Df8LIZjfofLvHwde+erDHGGuHyuM6xoxRxmHiebhYuD2p1vN4wWh0XzPARSGDQ==",
      "dev": true,
      "license": "MIT",
      "workspaces": [
        "packages/*"
      ],
      "dependencies": {
        "@eslint-community/eslint-utils": "^4.8.0",
        "@eslint-community/regexpp": "^4.12.2",
        "@eslint/config-array": "^0.23.5",
        "@eslint/config-helpers": "^0.6.0",
        "@eslint/core": "^1.2.1",
        "@eslint/plugin-kit": "^0.7.2",
        "@humanfs/node": "^0.16.6",
        "@humanwhocodes/module-importer": "^1.0.1",
        "@humanwhocodes/retry": "^0.4.2",
        "@types/estree": "^1.0.6",
        "ajv": "^6.14.0",
        "cross-spawn": "^7.0.6",
        "debug": "^4.3.2",
        "escape-string-regexp": "^4.0.0",
        "eslint-scope": "^9.1.2",
        "eslint-visitor-keys": "^5.0.1",
        "espree": "^11.2.0",
        "esquery": "^1.7.0",
        "esutils": "^2.0.2",
        "fast-deep-equal": "^3.1.3",
        "file-entry-cache": "^8.0.0",
        "find-up": "^5.0.0",
        "glob-parent": "^6.0.2",
        "ignore": "^5.2.0",
        "imurmurhash": "^0.1.4",
        "is-glob": "^4.0.0",
        "json-stable-stringify-without-jsonify": "^1.0.1",
        "minimatch": "^10.2.4",
        "natural-compare": "^1.4.0",
        "optionator": "^0.9.3"
      },
      "bin": {
        "eslint": "bin/eslint.js"
      },
      "engines": {
        "node": "^20.19.0 || ^22.13.0 || >=24"
      },
      "funding": {
        "url": "https://eslint.org/donate"
      },
      "peerDependencies": {
        "jiti": "*"
      },
      "peerDependenciesMeta": {
        "jiti": {
          "optional": true
        }
      }
    },
    "node_modules/eslint-scope": {
      "version": "9.1.2",
      "resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-9.1.2.tgz",
      "integrity": "sha512-xS90H51cKw0jltxmvmHy2Iai1LIqrfbw57b79w/J7MfvDfkIkFZ+kj6zC3BjtUwh150HsSSdxXZcsuv72miDFQ==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "@types/esrecurse": "^4.3.1",
        "@types/estree": "^1.0.8",
        "esrecurse": "^4.3.0",
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": "^20.19.0 || ^22.13.0 || >=24"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/eslint-visitor-keys": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-5.0.1.tgz",
      "integrity": "sha512-tD40eHxA35h0PEIZNeIjkHoDR4YjjJp34biM0mDvplBe//mB+IHCqHDGV7pxF+7MklTvighcCPPZC7ynWyjdTA==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^20.19.0 || ^22.13.0 || >=24"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/espree": {
      "version": "11.2.0",
      "resolved": "https://registry.npmjs.org/espree/-/espree-11.2.0.tgz",
      "integrity": "sha512-7p3DrVEIopW1B1avAGLuCSh1jubc01H2JHc8B4qqGblmg5gI9yumBgACjWo4JlIc04ufug4xJ3SQI8HkS/Rgzw==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "acorn": "^8.16.0",
        "acorn-jsx": "^5.3.2",
        "eslint-visitor-keys": "^5.0.1"
      },
      "engines": {
        "node": "^20.19.0 || ^22.13.0 || >=24"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/esquery": {
      "version": "1.7.0",
      "resolved": "https://registry.npmjs.org/esquery/-/esquery-1.7.0.tgz",
      "integrity": "sha512-Ap6G0WQwcU/LHsvLwON1fAQX9Zp0A2Y6Y/cJBl9r/JbW90Zyg4/zbG6zzKa2OTALELarYHmKu0GhpM5EO+7T0g==",
      "dev": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "estraverse": "^5.1.0"
      },
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/esrecurse": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/esrecurse/-/esrecurse-4.3.0.tgz",
      "integrity": "sha512-KmfKL3b6G+RXvP8N1vr3Tq1kL/oCFgn2NYXEtqP8/L3pKapUA4G8cFVaoF3SU323CD4XypR/ffioHmkti6/Tag==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/estraverse": {
      "version": "5.3.0",
      "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.3.0.tgz",
      "integrity": "sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/esutils": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
      "integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/etag": {
      "version": "1.8.1",
      "resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",
      "integrity": "sha512-aIL5Fx7mawVa300al2BnEE4iNvo1qETxLrPI/o05L7z6go7fCw1J6EQmbK4FmJ2AS7kgVF/KEZWufBfdClMcPg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/express": {
      "version": "5.2.1",
      "resolved": "https://registry.npmjs.org/express/-/express-5.2.1.tgz",
      "integrity": "sha512-hIS4idWWai69NezIdRt2xFVofaF4j+6INOpJlVOLDO8zXGpUVEVzIYk12UUi2JzjEzWL3IOAxcTubgz9Po0yXw==",
      "license": "MIT",
      "dependencies": {
        "accepts": "^2.0.0",
        "body-parser": "^2.2.1",
        "content-disposition": "^1.0.0",
        "content-type": "^1.0.5",
        "cookie": "^0.7.1",
        "cookie-signature": "^1.2.1",
        "debug": "^4.4.0",
        "depd": "^2.0.0",
        "encodeurl": "^2.0.0",
        "escape-html": "^1.0.3",
        "etag": "^1.8.1",
        "finalhandler": "^2.1.0",
        "fresh": "^2.0.0",
        "http-errors": "^2.0.0",
        "merge-descriptors": "^2.0.0",
        "mime-types": "^3.0.0",
        "on-finished": "^2.4.1",
        "once": "^1.4.0",
        "parseurl": "^1.3.3",
        "proxy-addr": "^2.0.7",
        "qs": "^6.14.0",
        "range-parser": "^1.2.1",
        "router": "^2.2.0",
        "send": "^1.1.0",
        "serve-static": "^2.2.0",
        "statuses": "^2.0.1",
        "type-is": "^2.0.1",
        "vary": "^1.1.2"
      },
      "engines": {
        "node": ">= 18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/fast-deep-equal": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
      "integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-json-stable-stringify": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz",
      "integrity": "sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-levenshtein": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz",
      "integrity": "sha512-DCXu6Ifhqcks7TZKY3Hxp3y6qphY5SJZmrWMDrKcERSOXWQdMhU9Ig/PYrzyw/ul9jOIyh0N4M0tbC5hodg8dw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/file-entry-cache": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/file-entry-cache/-/file-entry-cache-8.0.0.tgz",
      "integrity": "sha512-XXTUwCvisa5oacNGRP9SfNtYBNAMi+RPwBFmblZEF7N7swHYQS6/Zfk7SRwx4D5j3CH211YNRco1DEMNVfZCnQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "flat-cache": "^4.0.0"
      },
      "engines": {
        "node": ">=16.0.0"
      }
    },
    "node_modules/fill-range": {
      "version": "7.1.1",
      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.1.1.tgz",
      "integrity": "sha512-YsGpe3WHLK8ZYi4tWDg2Jy3ebRz2rXowDxnld4bkQB00cc/1Zw9AWnC0i9ztDJitivtQvaI9KaLyKrc+hBW0yg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "to-regex-range": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/finalhandler": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-2.1.1.tgz",
      "integrity": "sha512-S8KoZgRZN+a5rNwqTxlZZePjT/4cnm0ROV70LedRHZ0p8u9fRID0hJUZQpkKLzro8LfmC8sx23bY6tVNxv8pQA==",
      "license": "MIT",
      "dependencies": {
        "debug": "^4.4.0",
        "encodeurl": "^2.0.0",
        "escape-html": "^1.0.3",
        "on-finished": "^2.4.1",
        "parseurl": "^1.3.3",
        "statuses": "^2.0.1"
      },
      "engines": {
        "node": ">= 18.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/find-up": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-5.0.0.tgz",
      "integrity": "sha512-78/PXT1wlLLDgTzDs7sjq9hzz0vXD+zn+7wypEe4fXQxCmdmqfGsEPQxmiCSQI3ajFV91bVSsvNtrJRiW6nGng==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "locate-path": "^6.0.0",
        "path-exists": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/flat-cache": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/flat-cache/-/flat-cache-4.0.1.tgz",
      "integrity": "sha512-f7ccFPK3SXFHpx15UIGyRJ/FJQctuKZ0zVuN3frBo4HnK3cay9VEW0R6yPYFHC0AgqhukPzKjq22t5DmAyqGyw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "flatted": "^3.2.9",
        "keyv": "^4.5.4"
      },
      "engines": {
        "node": ">=16"
      }
    },
    "node_modules/flatted": {
      "version": "3.4.2",
      "resolved": "https://registry.npmjs.org/flatted/-/flatted-3.4.2.tgz",
      "integrity": "sha512-PjDse7RzhcPkIJwy5t7KPWQSZ9cAbzQXcafsetQoD7sOJRQlGikNbx7yZp2OotDnJyrDcbyRq3Ttb18iYOqkxA==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/forwarded": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/forwarded/-/forwarded-0.2.0.tgz",
      "integrity": "sha512-buRG0fpBtRHSTCOASe6hD258tEubFoRLb4ZNA6NxMVHNw2gOcwHo9wyablzMzOA5z9xA9L1KNjk/Nt6MT9aYow==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/fresh": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/fresh/-/fresh-2.0.0.tgz",
      "integrity": "sha512-Rx/WycZ60HOaqLKAi6cHRKKI7zxWbJ31MhntmtwMoaTeF7XFH9hhBp8vITaMidfljRQ6eYWCKkaTK+ykVJHP2A==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/fsevents": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
      "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/function-bind": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.2.tgz",
      "integrity": "sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-intrinsic": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.3.0.tgz",
      "integrity": "sha512-9fSjSaos/fRIVIp+xSJlE6lfwhES7LNtKaCBIamHsjr2na1BiABJPo0mOjjz8GJDURarmCPGqaiVg5mfjb98CQ==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "es-define-property": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.1",
        "function-bind": "^1.1.2",
        "get-proto": "^1.0.1",
        "gopd": "^1.2.0",
        "has-symbols": "^1.1.0",
        "hasown": "^2.0.2",
        "math-intrinsics": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/get-proto/-/get-proto-1.0.1.tgz",
      "integrity": "sha512-sTSfBjoXBp89JvIKIefqw7U2CCebsc74kiY6awiGogKtoSGbgjYE/G/+l9sF3MWFPNc9IcoOC4ODfKHfxFmp0g==",
      "license": "MIT",
      "dependencies": {
        "dunder-proto": "^1.0.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/glob-parent": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-6.0.2.tgz",
      "integrity": "sha512-XxwI8EOhVQgWp6iDL+3b0r86f4d6AX6zSU55HfB4ydCEuXLXc5FcYeOu+nnGftS4TEju/11rt4KJPTMgbfmv4A==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.3"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/gopd": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/gopd/-/gopd-1.2.0.tgz",
      "integrity": "sha512-ZUKRh6/kUFoAiTAtTYPZJ3hw9wNxx+BIBOijnlG9PnrJsCcSjs1wyyD6vJpaYtgnzDrKYRSqf3OO6Rfa93xsRg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-flag": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
      "integrity": "sha512-sKJf1+ceQBr4SMkvQnBDNDtf4TXpVhVGateu0t918bl30FnbE2m4vNLX+VWe/dpjlb+HugGYzW7uQXH98HPEYw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/has-symbols": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.1.0.tgz",
      "integrity": "sha512-1cDNdwJ2Jaohmb3sg4OmKaMBwuC48sYni5HUw2DvsC8LjGTLK9h+eb1X6RyuOHe4hT0ULCW68iomhjUoKUqlPQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/hasown": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/hasown/-/hasown-2.0.4.tgz",
      "integrity": "sha512-T2UbfbBEF32wiepXIsMlTW9+dDYC6wMh/t/vYA4tuOMKqWz/n3vr1NFSxQiyP+zk2mXsoMA/i/7qV6LKut1t1A==",
      "license": "MIT",
      "dependencies": {
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/http-errors": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-2.0.1.tgz",
      "integrity": "sha512-4FbRdAX+bSdmo4AUFuS0WNiPz8NgFt+r8ThgNWmlrjQjt1Q7ZR9+zTlce2859x4KSXrwIsaeTqDoKQmtP8pLmQ==",
      "license": "MIT",
      "dependencies": {
        "depd": "~2.0.0",
        "inherits": "~2.0.4",
        "setprototypeof": "~1.2.0",
        "statuses": "~2.0.2",
        "toidentifier": "~1.0.1"
      },
      "engines": {
        "node": ">= 0.8"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/iconv-lite": {
      "version": "0.7.3",
      "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.7.3.tgz",
      "integrity": "sha512-IKXpvIzjnC9XTAUbVBcMfGS0EPaIXtW6v+zr+RRp+hqULEpo0owZax6wyRwPOJbWbzjYspQwusTsfVr0ifh4uQ==",
      "license": "MIT",
      "dependencies": {
        "safer-buffer": ">= 2.1.2 < 3.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/ignore": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/ignore/-/ignore-5.3.2.tgz",
      "integrity": "sha512-hsBTNUqQTDwkWtcdYI2i06Y/nUBEsNEDJKjWdigLvegy8kDuJAS8uRlpkkcQpyEXL0Z/pjDy5HBmMjRCJ2gq+g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/ignore-by-default": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/ignore-by-default/-/ignore-by-default-1.0.1.tgz",
      "integrity": "sha512-Ius2VYcGNk7T90CppJqcIkS5ooHUZyIQK+ClZfMfMNFEF9VSE73Fq+906u/CWu92x4gzZMWOwfFYckPObzdEbA==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/imurmurhash": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
      "integrity": "sha512-JmXMZ6wuvDmLiHEml9ykzqO6lwFbof0GG4IkcGaENdCRDDmMVnny7s5HsIgHCbaq0w2MyPhDqkhTUgS2LU2PHA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.8.19"
      }
    },
    "node_modules/inherits": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
      "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
      "license": "ISC"
    },
    "node_modules/ipaddr.js": {
      "version": "1.9.1",
      "resolved": "https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-1.9.1.tgz",
      "integrity": "sha512-0KI/607xoxSToH7GjN1FfSbLoU0+btTicjsQSWQlh/hZykN8KpmMf7uYwPW3R+akZ6R/w18ZlXSHBYXiYUPO3g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/is-binary-path": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-2.1.0.tgz",
      "integrity": "sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "binary-extensions": "^2.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-extglob": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
      "integrity": "sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-glob": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz",
      "integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-extglob": "^2.1.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-number": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
      "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.12.0"
      }
    },
    "node_modules/is-promise": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/is-promise/-/is-promise-4.0.0.tgz",
      "integrity": "sha512-hvpoI6korhJMnej285dSg6nu1+e6uxs7zG3BYAm5byqDsgJNWwxzM6z6iZiAgQR4TJ30JmBTOwqZUw3WlyH3AQ==",
      "license": "MIT"
    },
    "node_modules/isexe": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
      "integrity": "sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/json-buffer": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/json-buffer/-/json-buffer-3.0.1.tgz",
      "integrity": "sha512-4bV5BfR2mqfQTJm+V5tPPdf+ZpuhiIvTuAB5g8kcrXOZpTT/QwwVRWBywX1ozr6lEuPdbHxwaJlm9G6mI2sfSQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json-schema-traverse": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
      "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json-stable-stringify-without-jsonify": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/json-stable-stringify-without-jsonify/-/json-stable-stringify-without-jsonify-1.0.1.tgz",
      "integrity": "sha512-Bdboy+l7tA3OGW6FjyFHWkP5LuByj1Tk33Ljyq0axyzdk9//JSi2u3fP1QSmd1KNwq6VOKYGlAu87CisVir6Pw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/jsonwebtoken": {
      "version": "9.0.3",
      "resolved": "https://registry.npmjs.org/jsonwebtoken/-/jsonwebtoken-9.0.3.tgz",
      "integrity": "sha512-MT/xP0CrubFRNLNKvxJ2BYfy53Zkm++5bX9dtuPbqAeQpTVe0MQTFhao8+Cp//EmJp244xt6Drw/GVEGCUj40g==",
      "license": "MIT",
      "dependencies": {
        "jws": "^4.0.1",
        "lodash.includes": "^4.3.0",
        "lodash.isboolean": "^3.0.3",
        "lodash.isinteger": "^4.0.4",
        "lodash.isnumber": "^3.0.3",
        "lodash.isplainobject": "^4.0.6",
        "lodash.isstring": "^4.0.1",
        "lodash.once": "^4.0.0",
        "ms": "^2.1.1",
        "semver": "^7.5.4"
      },
      "engines": {
        "node": ">=12",
        "npm": ">=6"
      }
    },
    "node_modules/jwa": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/jwa/-/jwa-2.0.1.tgz",
      "integrity": "sha512-hRF04fqJIP8Abbkq5NKGN0Bbr3JxlQ+qhZufXVr0DvujKy93ZCbXZMHDL4EOtodSbCWxOqR8MS1tXA5hwqCXDg==",
      "license": "MIT",
      "dependencies": {
        "buffer-equal-constant-time": "^1.0.1",
        "ecdsa-sig-formatter": "1.0.11",
        "safe-buffer": "^5.0.1"
      }
    },
    "node_modules/jws": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/jws/-/jws-4.0.1.tgz",
      "integrity": "sha512-EKI/M/yqPncGUUh44xz0PxSidXFr/+r0pA70+gIYhjv+et7yxM+s29Y+VGDkovRofQem0fs7Uvf4+YmAdyRduA==",
      "license": "MIT",
      "dependencies": {
        "jwa": "^2.0.1",
        "safe-buffer": "^5.0.1"
      }
    },
    "node_modules/kareem": {
      "version": "3.3.0",
      "resolved": "https://registry.npmjs.org/kareem/-/kareem-3.3.0.tgz",
      "integrity": "sha512-kpSuLD3/7RenBnjnJdOHXCKC8dTd1JzeOiJhN0necWWci6cC+qX+VuwPnMVgb+a4+KNJSfgqahpnfWaeDXCimw==",
      "license": "Apache-2.0",
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/keyv": {
      "version": "4.5.4",
      "resolved": "https://registry.npmjs.org/keyv/-/keyv-4.5.4.tgz",
      "integrity": "sha512-oxVHkHR/EJf2CNXnWxRLW6mg7JyCCUcG0DtEGmL2ctUo1PNTin1PUil+r/+4r5MpVgC/fn1kjsx7mjSujKqIpw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "json-buffer": "3.0.1"
      }
    },
    "node_modules/levn": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/levn/-/levn-0.4.1.tgz",
      "integrity": "sha512-+bT2uH4E5LGE7h/n3evcS/sQlJXCpIp6ym8OWJ5eV6+67Dsql/LaaT7qJBAt2rzfoa/5QBGBhxDix1dMt2kQKQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "prelude-ls": "^1.2.1",
        "type-check": "~0.4.0"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/locate-path": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-6.0.0.tgz",
      "integrity": "sha512-iPZK6eYjbxRu3uB4/WZ3EsEIMJFMqAoopl3R+zuq0UjcAm/MO6KCweDgPfP3elTztoKP3KtnVHxTn2NHBSDVUw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-locate": "^5.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/lodash.includes": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/lodash.includes/-/lodash.includes-4.3.0.tgz",
      "integrity": "sha512-W3Bx6mdkRTGtlJISOvVD/lbqjTlPPUDTMnlXZFnVwi9NKJ6tiAk6LVdlhZMm17VZisqhKcgzpO5Wz91PCt5b0w==",
      "license": "MIT"
    },
    "node_modules/lodash.isboolean": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/lodash.isboolean/-/lodash.isboolean-3.0.3.tgz",
      "integrity": "sha512-Bz5mupy2SVbPHURB98VAcw+aHh4vRV5IPNhILUCsOzRmsTmSQ17jIuqopAentWoehktxGd9e/hbIXq980/1QJg==",
      "license": "MIT"
    },
    "node_modules/lodash.isinteger": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/lodash.isinteger/-/lodash.isinteger-4.0.4.tgz",
      "integrity": "sha512-DBwtEWN2caHQ9/imiNeEA5ys1JoRtRfY3d7V9wkqtbycnAmTvRRmbHKDV4a0EYc678/dia0jrte4tjYwVBaZUA==",
      "license": "MIT"
    },
    "node_modules/lodash.isnumber": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/lodash.isnumber/-/lodash.isnumber-3.0.3.tgz",
      "integrity": "sha512-QYqzpfwO3/CWf3XP+Z+tkQsfaLL/EnUlXWVkIk5FUPc4sBdTehEqZONuyRt2P67PXAk+NXmTBcc97zw9t1FQrw==",
      "license": "MIT"
    },
    "node_modules/lodash.isplainobject": {
      "version": "4.0.6",
      "resolved": "https://registry.npmjs.org/lodash.isplainobject/-/lodash.isplainobject-4.0.6.tgz",
      "integrity": "sha512-oSXzaWypCMHkPC3NvBEaPHf0KsA5mvPrOPgQWDsbg8n7orZ290M0BmC/jgRZ4vcJ6DTAhjrsSYgdsW/F+MFOBA==",
      "license": "MIT"
    },
    "node_modules/lodash.isstring": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/lodash.isstring/-/lodash.isstring-4.0.1.tgz",
      "integrity": "sha512-0wJxfxH1wgO3GrbuP+dTTk7op+6L41QCXbGINEmD+ny/G/eCqGzxyCsh7159S+mgDDcoarnBw6PC1PS5+wUGgw==",
      "license": "MIT"
    },
    "node_modules/lodash.once": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/lodash.once/-/lodash.once-4.1.1.tgz",
      "integrity": "sha512-Sb487aTOCr9drQVL8pIxOzVhafOjZN9UU54hiN8PU3uAiSV7lx1yYNpbNmex2PK6dSJoNTSJUUswT651yww3Mg==",
      "license": "MIT"
    },
    "node_modules/make-error": {
      "version": "1.3.6",
      "resolved": "https://registry.npmjs.org/make-error/-/make-error-1.3.6.tgz",
      "integrity": "sha512-s8UhlNe7vPKomQhC1qFelMokr/Sc3AgNbso3n74mVPA5LTZwkB9NlXf4XPamLxJE8h0gh73rM94xvwRT2CVInw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/math-intrinsics": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/math-intrinsics/-/math-intrinsics-1.1.0.tgz",
      "integrity": "sha512-/IXtbwEk5HTPyEwyKX6hGkYXxM9nbj64B+ilVJnC/R6B0pH5G4V3b0pVbL7DBj4tkhBAppbQUlf6F6Xl9LHu1g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/media-typer": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/media-typer/-/media-typer-1.1.0.tgz",
      "integrity": "sha512-aisnrDP4GNe06UcKFnV5bfMNPBUw4jsLGaWwWfnH3v02GnBuXX2MCVn5RbrWo0j3pczUilYblq7fQ7Nw2t5XKw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/memory-pager": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/memory-pager/-/memory-pager-1.5.0.tgz",
      "integrity": "sha512-ZS4Bp4r/Zoeq6+NLJpP+0Zzm0pR8whtGPf1XExKLJBAczGMnSi3It14OiNCStjQjM6NU1okjQGSxgEZN8eBYKg==",
      "license": "MIT"
    },
    "node_modules/merge-descriptors": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-2.0.0.tgz",
      "integrity": "sha512-Snk314V5ayFLhp3fkUREub6WtjBfPdCPY1Ln8/8munuLuiYhsABgBVWsozAG+MWMbVEvcdcpbi9R7ww22l9Q3g==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/mime-db": {
      "version": "1.54.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.54.0.tgz",
      "integrity": "sha512-aU5EJuIN2WDemCcAp2vFBfp/m4EAhWJnUNSSw0ixs7/kXbd6Pg64EmwJkNdFhB8aWt1sH2CTXrLxo/iAGV3oPQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/mime-types": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-3.0.2.tgz",
      "integrity": "sha512-Lbgzdk0h4juoQ9fCKXW4by0UJqj+nOOrI9MJ1sSj4nI8aI2eo1qmvQEie4VD1glsS250n15LsWsYtCugiStS5A==",
      "license": "MIT",
      "dependencies": {
        "mime-db": "^1.54.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/minimatch": {
      "version": "10.2.5",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-10.2.5.tgz",
      "integrity": "sha512-MULkVLfKGYDFYejP07QOurDLLQpcjk7Fw+7jXS2R2czRQzR56yHRveU5NDJEOviH+hETZKSkIk5c+T23GjFUMg==",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "dependencies": {
        "brace-expansion": "^5.0.5"
      },
      "engines": {
        "node": "18 || 20 || >=22"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/mongodb": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/mongodb/-/mongodb-7.2.0.tgz",
      "integrity": "sha512-F/2+BMZtLVhY30ioZp0dAmZ+IRZMBqI+nrv6t5+9/1AIwCa8sMRC3jBf81lpxMhnZgqq8CoUD503Z1oZWq1/sw==",
      "license": "Apache-2.0",
      "dependencies": {
        "@mongodb-js/saslprep": "^1.3.0",
        "bson": "^7.2.0",
        "mongodb-connection-string-url": "^7.0.0"
      },
      "engines": {
        "node": ">=20.19.0"
      },
      "peerDependencies": {
        "@aws-sdk/credential-providers": "^3.806.0",
        "@mongodb-js/zstd": "^7.0.0",
        "gcp-metadata": "^7.0.1",
        "kerberos": "^7.0.0",
        "mongodb-client-encryption": ">=7.0.0 <7.1.0",
        "snappy": "^7.3.2",
        "socks": "^2.8.6"
      },
      "peerDependenciesMeta": {
        "@aws-sdk/credential-providers": {
          "optional": true
        },
        "@mongodb-js/zstd": {
          "optional": true
        },
        "gcp-metadata": {
          "optional": true
        },
        "kerberos": {
          "optional": true
        },
        "mongodb-client-encryption": {
          "optional": true
        },
        "snappy": {
          "optional": true
        },
        "socks": {
          "optional": true
        }
      }
    },
    "node_modules/mongodb-connection-string-url": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/mongodb-connection-string-url/-/mongodb-connection-string-url-7.0.2.tgz",
      "integrity": "sha512-ZoS07RoFqpKYQwAk59qmrx8+jJHNHU30UjlU96QktiGn1ltvDr+vCznLX5DiUBLEpMAHatHNWV1nM/74ul66kA==",
      "license": "Apache-2.0",
      "dependencies": {
        "@types/whatwg-url": "^13.0.0",
        "whatwg-url": "^14.1.0"
      },
      "engines": {
        "node": ">=20.19.0"
      }
    },
    "node_modules/mongoose": {
      "version": "9.7.4",
      "resolved": "https://registry.npmjs.org/mongoose/-/mongoose-9.7.4.tgz",
      "integrity": "sha512-nuSYGUWWzNd4EAbGYxE469wPTL+kmxb5+91YvCvMkJ08rvNRht/usZUU3LuFuk7rDutF2QWBZHPHuzM8TxXApA==",
      "license": "MIT",
      "dependencies": {
        "@standard-schema/spec": "^1.1.0",
        "kareem": "3.3.0",
        "mongodb": "~7.2",
        "mpath": "0.9.0",
        "mquery": "6.0.0",
        "ms": "2.1.3",
        "sift": "17.1.3"
      },
      "engines": {
        "node": ">=20.19.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/mongoose"
      }
    },
    "node_modules/mpath": {
      "version": "0.9.0",
      "resolved": "https://registry.npmjs.org/mpath/-/mpath-0.9.0.tgz",
      "integrity": "sha512-ikJRQTk8hw5DEoFVxHG1Gn9T/xcjtdnOKIU1JTmGjZZlg9LST2mBLmcX3/ICIbgJydT2GOc15RnNy5mHmzfSew==",
      "license": "MIT",
      "engines": {
        "node": ">=4.0.0"
      }
    },
    "node_modules/mquery": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/mquery/-/mquery-6.0.0.tgz",
      "integrity": "sha512-b2KQNsmgtkscfeDgkYMcWGn9vZI9YoXh802VDEwE6qc50zxBFQ0Oo8ROkawbPAsXCY1/Z1yp0MagqsZStPWJjw==",
      "license": "MIT",
      "engines": {
        "node": ">=20.19.0"
      }
    },
    "node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
      "license": "MIT"
    },
    "node_modules/natural-compare": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/natural-compare/-/natural-compare-1.4.0.tgz",
      "integrity": "sha512-OWND8ei3VtNC9h7V60qff3SVobHr996CTwgxubgyQYEpg290h9J0buyECNNJexkFm5sOajh5G116RYA1c8ZMSw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/negotiator": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-1.0.0.tgz",
      "integrity": "sha512-8Ofs/AUQh8MaEcrlq5xOX0CQ9ypTF5dl78mjlMNfOK08fzpgTHQRQPBxcPlEtIw0yRpws+Zo/3r+5WRby7u3Gg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/nodemon": {
      "version": "3.1.14",
      "resolved": "https://registry.npmjs.org/nodemon/-/nodemon-3.1.14.tgz",
      "integrity": "sha512-jakjZi93UtB3jHMWsXL68FXSAosbLfY0In5gtKq3niLSkrWznrVBzXFNOEMJUfc9+Ke7SHWoAZsiMkNP3vq6Jw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "chokidar": "^3.5.2",
        "debug": "^4",
        "ignore-by-default": "^1.0.1",
        "minimatch": "^10.2.1",
        "pstree.remy": "^1.1.8",
        "semver": "^7.5.3",
        "simple-update-notifier": "^2.0.0",
        "supports-color": "^5.5.0",
        "touch": "^3.1.0",
        "undefsafe": "^2.0.5"
      },
      "bin": {
        "nodemon": "bin/nodemon.js"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/nodemon"
      }
    },
    "node_modules/normalize-path": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
      "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-assign": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
      "integrity": "sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-inspect": {
      "version": "1.13.4",
      "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.13.4.tgz",
      "integrity": "sha512-W67iLl4J2EXEGTbfeHCffrjDfitvLANg0UlX3wFUUSTx92KXRFegMHUVgSqE+wvhAbi4WqjGg9czysTV2Epbew==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/on-finished": {
      "version": "2.4.1",
      "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.4.1.tgz",
      "integrity": "sha512-oVlzkg3ENAhCk2zdv7IJwd/QUD4z2RxRwpkcGY8psCVcCYZNq4wYnVWALHM+brtuJjePWiYF/ClmuDr8Ch5+kg==",
      "license": "MIT",
      "dependencies": {
        "ee-first": "1.1.1"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/once": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
      "integrity": "sha512-lNaJgI+2Q5URQBkccEKHTQOPaXdUxnZZElQTZY0MFUAuaEqe1E+Nyvgdz/aIyNi6Z9MzO5dv1H8n58/GELp3+w==",
      "license": "ISC",
      "dependencies": {
        "wrappy": "1"
      }
    },
    "node_modules/optionator": {
      "version": "0.9.4",
      "resolved": "https://registry.npmjs.org/optionator/-/optionator-0.9.4.tgz",
      "integrity": "sha512-6IpQ7mKUxRcZNLIObR0hz7lxsapSSIYNZJwXPGeF0mTVqGKFIXj1DQcMoT22S3ROcLyY/rz0PWaWZ9ayWmad9g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "deep-is": "^0.1.3",
        "fast-levenshtein": "^2.0.6",
        "levn": "^0.4.1",
        "prelude-ls": "^1.2.1",
        "type-check": "^0.4.0",
        "word-wrap": "^1.2.5"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/p-limit": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-3.1.0.tgz",
      "integrity": "sha512-TYOanM3wGwNGsZN2cVTYPArw454xnXj5qmWF1bEoAc4+cU/ol7GVh7odevjp1FNHduHc3KZMcFduxU5Xc6uJRQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "yocto-queue": "^0.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/p-locate": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-5.0.0.tgz",
      "integrity": "sha512-LaNjtRWUBY++zB5nE/NwcaoMylSPk+S+ZHNB1TzdbMJMny6dynpAGt7X/tl/QYq3TIeE6nxHppbo2LGymrG5Pw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-limit": "^3.0.2"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/parseurl": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz",
      "integrity": "sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/path-exists": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
      "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-key": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz",
      "integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-to-regexp": {
      "version": "8.4.2",
      "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-8.4.2.tgz",
      "integrity": "sha512-qRcuIdP69NPm4qbACK+aDogI5CBDMi1jKe0ry5rSQJz8JVLsC7jV8XpiJjGRLLol3N+R5ihGYcrPLTno6pAdBA==",
      "license": "MIT",
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/picomatch": {
      "version": "2.3.2",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.2.tgz",
      "integrity": "sha512-V7+vQEJ06Z+c5tSye8S+nHUfI51xoXIXjHQ99cQtKUkQqqO1kO/KCJUfZXuB47h/YBlDhah2H3hdUGXn8ie0oA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/prelude-ls": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.2.1.tgz",
      "integrity": "sha512-vkcDPrRZo1QZLbn5RLGPpg/WmIQ65qoWWhcGKf/b5eplkkarX0m9z8ppCat4mlOqUsWpyNuYgO3VRyrYHSzX5g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/prettier": {
      "version": "3.9.5",
      "resolved": "https://registry.npmjs.org/prettier/-/prettier-3.9.5.tgz",
      "integrity": "sha512-/FVl766LpUfB5vXgCYOYa0MeV/441Ia99AeICQIQFTY/Nw0roZwULcXpku5i1/m5kt/baz+s4Zogspd839HSMg==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "prettier": "bin/prettier.cjs"
      },
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/prettier/prettier?sponsor=1"
      }
    },
    "node_modules/proxy-addr": {
      "version": "2.0.7",
      "resolved": "https://registry.npmjs.org/proxy-addr/-/proxy-addr-2.0.7.tgz",
      "integrity": "sha512-llQsMLSUDUPT44jdrU/O37qlnifitDP+ZwrmmZcoSKyLKvtZxpyV0n2/bD/N4tBAAZ/gJEdZU7KMraoK1+XYAg==",
      "license": "MIT",
      "dependencies": {
        "forwarded": "0.2.0",
        "ipaddr.js": "1.9.1"
      },
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/pstree.remy": {
      "version": "1.1.8",
      "resolved": "https://registry.npmjs.org/pstree.remy/-/pstree.remy-1.1.8.tgz",
      "integrity": "sha512-77DZwxQmxKnu3aR542U+X8FypNzbfJ+C5XQDk3uWjWxn6151aIMGthWYRXTqT1E5oJvg+ljaa2OJi+VfvCOQ8w==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/punycode": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.3.1.tgz",
      "integrity": "sha512-vYt7UD1U9Wg6138shLtLOvdAu+8DsC/ilFtEVHcH+wydcSpNE20AfSOduf6MkRFahL5FY7X1oU7nKVZFtfq8Fg==",
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/qs": {
      "version": "6.15.3",
      "resolved": "https://registry.npmjs.org/qs/-/qs-6.15.3.tgz",
      "integrity": "sha512-O9gl3zCl5h5blw1KGUzQKhA5oUXSl8rwUIM5o0S3nCXMliSvy5Dzx7/DJcI+SwgICv+IneSZwhBh1oSyEHA71A==",
      "license": "BSD-3-Clause",
      "dependencies": {
        "es-define-property": "^1.0.1",
        "side-channel": "^1.1.1"
      },
      "engines": {
        "node": ">=0.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/range-parser": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.3.0.tgz",
      "integrity": "sha512-hek2mFQpPuI4E1BBKrSto+BU3e3x4xuarsbiwr3+lf7p44juvFMV0XFWQAP3xUyqXA4RrXLIoaSUGbSt056ZMw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/raw-body": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/raw-body/-/raw-body-3.0.2.tgz",
      "integrity": "sha512-K5zQjDllxWkf7Z5xJdV0/B0WTNqx6vxG70zJE4N0kBs4LovmEYWJzQGxC9bS9RAKu3bgM40lrd5zoLJ12MQ5BA==",
      "license": "MIT",
      "dependencies": {
        "bytes": "~3.1.2",
        "http-errors": "~2.0.1",
        "iconv-lite": "~0.7.0",
        "unpipe": "~1.0.0"
      },
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/readdirp": {
      "version": "3.6.0",
      "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-3.6.0.tgz",
      "integrity": "sha512-hOS089on8RduqdbhvQ5Z37A0ESjsqz6qnRcffsMU3495FuTdqSm+7bhJ29JvIOsBDEEnan5DPu9t3To9VRlMzA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "picomatch": "^2.2.1"
      },
      "engines": {
        "node": ">=8.10.0"
      }
    },
    "node_modules/router": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/router/-/router-2.2.0.tgz",
      "integrity": "sha512-nLTrUKm2UyiL7rlhapu/Zl45FwNgkZGaCpZbIHajDYgwlJCOzLSk+cIPAnsEqV955GjILJnKbdQC1nVPz+gAYQ==",
      "license": "MIT",
      "dependencies": {
        "debug": "^4.4.0",
        "depd": "^2.0.0",
        "is-promise": "^4.0.0",
        "parseurl": "^1.3.3",
        "path-to-regexp": "^8.0.0"
      },
      "engines": {
        "node": ">= 18"
      }
    },
    "node_modules/safe-buffer": {
      "version": "5.2.1",
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
      "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/safer-buffer": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
      "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg==",
      "license": "MIT"
    },
    "node_modules/semver": {
      "version": "7.8.5",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.8.5.tgz",
      "integrity": "sha512-Y7/KDsb8LjooZpwaqGyulO6DQlksgCncchHGk+sZIY4SBvUocMBEFH5Ur1fI4dV+Jvl0w6cjvucaIi40puRioA==",
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/send": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/send/-/send-1.2.1.tgz",
      "integrity": "sha512-1gnZf7DFcoIcajTjTwjwuDjzuz4PPcY2StKPlsGAQ1+YH20IRVrBaXSWmdjowTJ6u8Rc01PoYOGHXfP1mYcZNQ==",
      "license": "MIT",
      "dependencies": {
        "debug": "^4.4.3",
        "encodeurl": "^2.0.0",
        "escape-html": "^1.0.3",
        "etag": "^1.8.1",
        "fresh": "^2.0.0",
        "http-errors": "^2.0.1",
        "mime-types": "^3.0.2",
        "ms": "^2.1.3",
        "on-finished": "^2.4.1",
        "range-parser": "^1.2.1",
        "statuses": "^2.0.2"
      },
      "engines": {
        "node": ">= 18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/serve-static": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/serve-static/-/serve-static-2.2.1.tgz",
      "integrity": "sha512-xRXBn0pPqQTVQiC8wyQrKs2MOlX24zQ0POGaj0kultvoOCstBQM5yvOhAVSUwOMjQtTvsPWoNCHfPGwaaQJhTw==",
      "license": "MIT",
      "dependencies": {
        "encodeurl": "^2.0.0",
        "escape-html": "^1.0.3",
        "parseurl": "^1.3.3",
        "send": "^1.2.0"
      },
      "engines": {
        "node": ">= 18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/setprototypeof": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.2.0.tgz",
      "integrity": "sha512-E5LDX7Wrp85Kil5bhZv46j8jOeboKq5JMmYM3gVGdGH8xFpPWXUMsNrlODCrkoxMEeNi/XZIwuRvY4XNwYMJpw==",
      "license": "ISC"
    },
    "node_modules/shebang-command": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz",
      "integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "shebang-regex": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/shebang-regex": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz",
      "integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/side-channel": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/side-channel/-/side-channel-1.1.1.tgz",
      "integrity": "sha512-6x6dK6zJdpTzF4sQeNYxwtvBzf6Eg4GtlesS94HOvTudUeyK2WXAaIfmDgsyslYrRBeFIlsi54AYsFGUuhmvrQ==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "object-inspect": "^1.13.4",
        "side-channel-list": "^1.0.1",
        "side-channel-map": "^1.0.1",
        "side-channel-weakmap": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-list": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/side-channel-list/-/side-channel-list-1.0.1.tgz",
      "integrity": "sha512-mjn/0bi/oUURjc5Xl7IaWi/OJJJumuoJFQJfDDyO46+hBWsfaVM65TBHq2eoZBhzl9EchxOijpkbRC8SVBQU0w==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "object-inspect": "^1.13.4"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-map": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/side-channel-map/-/side-channel-map-1.0.1.tgz",
      "integrity": "sha512-VCjCNfgMsby3tTdo02nbjtM/ewra6jPHmpThenkTYh8pG9ucZ/1P8So4u4FGBek/BjpOVsDCMoLA/iuBKIFXRA==",
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.5",
        "object-inspect": "^1.13.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-weakmap": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/side-channel-weakmap/-/side-channel-weakmap-1.0.2.tgz",
      "integrity": "sha512-WPS/HvHQTYnHisLo9McqBHOJk2FkHO/tlpvldyrnem4aeQp4hai3gythswg6p01oSoTl58rcpiFAjF2br2Ak2A==",
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.5",
        "object-inspect": "^1.13.3",
        "side-channel-map": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/sift": {
      "version": "17.1.3",
      "resolved": "https://registry.npmjs.org/sift/-/sift-17.1.3.tgz",
      "integrity": "sha512-Rtlj66/b0ICeFzYTuNvX/EF1igRbbnGSvEyT79McoZa/DeGhMyC5pWKOEsZKnpkqtSeovd5FL/bjHWC3CIIvCQ==",
      "license": "MIT"
    },
    "node_modules/simple-update-notifier": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/simple-update-notifier/-/simple-update-notifier-2.0.0.tgz",
      "integrity": "sha512-a2B9Y0KlNXl9u/vsW6sTIu9vGEpfKu2wRV6l1H3XEas/0gUIzGzBoP/IouTcUQbm9JWZLH3COxyn03TYlFax6w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "semver": "^7.5.3"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/sparse-bitfield": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/sparse-bitfield/-/sparse-bitfield-3.0.3.tgz",
      "integrity": "sha512-kvzhi7vqKTfkh0PZU+2D2PIllw2ymqJKujUcyPMd9Y75Nv4nPbGJZXNhxsgdQab2BmlDct1YnfQCguEvHr7VsQ==",
      "license": "MIT",
      "dependencies": {
        "memory-pager": "^1.0.2"
      }
    },
    "node_modules/statuses": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/statuses/-/statuses-2.0.2.tgz",
      "integrity": "sha512-DvEy55V3DB7uknRo+4iOGT5fP1slR8wQohVdknigZPMpMstaKJQWhwiYBACJE3Ul2pTnATihhBYnRhZQHGBiRw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/supports-color": {
      "version": "5.5.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
      "integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^3.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/to-regex-range": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
      "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-number": "^7.0.0"
      },
      "engines": {
        "node": ">=8.0"
      }
    },
    "node_modules/toidentifier": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.1.tgz",
      "integrity": "sha512-o5sSPKEkg/DIQNmH43V0/uerLrpzVedkUh8tGNvaeXpfpuwjKenlSox/2O/BTlZUtEe+JG7s5YhEz608PlAHRA==",
      "license": "MIT",
      "engines": {
        "node": ">=0.6"
      }
    },
    "node_modules/touch": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/touch/-/touch-3.1.1.tgz",
      "integrity": "sha512-r0eojU4bI8MnHr8c5bNo7lJDdI2qXlWWJk6a9EAFG7vbhTjElYhBVS3/miuE0uOuoLdb8Mc/rVfsmm6eo5o9GA==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "nodetouch": "bin/nodetouch.js"
      }
    },
    "node_modules/tr46": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/tr46/-/tr46-5.1.1.tgz",
      "integrity": "sha512-hdF5ZgjTqgAntKkklYw0R03MG2x/bSzTtkxmIRw/sTNV8YXsCJ1tfLAX23lhxhHJlEf3CRCOCGGWw3vI3GaSPw==",
      "license": "MIT",
      "dependencies": {
        "punycode": "^2.3.1"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/ts-node": {
      "version": "10.9.2",
      "resolved": "https://registry.npmjs.org/ts-node/-/ts-node-10.9.2.tgz",
      "integrity": "sha512-f0FFpIdcHgn8zcPSbf1dRevwt047YMnaiJM3u2w2RewrB+fob/zePZcrOyQoLMMO7aBIddLcQIEK5dYjkLnGrQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@cspotcode/source-map-support": "^0.8.0",
        "@tsconfig/node10": "^1.0.7",
        "@tsconfig/node12": "^1.0.7",
        "@tsconfig/node14": "^1.0.0",
        "@tsconfig/node16": "^1.0.2",
        "acorn": "^8.4.1",
        "acorn-walk": "^8.1.1",
        "arg": "^4.1.0",
        "create-require": "^1.1.0",
        "diff": "^4.0.1",
        "make-error": "^1.1.1",
        "v8-compile-cache-lib": "^3.0.1",
        "yn": "3.1.1"
      },
      "bin": {
        "ts-node": "dist/bin.js",
        "ts-node-cwd": "dist/bin-cwd.js",
        "ts-node-esm": "dist/bin-esm.js",
        "ts-node-script": "dist/bin-script.js",
        "ts-node-transpile-only": "dist/bin-transpile.js",
        "ts-script": "dist/bin-script-deprecated.js"
      },
      "peerDependencies": {
        "@swc/core": ">=1.2.50",
        "@swc/wasm": ">=1.2.50",
        "@types/node": "*",
        "typescript": ">=2.7"
      },
      "peerDependenciesMeta": {
        "@swc/core": {
          "optional": true
        },
        "@swc/wasm": {
          "optional": true
        }
      }
    },
    "node_modules/type-check": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/type-check/-/type-check-0.4.0.tgz",
      "integrity": "sha512-XleUoc9uwGXqjWwXaUTZAmzMcFZ5858QA2vvx1Ur5xIcixXIP+8LnFDgRplU30us6teqdlskFfu+ae4K79Ooew==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "prelude-ls": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/type-is": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/type-is/-/type-is-2.1.0.tgz",
      "integrity": "sha512-faYHw0anBbc/kWF3zFTEnxSFOAGUX9GFbOBthvDdLsIlEoWOFOtS0zgCiQYwIskL9iGXZL3kAXD8OoZ4GmMATA==",
      "license": "MIT",
      "dependencies": {
        "content-type": "^2.0.0",
        "media-typer": "^1.1.0",
        "mime-types": "^3.0.0"
      },
      "engines": {
        "node": ">= 18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/type-is/node_modules/content-type": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/content-type/-/content-type-2.0.0.tgz",
      "integrity": "sha512-j/O/d7GcZCyNl7/hwZAb606rzqkyvaDctLmckbxLzHvFBzTJHuGEdodATcP3yIRoDrLHkIATJuvzbFlp/ki2cQ==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/typescript": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/typescript/-/typescript-7.0.2.tgz",
      "integrity": "sha512-8FYau96o3NKOhbjKi/qNvG/W5jhzxkbdm5sj9AbZ/5T5sWqn3hJgLfGx27sRKZWTvyzCP8dLRBTf5tBTSRVUNA==",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "tsc": "bin/tsc"
      },
      "engines": {
        "node": ">=16.20.0"
      },
      "optionalDependencies": {
        "@typescript/typescript-aix-ppc64": "7.0.2",
        "@typescript/typescript-darwin-arm64": "7.0.2",
        "@typescript/typescript-darwin-x64": "7.0.2",
        "@typescript/typescript-freebsd-arm64": "7.0.2",
        "@typescript/typescript-freebsd-x64": "7.0.2",
        "@typescript/typescript-linux-arm": "7.0.2",
        "@typescript/typescript-linux-arm64": "7.0.2",
        "@typescript/typescript-linux-loong64": "7.0.2",
        "@typescript/typescript-linux-mips64el": "7.0.2",
        "@typescript/typescript-linux-ppc64": "7.0.2",
        "@typescript/typescript-linux-riscv64": "7.0.2",
        "@typescript/typescript-linux-s390x": "7.0.2",
        "@typescript/typescript-linux-x64": "7.0.2",
        "@typescript/typescript-netbsd-arm64": "7.0.2",
        "@typescript/typescript-netbsd-x64": "7.0.2",
        "@typescript/typescript-openbsd-arm64": "7.0.2",
        "@typescript/typescript-openbsd-x64": "7.0.2",
        "@typescript/typescript-sunos-x64": "7.0.2",
        "@typescript/typescript-win32-arm64": "7.0.2",
        "@typescript/typescript-win32-x64": "7.0.2"
      }
    },
    "node_modules/undefsafe": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/undefsafe/-/undefsafe-2.0.5.tgz",
      "integrity": "sha512-WxONCrssBM8TSPRqN5EmsjVrsv4A8X12J4ArBiiayv3DyyG3ZlIg6yysuuSYdZsVz3TKcTg2fd//Ujd4CHV1iA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/undici-types": {
      "version": "8.3.0",
      "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-8.3.0.tgz",
      "integrity": "sha512-j375ScV60dom+YkPFIfTLcOiPxkN/buHz5GobjLhixFuANaNs3C9l4GmrWqejgXWJ7BbJcFYpTEUkS1Ge8bpZQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/unpipe": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",
      "integrity": "sha512-pjy2bYhSsufwWlKwPc+l3cN7+wuJlK6uz0YdJEOlQDbl6jo/YlPi4mb8agUkVC8BF7V8NuzeyPNqRksA3hztKQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/uri-js": {
      "version": "4.4.1",
      "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.4.1.tgz",
      "integrity": "sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "punycode": "^2.1.0"
      }
    },
    "node_modules/v8-compile-cache-lib": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/v8-compile-cache-lib/-/v8-compile-cache-lib-3.0.1.tgz",
      "integrity": "sha512-wa7YjyUGfNZngI/vtK0UHAN+lgDCxBPCylVXGp0zu59Fz5aiGtNXaq3DhIov063MorB+VfufLh3JlF2KdTK3xg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/vary": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",
      "integrity": "sha512-BNGbWLfd0eUPabhkXUVm0j8uuvREyTh5ovRa/dyow/BqAbZJyC+5fU+IzQOzmAKzYqYRAISoRhdQr3eIZ/PXqg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/webidl-conversions": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-7.0.0.tgz",
      "integrity": "sha512-VwddBukDzu71offAQR975unBIGqfKZpM+8ZX6ySk8nYhVoo5CYaZyzt3YBvYtRtO+aoGlqxPg/B87NGVZ/fu6g==",
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/whatwg-url": {
      "version": "14.2.0",
      "resolved": "https://registry.npmjs.org/whatwg-url/-/whatwg-url-14.2.0.tgz",
      "integrity": "sha512-De72GdQZzNTUBBChsXueQUnPKDkg/5A5zp7pFDuQAj5UFoENpiACU0wlCvzpAGnTkj++ihpKwKyYewn/XNUbKw==",
      "license": "MIT",
      "dependencies": {
        "tr46": "^5.1.0",
        "webidl-conversions": "^7.0.0"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/which": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
      "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "isexe": "^2.0.0"
      },
      "bin": {
        "node-which": "bin/node-which"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/word-wrap": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/word-wrap/-/word-wrap-1.2.5.tgz",
      "integrity": "sha512-BN22B5eaMMI9UMtjrGd5g5eCYPpCPDUy0FJXbYsaT5zYxjFOckS53SQDE3pWkVoWpHXVb3BrYcEN4Twa55B5cA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/wrappy": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
      "integrity": "sha512-l4Sp/DRseor9wL6EvV2+TuQn63dMkPjZ/sp9XkghTEbV9KlPS1xUsZ3u7/IQO4wxtcFB4bgpQPRcR3QCvezPcQ==",
      "license": "ISC"
    },
    "node_modules/yn": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/yn/-/yn-3.1.1.tgz",
      "integrity": "sha512-Ux4ygGWsu2c7isFWe8Yu1YluJmqVhxqK2cLXNQA5AcC3QfbGNpM7fu0Y8b/z16pXLnFxZYvWhd3fhBY9DLmC6Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/yocto-queue": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/yocto-queue/-/yocto-queue-0.1.0.tgz",
      "integrity": "sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/zod": {
      "version": "4.4.3",
      "resolved": "https://registry.npmjs.org/zod/-/zod-4.4.3.tgz",
      "integrity": "sha512-ytENFjIJFl2UwYglde2jchW2Hwm4GJFLDiSXWdTrJQBIN9Fcyp7n4DhxJEiWNAJMV1/BqWfW/kkg71UDcHJyTQ==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/colinhacks"
      }
    }
  }
}

`

### ./backend/tsconfig.json
`json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "CommonJS",
    "rootDir": "./src",
    "outDir": "./dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src/**/*"]
}

`

## 8. Railway Runtime Files

No Railway runtime configuration files were found in this repository.

