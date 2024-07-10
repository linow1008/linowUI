import { IoChevronDownOutline, IoChevronUpOutline } from 'react-icons/io5'
import * as S from './Accordion.styled'
import { accordionData } from '@/app/_features/Accordion/data/AccordionData'
import { useAccordion } from '@/app/_features/Accordion/hooks/useAccordion'

type Props = {
  vertical?: boolean
  singleOpen?: boolean
}

const Accordion1 = ({ vertical = true, singleOpen = false }: Props) => {
  const { openIndices, refElements, toggleAccordion } = useAccordion(singleOpen)

  return (
    <S.AccordionContainer>
      {accordionData.map((item) => (
        <S.AccordionItemContainer key={item.id}>
          <S.ItemWrap onClick={() => toggleAccordion(item.id)}>
            <S.LeftSection>
              <S.Text>{item.left.text}</S.Text>
            </S.LeftSection>
            <S.RightSection>
              {item.right.icon &&
                (openIndices.includes(item.id) ? (
                  <IoChevronUpOutline size={24} />
                ) : (
                  <IoChevronDownOutline size={24} />
                ))}
            </S.RightSection>
          </S.ItemWrap>
          <S.Body
            ref={(el) => {
              refElements.current[item.id] = el
            }}
            isOpen={openIndices.includes(item.id)}
            maxHeight={refElements.current[item.id]?.scrollHeight || 0}
          >
            <S.BodyText>{item.body.text}</S.BodyText>
          </S.Body>
        </S.AccordionItemContainer>
      ))}
    </S.AccordionContainer>
  )
}

export default Accordion1
