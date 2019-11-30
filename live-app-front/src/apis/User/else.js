
export default {
    async getUserdata (id) {
        // console.log(id)
      let res = await fetch("http://39.98.126.184:8080/api/see_user/?userid=" + id)
      return await res.json()
    },
  }