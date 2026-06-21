  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
  import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";
  // import db from "../db/db.js";


// Your config (fixed)
const firebaseConfig = {
  apiKey: "AIzaSyB8xBJ09Oua24wfMFfjptpWTNdYeH7lZ-8",
  authDomain: "kflash-a660b.firebaseapp.com",
  databaseURL: "https://kflash-a660b-default-rtdb.firebaseio.com",
  projectId: "kflash-a660b",
  storageBucket: "kflash-a660b.firebasestorage.app",
  messagingSenderId: "1062304187489",
  appId: "1:1062304187489:web:e57fd914a967b5eff99620"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Get database
const db = getDatabase(app);

// ✅ Create listener
const offerRef = ref(db, "voice_chat/offer");

onValue(offerRef, (snapshot) => {
  const data = snapshot.val();
  console.log("🔥 Offer updated:", data);
});




// let myDb = new db();

// async function GetOfferStr() {
//   let myData = await myDb.GetData("voice_chat/offer");
//   console.log("offer:", myData);
//   return myData;
// }

// async function GetAnswerStr() {
//   let myData = await myDb.GetData("voice_chat/answer");
//   console.log("answer:", myData);
//   return myData;
// }

// async function SendOfferStr() {
//   let myData = await myDb.WriteData("voice_chat/offer", "this is an offer");
//   console.log("sent offer:", myData);
//   return myData;
// }

// async function SendAnswerStr() {
//   let myData = await myDb.WriteData("voice_chat/answer", "this is answer");
//   console.log("sent answer:", myData);
//   return myData;
// }

// function GetTimeStamp() {
//   return new Date().toLocaleString();
// }

// async function Run() {
//   await SendOfferStr();
//   await SendAnswerStr();

//   let myOffer = await GetOfferStr();
//   let myAnswer = await GetAnswerStr();

//   let myDateTime = GetTimeStamp();

//   console.log(`${myDateTime}, myOffer: ${myOffer}`);
//   console.log(`${myDateTime}, myAnswer: ${myAnswer}`);
// }

// Run();