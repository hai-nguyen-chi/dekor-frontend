import { Button } from '@headlessui/react'

interface propsButton {
  text: string
}

const CoreButton = (props: propsButton) => {
  const { text } = props
  return (
    <Button className="relative border-[1px] border-black text-[12px] font-bold uppercase px-10 py-4 mt-7 hover:text-white hover:bg-black">
      {text}
    </Button>
  )
}

export default CoreButton
