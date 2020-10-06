import { Seeder } from 'mongoose-data-seed';
import Question from '../models/Question';

const data = [
  {
    prompt: "The CGDb is:",
    progress: 0,
    responses: [
      {text: "Here to help me", pv: 0},
      {text: "Listening to my thoughts", pv: -1},
      {text: "Not real", pv: -1}
    ],
    ui_bank: 0
},

{
  prompt: "I'm here to:",
  progress: 0,
    responses: [
      { text: "Get better", pv: 0 },
      { text: "Blame my mother for my problems", pv: -1, media: "https://webfilms-films.s3.amazonaws.com/sounds/scream.wav"},   // TODO normalize media src
      { text: "Learn to fly", pv: -1 }
    ],
      ui_bank: 1
},

{
  prompt: "The previous question was:",
  progress: 0,
    responses: [
      { text: "Invasive", pv: -1 },
      { text: "Infuriating", pv: -1 },
      { text: "Thought-provoking", pv: 0 }
    ],
      ui_bank: 0
},

{
  prompt: "Honesty is:",
  progress: 0,
    responses: [
      { text: "Overrated", pv: -1 },
      { text: "A privilege to be awarded to those who prove themselves trustworthy", pv: -1 },
      { text: "A virtue that can be tarnished/lost", pv: 0 }
    ],
    ui_bank: 0
},






]

class QuestionsSeeder extends Seeder {

  async shouldRun() {
    return Question.countDocuments().exec().then(count => count === 0);
  }

  async run() {
    return Question.create(data);
  }
}

export default QuestionsSeeder;
