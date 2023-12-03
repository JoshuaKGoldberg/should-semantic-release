<h1 align="center">Should Semantic Release</h1>

<p align="center">Checks whether a semantic release should be run for a repository. 💂</p>

<p align="center">
	<a href="#contributors" target="_blank">
<!-- prettier-ignore-start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
<img alt="All Contributors: 2 👪" src="https://img.shields.io/badge/all_contributors-2_👪-21bb42.svg" />
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- prettier-ignore-end -->
</a>
	<a href="https://codecov.io/gh/JoshuaKGoldberg/should-semantic-release" target="_blank">
		<img alt="Codecov Test Coverage" src="https://codecov.io/gh/JoshuaKGoldberg/should-semantic-release/branch/main/graph/badge.svg"/>
	</a>
	<a href="https://github.com/JoshuaKGoldberg/should-semantic-release/blob/main/.github/CODE_OF_CONDUCT.md" target="_blank">
		<img alt="Contributor Covenant" src="https://img.shields.io/badge/code_of_conduct-enforced-21bb42" />
	</a>
	<a href="https://github.com/JoshuaKGoldberg/should-semantic-release/blob/main/LICENSE.md" target="_blank">
		<img alt="License: MIT" src="https://img.shields.io/github/license/JoshuaKGoldberg/should-semantic-release?color=21bb42">
	</a>
	<a href="https://github.com/sponsors/JoshuaKGoldberg" target="_blank">
		<img alt="Sponsor: On GitHub" src="https://img.shields.io/badge/sponsor-on_github-21bb42.svg" />
	</a>
	<img alt="Style: Prettier" src="https://img.shields.io/badge/style-prettier-21bb42.svg" />
	<img alt="TypeScript: Strict" src="https://img.shields.io/badge/typescript-strict-21bb42.svg" />
	<img alt="npm package version" src="https://img.shields.io/npm/v/should-semantic-release?color=21bb42" />
</p>

## Usage

This function determines whether a semantic release should occur for a package based on Git history.
It returns true if a "meaningful" commit has come since the most recent release commit.

```shell
if npx should-semantic-release ; then npx release-it ; fi
```

This can be useful, for example, to [prevent a `release-it` release](https://github.com/release-it/release-it/issues/969).

`should-semantic-release` accepts the following CLI flag:

- `-v`/`--verbose` _(default: `false`)_: Whether to log debug information to the console

```plaintext
$ npx should-semantic-release --verbose

Checking up to 123 commits for release readiness...
Checking commit: chore: an example chore (#101)
Found type chore.
Checking commit: chore: another example chore (#100)
Found type chore.
Checking commit: chore: release v1.27.31
This is a release commit. Returning false.
```

### Commit Purposes

Based on a commit's conventional commit message type:

1. If the type is `feat` `fix`, or `perf`, it's considered "meaningful"
2. If the commit is marked as being a breaking change, either via a note or via an `!` appended to the type, it's considered "meaningful"
3. If the type is `docs`, `refactor`, `style`, or `test`, it's ignored
4. If the message looks like `v1.2.3`, `chore: release 1.2.3`, or similar, it's considered a "release"

See [`getCommitMeaning`](./src/getCommitMeaning.ts) for the exact logic used.

### Node API

Alternately, you can call this import asynchronous `shouldSemanticRelease` function into Node scripts:

```ts
import { shouldSemanticRelease } from "should-semantic-release";

if (await shouldSemanticRelease()) {
	console.log("Let's release! 🚀");
}
```

`shouldSemanticRelease` accepts an optional options object with the following parameter:

- `verbose` _(default: `false`)_

```ts
import { shouldSemanticRelease } from "should-semantic-release";

await shouldSemanticRelease({ verbose: true });
```

## Development

See [`.github/CONTRIBUTING.md`](./.github/CONTRIBUTING.md).
Thanks! 💖

## Contributors

<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- spellchecker: disable -->
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://www.joshuakgoldberg.com"><img src="https://avatars.githubusercontent.com/u/3335181?v=4?s=100" width="100px;" alt="Josh Goldberg"/><br /><sub><b>Josh Goldberg</b></sub></a><br /><a href="https://github.com/JoshuaKGoldberg/should-semantic-release/commits?author=JoshuaKGoldberg" title="Code">💻</a> <a href="#maintenance-JoshuaKGoldberg" title="Maintenance">🚧</a> <a href="#infra-JoshuaKGoldberg" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://medium.com/@cakeinpanic/latest"><img src="https://avatars.githubusercontent.com/u/588916?v=4?s=100" width="100px;" alt="Katya Pavlenko"/><br /><sub><b>Katya Pavlenko</b></sub></a><br /><a href="https://github.com/JoshuaKGoldberg/should-semantic-release/commits?author=cakeinpanic" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
<!-- spellchecker: enable -->
<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

> 💙 This package is based on [@JoshuaKGoldberg](https://github.com/JoshuaKGoldberg)'s [create-typescript-app](https://github.com/JoshuaKGoldberg/create-typescript-app).
