const fs = require('fs');
const path = require('path');

const TRACKER_FILE = path.join(__dirname, '../.migration-progress.json');

const initTracker = () => {
  const initial = {
    startTime: new Date().toISOString(),
    phases: {
      preparation: { status: 'in-progress', tasks: [] },
      audit: { status: 'pending', tasks: [] },
      cleanup: { status: 'pending', tasks: [] },
      migration: { status: 'pending', tasks: [] },
      validation: { status: 'pending', tasks: [] },
      optimization: { status: 'pending', tasks: [] }
    },
    filesModified: [],
    issuesFound: [],
    rollbackPoints: []
  };
  fs.writeFileSync(TRACKER_FILE, JSON.stringify(initial, null, 2));
  console.log('✅ Migration tracker initialized');
};

const updatePhase = (phase, status, task = null) => {
  const tracker = JSON.parse(fs.readFileSync(TRACKER_FILE, 'utf8'));
  tracker.phases[phase].status = status;
  if (task) tracker.phases[phase].tasks.push(task);
  fs.writeFileSync(TRACKER_FILE, JSON.stringify(tracker, null, 2));
};

const addModifiedFile = (filePath) => {
  const tracker = JSON.parse(fs.readFileSync(TRACKER_FILE, 'utf8'));
  if (!tracker.filesModified.includes(filePath)) {
    tracker.filesModified.push(filePath);
  }
  fs.writeFileSync(TRACKER_FILE, JSON.stringify(tracker, null, 2));
};

module.exports = { initTracker, updatePhase, addModifiedFile };