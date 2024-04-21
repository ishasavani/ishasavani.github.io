import illustration from 'assets/me.jpg'

export default function AboutPage() {
  return (
    <div id="about-page">
      <div className="pt-10 flex flex-col w-full">
        <h2 className="">About</h2>
        <div className="mt-10">
          <div className="flex flex-row flex-wrap justify-between self-stretch space-x-1 space-y-5 px-32">
            <div className="w-[670px] flex-none">
              <img height="444" width="624" src={illustration} />
            </div>
            <p className="max-w-prose">
              I am a research scientist working at Ruden Water, a social
              enterprise based in Oslo, Norway. My research lies at the
              intersection of water and climate. I am interested in bringing
              insights from theoretical physics and geology to governments,
              industry and the community in an effort to collaboratively
              integrate scientific knowledge and understanding of availability
              and distribution of transboundary resources to inform policies,
              regulations and national and international laws. My journey
              through time and scales of physics is illustrated in a nutshell in
              the figure below:
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
