import "./EducationalPage.scss"
import immigrantFamilyAdapted from "../../assets/Images2-Shapes.png"
import cityVancouverAdapted from "../../assets/Images3-Shapes.jpg"

function EducationalPage() {
    return (
        <>
       <section className='best-practices'>
        <h3 className='best-practices__Header'>Canada Government Immigration Website Search Best Practices</h3>
        <div className='best-practices__Content'>
            <p className='best-practices__Text'> 
            Researching immigration information for Canada <span className='best-practices__Text--highlight'>involves navigating through official government websites to find accurate and up-to-date information. </span>
            Given the importance and complexity of immigration procedures, <span className='best-practices__Text--highlight'>it's crucial to rely on official sources.</span> These are some best practices to guide your research on Canadian immigration. 
            </p>
            <p className='best-practices__Text'> 
            <span className='best-practices__Text--highlight'>Use specific keywords related to your query</span>, for example, "Express Entry application process," "Canada study permit requirements".
            Also, use available filters to narrow down search results on government websites.
            Immigration policies and procedures can change.  <span className='best-practices__Text--highlight'>Bookmark pages you find useful so you can easily check back for updates.</span>
            </p>
            <p className='best-practices__Text'> 
            <span className='best-practices__Text--highlight'>Look for Official Guides and Checklists:</span> Official guides and checklists are invaluable for understanding application processes and preparing your documents. 
            These resources are designed to guide you step-by-step through various procedures. The IRCC website offers tools and questionnaires to help you determine your eligibility for different immigration programs. 
            Examples include the Come to Canada tool and the Express Entry eligibility questionnaire.
            </p>
        </div>
       </section>
       <section className='education'>
        <div className='education__subdivision'>
            <img src={immigrantFamilyAdapted} alt="Immigrant family" className='education__image'/>
        </div>
        <div className='education-links'>
            <h3 className='education-links__Header'>Educational Links</h3>
            <a href='https://www.cicic.ca/2/home.canada' className='education-links__Link' target='_blank' rel="noreferrer noopener"> Canadian Information Centre for International Credentials</a>
            <a href="https://www.cbc.ca/learning-english" className='education-links__Link' target='_blank' rel="noreferrer noopener"> Free English Lesson Website with CBC </a>
            <a href="https://eravista.netlify.app/" className='education-links__Link' target='_blank' rel="noreferrer noopener"> Canada history and culture support learning for citizenship test</a>
            
        </div>
       </section>
       <section className='advisor'>
       <div className='advisor-links'>
            <h3 className='advisor-links__Header'>Immigration Advisor in Vancouver</h3>
            <a href='https://www.bellalliance.ca/' className='advisor-links__Link' target='_blank' rel="noreferrer noopener">Bell Alliance</a>
            <a href="https://www.gbimmigration.com/about-us/" className='advisor-links__Link' target='_blank' rel="noreferrer noopener"> Global Bridge </a>
            <a href="https://www.masterimmigrationservices.ca/" className='advisor-links__Link' target='_blank' rel="noreferrer noopener"> Master Immigration Services</a>
        </div>
        <div className='advisor__subdivision'>
            <img src={cityVancouverAdapted} alt="Vancouver City" className='advisor__image'/>
        </div>
       </section>
        </>
    )
}


export default EducationalPage;