export default {
    async getCode (tel) {
        let res = await fetch('http://39.98.126.184:8080/api/change/send_code/?phone='+tel)
        let data = await res.json()
        console.log(data)
        return data
    },
    async getRepwd (a,b,c) {
      let res=await fetch("http://39.98.126.184:8080/api/change/password/",{
            method:"POST",
            headers:{
                "Content-Type": "application/json;charset=UTF-8"
            },
            body: JSON.stringify({
                "password":a,
                "phone":b,
                "code":c
            })
        })
        return await res.json()
    },

}