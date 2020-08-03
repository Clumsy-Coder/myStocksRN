module.exports = {
  branches: ['master'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
    [
      '@semantic-release/exec',
      {
        verifyConditionsCmd: 'run-s verify',
        publishCmd:
          'run-s "release -- {@}" -- --release=${nextRelease.version} --sha=${nextRelease.gitHead}',
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
        section: 'Features',
      },
      {
        type: 'feature',
        section: 'Features',
      },
      {
        type: 'fix',
        section: 'Bug Fixes',
      },
      {
        type: 'perf',
        section: 'Performance Improvements',
      },
      {
        type: 'revert',
        section: 'Reverts',
      },
      {
        type: 'docs',
        section: 'Documentation',
      },
      {
        type: 'style',
        section: 'Styles',
      },
      {
        type: 'chore',
        section: 'Miscellaneous Chores',
      },
      {
        type: 'refactor',
        section: 'Code Refactoring',
      },
      {
        type: 'test',
        section: 'Tests',
      },
      {
        type: 'build',
        section: 'Build System',
      },
      {
        type: 'ci',
        section: 'Continuous Integration',
      },
    ],
  },
  tagFormat: '${version}',
};
