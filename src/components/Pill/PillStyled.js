import styled from 'styled-components'

export const Container = styled.div`
    background: ${({ isPrimary, theme }) => isPrimary ? theme.primary : theme.grey};
    font-weight: 400;
    font-size: 14px;
    padding: 10px 14px;
    color: ${({ isPrimary, theme }) => isPrimary ? theme.white : theme.title};
    border-radius: 30px;
    width: max-content;
    margin: 5px;
    cursor: ${({ clickable }) => clickable ? "pointer" : "default"};
`