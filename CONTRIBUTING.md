# Contributing

## Set up instructions

First of all, this is a JavaScript project that's distributed on [npmjs.org](https://npmjs.org) and therefore uses JavaScript tooling based on [Node.js](https://nodejs.org/) with dependencies from npm. You're going to need to have those things installed to contribute to this project.

1. Fork the repo
2. Clone your fork
3. Create a branch
4. Run `npm install`
5. Run `npm start`. If everything works, then you're ready to make changes.
6. Make your changes and try to make the tests pass. If you can't or need help then commit what you have with `--no-verify` and make a PR
7. If you get things working, add your changed files with `git add` and run `npm run commit` to get an interactive prompt for creating a commit message that follows [our standards](https://github.com/stevemao/conventional-changelog-angular/blob/master/convention.md). You'll notice that there are git hooks in place which will run testing, linting, etc. (unless you commit with `--no-verify`).
8. Push your changes to your fork with `git push`
9. Create a pull request.
10. Iterate on the solution.
11. Get merged! 🎉 🎊
