import React from 'react';

const Image = () => {

    return (
        <React.Fragment>
            <h2 className='text-center mt-4' >Click image to visit Studio Ghibli</h2>
            <a href="https://www.ghibli.jp/" target='_blank' rel='noreferrer'>
                <img
                    src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1098,format=auto/sites/default/files/styles/1200x800/public/d8/images/methode/2020/03/13/f7395dbe-6435-11ea-8e9f-2d196083a37c_image_hires_102517.JPG?itok=h7f5mNy4&v=1584066325"
                    alt="Studio Ghibli"
                    className='image-fluid mt-5'
                    style={{ marginLeft: `${10}vw` }}
                />
            </a>
        </React.Fragment>

    )




}


export default Image; 