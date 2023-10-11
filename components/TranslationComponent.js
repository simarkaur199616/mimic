import { useState } from 'react';
import styles from '../styles/Home.module.css';

const TranslationComponent = () => {
  const [selectedWords, setSelectedWords] = useState([]);
  const [translations, setTranslations] = useState({});

  const handleWordClick = (word) => {
    if (selectedWords.includes(word)) {
      setSelectedWords(selectedWords.filter(w => w !== word));
    } else {
      setSelectedWords([...selectedWords, word]);
    }
  };
  

  const handleShowTranslation = () => {
    const translationObj = {};
  
    // Loop through selected words and find their translations
    selectedWords.forEach(word => {
      const punctuation = /[.,?]/.exec(word);
      const cleanedWord = punctuation ? word.slice(0, punctuation.index) : word;
  
      const translationPair = wordPairs.find(pair => pair.english === cleanedWord);
      if (translationPair) {
        translationObj[word] = translationPair.japanese + (punctuation ? word.slice(punctuation.index) : '');
      }
    });
  
    setTranslations(translationObj);
  };
  

  const handleReset = () => {
    setSelectedWords([]);
    setTranslations({});
  };

  const wordPairs = [
    
    { english: 'Hey', japanese: 'こんにちは' },
    { english: 'there', japanese: 'そこで' },
    { english: 'how', japanese: 'どのように' },
    { english: 'are', japanese: 'です' },
    { english: 'you', japanese: 'あなた' },
    { english: 'doing', japanese: 'していますか' },
    { english: 'Yeah', japanese: 'はい' },
    { english: 'I’m', japanese: '私は' },
    { english: 'good', japanese: '元気です' },
    { english: 'How', japanese: 'どのように' },
    { english: 'was', japanese: 'でした' },
    { english: 'your', japanese: 'あなたの' },
    { english: 'weekend', japanese: '週末' },
    { english: 'It', japanese: 'それは' },
    { english: 'actually', japanese: '実際は' },
    { english: 'went', japanese: '行きました' },
    { english: 'on', japanese: 'に' },
    { english: 'that', japanese: 'その' },
    { english: 'bike', japanese: '自転車' },
    { english: 'ride', japanese: '乗りました' },
    { english: 'I', japanese: '私は' },
    { english: 'told', japanese: '話しました' },
    { english: 'you', japanese: 'あなたに' },
    { english: 'about', japanese: 'について' },
    { english: 'before', japanese: '前に' },
    { english: 'Oh', japanese: 'ああ' },
    { english: 'cool', japanese: 'かっこいい' },
    { english: 'really', japanese: '本当に' },
    { english: 'sunny', japanese: '晴れた' },
    { english: 'weather', japanese: '天気' },
    { english: 'know', japanese: '知っていますか' },
    { english: 'so', japanese: 'だから' },
    { english: 'that', japanese: 'それは' },
    { english: 'but', japanese: 'でも' },
    { english: 'yeah', japanese: 'はい' },
    { english: 'we', japanese: '私たちは' },
    { english: 'ended', japanese: '終わった' },
    { english: 'up', japanese: 'アップ' },
    { english: 'getting', japanese: '手に入れました' },
    { english: 'some', japanese: 'いくつかの' },
    { english: 'uh', japanese: 'ええと' },
    { english: 'Coffees', japanese: 'コーヒー' },
    { english: 'And', japanese: 'そして' },
    { english: 'other', japanese: '他の' },
    { english: 'things', japanese: 'もの' }
  ];
  

  const englishText = "Hey there, how are you doing? Yeah I’m good. How was your weekend? It was good, actually, I went on that bike ride that I told you about before. Oh cool. Yeah, it was good, really sunny weather you know, so that was good but yeah we ended up getting some uh. Coffees. And other things.";

  const japaneseText = "こんにちは、元気ですか？ はい、元気です。週末はどうでしたか？ 実際、良かったです。前に話したあの自転車に乗りました。 ああ、かっこいい。 そうです、とても良かったです、晴れた天気でしたので、それは良かったですが、はい、何かコーヒーを飲みました。 他にもいろいろ。";
  
  const englishWords = englishText.match(/(\w+[\w.,?]*)/g);
  const japaneseWords = japaneseText.match(/\b\w+\b[.,?]?/g);

  const words = englishWords;

  return (
    <div className={styles.textback}>
      <div className={styles.text}>
        {words.map((word, index) => (
          <span
            key={index}
            className={selectedWords.includes(word) ? styles.selectedWord : null}
            onClick={() => handleWordClick(word)}
          >
            
            {word}{' '}
          </span>
        ))}
      </div>
      <div className={styles.controls}>
        <button className={styles.button} onClick={handleShowTranslation}>Show Translation</button>
        <button className={styles.button} onClick={handleReset}>Reset</button>
      </div>
      <div className={styles.translations}>
        {Object.entries(translations).map(([word, translation]) => (
          <div key={word}>
            <span>{word}:</span> <span>{translation}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TranslationComponent;
