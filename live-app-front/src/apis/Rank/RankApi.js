
export default {
  async getRankData () {
    let res = await fetch('http://10.36.176.221:8080/Bang/bang/')
    let data = await res.json()
		console.log(data)
    return data
  },

}
