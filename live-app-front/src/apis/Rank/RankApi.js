
export default {
  async getRankData () {
    let res = await fetch('http://localhost:3000/rank')
    let data = await res.json()
    return data
  },

}
