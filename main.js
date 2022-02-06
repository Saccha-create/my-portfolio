const quizText = document.getElementById("quiz-text");
const quizImage = document.getElementById("quiz-image");
const choice1 = document.getElementById("choice-1");
const choice2 = document.getElementById("choice-2");
const choice3 = document.getElementById("choice-3");
const feedback = document.getElementById("feedback");

// クイズの内容
const quiz = {
  image: "./image/",
  choices: [
    {
      text: "上海",
      feedback: "残念！",
    },
    {
      text: "北京",
      feedback: "残念！",
    },
    {
      text: "蘇州",
      feedback: "正解！",
    },
  ],
};

// quiz を画面に表示する関数
const reloadQuiz = function () {
  // 画像を表示
  quizImage.src = "./image/" + quiz.image;

  // 選択肢（ボタン）の中身を表示
  choice1.textContent = quiz.choices[0].text;
  choice2.textContent = quiz.choices[1].text;
  choice3.textContent = quiz.choices[2].text;
};

// choiceNumber番目の選択肢を選択
const choose = function (choiceNumber) {
  // フィードバックを表示
  feedback.textContent = quiz.choices[choiceNumber].feedback;
};

choice1.onclick = function () {
  // 0 番目の選択肢を選択
  choose(0);
};
choice2.onclick = function () {
  // 1 番目の選択肢を選択
  choose(1);
};
choice3.onclick = function () {
  // 2 番目の選択肢を選択
  choose(2);
};

// reloadQuiz関数 を実行して、クイズを画面に表示する
reloadQuiz();
