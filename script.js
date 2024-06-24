let create = document.createElement("div");
create.innerHTML=`<div class="playwrite-fr-trad" style="color: white; color: blue; font-size: x-large; font-weight: 600;">Certifications and Achivements</div>
                        <div class="add_img">
                            <div class="add_card"><img style="border: 2px solid white; height: 150px; width: 200px;" src="./assest/AutoCAD.jpg" alt=""></div>
                            <div class="add_card"><img style="border: 2px solid white; height: 150px; width: 200px;" src="./assest/Fundamentals Cloud Skill.jpg" alt=""></div>
                            <div class="add_card"><img style="border: 2px solid white; height: 150px; width: 200px;" src="./assest/HTML-Webdev Workshop.jpg" alt=""></div>
                            <div class="add_card"><img style="border: 2px solid white; height: 150px; width: 200px;" src="./assest/Ideathon particitation.jpg" alt=""></div>
                            <div class="add_card"><img style="border: 2px solid white; height: 180px; width: 200px;" src="./assest/CodSoft Offer Letter.jpg" alt=""></div>
                            <div class="add_card"><img style="border: 2px solid white; height: 180px; width: 200px;" src="./assest/Prodigy Infotech Offer Letter.jpg" alt=""></div>
                        </div>`;
create.setAttribute("class","created");


const know_more = () => {
    document.querySelector(".more").innerHTML = `<div class="playwrite-fr-trad" style="color: blue; font-size: x-large; font-weight: 600;">About Me</div>
                <div class="abo">
                    Hello! I'm <b class="abo">Vinit Sheetal</b>, a B.Tech CSE student at Shree Guru Gobind Tricentry University. With a strong passion for web development, problem-solving, and software building, I'm always eager to learn and create. Proficient in HTML, CSS, JavaScript, React, Node.js, Python, Java, and C++, I enjoy building dynamic web applications and tackling various challenges.
                </div>
                <div class="abo">
                    I continuously seek innovative and creative solutions, and my strong analytical skills help me approach complex problems methodically. I thrive in collaborative environments, contributing to both academic and extracurricular projects, and I pay close attention to detail to ensure the quality and efficiency of my code. Adaptable and quick to learn new technologies, I'm driven by a desire to continually improve and innovate.
                </div>
                <div class="abo">
                    My experiences include participating in workshops and techfests at SGT University, internships, projects, and coding competitions, making me versatile in handling both front-end and back-end development tasks. On a personal note, I'm proud to have been awarded by my school for scoring above 90 in both Maths and Chemistry.
                </div>
                <div class="abo">
                    I'm enthusiastic about new challenges and excited to leverage my skills through internships and collaborative projects. If you're looking for someone who's passionate and eager to contribute, I'd love to connect! Thank you for taking the time to learn about me!
                </div>
                <button class="about-button" onclick="know_less()">Know Less</button>`;
                document.querySelector(".detail").setAttribute("id", "");
                create.innerHTML=`<div class="playwrite-fr-trad" style="color: white; color: blue; font-size: x-large; font-weight: 600;">Certifications and Achivements</div>
                        <div class="add_img">
                            <div class="add_card"><img style="border: 2px solid white; height: 150px; width: 200px;" src="./assest/AutoCAD.jpg" alt=""></div>
                            <div class="add_card"><img style="border: 2px solid white; height: 150px; width: 200px;" src="./assest/Fundamentals Cloud Skill.jpg" alt=""></div>
                            <div class="add_card"><img style="border: 2px solid white; height: 150px; width: 200px;" src="./assest/HTML-Webdev Workshop.jpg" alt=""></div>
                            <div class="add_card"><img style="border: 2px solid white; height: 150px; width: 200px;" src="./assest/Ideathon particitation.jpg" alt=""></div>
                            <div class="add_card"><img style="border: 2px solid white; height: 180px; width: 200px;" src="./assest/CodSoft Offer Letter.jpg" alt=""></div>
                            <div id="profile" class="add_card"><img style="border: 2px solid white; height: 180px; width: 200px;" src="./assest/Prodigy Infotech Offer Letter.jpg" alt=""></div>
                        </div>`;
                document.querySelector(".add").append(create);
}

const know_less = () => {
    document.querySelector(".more").innerHTML = `<div class="playwrite-fr-trad" style="color: blue; font-size: x-large; font-weight: 600;">About Me</div>
                <div class="abo">
                    Hello! I'm <b class="abo">Vinit Sheetal</b>, a B.Tech CSE student at Shree Guru Gobind Tricentry University. With a strong passion for web development, problem-solving, and software building, I'm always eager to learn and create. Proficient in HTML, CSS, JavaScript, React, Node.js, Python, Java, and C++, I enjoy building dynamic web applications and tackling various challenges.
                </div>
                <button class="about-button" onclick="know_more()">Know More</button>`;
                document.querySelector(".detail").setAttribute("id", "profile");
                create.innerHTML=``;
                document.querySelector(".add").append(create);
}

const rangeInput = document.getElementById('set');
rangeInput.addEventListener('input', () => {
    const value = rangeInput.value;
    console.log('Range value:', value);

    if(value == 1){
        document.querySelector(".paste").innerHTML = `<li class="card card1">
                        <div class="blog_photo"><img src="./assest/background.png" alt="Blog Image"></div>
                        <div class="blog_heading">heading</div>
                        <div style="color:red; border: 2px solid red; font-weight:800; transform: rotate(-45deg) translateX(140px);" class="blog_description">UPDATED SOON</div>
                        <button class="blog_button">Visit to know more</button>
                    </li>
                    <li class="card card2">
                        <div class="blog_photo"><img src="./assest/card2.jpg" alt="Blog Image"></div>
                        <div class="blog_heading">Worked as Codsoft intern</div>
                        <div class="blog_description">In the above internship, I made a Project Management Tool.</div>
                        <a href="" class="blog_button">Visit to know more</a>
                    </li>
                    <li class="card card3">
                        <div class="blog_photo"><img src="./assest/card3.jpg" alt="Blog Image"></div>
                        <div class="blog_heading">Worked as Prodigy Infotech intern</div>
                        <div class="blog_description">In the above internship, I made a Pixel manipulation for image Encryption and more.</div>
                        <a href="" class="blog_button">Visit to know more</a>
                    </li>`;

    }
    else if(value == 2){
        document.querySelector(".paste").innerHTML = `<li class="card card2">
                        <div class="blog_photo"><img src="./assest/card2.jpg" alt="Blog Image"></div>
                        <div class="blog_heading">Worked as Codsoft intern</div>
                        <div class="blog_description">In the above internship, I made a Project Management Tool.</div>
                        <a href="" class="blog_button">Visit to know more</a>
                    </li>
                    <li class="card card3">
                        <div class="blog_photo"><img src="./assest/card3.jpg" alt="Blog Image"></div>
                        <div class="blog_heading">Worked as Prodigy Infotech intern</div>
                        <div class="blog_description">In the above internship, I made a Pixel manipulation for image Encryption and more.</div>
                        <a href="" class="blog_button">Visit to know more</a>
                    </li>
                    <li class="card card4">
                        <div class="blog_photo"><img src="./assest/card4.jpg" alt="Blog Image"></div>
                        <div class="blog_heading">Worked as Code Alpha intern</div>
                        <div class="blog_description">In the above internship, I made a Security system.</div>
                        <a href="" class="blog_button">Visit to know more</a>
                    </li>`;
    }
    else if(value == 3){
        document.querySelector(".paste").innerHTML = `                    <li class="card card3">
                        <div class="blog_photo"><img src="./assest/card3.jpg" alt="Blog Image"></div>
                        <div class="blog_heading">Worked as Prodigy Infotech intern</div>
                        <div class="blog_description">In the above internship, I made a Pixel manipulation for image Encryption and more.</div>
                        <a href="" class="blog_button">Visit to know more</a>
                    </li>
                    <li class="card card4">
                        <div class="blog_photo"><img src="./assest/card4.jpg" alt="Blog Image"></div>
                        <div class="blog_heading">Worked as Code Alpha intern</div>
                        <div class="blog_description">In the above internship, I made a Security system.</div>
                        <a href="" class="blog_button">Visit to know more</a>
                    </li>
                    <li class="card card5">
                        <div class="blog_photo"><img src="./assest/background.png" alt="Blog Image"></div>
                        <div class="blog_heading">heading</div>
                        <div style="color:red; border: 2px solid red; font-weight:800; transform: rotate(-45deg) translateX(140px);" class="blog_description">UPDATED SOON</div>
                        <button class="blog_button">Visit to know more</button>
                    </li>`;
    }
});
