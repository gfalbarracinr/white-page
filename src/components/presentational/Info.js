import React from 'react';
import Header from './Header';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import ResponsiveEmbed from 'react-responsive-embed';
import { FacebookShareButton, TwitterShareButton, FacebookIcon,
    TwitterIcon } from 'react-share';

const Wrapper = styled.div`

    display:grid;
    grid-template-columns: 2.5vw 96vw;
    grid-template-rows: 100%;
    font-family: 'Markazi Text', serif;
    text-align: center;

`
const Text = styled.div`
text-align:justify;
scroll-behavior:smooth;
font-size: 150%;
margin-left: 30px;
margin-right: 30px;

 & > h1{
     text-align: center;
 }
 & > h3, ul{
     text-align: left;
 }

 & > ul > li > a:hover{
    color: #c0bcb7;
 }
 & > p > a:hover, & > a:hover{
    color: #c0bcb7;
 }

 @media (min-width: 900px) {
    margin-right: 10%;
    margin-left: 10%;
  }
`
const Img = styled.img`
    width: 100%;
    height: auto;
`
const SocialMedia = styled.div`
  justify-content: space-evenly;
  display: flex;
  & > div{
      cursor: pointer
  }
`
const Info = (history) => {
    return (
        <Wrapper>
            <Header history={history}/>
            <Text>
                <h1>THE WHITE PAGE</h1>
                <p>
                    In the middle of his career, John Cage started to experiment with the concept of silence,
                    he understood music is composed with sounds and silences, the sound and silence depend on
                    time rather than acoustic composition. He understood as well that music and our actions have
                    to aim nature because nature is the art essence and nature is not deterministic he started
                    playing with the chance in his compositions
                </p>
                <p>
                    At that moment he started to use <a target="_blank" rel="noopener noreferrer" href="http://www.ichingonline.net/index.php">I Ching</a>, the Chinese oracle ( an ancient Chinese book
                    written in Zhou dynasty where you can ask for your future  through cards or hexagrams) 
                    he asked every time if he had to write a silence or a sound in every single piece of the 
                    sheet, thus he wrote <a href="https://www.youtube.com/watch?v=eAjKD12RkEY" target="_blank" rel="noopener noreferrer">“Music of Changes”</a>
                </p>

                <p>
                    Inspired by his new knowledge of silence, he reached his better moment in his career, he
                    wrote works like <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=ykMhaZv-Q5g">Lecture about nothing</a> and <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=XOtfyYDeFRk">Child of tree</a>. In all works, the new
                    sounds stand out, and the silence is a fundamental part of all above works

                </p>
                <p>
                    In 1951 his colleague Robert Rauschenberg released his most recent work “The white Painting”,
                    a series of panels painted in white, which caused great controversy. Cage and Rauschenberg told
                    to press that this art has involved to the public because the elements to be exhibited are the
                    public and Rauschenberg just made a frame to exhibit art made by the public. Cage had been moved
                    by this work, he had work in the same concept and he released 4’ 33’’ in 1954, his most famous
                    composition, where he took the minimalism and conceptualism to its fullest meaning. There are
                    four and a half minutes where the pianist open and close the piano, Cage defined those movements
                    previously. The music in this composition is made by the public

                </p>
                <Img alt="Robert Rauschenberg, White Painting [three panel], 1951" src="https://s3-us-west-2.amazonaws.com/sfmomamedia/media/t/collection_images/MIwC2llijnPQ.jpg"/>
                <a target="_blank" rel="noopener noreferrer" href="https://www.sfmoma.org/artwork/98.308.A-C#views-of-the-artwork"> Robert Rauschenberg, White Painting [three panel], 1951</a>
                <p>
                    Cage’s work shock me, in nowadays people critics minimalism because its lack of creativity,
                    someones even state that this kind of work should be avoided because its simplicity, but the
                    target of this art is people get involved with the work, the public has to be an active part
                    in the composition process and it makes people see new work each time they visit the same
                    exposition. I was getting inspired by Lecture of nothing ( where Cage defined the length 
                    of spaces between words randomly) and 4’ 33’’ ( where the public make the sounds and Cage makes
                    the silence). I launch The white page, a book with only one page, as wider and as larger as 
                    you want, this book is a collective construction among all to understand that we can all make 
                    art.
                </p>
                <ResponsiveEmbed src='https://www.youtube.com/embed/HypmW4Yd7SY' allowFullScreen />
                
                <h3>References </h3>
                <ul>
                    <li>“I Ching, the Classic Book-of-Changes.” <a target="_blank" rel="noopener noreferrer" href="http://www.ichingonline.net/index.php">I Ching Online.NET</a></li>
                    <li>“John Cage (1912-1992).”<a target="_blank" rel="noopener noreferrer" href="http://www.letraslibres.com/mexico/john-cage-1912-1992">Letras Libres</a></li>
                    <li>“Robert Rauschenberg, White Painting [Three Panel], 1951.” <a target="_blank" rel="noopener noreferrer" href="https://www.sfmoma.org/artwork/98.308.A-C#views-of-the-artwork">SFMOMA</a></li>
                    <li>La anarquía Del Silencio: John Cage y El Arte Experimental. Museu D'Art Contemporani De Barcelona, 2009.</li>
                    <li>hpb1811. “Perfiles - John Cage.” <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=bjT5uJ6WznA">YouTube, 15 Aug. 2015</a></li>
                    <li>spelib. “About I Ching.” <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=c807yflr4p4">YouTube, 20 Aug. 2012</a></li>
                    
                </ul>
                <SocialMedia>
                    <TwitterShareButton
                    url={"https://whitepageapp.herokuapp.com/"} title = "I'd like to invite you to write in #TheWhitePage @GioAlbarracin"
                    >
                        <TwitterIcon size={32} round={false} />
                    </TwitterShareButton>
                    <FacebookShareButton
                    url={"https://whitepageapp.herokuapp.com/"} quote = "I'd like to invite you to write in The White Page at" 
                    >
                        <FacebookIcon size={32} round={false}/>
                    </FacebookShareButton>
                </SocialMedia>
            </Text>
        </Wrapper>
    );
};

export default withRouter(Info);