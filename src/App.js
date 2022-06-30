import React from 'react';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import QRCode from "react-qr-code";
import './App.css';
import 'swiper/css';

const hashtag = "MUDS"
const backgroundSrc = "https://www.386.jp/assets/img/portfolio_res/top_bg.jpg"
const displaySpeed = 5000

const carouselData = [
  {
    iconSrc: "https://dummyimage.com/600x400/000/fff",
    topicText: "フォロー\nお待ちしております!",
    mainText: "MUDS公式Twitter: @DS_Musashino",
    qrSrc: "https://twitter.com/ds_musashino",
  },
  {
    iconSrc: "https://dummyimage.com/600x400/000/fff",
    topicText: "フォロー\nお待ちしております!",
    mainText: "MUDS学生公式Twitter: @muds_data_stu",
    qrSrc: "https://twitter.com/muds_data_stu",
  },
  {
    iconSrc: "https://dummyimage.com/600x400/000/fff",
    topicText: "学生目線の情報は\n学生運営サイトへ!",
    mainText: "学生へのインタビューや、授業などでの成果物を掲載しています\nstu-muds.io",
    qrSrc: "https://www.stu-muds.io",
  },
  {
    iconSrc: "https://dummyimage.com/600x400/000/fff",
    topicText: "フォローやLGTM\nお待ちしております!",
    mainText: "日々のコーディングのノウハウなどについて書き溜めています\nqiita.com/organizations/muds",
    qrSrc: "https://qiita.com/organizations/muds",
  },
  {
    iconSrc: "https://dummyimage.com/600x400/000/fff",
    topicText: "フォロー\nお待ちしております!",
    mainText: "MUDS公式Instagram: @ds.musashino.university",
    qrSrc: "https://www.instagram.com/ds.musashino.university/",
  },
  {
    iconSrc: "https://dummyimage.com/600x400/000/fff",
    topicText: "フォロー\nお待ちしております!",
    mainText: "MUDS学生公式Instagram: @muds2019",
    qrSrc: "https://www.instagram.com/muds2019/",
  },
  {
    iconSrc: "https://dummyimage.com/600x400/000/fff",
    topicText: "研究紹介はMUDS\nオーキャンサイトへ!",
    mainText: "研究紹介や、MUDSに関する情報が掲載されています\nsites.google.com/ds.musashino-u.ac.jp/mudsoc2022",
    qrSrc: "https://sites.google.com/ds.musashino-u.ac.jp/mudsoc2022",
  }
]

const App = () => {
  return (
    <div
      className="sections"
      style={{backgroundImage: `url(${backgroundSrc})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}
    >
      <Swiper
        className="section section_carousel"
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: displaySpeed,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {carouselData.map((data, index) => (
          <SwiperSlide className="carouselSlide" key={index}>
            <img className='icon' src={data['iconSrc']} alt="icon" />
            <div className="topicText"><p>{data['topicText']}</p></div>
            <div className="mainText"><p>{data['mainText']}</p></div>
            <div className='qr'><QRCode value={data['qrSrc']} style={{ height: "100%", width: "100%" }} viewBox={`0 0 256 256`} /></div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="section section_tag"><div className="swiper-slide carouselSlide"><div className="tagText"><p>#{hashtag}</p></div></div></div>
    </div>
  );
}

export default App;
