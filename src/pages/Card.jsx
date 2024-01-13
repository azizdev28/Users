import React, { Fragment } from 'react'
import "./card.css"
import { Link, NavLink } from 'react-router-dom'

const Card = () => {
  return (
    <Fragment>
      <div>
     <div class="wave"></div>
     <div class="wave"></div>
     <div class="wave"></div>
  </div>
      <div className='container'>
      <div className="row">
        <h1 className='user__title'>Users' Information</h1>
        <div className="col-lg-3">
            <div className="card">
            <div className="card-body">
                <h2 className='card-title'>Leanne Graham</h2>
                <h3 className='bret'>Bret</h3>
                <div className="links">
                <p className='email'>Email:<NavLink className="email2" to="/Undifined">Sincere@april.biz</NavLink></p>
                <p className='email'>Website:<NavLink className="email2" to="#" >hildegard.org</NavLink></p>
                <p className='email'>Address:<NavLink className="email2" to="#">Gwenborough,Kulas Light</NavLink></p>
                <p className='email'>Phone:<NavLink className="email2" to="#">1-770-736-8031 x56442</NavLink></p>
                </div>
                <div className="btn__wraper">
                  <NavLink className="btn " to="/Todos">Todos</NavLink>
                  <NavLink className="btn " to="/Posts">Posts</NavLink>
                  <NavLink className="btn " to="/Gapley">Galler</NavLink>
                </div>
            </div>
            </div>
        </div>
        <div className="col-lg-3">
            <div className="card">
            <div className="card-body">
                <h2 className='card-title'>Ervin Howell</h2>
                <h3 className='bret'>Antonette</h3>
                <div className="links">
                <p className='email'>Email:<NavLink className="email2" to="#">Shanna@melissa.tv</NavLink></p>
                <p className='email'>Website:<NavLink className="email2" to="#" >anastasia.net</NavLink></p>
                <p className='email'>Address:<NavLink className="email2" to="#">Wisokyburgh,Victor </NavLink></p>
                <p className='email'>Phone:<NavLink className="email2" to="#">010-692-6593 x09125</NavLink></p>
                </div>
                <div className="btn__wraper">
                  <NavLink className="btn " to="/Todos">Todos</NavLink>
                  <NavLink className="btn " to="/Posts">Posts</NavLink>
                  <NavLink className="btn " to="/Gapley">Galler</NavLink>
                </div>
            </div>
            </div>
        </div>
        <div className="col-lg-3">
            <div className="card">
            <div className="card-body">
                <h2 className='card-title'>Clementine Bauch</h2>
                <h3 className='bret'>Samantha</h3>
                <div className="links">
                <p className='email'>Email:<NavLink className="email2" to="#">Nathan@yesenia.net</NavLink></p>
                <p className='email'>Website:<NavLink className="email2" to="#" >ramiro.info</NavLink></p>
                <p className='email'>Address:<NavLink className="email2" to="#">Gwenborough,Kulas Light</NavLink></p>
                <p className='email'>Phone:<NavLink className="email2" to="#">1-463-123-4447</NavLink></p>
                </div>
                <div className="btn__wraper">
                  <NavLink className="btn " to="/Todos">Todos</NavLink>
                  <NavLink className="btn " to="/Posts">Posts</NavLink>
                  <NavLink className="btn " to="/Gapley">Galler</NavLink>
                </div>
            </div>
            </div>
        </div>
        <div className="col-lg-3">
            <div className="card">
            <div className="card-body">
                <h2 className='card-title'>Patricia Lebsack</h2>
                <h3 className='bret'>Karianne</h3>
                <div className="links">
                <p className='email'>Email:<NavLink className="email2" to="#">Julianne.OConner@kory.org</NavLink></p>
                <p className='email'>Website:<NavLink className="email2" to="#" >kale.biz</NavLink></p>
                <p className='email'>Address:<NavLink className="email2" to="#">South Elvis,Hoeger Mall</NavLink></p>
                <p className='email'>Phone:<NavLink className="email2" to="#">493-170-9623 x156</NavLink></p>
                </div>
                <div className="btn__wraper">
                  <NavLink className="btn " to="/Todos">Todos</NavLink>
                  <NavLink className="btn " to="/Posts">Posts</NavLink>
                  <NavLink className="btn " to="/Gapley">Galler</NavLink>
                </div>
            </div>
            </div>
        </div>
        <div className="col-lg-3">
            <div className="card">
            <div className="card-body">
                <h2 className='card-title'>Chelsey Dietrich</h2>
                <h3 className='bret'>Kamren</h3>
                <div className="links">
                <p className='email'>Email:<NavLink className="email2" to="#">Lucio_Hettinger@annie.ca</NavLink></p>
                <p className='email'>Website:<NavLink className="email2" to="#" >demarco.info</NavLink></p>
                <p className='email'>Address:<NavLink className="email2" to="#">Roscoeview,Skiles Walks</NavLink></p>
                <p className='email'>Phone:<NavLink className="email2" to="#">(254)954-1289</NavLink></p>
                </div>
                <div className="btn__wraper">
                  <NavLink className="btn " to="/Todos">Todos</NavLink>
                  <NavLink className="btn " to="/Posts">Posts</NavLink>
                  <NavLink className="btn " to="/Gapley">Galler</NavLink>
                </div>
            </div>
            </div>
        </div>
        <div className="col-lg-3">
            <div className="card">
            <div className="card-body">
                <h2 className='card-title'>Mrs. Dennis Schulist</h2>
                <h3 className='bret'>Leopoldo_Corkery</h3>
                <div className="links">
                <p className='email'>Email:<NavLink className="email2" to="#">Karley_Dach@jasper.info</NavLink></p>
                <p className='email'>Website:<NavLink className="email2" to="#" >ola.org</NavLink></p>
                <p className='email'>Address:<NavLink className="email2" to="#">Gwenborough,Kulas Light</NavLink></p>
                <p className='email'>Phone:<NavLink className="email2" to="#">1-477-935-8478 x6430</NavLink></p>
                </div>
                <div className="btn__wraper">
                  <NavLink className="btn " to="/Todos">Todos</NavLink>
                  <NavLink className="btn " to="/Posts">Posts</NavLink>
                  <NavLink className="btn " to="/Gapley">Galler</NavLink>
                </div>
            </div>
            </div>
        </div>
        <div className="col-lg-3">
            <div className="card">
            <div className="card-body">
                <h2 className='card-title'>Leanne Graham</h2>
                <h3 className='bret'>Bret</h3>
                <div className="links">
                <p className='email'>Email:<NavLink className="email2" to="#">Sincere@april.biz</NavLink></p>
                <p className='email'>Website:<NavLink className="email2" to="#" >hildegard.org</NavLink></p>
                <p className='email'>Address:<NavLink className="email2" to="#">Gwenborough,Kulas Light</NavLink></p>
                <p className='email'>Phone:<NavLink className="email2" to="#">1-770-736-8031 x56442</NavLink></p>
                </div>
                <div className="btn__wraper">
                  <NavLink className="btn " to="/Todos">Todos</NavLink>
                  <NavLink className="btn " to="/Posts">Posts</NavLink>
                  <NavLink className="btn " to="/Gapley">Galler</NavLink>
                </div>
            </div>
            </div>
        </div>
        <div className="col-lg-3">
            <div className="card">
            <div className="card-body">
                <h2 className='card-title'>Kurtis Weissnat</h2>
                <h3 className='bret'>Elwyn.Skiles</h3>
                <div className="links">
                <p className='email'>Email:<NavLink className="email2" to="#">Telly.Hoeger@billy.biz</NavLink></p>
                <p className='email'>Website:<NavLink className="email2" to="#" >elvis.io</NavLink></p>
                <p className='email'>Address:<NavLink className="email2" to="#">Howemouth,Rex Trail</NavLink></p>
                <p className='email'>Phone:<NavLink className="email2" to="#">210.067.6132</NavLink></p>
                </div>
                <div className="btn__wraper">
                  <NavLink className="btn " to="/Todos">Todos</NavLink>
                  <NavLink className="btn " to="/Posts">Posts</NavLink>
                  <NavLink className="btn " to="/Gapley">Galler</NavLink>
                </div>
            </div>
            </div>
        </div>
        <div className="col-lg-3">
            <div className="card">
            <div className="card-body">
                <h2 className='card-title'>Nicholas Runolfsdottir V</h2>
                <h3 className='bret'>Maxime_Nienow</h3>
                <div className="links">
                <p className='email'>Email:<NavLink className="email2" to="#">Sherwood@rosamond.me</NavLink></p>
                <p className='email'>Website:<NavLink className="email2" to="#" >jacynthe.com</NavLink></p>
                <p className='email'>Address:<NavLink className="email2" to="#">Aliyaview,Ellsworth Summit</NavLink></p>
                <p className='email'>Phone:<NavLink className="email2" to="#">586.493.6943 x140</NavLink></p>
                </div>
                <div className="btn__wraper">
                  <NavLink className="btn " to="/Todos">Todos</NavLink>
                  <NavLink className="btn " to="/Posts">Posts</NavLink>
                  <NavLink className="btn " to="/Gapley">Galler</NavLink>
                </div>
            </div>
            </div>
        </div>
        <div className="col-lg-3">
            <div className="card">
            <div className="card-body">
                <h2 className='card-title'>Glenna Reichert</h2>
                <h3 className='bret'>Delphine</h3>
                <div className="links">
                <p className='email'>Email:<NavLink className="email2" to="#">Chaim_McDermott@dana.io</NavLink></p>
                <p className='email'>Website:<NavLink className="email2" to="#" >conrad.com</NavLink></p>
                <p className='email'>Address:<NavLink className="email2" to="#">Bartholomebury,Dayna Park</NavLink></p>
                <p className='email'>Phone:<NavLink className="email2" to="#">(775)976-6794 x41206</NavLink></p>
                </div>
                <div className="btn__wraper">
                  <NavLink className="btn " to="/Todos">Todos</NavLink>
                  <NavLink className="btn " to="/Posts">Posts</NavLink>
                  <NavLink className="btn " to="/Gapley">Galler</NavLink>
                </div>
            </div>
            </div>
        </div>
        
        
        
        
      </div>
    </div>
    </Fragment>
  )
}

export default Card
