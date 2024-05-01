import illustration from 'assets/one.jpg'
import { Routes } from 'components/navigation/routes'

export default function CollaborationPage() {
  return (
    <div id="main-page" className="w-full flex flex-col space-y-20">
      <div className="w-[630px] min-w-[400px]">
        <h1 className="">Collaborations</h1>
      </div>
      <div className="flex flex-row flex-wrap justify-between self-stretch space-x-1 space-y-5 px-32 items-center">
        <div className="w-[670px] flex-none">
          <img height="444" width="624" src={illustration} />
        </div>
        <p className="text-6xl w-fit pr-20">
              Research
              <ul className="list-inside list-['-'] space-y-8 pl-16 text-5xl pt-5">
                <li>
                  <a href={Routes.science}> Science</a>: Yvan Joseph Orsolini, NILU Norway; Odd Anderson, Sintef, Norway; Pushpendra Singh, National Institute of Hydrology, India; Horizon Water4All consortium- Claudia Bertoni and Cristina Corradin, University of Trieste; Jordan Phethean, University of Derby; Elizabeth Quiroga Jordan and Dorrotya Bartucz, Ruden Water, Norway. 
                </li>
                <li>
                  <a href={Routes.policy}> Policy</a>: NexusNET collective https://nexusnet-cost.com/; Reza Lahidji (economics), Future Horizons, Norway; Melanie Vangriken (law), Univesity of Oslo, Norway; Mestergrønn (flower industry), Norway; Barbara Merson and Angelo Camerlenghi (geoscience), National Institute of Oceanography and Applied Geophysics, Italy. 
                </li>
              </ul>
            </li>
            <li>
              <a href={Routes.civic_engagement}>Civic Engagement</a>: Francesca Beauseng, Pharo foundation (UK and Somaliland); Elizabeth Quiroga Jordan, Helene Ruden, and Fridtjov Ruden from Ruden Water Oslo, Norway; Mahamed Farah Siad, Bode, Norway.
            </li>
            <li>
              <a href={Routes.academic_freedom}>Academic Freedom</a>: Sruti Bala, University of Amsterdam; Lotika Singha, independent researcher, UK; Tuula Sharma Vassvik, independent researcher and artist, Norway; Girma Parris, Case Western Reserve University, USA; Jerome Kujur and Rose Xaxa (activists and scholars associated with Netarhat movement, India); Dayamani Barla (Iron Lady of India)
            </li>
            <li>
              <a href={Routes.collaborations}>Other</a> Critical Raw Cartographies Collective: Divya Nadkarni, Jeff Diamanti, Flo Evans, Ciara Patten affiliated with University of Amsterdam (cultural analysis / philosophy); Melody Matin, Goldsmiths University of London (forensic architecture).
            </li>
          </ul>
        </p>
      </div>
    </div>
  )
}

Text: 
