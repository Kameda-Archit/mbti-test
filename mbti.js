document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('mbtiForm');
  const resultBox = document.getElementById('result');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const score = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

    for (let [_, value] of formData.entries()) {
      if (score[value] !== undefined) score[value]++;
    }

    const ei = score.E >= score.I ? 'E' : 'I';
    const sn = score.S >= score.N ? 'S' : 'N';
    const tf = score.T >= score.F ? 'T' : 'F';
    const jp = score.J >= score.P ? 'J' : 'P';
    const type = ei + sn + tf + jp;

    const typeColors = {
      ISTJ: "#e8f5e9", ISFJ: "#f0f0f0", INFJ: "#e0f7e7", INTJ: "#d0e0f5",
      ISTP: "#e0f2f1", ISFP: "#fbe9e7", INFP: "#f5d0e5", INTP: "#f3e5f5",
      ESTP: "#ede7f6", ESFP: "#fff3e0", ENFP: "#ffe8b2", ENTP: "#fce4ec",
      ESTJ: "#f9fbe7", ESFJ: "#f1f8e9", ENFJ: "#e3f2fd", ENTJ: "#e0d4f7"
    };

    const bgColor = typeColors[type] || "#ffffff";

    resultBox.innerHTML = `
      <h2>あなたのMBTIタイプは：${type}</h2>
      <p>${getDescription(type)}</p>
    `;
    resultBox.style.backgroundColor = bgColor;
    resultBox.classList.add("show");
  });

  function getDescription(type) {
    const descriptions = {
      ISTJ: "責任感が強く、計画的で忠実な実務家。ルールを守り、現実的で安定した行動を好みます。",
      ISFJ: "思いやりがあり、忍耐強く、細やかなサポートが得意。人の役に立つことに喜びを感じます。",
      INFJ: "理想主義的で直感力に優れた洞察者。内面の価値観に従って、人や世界を良くしようとします。",
      INTJ: "戦略的な思考と高い独立性を持つビジョナリー。長期的な視野で物事を設計するのが得意です。",
      ISTP: "柔軟で観察力に優れた現実主義者。問題解決能力が高く、手を動かして理解するタイプです。",
      ISFP: "感受性が高く、調和を大切にするアーティストタイプ。静かに情熱を燃やし、美を追求します。",
      INFP: "理想主義で内向的。想像力豊かで、自分の信念や夢を大切にする心の探求者です。",
      INTP: "論理的で好奇心旺盛な分析家。知的な探究を好み、独自の視点で世界を理解します。",
      ESTP: "行動力と社交性を兼ね備えた冒険家。現場での即断即決と臨機応変さに優れます。",
      ESFP: "陽気で社交的なエンターテイナー。今この瞬間を楽しみ、人を元気づけるのが得意です。",
      ENFP: "自由奔放で情熱的なアイディアマン。新しい可能性を追い求め、創造的に生きます。",
      ENTP: "創造的な挑戦者。好奇心旺盛で、議論や新しい視点を楽しむ型破りなアイデアマンです。",
      ESTJ: "リーダーシップに優れ、組織的に物事を管理できる実行者。現実的で責任感が強いです。",
      ESFJ: "思いやりと社交性を兼ね備えた世話焼きタイプ。人の期待に応え、調和を重んじます。",
      ENFJ: "人を導くカリスマ。共感力と情熱で人を支え、集団の未来を形づくることが得意です。",
      ENTJ: "戦略的かつ決断力に優れた指導者。効率と成果を追求し、大きな目標に挑む野心家です。"
    };
    return descriptions[type] || "タイプ説明は準備中です。";
  }
});
