import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">
        {subtitle}
      </p>
    </div>
  </div>
);

class ServicesImg extends React.Component {
  render() {
    return (
      <Carousel>
        <div>
          <img src="../../images/educil.jpeg"/>
        </div>
        <div>
          <img src="../../images/educil1.jpeg"/>
        </div>
        <div>
          <img src="../../images/educil2.jpeg"/>
        </div>
      </Carousel>
    )
  }
}
const Services = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
          <center>HI EDUCIL</center>
          HIMTI EDUKASI KECIL
          <br/>
          <ServicesImg/>
        </h1>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
          HI EDUCIL adalah program kerja yang dibuat oleh Himpunan Mahasiswa Teknologi Informasi (HIMTI)
          untuk membantu anak-anak yang berkurangan di segi pendidikan.
        </p>
      </div>
      <div className="flex-1 flex flex-col justify-start items-center">
      <ServiceCard
          color="bg-[#2952E3]"
          title="Jaminan Keamanan"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="Kami menjamin keamanan Donasi anda dengan adanya sistem Smart Contract"
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="Donasi Transparan"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="Transaksi Donasi yang transparan. Transaksi apat diakses oleh siapa saja dan kapan saja"
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="Kemudahan Berdonasi"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="Era baru untuk sistem Donasi yang lebih baik menggunakan sistem Blockchain"
        />
      </div>
    </div>
  </div>
);

export default Services;
