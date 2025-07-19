import BasePage from 'components/BasePage'

export default function ContactPage() {
  return (
    <div id="Contact-page">
      <BasePage title="">
        <div className="space-y-10">
          <h3>You can find me here:</h3>
          <p>Email: isha.savani@gmail.com </p>
          <p>
            Office: <br />
            <div className="ml-5">
              Ruden AS, Forskningsparken (Oslo Science Park), Gaustadalleen 21,
              0349 Oslo, Norway
            </div>
          </p>
        </div>
      </BasePage>
    </div>
  )
}
