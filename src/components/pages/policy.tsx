import BasePage from 'components/BasePage'
import wind from 'assets/wind.png'


export default function PolicyPage() {
  return (
    <div id="policy-page">
      <BasePage title="Policy Research">
       <figure className="py-4">
          <img src={wind} />
        </figure>
        <br />
         <p>
          <span className="italic font-bold">Critical Raw Cartographies </span>
          <br />
          <br />
          Through the examination of circum-globular economic supply chains,
          history and memory of mining in Europe and Greenland, EU’s Critical
          Raw Material Act launched in 2023, is reviewed to reveal deeper
          meanings of “green” in the light of Europe’s energy transition
          ambitions.
          <br />
          <br />
          Funding: University of Amsterdam; Ruden AS (2024)
        </p>
         <br />
        <br />
        <p>
          <span className="italic font-bold">
            Pioneering water taxonomy using satellite data: the case of rose
            farming in semi-arid Kenya{' '}
          </span>
          <br />
          <br />
          The European Corporate Sustainability Directive will require big
          companies ({'>'}1000 employees) to report on their sustainability
          practices, but what does sustainability actually mean? In this
          project, we will try to capture the concept of sustainability in
          quantitative (volumetric) and qualitative parameters with a case study
          based in Kenya- a semi-arid country which exports about 40% of world's
          cut-flowers. We hope to inform the Corporate Sustainability Directive
          through combining soil physics, geology and engagement with flower
          industry.
          <br />
          <br />
          Funding: Norwegian Space Center (2024-present)
        </p>
        <hr />
        <p>
          <span className="italic font-bold">
            Revisiting Water Directives
          </span>
          <br />
          <br />
          We are re-visitng Europe's key legislations, the Water Framework
          Directive and the Marine Strategy Framework directive with the aim to revise the directvies in light of current scientific insight. Any future governance of these resources reqiures prior undersanding. Any future equitable distributin of these water resources and responsible mangagement is emboldened by well informed governance models.   
          <br />
          <br />
          Funding: Water4All Horizon Project (2024-present)
        </p>
        <hr />
    

      </BasePage>
    </div>
  )
}
