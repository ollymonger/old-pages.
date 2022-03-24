import React from "react";
import { Text } from "react-native";

// Slides must have a title component, stretching across the slide.
// Must also have room at the top of the tile detailing how to navigate the slide.


// This slide is to is the first screen, contains a photo and text about my journey as a developer.
// In addition to this, it could also contain some of my URLs on the internet. youtube, ect
export const AboutMe: React.FC<{}> = () => {
    return(
        <>
            <Text style={{fontFamily:'Inter_300Light', color:'lightgray', fontSize:'0.75rem', paddingLeft:'5vw', paddingTop:'5vh', width:'50%', textAlign:'justify'}}>I am a self-employed, self-taught Software Engineer with 4/5 years experience of coding (as a hobby) and about 6/7 months with my current employment! I am always looking for new things to learn, whether that be Dev Ops or learning a complete new language. </Text>
            <Text style={{fontFamily:'Inter_300Light', color:'lightgray', fontSize:'0.75rem', paddingLeft:'5vw', paddingTop:'2vh', width:'90%', textAlign:'justify'}}>During my coding adventure, I have been able to have access to suites like: Microsoft Azure and Amazon's AWS as my tasks had required me to use these platforms. In my free time however, I was able to apply and use the Google Cloud to host a variety of different projects on my "own" servers and manage them accordingly.</Text>
        </>
    );
}
