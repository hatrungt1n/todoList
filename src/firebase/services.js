import {
  collection,
  doc,
  orderBy,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
  query,
} from "firebase/firestore";
import { db } from "./config";

export const fetchPost = async () => {
  return await getDocs(
    query(collection(db, "tasks"), orderBy("timestamp", "desc"))
  ).then((querySnapshot) => {
    const newData = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return newData;
  });
};

export const addNewDoc = async (e, taskTitle, taskDes, date, priority) => {
  e.preventDefault();

  try {
    const docRef = await addDoc(collection(db, "tasks"), {
      title: taskTitle,
      description: taskDes,
      date: date,
      priority: priority,
      timestamp: serverTimestamp(),
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const updateCurrentDoc = async (
  id,
  newTaskTitle,
  newTaskDes,
  newDate,
  newPriority
) => {
  try {
    await updateDoc(doc(db, `tasks/${id}`), {
      title: newTaskTitle,
      description: newTaskDes,
      date: newDate,
      priority: newPriority,
    });
    console.log("Document updated with ID: ", id);
  } catch (e) {
    console.error("Error updating document: ", e);
  }
};

export const deleteCurrentDoc = (id) => {
  try {
    deleteDoc(doc(db, `tasks/${id}`));
    console.log(`Document ${id} is deleted`);
  } catch (e) {
    console.error("Error deleting document: ", e);
  }
};
