import React, { useState } from 'react';
function Icons() {
  const [change, setChange] = useState(false);
  let arr = [
    {
      src: 'https://a0.muscache.com/im/pictures/mediaverse/category_icon/original/3e5243c8-4d15-4c6b-97e3-7ba2bb7bb880.png',
      name: 'Icons',
      category: 'ICONS',
      ui: false,
    },
    {
      src: 'https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg',
      name: 'Amazing Views',
      category: 'AMAZING VIEWS',
      ui: false,
    },
    {
      src: 'https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg',
      name: 'Farms',
      category: 'FARMS',
      ui: false,
    },
    {
      src: 'https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg',
      name: 'Amazing pools',
      category: 'AMAZING POOLS',
      ui: false,
    },
    {
      src: 'https://a0.muscache.com/pictures/89faf9ae-bbbc-4bc4-aecd-cc15bf36cbca.jpg',
      name: 'Domes',
      category: 'DOMES',
      ui: false,
    },
    {
      src: 'https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg',
      name: 'Beachfront',
      category: 'BEACHFRONT',
      ui: false,
    },
    {
      src: 'https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg',
      name: 'OMG!',
      category: 'OMG!',
      ui: false,
    },
    {
      src: 'https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg',
      name: 'Countryside',
      category: 'COUNTRYSIDE',
      ui: false,
    },
    {
      src: 'https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg',
      name: 'Rooms',
      category: 'ROOMS',
      ui: false,
    },
    {
      src: 'https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg',
      name: 'Cabins',
      category: 'CABINS',
      ui: false,
    },
  ];
  const [css, setCss] = useState({});
  let ind = -1;

  function changeUi(e) {
    if (ind != -1) {
      ind.className = `left-1/2 right-1/2    flex h-full w-full cursor-pointer px-4 text-gray-500 transition delay-75 duration-75 hover:border hover:text-black hover:shadow-md`;
    }
    let element = e.target;
    if (element.localName == 'img' || element.localName == 'span') {
      element = element.parentElement.parentElement;
    } else if (element.localName == 'div') {
      element = element.parentElement;
    }
    element.className = `left-1/2 right-1/2    flex h-full w-full cursor-pointer px-4 text-gray-500 transition delay-75 duration-75 border text-black shadow-md`;

    ind = element;
  }

  return (
    <>
      <div className="z-20 mt-16 h-20  w-full border-b-2 bg-white px-16 shadow-sm">
        <ul className="flex h-full  justify-between gap-0">
          {arr.map((i, j) => {
            return (
              <li
                className={`left-1/2 right-1/2    flex h-full w-full cursor-pointer px-4 text-gray-500 transition delay-75 duration-75 hover:border hover:text-black hover:shadow-md `}
                onClick={changeUi}
                id={i.name}
              >
                <div className="flex  w-full flex-col items-center justify-center">
                  <img src={i.src} alt="logo" width={24} height={24} />
                  <span className=" flex h-fit w-fit flex-wrap text-xs ">
                    {i.name}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Icons;
