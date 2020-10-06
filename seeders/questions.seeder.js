import { Seeder } from 'mongoose-data-seed';
import Question from '../models/Question';

const data = [
  {
    prompt: "The CGDb is:",
    responses: [
      {text: "Here to help me", pv: 0},
      {text: "Listening to my thoughts", pv: -1},
      {text: "Not real", pv: -1}
    ],
    question_type: 'multiple choice',
    weirdness: 0
}];

class QuestionsSeeder extends Seeder {

  async shouldRun() {
    return Question.countDocuments().exec().then(count => count === 0);
  }

  async run() {
    return Question.create(data);
  }
}

export default QuestionsSeeder;
