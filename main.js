Vue.createApp({
  data() {
    return {
      feedback: "",
      quiz: {
        text: "私の昔住んでいたこの場所はどこでしょう❓",
        image: "LINE_ALBUM_20160509 _1_211115_101.jpg",
        logs: [
          {
            text: "蘇州",
            feedback: "正解！東洋のベネチアと呼ばれている運河の街です",
          },
          {
            text: "上海",
            feedback: "残念！でも近いのでめっちゃ行きました",
          },
          {
            text: "北京",
            feedback: "残念！家族旅行で一度行ったことがあります",
          },
        ],
      },
    };
  },
  methods: {
    choiced(log) {
      this.feedback = log.feedback;
    },
  },
  computed: {
    quizImagePath() {
      return "./image/" + this.quiz.image;
    },
  },
}).mount("#omake");
