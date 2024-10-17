import { Routes } from './routes'

export default function NavigationTopBar() {
  return (
    <div className="pl-5 w-screen overflow-hidden h-10 hover:h-10 bg-black-400 flex flex-row space-x-7 font-mono">
      <a href={`#${Routes.about}`}>About</a>
      <a href={`#${Routes.main}`}>TOC</a>
      <a href={`#${Routes.science}`}>Science</a>
      <a href={`#${Routes.policy}`}>Policy</a>
      <a href={`#${Routes.civic_engagement}`}>Civic Engagement</a>
      <a href={`#${Routes.academic_freedom}`}>Academic Freedom</a>
      <a href={`#${Routes.collaborations}`}>Collaborations</a>
      <a href={`#${Routes.contact}`}>Contact</a>
    </div>
  )
}
