import styled from 'styled-components'
import { Colors } from '../../styles'

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 150px 0;

  h2 {
    font-size: 42px;
  }
`

export const ProjectList = styled.ul`
  display: flex;
  width: 90%;
  gap: 20px;
  margin-top: 24px;
`
