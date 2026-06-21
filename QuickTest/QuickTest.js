import db from "../db/db.js";

let myDb = new db();

async function GetOfferStr() {
  let myData = await myDb.GetData("voice_chat/offer");
  console.log("offer:", myData);
  return myData;
}

async function GetAnswerStr() {
  let myData = await myDb.GetData("voice_chat/answer");
  console.log("answer:", myData);
  return myData;
}

async function SendOfferStr() {
  let myData = await myDb.WriteData("voice_chat/offer", "this is an offer");
  console.log("sent offer:", myData);
  return myData;
}

async function SendAnswerStr() {
  let myData = await myDb.WriteData("voice_chat/answer", "this is answer");
  console.log("sent answer:", myData);
  return myData;
}

function GetTimeStamp() {
  return new Date().toLocaleString();
}

async function Run() {
  await SendOfferStr();
  await SendAnswerStr();

  let myOffer = await GetOfferStr();
  let myAnswer = await GetAnswerStr();

  let myDateTime = GetTimeStamp();

  console.log(`${myDateTime}, myOffer: ${myOffer}`);
  console.log(`${myDateTime}, myAnswer: ${myAnswer}`);
}

Run();