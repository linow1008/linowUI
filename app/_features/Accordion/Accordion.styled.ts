import styled from 'styled-components'

export const AccordionContainer = styled.div`
  margin-top: 5rem;
  width: 100%;
  max-width: 700px;
  overflow: hidden;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
`

export const AccordionItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #e5e7eb;
  padding: 1rem 2rem;
`

export const ItemWrap = styled.div`
  display: flex;
  width: 100%;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
`

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
`

export const ImageContainer = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: #d1d5db;
  overflow: hidden;
  margin-right: 10px;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const Text = styled.div`
  font-size: 1.125rem;
  font-weight: bold;
`

export const RightSection = styled.div`
  padding: 0.5rem;
`

export const Body = styled.div<{ isOpen: boolean; maxHeight: number }>`
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  max-height: ${({ isOpen, maxHeight }) => (isOpen ? `${maxHeight}px` : '0')};
`

export const BodyText = styled.p`
  padding: 1.75rem 0 1.25rem;
`
