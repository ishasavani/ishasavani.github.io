import illustration from 'assets/one.jpg'
import { Routes } from 'components/navigation/routes'

export default function MainPage() {
  return (
    <div
      id="main-page"
      className="w-full flex flex-col space-y-10 md:space-y-20 self-stretch"
    >
      <h1 className="self-center lg:self-start">Isha Savani</h1>
      <div className="flex flex-col lg:flex-row justify-between self-stretch space-x-3 space-y-5 md:px-16 lg:px-32 items-center">
        <div className="h-[200px] flex-grow md:h-auto w-full max-w-[670px] min-w-[400px] overflow-clip">
          <img
            height="444"
            width="624"
            src={illustration}
            className="object-fill object-center"
          />
        </div>
        <ul className="pl-20 md:pl-10 text-2xl md:text-3xl lg:text-5xl w-fit md:pr-20 list-none list-inside md:space-y-3 lg:space-y-10">
          <li>
            <a href={`#${Routes.about}`}>About</a>
          </li>
          <li className="md:space-y-2 lg:space-y-8">
            Research
            <ul className="list-inside list-['-'] pl-16 text-xl md:text-2xl lg:text-5xl lg:pt-3">
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
      </div>
    </div>
  )
}
