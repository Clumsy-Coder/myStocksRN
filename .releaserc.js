const commitTypes = require('./semantic-release/commitTypes');
const commitRules = require('./semantic-release/commitRules');

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
    releaseRules: commitRules,
  },
  preset: 'conventionalcommits',
  presetConfig: {
    types: commitTypes,
  },
  tagFormat: '${version}',
};
