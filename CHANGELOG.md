# [3.0.0](https://github.com/NoHop3/cra-template-stg/compare/v2.0.1...v3.0.0) (2023-09-21)


### Bug Fixes

* **package.json & template.json:** no longer postintall, prepack & postpack husky ([2cb2fc3](https://github.com/NoHop3/cra-template-stg/commit/2cb2fc333bb277b4777e5413c466383d290c83ad))


### Performance Improvements

* **package.json & template.json:** removing is-ci package. No longer needed ([a0cb401](https://github.com/NoHop3/cra-template-stg/commit/a0cb40134d8bc96a3c614d35a77ac1092d030ef2))


### BREAKING CHANGES

* **package.json & template.json:** Changes to package.json & template.json - removing postintall, prepack & postpack
from scripts. Husky will no longer initialize itself after yarn install or npm install commands or
during CI pipelines.

## [2.0.1](https://github.com/NoHop3/cra-template-stg/compare/v2.0.0...v2.0.1) (2023-09-21)


### Bug Fixes

* **package.json, template.json:** no longer running npx husky-init. No need o do that ([8cb17b7](https://github.com/NoHop3/cra-template-stg/commit/8cb17b73bc78de0b32487ff031ec076c680d3df1))

# [2.0.0](https://github.com/NoHop3/cra-template-stg/compare/v1.0.3...v2.0.0) (2023-09-21)


### Bug Fixes

* **package.json & template.json:** fixing husky command not found. Now adding .husky hooks properly ([57d1153](https://github.com/NoHop3/cra-template-stg/commit/57d11538b011d19b96bd2e6386395cfafca99fb6))
* **package.json && template.json:** fixing a bug that was making instalaion of cra-template-stg fail ([3994508](https://github.com/NoHop3/cra-template-stg/commit/3994508dc993920fcbc95f45ea228656395a461d))


### BREAKING CHANGES

* **package.json & template.json:** Changes to package.json & template.json directly indicate breaking changes to the
template

## [1.0.3](https://github.com/NoHop3/cra-template-stg/compare/v1.0.2...v1.0.3) (2023-09-20)


### Bug Fixes

* **package.json:** fixing error with releasing package from CI in Github Actions ([12613b1](https://github.com/NoHop3/cra-template-stg/commit/12613b12e2167b4ec2338031c75ee0ea480dfea7))
* **package.json:** fixing husky in CI throwing errors ([019f72e](https://github.com/NoHop3/cra-template-stg/commit/019f72e7b68293d2207c503249152186b2b38e7b))

## [1.0.2](https://github.com/NoHop3/cra-template-stg/compare/v1.0.1...v1.0.2) (2023-09-20)


### Bug Fixes

* fixing custom-template not working ([7fc0d4b](https://github.com/NoHop3/cra-template-stg/commit/7fc0d4bf5e2dfdf05faf4040b9d573d5c2d0f379))

Changelog

## [1.0.1](https://github.com/NoHop3/cra-template-stg/compare/v1.0.0...v1.0.1) (2023-09-20)


### Bug Fixes

* **changelog.md:** cHANGELOG was not generated ([47f3cbf](https://github.com/NoHop3/cra-template-stg/commit/47f3cbf9b32db594a3f151781b40f00f0792903a))
