import Image from 'next/image'
import Layout from 'modules/layout/components/Layout'

const About = () => {
  return (
    <Layout>
      <div className="px-5 pt-8 bg-text pb-8">
        <div className="md:h-[600px] grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 max-w-7xl mx-auto">
          <div className="flex flex-col justify-center text-center md:text-left">
            <div className="w-24 h-24 relative shrink-0 self-center md:self-start">
              <Image src="/images/instasoiree.png" layout="fill" alt="" />
            </div>
            <h1 className="text-4xl font-bold mt-6">Instasoirée is...</h1>
            <p className="mt-4 text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
              amet eaque similique molestiae mollitia totam praesentium
              doloremque nostrum iure et.
            </p>
          </div>
          <div className="px-8 flex items-center justify-center order-first md:order-last">
            <div className="h-[160px] w-[100px] md:h-[300px] md:w-[200px] relative shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1654821930773-241591c2dbd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1Njc3MTc5OQ&ixlib=rb-1.2.1&q=80&w=1080"
                width={1080}
                height={1620}
                layout="fill"
                objectFit="cover"
                alt=""
                className="rounded-lg"
              />
            </div>
            <div className="h-[180px] w-[110px] md:h-[320px] md:w-[210px] relative rotate-12 shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1655494393495-79b474dd2968?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1Njc1NjM2Mg&ixlib=rb-1.2.1&q=80&w=1080"
                width={1080}
                height={1620}
                layout="fill"
                objectFit="cover"
                alt=""
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 py-8 my-4 grid grid-cols-6 min-h-[400px] max-w-7xl mx-auto">
        <div className="h-full w-full relative shadow-lg col-span-2">
          <Image
            src="https://images.unsplash.com/photo-1656143308904-47e95da8009e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzI3MzcwNQ&ixlib=rb-1.2.1&q=80&w=1080"
            width={1080}
            height={1350}
            layout="fill"
            objectFit="cover"
            alt=""
            className="rounded-lg"
          />
        </div>
        <div className="ml-8 my-auto col-span-4 lg:px-24 md:px-16">
          <h2 className="text-3xl font-bold">About the project</h2>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, dicta.
          </p>
          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            delectus, dignissimos, velit beatae saepe assumenda, distinctio
            magni temporibus vitae maxime minus nostrum. Omnis, harum labore
            assumenda aliquam earum veniam quaerat!
          </p>
          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, aut!
          </p>
        </div>
      </div>
      <div className="px-5 py-12 bg-gray-500">
        <div className="max-w-7xl mx-auto grid grid-rows-2 gap-4 md:grid-rows-1 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-white">A new section</h2>
            <p className="text-white mt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum,
              cum!
            </p>
            <p className="mt-4 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, perspiciatis!
            </p>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-4">
            <a
              href="https://github.com/abLabDigital/Instasoirre"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/github.png"
                width={64}
                height={64}
                alt="Github logo"
                className="hover:brightness-75 transition-fast"
              />
            </a>
            <p className="text-white">
              Created by{' '}
              <a
                href="https://github.com/abLabDigital"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-gray-200"
              >
                AB Lab Digital
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
