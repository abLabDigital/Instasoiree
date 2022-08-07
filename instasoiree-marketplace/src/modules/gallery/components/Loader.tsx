import Image from 'next/image'

const Loader = () => {
  return (
    <div className="col-span-3 mt-8 mb-16 flex flex-col items-center">
      <Image src="/images/instasoiree.png" width={80} height={80} alt="" />
    </div>
  )
}

export default Loader
