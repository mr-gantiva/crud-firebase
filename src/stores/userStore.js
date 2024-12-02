import { defineStore } from "pinia";
import { ref } from "vue";
import { db } from "../firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

export const useUserStore = defineStore("userStore", () => {
  const users = ref([]);

  const fetchUsers = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      users.value = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    } catch (error) {
      console.error("Error al obtener los usuarios", error);
    }
  };

  const addUser = async (newUser) => {
    try {
      await addDoc(collection(db, "users"), newUser);
      await fetchUsers();
    } catch (error) {
      console.error("Error al agregar un usuario", error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      await deleteDoc(doc(db, "users", userId));
      await fetchUsers();
    } catch (error) {
      console.error("Error al eliminar un usuario", error);
    }
  };

  return { users, fetchUsers, addUser, deleteUser };

  //   state: () => ({
  //     users: [],
  //   }),

  //   actions: {
  //     async fetchUsers() {
  //       const querySnapshot = await getDocs(collection(db, "users"));
  //       this.users = querySnapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         ...doc.data(),
  //       }));

  //       console.log(users.value);
  //     },

  //     async addUser(newUser) {
  //       await addDoc(collection(db, "users"), newUser);
  //       this.fetchUsers();
  //     },

  //     async deleteUser(userId) {
  //       await deleteDoc(doc(db, "users", userId));
  //       this.fetchUsers();
  //     },
  //   },
});
