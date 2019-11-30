
export default {
    async recharge (userid,r_charge) {
      let res = await fetch('http://39.98.126.184:8080/api/recharge/ ', {
          method:"POST",
          headers:{
              "Content-Type":"application/json;charset:UTF-8"
          },
          body:JSON.stringify({
              "token":userid,
              "r_charge":r_charge
          })
      })
      return await res.json()
    },
  
  }