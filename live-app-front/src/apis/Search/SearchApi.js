
export default {
  async getSearchData () {
    let res = await fetch('http://localhost:3000/search')
    let data = await res.json()
    return data
  },

}
