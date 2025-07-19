import illustration from 'assets/me.jpg'

export default function AboutPage() {
  return (
    <div id="about-page">
      <div className="pt-10 flex flex-col w-full">
        <h2 className="self-center lg:self-start">About</h2>
        <div className="mt-10">
          <div className="flex flex-row flex-wrap justify-between self-stretch space-x-1 space-y-5 px-32">
            <div className="w-[670px] flex-none">
              <img height="444" width="624" src={illustration} />
            </div>
            <p className="max-w-prose">
              I am a research scientist working at Ruden Water, a social
              enterprise based in Oslo, Norway. My research lies at the
              intersection of water science and atmospheric dynamics. I am
              interested in bringing insights from theoretical physics and
              geology to governments, industry and to the community in an effort
              to integrate scientific knowledge and understanding of
              availability and distribution of transboundary resources to inform
              policies, regulations and national and international laws. My
              journey through time and scales of physics is summarized below:
              <br />
              <br />
              Bachelor's in Astronomy, Case Western Reserve University,
              Cleveland, USA (2006-2010)
              <br />
              <br />
              Master's in Particle Physics, University of Amsterdam, NIKHEF,
              Netherlands (2010-2012)
              <br />
              <br />
              PhD in Computational Physics (porous media), Norwegian University
              of Science and Technology, Trondheim, Norway (2012-2016)
              <br />
              <br />
              Functional design engineer at Advanced Semiconductor Materials
              Lithography (ASML), Netherlands (2017-2020)
              <br />
              <br />
              Research Scientist at Ruden AS, Oslo, Norway (2020-present)
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
