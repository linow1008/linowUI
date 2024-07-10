interface AccordionItem {
  id: number
  left: {
    images?: string
    icon?: React.ReactNode
    text: string
  }
  right: {
    icon: boolean
  }
  body: {
    text: string
  }
}

export const accordionData = [
  {
    id: 1,
    left: {
      images: '',
      // icon: <IoChevronUpOutline size={24} />,
      text: 'Accordion Item1',
    },
    right: {
      icon: true,
    },
    body: {
      text: 'This is the content of the accordion which is shown when the accordion is expanded.',
    },
  },
  {
    id: 2,
    left: {
      // images: 'https://via.placeholder.com/50',
      text: 'Accordion Item2',
    },
    right: {
      icon: true,
    },
    body: {
      text: 'Content for the second accordion item.',
    },
  },
  {
    id: 3,
    left: {
      text: 'Accordion Item3',
    },
    right: {
      icon: true,
    },
    body: {
      text: 'Content for the third accordion item.',
    },
  },
  {
    id: 4,
    left: {
      text: 'Accordion Item4',
    },
    right: {
      icon: true,
    },
    body: {
      text: 'Content for the fourth accordion item.',
    },
  },
]
