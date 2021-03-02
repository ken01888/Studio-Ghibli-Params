import { Link } from 'react-router-dom';

const Links = () => {

    return (

        <nav className="navbar navbar-light bg-light">
            <form className="container-fluid justify-content-center">
                <img src="" alt="" srcset=""/>
                <Link to='/' className='btn btn-light me-2 col-3 text-center' style={{ textDecoration: 'none' }}>Go Home</Link>
                <Link to='/films' className='btn btn-light me-2 col-3 text-center' style={{ textDecoration: 'none' }}>View Films</Link>
                <Link to='/people' className='btn btn-light me-2 col-3 text-center' style={{ textDecoration: 'none' }}>View People</Link>
            </form>
        </nav>


    );


};

export default Links; 