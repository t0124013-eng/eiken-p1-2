/* =========================================================
   英検2級 二次試験 練習用 問題カード
   ---------------------------------------------------------
   カードを追加するときは、1枚分 { ... } をコピーして id を連番にし、
   images/g2card{N}.jpg を置くだけです。
     passageTitle / passage : 音読するパッセージ（60語程度）
     q1 / q1Model          : No.1（パッセージについての質問）と答えの例
     firstSentence         : No.2 の言い出しの文
     panels[0]〜[2]        : 3コマ（time は2・3コマ目の時間表現）
     q3 / q4               : 意見を問う質問。q4 は Yes/No のあと Why? / Why not? が続く
   ========================================================= */
window.CARDS2 = [
  {
    id: 1,
    title: "シェアサイクル",
    passageTitle: "Bicycle-Sharing Services",
    passage: "Bicycle-sharing services are becoming popular in many cities. Users can rent a bicycle at one station and return it at another. Some cities offer these services at low prices, and by doing so, they encourage people to use bicycles instead of cars. However, some people leave the bicycles in the wrong places, and this causes problems for others.",
    q1: "According to the passage, how do some cities encourage people to use bicycles instead of cars?",
    q1Model: "By offering bicycle-sharing services at low prices.",
    firstSentence: "One day, Mr. and Mrs. Sato were talking about going to the station.",
    image: "images/g2card1",
    panels: [
      { time: null, note: "Mr. Sato: “Let's use the bike-sharing service.”",
        scene: "家のリビングで、夫がスマホのシェアサイクルのアプリを妻に見せ、妻はうれしそうにうなずいている。" },
      { time: "Twenty minutes later", note: null,
        scene: "夫婦が赤いシェアサイクルに乗って、晴れた並木道を笑顔で走っている。" },
      { time: "At the station", note: null,
        scene: "駅前のシェアサイクルの置き場が満車で空きがなく、夫婦が自転車を持ったまま困っている。夫は腕時計を見ている。" }
    ],
    q3: "Some people say that more cities should build special lanes for bicycles. What do you think about that?",
    q4: "Today, many people use maps on their smartphones when they go out. Do you think people depend too much on their smartphones?",
    modelNarration: "One day, Mr. and Mrs. Sato were talking about going to the station. Mr. Sato said to his wife, “Let's use the bike-sharing service.” Twenty minutes later, they were riding shared bicycles along the street and enjoying the ride. At the station, however, there was no space to return the bicycles. Mr. Sato was worried because their train was leaving soon.",
    q3Point: "賛成例＝事故が減る・自転車を使う人が増え環境にもよい／反対例＝道路が狭くて作れない・費用がかかる",
    q4Point: "Yes例＝地図アプリなしでは道が分からない人が多い／No例＝便利な道具として上手に使っているだけ"
  },
  {
    id: 2,
    title: "市民農園",
    passageTitle: "Community Gardens",
    passage: "In some cities, people who live in the same area grow vegetables together in community gardens. These gardens give people a chance to enjoy nature and meet their neighbors. Some local governments provide land for these gardens for free, and in this way, they help people build good relationships in their communities. Such gardens are expected to become more common.",
    q1: "According to the passage, how do some local governments help people build good relationships in their communities?",
    q1Model: "By providing land for community gardens for free.",
    firstSentence: "One day, Yuki and her grandfather were looking at a notice about a community garden.",
    image: "images/g2card2",
    panels: [
      { time: null, note: "Notice: “Join our community garden!”",
        scene: "高校生のユキと祖父が、掲示板の市民農園の案内を一緒に見て興味を持っている。" },
      { time: "A few weeks later", note: null,
        scene: "市民農園で近所の人たちと一緒に、ユキと祖父がトマトの苗を楽しそうに植えている。" },
      { time: "One morning", note: null,
        scene: "畑でカラスが赤いトマトを食べていて、ユキと祖父が驚いている。" }
    ],
    q3: "Some people say that children should spend more time learning about nature. What do you think about that?",
    q4: "Today, many people live alone in big cities. Do you think people should spend more time with their neighbors?",
    modelNarration: "One day, Yuki and her grandfather were looking at a notice about a community garden. They decided to join it. A few weeks later, they were planting tomatoes together with their neighbors in the garden. One morning, however, they found that some crows were eating their tomatoes. They were very surprised.",
    q3Point: "賛成例＝自然を大切にする心が育つ・外で体を動かせる／反対例＝勉強の時間が減る・都会では機会が少ない",
    q4Point: "Yes例＝災害のときに助け合える・孤独を防げる／No例＝プライバシーを大切にしたい人もいる・忙しい"
  },
  {
    id: 3,
    title: "夜の美術館",
    passageTitle: "Museums at Night",
    passage: "Some museums in Japan have started to stay open later in the evening. Many people are too busy to visit museums during the day because of their work. By staying open at night, museums allow such people to enjoy art after work. Some museums also hold special events like concerts, and these events attract many young visitors.",
    q1: "According to the passage, how do some museums allow busy people to enjoy art after work?",
    q1Model: "By staying open at night.",
    firstSentence: "One evening, Ms. Mori saw a poster about a night event at a museum.",
    image: "images/g2card3",
    panels: [
      { time: null, note: "Poster: “Night at the Museum — Concert, Friday 7 p.m.”",
        scene: "夕方のオフィスで、会社員のモリさんが絵とバイオリンが描かれたポスターをうれしそうに見ている。" },
      { time: "On Friday night", note: null,
        scene: "夜の美術館の展示室で、モリさんと友人が大きな絵の前で弦楽四重奏のコンサートを楽しんでいる。" },
      { time: "After the event", note: null,
        scene: "深夜の駅のホームで、モリさんが真夜中を指す時計を見て驚いている。遠くで最終電車が出ていく。" }
    ],
    q3: "Some people say that students should visit museums more often on school trips. What do you think about that?",
    q4: "Today, many people listen to music online. Do you think more people will go to live concerts in the future?",
    modelNarration: "One evening, Ms. Mori saw a poster about a night event at a museum. It said that there would be a concert on Friday at seven. On Friday night, she and her friend were enjoying the concert at the museum. After the event, however, she arrived at the station very late. She was shocked because she had missed the last train.",
    q3Point: "賛成例＝本物の作品から多くを学べる・教科書では分からない／反対例＝生徒が興味を持たないこともある・オンラインでも見られる",
    q4Point: "Yes例＝ネットで知った音楽を生で聞きたくなる人が増える／No例＝チケットが高い・家で手軽に聞ける"
  },
  {
    id: 4,
    title: "配膳ロボット",
    passageTitle: "Robots in Restaurants",
    passage: "These days, some restaurants use robots to carry food to customers. Many restaurants do not have enough workers, and this has become a serious problem. Robots can work for many hours without getting tired, and by using them, restaurants can deal with this problem. However, some customers feel that talking with the staff is part of the fun of eating out.",
    q1: "According to the passage, how can restaurants deal with the problem of not having enough workers?",
    q1Model: "By using robots that can work for many hours without getting tired.",
    firstSentence: "One day, the Ito family was having dinner at a restaurant.",
    image: "images/g2card4",
    panels: [
      { time: null, note: null,
        scene: "ファミリーレストランで、イトウ家の子どもたちがタブレットで楽しそうに料理を注文している。" },
      { time: "A few minutes later", note: null,
        scene: "白い配膳ロボットが料理を運んできて、子どもたちが手をたたいて喜んでいる。" },
      { time: "After dinner", note: null,
        scene: "通路に子どものリュックが置いてあってロボットが止まってしまい、父親が恥ずかしそうにリュックを拾いに行く。" }
    ],
    q3: "Some people say that robots will take away many jobs from people. What do you think about that?",
    q4: "Today, many restaurants let customers order with tablets. Do you think this is a good idea?",
    modelNarration: "One day, the Ito family was having dinner at a restaurant. The children were ordering food with a tablet. A few minutes later, a robot brought the food to their table, and the children were very excited. After dinner, however, the robot stopped in the aisle because a bag was on the floor. Mr. Ito went to pick up the bag.",
    q3Point: "賛成例＝単純な仕事は機械に置き換わる／反対例＝人にしかできない仕事も多い・新しい仕事が生まれる",
    q4Point: "Yes例＝待ち時間が減る・注文ミスがない／No例＝高齢者には使いにくい・店員と話す楽しみが減る"
  },
  {
    id: 5,
    title: "語学アプリ",
    passageTitle: "Language Learning Apps",
    passage: "Many people use smartphone apps to study foreign languages. These apps let users practice for only a few minutes at a time, so people can study on their way to work or school. Some apps also give points to users every day, and by doing so, they help users keep studying. However, some say that practicing with real people is still important.",
    q1: "According to the passage, how do some apps help users keep studying?",
    q1Model: "By giving points to users every day.",
    firstSentence: "One day, Emi was talking with her father about her English speaking test.",
    image: "images/g2card5",
    panels: [
      { time: null, note: "Father: “Why don't you try this app?”",
        scene: "家で父親がスマホの語学アプリをエミに見せ、エミは興味を持っている。" },
      { time: "Every morning", note: null,
        scene: "混んだ朝の電車で、エミがイヤホンをしてアプリで楽しそうに勉強している。" },
      { time: "On the day of the test", note: null,
        scene: "教室でエミが外国人の先生とスピーキングテストをしているが、緊張して言葉が出てこない。" }
    ],
    q3: "Some people say that students should start learning English in kindergarten. What do you think about that?",
    q4: "Today, many students study abroad. Do you think more Japanese students should study in other countries?",
    modelNarration: "One day, Emi was talking with her father about her English speaking test. He said to her, “Why don't you try this app?” Every morning, Emi studied English with the app on the train. On the day of the test, however, she was talking with a foreign teacher. She was so nervous that she could not say anything.",
    q3Point: "賛成例＝小さいころの方が音に慣れやすい／反対例＝まず日本語をしっかり学ぶべき・子どもの負担",
    q4Point: "Yes例＝異文化を体験でき視野が広がる・英語が上達する／No例＝費用が高い・国内でも学べる"
  },
  {
    id: 6,
    title: "熱中症",
    passageTitle: "Heatstroke",
    passage: "Summers in Japan are getting hotter every year, and more people are suffering from heatstroke. To protect people, some cities have opened cool spaces in public buildings such as libraries. People can rest there for free, and in this way, they can avoid staying outside in the heat for a long time. Experts also say that drinking water often is important.",
    q1: "According to the passage, how can people avoid staying outside in the heat for a long time?",
    q1Model: "By resting for free in cool spaces in public buildings such as libraries.",
    firstSentence: "One day, Mr. and Mrs. Tanaka were planning to play tennis in the park.",
    image: "images/g2card6",
    panels: [
      { time: null, note: "TV: “Today's high: 37°C”",
        scene: "家のテレビで「最高気温37度」の天気予報が流れ、タナカ夫妻がテニスラケットを持って見ている。" },
      { time: "That afternoon", note: null,
        scene: "強い日差しの公園で夫婦がテニスをしていて、汗をかいている。妻は水を飲んでいる。" },
      { time: "Thirty minutes later", note: null,
        scene: "夫がベンチに座ってぐったりしていて、妻が心配そうに水のボトルを渡している。" }
    ],
    q3: "Some people say that schools should stop outdoor sports activities on very hot days. What do you think about that?",
    q4: "Today, many people use air conditioners all day in summer. Do you think people should try to use less electricity?",
    modelNarration: "One day, Mr. and Mrs. Tanaka were planning to play tennis in the park. The weather report on TV said that it would be thirty-seven degrees. That afternoon, they were playing tennis in the hot sun. Mrs. Tanaka was drinking water. Thirty minutes later, however, Mr. Tanaka felt sick and sat down on a bench. His wife gave him some water.",
    q3Point: "賛成例＝命を守ることが最優先／反対例＝時間帯を変えたり休憩を増やしたりすればよい・大会の練習ができない",
    q4Point: "Yes例＝電気代や環境への負担を減らせる／No例＝暑さで体を壊すほうが危険"
  },
  {
    id: 7,
    title: "古着のネット販売",
    passageTitle: "Selling Used Clothes",
    passage: "Nowadays, many people sell clothes that they no longer wear on the Internet. Other people can buy these clothes at low prices. By selling used clothes online, people can earn some money and also reduce waste. However, buyers cannot touch the clothes before buying them, so they are sometimes disappointed when the clothes arrive.",
    q1: "According to the passage, how can people earn some money and also reduce waste?",
    q1Model: "By selling their used clothes online.",
    firstSentence: "One day, Haruka was cleaning her room.",
    image: "images/g2card7",
    panels: [
      { time: null, note: null,
        scene: "部屋の掃除中、ハルカが着なくなった服の山を前に、スマホを手にいいことを思いついた顔をしている。" },
      { time: "A week later", note: null,
        scene: "ハルカがセーターを箱に詰めて発送の準備をしている。スマホには売れたという通知。うれしそう。" },
      { time: "A few days later", note: null,
        scene: "ネットで買ったジャケットが届いて鏡の前で着てみると、大きすぎてがっかりしている。" }
    ],
    q3: "Some people say that people buy too many clothes these days. What do you think about that?",
    q4: "Today, some companies allow workers to wear casual clothes at work. Do you think this is a good idea?",
    modelNarration: "One day, Haruka was cleaning her room. She found a lot of clothes that she no longer wore, and she decided to sell them online. A week later, she was packing a sweater that she had sold, and she looked happy. A few days later, however, she tried on a jacket that she had bought online. It was too big for her, so she was disappointed.",
    q3Point: "賛成例＝安い服がすぐ捨てられる・ごみが増える／反対例＝流行を楽しむのは自由・古着として回せばよい",
    q4Point: "Yes例＝リラックスして働ける・服代が減る／No例＝お客さんに失礼に見えることもある・毎日選ぶのが大変"
  },
  {
    id: 8,
    title: "ボランティアガイド",
    passageTitle: "Volunteer Guides",
    passage: "The number of foreign tourists visiting Japan has been increasing. Some local people work as volunteer guides and show tourists around their towns. By doing so, they help tourists learn about Japanese culture. The volunteers can also practice foreign languages, so many students are interested in this kind of activity.",
    q1: "According to the passage, how do some local people help tourists learn about Japanese culture?",
    q1Model: "By working as volunteer guides and showing tourists around their towns.",
    firstSentence: "One day, Kenta saw some foreign tourists looking at a map at the station.",
    image: "images/g2card8",
    panels: [
      { time: null, note: "Kenta: “Can I help you?”",
        scene: "駅で地図を見て困っている外国人観光客に、高校生のケンタが声をかけようとしている。" },
      { time: "A few minutes later", note: null,
        scene: "ケンタが観光客をお寺に案内し、みんなで笑顔で写真を撮っている。" },
      { time: "That evening", note: null,
        scene: "塾に遅れて着いたケンタに、先生が時計を指さしている。ケンタは申し訳なさそう。" }
    ],
    q3: "Some people say that Japan should accept more foreign tourists. What do you think about that?",
    q4: "Today, many high school students do volunteer work. Do you think students should do volunteer work during their summer vacation?",
    modelNarration: "One day, Kenta saw some foreign tourists looking at a map at the station. He asked them, “Can I help you?” A few minutes later, he was showing them around a temple, and they were taking pictures together. That evening, however, Kenta arrived late for his cram school. His teacher pointed at the clock, and Kenta felt sorry.",
    q3Point: "賛成例＝経済が活性化する・文化を知ってもらえる／反対例＝混雑やマナーの問題・住民の生活への影響",
    q4Point: "Yes例＝社会の役に立てる・学校では得られない経験／No例＝部活や勉強で忙しい・自由に過ごす時間も必要"
  },
  {
    id: 9,
    title: "高齢者とペット",
    passageTitle: "Pets for Elderly People",
    passage: "Many elderly people live alone, and some of them feel lonely. Living with a pet such as a dog or a cat can make them feel happier. Walking a dog every day is also good exercise, and in this way, pets can help elderly people stay healthy. However, taking care of a pet can be difficult for some elderly people.",
    q1: "According to the passage, how can pets help elderly people stay healthy?",
    q1Model: "By making them walk a dog every day, which is good exercise.",
    firstSentence: "One day, Mr. Kimura and his daughter visited an animal shelter.",
    image: "images/g2card9",
    panels: [
      { time: null, note: null,
        scene: "動物保護施設で、キムラさんと娘が犬たちを見ている。キムラさんは一匹の犬を気に入っている。" },
      { time: "A month later", note: null,
        scene: "キムラさんが公園で犬の散歩をしていて、近所の人と楽しそうに話している。" },
      { time: "One rainy morning", note: null,
        scene: "雨の朝、リードをくわえた犬が散歩に行きたがっているが、キムラさんは腰に手を当てて窓の外の雨を見て困っている。" }
    ],
    q3: "Some people say that more apartments should allow people to keep pets. What do you think about that?",
    q4: "Today, many people post photos of their daily lives on social media. Do you think people share too much information online?",
    modelNarration: "One day, Mr. Kimura and his daughter visited an animal shelter. He liked one of the dogs very much. A month later, he was walking the dog in the park and talking happily with a neighbor. One rainy morning, however, the dog wanted to go for a walk. Mr. Kimura's back hurt, and he did not know what to do.",
    q3Point: "賛成例＝ペットは家族の一員・心の支えになる／反対例＝鳴き声やにおい、アレルギーで住民が困る",
    q4Point: "Yes例＝個人情報が悪用される危険がある／No例＝気をつけて使えば人とつながる便利な道具"
  },
  {
    id: 10,
    title: "無料Wi-Fi",
    passageTitle: "Free Wi-Fi Services",
    passage: "More towns in Japan are offering free Wi-Fi in public places such as parks and stations. With it, visitors can easily look for information about restaurants and events on their smartphones. By providing free Wi-Fi, towns can attract more tourists and help local shops. However, some people worry about the safety of using public Wi-Fi.",
    q1: "According to the passage, how can towns attract more tourists and help local shops?",
    q1Model: "By providing free Wi-Fi in public places such as parks and stations.",
    firstSentence: "One day, Mr. and Mrs. Ono were visiting a small town on vacation.",
    image: "images/g2card10",
    panels: [
      { time: null, note: "Sign: “Free Wi-Fi”",
        scene: "駅で「無料Wi-Fi」の看板を見つけたオノ夫妻が、スマホでレストランを探している。" },
      { time: "An hour later", note: null,
        scene: "人気の地元レストランで、夫婦がおいしそうに料理を食べている。" },
      { time: "Later that afternoon", note: null,
        scene: "スマホの電池が切れてしまい、夫婦が紙の地図を広げて道に迷って困っている。" }
    ],
    q3: "Some people say that children should not use smartphones until they are in high school. What do you think about that?",
    q4: "Today, many people read news on the Internet. Do you think newspapers are still important?",
    modelNarration: "One day, Mr. and Mrs. Ono were visiting a small town on vacation. They found a sign for free Wi-Fi at the station and looked for a restaurant on their smartphone. An hour later, they were enjoying lunch at a popular local restaurant. Later that afternoon, however, their smartphone battery died. They were looking at a paper map because they did not know where they were.",
    q3Point: "賛成例＝勉強や睡眠の時間が減る・ネットのトラブルから守れる／反対例＝連絡や安全のために必要・使い方を学ぶことが大切",
    q4Point: "Yes例＝情報が正確で信頼できる・まとめて読める／No例＝ネットの方が早くて無料・紙の無駄が減る"
  }
];
