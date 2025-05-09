/*
import firebase from "@firebase_config";
import {
  collection,
  doc,
  addDoc,
  getDocs,
  query,
  where,
  getFirestore,
  getDoc,
  setDoc,
  updateDoc, deleteDoc, orderBy
} from "@firebase/firestore";

import {webcrypto} from "crypto";

const db = getFirestore(firebase);

const DB_NAME = "messages"

export async function getMessage(uid) {
    let doc = await getDoc(doc(db, DB_NAME, uid));
    return doc.data();
}


export async function getAllMessage(page, size) {
  let doc = await getDoc(doc(db, DB_NAME, uid));
  return doc.data();
}

export async function saveMessage({name, email, content}) {
  let uid = crypto.randomUUID()
  let result = await setDoc(doc(db, DB_NAME, uid.toString()), {
    id: uid.toString(),
    name: name,
    email: email,
    content: content,
  })
}
 */