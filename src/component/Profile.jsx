import ProfilePicutre from "./ProfilePicutre";
import AboutMe from "./AboutMe";
import Button from "./button";
import SkillBar from './skillbar';

function Profile(){
    return (
    <div>
        <div className="first-content">
            <ProfilePicutre />
            <AboutMe />
        </div>
        <h1 className="skill-text">SKILLS EXPERTISE</h1>
        <div className="skill-Container">
            
            <div className="skill-content-fix">
            <SkillBar skill="Adobe Photoshop" percentage={93} color="#1ade00ff"/>
            <SkillBar skill="Adobe Illustration" percentage={78} color="#1ade00ff" />
            <SkillBar skill="Adobe Premier Pro" percentage={60} color="#1ade00ff" />
            <SkillBar skill="Capcut" percentage={87} color="#1ade00ff" />
            <SkillBar skill="Canva" percentage={95} color="#1ade00ff" />
            </div>

            <div className="skill-content-fix">
            <SkillBar skill="JavaScript" percentage={75} color="#1ade00ff"/>
            <SkillBar skill="React" percentage={40} color="#1ade00ff" />
            <SkillBar skill="Express.js" percentage={32} color="#1ade00ff" />
            <SkillBar skill="HTML" percentage={81} color="#1ade00ff" />
            <SkillBar skill="CSS" percentage={83} color="#1ade00ff" />
            </div>
        </div>
    </div>
    )
}

export default Profile;