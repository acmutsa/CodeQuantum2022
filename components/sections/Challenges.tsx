import { TrackCardLeft } from '../TrackCardLeft';
import { TrackCardRight } from '../TrackCardRight';

export function Challenges() {
  return (
    <>
      <TrackCardRight
        trackTitle='Best Sustainability Hack'
        trackInformation='Do you have an idea that can help better the environment? This challenge is for anyone who wants to create a project that has an environmental focus.'
        imageFileName='mouse.svg'
      />
      <TrackCardLeft
        trackTitle='Best Transition & Change Hack'
        trackInformation='Fall is all about the changing of the seasons and big transitions in life. Create a hack that implements some sort of change or transitionary aspect. The challenge is broad, so interpret it as you will and be creative!'
        imageFileName='squirrel.svg'
      />
    </>
  );
}
