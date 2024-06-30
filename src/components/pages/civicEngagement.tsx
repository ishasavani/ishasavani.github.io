import BasePage from 'components/BasePage'
import president_visit from 'assets/president.jpg'

export default function CivicEngagementPage() {
  return (
    <div id="civic-engagement-page">
      <BasePage title="Civic Engagement">
        <p>
          Civic engagement allows the coming together of different perspectives
          in order to better understand the various dimensions of a problem of
          common interest or concern. In the context of availability and
          distribution of critical resources such as water, I work with other
          academics, interested members of the community, governments and
          industries so that the social, political, economical and scientific
          dimensions of the problem can be better understood. This engagement
          inevitably leads to informing my research methodology and bridging the
          gap between theoretical knowledge and the reality of the ground.
          Selected avenues of engagement are mentioned below:
        </p>
        <br />
        <h4>Hosting the President of Somalia at Oslo Science Park </h4>
        <br />
        <p>
          We had the opportunity to host the President of Somalia
          (2022-present), His Excellency Hassan Sheikh Mohamud and his advisors,
          along with the Norwegian Ambassador to Kenya Mr. Gunnar Andreas Holm,
          for an exiting discussion on the indications of fresh water in deep
          aquifers across Somalia, and on how to incorporate hydroclimatic
          extremes- droughts and floods, into sustainability quantification
          based on averaging over historic climate data.
        </p>
        <figure className="py-4">
          <img src={president_visit} />
          <figcaption>
            Oslo Science Park, June 2024 (The president is 6th from the left.)
          </figcaption>
        </figure>
        <br />

        <h4>Talks and dialogues with governmental bodies</h4>
        <br />
        <p>
          <span className="italic font-bold">
            Introduction to Somalia deep groundwater project and geo-thermal
            energy systems in the context of prevailing water scarcity and
            energy demands in India
          </span>
          <br />
          This talk was given at two different occasion in 2023 to the Indian
          Ambassador to Norway (B. Bala Bhaskar), and to representatives from
          the Indian Embassy and tech firm Tech Inde Ltd, Oslo, August 2022,
          February 2023
          <br />
          <br />
          <span className="italic font-bold">
            The role of sustainable and reliable sources of water in addressing
            food security
          </span>
          <br />
          To the Government of Norway, Ministry of Foreign Affairs, Department
          of water, climate change and sustainability, Oslo, Noway, February
          2023
          <br />
          <br />
          <span className="italic font-bold">
            The multidisciplinary field of deep groundwater and indications of
            water in Somali Peninsula
          </span>
          <br />
          To the Government of Puntland, Minister of Water and Minerals, March
          2022 to Oslo (Talk given at Ruden AS's headquarters)
          <br />
          <br />
          <span className="italic font-bold">
            How the Somali diaspora can help with water scarcity challenges
          </span>
          <br />
          To the Government of Puntland, Advisors to the Department of Diaspora
          Affairs, April 2022 (Virtual talk)
          <br />
          <br />
          <span className="italic font-bold">
            There can be no food security without sustainable and reliable
            source of water
          </span>
          <br />
          During the occasion of the Norwegian crown prince’s visit to Nairobi,
          Kenya, November 24-26, 2022. Side note: I unfortunately could not
          attend the event due to catching covid. My colleague delivered the
          talk instead.
          <br />
          <br />
          <span className="italic font-bold">
            Repurposing oil and gas data in search of new fresh groundwater
          </span>
          <br />
          To the National Irrigation Authorities, Government of Kenya, Nairobi,
          May 2022
          <br />
          <br />
          <span className="italic font-bold">
            Somalia deep ground water project and implications for the future of
            water security
          </span>
          <br />
          At the occasion of the Round table conference bringing together
          Norwegian Ambassador Gunnar Andreas Holm, World Food Program,
          Innovation Norway at the Agri-Delegation Conference, Nairobi, Kenya,
          April 2022
          <br />
          <br />
          <span className="italic font-bold">
            Computing groundwater recharge in the Horn of Africa in the absence
            of ground measurements: opportunities and challenges
          </span>{' '}
          <br />
          To the United Nations Food and Agriculture Organization, Nairobi,
          Kenya, April 2022
          <br />
          <br />
        </p>
        <h4>Seminars and educational programs (knowledge sharing)</h4>
        <br />
        <p>
          <span className="italic font-bold">
            East Africa deep groundwater project and the role of the Somali
            diaspora
          </span>
          <br />
          Oslo, August 2022, February 2023
          <br />
          <br />
          <span className="italic font-bold">
            Designing a university readiness program in water resource
            characterization and management
          </span>
          <br />
          To be designed with input from academics, East African community and
          Pharo Foundation, and to be implemented in East Africa. 2023-present
          <br />
          <br />
        </p>
        <h4>Dialogues with private sector and humanitarian sectors</h4>
        <br />
        <p>
          <span className="italic font-bold">
            Dialogues on the meaning of sustainability with regards to water
          </span>
          <br />
          With Fairtrade International, SLB (oil and gas industry), Mestergrønn
          (leading flower industry of Norway), April 2023 – present
          <br />
          <br />
          <span className="italic font-bold">
            {' '}
            Dialogues on why humanitarian sector does not work with the private
            sector to solve global challenges{' '}
          </span>
          <br />
          With International Federation of Red Cross
          <br />
          Oslo, February 2022 (Dialogue took place at at Ruden headquarters)
          <br />
          <br />
        </p>
      </BasePage>
    </div>
  )
}
