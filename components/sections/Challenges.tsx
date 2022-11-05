import { TrackCardLeft } from '../TrackCardLeft';
import { TrackCardRight } from '../TrackCardRight';

export function Challenges() {
  return (
    <>
      <TrackCardRight
        trackTitle="Best Sustainability Hack"
        trackInformation="Do you have an idea that can help better the environment? This challenge is for anyone who wants to create a project that has an environmental focus."
        imageFileName="mouse.svg"
      />
      <TrackCardLeft
        trackTitle="Best Transition & Change Hack"
        trackInformation="Fall is all about the changing of the seasons and big transitions in life. Create a hack that implements some sort of change or transitionary aspect. The challenge is broad, so interpret it as you will and be creative!"
        imageFileName="squirrel.svg"
      />
      <TrackCardRight
        trackTitle="Most Creative Use of Twilio"
        trackInformation="Twilio allows you to incorporate mobile messaging, phone calls and a ton of other awesome communication features right into your hackathon project using a web service API. Are you building an e-commerce website and want to send text notifications or email confirmations once an order is completed? Or maybe you'd like to verify users based on their mobile numbers? Twilio makes all this possible and more. Build a hack that simplifies your life using any Twilio API for a chance to win some awesome prizes!"
        imageFileName="mlh-logo.svg"
      />
      <TrackCardLeft
        trackTitle="Best Domain Name from Domain.com"
        trackInformation="Register a .Tech domain name using Domain.com during the weekend for your chance to win a Domain.com branded backpack for you and each member of your team! Each team may submit one entry per person on the team. The more creative the domain the better!"
        imageFileName="mlh-logo.svg"
      />
      <TrackCardRight
        trackTitle="Most Creative Use of GitHub"
        trackInformation="GitHub is one of the best ways to collaborate, push code, get feedback, and show the world what you’ve built during a hackathon. To take it a step further, GitHub is now offering you access to industry tools, events & learning resources through something called GitHub Global Campus. Win this weekend’s Most Creative Use of GitHub prize category, first by signing up for GitHub Global Campus and second by using a GitHub repository to host your hackathon project’s code! Make sure your use of GitHub stands out with a detailed ReadMe page, meaningful pull requests and collaboration history, and even a GitHub pages deployment!"
        imageFileName="mlh-logo.svg"
      />
      <TrackCardLeft
        trackTitle="Best Use of Google Cloud"
        trackInformation="Build your hackathon project with a suite of secure storage, powerful compute, and integrated data analytics products provided by Google Cloud."
        imageFileName="mlh-logo.svg"
      />
    </>
  );
}
