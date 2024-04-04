import axios from "axios"

export default async function authoriseUser() {
    try {
        const authorisationReq = await axios.get("http://localhost:8080/v1/auth", {
            withCredentials: true
        })

        const authReqBody = await authorisationReq.data
        if (authorisationReq.status === 200) return authReqBody
        else return { status: "failure" }
    } catch (err) {
        // console.log(err)
    }
}