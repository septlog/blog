---
title: git 修改某个commit的author
date: 2021-11-17 15:43:20
tags: git
---

## 修改最后一次 commit 的 author

git config --global user.name username
git config --global user.email user@email.com
git commit --amend --reset-author --no-edit

## 修改指定 commit 的 author

git rebase -i commitId（要修改的 commit 的前一个 commit 的 id）
-i 表示 interactive 交互式的
这时会打开 git 默认的编辑器
将 pick 修改为 edit 后保存退出编辑器
git commit --amend --author="username user@email.com"（注意用户名和邮箱之间有一个空格）
然后 git rebase --continue
