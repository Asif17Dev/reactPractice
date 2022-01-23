import React,{useState , useEffect} from 'react'
import SectionTitle from '../components/SectionTitle'
import {MdSearch} from 'react-icons/md'
import projects from '../assets/data/projects';
import ProjectsSectionItems from './ProjectsSectionItems';
import styled from 'styled-components';

const ProjectsStyle = styled.div`
padding:10rem 0;
.project__AllItems{
display:grid;
grid-template-columns: repeat(auto-fill, minmax(300px,1fr));
grid-gap:5rem;
margin-top:5rem;
}
.project__searchbar{
    position:relative;
    margin-top:5rem;
    width: 300px;
    input{
        width:100%;
        outline:none;
        border:none;
        padding:0.8rem;
        font-size:2rem;
        border-radius:6px;
        color:var(--black)
    }
    .search_icon{
     position: absolute;
     width:2rem;
     right:1rem;
     path{
         color:var(--deep-dark);
     }
    }
}
@media only screen and (max-width: 768px){
    .project__searchbar,
    .project__searchbar form,
    .project__searchbar input{
        width:100%;
    }
}
`; 

export default function Project() {
    const [searchData,setSearchData] = useState('')
 const [ProjectData,setProjectData] = useState(projects);

useEffect(() => {
    if(searchData === '') return;
    setProjectData(()=>
 projects.filter((item)=> item.name.toLowerCase().match(searchData.toLowerCase()))
)
    
}, [searchData])

 function handleChange(e){
   e.preventDefault();
   setSearchData(e.target.value);

   if(!e.target.value.length > 0){
       setProjectData(projects);
   }
 }

    return (
        <ProjectsStyle>
            <div className='container'>
                <SectionTitle heading='PROJECTS' subheading='some of my recent works' />
                <div className='project__searchbar'>
                    <form>
                        <input type='text' value={searchData} onChange={handleChange}/>
                        <MdSearch className='search_icon' />
                    </form>
                </div>
                <div className='project__AllItems'>
                    {ProjectData.map((item)=>(
                       <div key={item.id}>
                       <ProjectsSectionItems img={item.img} title={item.name} desc={item.desc}/>
                       </div>
                    ))}
                </div>
            </div>
        </ProjectsStyle>
    )
}
