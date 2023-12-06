import Blockquote from '../components/Blockquote';
// import stepLogo from '../assets/images/StepLogo.svg';
import emailIcon from '../assets/images/email.svg';
import elder from '../assets/images/noun-son-and-elderly-father-2762744.svg';
// import dreiKinder from '../assets/images/dreiKinder.svg';
import careoldage from '../assets/images/2119136_278281-P6744O-575.svg';
import homeStyles from '../styles/home.module.css';
import Layout from '../components/Layout';

function Home() {
  return (
    <Layout>
      <main className={homeStyles.homeMain}>
        <h1>Eldercare Ladbergen Association</h1>

        <img
          src={careoldage}
          className={homeStyles.illustration}
          alt='Illustration dreier Kinder'
        />

        <h3>What Do We Offer at Our Elderly Care Facility?</h3>
        <p>
          At our elderly care facility, we understand that this stage of life is
          a crucial period for our residents' well-being and fulfillment. Just
          as early childhood lays the foundation for a child's future, the care
          and support we provide during the senior years are paramount. The
          transition into an elderly care facility marks an important phase,
          akin to a new chapter in life. We recognize the significance of this
          transition and prioritize creating an environment that ensures
          comfort, support, and a sense of belonging for our residents.
        </p>

        <Blockquote content='Providing a sense of comfort, acceptance, and security is our foremost commitment in elderly care.' />

        <p>
          The union and collaboration among caregivers in the elderly care
          sector are pivotal. Working together allows us to accomplish more and
          ensure the best outcomes for our residents and ourselves.
          Additionally, we aspire to enhance and expand our partnership with the
          Ladbergen community and relevant authorities in elderly care,
          tailoring our services to meet the evolving needs effectively.
        </p>
        <p>
          It is also important to us that you, as family members, receive more
          information about the work of our caregivers through events and the
          provision of informational materials.
        </p>

        <aside>
          <h3>Registrations for day care services.</h3>
          <p>
            Registrations for elderly care services can be completed online
            through our dedicated portal. Alternatively, you can also reach out
            to us directly via email or phone to initiate the process.
          </p>

          <div className={homeStyles.iconWrapper}>
            <a
              href='https://github.com/Sulochan-khadka'
              target='_blank'
              rel='noreferrer noopener'
            >
              <img
                className={homeStyles.homeIcon}
                src={elder}
                alt='Logo von Step Steinfurt'
              />
            </a>
            <a href='mailto:sulochankhadka25@gmail.com'>
              <img
                className={homeStyles.homeIcon}
                src={emailIcon}
                alt='Eine E-Mail schreiben'
              />
            </a>
          </div>
        </aside>
      </main>
    </Layout>
  );
}

export default Home;
