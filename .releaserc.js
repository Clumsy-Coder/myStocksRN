module.exports = {
  branches: ['master'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    [
      '@google/semantic-release-replace-plugin',
      {
        replacements: [
          {
            files: ['package.json'],
            from: '"version": ".*"',
            to: '"version": "${nextRelease.version}"',
          },
        ],
      },
    ],
    [
      '@semantic-release/github',
      {
        assets: [
          {
            path: 'android/app/build/outputs/apk/release/app-release.apk',
            label: 'Android APK',
          },
        ],
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'package.json'],
      },
    ],
  ],
  analyzeCommits: {
    releaseRules: [
      {
        type: 'docs',
        scope: 'readme.md',
        release: 'patch',
      },
      {
        type: 'build',
        release: 'patch',
      },
    ],
  },
  preset: 'conventionalcommits',
  presetConfig: {
    types: [
      {
        type: 'feat',
        section: ':sparkles: Features',
      },
      {
        type: 'feature',
        section: ':sparkles: Features',
      },
      {
        type: 'fix',
        section: ':bug: Bug Fixes',
      },
      {
        type: 'perf',
        section: ':zap: Performance Improvements',
      },
      {
        type: 'revert',
        section: ':rewind: Reverts',
      },
      {
        type: 'docs',
        section: ':pencil: Documentation',
      },
      {
        type: 'style',
        section: ':lipstick: Styles',
      },
      {
        type: 'chore',
        section: ':robot: Miscellaneous Chores',
      },
      {
        type: 'refactor',
        section: ':recycle: Code Refactoring',
      },
      {
        type: 'test',
        section: ':white_check_mark: Tests',
      },
      {
        type: 'build',
        section: ':package: Build System',
      },
      {
        type: 'ci',
        section: ':construction_worker: Continuous Integration',
      },
    ],
  },
  tagFormat: '${version}',
};
