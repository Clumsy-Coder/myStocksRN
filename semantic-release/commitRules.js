const MAJOR = 'major';
const MINOR = 'minor';
const PATCH = 'patch';

module.exports = [
  { breaking: true, release: MAJOR },
  { revert: true, release: PATCH },
  { type: 'feat', release: MINOR },
  { type: 'feature', release: MINOR },
  { type: 'fix', release: PATCH },
  { type: 'perf', release: PATCH },
  { type: 'revert', release: PATCH },
  { type: 'docs', release: PATCH },
  { type: 'style', release: PATCH },
  { type: 'chore', release: PATCH },
  { type: 'refactor', release: PATCH },
  { type: 'test', release: PATCH },
  { type: 'build', release: PATCH },
  { type: 'ci', release: PATCH },
];
