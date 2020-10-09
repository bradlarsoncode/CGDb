import { Seeder } from 'mongoose-data-seed';
import Question from '../models/Question';
// const Question = require('../models/Question');

const data = [
  {
    prompt: "The CGDb is:",
    progress: 0,
    responses: [
      { text: "Here to help me", pv: 0 },
      { text: "Listening to my thoughts", pv: -1 },
      { text: "Not real", pv: -1 }
    ],
    ui_bank: 0
  },
  {
    prompt: "When was the last time you've taken this assessment?:",
    progress: 0,
    responses: [
      { text: "I've never taken this before", pv: -1 },
      { text: "Yesterday", pv: 0 }
    ],
    ui_bank: 0
  },
  {
    prompt: "I'm here to:",
    progress: 0,
    responses: [
      { text: "Get better", pv: 0 },
      { text: "Blame my mother for my problems", pv: -1, media: "https://webfilms-films.s3.amazonaws.com/sounds/scream.wav"},   // TODO normalize media src, change scream to something else
      { text: "Destroy the CGDb", pv: -1 }
    ],
      ui_bank: 1
  },
  {
    prompt: "The previous question was:",
    progress: 0,
    responses: [
      { text: "Invasive", pv: -1 },
      { text: "Infuriating", pv: -1 },
      { text: "Meaningful", pv: 0 }
    ],
      ui_bank: 0
  },
  {
    prompt: "Honesty is:",
    progress: 0,
    responses: [
      { text: "Overrated", pv: -1 },
      { text: "Earned", pv: -1 },
      { text: "A virtue that can be tarnished/lost", pv: 0 }
    ],
    ui_bank: 0
  },
  {
    prompt: "“How are you feeling today?:",
    progress: 1,
    responses: [

      { text: "Awful", pv: -1 },   
      { text: "Awful", pv: -1 },   
      { text: "Awful", pv: -1 },   
      { text: "Awful", pv: -1 },   
      { text: "Awful", pv: -1 },   
      { text: "Awful", pv: -1 },   
      { text: "Awful", pv: -1 },  
      { text: "Awful", pv: -1 },   
      { text: "Awful", pv: -1 },   
      { text: "Awful", pv: -1 },
      { text: "Awful", pv: -1 }
    ],
    ui_bank: 2
  },
  {
    prompt: "When you feel miserable, do you like people to suffer too?:",
    progress: 2,
    responses: [
      { text: "TRUE", pv: -1 , media: "https://webfilms-films.s3.amazonaws.com/sounds/scream.wav"}, // TODO normalize meda src
      { text: "TRUE", pv: -1 }
    ],
    ui_bank: 3
  },
  {
    prompt: "What are the voices telling you to do?:",
    progress: 3,
    responses: [
      "https://webfilms-films.s3.amazonaws.com/sounds/weird+voice.wav",
      { image: "https://drive.google.com/thumbnail?id=1vMC3hB81UPXZu4egI6mfycYKcjbRpp_6", pv: -1 },
      { image: "https://drive.google.com/thumbnail?id=1K9sccE-Vg5Z9iHJGdDPcYtL0IKrSZpAk", pv: -1 },
      { image: "https://drive.google.com/thumbnail?id=1Blod3AQmXZeQm2obHF-XenjJ308oPk3f", pv: 0 }
      // { image: "https://drive.google.com/thumbnail?id=1y31C1QOPQPr2YBTXDVz2VGu2NQpMrd5n", pv: -1 },
      // { image: "https://drive.google.com/thumbnail?id=1FOhQNu3sJC5XBdnYfLlVBYZ6zmq-8UMY", pv: 0 }
    ],
    ui_bank: 4  // TODO creepy voices media should loop continuously: "https://webfilms-films.s3.amazonaws.com/sounds/weird+voice.wav"
  },
  {
    prompt: "Select whether this is good or bad:",
    progress: 4,
    responses: [
      {
        image: [
          "https://drive.google.com/thumbnail?id=1R7Zi9LK74yEoXJle2ZJKWCZ-LQti7rXe",
          "https://drive.google.com/thumbnail?id=1IAJaLgKi0cjFJwfXI6AVI1TOtu0XObYr",
          "https://drive.google.com/thumbnail?id=15zlVitiZUuTA0YC1ODg6Azjh6WYgSV66",
          "https://drive.google.com/thumbnail?id=1G3fO2jsTfQWEl3X3T8gz4bQXGd5C0ZH8",
          "https://drive.google.com/thumbnail?id=17hYytvEyo9F6MrsxFGAug9fFzyHU70Z7"
        ]
      }
    ],
    ui_bank: 5  //TODO like the Harvard implicit survey, select if image is good or bad
  },
  // {
  //   prompt: "Select the correct button",
  //   progress: 5,
  //   responses: [
  //     {pv: -1}
  //   ],
  //   ui_bank: 6  // TODO random buttons that will multiply whenever it is clicked.  After buttons are pressed 10 times, progress to next page.
  // },
  {
    prompt: "Are you seeing things that other people cant see?:",
    progress: 6,
    responses: [
      "https://drive.google.com/thumbnail?id=1p-aVxQ4Ytytuk_Zahk75hXOrc1XEDc0t",
      { text: "Yes", pv: -1 },
      { text: "No", pv: 0 }
    ],
    ui_bank: 7  //TODO montage of images are shown in modal
  },
  {
    prompt: "Darkness reveals the truth",
    progress: 7,
    responses: [
      "https://drive.google.com/file/d/1nTxx3fUc2I48YnXLlbFSfle3vbm1xqvv/view?usp=sharing",
      {pv: -10}
    ],
    ui_bank: 8  //TODO when user hits the switch/lightbulb, background goes dark and user gets an audio or video jump scare
  }
  


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
