#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";

let playerName;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r,ms))

async function welcome() {
  console.log(chalk.yellowBright("hey~~~😏"))
  const rainbowTitle = chalkAnimation.rainbow(
    "SWF 熱知識大挑戰! \n"
  )
  await sleep();
  rainbowTitle.stop();

  console.log(`
  ${chalk.bgBlue('How to play🎮')}
  I am a process on your computer
  If you get any question wrong I will be ${chalk.bgRed("killed💀")}
  So get all the questions right...
  不要傷害我QAQ!!!
  `)
}


async function askName() {
  const answers = await inquirer.prompt({
    name: "player_name",
    type: "input",
    message: "親故的大名是？(English Name Plz)",
    default(){
      return "斯烏帕狂粉"
    }
  })
  playerName = answers.player_name
}


async function customMultipleQuestion(name,message,choices,answer){
  const answers = await inquirer.prompt({
    name: name,
    type:"list" ,
    message: message,
    choices: choices
  })
  return handleAnswer(answers[name] ==answer)
}
async function ifPlayerWantBonus(){
  const answers = await inquirer.prompt({
    name: "bonus",
    type:"list" ,
    message: `恭喜你${playerName} 全部答對！斯烏帕狂粉認證！想要挑戰CP Bonus嗎？ `,
    choices: ["Yes","NO"],
    default(){
      return "Yes"
    }
  })
  return answers["bonus"]==="Yes"
}
async function handleAnswer(isCorrect){
  const spinner = createSpinner('確認答案中...✍️').start()
  await sleep()
  if(isCorrect){
    spinner.success({ text: `잘했다! Nice work😉 ${playerName}. 正答！`})
  }else{
    spinner.error({ text: `🤡🤡🤡GG, you lose ${playerName}!!!`})
    //process 0 -> success 1 -> errors
    process.exit(1)
  }
}
function winner(){
  console.clear()
  const msg = `Congrats , ${playerName} ! \n $1,000,000 WON`
  const swfMsg = `We Will Be the \n Audience  Forever!`
  figlet(msg,(err, data) => {
    console.log(gradient.pastel.multiline(data))
  })
  figlet(swfMsg,(err, data) => {
    console.log(gradient.rainbow.multiline(data))
  })
}
await welcome()
await askName()
await customMultipleQuestion("question_1","常常可以看見一群E型領隊們中的I型Noze😺獨自害羞，請問Noze여보的mbti是？",
["ISFJ", "ISTJ", "ISFP", "INFP"],"ISFP")
await sleep(500)
await customMultipleQuestion("question_2","既可愛又帥氣的wuli Aiki🐥，年輕時當過什麼職業呢？",
["歌唱老師", "瑜伽老師", "安親班老師", "Gucci櫃姐"],"瑜伽老師")
await sleep(500)
await customMultipleQuestion("question_3","超級顯眼的變速舞蹈風格-快快！慢～的天才少女軍兒🐯,是在何時加入了舞團Just Jerk？",
["2013", "2014", "2015", "2016"],"2014")
await sleep(500)
await customMultipleQuestion("question_4","在Monika舉辦性感舞蹈大賽，Gabee做出了名動作土耳其冰淇淋🍦，Gabee得到的名次是？",
["第1名","第2名","第3名","沒得獎"],"第1名")
await customMultipleQuestion("question_5","節目中有一幕是Rihey抬起手捂著嘴巴的兇狠表情💪，其有趣的反轉事實是？",
["李黑正在喝珍奶", "李黑在唱Rap", "李黑正在吃紫菜飯包", "李黑正在吃炒年糕"],"李黑正在吃紫菜飯包")
await sleep(500)
await customMultipleQuestion("question_6","提振整個隊伍士氣，舞蹈實力讓人WOW、幽默感爆棚的崔姐🍺，是韓國哪個地方出身？",
["首爾", "大邱", "濟州島", "釜山"],"釜山")
await sleep(500)
await customMultipleQuestion("question_7","激起粉絲討罵慾的Monika🦁，節目中也說出許多金句，請問下列何者言自莫教授？",
["做得好！姐姐幫你贏回來！", "Noze xi沒關係嗎?", "看好了！這是姐姐們的戰爭！", "你24歲在做什麼？"],"做得好！姐姐幫你贏回來！")
await sleep(500)
await customMultipleQuestion("question_8","表演時霸氣，off stage時可可愛愛的Honey J🍯，最喜歡的卡通人物是？",
["白雪公主", "人魚公主", "小熊維尼", "灰姑娘"],"人魚公主")
await sleep(500)
const ifBonus = await ifPlayerWantBonus()
if(!ifBonus){
  winner()
}else{
  await customMultipleQuestion("question_9","蜜姐對李惠仁李黑取的暱稱是？",
  ["狗狗", "笨熊", "笨蛋", "貓貓"],"笨熊")
  await sleep(500)
  await customMultipleQuestion("question_10","堪稱世紀經典的李黑Honey J Battle畫面是在SWF中第幾集完整播出？",
  ["EP 1","EP 2","EP 3","EP 4"],"EP 2")
  await sleep(500)
  await customMultipleQuestion("question_11","粉絲問Noze和Aiki交往多久了，貓貓回：？",
  ["是秘密🤫","歐膩是花心大蘿蔔","歐膩還沒告白呢","哎呦몰라>///<"],"歐膩還沒告白呢")
  await sleep(500)
  await customMultipleQuestion("question_12","Molip的最想擺脫但又無法擺脫的稱號？",
  ["special one","老夫婦","爸爸媽媽","戀人關係"],"老夫婦")
  await sleep(500)
  winner()
}


