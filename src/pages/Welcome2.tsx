import styled from 'styled-components';
const Div = styled.div`
  border: 1px solid red;
  &:hover{
    background: red;
  }
`
const BlueBox = styled(Div)`
  border-color: blue;
`
export const Welcome2: React.FC = () => {
  return (
    <div>
      <Div>
        Hi
      </Div>
      <BlueBox>
        hi
      </BlueBox>
    </div>
  )
}