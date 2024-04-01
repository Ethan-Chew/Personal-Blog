export default async function authorise() {
    const authorisationReq = await fetch("http://localhost:8080/v1/auth", {
        credentials: "include"
    })
    if (authorisationReq.status === 200) return true
    else return false
}