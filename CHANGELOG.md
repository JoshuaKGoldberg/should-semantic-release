# Changelog

## [0.3.5](https://github.com/JoshuaKGoldberg/should-semantic-release/compare/0.3.4...0.3.5) (2025-11-11)

### Bug Fixes

- report meaningful commits when multiple scopes are in the header ([#769](https://github.com/JoshuaKGoldberg/should-semantic-release/issues/769)) ([c740d61](https://github.com/JoshuaKGoldberg/should-semantic-release/commit/c740d61e421bb3fa398a0f324142dea02d87d2c2)), closes [#764](https://github.com/JoshuaKGoldberg/should-semantic-release/issues/764)

## [0.3.4](https://github.com/JoshuaKGoldberg/should-semantic-release/compare/0.3.3...0.3.4) (2025-06-25)

### Bug Fixes

- treat common chore(deps): ... messages as chores ([#646](https://github.com/JoshuaKGoldberg/should-semantic-release/issues/646)) ([890a68f](https://github.com/JoshuaKGoldberg/should-semantic-release/commit/890a68f2bde1bf1846daf8a00c53382e26719b97)), closes [#569](https://github.com/JoshuaKGoldberg/should-semantic-release/issues/569)

## [0.3.3](https://github.com/JoshuaKGoldberg/should-semantic-release/compare/0.3.1...0.3.3) (2025-04-03)

### Bug Fixes

- bump to create-typescript-app@2 with transitions action ([#547](https://github.com/JoshuaKGoldberg/should-semantic-release/issues/547)) ([c3895ed](https://github.com/JoshuaKGoldberg/should-semantic-release/commit/c3895ed076742cb0c681f5bc2cb1273338a8ec61)), closes [#546](https://github.com/JoshuaKGoldberg/should-semantic-release/issues/546)
- correct conventional-commits-parser range back down to 5 ([#549](https://github.com/JoshuaKGoldberg/should-semantic-release/issues/549)) ([5cf660c](https://github.com/JoshuaKGoldberg/should-semantic-release/commit/5cf660c39581fca3ab785f99b8327b94f9b46c84)), closes [#548](https://github.com/JoshuaKGoldberg/should-semantic-release/issues/548)

## [0.3.1](https://github.com/JoshuaKGoldberg/should-semantic-release/compare/0.3.0...0.3.1) (2025-02-16)

### Bug Fixes

- should recognise breaking changes ([#533](https://github.com/JoshuaKGoldberg/should-semantic-release/issues/533)) ([2dfeee8](https://github.com/JoshuaKGoldberg/should-semantic-release/commit/2dfeee8f3ccd48e5952545538eb906a72e137bba)), closes [#507](https://github.com/JoshuaKGoldberg/should-semantic-release/issues/507)

# 0.3.0 (2024-02-18)

### Bug Fixes

- add permissions to compliance action ([c518fc1](https://github.com/JoshuaKGoldberg/should-semantic-release/commit/c518fc1ef69d7703799b94b42fbd6f5f6664f2cf))
- always return false if a release commit is found ([fbe1937](https://github.com/JoshuaKGoldberg/should-semantic-release/commit/fbe193729241e2733d623173ec58ad9dd7668415))
- consider version-number-only commit as a release ([402567e](https://github.com/JoshuaKGoldberg/should-semantic-release/commit/402567e009d95fa513e7e2081f487606a882f2fa))
- empty commit to trigger release ([8feb21f](https://github.com/JoshuaKGoldberg/should-semantic-release/commit/8feb21f2c746d9f0c5ca3035b762389570f733f5))
- empty commit to trigger release ([3e1b46a](https://github.com/JoshuaKGoldberg/should-semantic-release/commit/3e1b46a2aba103f0fda95940bfff89d76964bc3b))
- lint & lock file ([bbe2520](https://github.com/JoshuaKGoldberg/should-semantic-release/commit/bbe2520851e077eab41515c55c9197015ec32775))
- regex ([573c841](https://github.com/JoshuaKGoldberg/should-semantic-release/commit/573c84177c0f5361c037533f3b65ef7b4f56c02f))
- use @pkgjs/parseargs instead of native node:utils to support node 14 ([fb3b839](https://github.com/JoshuaKGoldberg/should-semantic-release/commit/fb3b83936977d362b1d42662b43298226f8ea379))

### Features

- add understanding of more commit types ([6255d06](https://github.com/JoshuaKGoldberg/should-semantic-release/commit/6255d06ecb54d9bf64c664cdf4541c4a87b88d67))
- added --verbosity flag ([23dedbc](https://github.com/JoshuaKGoldberg/should-semantic-release/commit/23dedbcb2a1b5e8d3dbef240b23740a7a631b865))
- support BREAKING CHANGE ([53951bd](https://github.com/JoshuaKGoldberg/should-semantic-release/commit/53951bd70011db084266d7b1ae95128f86059c98))

### Reverts

- Revert "chore: switch bin to non-.mjs" ([40545b9](https://github.com/JoshuaKGoldberg/should-semantic-release/commit/40545b9b443f56dbe183618ecff934cc3d2c7766))
