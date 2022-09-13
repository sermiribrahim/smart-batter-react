import { doc, getDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../services/firebase";

const getAdmin = (userId, setAdmin) => {
  const docRef = doc(db, "admin", userId);
  getDoc(docRef)
    .then((d) => {
      let data = d.data();
      console.log("getAdmin", data);
      if (data === undefined) {
        setAdmin(data);
      } else {
        // sessionStorage.setItem("userId", userId);
        // sessionStorage.setItem("role", 1);
        // authCtx.setUser(data);
        // authCtx.setRole("admin");
        // authCtx.setIsLoggedIn(true);
        // // navigate to home page
        // navigate("/home", { replace: true });
        setAdmin(data);
      }
    })
    .catch((e) => console.log(e));
};

const addNewDevice = (device, setDevice) => {
  let bucketName = "devices";
  let imgRef = ref(storage, `${bucketName}/${device.img.name}`);
  uploadBytes(imgRef, device.img)
    .then(() => {
      getDownloadURL(imgRef).then((imgUrl) => {
        fetch(`https://smart-batter.herokuapp.com/api/devices`, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify({
            device_name: device.name,
            img_url: imgUrl
          })
        })
          .then((res) => res.json())
          .then((json) => {
            // console.log(json);
            setDevice({ status: "success", data: json });
          })
          .catch((e) => console.log(e));
      });
    })
    .catch((e) => {
      console.log(e);
      console.log(e.message);
      setDevice({ status: "failure", data: "Error: " + e });
    });
};

export { getAdmin, addNewDevice };
