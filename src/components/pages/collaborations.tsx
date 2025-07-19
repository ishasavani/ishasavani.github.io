import BasePage from 'components/BasePage'

export default function CollaborationPage() {
  return (
    <BasePage title="Collaborations">
      <p className="max-w-prose">
        <ul className="list-inside space-y-8">
          <li>
            Work with me!
            <br />
            <br />
            <span className="text-3xl">Science </span>
            <br />
            <br />
            Yvan Joseph Orsolini, NILU Norway; Odd Anderson, Sintef, Norway;
            Horizon Water4All consortium- Claudia Bertoni, University of
            Trieste, Jordan Phethean, University of Derby; Elizabeth Quiroga
            Jordan, Dorrotya Bartucz, Birgit Klink, Ruden Water, Norway.
          </li>
          <li>
            <span className="text-3xl"> Policy </span>
            <br />
            <br />
            Sarah Milliken (landscape science and policy), Univeristy of
            Greenwich, UK; Reza Lahidji, Future Horizon, Norway; Emma Mazzotta
            (political science), OGS, Italy; Stefano Burchi, Gabriel Eckstein,
            International Association for Water Law (AIDA).
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
            Tuula Sharma Vassvik, Oslo Met, Norway; Girma Parris, Case Western
            Reserve University, USA; Jerome Kujur and Rose Xaxa (activists and
            scholars associated with Netarhat movement, India); Dayamani Barla
            (Iron Lady of India)
          </li>
          <li>
            <span className="text-3xl"> Science-philosophy </span>
            <br />
            <br />
            Divya Nadkarni, University of Amsterdam (cultural analysis /
            philosophy)
          </li>
        </ul>
      </p>
    </BasePage>
  )
}
