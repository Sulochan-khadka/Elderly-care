import MitgliedCard from '../components/MitgliedCard';
import HuewelmannImg from '../assets/images/huewelmann300px.jpg';
import NabrotzkyImg from '../assets/images/nabrotzky300px.jpg';
import WelkImg from '../assets/images/welk300px.jpg';
import RichterImg from '../assets/images/richter300px.jpg';
import KochImg from '../assets/images/Koch_300px.jpg';
import KoenigImg from '../assets/images/Koenig_300px.jpg';
import LindemannImg from '../assets/images/Lindemann_300px.jpg';
import LutterbeiImg from '../assets/images/Lutterbei_300px.jpg';
import OeleschImg from '../assets/images/Olesch_300px.jpg';
import TuschewitzkiImg from '../assets/images/Tuschewitzki_300px.jpg';
import SchroerlueckeImg from '../assets/images/Schroeerluecke_300px.jpg';
import styles from '../styles/mitglieder.module.css';
import Layout from '../components/Layout';

function Mitglieder() {
  return (
    <Layout>
      <main>
        <h1>Board of Directors and Members of the Association</h1>
        <h2>We introduce ourselves</h2>
        <section className={styles.mitgliederWrapper}>
          <MitgliedCard
            title='1st Chairperson'
            name='Ramona Hüwelmann'
            kita='“Zwergenland”'
            adress='Westerweg 29'
            tel='+49 5485 2261'
            imgSrc={HuewelmannImg}
            imgAlt='Profile picture of Ramona Hüwelmann'
            website='github.com/Sulochan-khadka'
          />

          <MitgliedCard
            title='2nd Chairperson'
            name='Tatjana Nabrotzky'
            kita='Großtagespflege &bdquo;Waldschnecken&rdquo;'
            adress='Auf Stieneckers 52'
            tel='+49 176 43848013'
            imgSrc={NabrotzkyImg}
            imgAlt='Profilbild von Tatjana Nabrotzky'
            website='waldschnecken-ladbergen.de'
          />

          <MitgliedCard
            title='Treasurer'
            name='Oksana Welk'
            kita='Großtagespflege &bdquo;Waldschnecken&rdquo;'
            adress='Auf Stieneckers 52'
            tel='+49 162 1366853'
            imgSrc={WelkImg}
            imgAlt='Profilbild von Oksana Welk'
            website='waldschnecken-ladbergen.de'
          />

          <MitgliedCard
            title='Secretary'
            name='Daniela Richter'
            kita='&bdquo;Bienenkörbchen&rdquo;'
            adress='Kramerstraße 11'
            tel='+49 5485 9539827'
            imgSrc={RichterImg}
            imgAlt='Profilbild von Daniela Richter'
          />

          <MitgliedCard
            title='Membership Card'
            name='Stephanie Olesch'
            kita='&bdquo;Schatzkiste&rdquo;'
            adress='Sandkamp 1b'
            tel='+49 5485 1406'
            imgSrc={OeleschImg}
            imgAlt='Foto von Stephanie Olesch'
          />

          <MitgliedCard
            title='Membership Card'
            name='Saskia Schröerlücke'
            kita='&bdquo;Marienkäfer&rdquo;'
            adress='Auf Stieneckers 58'
            tel='+49 5485 833560'
            tel2='+49 176 92255280'
            imgSrc={SchroerlueckeImg}
            imgAlt='Foto von Saskia Schröerlücke'
          />

          <MitgliedCard
            title='Membership Card'
            name='Anne Lindemann'
            kita='Inklusive Großtagespflege &bdquo;Landwichtel&rdquo;'
            adress='Im Alpenbrock 5'
            tel='+49 1573 4262072'
            tel2='+49 5484 1402'
            imgSrc={LindemannImg}
            imgAlt='Foto von Anee Lindemann'
          />

          <MitgliedCard
            title='Membership Card'
            name='Birte Lutterbei'
            kita='Inklusive Großtagespflege &bdquo;Landwichtel&rdquo;'
            adress='Im Alpenbrock 5'
            tel='+49 1577 4668562'
            tel2='+49 5485 834160'
            imgSrc={LutterbeiImg}
            imgAlt='Foto von Birte Lutterbei'
          />

          <MitgliedCard
            title='Membership Card'
            name='Melanie Tuschewitzki'
            kita='&bdquo;Die kleinen Raupen&rdquo;'
            adress='Stieneckers Esch 20'
            tel='+49 5485 8334407'
            tel2='+49 157 34236164'
            imgSrc={TuschewitzkiImg}
            imgAlt='Foto von Melanie Tuschewitzki'
          />

          <MitgliedCard
            title='Membership Card'
            name='Marina Koch'
            kita='&bdquo;Die Kichererbsen&rdquo;'
            adress='Stieneckers Esch 40'
            tel='+49 1575 6287339'
            imgSrc={KochImg}
            imgAlt='Foto von Marina Koch'
          />

          <MitgliedCard
            title='Membership Card'
            name='Meike König'
            kita='&bdquo;Moorpiraten&rdquo;'
            adress='Moorstraße 40'
            tel='+49 5484 962821'
            imgSrc={KoenigImg}
            imgAlt='Foto von Meike König'
          />
        </section>
      </main>
    </Layout>
  );
}

export default Mitglieder;
