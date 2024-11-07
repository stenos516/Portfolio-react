import React from 'react';
import './MyWork.css';
import mywork_data from './mywork_data';
import github from '../../assets/github.png';
const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className='mywork-title'>
        <h1>My Works</h1>
      </div>
      <div className='mywork-container'>
        {mywork_data.map((work, index) => (
          <div key={index} className='mywork-item'>
            <img src={work.w_img} alt={`Project ${index + 1}`} />
            <div className='mywork-buttons'>
              <a href={work.projectLink} target='_blank' rel='noopener noreferrer'>
                <button className='project-btn'>View live site</button>
              </a>
              <a href={work.projectGithub} target='_blank' rel='noopener noreferrer'> <button className='git-btn'>
               GitHub Code</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWork;


