
const question = document.getElementById('question');
const choice1 = document.getElementById('choice1');

const btn = document.getElementById('btn');
const result = document.getElementById('result');
const scoreLabel = document.querySelector('#result > p')
const item1 = document.createElement('li');
const item2 = document.createElement('li');
const item3 = document.createElement('li');
const item4 = document.createElement('li');
const close = document.getElementById('close');
const modal = document.getElementById('modal');
const modal2 = document.getElementById('modal2');
const modal3 = document.getElementById('modal3');
const okay = document.getElementById('okay');
let answer = document.getElementById('answer');
const isCorrected = document.getElementById('isCorrected');





const quizSet = [
  {q:`letter`,c:`手紙、文字`},
  {q:`album`,c:`アルバム`},
  {q:`map`,c:`地図`},
  {q:`paper`,c:`紙`},
  {q:`comic`,c:`まんが本`},
  {q:`toy`,c:`おもちゃ`},
  {q:`key`,c:`かぎ`},
  {q:`video`,c:`ビデオ`},
  {q:`oven`,c:`オーブン`},
  {q:`toothbrush`,c:`歯ブラシ`},
  {q:`bath`,c:`入浴`},
  {q:`floor`,c:`階、床`},
  {q:`bathroom`,c:`浴室`},
  {q:`bedroom`,c:`寝室`},
  {q:`college`,c:`大学`},
  {q:`schoolyard`,c:`校庭`},
  {q:`grade`,c:`学年、等級`},
  {q:`course`,c:`進路、コース`},
  {q:`uniform`,c:`制服、ユニフォーム`},
  {q:`question`,c:`質問、問題`},
  {q:`quiz`,c:`小テスト、クイズ`},
  {q:`answer`,c:`答え`},
  {q:`report`,c:`レポート、報告`},
  {q:`contest`,c:`競技会、コンテスト`},
  {q:`speech`,c:`スピーチ`},
  {q:`drama`,c:`劇、演劇`},
  {q:`parent`,c:`親`},
  {q:`grandparent`,c:`祖父、祖母`},
  {q:`cousin`,c:`いとこ`},
  {q:`husband`,c:`夫`},
  {q:`wife`,c:`妻`},
  {q:`child　`,c:`子ども`},
  {q:`children`,c:`子どもたち`},
  {q:`group`,c:`集団、グループ`},
  {q:`member`,c:`一員、会員`},
  {q:`guest`,c:`客`},
  {q:`salesclerk`,c:`店員`},
  {q:`writer`,c:`作家`},
  {q:`artist`,c:`芸術家、画家`},
  {q:`actor`,c:`俳優`},
  {q:`actress`,c:`女優`},
  {q:`waitress`,c:`ウエートレス`},
  {q:`farmer`,c:`農場主`},
  {q:`scientist`,c:`科学者`},
  {q:`dentist`,c:`歯科医`},
  {q:`king`,c:`王`},
  {q:`town`,c:`町`},
  {q:`village`,c:`村`},
  {q:`south`,c:`南`},
  {q:`north`,c:`北`},
  {q:`east`,c:`東`},
  {q:`west`,c:`西`},
  {q:`hometown`,c:`生まれ故郷`},
  {q:`museum`,c:`博物館、美術館`},
  {q:`stadium`,c:`競技場、野球場`},
  {q:`hotel`,c:`ホテル`},
  {q:`hall`,c:`会館、ホール、玄関`},
  {q:`building`,c:`建物、ビル`},
  {q:`company`,c:`会社`},
  {q:`apartment`,c:`アパート`},
  {q:`road`,c:`道路`},
  {q:`corner`,c:`角、曲がり角`},
  {q:`pond`,c:`池`},
  {q:`farm`,c:`農園、農場`},
  {q:`tent`,c:`テント`},
  {q:`mailbox`,c:`郵便受け`},
  {q:`airplane`,c:`飛行機`},
  {q:`boat`,c:`ボート、船`},
  {q:`subway`,c:`地下鉄`},
  {q:`cooking`,c:`料理すること`},
  {q:`dish`,c:`料理、皿`},
  {q:`vegetable`,c:`野菜`},
  {q:`onion`,c:`玉ねぎ`},
  {q:`fruit`,c:`果物`},
  {q:`cherry`,c:`さくらんぼ`},
  {q:`watermelon`,c:`すいか`},
  {q:`beef`,c:`牛肉`},
  {q:`steak`,c:`ステーキ`},
  {q:`chicken`,c:`とり肉、にわとり`},
  {q:`sausage`,c:`ソーセージ`},
  {q:`stew`,c:`シチュー`},
  {q:`toast`,c:`トースト`},
  {q:`noodle`,c:`めん類`},
  {q:`snack`,c:`スナック、軽食`},
  {q:`salt`,c:`塩`},
  {q:`butter`,c:`バター`},
  {q:`sky`,c:`空`},
  {q:`moon`,c:`月`},
  {q:`star`,c:`星`},
  {q:`air`,c:`空気`},
  {q:`lake`,c:`湖`},
  {q:`lion`,c:`ライオン`},
  {q:`zebra`,c:`シマウマ`},
  {q:`horse`,c:`馬`},
  {q:`elephant`,c:`象`},
  {q:`puppy`,c:`子犬`},
  {q:`whale`,c:`クジラ`},
  {q:`dolphin`,c:`イルカ`},
  {q:`tulip`,c:`チューリップ`},
  {q:`sound`,c:`音`},
  {q:`musical`,c:`ミュージカル`},
  {q:`musician`,c:`音楽家`},
  {q:`instrument`,c:`楽器`},
  {q:`trumpet`,c:`トランペット`},
  {q:`clarinet`,c:`クラリネット`},
  {q:`golf`,c:`ゴルフ`},
  {q:`ice skating`,c:`アイススケート`},
  {q:`hockey`,c:`アイスホッケー`},
  {q:`cycling`,c:`サイクリング`},
  {q:`jogging`,c:`ジョギング`},
  {q:`clothes`,c:`衣服`},
  {q:`dress`,c:`ドレス、服装`},
  {q:`costume`,c:`衣装、服装`},
  {q:`sweater`,c:`セーター`},
  {q:`shirt`,c:`シャツ`},
  {q:`tie`,c:`ネクタイ`},
  {q:`socks`,c:`くつ下`},
  {q:`umbrella`,c:`雨がさ`},
  {q:`hobby`,c:`趣味`},
  {q:`travel`,c:`旅行`},
  {q:`trip`,c:`小旅行`},
  {q:`camp`,c:`キャンプ`},
  {q:`camping`,c:`キャンプすること`},
  {q:`picnic`,c:`ピクニック`},
  {q:`camera`,c:`カメラ`},
  {q:`painting`,c:`絵、絵画`},
  {q:`fishing`,c:`釣り`},
  {q:`festival`,c:`祭り`},
  {q:`parade`,c:`パレード`},
  {q:`holiday`,c:`休日、祝日`},
  {q:`vacation`,c:`休み、休暇`},
  {q:`program`,c:`番組、計画`},
  {q:`gift`,c:`贈り物`},
  {q:`world`,c:`世界`},
  {q:`America`,c:`アメリカ`},
  {q:`New York`,c:`ニューヨーク`},
  {q:`Hawaii`,c:`ハワイ`},
  {q:`Chicago`,c:`シカゴ`},
  {q:`Italy`,c:`イタリア`},
  {q:`Spain`,c:`スペイン`},
  {q:`Thailand`,c:`タイ`},
  {q:`London`,c:`ロンドン`},
  {q:`Paris`,c:`パリ`},
  {q:`problem`,c:`問題`},
  {q:`kind`,c:`種類`},
  {q:`way`,c:`道、方法`},
  {q:`action`,c:`行動`},
  {q:`fun`,c:`楽しみ`},
  {q:`future`,c:`将来、未来`},
  {q:`dream`,c:`夢`},
  {q:`luck`,c:`運、幸運`},
  {q:`care`,c:`注意、世話`},
  {q:`life`,c:`生活、生命`},
  {q:`information`,c:`情報`},
  {q:`example`,c:`例`},
  {q:`plan`,c:`計画`},
  {q:`part`,c:`部分、役割`},
  {q:`size`,c:`大きさ、寸法`},
  {q:`end`,c:`終わり`},
  {q:`thing`,c:`物、事`},
  {q:`money`,c:`お金`},
  {q:`price`,c:`値段、価格`},
  {q:`sale`,c:`販売、特売`},
  {q:`card`,c:`カード、はがき`},
  {q:`stamp`,c:`切手`},
  {q:`passport`,c:`パスポート`},
  {q:`seat`,c:`座席`},
  {q:`meeting`,c:`会合`},
  {q:`seat`,c:`座席`},
  {q:`word`,c:`語、単語`},
  {q:`language`,c:`言語`},
  {q:`title`,c:`タイトル`},
  {q:`haircut`,c:`散髪`},
  {q:`hairstyle`,c:`髪型`},
  {q:`top`,c:`頂上、首位`},
  {q:`step`,c:`一歩`},
  {q:`front`,c:`正面`},
  {q:`center`,c:`中心、中央`},
  {q:`line`,c:`線、行、路線`},
  {q:`half`,c:`半分`},
  {q:`face`,c:`顔`},
  {q:`moment`,c:`ちょっとの間`},

]
const WrongAns = [
  `手紙、文字`,
`アルバム`,
`地図`,
`紙`,
`まんが本`,
`おもちゃ`,
`かぎ`,
`ビデオ`,
`オーブン`,
`歯ブラシ`,
`入浴`,
`階、床`,
`浴室`,
`寝室`,
`大学`,
`校庭`,
`学年、等級`,
`進路、コース`,
`制服、ユニフォーム`,
`質問、問題`,
`小テスト、クイズ`,
`答え`,
`レポート、報告`,
`競技会、コンテスト`,
`スピーチ`,
`劇、演劇`,
`親`,
`祖父、祖母`,
`いとこ`,
`夫`,
`妻`,
`子ども`,
`子どもたち`,
`集団、グループ`,
`一員、会員`,
`客`,
`店員`,
`作家`,
`芸術家、画家`,
`俳優`,
`女優`,
`ウエートレス`,
`農場主`,
`科学者`,
`歯科医`,
`王`,
`町`,
`村`,
`南`,
`北`,
`東`,
`西`,
`生まれ故郷`,
`博物館、美術館`,
`競技場、野球場`,
`ホテル`,
`会館、ホール、玄関`,
`建物、ビル`,
`会社`,
`アパート`,
`道路`,
`角、曲がり角`,
`池`,
`農園、農場`,
`テント`,
`郵便受け`,
`飛行機`,
`ボート、船`,
`地下鉄`,
`料理すること`,
`料理、皿`,
`野菜`,
`玉ねぎ`,
`果物`,
`さくらんぼ`,
`すいか`,
`牛肉`,
`ステーキ`,
`とり肉、にわとり`,
`ソーセージ`,
`シチュー`,
`トースト`,
`めん類`,
`スナック、軽食`,
`塩`,
`バター`,
`空`,
`月`,
`星`,
`空気`,
`湖`,
`ライオン`,
`シマウマ`,
`馬`,
`象`,
`子犬`,
`クジラ`,
`イルカ`,
`チューリップ`,
`音`,
`ミュージカル`,
`音楽家`,
`楽器`,
`トランペット`,
`クラリネット`,
`ゴルフ`,
`アイススケート`,
`アイスホッケー`,
`サイクリング`,
`ジョギング`,
`衣服`,
`ドレス、服装`,
`衣装、服装`,
`セーター`,
`シャツ`,
`ネクタイ`,
`くつ下`,
`雨がさ`,
`趣味`,
`旅行`,
`小旅行`,
`キャンプ`,
`キャンプすること`,
`ピクニック`,
`カメラ`,
`絵、絵画`,
`釣り`,
`祭り`,
`パレード`,
`休日、祝日`,
`休み、休暇`,
`番組、計画`,
`贈り物`,
`世界`,
`アメリカ`,
`ニューヨーク`,
`ハワイ`,
`シカゴ`,
`イタリア`,
`スペイン`,
`タイ`,
`ロンドン`,
`パリ`,
`問題`,
`種類`,
`道、方法`,
`行動`,
`楽しみ`,
`将来、未来`,
`夢`,
`運、幸運`,
`注意、世話`,
`生活、生命`,
`情報`,
`例`,
`計画`,
`部分、役割`,
`大きさ、寸法`,
`終わり`,
`物、事`,
`お金`,
`値段、価格`,
`販売、特売`,
`カード、はがき`,
`切手`,
`パスポート`,
`座席`,
`会合`,
`座席`,
`語、単語`,
`言語`,
`タイトル`,
`散髪`,
`髪型`,
`頂上、首位`,
`一歩`,
`正面`,
`中心、中央`,
`線、行、路線`,
`半分`,
`顔`,
`ちょっとの間`,

]
const QuizVerb = [
  {q:`live`,c:`住む`},
  {q:`stay`,c:`滞在する、泊まる`},
  {q:`move`,c:`動かす、動く`},
  {q:`turn`,c:`回す、向きを変える`},
  {q:`hurry`,c:`急ぐ`},
  {q:`arrive`,c:`着く、到着する`},
  {q:`reach`,c:`届く`},
  {q:`plant`,c:`植える`},
  {q:`carry`,c:`運ぶ`},
  {q:`remember`,c:`思い出す、覚えている`},
  {q:`record`,c:`記録する`},
  {q:`check`,c:`点検する`},
  {q:`call`,c:`呼ぶ、電話する`},
  {q:`ring`,c:`（ベルが）鳴る`},
  {q:`ask`,c:`たずねる`},
  {q:`answer`,c:`答える`},
  {q:`hope`,c:`望む`},
  {q:`thank`,c:`感謝する`},
  {q:`worry`,c:`心配させる`},
  {q:`change`,c:`変わる`},
  {q:`finish`,c:`終える`},
  {q:`drop`,c:`落とす`},
  {q:`wake`,c:`目が覚める`},
  {q:`brush`,c:`みがく`},
  {q:`live`,c:`住む`},
  {q:`stay`,c:`滞在する、泊まる`},
  {q:`move`,c:`動かす、動く`},
  {q:`turn`,c:`回す、向きを変える`},
  {q:`hurry`,c:`急ぐ`},
]
const WrongVerb =
[
`住む`,`滞在する`,`泊まる`,
`動かす、動く`,
`回す、向きを変える`,
`急ぐ`,
`着く、到着する`,
`届く`,
`植える`,
`運ぶ`,
`思い出す、覚えている`,
`記録する`,
`点検する`,
`呼ぶ、電話する`,
`（ベルが）鳴る`,
`たずねる`,
`答える`,
`望む`,
`感謝する`,
`心配させる`,
`変わる`,
`終える`,
`落とす`,
`目が覚める`,
`みがく`,
`動く`,
`助ける`,
`買う`,
`去る，出て行く`,
`会う`,
`住む`,
`働く`,
`行く`,
`知っている`,
`勉強する`,
`食べる`,
`学ぶ`,
`立つ`,
`踊る`,
`売る`,
`到着する`,
`得る`,
`置く`,
`滞在する`,
`試す`,
`与える`,
`訪問する`,
`必要とする`,
`住む`,`滞在する`,`泊まる`,
`動かす、動く`,
`回す、向きを変える`,
`急ぐ`,
`着く、到着する`,


]
const QuizElse =[
  {q:`one`,c:`もの、１つ`},
  {q:`something`,c:`何か`},
  {q:`anything`,c:`何か、何でも`},
  {q:`everything`,c:`何もかも`},
  {q:`everyone`,c:`誰でも、みんな`},
  {q:`another`,c:`もう１つ、別のもの`},
  {q:`for`,c:`～に向かって、～の間`},
  {q:`like`,c:`～のような[に]`},
  {q:`by `,c:`～によって、～までに`},
  {q:`over `,c:`～の上に、を越えて`},
  {q:`around `,c:`～の周りに`},
  {q:`across `,c:`～を横切って`},
  {q:`among `,c:`（3つ以上のもの）の間に`},
  {q:`until `,c:`～まで（ずっと）`},
  {q:`because`,c:`なぜならば、～ので`},
  {q:`can`,c:`～することができる`},
  {q:`could`,c:`～することができた`},
  {q:`will`,c:`～するつもり、～だろう`},
  {q:`may`,c:`～してもよい、～かもしれない`},
  {q:`must`,c:`～しなければならない`},
  {q:`should`,c:`～すべきだ`},
  {q:`open`,c:`開いた`},
  {q:`welcome`,c:`歓迎される`},
  {q:`dear`,c:`親愛なる`},
  {q:`special`,c:`特別な`},
  {q:`close`,c:`ごく近い、親密な`},
  {q:`delicious`,c:`おいしい`},
  {q:`both`,c:`両方の`},
  {q:`strange`,c:`見知らぬ、奇妙な`},
  {q:`professional`,c:`プロの`},
  {q:`dirty`,c:`汚い`},
  {q:`social`,c:`社会の`},
  {q:`expensive`,c:`高価な`},
  {q:`lucky`,c:`幸運な`},
  {q:`quick`,c:`すばやい`},
  {q:`safe`,c:`安全な、無事な`},
  {q:`simple`,c:`単純な、簡単な`},
  {q:`usual`,c:`いつもの、ふつうの`},
  {q:`so`,c:`とても`},
  {q:`easily`,c:`簡単に`},
  {q:`tonight`,c:`今夜は`},
  {q:`outside`,c:`外（側）に`},
  {q:`someday`,c:`いつか、そのうちに`},
  {q:`sometime`,c:`いつか、そのうちに`},
  {q:`one`,c:`もの、１つ`},
  {q:`something`,c:`何か`},
  {q:`anything`,c:`何か、何でも`},
  {q:`everything`,c:`何もかも`},
  {q:`everyone`,c:`誰でも、みんな`},
  {q:`one`,c:`もの、１つ`},

]
const WrongElse =[
  `もの、１つ`,
`何か`,
`何か、何でも`,
`何もかも`,
`誰でも、みんな`,
`もう１つ、別のもの`,
`～に向かって、～の間`,
`～のような[に]`,
`～によって、～までに`,
`～の上に、を越えて`,
`～の周りに`,
`～を横切って`,
`（3つ以上のもの）の間に`,
`～まで（ずっと）`,
`なぜならば、～ので`,
`～することができる`,
`～することができた`,
`～するつもり、～だろう`,
`～してもよい、～かもしれない`,
`～しなければならない`,
`～すべきだ`,
`開いた`,
`歓迎される`,
`親愛なる`,
`特別な`,
`ごく近い、親密な`,
`おいしい`,
`両方の`,
`見知らぬ、奇妙な`,
`プロの`,
`汚い`,
`社会の`,
`高価な`,
`幸運な`,
`すばやい`,
`安全な、無事な`,
`単純な、簡単な`,
`いつもの、ふつうの`,
`とても`,
`簡単に`,
`今夜は`,
`外（側）に`,
`いつか、そのうちに`,
`いつか、そのうちに`,
`悲しい`,
`ほんとうの`,
`高い`,
`遅い`,
`よい`,
`病気で(の)`,
`時々`,
`しばしば`,
`早く`,
`いつも`,
`再び`,
`ふつう`,
`すぐに`,
`暗い`,
`非常に`,
`次の`,
`~もまた，~すぎる`,
`多量の`,
`毎~`,
`多くの`,
`そんなに`,
`ゆっくりと`,
`よく，じょうずに`,
`一緒に`,
`もまた`,
`~でない`,
`もの、１つ`,
`何か`,
`何か、何でも`,
`何もかも`,
`誰でも、みんな`,
`もの、１つ`,
]
const QuizIdiom =[
  {q:`a couple of times`,c:`2～3回`},
{q:`a cup of coffee`,c:`1杯のコーヒー`},
{q:`a pair of`,c:`ひと組の～`},
{q:`a week`,c:`１週間につき`},
{q:`absent from`,c:`～を欠席して`},
{q:`all day`,c:`１日中`},
{q:`all over the world`,c:`世界じゅう`},
{q:`as old as`,c:`～と同じくらい古い`},
{q:`at once`,c:`すぐに`},
{q:`at the same time`,c:`同時に`},
{q:`beauty salon`,c:`美容院`},
{q:`bus stop`,c:`バス停`},
{q:`City Hall`,c:`市役所`},
{q:`colored pencil`,c:`色えんぴつ`},
{q:`convenience store`,c:`コンビニ`},
{q:`cut off`,c:`～を切り落とす、～を切り取る`},
{q:`department store`,c:`デパート`},
{q:`do the dishes`,c:`皿洗いをする`},
{q:`do well`,c:`うまくやる`},
{q:`elementary school`,c:`小学校`},
{q:`far away`,c:`遠く離れて、遠くに`},
{q:`field trip`,c:`遠足`},
{q:`final game`,c:`決勝戦`},
{q:`fire fighter`,c:`消防士`},
{q:`flea market`,c:`フリーマーケット`},
{q:`host family`,c:`ホストファミリー`},
{q:`host father`,c:`ホストファーザー`},
{q:`host mother`,c:`ホストマザー`},
{q:`hot chocolate`,c:`ホットチョコレート`},
{q:`how long`,c:`どのくらいの時間`},
{q:`how many hours`,c:`何時間`},
{q:`hurry up`,c:`急ぐ`},
{q:`I'd love to`,c:`喜んで～する`},
{q:`I'm afraid`,c:`残念ながら～`},
{q:`in the world`,c:`世界で`},
{q:`in time`,c:`時間内に`},
{q:`know that`,c:`～ということを知る`},
{q:`last night`,c:`昨夜`},
{q:`last year`,c:`去年`},
{q:`late for`,c:`～に遅刻して`},
{q:`leave for`,c:`～に向かって出発する`},
{q:`leave home`,c:`家を出発する`},
{q:`like to`,c:`～するのが好き`},
{q:`look forward to`,c:`～を楽しみに待つ`},
{q:`make friends with`,c:`～と友達になる`},
{q:`meeting place`,c:`待ち合わせ場所`},
{q:`meeting time`,c:`待ち合わせ時間`},
{q:`miss the train`,c:`電車に乗り遅れる`},
{q:`next time`,c:`次回`},
{q:`next week`,c:`来週`},
{q:`third floor`,c:`3階`},
{q:`this month`,c:`今月`},
{q:`this morning`,c:`今朝`},
{q:`to do`,c:`やるべき～`},
{q:`to drink`,c:`飲むための`},
{q:`to eat`,c:`食べるための`},
{q:`to go to`,c:`～へ行くために`},
{q:`to read`,c:`読むための`},
{q:`to see`,c:`～を見るために`},
{q:`too much`,c:`あまりにもたくさん`},
{q:`turn left`,c:`左へ曲がる`},
{q:`turn right`,c:`右へ曲がる`},
{q:`turn off`,c:`～を消す`},
{q:`turn on`,c:`～をつける`},
{q:`very well`,c:`とても上手に`},
{q:`video game`,c:`テレビゲーム`},
{q:`want to`,c:`～したい`},
{q:`wake up`,c:`目が覚める`},
{q:`water the flowers`,c:`花に水をやる`},
{q:`why don't you`,c:`～したらどうですか`},
{q:`win a prize`,c:`賞をとる`},
{q:`worry about `,c:`～のことを心配する`},
{q:`write back to`,c:`～に返事を書く`},
{q:`write to`,c:`～に手紙を書く`},
{q:`write with`,c:`～を使って書く`},
{q:`play the piano`,c:`ピアノをひく`},
{q:`by bus`,c:`バスで`},
{q:`after school`,c:`放課後`},
{q:`play soccer`,c:`サッカーをする`},
{q:`No. It's mine.`,c:`いいえ。ぼくのです。`},
{q:`Look at the sky.`,c:`空をみて！`},
{q:`a lot of cameras`,c:`たくさんのカメラ`},
{q:`March 2nd`,c:`３月２日`},
{q:`watch TV`,c:`テレビを見る`},
{q:`go to bed`,c:`寝る`},
{q:`on the table`,c:`テーブルの上`},
{q:`go shopping`,c:`買い物に行く`},
{q:`Don't eat lunch now.`,c:`いま 昼食を食べてはだめ。`},
{q:`Welcome to our school.`,c:`ようこそ私たちの学校へ。`},
{q:`It's time for bed, Tom.`,c:`トム、寝る時間ですよ。`},
{q:`He's from Australia.`,c:`かれはｵｰｽﾄﾗﾘｱ出身です。`},
{q:`for breakfast`,c:`朝食に`},
{q:`a member of the soccer club`,c:`サッカークラブの一員`},
{q:`a kind of fish`,c:`魚の一種`},
{q:`an interesting book`,c:`おもしろい本`},
{q:`first of all`,c:`まず第一に`},
{q:`Welcome to our new house.`,c:`わたしたちの新しい家へようこそ。`},
{q:`for example`,c:`たとえば`},
{q:`That's all for now.`,c:`これでおしまい。`},
{q:`Here it is.`,c:`はい、これどうぞ。`},
]
const WrongIdiom =[
  `2～3回`,
  `1杯のコーヒー`,
  `ひと組の～`,
  `１週間につき`,
  `～を欠席して`,
  `１日中`,
  `世界じゅう`,
  `～と同じくらい古い`,
  `すぐに`,
  `同時に`,
  `美容院`,
  `バス停`,
  `市役所`,
  `色えんぴつ`,
  `コンビニ`,
  `～を切り落とす、～を切り取る`,
  `デパート`,
  `皿洗いをする`,
  `うまくやる`,
  `小学校`,
  `遠く離れて、遠くに`,
  `遠足`,
  `決勝戦`,
  `消防士`,
  `フリーマーケット`,
  `ホストファミリー`,
  `ホストファーザー`,
  `ホストマザー`,
  `ホットチョコレート`,
  `どのくらいの時間`,
  `何時間`,
  `急ぐ`,
  `喜んで～する`,
  `残念ながら～`,
  `世界で`,
  `時間内に`,
  `～ということを知る`,
  `昨夜`,
  `去年`,
  `～に遅刻して`,
  `～に向かって出発する`,
  `家を出発する`,
  `～するのが好き`,
  `～を楽しみに待つ`,
  `～と友達になる`,
  `待ち合わせ場所`,
  `待ち合わせ時間`,
  `電車に乗り遅れる`,
  `次回`,
  `来週`,
  `3階`,
  `今月`,
  `今朝`,
  `やるべき～`,
  `飲むための`,
  `食べるための`,
  `～へ行くために`,
  `読むための`,
  `～を見るために`,
  `あまりにもたくさん`,
  `左へ曲がる`,
  `右へ曲がる`,
  `～を消す`,
  `～をつける`,
  `とても上手に`,
  `テレビゲーム`,
  `～したい`,
  `目が覚める`,
  `花に水をやる`,
  `～したらどうですか`,
  `賞をとる`,
  `～のことを心配する`,
  `～に返事を書く`,
  `～に手紙を書く`,
  `～を使って書く`,
  `ピアノをひく`,
  `バスで`,
  `放課後`,
  `サッカーをする`,
  `いいえ。ぼくのです。`,
  `空をみて！`,
  `たくさんのカメラ`,
  `３月２日`,
  `テレビを見る`,
  `寝る`,
  `テーブルの上`,
  `買い物に行く`,
  `いま 昼食を食べてはだめ。`,
  `ようこそ私たちの学校へ。`,
  `トム、寝る時間ですよ。`,
  `かれはｵｰｽﾄﾗﾘｱ出身です。`,
  `朝食に`,
  `サッカークラブの一員`,
  `魚の一種`,
  `おもしろい本`,
  `まず第一に`,
  `わたしたちの新しい家へようこそ。`,
  `たとえば`,
  `これでおしまい。`,
  `はい、これどうぞ。`,

]
const QuizExpress =[
  {q:`know a lot`,c:`よく知っている`},
  {q:`a lot of books`,c:`たくさんの本`},
  {q:`after school`,c:`放課後`},
  {q:`at home`,c:`家で`},
  {q:`a glass of milk`,c:`コップ一杯のミルク`},
  {q:`a cup of tea`,c:`一杯のお茶`},
  {q:`a few years`,c:`数年`},
  {q:`a kind of fish`,c:`魚の一種`},
  {q:`speak English a little`,c:`英語を少し話す`},
  {q:`That's all for now.`,c:`これでおしまい。`},
  {q:`a great many people`,c:`かなり多くの人々`},
  {q:`a long time ago`,c:`遠いむかし`},
  {q:`a part of the United States`,c:`アメリカ合衆国の一部`},
  {q:`a piece of meat`,c:`肉一切れ`},
  {q:`all the way`,c:`はるばる、ずっと、初めから終わりまで`},
  {q:`arrive at`,c:`～に着く`},
  {q:`I can run fast as fast as Tom.`,c:`私とトムは同じくらい早く走れる。`},
  {q:`as soon as he got the letter`,c:`手紙を受け取るとすぐに`},
  {q:`asked for his help`,c:`彼の助けを求めた`},
  {q:`at first`,c:`最初 初めのうちは`},
  {q:`at last`,c:`とうとう、ついに`},
  {q:`Kumi is able to sing.`,c:`久美は上手に歌うことができます。`},
  {q:`Kyoto is famous for its old temples.`,c:`京都は古いお寺で有名である。`},
  {q:`The streets were full of cars.`,c:`通りは車でいっぱいでした。`},
  {q:`I'm going to visit Kyoto.`,c:`私は京都を訪れるつもりです。`},
  {q:`The American went away.`,c:`そのアメリカ人はたちさりました。`},
  {q:`He didn't give up the plan.`,c:`彼はその計画をあきらめませんでした。`},
  {q:`He went to sleep.`,c:`彼は眠ってしまいました。`},
  {q:`Let's go swimming in the river.`,c:`川へ泳ぎにいきましょう。`},
  {q:`I went up to the police officer.`,c:`警官のところへ近づいていきました。`},
  {q:`I grew up in Tokyo.`,c:`東京で育ちました。`},
  {q:`We had a good time in Hokkaido.`,c:`北海道で楽しく過ごしました。`},
  {q:`I have to go shopping in the evening.`,c:`夕方に買い物に行かなければなりません。`},
  {q:`help him with his homework`,c:`彼の宿題を手伝う`},
  {q:`How about you?`,c:`あなたはどうですか。`},
  {q:`I see.`,c:`わかりました。`},
  {q:`My father will be back in a few days.`,c:`父は2,3日したら帰ってきます。`},
  {q:`A car stopped in front of my house.`,c:`1台の車が私の家の前に止まりました。`},
  {q:`In the end he got a gold medal.`,c:`ついに彼は金メダルを取りました。`},
  {q:`What do you want to be in the future?`,c:`将来、何になりたいの。`},
  {q:`In those days there were no planes.`,c:`その当時は飛行機はありませんでした。`},
  {q:`These days many people use a computer.`,c:`近頃多くの人がコンピューターを使います。`},
  {q:`Let me see….`,c:`ええと。そうですね。`},
  {q:`Look at that car.`,c:`あの車をごらんなさい。`},
  {q:`What are you looking for ?`,c:`何をさがしているのですか。`},
  {q:`You must not look in my house.`,c:`わたしの部屋をのぞいてはいけません。`},
  {q:`It looks like a cat.`,c:`それは猫のように見えます。`},
  {q:`Math became more and more difficult.`,c:`数学はますます難しくなりました。`},
  {q:`There are more than 600 students.`,c:`私たちの学校には600人以上の生徒がいます。`},
  {q:`No one could answer the question.`,c:`だれもその質問に答えることができませんでした。`},
  {q:`push a button`,c:`ボタンをおす`},
  {q:`ring a bell`,c:`ベルを鳴らす`},
  {q:`dig a hole`,c:`穴をほる`},
  {q:`break glass`,c:`ガラスを割る`},
  {q:`spend money`,c:`お金をつかう`},
  {q:`win a prize`,c:`賞をとる`},
  {q:`buy a ticket`,c:`きっぷを買う`},
  {q:`hold a meeting`,c:`会を開く`},
  {q:`tell a story`,c:`物語を話す`},
  {q:`catch a fish`,c:`魚を捕まえる`},
  {q:`call her name`,c:`彼女の名前を呼ぶ`},
  {q:`save his life`,c:`彼の命を救う`},
  {q:`a tall tree`,c:`高い木`},
  {q:`a beautiful flower`,c:`美しい花`},
  {q:`a big rock`,c:`大きな岩`},
  {q:`a small island`,c:`小さな島`},
  {q:`cross a road`,c:`道路をわたる`},
  {q:`turn a corner`,c:`角を曲がる`},
  {q:`throw a stone`,c:`石を投げる`},
  {q:`fall to the ground`,c:`地面にたおれる`},
  {q:`fish in a lake`,c:`湖でつりをする`},
  {q:`swim across a river`,c:`川を泳いでわたる`},
  {q:`camp in a forest.`,c:`森でキャンプをする`},
  {q:`lie on the beach`,c:`浜にねころぶ`},
  {q:`an important thing`,c:`重要なこと`},
  {q:`know a lot`,c:`よく知っている`},
  {q:`a lot of books`,c:`たくさんの本`},
  {q:`after school`,c:`放課後`},
  {q:`at home`,c:`家で`},
  {q:`a glass of milk`,c:`コップ一杯のミルク`},
  {q:`a cup of tea`,c:`一杯のお茶`},
]
const WrongExpress =[
  `よく知っている`,
`たくさんの本`,
`放課後`,
`家で`,
`コップ一杯のミルク`,
`一杯のお茶`,
`数年`,
`魚の一種`,
`英語を少し話す`,
`これでおしまい。`,
`かなり多くの人々`,
`遠いむかし`,
`アメリカ合衆国の一部`,
`肉一切れ`,
`はるばる、ずっと、初めから終わりまで`,
`～に着く`,
`私とトムは同じくらい早く走れる。`,
`手紙を受け取るとすぐに`,
`彼の助けを求めた`,
`最初 初めのうちは`,
`とうとう、ついに`,
`久美は上手に歌うことができます。`,
`京都は古いお寺で有名である。`,
`通りは車でいっぱいでした。`,
`私は京都を訪れるつもりです。`,
`そのアメリカ人はたちさりました。`,
`彼はその計画をあきらめませんでした。`,
`彼は眠ってしまいました。`,
`川へ泳ぎにいきましょう。`,
`警官のところへ近づいていきました。`,
`東京で育ちました。`,
`北海道で楽しく過ごしました。`,
`夕方に買い物に行かなければなりません。`,
`彼の宿題を手伝う`,
`あなたはどうですか。`,
`わかりました。`,
`父は2,3日したら帰ってきます。`,
`1台の車が私の家の前に止まりました。`,
`ついに彼は金メダルを取りました。`,
`将来、何になりたいの。`,
`その当時は飛行機はありませんでした。`,
`近頃多くの人がコンピューターを使います。`,
`ええと。そうですね。`,
`あの車をごらんなさい。`,
`何をさがしているのですか。`,
`わたしの部屋をのぞいてはいけません。`,
`それは猫のように見えます。`,
`数学はますます難しくなりました。`,
`私たちの学校には600人以上の生徒がいます。`,
`だれもその質問に答えることができませんでした。`,
`ボタンをおす`,
`ベルを鳴らす`,
`穴をほる`,
`ガラスを割る`,
`お金をつかう`,
`賞をとる`,
`きっぷを買う`,
`会を開く`,
`物語を話す`,
`魚を捕まえる`,
`彼女の名前を呼ぶ`,
`彼の命を救う`,
`高い木`,
`美しい花`,
`大きな岩`,
`小さな島`,
`道路をわたる`,
`角を曲がる`,
`石を投げる`,
`地面にたおれる`,
`湖でつりをする`,
`川を泳いでわたる`,
`森でキャンプをする`,
`浜にねころぶ`,
`重要なこと`,
`よく知っている`,
`たくさんの本`,
`放課後`,
`家で`,
`コップ一杯のミルク`,
`一杯のお茶`,
]

function butotnClick(){location.reload();}
let button = document.getElementById('reset');
button.onclick = butotnClick;


let form = document.forms[0];
let selectbox = form.selectbox;

selectbox.addEventListener('change', ()=> {
}, false);


let a = 0;
let max = 100;
let e = 0;let f = 0;let g = 0;
let h = 0;

selectbox.onchange = function(){

if(selectbox.value === "1-10"){
  function Change() { [a, h, e,f,g,max] = [0, 8, 10,10,10,120];}
  Change();Quizset();
}
else if(selectbox.value === "11-20"){
  function Change() { [a, h, e,f,g,max] = [10, 18, 20,20,20,130];}
  Change();Quizset();
  }
 else if(selectbox.value === "21-30"){    
    function Change() { [a, h, e,f,g,max] = [20, 28, 30,30,30,140];}
    Change();Quizset();
    }
   else if(selectbox.value === "31-40"){
    function Change() { [a, h, e,f,g,max] = [30, 38, 40,40,40,140];}
    Change();Quizset();    
      }
    
else if(selectbox.value === "41-50"){
        function Change() { [a, h, e,f,g,max] = [40, 48, 50,50,50,180];}
        Change();Quizset();    
          }
      
  else if(selectbox.value === "51-60"){
             function Change() { [a, h, e,f,g,max] = [50, 58, 60,60,60,180];}
             Change();Quizset();    
               }
 else if(selectbox.value === "61-70"){
              function Change() { [a, h, e,f,g,max] = [60, 68, 70,70,70,180];}
              Change();Quizset();    
                }
else if(selectbox.value === "71-80"){     
                function Change() { [a, h, e,f,g,max] = [70, 78, 80,80,80,180];}
                Change();Quizset();    
                  }
else if(selectbox.value === "81-90"){
        function Change() { [a, h, e,f,g,max] = [80, 88, 0,0,0,70];}
        Change();Quizset();    
          }
else if(selectbox.value === "91-100"){
         function Change() { [a, h, e,f,g,max] = [90, 98, 0,0,0,80];}
         Change();Quizset();    
      }
 else if(selectbox.value === "101-110"){
             function Change() { [a, h, e,f,g,max] = [100, 108, 0,0,0,90];}
             Change();Quizset();    
               }                      
else if(selectbox.value === "111-120"){
           function Change() { [a, h, e,f,g,max] = [110, 118, 0,0,0,100];}
           Change();Quizset();    
             }                    
else if(selectbox.value === "121-130"){
               function Change() { [a, h, e,f,g,max] = [120, 128, 0,0,0,110];}
               Change();Quizset();    
                 }
else if(selectbox.value === "131-140"){
              function Change() { [a, h, e,f,g,max] = [130, 138, 0,0,0,120];}
              Change();Quizset();    
                }         
else if(selectbox.value === "141-150"){
                   function Change() { [a, h, e,f,g,max] = [140, 148, 0,0,0,130];}
                   Change();Quizset();    
                     }
else if(selectbox.value === "151-160"){
                   function Change() { [a, h, e,f,g,max] = [150, 158, 0,0,0,140];}
                   Change();Quizset();    
                     }
else if(selectbox.value === "161-170"){
                   function Change() { [a, h, e,f,g,max] = [160, 168, 0,0,0,150];}
                   Change();Quizset();    
                     }
else if(selectbox.value === "171-180"){
                   function Change() { [a, h, e,f,g,max] = [170, 178, 0,0,0,160];}
                   Change();Quizset();    
                     }
  else{

    location.reload();
  }
  function Quizset () {
    choice1.removeEventListener('click',event);
    const b = Math.floor(Math.random() * (max - e)) + e ;
    let c = Math.floor(Math.random() * (max - f)) + f ;
    let d = Math.floor(Math.random() * (max - g)) + g ;
    
  Qnum.textContent = `No.${a + 1}`;
  question.textContent = quizSet[a].q;
  
  var speak   = new SpeechSynthesisUtterance();
  speak.text  = question.textContent;
  speak.rate  = 0.7; // 読み上げ速度 0.1-10 初期値:1 (倍速なら2, 半分の倍速なら0.5, )
  speak.pitch = 1;// 声の高さ 0-2 初期値:1(0で女性の声) 
  speak.lang  = 'en-US'; //(日本語:ja-JP, アメリカ英語:en-US, イギリス英語:en-GB, 中国語:zh-CN, 韓国語:ko-KR)
  
  speechSynthesis.speak(speak);
  
  
  
  while(choice1.firstChild){
  choice1.removeChild(choice1.firstChild);
  }
  
  item1.textContent = quizSet[a].c;
  const ul1 = document.querySelector('ul');
    ul1.appendChild(item1);
  
    item2.textContent = WrongAns[b];
    const ul = document.querySelector('ul');
      ul.appendChild(item2);
  
    item3.textContent = WrongAns[c];
    const ul2 = document.querySelector('ul');
      ul.appendChild(item3);
    
     item4.textContent = WrongAns[d];
     const ul3 = document.querySelector('ul');
       ul.appendChild(item4);
  
  
       function shuffle() {
  
        const x = Math.floor(Math.random() * 4 + 1) ;
        //console.log(x);
        
        if(x == 1){ 
          ul.insertBefore(item3,item1);
          ul.insertBefore(item2,item1);
          ul.insertBefore(item4,item1);
      
        }else if(x == 2){
          ul.insertBefore(item1,item4);
          ul.insertBefore(item2,item1);
        }else if(x == 3){
          ul.insertBefore(item1,item3);
          ul.insertBefore(item2,item1);
        }
        else{
          ul.insertBefore(item4,item2);
        }
      }
      
      shuffle();
  
      function checkAnswer(){
          
        let event = function(e){
          let t = e.target;
  
  
          if(t == item1){
          //正解の場合
  
          modal3.classList.remove('hidden');
          isCorrected.textContent = `正解！`;  
  
          setTimeout(()=>{
            modal3.classList.add('hidden');
  
            choice1.removeEventListener('click',event);
  
            //合格の場合
            if(a > h){
  
  
              var Finish   = new SpeechSynthesisUtterance();
              Finish.text  = 'Great!!Good job!!';
              Finish.rate  = 1; // 読み上げ速度 0.1-10 初期値:1 (倍速なら2, 半分の倍速なら0.5, )
              Finish.pitch = 1;// 声の高さ 0-2 初期値:1(0で女性の声) 
              Finish.lang  = 'en-US'; //(日本語:ja-JP, アメリカ英語:en-US, イギリス英語:en-GB, 中国語:zh-CN, 韓国語:ko-KR)
              speechSynthesis.speak(Finish);
    
              modal.classList.remove('hidden');
               //alert(`合格!!`)
                
                close.addEventListener('click',()=>{
                  location.reload();
              })
  
            }else{
                //次の問題へ
              a++;
              Quizset();
            }
          },500);
      
        }else{
          
            //間違った場合
  
          modal2.classList.remove('hidden');
          
          answer.textContent = ` 
          "${question.textContent}" は「${item1.textContent}」です。やり直し！`;
  
          var OMT   = new SpeechSynthesisUtterance();
          OMT.text  = 'one more time';
          OMT.rate  = 1; // 読み上げ速度 0.1-10 初期値:1 (倍速なら2, 半分の倍速なら0.5, )
          OMT.pitch = 1;// 声の高さ 0-2 初期値:1(0で女性の声) 
          OMT.lang  = 'en-US'; //(日本語:ja-JP, アメリカ英語:en-US, イギリス英語:en-GB, 中国語:zh-CN, 韓国語:ko-KR)
          speechSynthesis.speak(OMT);
          
          okay.addEventListener('click',()=>{
            modal2.classList.add('hidden');
            choice1.removeEventListener('click',event);
          });
          
          Change();
          Quizset();
  
          }};
  
        choice1.addEventListener('click',event,false);
                }
       checkAnswer();
  
  } 
  


}

let selectbox1 = form.selectbox1;
selectbox1.addEventListener('change', ()=> {
}, false);
selectbox1.onchange = function(){

if(selectbox1.value === "verb1"){
    function Change() { [a, h, e,f,g,max] = [0, 8, 10,10,10,50];}
  Change();Quizset(); }
else if(selectbox1.value === "verb2"){
  function Change() { [a, h, e,f,g,max] = [10, 18, 20,20,20,50];}
  Change();Quizset(); }
else if(selectbox1.value === "verb3"){
    function Change() { [a, h, e,f,g,max] = [20, 28, 30,30,30,50];}
    Change();Quizset(); }
else if(selectbox1.value === "verb4"){
    function Change() { [a, h, e,f,g,max] = [30, 38, 0,0,0,20];}
    Change();Quizset(); }
else if(selectbox1.value === "verb5"){
    function Change() { [a, h, e,f,g,max] = [40, 48, 0,0,0,39];}
    Change();Quizset(); }
    else{

      location.reload();
    } 

    function Quizset () {
      choice1.removeEventListener('click',event);
      const b = Math.floor(Math.random() * (max - e)) + e ;
      let c = Math.floor(Math.random() * (max - f)) + f ;
      let d = Math.floor(Math.random() * (max - g)) + g ;
      
    Qnum.textContent = `No.${a + 1}`;
    question.textContent = QuizVerb[a].q;
    
    var speak   = new SpeechSynthesisUtterance();
    speak.text  = question.textContent;
    speak.rate  = 0.7; // 読み上げ速度 0.1-10 初期値:1 (倍速なら2, 半分の倍速なら0.5, )
    speak.pitch = 1;// 声の高さ 0-2 初期値:1(0で女性の声) 
    speak.lang  = 'en-US'; //(日本語:ja-JP, アメリカ英語:en-US, イギリス英語:en-GB, 中国語:zh-CN, 韓国語:ko-KR)
    
    speechSynthesis.speak(speak);
    
    
    
    while(choice1.firstChild){
    choice1.removeChild(choice1.firstChild);
    }
    
    item1.textContent = QuizVerb[a].c;
    const ul1 = document.querySelector('ul');
      ul1.appendChild(item1);
    
      item2.textContent = WrongVerb[b];
      const ul = document.querySelector('ul');
        ul.appendChild(item2);
    
      item3.textContent = WrongVerb[c];
      const ul2 = document.querySelector('ul');
        ul.appendChild(item3);
      
       item4.textContent = WrongVerb[d];
       const ul3 = document.querySelector('ul');
         ul.appendChild(item4);
    
    
         function shuffle() {
    
          const x = Math.floor(Math.random() * 4 + 1) ;
          //console.log(x);
          
          if(x == 1){ 
            ul.insertBefore(item3,item1);
            ul.insertBefore(item2,item1);
            ul.insertBefore(item4,item1);
        
          }else if(x == 2){
            ul.insertBefore(item1,item4);
            ul.insertBefore(item2,item1);
          }else if(x == 3){
            ul.insertBefore(item1,item3);
            ul.insertBefore(item2,item1);
          }
          else{
            ul.insertBefore(item4,item2);
          }
        }
        
        shuffle();
    
        function checkAnswer(){
            
          let event = function(e){
            let t = e.target;
    
    
            if(t == item1){
            //正解の場合
    
            modal3.classList.remove('hidden');
            isCorrected.textContent = `正解！`;  
    
            setTimeout(()=>{
              modal3.classList.add('hidden');
    
              choice1.removeEventListener('click',event);
    
              //合格の場合
              if(a > h){
    
    
                var Finish   = new SpeechSynthesisUtterance();
                Finish.text  = 'Great!!Good job!!';
                Finish.rate  = 1; // 読み上げ速度 0.1-10 初期値:1 (倍速なら2, 半分の倍速なら0.5, )
                Finish.pitch = 1;// 声の高さ 0-2 初期値:1(0で女性の声) 
                Finish.lang  = 'en-US'; //(日本語:ja-JP, アメリカ英語:en-US, イギリス英語:en-GB, 中国語:zh-CN, 韓国語:ko-KR)
                speechSynthesis.speak(Finish);
      
                modal.classList.remove('hidden');
                 //alert(`合格!!`)
                  
                  close.addEventListener('click',()=>{
                    location.reload();
                })
    
              }else{
                  //次の問題へ
                a++;
                Quizset();
              }
            },500);
        
          }else{
            
              //間違った場合
    
            modal2.classList.remove('hidden');
            
            answer.textContent = ` 
            "${question.textContent}" は「${item1.textContent}」です。やり直し！`;
    
            var OMT   = new SpeechSynthesisUtterance();
            OMT.text  = 'one more time';
            OMT.rate  = 1; // 読み上げ速度 0.1-10 初期値:1 (倍速なら2, 半分の倍速なら0.5, )
            OMT.pitch = 1;// 声の高さ 0-2 初期値:1(0で女性の声) 
            OMT.lang  = 'en-US'; //(日本語:ja-JP, アメリカ英語:en-US, イギリス英語:en-GB, 中国語:zh-CN, 韓国語:ko-KR)
            speechSynthesis.speak(OMT);
            
            okay.addEventListener('click',()=>{
              modal2.classList.add('hidden');
              choice1.removeEventListener('click',event);
            });
            
            Change();
            Quizset();
    
            }};
    
          choice1.addEventListener('click',event,false);
                  }
         checkAnswer();
    
    } 
    
    
}

let selectbox2 = form.selectbox2;
selectbox2.addEventListener('change', ()=> {
}, false);
selectbox2.onchange = function(){
  if(selectbox2.value === "else1"){
    function Change() { [a, h, e,f,g,max] = [0, 8, 10,10,10,50];}
    Change();Quizset(); }
  else if(selectbox2.value === "else2"){
      function Change() { [a, h, e,f,g,max] = [10, 18, 20,20,20,50];}
      Change();Quizset(); }  
  else if(selectbox2.value === "else3"){
      function Change() { [a, h, e,f,g,max] = [20, 28, 30,30,30,50];}
      Change();Quizset(); }  
  else if(selectbox2.value === "else4"){
      function Change() { [a, h, e,f,g,max] = [30, 38, 0,0,0,29];}
      Change();Quizset(); }  
  else if(selectbox2.value === "else5"){
      function Change() { [a, h, e,f,g,max] = [40, 48, 0,0,0,39];}
      Change();Quizset(); }  

      function Quizset () {
        choice1.removeEventListener('click',event);
        const b = Math.floor(Math.random() * (max - e)) + e ;
        let c = Math.floor(Math.random() * (max - f)) + f ;
        let d = Math.floor(Math.random() * (max - g)) + g ;
        
      Qnum.textContent = `No.${a + 1}`;
      question.textContent = QuizElse[a].q;
      
      var speak   = new SpeechSynthesisUtterance();
      speak.text  = question.textContent;
      speak.rate  = 0.7; // 読み上げ速度 0.1-10 初期値:1 (倍速なら2, 半分の倍速なら0.5, )
      speak.pitch = 1;// 声の高さ 0-2 初期値:1(0で女性の声) 
      speak.lang  = 'en-US'; //(日本語:ja-JP, アメリカ英語:en-US, イギリス英語:en-GB, 中国語:zh-CN, 韓国語:ko-KR)
      
      speechSynthesis.speak(speak);
      
      
      
      while(choice1.firstChild){
      choice1.removeChild(choice1.firstChild);
      }
      
      item1.textContent = QuizElse[a].c;
      const ul1 = document.querySelector('ul');
        ul1.appendChild(item1);
      
        item2.textContent = WrongElse[b];
        const ul = document.querySelector('ul');
          ul.appendChild(item2);
      
        item3.textContent = WrongElse[c];
        const ul2 = document.querySelector('ul');
          ul.appendChild(item3);
        
         item4.textContent = WrongElse[d];
         const ul3 = document.querySelector('ul');
           ul.appendChild(item4);
      
      
           function shuffle() {
      
            const x = Math.floor(Math.random() * 4 + 1) ;
            //console.log(x);
            
            if(x == 1){ 
              ul.insertBefore(item3,item1);
              ul.insertBefore(item2,item1);
              ul.insertBefore(item4,item1);
          
            }else if(x == 2){
              ul.insertBefore(item1,item4);
              ul.insertBefore(item2,item1);
            }else if(x == 3){
              ul.insertBefore(item1,item3);
              ul.insertBefore(item2,item1);
            }
            else{
              ul.insertBefore(item4,item2);
            }
          }
          
          shuffle();
      
          function checkAnswer(){
              
            let event = function(e){
              let t = e.target;
      
      
              if(t == item1){
              //正解の場合
      
              modal3.classList.remove('hidden');
              isCorrected.textContent = `正解！`;  
      
              setTimeout(()=>{
                modal3.classList.add('hidden');
      
                choice1.removeEventListener('click',event);
      
                //合格の場合
                if(a > h){
      
      
                  var Finish   = new SpeechSynthesisUtterance();
                  Finish.text  = 'Great!!Good job!!';
                  Finish.rate  = 1; // 読み上げ速度 0.1-10 初期値:1 (倍速なら2, 半分の倍速なら0.5, )
                  Finish.pitch = 1;// 声の高さ 0-2 初期値:1(0で女性の声) 
                  Finish.lang  = 'en-US'; //(日本語:ja-JP, アメリカ英語:en-US, イギリス英語:en-GB, 中国語:zh-CN, 韓国語:ko-KR)
                  speechSynthesis.speak(Finish);
        
                  modal.classList.remove('hidden');
                   //alert(`合格!!`)
                    
                    close.addEventListener('click',()=>{
                      location.reload();
                  })
      
                }else{
                    //次の問題へ
                  a++;
                  Quizset();
                }
              },500);
          
            }else{
              
                //間違った場合
      
              modal2.classList.remove('hidden');
              
              answer.textContent = ` 
              "${question.textContent}" は「${item1.textContent}」です。やり直し！`;
      
              var OMT   = new SpeechSynthesisUtterance();
              OMT.text  = 'one more time';
              OMT.rate  = 1; // 読み上げ速度 0.1-10 初期値:1 (倍速なら2, 半分の倍速なら0.5, )
              OMT.pitch = 1;// 声の高さ 0-2 初期値:1(0で女性の声) 
              OMT.lang  = 'en-US'; //(日本語:ja-JP, アメリカ英語:en-US, イギリス英語:en-GB, 中国語:zh-CN, 韓国語:ko-KR)
              speechSynthesis.speak(OMT);
              
              okay.addEventListener('click',()=>{
                modal2.classList.add('hidden');
                choice1.removeEventListener('click',event);
              });
              
              Change();
              Quizset();
      
              }};
      
            choice1.addEventListener('click',event,false);
                    }
           checkAnswer();
      
      } 
      

}
let selectbox3 = form2.selectbox3;
selectbox3.addEventListener('change', ()=> {
}, false);
selectbox3.onchange = function(){
  if(selectbox3.value === "idiom1"){
    function Change() { [a, h, e,f,g,max] = [0, 8, 10,10,10,99];}
    Change();Quizset(); }
 else if(selectbox3.value === "idiom2"){
    function Change() { [a, h, e,f,g,max] = [10, 18, 20,20,20,99];}
    Change();Quizset(); }
 else if(selectbox3.value === "idiom3"){
    function Change() { [a, h, e,f,g,max] = [20, 28, 30,30,30,99];}
    Change();Quizset(); }
 else if(selectbox3.value === "idiom4"){
    function Change() { [a, h, e,f,g,max] = [30, 38, 40,40,40,99];}
    Change();Quizset(); }
 else if(selectbox3.value === "idiom5"){
    function Change() { [a, h, e,f,g,max] = [40, 48, 50,50,50,99];}
    Change();Quizset(); }
 else if(selectbox3.value === "idiom6"){
    function Change() { [a, h, e,f,g,max] = [50, 58, 0,0,0,49];}
    Change();Quizset(); }
 else if(selectbox3.value === "idiom7"){
    function Change() { [a, h, e,f,g,max] = [60, 68, 0,0,0,59];}
    Change();Quizset(); }
 else if(selectbox3.value === "idiom8"){
    function Change() { [a, h, e,f,g,max] = [70, 78, 0,0,0,69];}
    Change();Quizset(); }
 else if(selectbox3.value === "idiom9"){
    function Change() { [a, h, e,f,g,max] = [80, 88, 0,0,0,79];}
    Change();Quizset(); }
 else if(selectbox3.value === "idiom10"){
    function Change() { [a, h, e,f,g,max] = [90, 98, 20,20,20,89];}
    Change();Quizset(); }

    function Quizset () {
      choice1.removeEventListener('click',event);
      const b = Math.floor(Math.random() * (max - e)) + e ;
      let c = Math.floor(Math.random() * (max - f)) + f ;
      let d = Math.floor(Math.random() * (max - g)) + g ;
      
    Qnum.textContent = `No.${a + 1}`;
    question.textContent = QuizIdiom[a].q;
    
    var speak   = new SpeechSynthesisUtterance();
    speak.text  = question.textContent;
    speak.rate  = 0.7; // 読み上げ速度 0.1-10 初期値:1 (倍速なら2, 半分の倍速なら0.5, )
    speak.pitch = 1;// 声の高さ 0-2 初期値:1(0で女性の声) 
    speak.lang  = 'en-US'; //(日本語:ja-JP, アメリカ英語:en-US, イギリス英語:en-GB, 中国語:zh-CN, 韓国語:ko-KR)
    
    speechSynthesis.speak(speak);
    
    
    
    while(choice1.firstChild){
    choice1.removeChild(choice1.firstChild);
    }
    
    item1.textContent = QuizIdiom[a].c;
    const ul1 = document.querySelector('ul');
      ul1.appendChild(item1);
    
      item2.textContent = WrongIdiom[b];
      const ul = document.querySelector('ul');
        ul.appendChild(item2);
    
      item3.textContent = WrongIdiom[c];
      const ul2 = document.querySelector('ul');
        ul.appendChild(item3);
      
       item4.textContent = WrongIdiom[d];
       const ul3 = document.querySelector('ul');
         ul.appendChild(item4);
    
    
         function shuffle() {
    
          const x = Math.floor(Math.random() * 4 + 1) ;
          //console.log(x);
          
          if(x == 1){ 
            ul.insertBefore(item3,item1);
            ul.insertBefore(item2,item1);
            ul.insertBefore(item4,item1);
        
          }else if(x == 2){
            ul.insertBefore(item1,item4);
            ul.insertBefore(item2,item1);
          }else if(x == 3){
            ul.insertBefore(item1,item3);
            ul.insertBefore(item2,item1);
          }
          else{
            ul.insertBefore(item4,item2);
          }
        }
        
        shuffle();
    
        function checkAnswer(){
            
          let event = function(e){
            let t = e.target;
    
    
            if(t == item1){
            //正解の場合
    
            modal3.classList.remove('hidden');
            isCorrected.textContent = `正解！`;  
    
            setTimeout(()=>{
              modal3.classList.add('hidden');
    
              choice1.removeEventListener('click',event);
    
              //合格の場合
              if(a > h){
    
    
                var Finish   = new SpeechSynthesisUtterance();
                Finish.text  = 'Great!!Good job!!';
                Finish.rate  = 1; // 読み上げ速度 0.1-10 初期値:1 (倍速なら2, 半分の倍速なら0.5, )
                Finish.pitch = 1;// 声の高さ 0-2 初期値:1(0で女性の声) 
                Finish.lang  = 'en-US'; //(日本語:ja-JP, アメリカ英語:en-US, イギリス英語:en-GB, 中国語:zh-CN, 韓国語:ko-KR)
                speechSynthesis.speak(Finish);
      
                modal.classList.remove('hidden');
                 //alert(`合格!!`)
                  
                  close.addEventListener('click',()=>{
                    location.reload();
                })
    
              }else{
                  //次の問題へ
                a++;
                Quizset();
              }
            },500);
        
          }else{
            
              //間違った場合
    
            modal2.classList.remove('hidden');
            
            answer.textContent = ` 
            "${question.textContent}" は「${item1.textContent}」です。やり直し！`;
    
            var OMT   = new SpeechSynthesisUtterance();
            OMT.text  = 'one more time';
            OMT.rate  = 1; // 読み上げ速度 0.1-10 初期値:1 (倍速なら2, 半分の倍速なら0.5, )
            OMT.pitch = 1;// 声の高さ 0-2 初期値:1(0で女性の声) 
            OMT.lang  = 'en-US'; //(日本語:ja-JP, アメリカ英語:en-US, イギリス英語:en-GB, 中国語:zh-CN, 韓国語:ko-KR)
            speechSynthesis.speak(OMT);
            
            okay.addEventListener('click',()=>{
              modal2.classList.add('hidden');
              choice1.removeEventListener('click',event);
            });
            
            Change();
            Quizset();
    
            }};
    
          choice1.addEventListener('click',event,false);
                  }
         checkAnswer();
    
    } 
    
}

let selectbox4 = form2.selectbox4;
selectbox4.addEventListener('change', ()=> {
}, false);
selectbox4.onchange = function(){
  if(selectbox4.value === "express1"){
    function Change() { [a, h, e,f,g,max] = [0, 8, 10,10,10,73];}
    Change();Quizset(); }
 else if(selectbox4.value === "express2"){
    function Change() { [a, h, e,f,g,max] = [10, 18, 20,20,20,80];}
    Change();Quizset(); }
 else if(selectbox4.value === "express3"){
    function Change() { [a, h, e,f,g,max] = [20, 28, 30,30,30,80];}
    Change();Quizset(); }
 else if(selectbox4.value === "express4"){
    function Change() { [a, h, e,f,g,max] = [30, 38, 40,40,40,80];}
    Change();Quizset(); }
 else if(selectbox4.value === "express5"){
    function Change() { [a, h, e,f,g,max] = [40, 48, 50,50,50,80];}
    Change();Quizset(); }
 else if(selectbox4.value === "express6"){
    function Change() { [a, h, e,f,g,max] = [50, 58, 0,0,0,49];}
    Change();Quizset(); }
 else if(selectbox4.value === "express7"){
    function Change() { [a, h, e,f,g,max] = [60, 68, 0,0,0,59];}
    Change();Quizset(); }
 else if(selectbox4.value === "express8"){
    function Change() { [a, h, e,f,g,max] = [70, 78, 0,0,0,69];}
    Change();Quizset(); }
    else { location.reload();}
    function Quizset () {
      choice1.removeEventListener('click',event);
      const b = Math.floor(Math.random() * (max - e)) + e ;
      let c = Math.floor(Math.random() * (max - f)) + f ;
      let d = Math.floor(Math.random() * (max - g)) + g ;
      
    Qnum.textContent = `No.${a + 1}`;
    question.textContent = QuizExpress[a].q;
    
    var speak   = new SpeechSynthesisUtterance();
    speak.text  = question.textContent;
    speak.rate  = 0.7; // 読み上げ速度 0.1-10 初期値:1 (倍速なら2, 半分の倍速なら0.5, )
    speak.pitch = 1;// 声の高さ 0-2 初期値:1(0で女性の声) 
    speak.lang  = 'en-US'; //(日本語:ja-JP, アメリカ英語:en-US, イギリス英語:en-GB, 中国語:zh-CN, 韓国語:ko-KR)
    
    speechSynthesis.speak(speak);
    
    
    
    while(choice1.firstChild){
    choice1.removeChild(choice1.firstChild);
    }
    
    item1.textContent = QuizExpress[a].c;
    const ul1 = document.querySelector('ul');
      ul1.appendChild(item1);
    
      item2.textContent = WrongExpress[b];
      const ul = document.querySelector('ul');
        ul.appendChild(item2);
    
      item3.textContent = WrongExpress[c];
      const ul2 = document.querySelector('ul');
        ul.appendChild(item3);
      
       item4.textContent = WrongExpress[d];
       const ul3 = document.querySelector('ul');
         ul.appendChild(item4);
    
    
         function shuffle() {
    
          const x = Math.floor(Math.random() * 4 + 1) ;
          //console.log(x);
          
          if(x == 1){ 
            ul.insertBefore(item3,item1);
            ul.insertBefore(item2,item1);
            ul.insertBefore(item4,item1);
        
          }else if(x == 2){
            ul.insertBefore(item1,item4);
            ul.insertBefore(item2,item1);
          }else if(x == 3){
            ul.insertBefore(item1,item3);
            ul.insertBefore(item2,item1);
          }
          else{
            ul.insertBefore(item4,item2);
          }
        }
        
        shuffle();
    
        function checkAnswer(){
            
          let event = function(e){
            let t = e.target;
    
    
            if(t == item1){
            //正解の場合
    
            modal3.classList.remove('hidden');
            isCorrected.textContent = `正解！`;  
    
            setTimeout(()=>{
              modal3.classList.add('hidden');
    
              choice1.removeEventListener('click',event);
    
              //合格の場合
              if(a > h){
    
    
                var Finish   = new SpeechSynthesisUtterance();
                Finish.text  = 'Great!!Good job!!';
                Finish.rate  = 1; // 読み上げ速度 0.1-10 初期値:1 (倍速なら2, 半分の倍速なら0.5, )
                Finish.pitch = 1;// 声の高さ 0-2 初期値:1(0で女性の声) 
                Finish.lang  = 'en-US'; //(日本語:ja-JP, アメリカ英語:en-US, イギリス英語:en-GB, 中国語:zh-CN, 韓国語:ko-KR)
                speechSynthesis.speak(Finish);
      
                modal.classList.remove('hidden');
                 //alert(`合格!!`)
                  
                  close.addEventListener('click',()=>{
                    location.reload();
                })
    
              }else{
                  //次の問題へ
                a++;
                Quizset();
              }
            },500);
        
          }else{
            
              //間違った場合
    
            modal2.classList.remove('hidden');
            
            answer.textContent = ` 
            "${question.textContent}" は「${item1.textContent}」です。やり直し！`;
    
            var OMT   = new SpeechSynthesisUtterance();
            OMT.text  = 'one more time';
            OMT.rate  = 1; // 読み上げ速度 0.1-10 初期値:1 (倍速なら2, 半分の倍速なら0.5, )
            OMT.pitch = 1;// 声の高さ 0-2 初期値:1(0で女性の声) 
            OMT.lang  = 'en-US'; //(日本語:ja-JP, アメリカ英語:en-US, イギリス英語:en-GB, 中国語:zh-CN, 韓国語:ko-KR)
            speechSynthesis.speak(OMT);
            
            okay.addEventListener('click',()=>{
              modal2.classList.add('hidden');
              choice1.removeEventListener('click',event);
            });
            
            Change();
            Quizset();
    
            }};
    
          choice1.addEventListener('click',event,false);
                  }
         checkAnswer();
    
    } 
    
}






        







