export default function About({myImage, summary}) {
    return (
         <section id="about">
                <div class="my-image" >
                    <img src={myImage}/>
                </div>
                <div class="about-para">
                    <p>
                      {summary}
                    </p>
                </div>
                
            </section>
    )
};
