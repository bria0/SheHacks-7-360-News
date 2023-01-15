import styled from 'styled-components';

const Faq = () => {
    return (
      <Faq1>
        <Text1>FAQ</Text1>
        <Question>
          <Text2>How does it work?</Text2>
          <Text3>360° News aggregates and summarizes articles from left, centre, and right leaning sources to provide readers with a 360° perspective on current events, using data from the News API and summarization with Cohere. </Text3>
        </Question>
        <Question>
          <Text2>Who made it?</Text2>
          <Text3>Brianna, Catriona, Christina, and Feyi.</Text3>
        </Question>
      </Faq1>
    )
  }
  
  const Faq1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 32px;
    width: 622px; 
    margin-top: 64px; 
    margin-bottom: 80px; 
  `
  const Text1 = styled.div`
    text-align: left;
    vertical-align: middle;
    font-size: 24px;
    font-family: Spline Sans;
    line-height: 150%;
    color: #000000;
  `
  const Question = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 18px;
  `
  const Text2 = styled.div`
    text-align: left;
    vertical-align: top;
    font-size: 24px;
    font-family: 'Source Serif Pro';
    line-height: 139.9999976158142%;
    color: #000000;
  `
  const Text3 = styled.div`
    text-align: left;
    vertical-align: top;
    font-size: 15px;
    font-family: Spline Sans;
    line-height: 150%;
    color: #000000;
  `

  export default Faq; 
  