<h1 align="center">Should Semantic Release</h1>

<p align="center">
	Checks whether a semantic release should be run for a repository.
	💂
</p>

<p align="center">
	<!-- prettier-ignore-start -->
	<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
	<a href="#contributors" target="_blank"><img alt="👪 All Contributors: 7" src="https://img.shields.io/badge/%F0%9F%91%AA_all_contributors-7-21bb42.svg" /></a>
<!-- ALL-CONTRIBUTORS-BADGE:END -->
	<!-- prettier-ignore-end -->
	<a href="https://github.com/JoshuaKGoldberg/should-semantic-release/blob/main/.github/CODE_OF_CONDUCT.md" target="_blank"><img alt="🤝 Code of Conduct: Kept" src="https://img.shields.io/badge/%F0%9F%A4%9D_code_of_conduct-kept-21bb42" /></a>
	<a href="https://codecov.io/gh/JoshuaKGoldberg/should-semantic-release" target="_blank"><img alt="🧪 Coverage" src="https://img.shields.io/codecov/c/github/JoshuaKGoldberg/should-semantic-release?label=%F0%9F%A7%AA%20coverage" /></a>
	<a href="https://github.com/JoshuaKGoldberg/should-semantic-release/blob/main/LICENSE.md" target="_blank"><img alt="📝 License: MIT" src="https://img.shields.io/badge/%F0%9F%93%9D_license-MIT-21bb42.svg" /></a>
	<a href="http://npmjs.com/package/should-semantic-release" target="_blank"><img alt="📦 npm version" src="https://img.shields.io/npm/v/should-semantic-release?color=21bb42&label=%F0%9F%93%A6%20npm" /></a>
	<img alt="💪 TypeScript: Strict" src="https://img.shields.io/badge/%F0%9F%92%AA_typescript-strict-21bb42.svg" />
</p>

## Usage

This function determines whether a semantic release should occur for a package based on Git history.
It returns true if a "meaningful" commit has come since the most recent release commit.

```shell
if npx should-semantic-release; then npx release-it; fi
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
1. If the commit is marked as being a breaking change, either via a `BREAKING CHANGE:` at the start of any commit message lines or via an `!` appended to the type, it's considered "meaningful"
1. If the type is `docs`, `refactor`, `style`, or `test`, it's ignored
1. If the message looks like `v1.2.3`, `chore: release 1.2.3`, or similar, it's considered a "release"

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

See [`.github/CONTRIBUTING.md`](./.github/CONTRIBUTING.md), then [`.github/DEVELOPMENT.md`](./.github/DEVELOPMENT.md).
Thanks! 💂

## Contributors

<!-- spellchecker: disable -->
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://johnnyreilly.com/"><img src="https://avatars.githubusercontent.com/u/1010525?v=4?s=100" width="100px;" alt="John Reilly"/><br /><sub><b>John Reilly</b></sub></a><br /><a href="https://github.com/JoshuaKGoldberg/should-semantic-release/issues?q=author%3Ajohnnyreilly" title="Bug reports">🐛</a> <a href="https://github.com/JoshuaKGoldberg/should-semantic-release/commits?author=johnnyreilly" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://www.joshuakgoldberg.com"><img src="https://avatars.githubusercontent.com/u/3335181?v=4?s=100" width="100px;" alt="Josh Goldberg"/><br /><sub><b>Josh Goldberg</b></sub></a><br /><a href="https://github.com/JoshuaKGoldberg/should-semantic-release/commits?author=JoshuaKGoldberg" title="Code">💻</a> <a href="#maintenance-JoshuaKGoldberg" title="Maintenance">🚧</a> <a href="#infra-JoshuaKGoldberg" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#ideas-JoshuaKGoldberg" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/JoshuaKGoldberg/should-semantic-release/commits?author=JoshuaKGoldberg" title="Tests">⚠️</a> <a href="#content-JoshuaKGoldberg" title="Content">🖋</a> <a href="https://github.com/JoshuaKGoldberg/should-semantic-release/commits?author=JoshuaKGoldberg" title="Documentation">📖</a> <a href="#projectManagement-JoshuaKGoldberg" title="Project Management">📆</a> <a href="#tool-JoshuaKGoldberg" title="Tools">🔧</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://medium.com/@cakeinpanic/latest"><img src="https://avatars.githubusercontent.com/u/588916?v=4?s=100" width="100px;" alt="Katya Pavlenko"/><br /><sub><b>Katya Pavlenko</b></sub></a><br /><a href="https://github.com/JoshuaKGoldberg/should-semantic-release/commits?author=cakeinpanic" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://hyoban.cc"><img src="https://avatars.githubusercontent.com/u/38493346?v=4?s=100" width="100px;" alt="Stephen Zhou"/><br /><sub><b>Stephen Zhou</b></sub></a><br /><a href="https://github.com/JoshuaKGoldberg/should-semantic-release/commits?author=hyoban" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/steveluscher"><img src="https://avatars.githubusercontent.com/u/13243?v=4?s=100" width="100px;" alt="Steven Luscher"/><br /><sub><b>Steven Luscher</b></sub></a><br /><a href="#ideas-steveluscher" title="Ideas, Planning, & Feedback">🤔</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/gvdp"><img src="https://avatars.githubusercontent.com/u/11733084?v=4?s=100" width="100px;" alt="gvdp"/><br /><sub><b>gvdp</b></sub></a><br /><a href="https://github.com/JoshuaKGoldberg/should-semantic-release/issues?q=author%3Agvdp" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/michaelfaith"><img src="https://avatars.githubusercontent.com/u/8071845?v=4?s=100" width="100px;" alt="michael faith"/><br /><sub><b>michael faith</b></sub></a><br /><a href="https://github.com/JoshuaKGoldberg/should-semantic-release/issues?q=author%3Amichaelfaith" title="Bug reports">🐛</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
<!-- spellchecker: enable -->
<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

> 💝 This package was templated with [`create-typescript-app`](https://github.com/JoshuaKGoldberg/create-typescript-app) using the [Bingo framework](https://create.bingo).
