import styled from 'styled-components';

const Card = () => {
    return (
    <List1>
      <Card1>
        <Heading>
          <Text1>01/16/2023 at 11:00am PST</Text1>
          <Text2>Biden's German Shepherd Major: The First Rescue Dog in the White House</Text2>
        </Heading>
        <Text3>President Joe Biden has added a new member to the White House family - a German shepherd named Major. Major was adopted from the Delaware Humane Association and is the first rescue dog to live in the White House. The adoption of Major has brought attention to animal welfare and the importance of adopting rescue animals. Major is already a beloved member of the Biden family and has brought joy to the White House.</Text3>
        <Text4>Source: [Centre]</Text4>
      </Card1>
      <Card1>
        <Heading>
          <Text1>01/16/2023 at 11:00am PST</Text1>
          <Text2>Biden's German Shepherd Major: The First Rescue Dog in the White House</Text2>
        </Heading>
        <Text3>President Joe Biden has added a new member to the White House family - a German shepherd named Major. Major was adopted from the Delaware Humane Association and is the first rescue dog to live in the White House. The adoption of Major has brought attention to animal welfare and the importance of adopting rescue animals. Major is already a beloved member of the Biden family and has brought joy to the White House.</Text3>
        <Text4>Source: [Centre]</Text4>
      </Card1>
      <Card1>
        <Heading>
          <Text1>01/16/2023 at 11:00am PST</Text1>
          <Text2>Biden's German Shepherd Major: The First Rescue Dog in the White House</Text2>
        </Heading>
        <Text3>President Joe Biden has added a new member to the White House family - a German shepherd named Major. Major was adopted from the Delaware Humane Association and is the first rescue dog to live in the White House. The adoption of Major has brought attention to animal welfare and the importance of adopting rescue animals. Major is already a beloved member of the Biden family and has brought joy to the White House.</Text3>
        <Text4>Source: [Centre]</Text4>
      </Card1>
      </List1>
    )
  }

  const List1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`
  
  const Card1 = styled.div`
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 24px 20px;
    gap: 20px;
    background-color: #ffffff;
    width: 582px; 
    margin-top: 56px; 
  `
  const Heading = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;
  `
  const Text1 = styled.div`
    text-align: left;
    vertical-align: middle;
    font-size: 16px;
    font-family: Source Code Pro;
    line-height: 150%;
    color: #000000;
  `
  const Text2 = styled.div`
    text-align: left;
    vertical-align: top;
    font-size: 24px;
    font-family: Source Serif Pro;
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
  const Text4 = styled.div`
    text-align: left;
    vertical-align: middle;
    font-size: 16px;
    font-family: Spline Sans;
    line-height: 150%;
    color: #000000;
  `

  export default Card; 


