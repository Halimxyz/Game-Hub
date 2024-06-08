import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1e5407e4a9594a6788d83385cc798325",
    // key: "c7b18323a47d40c394ea5b019646b1f5",
  },
});
