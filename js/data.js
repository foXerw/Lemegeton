/* LEMEGETON 内容数据 —— 72 魔（Ars Goetia）+ 小钥匙五部。
 * UMD：浏览器挂到 window.LEMEGETON_DATA；Node 环境走 CommonJS 导出。 */
(function (root, factory) {
  const data = factory();
  if (typeof module === "object" && module.exports) module.exports = data;
  else root.LEMEGETON_DATA = data;
})(typeof self !== "undefined" ? self : this, function () {

  // 每条：{ no, name, altNames, zhName, rankEn, rankZh, powers, powersEn, desc, descEn }
  const DEMONS = [
    {
      no: 1, name: "Bael", altNames: ["Baal", "Baell"], zhName: "巴尔",
      rankEn: ["King"], rankZh: ["王"],
      powers: "使人隐身，并赋予统御与智慧。",
      powersEn: "Grants invisibility, and bestows wisdom and dominion.",
      desc: "七十二柱魔神之首，位列东方的王。传说可化形为猫、蟾蜍或人身，有时三者合一，以沙哑之声发言。他赋予召唤者隐匿之能与超越凡俗的智慧。",
      descEn: "The first and principal of the seventy-two. A king ruling in the East, he appears as a cat, a toad, or a man — sometimes all at once — and speaks with a hoarse voice. He bestows invisibility and wisdom beyond the common kind."
    },
    {
      no: 2, name: "Agares", altNames: ["Agaros"], zhName: "阿加雷斯",
      rankEn: ["Duke"], rankZh: ["公爵"],
      powers: "教授语言，使人驻足或奔逃。",
      powersEn: "Teaches languages, and makes men stand still or flee.",
      desc: "东方的公爵，骑乘鳄鱼、臂上栖一鹰。他授人一切现存的语言，能让逃者停步、使站者奔逃，也能令高位者跌落。",
      descEn: "A duke of the East, riding a crocodile with a hawk on his fist. He teaches all present tongues, stops the fleeing, makes the standing flee, and can cast down those of high degree."
    },
    {
      no: 3, name: "Vassago", altNames: [], zhName: "瓦沙克",
      rankEn: ["Prince"], rankZh: ["亲王"],
      powers: "知晓过去未来，寻找失物。",
      powersEn: "Declares past, present and future, and finds lost or hidden things.",
      desc: "与亚加雷斯同属一族，性情良善。他能宣告过去、现在与未来之事，也能发现隐藏或遗失之物。",
      descEn: "Of the same nature as Agares, and of a good disposition. He declares things past, present and to come, and discovers what is hidden or lost."
    },
    {
      no: 4, name: "Samigina", altNames: ["Gamigin"], zhName: "萨米吉纳",
      rankEn: ["Marquis"], rankZh: ["侯爵"],
      powers: "教授文科学问，召唤亡灵。",
      powersEn: "Teaches the liberal sciences, and summons the spirits of the drowned.",
      desc: "以小马或驴形现身的侯爵，声音沙哑。他教授文理诸学，并能召唤淹死者的亡灵显形。",
      descEn: "A marquis appearing as a small horse or ass, who speaks with a hoarse voice. He teaches the liberal sciences and raises the spirits of the drowned."
    },
    {
      no: 5, name: "Marbas", altNames: ["Barbas"], zhName: "玛巴斯",
      rankEn: ["President"], rankZh: ["统领"],
      powers: "变化形体，治病，通晓机械。",
      powersEn: "Shifts shape, heals and causes disease, and knows all arts mechanical.",
      desc: "以大狮子形现身的统领，也可化人形。他能知晓隐秘、引发或治愈疾病，通晓一切机械与工艺，并能使人变形。",
      descEn: "A president appearing as a great lion, or as a man. He knows things hidden, causes and cures diseases, understands all mechanical arts, and can change the form of men."
    },
    {
      no: 6, name: "Valefor", altNames: ["Valefar", "Malaphar"], zhName: "瓦列佛",
      rankEn: ["Duke"], rankZh: ["公爵"],
      powers: "盗贼的良伴。",
      powersEn: "A familiar and friend to thieves.",
      desc: "以多头狮形现身的公爵。他是窃贼的亲密伴侣，能引导其行事，也能予人熟稔之术与胆量。",
      descEn: "A duke appearing as a lion with many heads. He is a familiar companion of thieves, guiding them, and grants skill and courage."
    },
    {
      no: 7, name: "Amon", altNames: ["Aamon"], zhName: "亚蒙",
      rankEn: ["Marquis"], rankZh: ["侯爵"],
      powers: "知晓过去未来，调停纷争。",
      powersEn: "Knows past and future, and reconciles friends and foes.",
      desc: "以狼身蛇尾、口吐火焰之形现身的侯爵。他能宣告过去与未来，使敌友和解，并赐予爱与恩宠。",
      descEn: "A marquis appearing as a wolf with a serpent's tail, vomiting flame. He declares the past and future, reconciles friends and foes, and grants love and favour."
    },
    {
      no: 8, name: "Barbatos", altNames: [], zhName: "巴巴托斯",
      rankEn: ["Duke"], rankZh: ["公爵"],
      powers: "通晓鸟兽之声，寻宝。",
      powersEn: "Understands the speech of birds and beasts, and finds hidden treasure.",
      desc: "伴随号角声、以猎人与林木之形现身的公爵。他能听懂鸟兽之声，寻得被魔法隐藏的宝藏，并使人重获友谊。",
      descEn: "A duke appearing with the sound of horns as a hunter amid woods. He understands the voices of birds and beasts, finds treasure hidden by magic, and restores friendship."
    },
    {
      no: 9, name: "Paimon", altNames: ["Paymon"], zhName: "派蒙",
      rankEn: ["King"], rankZh: ["王"],
      powers: "授艺术与科学，赐予高位。",
      powersEn: "Teaches all arts and sciences, and grants dignity.",
      desc: "最顺从路西法的王之一，骑单峰驼、号角齐鸣随行。他教授一切艺术、科学与隐秘，赐予高位与良善魔宠。",
      descEn: "One of the kings most obedient to Lucifer, riding a dromedary with a host of trumpeters. He teaches all arts, sciences and secret things, granting dignity and good familiars."
    },
    {
      no: 10, name: "Buer", altNames: [], zhName: "布耶尔",
      rankEn: ["President"], rankZh: ["统领"],
      powers: "教哲学、逻辑与药草治病。",
      powersEn: "Teaches philosophy, logic, and the virtues of all herbs.",
      desc: "以人马形现身的统领。他教授道德与自然哲学、逻辑学，以及一切草药的效用，能治愈一切疾患。",
      descEn: "A president appearing as a centaur. He teaches moral and natural philosophy, logic, and the virtues of all herbs, and cures all infirmities."
    },
    {
      no: 11, name: "Gusion", altNames: ["Gusoin"], zhName: "古辛",
      rankEn: ["Duke"], rankZh: ["公爵"],
      powers: "化解敌意，赐予荣耀。",
      powersEn: "Reconciles enemies and grants honour.",
      desc: "以多头犬形现身的公爵。他能回答过去、现在、未来的真相，化解一切纷争，并授予荣耀与尊敬。",
      descEn: "A duke appearing as a dog with many heads. He tells the truth of past, present and future, reconciles all strife, and bestows honour and respect."
    },
    {
      no: 12, name: "Sitri", altNames: ["Sytry"], zhName: "西迪",
      rankEn: ["Prince"], rankZh: ["亲王"],
      powers: "激发爱欲，显现美人。",
      powersEn: "Kindles lust, and shows beautiful forms.",
      desc: "以豹首狮身、鹰翼之形现身的亲王。他能使人对彼此燃起爱欲，也能令男女裸体现形。",
      descEn: "A prince appearing with a leopard's head, lion's body and griffin's wings. He kindles lust between people and makes men and women appear naked."
    },
    {
      no: 13, name: "Beleth", altNames: ["Bileth", "Bilet"], zhName: "贝雷特",
      rankEn: ["King"], rankZh: ["王"],
      powers: "使人相爱。",
      powersEn: "Causes love between people.",
      desc: "威严可怖的王，骑白马、号角齐鸣。他掌管人间情爱，能使人心生爱慕。",
      descEn: "A terrible and mighty king riding a pale horse, with trumpets sounding. He governs the affections of men and kindles love between them."
    },
    {
      no: 14, name: "Leraje", altNames: ["Leraikha", "Loray"], zhName: "莱拉杰",
      rankEn: ["Marquis"], rankZh: ["侯爵"],
      powers: "制造战斗与争斗。",
      powersEn: "Causes battles and contests.",
      desc: "以绿衣弓箭手形现身的侯爵。他能引发战斗与争执，并能使一切箭伤溃烂。",
      descEn: "A marquis appearing as an archer in green. He causes battles and contests, and makes arrow wounds fester."
    },
    {
      no: 15, name: "Eligos", altNames: ["Eligor", "Abigor"], zhName: "埃力格",
      rankEn: ["Duke"], rankZh: ["公爵"],
      powers: "洞悉未来战事。",
      powersEn: "Knows the outcome of wars.",
      desc: "以持矛骑士形现身的公爵。他能揭示隐秘，预言战争的结局与军队的命运，也能使人得贵族之爱。",
      descEn: "A duke appearing as a knight bearing a lance. He reveals hidden things, foretells the outcome of wars and the fate of armies, and wins the love of nobles."
    },
    {
      no: 16, name: "Zepar", altNames: [], zhName: "泽帕尔",
      rankEn: ["Duke"], rankZh: ["公爵"],
      powers: "使人相爱，令女子不孕。",
      powersEn: "Kindles love, and makes women barren.",
      desc: "以红袍士兵形现身的公爵。他能使人相爱，也能令女子不育，或使男女彼此眷恋。",
      descEn: "A duke appearing as a soldier in red. He kindles love, and can make women barren or bind people in mutual desire."
    },
    {
      no: 17, name: "Botis", altNames: ["Otis", "Bothis"], zhName: "波提斯",
      rankEn: ["President", "Earl"], rankZh: ["统领", "伯爵"],
      powers: "洞悉过去未来，调和敌友。",
      powersEn: "Knows past and future, and reconciles friends and foes.",
      desc: "初现为丑恶蝮蛇，后化人形、持剑的统领与伯爵。他能讲述过去、现在与未来，并使敌友和解。",
      descEn: "A president and earl who first appears as a foul viper, then as a man with a sword. He tells of past, present and future, and reconciles friends and foes."
    },
    {
      no: 18, name: "Bathin", altNames: ["Bathym", "Mathim"], zhName: "巴钦",
      rankEn: ["Duke"], rankZh: ["公爵"],
      powers: "识草药宝石，瞬行远方。",
      powersEn: "Knows herbs and stones, and carries men between lands.",
      desc: "骑灰马、以蛇尾壮汉形现身的公爵。他通晓一切草药与宝石，能瞬间将人从一国送至另一国。",
      descEn: "A duke appearing as a strong man with a serpent's tail, riding a pale horse. He knows all herbs and stones, and carries men swiftly from one land to another."
    },
    {
      no: 19, name: "Sallos", altNames: ["Saleos", "Zaleos"], zhName: "萨罗斯",
      rankEn: ["Duke"], rankZh: ["公爵"],
      powers: "促爱情。",
      powersEn: "Causes love between people.",
      desc: "以骑鳄鱼、头戴王冠的勇士形现身的公爵。他掌管男女之爱，能使人心生爱情。",
      descEn: "A duke appearing as a warrior with a crown, riding a crocodile. He governs the love of men and women and kindles affection."
    },
    {
      no: 20, name: "Purson", altNames: [], zhName: "普尔森",
      rankEn: ["King"], rankZh: ["王"],
      powers: "揭示隐秘，赐予魔宠。",
      powersEn: "Reveals hidden things, and grants good familiars.",
      desc: "以骑熊、号角齐鸣的狮面人之形现身的王。他能揭示隐秘、预知未来，并赐予良善的魔宠。",
      descEn: "A king appearing as a lion-faced man riding a bear, with trumpets sounding. He reveals hidden things, foretells the future, and grants good familiars."
    },
    {
      no: 21, name: "Morax", altNames: ["Marax", "Foraii"], zhName: "莫拉克斯",
      rankEn: ["Earl", "President"], rankZh: ["伯爵", "统领"],
      powers: "教天文与草药。",
      powersEn: "Teaches astronomy and the virtues of herbs.",
      desc: "以牛首人形现身的伯爵与统领。他教授天文与一切草药，能赐予良善的魔宠。",
      descEn: "An earl and president appearing as a bull-headed man. He teaches astronomy and the virtues of all herbs, and grants good familiars."
    },
    {
      no: 22, name: "Ipos", altNames: ["Ipes", "Ayperos"], zhName: "伊波斯",
      rankEn: ["Earl", "Prince"], rankZh: ["伯爵", "亲王"],
      powers: "使人机智勇敢。",
      powersEn: "Makes men witty and bold.",
      desc: "以狮首鹅足兔尾的天使形现身的伯爵与亲王。他能使人机智、勇敢、无畏，并知晓过去与未来。",
      descEn: "An earl and prince appearing as an angel with a lion's head, goose's feet and hare's tail. He makes men witty, bold and fearless, and knows the past and future."
    },
    {
      no: 23, name: "Aim", altNames: ["Aym", "Haborym"], zhName: "艾姆",
      rankEn: ["Duke"], rankZh: ["公爵"],
      powers: "焚毁城邦，如实作答。",
      powersEn: "Burns cities and castles, and answers truly.",
      desc: "以持火炬的三头人身（蛇头、人头、猫头）现身的公爵，骑蝮蛇。他能放火烧毁城市城堡，并如实回答隐秘问题。",
      descEn: "A duke appearing as a three-headed man — serpent, human and cat — carrying a torch, riding a viper. He burns cities and castles, and answers hidden questions truly."
    },
    {
      no: 24, name: "Naberius", altNames: ["Naberus", "Cerberus"], zhName: "纳贝流斯",
      rankEn: ["Marquis"], rankZh: ["侯爵"],
      powers: "授技艺，恢复荣誉。",
      powersEn: "Teaches arts, and restores lost honour.",
      desc: "以乌鸦或黑鹤形现身的侯爵。他使人精通一切技艺与科学，并能恢复失去的荣誉与地位。",
      descEn: "A marquis appearing as a crow or black crane. He makes men skilled in all arts and sciences, and restores lost honours and dignities."
    },
    {
      no: 25, name: "Glasya-Labolas", altNames: ["Caacrinolaas"], zhName: "格拉夏拉波拉斯",
      rankEn: ["President", "Earl"], rankZh: ["统领", "伯爵"],
      powers: "教技艺，引发流血。",
      powersEn: "Teaches arts, and incites bloodshed.",
      desc: "以鹰翼犬形现身的统领与伯爵。他教授一切技艺，是流血与凶杀的煽动者，也知晓过去与未来。",
      descEn: "A president and earl appearing as a dog with griffin's wings. He teaches all arts, incites bloodshed and murder, and knows the past and future."
    },
    {
      no: 26, name: "Bune", altNames: ["Bimé", "Bime"], zhName: "布涅",
      rankEn: ["Duke"], rankZh: ["公爵"],
      powers: "移动死者，聚集财富，善辩。",
      powersEn: "Moves the dead, gathers riches, and makes men eloquent.",
      desc: "以三头龙形（狗首、狮身、人面）现身的公爵。他能移动死者、聚集财富、使人雄辩，并如实回答一切。",
      descEn: "A duke appearing as a three-headed dragon — dog, lion and man. He moves the dead, gathers riches, makes men eloquent, and answers truly."
    },
    {
      no: 27, name: "Ronové", altNames: ["Ronove", "Roneve"], zhName: "罗诺维",
      rankEn: ["Marquis", "Earl"], rankZh: ["侯爵", "伯爵"],
      powers: "教修辞与语言。",
      powersEn: "Teaches rhetoric and languages.",
      desc: "以怪物形现身的侯爵与伯爵。他教授修辞与一切语言，赐予良善的魔宠，并能使敌人忠心。",
      descEn: "A marquis and earl appearing as a monster. He teaches rhetoric and all languages, grants good familiars, and makes enemies loyal."
    },
    {
      no: 28, name: "Berith", altNames: ["Beal", "Beale", "Bofry"], zhName: "贝里特",
      rankEn: ["Duke"], rankZh: ["公爵"],
      powers: "点金、预知、赐高位。",
      powersEn: "Transmutes metals, foretells, and grants dignity.",
      desc: "以红甲骑士形现身的公爵。他能将金属点化为金、预言未来、赐予显赫高位，但言语多欺瞒。",
      descEn: "A duke appearing as a knight in red armour. He transmutes metals to gold, foretells the future, and grants high dignities, though he often deceives."
    },
    {
      no: 29, name: "Astaroth", altNames: ["Ashtaroth", "Astoreth"], zhName: "阿斯塔罗斯",
      rankEn: ["Duke"], rankZh: ["公爵"],
      powers: "授数理，揭示隐秘。",
      powersEn: "Teaches the liberal sciences, and reveals secrets.",
      desc: "以骑龙、持蛇、口吐恶臭的天使形现身的公爵。他教授数学与工艺，揭示过去未来隐秘，也讲述天使的堕落。",
      descEn: "A duke appearing as an angel riding a dragon, bearing a serpent, breathing foul odour. He teaches mathematics and craft, reveals secrets, and tells of the fall of angels."
    },
    {
      no: 30, name: "Forneus", altNames: ["Fornias"], zhName: "佛尔努斯",
      rankEn: ["Marquis"], rankZh: ["侯爵"],
      powers: "授修辞，令敌友善。",
      powersEn: "Teaches rhetoric, and reconciles enemies.",
      desc: "以海怪形现身的侯爵。他教授修辞与语言，能使人获得好名声，并使敌人与朋友和好。",
      descEn: "A marquis appearing as a sea-monster. He teaches rhetoric and languages, wins a good name, and reconciles enemies with friends."
    },
    {
      no: 31, name: "Foras", altNames: ["Forcas", "Forras"], zhName: "佛拉斯",
      rankEn: ["President"], rankZh: ["统领"],
      powers: "授逻辑，寻物隐身。",
      powersEn: "Teaches logic and ethics, finds lost things.",
      desc: "以强健之人形现身的统领。他教授逻辑与伦理、草药与宝石，能找回失物、使人隐身与长寿。",
      descEn: "A president appearing as a strong man. He teaches logic, ethics, herbs and stones, finds lost things, and makes men invisible and long-lived."
    },
    {
      no: 32, name: "Asmodeus", altNames: ["Asmoday", "Asmodai"], zhName: "阿斯摩德",
      rankEn: ["King"], rankZh: ["王"],
      powers: "授算术几何，寻宝藏。",
      powersEn: "Teaches arithmetic and geometry, and finds treasure.",
      desc: "三头（牛、人、羊）、蛇尾、口吐火焰、骑龙的王。他教授算术、几何、天文与工艺，寻得隐藏宝藏，赐予德行戒指。",
      descEn: "A king with three heads — bull, man and ram — a serpent's tail, and flame from his mouth, riding a dragon. He teaches arithmetic, geometry and craft, finds treasure, and grants a ring of virtue."
    },
    {
      no: 33, name: "Gäap", altNames: ["Gaap", "Tap"], zhName: "盖因",
      rankEn: ["President", "Prince"], rankZh: ["统领", "亲王"],
      powers: "授哲学，通灵远行。",
      powersEn: "Teaches philosophy, and carries men afar.",
      desc: "以人的形体现身的统领与亲王。他教授哲学与文理科学，带来爱与憎，能通晓灵界，并瞬间载人远行。",
      descEn: "A president and prince appearing as a man. He teaches philosophy and the liberal sciences, brings love and hatred, knows the spirit world, and carries men swiftly away."
    },
    {
      no: 34, name: "Furfur", altNames: [], zhName: "佛尔佛尔",
      rankEn: ["Earl"], rankZh: ["伯爵"],
      powers: "唤起雷电风暴，授隐秘。",
      powersEn: "Raises thunder and storms, and tells secret things.",
      desc: "以有翼雄鹿形现身的伯爵。他能唤起雷电、风暴与地震，也能说出神圣与隐秘之事。",
      descEn: "An earl appearing as a winged stag. He raises thunder, storms and earthquakes, and speaks of divine and secret things."
    },
    {
      no: 35, name: "Marchosias", altNames: [], zhName: "玛可西亚斯",
      rankEn: ["Marquis"], rankZh: ["侯爵"],
      powers: "勇猛善战，忠于召唤者。",
      powersEn: "A valiant fighter, loyal to the summoner.",
      desc: "以狮身鹰翼蛇尾、口吐火焰的狼形现身的侯爵。他是强力的战士，忠于召唤者，能回答一切问题。",
      descEn: "A marquis appearing as a wolf with a lion's body, griffin's wings and a serpent's tail, breathing flame. A valiant warrior loyal to the summoner, he answers all questions."
    },
    {
      no: 36, name: "Stolas", altNames: ["Stolos"], zhName: "斯托拉斯",
      rankEn: ["Prince"], rankZh: ["亲王"],
      powers: "教天文与宝石。",
      powersEn: "Teaches astronomy and the virtues of stones.",
      desc: "以猫头鹰形现身的亲王。他教授天文、植物与宝石的效用，能回答一切问题。",
      descEn: "A prince appearing as a raven or owl. He teaches astronomy, plants and the virtues of stones, and answers all questions."
    },
    {
      no: 37, name: "Phenex", altNames: ["Phoenix", "Phenix"], zhName: "菲尼克斯",
      rankEn: ["Marquis"], rankZh: ["侯爵"],
      powers: "授科学，善诗，如凤凰重生。",
      powersEn: "Teaches the sciences, and is an excellent poet.",
      desc: "以凤凰形现身的侯爵，歌声如幼童。他教授一切科学、是出色的诗人，并能如凤凰般重生。",
      descEn: "A marquis appearing as a phoenix, singing like a child. He teaches all sciences, is an excellent poet, and is reborn like the phoenix."
    },
    {
      no: 38, name: "Halphas", altNames: ["Malthus", "Malthas"], zhName: "哈尔法斯",
      rankEn: ["Earl"], rankZh: ["伯爵"],
      powers: "建造城塔，供应军械。",
      powersEn: "Builds towers, and furnishes weapons.",
      desc: "以斑鸠形现身的伯爵。他能建造城池与高塔、供应军械与兵器，并派遣军队作战。",
      descEn: "An earl appearing as a stock-dove. He builds cities and towers, furnishes arms and weapons, and sends armies to war."
    },
    {
      no: 39, name: "Malphas", altNames: [], zhName: "玛尔法斯",
      rankEn: ["President"], rankZh: ["统领"],
      powers: "建造屋塔，摧毁敌业。",
      powersEn: "Builds houses and towers, and destroys enemies' works.",
      desc: "以乌鸦形现身的统领。他能建造房屋与高塔，摧毁敌人的营垒与工事，并供良善的魔宠。",
      descEn: "A president appearing as a crow. He builds houses and towers, destroys the works and camps of enemies, and provides good familiars."
    },
    {
      no: 40, name: "Räum", altNames: ["Raum", "Raim"], zhName: "劳姆",
      rankEn: ["Earl"], rankZh: ["伯爵"],
      powers: "窃取珍宝，毁灭城邦。",
      powersEn: "Steals treasures, and destroys cities.",
      desc: "以乌鸦形现身的伯爵。他能窃取王室珍宝、毁灭城市与显贵的尊严，也知晓过去、现在与未来。",
      descEn: "An earl appearing as a crow. He steals royal treasure, destroys cities and the dignity of the great, and knows past, present and future."
    },
    {
      no: 41, name: "Focalor", altNames: ["Forcalor", "Furcalor"], zhName: "佛卡洛",
      rankEn: ["Duke"], rankZh: ["公爵"],
      powers: "掀起风暴，击杀敌人。",
      powersEn: "Raises storms, and slays enemies.",
      desc: "以鹰翼人形现身的公爵。他能掀起风暴、倾覆船只，并杀死敌人——但若无命，他不伤及任何人。",
      descEn: "A duke appearing as a man with griffin's wings. He raises storms, sinks ships and slays enemies — harming none unless commanded."
    },
    {
      no: 42, name: "Vepar", altNames: ["Vephar", "Separ"], zhName: "维帕尔",
      rankEn: ["Duke"], rankZh: ["公爵"],
      powers: "统领水域，引发风暴。",
      powersEn: "Governs waters, and raises storms.",
      desc: "以人鱼形现身的公爵。他统领水域，能引发风暴、掀翻战船，也能使人伤口溃烂生蛆。",
      descEn: "A duke appearing as a mermaid. He governs the waters, raises storms, capsizes ships, and makes wounds fester with worms."
    },
    {
      no: 43, name: "Sabnock", altNames: ["Sabnocke", "Savnok"], zhName: "萨布诺克",
      rankEn: ["Marquis"], rankZh: ["侯爵"],
      powers: "建造塔堡，令伤口溃烂。",
      powersEn: "Builds towers and castles, and festers wounds.",
      desc: "以持剑的狮头士兵形现身的侯爵。他能建造高塔、城堡与城市，并能使人伤口溃烂、受虫蚀之苦。",
      descEn: "A marquis appearing as a lion-headed soldier bearing arms. He builds towers, castles and cities, and makes wounds fester and rot."
    },
    {
      no: 44, name: "Shax", altNames: ["Chax", "Scox"], zhName: "沙克斯",
      rankEn: ["Marquis"], rankZh: ["侯爵"],
      powers: "夺去视听，窃财，寻物。",
      powersEn: "Takes away sight and hearing, steals, and finds things.",
      desc: "以斑鸠形现身的侯爵。他能夺去视听、窃取钱财与马匹，并寻回失物、揭示隐秘。",
      descEn: "A marquis appearing as a stock-dove. He deprives sight and hearing, steals money and horses, finds lost things, and reveals secrets."
    },
    {
      no: 45, name: "Viné", altNames: ["Vine", "Vinea"], zhName: "维涅",
      rankEn: ["King", "Earl"], rankZh: ["王", "伯爵"],
      powers: "揭示隐秘，召唤风暴。",
      powersEn: "Reveals secrets, and summons storms.",
      desc: "以骑黑马、持蝮蛇的狮子形现身的王与伯爵。他能揭示隐秘、预知未来，并召唤风暴与雷雨。",
      descEn: "A king and earl appearing as a lion riding a black horse, bearing a viper. He reveals secrets, foretells the future, and summons storms and rain."
    },
    {
      no: 46, name: "Bifrons", altNames: ["Bifrous", "Bifrovs"], zhName: "比弗隆斯",
      rankEn: ["Earl"], rankZh: ["伯爵"],
      powers: "教占星，移动尸体。",
      powersEn: "Teaches astrology, and moves the dead.",
      desc: "以怪物形现身的伯爵。他教授天文、占星与植物宝石，能移动尸体、点亮墓地的烛火。",
      descEn: "An earl appearing as a monster. He teaches astronomy, astrology, plants and stones, moves the dead, and lights candles over graves."
    },
    {
      no: 47, name: "Uvall", altNames: ["Vual", "Voval", "Wal"], zhName: "乌瓦尔",
      rankEn: ["Duke"], rankZh: ["公爵"],
      powers: "获得爱情，调和敌友。",
      powersEn: "Wins love, and reconciles friends and foes.",
      desc: "以骑骆驼的巨骆驼形现身的公爵。他能使人获得女性的爱情，并使敌友和解。",
      descEn: "A duke appearing as a great camel. He wins the love of women, and reconciles friends and foes."
    },
    {
      no: 48, name: "Haagenti", altNames: ["Hagenti"], zhName: "哈根提",
      rankEn: ["President"], rankZh: ["统领"],
      powers: "化形，授智慧，炼金。",
      powersEn: "Changes form, teaches wisdom, and transmutes.",
      desc: "以鹰翼巨牛形现身的统领。他能使人变形为任何形态，教授智慧，并将酒化为水、水化为酒。",
      descEn: "A president appearing as a great bull with griffin's wings. He changes men into any form, teaches wisdom, and turns wine into water and water into wine."
    },
    {
      no: 49, name: "Crocell", altNames: ["Crokel", "Procell"], zhName: "克罗塞尔",
      rankEn: ["Duke"], rankZh: ["公爵"],
      powers: "教几何，温暖水体。",
      powersEn: "Teaches geometry, and warms waters.",
      desc: "以天使形现身的公爵。他教授几何、数学与隐秘之事，能温暖水体、发出声响。",
      descEn: "A duke appearing as an angel. He teaches geometry, mathematics and secret things, warms waters, and makes sounds."
    },
    {
      no: 50, name: "Furcas", altNames: [], zhName: "佛尔卡斯",
      rankEn: ["Knight"], rankZh: ["骑士"],
      powers: "教哲学、占卜与技艺。",
      powersEn: "Teaches philosophy, astrology and the arts.",
      desc: "以骑苍白马的凶悍老者形现身的骑士。他教授哲学、占星与占卜、逻辑与一切技艺，且现形时不伤人。",
      descEn: "A knight appearing as a fierce old man riding a pale horse. He teaches philosophy, astrology, divination, logic and all arts, harming none."
    },
    {
      no: 51, name: "Balam", altNames: ["Balaam"], zhName: "巴拉姆",
      rankEn: ["King"], rankZh: ["王"],
      powers: "予精准答案，使人隐身。",
      powersEn: "Gives true answers, and makes men invisible.",
      desc: "以三头（牛、人、羊）蛇尾骑熊形现身的王。他能如实回答过去、现在、未来，并使人隐身、机智。",
      descEn: "A king with three heads — bull, man and ram — a serpent's tail, riding a bear. He answers truly of past, present and future, and makes men invisible and witty."
    },
    {
      no: 52, name: "Alloces", altNames: ["Alocer", "Allocer"], zhName: "阿罗克斯",
      rankEn: ["Duke"], rankZh: ["公爵"],
      powers: "教天文与秘术。",
      powersEn: "Teaches astronomy and the secret arts.",
      desc: "以持枪骑巨马的士兵形现身的公爵。他教授天文与一切秘术，并赐予良善的魔宠。",
      descEn: "A duke appearing as a soldier riding a great horse. He teaches astronomy and all secret arts, and grants good familiars."
    },
    {
      no: 53, name: "Caim", altNames: ["Camio", "Caym"], zhName: "凯因",
      rankEn: ["President"], rankZh: ["统领"],
      powers: "通鸟语水声，授辩论。",
      powersEn: "Understands the voices of birds and waters.",
      desc: "以黑鸟形现身的统领。他能听懂鸟兽之声、水声，给出真实答案，并使人在辩论中胜出。",
      descEn: "A president appearing as a black bird. He understands the voices of birds and beasts and the sound of waters, answers truly, and makes men prevail in debate."
    },
    {
      no: 54, name: "Murmur", altNames: ["Murmus"], zhName: "穆尔穆尔",
      rankEn: ["Duke", "Earl"], rankZh: ["公爵", "伯爵"],
      powers: "教哲学，召唤亡灵。",
      powersEn: "Teaches philosophy, and summons the dead.",
      desc: "以骑秃鹫、号角齐鸣的士兵形现身的公爵与伯爵。他教授哲学、召唤亡灵现身并作答。",
      descEn: "A duke and earl appearing as a soldier riding a vulture, with trumpets sounding. He teaches philosophy, and summons the dead to answer."
    },
    {
      no: 55, name: "Orobas", altNames: [], zhName: "欧若巴斯",
      rankEn: ["Prince"], rankZh: ["亲王"],
      powers: "揭示隐秘，不欺不伤。",
      powersEn: "Reveals secrets, and deceives no one.",
      desc: "以骏马形现身的亲王。他如实揭示过去、现在、未来，忠于召唤者、不欺骗也不伤害。",
      descEn: "A prince appearing as a noble horse. He reveals the past, present and future truthfully, loyal to the summoner, deceiving and harming no one."
    },
    {
      no: 56, name: "Gremory", altNames: ["Gomory", "Gemory"], zhName: "格莫瑞",
      rankEn: ["Duke"], rankZh: ["公爵"],
      powers: "知过去未来，寻宝获爱。",
      powersEn: "Knows past and future, finds treasure, and wins love.",
      desc: "以骑骆驼的美丽女子形现身的公爵。他讲述过去与未来、寻找隐藏宝藏，并赐予女子的爱情。",
      descEn: "A duke appearing as a beautiful woman riding a camel. He tells of past and future, finds hidden treasure, and grants the love of women."
    },
    {
      no: 57, name: "Ose", altNames: ["Osé", "Voso", "Oso"], zhName: "欧塞",
      rankEn: ["President"], rankZh: ["统领"],
      powers: "化形，授学问。",
      powersEn: "Changes form, and teaches the sciences.",
      desc: "先化豹形、后化人形的统领。他教授文理科学，能揭示隐秘，并将人变形为任意形态。",
      descEn: "A president appearing first as a leopard, then as a man. He teaches the liberal sciences, reveals secrets, and changes men into any shape."
    },
    {
      no: 58, name: "Amy", altNames: ["Avnas", "Auns"], zhName: "艾米",
      rankEn: ["President"], rankZh: ["统领"],
      powers: "教天文，寻宝。",
      powersEn: "Teaches astronomy, and finds treasure.",
      desc: "以火焰形现身的统领。他教授天文与其他科学，赐予良善的魔宠，并能寻回被守护的宝藏。",
      descEn: "A president appearing as a flame. He teaches astronomy and other sciences, grants good familiars, and finds treasures guarded by spirits."
    },
    {
      no: 59, name: "Orias", altNames: ["Oriax"], zhName: "欧里亚斯",
      rankEn: ["Marquis"], rankZh: ["侯爵"],
      powers: "教占星，赐予高位。",
      powersEn: "Teaches astrology, and grants dignity.",
      desc: "以骑骏马、持双蛇、尾如狮的狮面人形现身的侯爵。他教授占星、行星宫位，赐予高位与荣誉。",
      descEn: "A marquis appearing as a lion-faced man riding a horse, bearing two serpents. He teaches astrology and the houses of the planets, granting dignity and honour."
    },
    {
      no: 60, name: "Vapula", altNames: ["Naphula", "Vapul"], zhName: "瓦普拉",
      rankEn: ["Duke"], rankZh: ["公爵"],
      powers: "授工艺与哲学。",
      powersEn: "Teaches philosophy and all crafts.",
      desc: "以鹰翼狮子形现身的公爵。他教授哲学、机械与一切技艺，使人精于工艺。",
      descEn: "A duke appearing as a lion with griffin's wings. He teaches philosophy, mechanics and all crafts, making men skilled in workmanship."
    },
    {
      no: 61, name: "Zagan", altNames: ["Zagam"], zhName: "扎甘",
      rankEn: ["King", "President"], rankZh: ["王", "统领"],
      powers: "使酒变水，点化金属。",
      powersEn: "Turns wine into water, and transmutes metals.",
      desc: "以鹰翼狮首牛形现身的王与统领。他能将酒化为水、水化为酒，也能将金属点化成金。",
      descEn: "A king and president appearing as a bull with griffin's wings and a lion's head. He turns wine into water and water into wine, and transmutes metals to gold."
    },
    {
      no: 62, name: "Valac", altNames: ["Volac", "Valu", "Ualac"], zhName: "瓦拉克",
      rankEn: ["President"], rankZh: ["统领"],
      powers: "赐予魔宠，寻找宝藏。",
      powersEn: "Grants familiars, and finds treasure.",
      desc: "以骑双头龙的天使形现身的统领。他能如实回答隐秘问题，寻得隐藏宝藏，并赐予魔宠。",
      descEn: "A president appearing as an angel riding a two-headed dragon. He answers secret questions truly, finds hidden treasure, and grants familiars."
    },
    {
      no: 63, name: "Andras", altNames: [], zhName: "安德拉斯",
      rankEn: ["Marquis"], rankZh: ["侯爵"],
      powers: "挑起纷争，弑敌。",
      powersEn: "Sows discord, and slays enemies.",
      desc: "以持剑、骑黑狼的乌鸦头天使形现身的侯爵。他能挑起纷争、制造仇恨，并能使召唤者死于战斗。",
      descEn: "A marquis appearing as an angel with a raven's head, riding a black wolf, bearing a sword. He sows discord and hatred, and can bring the summoner to death in battle."
    },
    {
      no: 64, name: "Flauros", altNames: ["Haures", "Hauras"], zhName: "弗劳罗斯",
      rankEn: ["Duke"], rankZh: ["公爵"],
      powers: "揭示真相，焚毁敌人。",
      powersEn: "Reveals truth, and burns enemies.",
      desc: "以豹形现身的公爵。他能如实回答过去、现在、未来，也能以火焰焚毁敌人的城市。",
      descEn: "A duke appearing as a leopard. He answers truly of past, present and future, and can burn the cities of enemies with fire."
    },
    {
      no: 65, name: "Andrealphus", altNames: ["Androalphus"], zhName: "安德雷安富",
      rankEn: ["Marquis"], rankZh: ["侯爵"],
      powers: "教几何、测量与天文。",
      powersEn: "Teaches geometry, measurement and astronomy.",
      desc: "以孔雀形现身的侯爵。他教授几何、测量与天文，也能使人变形为鸟。",
      descEn: "A marquis appearing as a peacock. He teaches geometry, measurement and astronomy, and can change men into birds."
    },
    {
      no: 66, name: "Cimeies", altNames: ["Kimaris", "Cimejes"], zhName: "锡蒙力",
      rankEn: ["Marquis"], rankZh: ["侯爵"],
      powers: "授文法逻辑，寻找失物。",
      powersEn: "Teaches grammar and logic, and finds lost things.",
      desc: "以骑黑马的英勇士兵形现身的侯爵。他教授文法、逻辑与修辞，寻找失物，并授予高位。",
      descEn: "A marquis appearing as a valiant soldier riding a black horse. He teaches grammar, logic and rhetoric, finds lost things, and grants dignity."
    },
    {
      no: 67, name: "Amdusias", altNames: ["Amduscias", "Amdukias"], zhName: "安度西亚斯",
      rankEn: ["Duke"], rankZh: ["公爵"],
      powers: "召唤乐音，令树弯曲。",
      powersEn: "Summons music, and bends trees.",
      desc: "以独角兽形现身的公爵。他能召唤乐音、使树木弯曲，并赐予魔宠。",
      descEn: "A duke appearing as a unicorn. He summons music, makes trees bend, and grants familiars."
    },
    {
      no: 68, name: "Belial", altNames: [], zhName: "彼列",
      rankEn: ["King"], rankZh: ["王"],
      powers: "授高位，使人善辩。",
      powersEn: "Grants dignity, and makes men eloquent.",
      desc: "以骑火车的俊美天使形现身的王。他授予高位与荣誉，赐予良善的魔宠，并使人雄辩。",
      descEn: "A king appearing as a beautiful angel riding a chariot of fire. He grants dignity and honour, bestows good familiars, and makes men eloquent."
    },
    {
      no: 69, name: "Decarabia", altNames: ["Carabia"], zhName: "迪卡拉比亚",
      rankEn: ["Marquis"], rankZh: ["侯爵"],
      powers: "知草药宝石，化身飞鸟。",
      powersEn: "Knows herbs and stones, and takes the form of birds.",
      desc: "以五角星形现身的侯爵。他知晓一切草药与宝石的效用，也能化身为鸟。",
      descEn: "A marquis appearing as a pentagram. He knows the virtues of all herbs and stones, and can take the form of birds."
    },
    {
      no: 70, name: "Seere", altNames: ["Sear", "Seir"], zhName: "西尔",
      rankEn: ["Prince"], rankZh: ["亲王"],
      powers: "瞬行世界，寻宝。",
      powersEn: "Travels the world, and finds treasure.",
      desc: "以骑飞马的俊美之人形现身的亲王。他能瞬间载人周游世界，寻得宝藏，揭示隐秘。",
      descEn: "A prince appearing as a beautiful man riding a winged horse. He carries men around the world in an instant, finds treasure, and reveals secrets."
    },
    {
      no: 71, name: "Dantalion", altNames: [], zhName: "但他林",
      rankEn: ["Duke"], rankZh: ["公爵"],
      powers: "洞悉人心，显现幻象。",
      powersEn: "Knows the thoughts of all, and shows visions.",
      desc: "以多副男女面孔现身的公爵。他知晓一切人的思想，能改变人的心意、显现幻象。",
      descEn: "A duke appearing with many faces, both of men and women. He knows the thoughts of all, changes their minds, and shows visions."
    },
    {
      no: 72, name: "Andromalius", altNames: [], zhName: "安多玛利乌斯",
      rankEn: ["Earl"], rankZh: ["伯爵"],
      powers: "追回失窃，惩处盗贼。",
      powersEn: "Recovers stolen goods, and punishes thieves.",
      desc: "以持巨蛇的俊美之人形现身的伯爵。他能追回失窃之物、揭发盗贼，使一切罪人受惩。",
      descEn: "An earl appearing as a handsome man holding a great serpent. He recovers stolen goods, exposes thieves, and sees the guilty punished."
    }
  ];

  // 小钥匙五部书
  const BOOKS = [
    {
      key: "goetia",
      titleEn: "Ars Goetia",
      titleZh: "召唤术",
      summary: "小钥匙中最著名的一部，收录 72 位恶魔的名讳、位阶、封印与召唤法，是后世恶魔学的母本。",
      summaryEn: "The most famous book of the Lemegeton: the seventy-two spirits with their ranks, seals and rites — the source of all later demonology."
    },
    {
      key: "theurgia",
      titleEn: "Ars Theurgia-Goetia",
      titleZh: "神术召唤",
      summary: "记述 31 位空气之灵及其众多下属，兼具天使与精灵性质，分属四方。",
      summaryEn: "Thirty-one aerial spirits with their legions, mingling angelic and elemental natures, ruling the four quarters."
    },
    {
      key: "paulina",
      titleEn: "Ars Paulina",
      titleZh: "保罗术",
      summary: "与黄道星座和行星时辰相关的天使召唤，对应日间与夜间各十二宫。",
      summaryEn: "Angelic conjurations tied to the zodiac and planetary hours, for the day and night signs."
    },
    {
      key: "almadel",
      titleEn: "Ars Almadel",
      titleZh: "阿尔马德尔",
      summary: "四方四天使的召唤，借由一方「阿尔马德尔」蜡板进行沟通。",
      summaryEn: "The four angels of the four quarters, invoked through a waxen tablet called the Almadel."
    },
    {
      key: "notoria",
      titleEn: "Ars Notoria",
      titleZh: "诺托里亚",
      summary: "五部中最古老的一部，属祈祷求知的「所罗门梦启」，求的是知识、口才与记忆。",
      summaryEn: "The oldest of the five, a cycle of prayers for knowledge, eloquence and memory — the 'Notory Art' of Solomon."
    }
  ];

  // 卡巴拉 72 天使（Shem HaMephorash）。属性为通行诠释，各传统略有差异。
  // 度数由 no 计算：5°×(no-1) 至 5°×no。
  const ANGELS = [
    { no: 1, name: "Vehuiah", zhName: "韦胡雅", attribute: "意志与开端", attributeEn: "Will and new beginnings" },
    { no: 2, name: "Ieliel", zhName: "耶利尔", attribute: "清晰与灵感", attributeEn: "Clarity and inspiration" },
    { no: 3, name: "Sitael", zhName: "西塔尔", attribute: "建设与庇护", attributeEn: "Building and protection" },
    { no: 4, name: "Elemiah", zhName: "埃勒米亚", attribute: "揭示隐秘", attributeEn: "Revealing what is hidden" },
    { no: 5, name: "Mahasiah", zhName: "玛哈西亚", attribute: "纠正谬误", attributeEn: "Rectifying errors" },
    { no: 6, name: "Lelahel", zhName: "莱拉赫尔", attribute: "治愈与光明", attributeEn: "Healing and light" },
    { no: 7, name: "Achaiah", zhName: "阿卡雅", attribute: "耐心与洞见", attributeEn: "Patience and insight" },
    { no: 8, name: "Cahetel", zhName: "卡赫特尔", attribute: "驱邪与赐福", attributeEn: "Banishment and blessing" },
    { no: 9, name: "Haziel", zhName: "哈兹耶尔", attribute: "怜悯与宽恕", attributeEn: "Mercy and forgiveness" },
    { no: 10, name: "Aladiah", zhName: "阿拉迪亚", attribute: "治愈与赦免", attributeEn: "Healing and pardon" },
    { no: 11, name: "Lauviah", zhName: "劳维亚", attribute: "胜利与声望", attributeEn: "Victory and renown" },
    { no: 12, name: "Hahaiah", zhName: "哈哈雅", attribute: "庇护与梦境", attributeEn: "Shelter and dreams" },
    { no: 13, name: "Iezalel", zhName: "耶扎勒尔", attribute: "忠诚与和解", attributeEn: "Loyalty and reconciliation" },
    { no: 14, name: "Mebahel", zhName: "梅巴赫尔", attribute: "真理与正义", attributeEn: "Truth and justice" },
    { no: 15, name: "Hariel", zhName: "哈里尔", attribute: "净化与洞察", attributeEn: "Purification and insight" },
    { no: 16, name: "Hekamiah", zhName: "赫卡米亚", attribute: "忠诚与守护", attributeEn: "Fidelity and protection" },
    { no: 17, name: "Lauviah", zhName: "劳维亚", attribute: "启示与预知", attributeEn: "Revelation and foreknowledge" },
    { no: 18, name: "Caliel", zhName: "卡利尔", attribute: "正义与真相", attributeEn: "Justice and truth" },
    { no: 19, name: "Leuviah", zhName: "勒乌维亚", attribute: "记忆与理解", attributeEn: "Memory and understanding" },
    { no: 20, name: "Pahaliah", zhName: "帕哈利亚", attribute: "救赎与贞洁", attributeEn: "Redemption and chastity" },
    { no: 21, name: "Nelchael", zhName: "内尔卡赫尔", attribute: "学习与天文", attributeEn: "Learning and astronomy" },
    { no: 22, name: "Yeiayel", zhName: "耶亚耶尔", attribute: "声望与财富", attributeEn: "Renown and wealth" },
    { no: 23, name: "Melahel", zhName: "梅拉赫尔", attribute: "草药与疗愈", attributeEn: "Herbs and healing" },
    { no: 24, name: "Haheuiah", zhName: "哈胡雅", attribute: "保护与驱邪", attributeEn: "Protection and exorcism" },
    { no: 25, name: "Nith-Haiah", zhName: "尼特哈雅", attribute: "智慧与启示", attributeEn: "Wisdom and revelation" },
    { no: 26, name: "Haaiah", zhName: "哈阿雅", attribute: "正义与和平", attributeEn: "Justice and peace" },
    { no: 27, name: "Yerathel", zhName: "耶拉特尔", attribute: "传播光明", attributeEn: "Spreading light" },
    { no: 28, name: "Seheiah", zhName: "塞赫雅", attribute: "长寿与守护", attributeEn: "Longevity and protection" },
    { no: 29, name: "Reiyel", zhName: "雷伊尔", attribute: "释放与解脱", attributeEn: "Release and liberation" },
    { no: 30, name: "Omael", zhName: "奥玛尔", attribute: "忍耐与繁育", attributeEn: "Patience and fertility" },
    { no: 31, name: "Lecabel", zhName: "勒卡贝尔", attribute: "智慧与才艺", attributeEn: "Wisdom and talent" },
    { no: 32, name: "Vasariah", zhName: "瓦萨里亚", attribute: "仁慈与宽恕", attributeEn: "Mercy and clemency" },
    { no: 33, name: "Yehuiah", zhName: "耶胡雅", attribute: "服从与忠诚", attributeEn: "Obedience and loyalty" },
    { no: 34, name: "Lehahiah", zhName: "勒哈哈雅", attribute: "平和与守护", attributeEn: "Calm and guardianship" },
    { no: 35, name: "Chavakiah", zhName: "查瓦基亚", attribute: "和解与重建", attributeEn: "Reconciliation and rebuilding" },
    { no: 36, name: "Menadel", zhName: "梅纳德尔", attribute: "追寻失落之物", attributeEn: "Recovering what is lost" },
    { no: 37, name: "Aniel", zhName: "阿尼尔", attribute: "突破与勇气", attributeEn: "Breakthrough and courage" },
    { no: 38, name: "Haamiah", zhName: "哈阿米亚", attribute: "寻求真理", attributeEn: "Seeking the truth" },
    { no: 39, name: "Rehael", zhName: "雷哈埃尔", attribute: "孝道与健康", attributeEn: "Filial piety and health" },
    { no: 40, name: "Ieiazel", zhName: "耶亚泽尔", attribute: "慰藉与自由", attributeEn: "Consolation and freedom" },
    { no: 41, name: "Hahahel", zhName: "哈哈赫尔", attribute: "使命与信仰", attributeEn: "Vocation and faith" },
    { no: 42, name: "Mikael", zhName: "米凯尔", attribute: "政治与治理", attributeEn: "Politics and governance" },
    { no: 43, name: "Veuliah", zhName: "韦乌利亚", attribute: "繁荣与成功", attributeEn: "Prosperity and success" },
    { no: 44, name: "Yelahiah", zhName: "耶拉希亚", attribute: "胜利与保护", attributeEn: "Victory and protection" },
    { no: 45, name: "Sealiah", zhName: "塞阿利亚", attribute: "活力与意志", attributeEn: "Vitality and will" },
    { no: 46, name: "Ariel", zhName: "阿里尔", attribute: "揭示与感恩", attributeEn: "Revelation and gratitude" },
    { no: 47, name: "Asaliah", zhName: "阿萨利亚", attribute: "真理与公正", attributeEn: "Truth and fairness" },
    { no: 48, name: "Mihael", zhName: "米哈埃尔", attribute: "婚姻与和谐", attributeEn: "Marriage and harmony" },
    { no: 49, name: "Vehuel", zhName: "韦胡尔", attribute: "智慧与丰盛", attributeEn: "Wisdom and abundance" },
    { no: 50, name: "Daniel", zhName: "丹尼尔", attribute: "慈悲与慰藉", attributeEn: "Mercy and consolation" },
    { no: 51, name: "Hahasiah", zhName: "哈哈西亚", attribute: "医学与普世", attributeEn: "Medicine and universality" },
    { no: 52, name: "Imamiah", zhName: "伊玛米亚", attribute: "宽恕与旅程", attributeEn: "Pardon and journey" },
    { no: 53, name: "Nanael", zhName: "纳纳埃尔", attribute: "灵性沟通", attributeEn: "Spiritual communication" },
    { no: 54, name: "Nithael", zhName: "尼塔尔", attribute: "永生与青春", attributeEn: "Immortality and youth" },
    { no: 55, name: "Mebahiah", zhName: "梅巴希亚", attribute: "智识与奉献", attributeEn: "Intellect and devotion" },
    { no: 56, name: "Poyel", zhName: "波耶尔", attribute: "雄辩与名望", attributeEn: "Eloquence and fame" },
    { no: 57, name: "Nemamiah", zhName: "内玛米亚", attribute: "洞察与正义", attributeEn: "Discernment and justice" },
    { no: 58, name: "Yeialel", zhName: "耶亚勒尔", attribute: "勇气与治愈", attributeEn: "Courage and healing" },
    { no: 59, name: "Harahel", zhName: "哈拉赫尔", attribute: "智慧与传承", attributeEn: "Wisdom and legacy" },
    { no: 60, name: "Mitzrael", zhName: "米茨拉尔", attribute: "疗愈心智", attributeEn: "Healing the mind" },
    { no: 61, name: "Umabel", zhName: "乌玛贝尔", attribute: "友谊与天文", attributeEn: "Friendship and astronomy" },
    { no: 62, name: "Iahhel", zhName: "伊阿赫尔", attribute: "智慧与沉思", attributeEn: "Wisdom and contemplation" },
    { no: 63, name: "Anauel", zhName: "阿纳维尔", attribute: "财富与商业", attributeEn: "Wealth and commerce" },
    { no: 64, name: "Mehiel", zhName: "梅希尔", attribute: "灵感与文学", attributeEn: "Inspiration and letters" },
    { no: 65, name: "Damabiah", zhName: "达玛比亚", attribute: "智慧与航海", attributeEn: "Wisdom and seafaring" },
    { no: 66, name: "Manakel", zhName: "玛纳克尔", attribute: "安抚与驱散", attributeEn: "Soothing and dispelling" },
    { no: 67, name: "Eiael", zhName: "埃亚尔", attribute: "长寿与神秘", attributeEn: "Longevity and mystery" },
    { no: 68, name: "Habuhiah", zhName: "哈布希亚", attribute: "疗愈与农业", attributeEn: "Healing and agriculture" },
    { no: 69, name: "Rochel", zhName: "罗赫尔", attribute: "找回失落之物", attributeEn: "Finding what is lost" },
    { no: 70, name: "Iabamiah", zhName: "亚巴米亚", attribute: "自然与重生", attributeEn: "Nature and rebirth" },
    { no: 71, name: "Haiaiel", zhName: "海亚尔", attribute: "勇气与保护", attributeEn: "Courage and protection" },
    { no: 72, name: "Mumiah", zhName: "穆米亚", attribute: "终结与启示", attributeEn: "Completion and revelation" }
  ];

  // 72 天使希伯来名（Shem HaMephorash 标准重构：三字母根 + אל/יה 后缀）
  // 各传统拼写略有差异；此为通行写法。
  const HEBREW = [
    "והויה", "יליאל", "סיטאל", "עלמיה", "מהשיה", "ללהאל",
    "אכאיה", "כהתאל", "הזיאל", "אלדיה", "לאויה", "ההעיה",
    "יזלאל", "מבהאל", "הריאל", "הקמיה", "לוויה", "כליאל",
    "לוויה", "פהליה", "נלכאל", "יייאל", "מלהאל", "חהויה",
    "נתהיה", "האאיה", "ירתאל", "שאהיה", "רייאל", "אומאל",
    "לכבאל", "ושריה", "יהויה", "להחיה", "כווקיה", "מנהאל",
    "אניאל", "העמיה", "רהאל", "ייזאל", "הההאל", "מיכאל",
    "ווליה", "ילהיה", "סאליה", "עריאל", "עשליה", "מיהאל",
    "והואל", "דניאל", "ההשיה", "עממיה", "ננאל", "ניתאל",
    "מבההיה", "פויאל", "נממיה", "ייאלל", "הרהאל", "מצראל",
    "אומבאל", "יההאל", "ענואל", "מחיאל", "דמביה", "מנקאל",
    "איעאל", "חבויה", "רחאל", "יבמיה", "הייאל", "מומיה"
  ];

  return { DEMONS, BOOKS, ANGELS, HEBREW };
});
