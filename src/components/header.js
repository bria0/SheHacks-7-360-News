import styled from 'styled-components';

const Header = () => {
    return (
      <Header1>
      <Text>
        <Text1>The Whole Story</Text1>
        <Text2>FAQ</Text2>
      </Text>
      <Border />
    </Header1>
    )
  }

  const  Header1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 24px;
`
const  Text = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`
const  Text1 = styled.p`
  text-align: left;
  vertical-align: middle;
  font-size: 20px;
  font-family: Spline Sans;
  line-height: 150%;
  color: #000000;
`
const  Text2 = styled.p`
  text-align: left;
  vertical-align: middle;
  font-size: 20px;
  font-family: Spline Sans;
  line-height: 150%;
  color: #000000;
`
const  Border = styled.div`
  height: 2px;
  width: 622px;
  background-color: #5cceff;`
  
  export default Header;
  