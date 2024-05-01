import illustration from 'assets/one.jpg'
import BasePage from 'components/BasePage'
import { Routes } from 'components/navigation/routes'

export default function CollaborationPage() {
  return (
    <BasePage title="Collaborations">
      <p className="max-w-prose">
        <ul className="list-inside space-y-8">
          <li>
            Work with me!
            <br />
            <br />
            It is exiting to work with people from across disciplines. Here are
            some of my key collaborators:
            <br />
            <br />
            <span className="text-3xl">Science </span>
            <br />
            <br />
            Yvan Joseph Orsolini, NILU Norway; Odd Anderson, Sintef, Norway;
            Pushpendra Singh, National Institute of Hydrology, India; Horizon
            Water4All consortium- Claudia Bertoni and Cristina Corradin,
            University of Trieste; Jordan Phethean, University of Derby;
            Elizabeth Quiroga Jordan and Dorrotya Bartucz, Ruden Water, Norway.
          </li>
          <li>
            <span className="text-3xl"> Policy </span>
            <br />
            <br />
            NexusNET collective https://nexusnet-cost.com/; Reza Lahidji
            (economics), Future Horizons, Norway; Melanie Vangriken (law),
            Univesity of Oslo, Norway; Mestergrønn (flower industry), Norway;
            Barbara Merson and Angelo Camerlenghi (geoscience), National
            Institute of Oceanography and Applied Geophysics, Italy.
          </li>
          <li>
            <span className="text-3xl"> Civic Engagement</span>
            <br />
            <br />
            Francesca Beauseng, Pharo foundation (UK and Somaliland); Elizabeth
            Quiroga Jordan, Helene Ruden, and Fridtjov Ruden from Ruden Water
            Oslo, Norway; Mahamed Farah Siad, Bode, Norway.
          </li>
          <li>
            <span className="text-3xl">Academic Freedom</span>
            <br />
            <br />
            Sruti Bala, University of Amsterdam; Lotika Singha, independent
            researcher, UK; Tuula Sharma Vassvik, independent researcher and
            artist, Norway; Girma Parris, Case Western Reserve University, USA;
            Jerome Kujur and Rose Xaxa (activists and scholars associated with
            Netarhat movement, India); Dayamani Barla (Iron Lady of India)
          </li>
          <li>
            <span className="text-3xl"> Science-philosophy-arts project </span>
            <br />
            <br />
            Divya Nadkarni, Jeff Diamanti, Flo Evans, Ciara Patten affiliated
            with University of Amsterdam (cultural analysis / philosophy);
            Melody Matin, Goldsmiths University of London (forensic
            architecture).
          </li>
        </ul>
      </p>
    </BasePage>
  )
}
