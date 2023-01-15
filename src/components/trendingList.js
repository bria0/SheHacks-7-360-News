import styled from 'styled-components';

const List = () => {
    return (
      <List1>
        <Text0>Trending in the last 24 hours</Text0>
        <ListItem>
          <Text1>Yellen debt crisis</Text1>
        </ListItem>
        <ListItem>
          <Text1>Moscow deportation</Text1>
        </ListItem>
        <ListItem>
          <Text1>Gas stove</Text1>
        </ListItem>
        <ListItem>
          <Text1>Elon Musk Twitter</Text1>
        </ListItem>
      </List1>
    )
  }

  const  Text0 = styled.div`
  text-align: left;
  vertical-align: middle;
  font-size: 18px;
  font-family: Spline Sans;
  line-height: 150%;
  color: #000000;
  margin-top: 72px; 
  margin-bottom: 8px; 
`
  
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
    &:hover {
      background-color: #ADE2F9; 
      transition: background-color 0.5s ease;
      cursor: pointer; 
    }
  `
  const Text1 = styled.div`
    text-align: left;
    vertical-align: middle;
    font-size: 20px;
    font-family: Spline Sans;
    font-weight: 700; 
    line-height: 150%;
    color: #003f79;
  `

  export default List; 
