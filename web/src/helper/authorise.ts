export default async function authoriseUser() {
    const authorisationReq = await fetch("http://localhost:8080/v1/auth", {
        credentials: "include"
    })
    const authReqBody = await authorisationReq.json()
    if (authorisationReq.status === 200 && authReqBody.role === "Reader") return true
    else return false
}