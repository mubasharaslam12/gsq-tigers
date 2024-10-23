import Image from "next/image";


export default function Home() {

  const team = [
    {
      player_image: "https://i.pinimg.com/736x/0e/7c/c5/0e7cc5d0971d6620cc60d75ab46baea1.jpg",
      player_name: "ADISH"
    },
    {
      player_image: "https://img.dunyanews.tv/news/2024/September/09-08-24/news_big_images/836076_82541642.jpg",
      player_name: "Mubashar"
    },
    {
      player_image: "https://i2.wp.com/crictoday.com/wp-content/uploads/2023/06/Mohammad-Haris.jpg?ssl=1",
      player_name: "ADISH"
    },
    {
      player_image: "https://indianhotdeal.com/wp-content/uploads/2022/12/download-2_11zon.jpeg",
      player_name: "ADISH"
    },
    {
      player_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTQMyQ4I5ZcntyXX01Wsk8AcRtSqd023tY8y8LmXkhuLK-N3nSr8p9ntgGqD3YJ1uflEo&usqp=CAU",
      player_name: "ADISH"
    },
    {
      player_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpuL7umQOYhT6EQPv3ZqHiFuC6eIBFqsvptWMJ-sCYMhO_BW_425o7UARTRDczklcsrXA&usqp=CAU",
      player_name: "ADISH"
    },
    {
      player_image: "https://i0.wp.com/www.opindia.com/wp-content/uploads/2021/11/Opindia-Images-2021-11-12T091754.122.jpg?w=700&ssl=1",
      player_name: "ADISH"
    },
    {
      player_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx4NJcu_JpV8-oQXZt5qTKnMuWTlE-iboatHLpimfxSKpc2rxdvTtLxJqwrNyeWTW3GBk&usqp=CAU",
      player_name: "ADISH"
    },
    {
      player_image: "https://i.dawn.com/large/2023/02/09103005273b85d.jpg?r=103142",
      player_name: "ADISH"
    },
    {
      player_image: "https://media.gettyimages.com/id/599083374/photo/cardiff-england-pakistan-bowler-mohammad-amir-celebrates-after-dismissing-jason-roy-during-the.jpg?s=612x612&w=gi&k=20&c=nvj0sRSCLPBU3bST4xBLpcB4XMA__W9ut3mSp3L5ECI=",
      player_name: "ADISH"
    },
    {
      player_image: "https://crictoday.com/wp-content/uploads/2023/02/AP04_16_2021_000253B_1618595021777_1629606981169-3.webp",
      player_name: "ADISH"
    },
  ]

  return (
    <div className="bg-[#10054a] text-white font-semibold sm:text-lg text-base md:text-xl py-20 px-4">
      <div className="text-center mb-4">
        <h1 className="md:text-2xl sm:xl text-lg"> STONE OVE PIZZA VALLEY CRICKET TIEM THE <strong>GSQ TIGERS</strong> </h1>
      </div>
      <div className="flex md:flex-row flex-col gap-10 max-w-6xl mx-auto  ">
        <div className="md:w-1/4 py-2 relative mb-16">
          <img className="h-full object-cover " src="https://preview.redd.it/update-babar-azam-is-likely-to-be-named-pakistans-t20i-v0-h1i1oza1sqqc1.jpeg?auto=webp&s=b7025f2f753994b5eebf1af0bde109d09e700f5b" alt="" />
          <div className="h-[25%] w-full absolute opacity-45 bg-[#10054a] -bottom-10"></div>
          <div className="absolute bottom-[10%] text-3xl left-[5%]">
            <span className="text-xs sm:text-sm md:text-base">Captain</span>
            <h3 className="text-2xl "> Safdar Husain </h3>
          </div>
        </div>
        <div className="md:w-9/12">



          <div className="">

            <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5 ">
              {
                team.map((v, i) => {
                  return (
                    <div className="text-center border-dotted border-[#ff0188]  shadow-md" key={i} >
                      <div className="h-52 overflow-hidden">
                        <img className="py-2 rounded w-full h-full object-cover" src={v.player_image} alt="" />

                      </div>
                      <h3 className="font-semibold sm:text-lg text-base md:text-2xl">{v.player_name}</h3>
                      <span className="md:text-base text-sm">Captain</span>
                    </div>
                  )
                })
              }

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
