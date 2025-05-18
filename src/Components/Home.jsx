import heroImg from "../assets/Images/test.jpg";
import homeStyle from "../assets/Home.module.css";
function Home() {
  return (
    <div className="d-grid gap-4">
      <div className={`${homeStyle.heroImgCont}`}>
        <img className={`${homeStyle.heroImg}`} src={heroImg}></img>
      </div>

      <div>
        <div>
          <h1>What to expect from us?</h1>
          <h4>INDUSTRY EXPERTISE, BREAKTHROUGH RESULTS.</h4>
          <p>
            <strong>AMG LEGAL SOLUTIONS</strong> isn't just keeping with the
            change - we're built for it.
          </p>
          <p>
            We combine sharp legal insight with a rentless commitment to our
            clients. Every case gets our full focus, & every client gets
            strategic partner. We don't just offer legal advice - we empower
            smart, forward thinking decisions.
          </p>
        </div>
        <div>
          <h4>EQUITY ENSURED FOR EVERY INDIVIDUAL</h4>
          <p>
            At AMG legal solutions we understand that behind every legal issue
            is a person, a story & a goal.That's why we take time to truly
            understand not just the case but your perspective. By combining a
            clear vision of the bigger picture with the insights gained from
            everyday experiences, we offer thoughtful proactive solutions that
            fit your unique situation.
          </p>
          <p>
            At AMG you are not just another case - you've our priority & we're
            with you at every step of the way.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
