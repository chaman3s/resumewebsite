import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function ListContainer({expList,title,icon,titleIcon , styles}) {
    return(
         <section id={title.toLowerCase()}>
                <h1 class="section-heading mb75px">
                    <span>
                         <FontAwesomeIcon icon={titleIcon} />
                    </span>
                    <span>{title} </span>
                </h1>
                <div class="exprience-display">
                {expList.map((ele,index)=>(
                    <div  key={index} class="exprience-box ">
                        <div class="exprience-container">
                            <div class="company-logo" style={styles[index]?.img || {}}>
                                <img src={ele.logo}/>
                            </div>
                            <div class="company-heading" style={styles[index]?.head || {}}>
                                <h6>{ele.post} </h6>
                                <p>{ele.companyName}</p>
                               <p>{ele.timeline}</p> 
                            </div>
                            
                        </div>
                        <div class="company-detail ">
                            <p>{ele.roleDetail}</p>
                        </div>
                    </div>))}
                    <div className="exp-divider">
                        <div className="exp-traveller">
                            <FontAwesomeIcon icon={icon} />
                        </div>
                    </div>
                    

                </div>

            </section>
    )
};
