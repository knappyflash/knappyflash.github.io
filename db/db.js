export default class db {
  constructor() {
    this.DB_URL = "https://kflash-a660b-default-rtdb.firebaseio.com";
  }

  async GetData(path){
    try {
      const response = await fetch(`${this.DB_URL}/${path}.json`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Retrieved Data:", data);
      return data;
    } catch (error) {
      console.error("Error reading data:", error);
    }
  }

  async WriteData(path, payload){
    try {
      const response = await fetch(`${this.DB_URL}/${path}.json`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Data Written Successfully:", data);
      return data;
    } catch (error) {
      console.error("Error writing data:", error);
    }
  }


}
