export default function Project({projectList}) {
    return (
        <section id="portfolio">
                <h1 class="section-heading mb75px">
                    <span>
                        <i class="fas fa-th-list"></i>
                    </span>
                    <span> Portfolio </span>
                </h1>
                <div class="portfolio-container">

                    {projectList.map((ele,index)=>(
                        <div  key={index} class="portfolio-image-container">
                        <img src={ele.img}/>
                        <div class="portfolio-details">
                            <p>
                                {ele.detail}
                            </p>
                        </div>
    
                    </div>))}
              
                    
                   
                </div>
            </section>

    );
}
    

