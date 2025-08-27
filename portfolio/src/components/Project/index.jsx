import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Project({projectList,titleIcon}) {
    function handleClick (url){
        window.location.href = url;
    }
    return (
        <section id="portfolio">
                <h1 class="section-heading mb75px">
                    <span>
                        <FontAwesomeIcon icon={titleIcon} />
                    </span>
                    <span> Portfolio </span>
                </h1>
                <div class="portfolio-container">

                    {projectList.map((ele,index)=>(
                        <div  key={index} class="portfolio-image-container" onClick={()=>handleClick(ele.url)}>
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
    

