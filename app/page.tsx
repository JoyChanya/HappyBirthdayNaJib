import Image from 'next/image'

const galleryItems = [
  'img/1.jpeg',
  'img/2.jpeg',
  'img/3.jpg',
  'img/4.jpeg',
  'img/5.jpeg',
  'img/6.jpeg',
  'img/7.jpeg',
  'img/8.jpeg',
  'img/9.jpeg',
  'img/10.jpeg',
  'img/11.jpeg',
  'img/12.jpeg',
];

export default function Home() {
  return (
    <><section>
      <div className="bg-gradient-to-b from-cyan-600 to-teal-700 min-h-screen flex items-center justify-center pt-20 pb-20">
        <div className="lg:max-w-full text-center font-serif ">
          <h1 className="text-3xl lg:text-5xl font-semibold mb-4 lg:mb-8">Happy Birthday dear Na' Jib</h1>
          <p className="text-xl font-semibold text-yellow-200 mb-3"> December 14th 2023</p>
          <p className="text-lg text-red-200 mb-8 px-20 lg:px-0">Wishing you a fantastic day filled with joy (and jan), hahaha!</p>
          
          <div className="flex flex-wrap justify-center">
            {galleryItems.map((imageUrl, index) => (
              <div
                key={index}
                className="m-2 w-1/2 md:w-1/4 gallery-item"
              >
                <img
                  src={imageUrl}
                  alt={`Gallery Item ${index + 1}`}
                  className="w-full h-auto rounded-lg shadow-md" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <footer className='bg-teal-700 flex justify-center'>
        <p className="text-sm font-serif pb-4"> © chanyakittichai, 2023</p>
    </footer></>
    
  )
}

