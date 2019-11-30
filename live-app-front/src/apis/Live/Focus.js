

export default {
    async getFocus (userid,stu,id){
        console.log(userid,stu,id)
        let res = await fetch('http://39.98.126.184:8080/api/feel/onclick/',{
            method:"POST",
            headers:{
                "Content-Type": "application/json;charset=UTF-8"
            },
            body: JSON.stringify({
                "token":userid,
                "attentionid":id
            })
        })
        return await res.json()

    },

}

