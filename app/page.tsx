import Button from '@/app/_components/Button/TextButton'
import { FaSearch } from 'react-icons/fa'
export default function Home() {
  return (
    <div className="w-full">
      <div className="flex h-[100px] items-center justify-center">
        <Button size={2} rightIcon={FaSearch} variant="outline">
          버튼
        </Button>
      </div>
    </div>
  )
}
