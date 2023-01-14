import styled from 'styled-components';

const List = () => {
    return (
      <List1>
        <ListItem>
          <Text1>Yellen debt crisis</Text1>
        </ListItem>
        <ListItem>
          <Text2>Moscow deportation</Text2>
        </ListItem>
        <ListItem>
          <Text3>Gas stove</Text3>
        </ListItem>
        <ListItem>
          <Text4>Elon Musk Twitter</Text4>
        </ListItem>
      </List1>
    )
  }
  
  const List1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 14px;
  `
  const ListItem = styled.div`
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 24px 20px;
    gap: 296px;
    background-color: #c4edff;
    width: 582px;
  `
  const Text1 = styled.div`
    text-align: left;
    vertical-align: middle;
    font-size: 20px;
    font-family: Spline Sans;
    line-height: 150%;
    color: #003f79;
  `
  const Text2 = styled.div`
    text-align: left;
    vertical-align: middle;
    font-size: 20px;
    font-family: Spline Sans;
    line-height: 150%;
    color: #003f79;
  `
  const Text3 = styled.div`
    text-align: left;
    vertical-align: middle;
    font-size: 20px;
    font-family: Spline Sans;
    line-height: 150%;
    color: #003f79;
  `
  const Text4 = styled.div`
    text-align: left;
    vertical-align: middle;
    font-size: 20px;
    font-family: Spline Sans;
    line-height: 150%;
    color: #003f79;
  `

  export default List; 
  