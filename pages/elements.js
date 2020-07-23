import React, { useState, useEffect } from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles-2.css";



import { Navbar } from "../components/Navhero/Nav"
import { Quizbox } from "../components/Quizbox/Quizbox";

import { Footer } from "../components/Sections/Footer";
import Head from "next/head";

const quiz = [
  {
    'question': "Which of these animals would you have as a mentor and a friend?",
    'options': {
      'a': 'Dragon',
      'b': 'Flying Bison',
      'c': 'Badger Mole',
      'd': 'Koi Fish',
    }
  },
  {
    'question': "Which martial arts style would you practice?",
    'options': {
      'a': 'Eight Trigram',
      'b': 'Hung Gar style K.F',
      'c': 'Northern Shaolin style',
      'd': "Tai Chi  Ch'uan",
    }
  },
  {
    'question': "What do you value more?",
    'options': {
      'a': 'Power',
      'b': 'Spiritual Enlightenment',
      'c': 'Strength',
      'd': 'Compassion',
    }
  },
  {
    'question': "How would you describe yourself?",
    'options': {
      'a': 'Highly Focused',
      'b': 'Free-spirited',
      'c': 'Dynamic',
      'd': 'Tenacious',
    }
  },
  {
    'question': "What is most important to you?",
    'options': {
      'a': 'Knowledge',
      'b': 'Freedom',
      'c': 'Harmony',
      'd': 'Stability',
    }
  },
  {
    'question': "Which special ability do you desire the most?",
    'options': {
      'a': 'Healing',
      'b': 'Flight',
      'c': 'Seismic Sense',
      'd': 'Lightning Generation',
    }
  },
  {
    'question': "What is the ideal society",
    'options': {
      'a': 'Capitalist',
      'b': 'Monarchist',
      'c': 'Tribal',
      'd': 'Nomadic',
    }
  },
  {
    'question': "You're under attack! How do you win?",
    'options': {
      'a': 'Overwhelming Offense',
      'b': 'Optimal Evasion',
      'c': 'Adaptablity',
      'd': 'Brute Force',
    }
  },
  {
    'question': "Which dangerous place would you rather visit?",
    'options': {
      'a': 'The Arctic',
      'b': 'Valcano Site',
      'c': 'The Sahara Desert',
      'd': 'Mount Everest',
    }
  },
  {
    'question': "Are you more?",
    'options': {
      'a': 'Clever',
      'b': 'Family-Oriented',
      'c': 'Insightful',
      'd': 'Strong Willed',
    }
  },
  {
    'question': "I see myself as a?",
    'options': {
      'a': 'Unifier',
      'b': 'Expand-er',
      'c': 'Soul-Searcher',
      'd': 'Stabilizer',
    }
  },
  {
    'question': "What does your Zodiac sign stand for?",
    'options': {
      'a': 'Fire',
      'b': 'Water',
      'c': 'Earth',
      'd': 'Wind',
    }
  },
  {
    'question': "You would most want to be part of?",
    'options': {
      'a': 'Close and connected community',
      'b': 'Strong and diverse population',
      'c': 'Proud and powerful nation',
      'd': 'Spiritually enlightened society',
    }
  },
  {
    'question': "What hobby would you like to participate in?",
    'options': {
      'a': 'Gardening',
      'b': 'Reading',
      'c': 'Meditation',
      'd': 'Yoga',
    }
  },
  {
    'question': "What hobby would you like to participate in?",
    'options': {
      'a': 'Gardening',
      'b': 'Reading',
      'c': 'Meditation',
      'd': 'Yoga',
    }
  },
  {
    'question': "Which of the following is your worst trait?",
    'options': {
      'a': 'extremely sensitive',
      'b': 'can be very lethargic',
      'c': 'can be quite stubborn',
      'd': 'can be quite temperamental',
    }
  },
  {
    'question': "You are standing on a cliff facing the sea, at sunset, with a forest behind you. What do you first notice?",
    'options': {
      'a': 'sea and the powerful waves',
      'b': 'wind blowing through your hair',
      'c': 'soil beneath your feet',
      'd': 'suns fiery rays scattering light everywhere',
    }
  },
]

export default () => {
  // const [quiz, setQuiz] = useState([]);

  // useEffect(() => {
  //   fetch('https://3000-e15ebb6c-6788-4197-80e8-259399a2c9b0.ws-us02.gitpod.io/quiz')
  //   .then(resp => resp.json())
  //   .then(data => setQuiz(data))
  // }, [])

  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Nanum+Pen+Script&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />

      {quiz.map((item, index) => {
        return <Quizbox 
                  key={index} 
                  question={item.question}
                  options={item.options} 
                />
      })}

      <Footer />
    </div>
  )
};
