import { TrackCardLeft } from '../TrackCardLeft';
import { TrackCardRight } from '../TrackCardRight';

export function Tracks() {
  return (
    <>
      <TrackCardRight
        trackTitle="Beginner"
        trackInformation="This track is for first-time programmers who have little to no technical experience."
        imageFileName="fox.svg"
      />
      <TrackCardLeft
        trackTitle="Intermediate"
        trackInformation="This track is for programmers who have around 3+ years of technical experience."
        imageFileName="frog.svg"
      />
    </>
  );
}
