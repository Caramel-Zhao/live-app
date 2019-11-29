

export default {
    async getUserData (userid,stu) {
        let res = await fetch('http://10.36.176.140:8080/api/in_room',{
            method:"POST",
            headers:{
                "Content-Type": "application/json;charset=UTF-8"
            },
            body: JSON.stringify({
                "userid":userid,
                "studiono":stu,
            })
        })
        return await res.json()

    },

}
