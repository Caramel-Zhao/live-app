
export default {
  async getGiftData () {
    let res = await fetch('http://39.98.126.184:8080/api/live/gift/')
    let data = await res.json()
    return data
  },
}
