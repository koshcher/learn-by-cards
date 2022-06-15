function randomInt(max) {
  return Math.floor(Math.random() * max);
}

export default class WordService {
  static words = null;
  
  static async getWordsSimple() {
    WordService.words = await fetch('https://raw.githubusercontent.com/ozadorozhnyi/words/main/words.json')
    .then(response => response.json());
  }

  static async getWords(count) {
    WordService.words = await fetch('https://raw.githubusercontent.com/roman-koshchei/en-ua-words/main/b-level-words.json')
    .then(response => response.json())
    .then(all =>  {
      // for each random
      let res = [];
      for (let i = 0; i < count; i++) {
        res.push(all[randomInt(all.length)]);
      }
      return res;
    });
  }

  static get correctCount() {
    try {
      let count = 0;
      this.words.forEach(word => {
        if(word.correct == true) {
          count++;
        }
      });
      return count;
    } catch (e) {
      throw Error(`Can\'t count correct, because: ${e.message}`);
    }
  }
}