import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css'; // CSS を読み込む

const fortunes = [
  { title: '大吉', text: '最高の1週間の始まり！' },
  { title: '中吉', text: '良いことが起こる予感。' },
  { title: '小吉', text: '控えめながら順調な週。' },
  { title: '吉', text: '安定した週になりそう。' },
  { title: '末吉', text: '後半に運気が上昇！' },
  { title: '凶', text: '少し注意して行動を。' }
];

const challenges = [
  '誰かにありがとうを３回言う',
  '昼休みに目黒川を散歩する',
  '席の右に座る同僚の肩をマッサージする',
  'チームの誰かを褒める',
  '今、目が会った人とハイタッチ',
  '普段話さない人と話す',
  '席の左に座る同僚の肩をマッサージする',
  '自分の机周りを整理整頓する'
];

const topics = [
  '最近見た面白い映画',
  '今ハマっている食べ物',
  '今ハマっていること',
  '子供の頃好きだった遊び',
  '昨日食べたご飯',
  '好きなデザート',
  'おすすめの休日の過ごし方',
  '行ってみたい旅行先'
];

export default function App() {
  const [result, setResult] = useState(null);
  const [isDrawing, setIsDrawing] = useState(false);

  const drawOmikuji = () => {
    setIsDrawing(true);
    setTimeout(() => {
      const fortune = fortunes[Math.floor(Math.random() * fortunes.length)];
      const challenge = challenges[Math.floor(Math.random() * challenges.length)];
      const topic = topics[Math.floor(Math.random() * topics.length)];
      setResult({ fortune, challenge, topic });
      setIsDrawing(false);
    }, 1000);
  };

  return (
    <div className="App">
      <h1>ゲツくじ（ゲツヨウ＋おみくじ）</h1>
      <p>月曜日を楽しくスタート！運勢＋お題＋話題でみんなと話そう</p>

      <button onClick={drawOmikuji} disabled={isDrawing}>
        {isDrawing ? '引いています…' : 'おみくじを引く'}
      </button>

      <AnimatePresence>
        {result && (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="result-card"
          >
            <h2>{result.fortune.title}</h2>
            <p>{result.fortune.text}</p>
            <p><strong>今日のチャレンジ:</strong> {result.challenge}</p>
            <p><strong>話題のタネ:</strong> {result.topic}</p>

            <button onClick={() => setResult(null)} className="button">
              もう一度引く
            </button>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
