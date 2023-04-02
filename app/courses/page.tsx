
const getCourses = async () => {
    const res = await fetch(`${process.env.BASE_URL}api/getCourses`)
    return res
    }

const getUnis = async () => {
    const res = await fetch(`${process.env.BASE_URL}api/getUnis`)
    return res
}
    

export default async function CourseList() {
    
    const data = await getUnis()
    console.log(data)
    return (
        <h1>course list</h1>
    )
}