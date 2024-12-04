import React from 'react'

function Icons() {
    let arr = [
        {
          src: "https://a0.muscache.com/im/pictures/mediaverse/category_icon/original/3e5243c8-4d15-4c6b-97e3-7ba2bb7bb880.png",
          name: "Icons",
          category: "ICONS"
        },{
          src:"https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
          name: "Amazing Views",
          category: "AMAZING VIEWS"
          
        },{
          src:"https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg",
          name: "Farms",
          category: "FARMS"
        },{
          src:"https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg",
          name: "Amazing pools",
          category: "AMAZING POOLS"
        },{
          src: "https://a0.muscache.com/pictures/89faf9ae-bbbc-4bc4-aecd-cc15bf36cbca.jpg",
          name: "Domes",
          category: "DOMES"
        },{
          src: "https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg",
          name: "Beachfront",
          category: "BEACHFRONT"
        },{
          src: "https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg",
          name: "OMG!",
          category:"OMG!"  
        },{
          src: "https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg",
          name: "Countryside",
          category:"COUNTRYSIDE"
        },{
          src:     "https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg",
          name: "Rooms",
          category: "ROOMS"
        },{
            src: "https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg",
            name: "Cabins",
            category: "CABINS"
        }
        
      ];
  return (
    <>
      <div className="border-b-2 px-16 h-20 fixed z-20 w-full top-16">
        <ul className="flex gap-0   justify-between h-full">
          {arr.map((i) => {
            
            return <li className="px-4  flex    left-1/2 right-1/2 text-gray-500 hover:border-1 hover:text-black hover:shadow-md h-full w-full cursor-pointer transition delay-75 duration-75">
              <div className="flex  flex-col items-center justify-center w-full">
                <img src={i.src} alt="logo" width={24} height={24}/>
                <span className=" h-fit w-fit flex flex-wrap text-xs ">{i.name}</span>
              </div>
            </li>;
          })}
        </ul>
      </div>
    </>
  )
}

export default Icons