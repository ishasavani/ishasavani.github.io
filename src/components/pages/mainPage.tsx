import illustration from 'assets/one.jpg'
import { Routes } from 'components/navigation/routes'

export default function MainPage() {
  return (
    <div id="main-page" className="w-full flex flex-col space-y-20">
      <div className="w-[630px] min-w-[400px]">
        <h1 className="">Isha Savani</h1>
      </div>
      <div className="flex flex-row flex-wrap justify-between self-stretch space-x-1 space-y-5 px-32 items-center">
        <div className="w-[670px] flex-none">
          <img height="444" width="624" src={illustration} />
        </div>
        <p className="text-6xl w-fit pr-20">
          <ul className="list-none list-inside space-y-10">
            <li>
              <a href={`#${Routes.about}`}>About</a>
            </li>
            <li>
              Research
              <ul className="list-inside list-['-'] space-y-8 pl-16 text-5xl pt-5">
                <li>
                  <a href={`#${Routes.science}`}> Science</a>
                </li>
                <li>
                  <a href={`#${Routes.policy}`}> Policy</a>
                </li>
              </ul>
            </li>
            <li>
              <a href={`#${Routes.civic_engagement}`}>Civic Engagement</a>
            </li>
            <li>
              <a href={`#${Routes.academic_freedom}`}>Academic Freedom</a>
            </li>
            <li>
              <a href={`#${Routes.collaborations}`}>Collaborations</a>
            </li>
          </ul>
        </p>
      </div>
    </div>
  )
}
