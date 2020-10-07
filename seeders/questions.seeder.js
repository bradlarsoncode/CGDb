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

      { text: "Blame my mother for my problems", pv: -1, media: "https://webfilms-films.s3.amazonaws.com/sounds/scream.wav"},   // TODO normalize media src, change scream to something else

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

  {
    prompt: "“How are you feeling today?:",
    progress: 1,
    responses: [
      { text: "Great!", pv: -1 },
      { text: "Better", pv: -1 },
      { text: "Fine", pv: -1 },
      { text: "Worse", pv: -1 },
      { text: "Awful", pv: -1 }   // TODO create function to make all selections become "Awful"
    ],
    ui_bank: 2
  },
  {
    prompt: "When you feel miserable, do you like people to suffer too?:",
    progress: 1,
    responses: [
      { text: "TRUE", pv: -1 , media: "https://webfilms-films.s3.amazonaws.com/sounds/scream.wav"}, // TODO normalize meda src
      { text: "FALSE", pv: 0 } // TODO it's a dead button, must select TRUE
    ],
    ui_bank: 3
  },
  {
    prompt: "What are the voices telling you to do?:",
    progress: 1,
    responses: [
      "https://webfilms-films.s3.amazonaws.com/sounds/weird+voice.wav",
      { image: "", subImage: "", pv: -1 },
      { image: "", subImage: "", pv: -1 },
      { image: "", subImage: "", pv: -1 },
      { image: "", subImage: "", pv: 0 },
      { image: "", subImage: "", pv: 0 }
    ],
    ui_bank: 4  // TODO creepy voices media should loop continuously: "https://webfilms-films.s3.amazonaws.com/sounds/weird+voice.wav"
  }
  // {
  //   prompt: "Select whether this is good or bad:",
  //   progress: 1,
  //   responses: [
  //     { images: [] },
  //   ],
  //   ui_bank: 5  //TODO like the Harvard implicit survey, select if image is good or bad
  // }
  // {
  //   prompt: "Select the correct button",
  //   progress: 1,
  //   responses: [
  //     {pv: -1}
  //   ],
  //   ui_bank: 6  // TODO random buttons that will multiply whenever it is clicked.
  // }



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
