<h1 align="center">Should Semantic Release</h1>

<p align="center">Checks whether a semantic release should be run for a commit.</p>

<p align="center">
	<a href="#contributors" target="_blank">
<!-- prettier-ignore-start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
<img alt="All Contributors: 1" src="https://img.shields.io/badge/all_contributors-5-21bb42.svg" />
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- prettier-ignore-end -->
	</a>
	<a href="https://codecov.io/gh/JoshuaKGoldberg/should-semantic-release" target="_blank">
		<img alt="Codecov Test Coverage" src="https://codecov.io/gh/JoshuaKGoldberg/should-semantic-release/branch/main/graph/badge.svg?token=eVIFY4MhfQ"/>
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
</p>

## Usage

This CLI script determines whether a semantic release should occur for a package based on Git history.
Specifically, it returns truthy only if a commit whose type _isn't_ `chore` or `docs` has come since the most recent release commit.

```shell
if npx should-semantic-release ; then npx release-it ; fi
```

This can be useful, for example, to [prevent a `release-it` release](https://github.com/release-it/release-it/issues/969).

`should-semantic-release` accepts the following CLI flag:

- `-v`/`--verbose` _(default: `false`)_: Whether to log debug information to the console

```plaintext
$ npx should-semantic-release

Checking up to 123 commits for release readiness...
Checking commit: chore: an example chore (#101)
Found type chore.
Checking commit: chore: another example chore (#100)
Found type chore.
Checking commit: chore: release v1.27.31
This is a release commit. Returning false.
```

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

```js
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
      <td align="center"><a href="http://www.joshuakgoldberg.com"><img src="https://avatars.githubusercontent.com/u/3335181?v=4?s=100" width="100px;" alt="Josh Goldberg"/><br /><sub><b>Josh Goldberg</b></sub></a><br /><a href="https://github.com/JoshuaKGoldberg/should-semantic-release/issues?q=author%3AJoshuaKGoldberg" title="Bug reports">🐛</a> <a href="https://github.com/JoshuaKGoldberg/should-semantic-release/commits?author=JoshuaKGoldberg" title="Code">💻</a> <a href="#content-JoshuaKGoldberg" title="Content">🖋</a> <a href="#example-JoshuaKGoldberg" title="Examples">💡</a> <a href="#ideas-JoshuaKGoldberg" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-JoshuaKGoldberg" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-JoshuaKGoldberg" title="Maintenance">🚧</a> <a href="#platform-JoshuaKGoldberg" title="Packaging/porting to new platform">📦</a> <a href="#projectManagement-JoshuaKGoldberg" title="Project Management">📆</a> <a href="https://github.com/JoshuaKGoldberg/should-semantic-release/pulls?q=is%3Apr+reviewed-by%3AJoshuaKGoldberg" title="Reviewed Pull Requests">👀</a> <a href="#security-JoshuaKGoldberg" title="Security">🛡️</a> <a href="#tool-JoshuaKGoldberg" title="Tools">🔧</a> <a href="https://github.com/JoshuaKGoldberg/should-semantic-release/commits?author=JoshuaKGoldberg" title="Tests">⚠️</a></td>
      <td align="center"><a href="https://sinchang.me"><img src="https://avatars.githubusercontent.com/u/3297859?v=4?s=100" width="100px;" alt="Jeff Wen"/><br /><sub><b>Jeff Wen</b></sub></a><br /><a href="#tool-sinchang" title="Tools">🔧</a></td>
      <td align="center"><a href="https://paulisaweso.me/"><img src="https://avatars.githubusercontent.com/u/6335792?v=4?s=100" width="100px;" alt="Paul Esch-Laurent"/><br /><sub><b>Paul Esch-Laurent</b></sub></a><br /><a href="#tool-Pinjasaur" title="Tools">🔧</a></td>
      <td align="center"><a href="https://github.com/NazCodeland"><img src="https://avatars.githubusercontent.com/u/113494366?v=4?s=100" width="100px;" alt="NazCodeland"/><br /><sub><b>NazCodeland</b></sub></a><br /><a href="#tool-NazCodeland" title="Tools">🔧</a></td>
      <td align="center"><a href="https://blog.johnnyreilly.com/"><img src="https://avatars.githubusercontent.com/u/1010525?v=4?s=100" width="100px;" alt="John Reilly"/><br /><sub><b>John Reilly</b></sub></a><br /><a href="https://github.com/JoshuaKGoldberg/should-semantic-release/issues?q=author%3Ajohnnyreilly" title="Bug reports">🐛</a> <a href="#ideas-johnnyreilly" title="Ideas, Planning, & Feedback">🤔</a> <a href="#promotion-johnnyreilly" title="Promotion">📣</a> <a href="#maintenance-johnnyreilly" title="Maintenance">🚧</a> <a href="https://github.com/JoshuaKGoldberg/should-semantic-release/commits?author=johnnyreilly" title="Code">💻</a> <a href="https://github.com/JoshuaKGoldberg/should-semantic-release/pulls?q=is%3Apr+reviewed-by%3Ajohnnyreilly" title="Reviewed Pull Requests">👀</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
<!-- spellchecker: enable -->
<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- You can remove this notice if you don't want it 🙂 no worries! -->

> 💙 This package is based on [@JoshuaKGoldberg](https://github.com/JoshuaKGoldberg)'s [template-typescript-node-package](https://github.com/JoshuaKGoldberg/template-typescript-node-package).
