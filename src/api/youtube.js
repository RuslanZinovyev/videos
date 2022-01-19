import axios from "axios";

const KEY = "AIzaSyCDhB8iPEYVQCpmvJs0szYKJidWXov9xfs";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
