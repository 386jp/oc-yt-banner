import React from 'react';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import QRCode from "react-qr-code";
import './App.css';
import 'swiper/css';

const hashtag = "MUDS"
const backgroundSrc = process.env.PUBLIC_URL + "/res/background/inkdrop_01.png"
const displaySpeed = 10000

const carouselData = [
  {
    iconSrc: process.env.PUBLIC_URL + "/res/icon/twitter.png",
    topicText: "フォロー\nお待ちしております!",
    mainText: "MUDS公式Twitter: @DS_Musashino",
    qrSrc: "https://twitter.com/ds_musashino",
  },
  {
    iconSrc: process.env.PUBLIC_URL + "/res/icon/twitter.png",
    topicText: "フォロー\nお待ちしております!",
    mainText: "MUDS学生公式Twitter: @muds_data_stu",
    qrSrc: "https://twitter.com/muds_data_stu",
  },
  {
    iconSrc: process.env.PUBLIC_URL + "/res/icon/google-sites.png",
    topicText: "学生目線の情報は\n学生運営サイトへ!",
    mainText: "学生へのインタビューや、授業などでの成果物を掲載しています\nstu-muds.io",
    qrSrc: "https://www.stu-muds.io",
  },
  {
    iconSrc: process.env.PUBLIC_URL + "/res/icon/qiita.png",
    topicText: "フォローやLGTM\nお待ちしております!",
    mainText: "日々のコーディングのノウハウなどについて書き溜めています\nqiita.com/organizations/muds",
    qrSrc: "https://qiita.com/organizations/muds",
  },
  {
    iconSrc: process.env.PUBLIC_URL + "/res/icon/instagram.png",
    topicText: "フォロー\nお待ちしております!",
    mainText: "MUDS公式Instagram: @ds.musashino.university",
    qrSrc: "https://www.instagram.com/ds.musashino.university/",
  },
  {
    iconSrc: process.env.PUBLIC_URL + "/res/icon/instagram.png",
    topicText: "フォロー\nお待ちしております!",
    mainText: "MUDS学生公式Instagram: @muds2019",
    qrSrc: "https://www.instagram.com/muds2019/",
  },
  {
    iconSrc: process.env.PUBLIC_URL + "/res/icon/google-sites.png",
    topicText: "研究紹介はMUDS\nオーキャンサイトへ!",
    mainText: "研究紹介や、MUDSに関する情報が掲載されています\nsites.google.com/ds.musashino-u.ac.jp/mudsoc2022",
    qrSrc: "https://sites.google.com/ds.musashino-u.ac.jp/mudsoc2022",
  },
  {
    iconSrc: process.env.PUBLIC_URL + "/res/icon/youtube.png",
    topicText: "チャンネル登録\nお待ちしております!",
    mainText: "オープンキャンパスや高校生向けセミナーの様子を公開しています!\nライブ配信なども行っているので通知のONもお願いします!",
    qrSrc: "https://www.youtube.com/channel/UC8EYVG5oxBPe0zDdwpny2Rw",
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
