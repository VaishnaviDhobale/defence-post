import axios from "../../../axios";

export async function uploadFile(file, folder, apiUrl) {
  try {
    var form = new FormData();
    form.append("file", file);
    const response = await axios({
      method: "post",
      url: apiUrl,
      data: form,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data;
  }
}
