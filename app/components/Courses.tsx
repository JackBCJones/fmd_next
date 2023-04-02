'use client'
import React, {useState, useCallback} from 'react'
import SearchForm from './Search';
import CourseCard from './CourseCard';


export default function Courses(){

  const [currentPage, setCurrentPage] = useState(1)
  const [coursesPerPage] = useState(50)
  const [filterList, setFilterList] = useState('filter - all')


//   let filtertedCurrentCourses = courses.filter((course) => {
//       if(filterList === course.owner.nickname) {
//       return courses.filter((course) => course.owner.nickname === filterList)
//     } else if(filterList === "filter - all"){
//       return courses
//      } else {
//     return null
//   }})

  // get current posts for creating a limit of 50 posts per page
//   const indexOfLastCourse = currentPage * coursesPerPage
//   const inderOfFirstCourse = indexOfLastCourse - coursesPerPage
//   const currentCourses = filtertedCurrentCourses.slice(inderOfFirstCourse, indexOfLastCourse)
  
  // change page
  // const paginate = (pageNumber) => setCurrentPage(pageNumber)

//   const paginate = useCallback(pageNumber => {
//     setCurrentPage(pageNumber);
//   }, []);


//   const onFilterValueSelected = (filterValue) => {
//     setFilterList(filterValue)
//   }
  

  return (
      <section >
        <div className='search_container'>
          <SearchForm />
        </div>
        <div className='filter_container'>
          hello there 
          {/* <Filter filterValueSelected={onFilterValueSelected} /> */}
        </div>
        {/* <div className='course_list_container'>
          {currentCourses?.map((course) => {
            return <CourseCard key={course.course_id} {...course} />
              
          })} 
        </div> */}
        <div className='pagination_container'>
          {/* <Pagination 
          coursesPerPage={coursesPerPage} 
          totalCourses={filtertedCurrentCourses.length} 
          paginate={paginate}
          currentPage={currentPage}/> */}
        </div>
      </section>

  )

  
}

  // const [nicks, setNicks] = useState([]);
  // const [filterCourse, setFilterCourse] = useState([]);

  
//   const handleWorkFilter = (item) => {
//     setActiveFilter(item)

//     // if (item === 'ALL') {
//     //   setFilterCourse(nicks)
//     // } else {
//     //   setFilterCourse(nicks.filter((course) => course.uni.nick.includes(item)))
//     // }
//   }
  
//   return (
//     <div className='filter__container'>
//       <h3 className='filter__header'>Filter: </h3>
//       <div className='app__course-filter'>
//           {['UCT', 'TUKS', 'UJ', 'WITS', 'STELLIES', 'UNISA', 'RHODES', 'ALL'].map((item, index) => (
//             <button 
//             key={index}
//             onClick={() => handleWorkFilter(item)}
//             className={`app__course-filter-item ${activeFilter === item? 'item-active' : '' }`}
//             >
//             {item}
//             </button>
//           ))}
//       </div>
//       <section className='course__page__container'>
//         {activeFilter === "ALL" ? 
//         <>
//           <CourseCard name={"University of The Witwatersrand"}/>
//           <CourseCard name={"University of Pretoria"} />
//         </> : <></>}

//         {activeFilter === "WITS" ? 
//         <>
//           <CourseCard name={"University of The Witwatersrand"}/>
//         </> : <></>}
//         {activeFilter === "TUKS" ? 
//         <>
//           <CourseCard name={"University of Pretoria"} />
//         </> : <></>}
//         {activeFilter === "UJ" ? 
//         <>
//           <CourseCard name={"University of Johannesburg"} />
//         </> : <></>}
//         {activeFilter === "STELLIES" ? 
//         <>
//           <CourseCard name={"University of Stellenbosche"} />
//         </> : <></>}
//         {activeFilter === "UCT" ? 
//         <>
//           <CourseCard name={"University of Cape Town"} />
//         </> : <></>}
//         {activeFilter === "UNISA" ? 
//         <>
//           <CourseCard name={"University of South Africa"} />
//         </> : <></>}
//         {activeFilter === "RHODES" ? 
//         <>
//           <CourseCard name={"Rhodes University"} />
//         </> : <></>}
        
//       </section>
//     </div>
//   )
// }
