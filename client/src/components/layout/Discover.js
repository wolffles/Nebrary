import React, { Component } from 'react'

class Discover extends Component {
  constructor() {
    super();
    this.state = {
      results: [
        {
          "original_name": "フェアリーテイル",
          "genre_ids": [
            16,
            35,
            10759,
            10765
          ],
          "name": "Fairy Tail",
          "popularity": 307.882,
          "origin_country": [
            "JP"
          ],
          "vote_count": 118,
          "first_air_date": "2009-10-12",
          "backdrop_path": "/m2lugAG39sO0yCcuxEAu4fY5u1o.jpg",
          "original_language": "ja",
          "id": 46261,
          "vote_average": 6.8,
          "overview": "Lucy is a 17-year-old girl, who wants to be a full-fledged mage. One day when visiting Harujion Town, she meets Natsu, a young man who gets sick easily by any type of transportation. But Natsu isn't just any ordinary kid, he's a member of one of the world's most infamous mage guilds: Fairy Tail.",
          "poster_path": "/58GKcwFV3lpVOGzybeMrrNOjHpz.jpg"
        },
        {
          "original_name": "The Walking Dead",
          "genre_ids": [
            18,
            10759,
            10765
          ],
          "name": "The Walking Dead",
          "popularity": 245.84,
          "origin_country": [
            "US"
          ],
          "vote_count": 3956,
          "first_air_date": "2010-10-31",
          "backdrop_path": "/xVzvD5BPAU4HpleFSo8QOdHkndo.jpg",
          "original_language": "en",
          "id": 1402,
          "vote_average": 7.3,
          "overview": "Sheriff's deputy Rick Grimes awakens from a coma to find a post-apocalyptic world dominated by flesh-eating zombies. He sets out to find his family and encounters many other survivors along the way.",
          "poster_path": "/bjU4tLlyp8W4yTB0Hqn8J1IDUnD.jpg"
        },
        {
          "original_name": "Arrow",
          "genre_ids": [
            80,
            18,
            9648,
            10759
          ],
          "name": "Arrow",
          "popularity": 222.798,
          "origin_country": [
            "US"
          ],
          "vote_count": 2239,
          "first_air_date": "2012-10-10",
          "backdrop_path": "/dKxkwAJfGuznW8Hu0mhaDJtna0n.jpg",
          "original_language": "en",
          "id": 1412,
          "vote_average": 5.9,
          "overview": "Spoiled billionaire playboy Oliver Queen is missing and presumed dead when his yacht is lost at sea. He returns five years later a changed man, determined to clean up the city as a hooded vigilante armed with a bow.",
          "poster_path": "/mo0FP1GxOFZT4UDde7RFDz5APXF.jpg"
        },
        {
          "original_name": "ドラゴンボール",
          "genre_ids": [
            16,
            35,
            10759,
            10765
          ],
          "name": "Dragon Ball",
          "popularity": 210.84,
          "origin_country": [
            "JP"
          ],
          "vote_count": 238,
          "first_air_date": "1986-02-26",
          "backdrop_path": "/iflq7ZJfso6WC7gk9l1tD3unWK.jpg",
          "original_language": "ja",
          "id": 12609,
          "vote_average": 7.5,
          "overview": "Long ago in the mountains, a fighting master known as Gohan discovered a strange boy whom he named Goku. Gohan raised him and trained Goku in martial arts until he died. The young and very strong boy was on his own, but easily managed. Then one day, Goku met a teenage girl named Bulma, whose search for the dragon balls brought her to Goku's home. Together, they set off to find all seven dragon balls in an adventure that would change Goku's life forever. See how Goku met his life long friends Bulma, Yamcha, Krillin, Master Roshi and more. And see his adventures as a boy, all leading up to  Dragonball Z and later  Dragonball GT.",
          "poster_path": "/3wx3EAMtqnbSLhGG8NrqXriCUIQ.jpg"
        },
        {
          "original_name": "The Flash",
          "genre_ids": [
            18,
            10765
          ],
          "name": "The Flash",
          "popularity": 200.176,
          "origin_country": [
            "US"
          ],
          "vote_count": 2499,
          "first_air_date": "2014-10-07",
          "backdrop_path": "/jC1KqsFx8ZyqJyQa2Ohi7xgL7XC.jpg",
          "original_language": "en",
          "id": 60735,
          "vote_average": 6.7,
          "overview": "After a particle accelerator causes a freak storm, CSI Investigator Barry Allen is struck by lightning and falls into a coma. Months later he awakens with the power of super speed, granting him the ability to move through Central City like an unseen guardian angel. Though initially excited by his newfound powers, Barry is shocked to discover he is not the only \"meta-human\" who was created in the wake of the accelerator explosion -- and not everyone is using their new powers for good. Barry partners with S.T.A.R. Labs and dedicates his life to protect the innocent. For now, only a few close friends and associates know that Barry is literally the fastest man alive, but it won't be long before the world learns what Barry Allen has become...The Flash.",
          "poster_path": "/fki3kBlwJzFp8QohL43g9ReV455.jpg"
        },
        {
          "original_name": "Hanna",
          "genre_ids": [
            18,
            10759
          ],
          "name": "Hanna",
          "popularity": 196.026,
          "origin_country": [
            "US"
          ],
          "vote_count": 6,
          "first_air_date": "2019-03-28",
          "backdrop_path": "/oUuyMvdBIZiJHEGtKYrIZO7hyd7.jpg",
          "original_language": "en",
          "id": 54155,
          "vote_average": 0,
          "overview": "This thriller and coming-of-age drama follows the journey of an extraordinary young girl as she evades the relentless pursuit of an off-book CIA agent and tries to unearth the truth behind who she is. Based on the 2011 Joe Wright film.",
          "poster_path": "/5nSSkcM3TgpllZ7yTyBOQEgAX36.jpg"
        },
        {
          "original_name": "ナルト 疾風伝",
          "genre_ids": [
            16,
            35,
            18
          ],
          "name": "Naruto Shippūden",
          "popularity": 195.284,
          "origin_country": [
            "JP"
          ],
          "vote_count": 192,
          "first_air_date": "2007-02-15",
          "backdrop_path": "/c14vjmndzL9tBdooGsMznMFrFLo.jpg",
          "original_language": "ja",
          "id": 31910,
          "vote_average": 7.5,
          "overview": "Naruto Shippuuden is the continuation of the original animated TV series Naruto.The story revolves around an older and slightly more matured Uzumaki Naruto and his quest to save his friend Uchiha Sasuke from the grips of the snake-like Shinobi, Orochimaru. After 2 and a half years Naruto finally returns to his village of Konoha, and sets about putting his ambitions to work, though it will not be easy, as He has amassed a few (more dangerous) enemies, in the likes of the shinobi organization; Akatsuki.",
          "poster_path": "/ic9Gb4Zz09ns3JPYHdax8u5kt0n.jpg"
        },
        {
          "original_name": "Family Guy",
          "genre_ids": [
            16,
            35
          ],
          "name": "Family Guy",
          "popularity": 179.076,
          "origin_country": [
            "US"
          ],
          "vote_count": 1396,
          "first_air_date": "1999-01-31",
          "backdrop_path": "/pH38r4TWTqq7Mcs6XAlwgzNUeJe.jpg",
          "original_language": "en",
          "id": 1434,
          "vote_average": 6.5,
          "overview": "Sick, twisted, politically incorrect and Freakin' Sweet animated series featuring the adventures of the dysfunctional Griffin family. Bumbling Peter and long-suffering Lois have three kids. Stewie (a brilliant but sadistic baby bent on killing his mother and taking over the world), Meg (the oldest, and is the most unpopular girl in town) and Chris (the middle kid, he's not very bright but has a passion for movies). The final member of the family is Brian - a talking dog and much more than a pet, he keeps Stewie in check whilst sipping Martinis and sorting through his own life issues.",
          "poster_path": "/gBGUL1UTUNmdRQT8gA1LUV4yg39.jpg"
        },
        {
          "original_name": "Game of Thrones",
          "genre_ids": [
            18,
            10759,
            10765
          ],
          "name": "Game of Thrones",
          "popularity": 177.016,
          "origin_country": [
            "US"
          ],
          "vote_count": 5284,
          "first_air_date": "2011-04-17",
          "backdrop_path": "/gX8SYlnL9ZznfZwEH4KJUePBFUM.jpg",
          "original_language": "en",
          "id": 1399,
          "vote_average": 8.2,
          "overview": "Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond.",
          "poster_path": "/gwPSoYUHAKmdyVywgLpKKA4BjRr.jpg"
        },
        {
          "original_name": "Supernatural",
          "genre_ids": [
            18,
            9648,
            10765
          ],
          "name": "Supernatural",
          "popularity": 161.628,
          "origin_country": [
            "US"
          ],
          "vote_count": 1697,
          "first_air_date": "2005-09-13",
          "backdrop_path": "/o9OKe3M06QMLOzTl3l6GStYtnE9.jpg",
          "original_language": "en",
          "id": 1622,
          "vote_average": 7.2,
          "overview": "When they were boys, Sam and Dean Winchester lost their mother to a mysterious and demonic supernatural force. Subsequently, their father raised them to be soldiers. He taught them about the paranormal evil that lives in the dark corners and on the back roads of America ... and he taught them how to kill it. Now, the Winchester brothers crisscross the country in their '67 Chevy Impala, battling every kind of supernatural threat they encounter along the way. ",
          "poster_path": "/3iFm6Kz7iYoFaEcj4fLyZHAmTQA.jpg"
        },
        {
          "original_name": "ブラッククローバー",
          "genre_ids": [
            16,
            35,
            10759
          ],
          "name": "Black Clover",
          "popularity": 160.062,
          "origin_country": [
            "JP"
          ],
          "vote_count": 47,
          "first_air_date": "2017-10-03",
          "backdrop_path": "/jHH4jmWWmYWpoxpGwMYM5RqJnvo.jpg",
          "original_language": "ja",
          "id": 73223,
          "vote_average": 5.3,
          "overview": "Asta and Yuno were abandoned together at the same church, and have been inseparable since. As children, they promised that they would compete against each other to see who would become the next Emperor Magus. However, as they grew up, some differences between them became plain. Yuno was a genius with magic, with amazing power and control, while Asta could not use magic at all, and tried to make up for his lack by training physically. When they received their Grimoires at age 15, Yuno got a spectacular book with a four-leaf clover (most people receive a three-leaf-clover), while Asta received nothing at all. However, when Yuno was threatened, the truth about Asta's power was revealed, he received a five-leaf clover Grimoire, a \"black clover\"! Now the two friends are heading out in the world, both seeking the same goal!",
          "poster_path": "/kaMisKeOoTBPxPkbC3OW7Wgt6ON.jpg"
        },
        {
          "original_name": "The Simpsons",
          "genre_ids": [
            16,
            35
          ],
          "name": "The Simpsons",
          "popularity": 159.095,
          "origin_country": [
            "US"
          ],
          "vote_count": 1862,
          "first_air_date": "1989-12-17",
          "backdrop_path": "/lnnrirKFGwFW18GiH3AmuYy40cz.jpg",
          "original_language": "en",
          "id": 456,
          "vote_average": 7.1,
          "overview": "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands. Since the beginning, the series has been a pop culture icon, attracting hundreds of celebrities to guest star. The show has also made name for itself in its fearless satirical take on politics, media and American life in general.",
          "poster_path": "/yTZQkSsxUFJZJe67IenRM0AEklc.jpg"
        },
        {
          "original_name": "Riverdale",
          "genre_ids": [
            18,
            9648
          ],
          "name": "Riverdale",
          "popularity": 150.729,
          "origin_country": [
            "US"
          ],
          "vote_count": 435,
          "first_air_date": "2017-01-26",
          "backdrop_path": "/2IUpoKSP64r6rp2vBo0Fdk8a1UU.jpg",
          "original_language": "en",
          "id": 69050,
          "vote_average": 7.1,
          "overview": "Set in the present, the series offers a bold, subversive take on Archie, Betty, Veronica and their friends, exploring the surreality of small-town life, the darkness and weirdness bubbling beneath Riverdale’s wholesome facade.",
          "poster_path": "/gskv297rlbyzLaTU1XZf8UBbxp0.jpg"
        },
        {
          "original_name": "Doom Patrol",
          "genre_ids": [
            10759,
            10765
          ],
          "name": "Doom Patrol",
          "popularity": 143.368,
          "origin_country": [
            "US"
          ],
          "vote_count": 8,
          "first_air_date": "2019-02-15",
          "backdrop_path": "/sAzw6I1G9JUxm86KokIDdQeWtaq.jpg",
          "original_language": "en",
          "id": 79501,
          "vote_average": 6.9,
          "overview": "The Doom Patrol’s members each suffered horrible accidents that gave them superhuman abilities — but also left them scarred and disfigured. Traumatized and downtrodden, the team found purpose through The Chief, who brought them together to investigate the weirdest phenomena in existence — and to protect Earth from what they find.",
          "poster_path": "/nVN7Dt0Xr78gnJepRsRLaLYklbY.jpg"
        },
        {
          "original_name": "Marvel's Iron Fist",
          "genre_ids": [
            80,
            18,
            10759,
            10765
          ],
          "name": "Marvel's Iron Fist",
          "popularity": 143.366,
          "origin_country": [
            "US"
          ],
          "vote_count": 778,
          "first_air_date": "2017-03-17",
          "backdrop_path": "/xHCfWGlxwbtMeeOnTvxUCZRGnkk.jpg",
          "original_language": "en",
          "id": 62127,
          "vote_average": 6.1,
          "overview": "Danny Rand resurfaces 15 years after being presumed dead. Now, with the power of the Iron Fist, he seeks to reclaim his past and fulfill his destiny.",
          "poster_path": "/nv4nLXbDhcISPP8C1mgaxKU50KO.jpg"
        },
        {
          "original_name": "Gotham",
          "genre_ids": [
            80,
            18,
            14
          ],
          "name": "Gotham",
          "popularity": 139.003,
          "origin_country": [
            "US"
          ],
          "vote_count": 1002,
          "first_air_date": "2014-09-22",
          "backdrop_path": "/mKBP1OCgCG0jw8DwVYlnYqVILtc.jpg",
          "original_language": "en",
          "id": 60708,
          "vote_average": 6.9,
          "overview": "Before there was Batman, there was GOTHAM. \n\nEveryone knows the name Commissioner Gordon. He is one of the crime world's greatest foes, a man whose reputation is synonymous with law and order. But what is known of Gordon's story and his rise from rookie detective to Police Commissioner? What did it take to navigate the multiple layers of corruption that secretly ruled Gotham City, the spawning ground of the world's most iconic villains? And what circumstances created them – the larger-than-life personas who would become Catwoman, The Penguin, The Riddler, Two-Face and The Joker? ",
          "poster_path": "/4XddcRDtnNjYmLRMYpbrhFxsbuq.jpg"
        },
        {
          "original_name": "Supergirl",
          "genre_ids": [
            28,
            12,
            18,
            878
          ],
          "name": "Supergirl",
          "popularity": 128.236,
          "origin_country": [
            "US"
          ],
          "vote_count": 854,
          "first_air_date": "2015-10-26",
          "backdrop_path": "/2qou2R47XZ1N6SlqGZcoCHDyEhN.jpg",
          "original_language": "en",
          "id": 62688,
          "vote_average": 5.8,
          "overview": "Twenty-four-year-old Kara Zor-El, who was taken in by the Danvers family when she was 13 after being sent away from Krypton, must learn to embrace her powers after previously hiding them. The Danvers teach her to be careful with her powers, until she has to reveal them during an unexpected disaster, setting her on her journey of heroism.",
          "poster_path": "/vqBsgL9nd2v04ZvCqPzwtckDdFD.jpg"
        },
        {
          "original_name": "The Umbrella Academy",
          "genre_ids": [
            10759,
            10765
          ],
          "name": "The Umbrella Academy",
          "popularity": 126.539,
          "origin_country": [],
          "vote_count": 17,
          "first_air_date": "2019-02-15",
          "backdrop_path": "/e1izBDd01p348GSNEziK2jrHBQM.jpg",
          "original_language": "en",
          "id": 75006,
          "vote_average": 8.6,
          "overview": "A dysfunctional family of superheroes comes together to solve the mystery of their father's death, the threat of the apocalypse and more.",
          "poster_path": "/uYHdIs5O8tiU5p6MvUPd2jElOH6.jpg"
        },
        {
          "original_name": "Grey's Anatomy",
          "genre_ids": [
            18
          ],
          "name": "Grey's Anatomy",
          "popularity": 122.72,
          "origin_country": [
            "US"
          ],
          "vote_count": 860,
          "first_air_date": "2005-03-27",
          "backdrop_path": "/y6JABtgWMVYPx84Rvy7tROU5aNH.jpg",
          "original_language": "en",
          "id": 1416,
          "vote_average": 6.3,
          "overview": "Follows the personal and professional lives of a group of doctors at Seattle’s Grey Sloan Memorial Hospital.",
          "poster_path": "/mgOZSS2FFIGtfVeac1buBw3Cx5w.jpg"
        },
        {
          "original_name": "Shameless",
          "genre_ids": [
            35,
            18
          ],
          "name": "Shameless",
          "popularity": 122.415,
          "origin_country": [
            "US"
          ],
          "vote_count": 781,
          "first_air_date": "2011-01-09",
          "backdrop_path": "/zjOj2gnDJYFdYt6R7FtuHn7yrPr.jpg",
          "original_language": "en",
          "id": 34307,
          "vote_average": 7.9,
          "overview": "Chicagoan Frank Gallagher is the proud single dad of six smart, industrious, independent kids, who without him would be... perhaps better off. When Frank's not at the bar spending what little money they have, he's passed out on the floor. But the kids have found ways to grow up in spite of him. They may not be like any family you know, but they make no apologies for being exactly who they are.",
          "poster_path": "/iRyQTp2L437k6zfFCvZSOWaxQFA.jpg"
        }
      ]
    }
  }
  render() {
    return (
      <div>
        <h1>Browse Shows</h1>
         {this.state.results.map(show => (
           <div className="discoverItem">
            <h3> {show.original_name} </h3>
            <img
              src={"https://image.tmdb.org/t/p/w154/"+show.poster_path}
              alt={show.original_name + " poster"}
            />
            </div>
          //  need to create component for images and name
         ))
         }
      </div>
    )
  }
}

export default Discover;