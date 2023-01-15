import styled from 'styled-components';

const Header = () => {
    return (
      <Header1>
      <Text>
        <Text1>360° News</Text1>
        <Text1>FAQ</Text1>
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
  padding-top: 72px;
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
  font-size: 16px;
  font-family: Spline Sans;
  line-height: 150%;
  color: #000000;
`
const  Border = styled.div`
  height: 2px;
  width: 622px;
  background-color: #5cceff;
  margin-bottom: 32px;
  `
  
  export default Header;