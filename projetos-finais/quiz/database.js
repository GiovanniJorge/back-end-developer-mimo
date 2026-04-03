const Database = require('better-sqlite3');
const db = new Database('/tmp/quiz.db');

db.exec(`
  CREATE TABLE IF NOT EXISTS questions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    question TEXT NOT NULL,
    options TEXT NOT NULL,
    correctAnswer TEXT NOT NULL
  )
`);

db.exec(`
  INSERT INTO questions (question, options, correctAnswer)
  SELECT 'What is the capital of France?', 'Paris, Rome, Berlin, Madrid', 'Paris'
  WHERE NOT EXISTS (SELECT 1 FROM questions WHERE question = 'What is the capital of France?')
`);

db.exec(`
  INSERT INTO questions (question, options, correctAnswer)
  SELECT 'What is 2 + 2?', '3, 4, 5, 6', '4'
  WHERE NOT EXISTS (SELECT 1 FROM questions WHERE question = 'What is 2 + 2?')
`);

module.exports = db;