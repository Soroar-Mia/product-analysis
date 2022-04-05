import React from 'react';
import useProduct from '../../hooks/useProduct';
import Cirt from '../Cirt/Cirt';
import './Home.css';

const Home = () => {
const [product] = useProduct();
    return (
    <div className='main-div'>
        <section className='home-sectation'>
            <div className='home-text'>
                <div className='home-text-all'>
                <h1 className='bbb'>Explore Your Next</h1>
                <h1 className='aaa'>MacBook</h1>
                <p>
                    The MacBook is a brand of Macintosh notebook computers
                    designed and marketed by Apple Inc. that use Apple's macOS
                    operating system since 2006.It replaced the PowerBook and 
                    iBook brands during the Mac transition to Intel processors,
                    announced in 2005.
                </p>
                </div>
            </div>
            <div className='home-img'>
                <img className='home-img-img' src="https://www.presse-citron.net/app/uploads/2022/03/MacBook-Air-M2-2022-THIS-is-it-2-25-screenshot.jpg" alt="" />
            </div>
        </section>
        <section>
            <div>
                <h1 className='MacBook-Reviews'>MacBook Reviews</h1>
            <div className='home-cart'>
            {
                    product.slice(0,3).map(produc => <Cirt key={produc.id}
                    produc={produc}
                    ></Cirt>)
                }
            </div>
            </div>
        </section>
    </div>
    );
};

export default Home;