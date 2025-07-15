import Card from '@/components/Card'
import Button from "@/components/Button"
const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Card />
      <Card />
      <Button title='Click Me' styles='w-[100px]  rounded-sm' />
      <Button title='Click Me' styles='w-[200px]  rounded-md' />
      <Button title='Click Me' styles='w-[300px]  rounded-full' />
    </div>
  )
}
export default Landing;