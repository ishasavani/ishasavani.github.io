import BasePage from 'components/BasePage'
import president_visit from 'assets/president.jpg'

export default function CivicEngagementPage() {
  return (
    <div id="civic-engagement-page">
      <BasePage title="Civic Engagement">
        <p>
          In the context of availability and
          distribution of critical resources such as water, I work with other
          academics, interested members of the community, governments and
          industries to better understand the social, political, economical and scientific
          dimensions of the problem. This engagement
          inevitably leads to informing my research methodology and bridging the
          gap between theoretical knowledge and the reality on the ground.
          Selected avenues of engagement are mentioned below:
        </p>
        <br />
        <h4>Hosting the President of Somalia at Oslo Science Park </h4>
        <br />
        <p>
          We had the opportunity to host the President of Somalia
          (2022-present), Hassan Sheikh Mohamud and his advisors,
          along with the Norwegian Ambassador to Kenya, Gunnar Andreas Holm,
          for an exiting discussion on the indications of fresh water in deep
          aquifers across Somalia, and on how to incorporate hydroclimatic
          extremes- droughts and floods into the quantification of sustainability
          of deep-groundwater resources.
        </p>
        <figure className="py-4">
          <img src={president_visit} />
          <figcaption>
            Oslo Science Park, June 2024 (The president is 6th from the left.)
          </figcaption>
        </figure>
        <br />

        <h4>Engagement with governmental bodies</h4>
        <br />
        <p>
            <span className="italic font-bold">
              What would an undergraduate and graduate program in Deep Grounwater Science look like?
            </span>
            <br />
            We were visited by the Government of Puntland in Oslo Science Park in October 2024. Now that the Somali peninsula has been mapped for deep-groundwater resources, we disucssed the implications of the project in addressing water scarcity, and emphasized the importance of integrating the scientific know-how within the local educational programs in Somali higher education.
          <br />
          <br />
        
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
            water in the Somali Peninsula
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
        <h4>Seminars organized with the Somali diaspora in Norway</h4>
        <br />
        <p>
          <span className="italic font-bold">
            East Africa deep groundwater project and the role of the Somali
            diaspora
          </span>
          <br />
          Interkulturelt Museum Oslo, August 2022; Virtual webinar, February 2023; Oslo Science Park February 2024
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
            Is flower-farming sustainable in the vicinity of Lake Naivasha, Kenya?
          </span>
          <br />
          With Fairtrade International, SLB (oil and gas industry), Mestergrønn
          (leading flower industry of Norway), April 2023 - April 2025
          <br />
          <br />
        </p>
        <p>
          <span className="italic font-bold">
            Dialogues on why humanitarian sector does not work with the private
            sector to solve global challenges
          </span>
          <br />
          With International Federation of Red Cross
          <br />
          Oslo Science Park, February 2022
          <br />
          <br />
          </p>
          <p>
          <h4>Academic engagements</h4>
          <br />
      
          <span className="italic font-bold">
          Integrating hydrogeological and WEFE Nexus considerations in the EU Taxonomy
          </span>
          <br />
          This talk was about informing the EU Taxonomy which is a key regulation in Europe that mandates large companies to report on their sustainability practices. Using the case study of flower farming in the Lake Naivasha basin in Kenya, we created a mathematical model using satellite data of key climate variables to compute a quantitative indicator of water sustainabiltiy. Talks on this project were given to policy researchers from the COST NexusNet collective, and to matehmaticians in the Norwegian Space Center throughout 2025.
          <br />
          <br />
          </p>
        <p>
        <span className="italic font-bold">
        Generalization of the Water Framework Directive{' '}
        </span>
        <br />
        This talk was given to law academics from the COST OFFSource collective, on the introduction of unconventional water resources to Europe's key legislation on water- the Water Framework Directive.
        <br />
        Oslo Science Park, April 2025
        <br />
        <br />
        </p>
                        
      </BasePage>
    </div>
  )
}
