import './style/App.css';
import './style/education.css';
import {IoOpenOutline} from "react-icons/io5";
import { useResumeData } from './resumeData';

function Education() {
  const Data = useResumeData();
  const data = Data.education;
  return (
    <div class="grid" id='education'>
        <div class="whole">               
            <div class="body">
                <div class='education'>
                    <h1 class='education_title title'> Education </h1>
                        {data.map(item => {
                            return(
                                <div class='education_section'>
                                    <div class='education_section_school'> {item.school} </div>
                                    <div class='education_section_info'>
                                        <span class='education_section_program'> {item.program} </span>
                                        <div class='education_section_summary'> {item.knowledge}</div>
                                    </div>
                                    <div class='education_more grid_row'>
                                    {item.school_link && (
                                        <div>
                                        <a href={item.school_link} target='_blank' rel="noreferrer" class='education_more_but button'>
                                            More about this school <IoOpenOutline style={{'margin-bottom':'3px'}}/>
                                        </a>
                                        </div>
                                    )}
                                    {item.program_link && (
                                        <div>
                                        <a href={item.program_link} target='_blank' rel="noreferrer" class='education_more_but button'>
                                            More about this program <IoOpenOutline style={{'margin-bottom':'3px'}}/>
                                        </a>
                                        </div>
                                    )}
                                        {/* <a href={item.school_link} target='_blank' class='education_school_more button'> More about this school <IoOpenOutline style={{'margin-bottom':'3px'}}/> </a>
                                        <a href={item.program_link} target='_blank' class='education_school_more button'> More about this program <IoOpenOutline style={{'margin-bottom':'3px'}}/> </a> */}
                                    </div>
                                    </div>
                                )})}
                
                    </div>
            </div>
        </div>
    </div>
  );
}

export default Education;
