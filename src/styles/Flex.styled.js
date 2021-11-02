import styled from 'styled-components';

export const Flex = styled.div`
display:flex;
align-items:center;
flex-wrap:wrap;
// align things side by side
&>div,
&>ul{
    flex:1
}
`