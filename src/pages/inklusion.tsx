import React from 'react';
import InklusionJSON from '../text/inklusion.json';
import InterviewQA from '../components/InterviewQA';
import inklusionStyles from '../styles/inklusion.module.css';
import Layout from '../components/Layout';
import iconelderly from '../assets/images/Aged-Care.jpg';

function Inklusion() {
  return (
    <Layout>
      <main>
        <h1>Inclusion</h1>
        <h2>The interview of the SKF with our elderlyCare members.</h2>
        <div className={inklusionStyles.imgInklusion}>
          <img src={iconelderly} alt='Inklusion' />
          <figcaption>Foto: Unsplash</figcaption>
        </div>

        {InklusionJSON.inkulsionInterview.map(
          (item: {
            index: React.Key | null | undefined;
            inklusionFrage: string;
            inklusionTagesmutter: string;
            inklusionAntwort: string;
          }) => {
            return (
              <InterviewQA
                key={item.index}
                question={item.inklusionFrage}
                person={item.inklusionTagesmutter}
                answer={item.inklusionAntwort}
              />
            );
          }
        )}
      </main>
    </Layout>
  );
}

export default Inklusion;
