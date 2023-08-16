import './ProjectTemplate.scss'

const ProjectTemplate = ({projectName, projectDesc, tags, img, link}) => {
  return (
    <div className="project">
            <div className="project-image">
                <img src={img} alt="" />
            </div>
            <div className="project-details">
                <div className = "container">
                    <h2 className="project-name">{projectName}</h2>
                    <span className="project-desc"><hr />{projectDesc}</span>
                    <div className="see-more">
                        <a href={link}>See More</a>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ProjectTemplate