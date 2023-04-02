import prisma from '../../prisma/client'

async function getCourses(){
    const res = await fetch('api/getCourses')
}

export default function CourseCard(){
    return (
        <h1>course card</h1>
    )
}