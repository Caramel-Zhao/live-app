
export default {
  async getSearchData (id) {
    let res = await fetch("http://39.98.126.184:8080/api/search/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8"
      },
      body: JSON.stringify({
        "userid": id
      })
    })
    return await res.json()
  },
  async getData (id) {
    // let res = await fetch("http://10.36.176.135:8080/feel/intereted/")
    let res = await fetch("http://39.98.126.184:8080/api/feel/intereted/?")
    return await res.json()
  },
}
