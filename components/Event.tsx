import React from 'react'
import Image from 'next/image';
import Link from "next/link";

const actualEvent = [
  {
    title: "Accueil",
    href: "/img/EVENT/EVENT_saint-valentin.jpg",
  },
];

const pastEvents = [
    {
      title: "Accueil",
      href: "/img/EVENT/EVENT_saint-valentin.jpg",
    },
    {
      title: "A propos",
      href: "/img/EVENT/EVENT_festival-1.jpg",
    },
  ];

function Event() {
  return (
    <div className="py-24 flex flex-col items-center">
        <div className="w-2/3">
            <div className="py-8">
                <h1 className="text-3xl font-bold pb-3">Évènements à venir</h1>
                <div className="flex md:flex-row flex-col gap-10">
                  <div className="md:w-1/2 w-full">
                      {actualEvent.map((event) => (
                        <Image key={event.title} src={event.href} alt={event.title} width={500} height={1} className='shadow-2xl'/>
                      ))}
                  </div>
                  <div className="md:w-1/2 w-full flex flex-col justify-between">
                    <article className="">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum laborum enim accusamus quod quam animi ipsum molestias distinctio vero modi, soluta similique eius nostrum quae exercitationem inventore rem tempora aut neque doloremque, aperiam odio ratione officiis consectetur? Corrupti iusto deleniti earum rerum praesentium, omnis dolore obcaecati, in cum ut aperiam. Modi quo ratione voluptatum repellendus, atque laudantium hic nobis maxime debitis. Ducimus iure quis ex architecto dicta? Nihil, dolorem velit omnis quia voluptas corrupti fuga similique accusantium possimus pariatur itaque debitis labore quo alias ducimus aut ipsa quos expedita numquam sapiente non. Fugit dolorem asperiores voluptatem nulla nisi voluptatum eos?
                      <br />
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, laudantium nobis. Quia eligendi fuga rem maiores culpa voluptates, nihil iusto.
                      <br />
                      <br />
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, alias. Ipsum voluptatem voluptatibus voluptas recusandae quasi, mollitia iste sit rerum. Amet repellendus, corrupti sapiente qui, natus labore eligendi, est dolore fuga odio minus neque iusto a incidunt culpa possimus ipsam illum quidem asperiores placeat error rerum alias blanditiis. Sed, repellendus.
                    </article>
                    <Link
                      href="/reservation"
                      className="bg-blue-950 hover:bg-transparent border hover:border-blue-950 text-white font-medium hover:text-blue-950 w-fit duration-200 px-4 py-3"
                    >
                      Réserver
                    </Link>
                  </div>
                </div>
            </div>
            <div className="py-8">
                <h1 className="text-3xl font-bold pb-3">Évènements passés</h1>
                <div className="w-full flex md:justify-start justify-center">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        {pastEvents.map((image) => (
                        <img key={image.title} src={image.href} alt={image.title} className='shadow-xl w-full'/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Event;