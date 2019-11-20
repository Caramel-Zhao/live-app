export default {
  async getHomeInfo () {
    let res = await fetch('http://localhost:3000/home')
    let data = await res.json();
    return data
  }
}