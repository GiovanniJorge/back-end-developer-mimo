const db = require("./database");
const Question = require("./Question");

class Quiz {
  getRandomQuestion() {
    const stmt = db.prepare(`
      SELECT *
      FROM questions
      ORDER BY RANDOM()
      LIMIT 1
    `);
    const question = stmt.get();

    if (question) {
      return new Question(
        question.id,
        question.question,
        question.options,
        question.correctAnswer
      );
    }

    return null;
  }

  checkAnswer(questionId, answer) {
    const stmt = db.prepare(`
      SELECT correctAnswer
      FROM questions
      WHERE id = ?
    `);
    const result = stmt.get(questionId);

    if (result) {
      return result.correctAnswer === answer;
    }

    return null;
  }
}

module.exports = Quiz;