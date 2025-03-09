import { child, get, ref } from "firebase/database";
import { useContext, useEffect, useState } from "react";
import { database } from "../../firebase/firebase";
import dayjs from "dayjs";
import AuthContext from "../../context/auth/auth.jsx";

const useStorageFirebase = () => {
  const { userEmail } = useContext(AuthContext);
  const [savedCurrentEntry, setSavedCurrentEntry] = useState(null);

  useEffect(() => {
    const dbRef = ref(database);
    get(child(dbRef, `currentEnties/${userEmail.replaceAll(".", "_")}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const currentDate = dayjs();
          const startTimeEntry = dayjs(snapshot.val().startTime);
          const differSeconds = currentDate.diff(startTimeEntry, "s");
          setSavedCurrentEntry({ ...snapshot.val(), duration: differSeconds });
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return { savedCurrentEntry };
};

export default useStorageFirebase;
