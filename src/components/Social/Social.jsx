import './Social.scss'

const Social = ({logo, title}) => {
  return (
    <div>
        <img src={logo} alt="" />
        <h1>{title}</h1>
    </div>
  )
}

export default Social