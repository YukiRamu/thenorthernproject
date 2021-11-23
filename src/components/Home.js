import react from 'react';
import Header from './Header';

//Home page of the website

function Home()
{
    return(
        <div>
            <div className="stuff">
                <Header/>
                <div className="home">
                    <h1>Home</h1>
                    <div className="words">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do 
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                        aliquip ex ea commodo consequat. Duis aute irure dolor in 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                        proident, sunt in culpa qui ocia deserunt mollit anim id est laborum. 
                        Lorem ipsum dolor sit amet
                        </p>
                    </div>
                </div>
            </div>
        
            <div className="contact">
                <h1>Contact</h1>
                <div className="words">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do 
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                    aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                    proident, sunt in culpa qui ocia deserunt mollit anim id est laborum. 
                    Lorem ipsum dolor sit amet
                    </p>
                </div>
            </div>
        
            <div class="grid" style="--bs-rows: 2; --bs-columns: 2;">
                <div class="g-start-1" style={"grid-row: 1}>Quick Comment</div>
                <div class="g-start-2" style={"grid-row: 1"}>Social Media</div>
                <div class="g-start-1" style={"grid-row: 2"}>Email</div>
                <div class="g-start-2" style={"grid-row: 2"}>Branch Offices</div>
            </div>
        </div>
    );
}

export default Home;