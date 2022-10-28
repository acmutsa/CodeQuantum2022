import { createStyles, useMantineTheme } from '@mantine/core';
import { TrackCard } from '../TrackCard';

const useStyles = createStyles((theme) => ({
    
}))

export function Tracks() {
    const { classes } = useStyles();
    const theme = useMantineTheme();

    return (
        <>
            {/* array out the cards; need to work on adding challenges separate from tracks */}
            <TrackCard 
                trackTitle={'Beginner'} 
                trackInformation={'This track is for first-time programmers who have little to no technical experience.'} 
                imageFileName={'fox.svg'} 
                floatDirection={'right'}                
            />
            <TrackCard 
                trackTitle={'Intermediate'} 
                trackInformation={'This track is for programmers who have around 3+ years of technical experience.'} 
                imageFileName={'frog.svg'} 
                floatDirection={'left'}                
            />
            <TrackCard 
                trackTitle={'Best Sustainability Hack'} 
                trackInformation={'Do you have an idea that can help better the environment? This challenge is for anyone who wants to create a project that has an environmental focus.'} 
                imageFileName={'squirrel.svg'} 
                floatDirection={'right'}                
            />
            <TrackCard 
                trackTitle={'Best Transition & Change Hack'} 
                trackInformation={'Fall is all about the changing of the seasons and big transitions in life. Create a hack that implements some sort of change or transitionary aspect. The challenge is broad, so interpret it as you will and be creative!'} 
                imageFileName={'mouse.svg'} 
                floatDirection={'left'}                
            />
        </>
    );
}
