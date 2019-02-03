import styled from 'styled-components'

export const ButtonContainer = styled.button`
  text-transform:capitalize;
  font-size: 1.1rem;
  background: transparent;
  border: 0.05rem solid var(--roseGold);
  color: var(--roseGold);
  border-radius: 0.3rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  &: hover {
    background: var(--mainYellow);
    color: var(--white);
    border-color: var(--mainYellow)
  }
`;