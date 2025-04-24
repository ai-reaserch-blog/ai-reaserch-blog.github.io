---
title: "GitHub Commits 标准提交规范"
slug: GitHub Commits 标准提交规范
description: "Conventional Commits 规范是一种轻量化的 Github Commits 提交消息约定，通过结构化格式确保提交历史清晰明确，便于自动化工具处理。"
category:
  - One
tags:
  - Github
pubDate: 2025-04-24
cover: https://miro.medium.com/v2/resize:fit:1100/1*CWFkh5z8oa6dZfn5_gkKKQ.jpeg
coverAlt: GitHub Commits
author: Rongsheng Wang
---

Conventional Commits 是一种规范化的 Git 提交信息格式。遵循规范可以有效提升 Commit Message 的可读性，也方便历史记录和版本控制。

最基础的格式如下：

```swift
1. <type>[optional scope]: <description>
2.
3. [optional body]
4.
5. [optional footer(s)]
```

其中 `<type>` 表示提交类型（必填），也决定它在 changelog 中的分类，通常有以下几种：

- `feat`: 新功能；
- `fix`: 修复 bug；
- `docs`: 仅修改文档；
- `style`: 不影响代码逻辑的修改，比如格式、空格、缩进、缺失的分号；
- `refactor`: 代码重构（不包含功能变更或 bug 修复）；
- `perf`: 性能优化；
- `test`: 添加测试或修改测试；
- `build`: 构建系统或依赖的变动（例如 webpack、rollup）；
- `chore`: 杂项、不属于其他类型的更改（比如改 .gitignore、更新依赖）；
- `ci`: 持续集成相关（GitHub Actions、Travis CI、Circle 等）；
- `revert`: 回滚某个提交（会自动生成 footer）。

而 `[optional scope]` 表示影响范围（可选），`[description]` 表示简短的描述（必填），例如：

```shell
1. feat(blog): add comment system
2. fix(pdf): correct link to external document
3. docs(readme): update usage instructions
```

`[optional body]` 在解释提交的动机、问题背景、修改细节，尤其是重大提交或 refactor 时有用。`[optional footer(s)]` 则用于关闭 issue、BREAKING CHANGE 等信息。

本文更多参考：[Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/)
