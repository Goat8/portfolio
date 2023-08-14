import Layout from "./components/layout";
import React, { useState } from "react";
import Card from "./components/cards/card";
import {BiLogoAngular, BiLogoNodejs}  from "react-icons/bi"
import {SiNestjs} from "react-icons/si";
import {TbBrandNextjs} from "react-icons/tb";
const backEnds = [
  {
    cardName:"NodeJS",
    description:"Develop scalable and performant backend services using Node.js and Express.js.  Implemented RESTful APIs to support frontend application functionality and data retrieval.",
    tags:["#RESTful API", "#middleware"],
    icon: <BiLogoNodejs/>,
    iconColor: "#16a34a",

  },
  {
    cardName:"NestJS",
    description:"Proficiency in building server-side applications using the Nest.js framework.Understanding of the modular architecture and dependency injection in Nest.js.",
    tags:["#RESTful API","#authentication","#autherization", "#middleware", "#DependencyInjection", "#orm"],
    icon: <SiNestjs/>,
    iconColor: "#e11d48",

  }
]
const FrontEnds = [
  {
    cardName:"Angular",
    description:"Proficiency in creating reusable and modular components, managing component communication, and utilizing component lifecycle hooks effectively.",
    tags:[],
    icon: <BiLogoAngular/>,
    iconColor: "#e11d48",

  },
  {
    cardName:"NextJS",
    description:"In-depth understanding of Next.js core concepts, including server-side rendering (SSR), static site generation (SSG), and client-side rendering (CSR). Familiarity with state management approaches in Next.js applications, including using React's useState, useContext, and third-party solutions like Redux or MobX",
    tags:[],
    icon: <TbBrandNextjs/>,
    iconColor: "#303030",

  }
]
export default function Home() {
  return (
    <Layout>
    <section className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center ">
      <h1 className="text-6xl font-bold">Hi, </h1>
      <h1 className="text-6xl font-bold">I&apos;m Maria,</h1>
      <h1 className="text-6xl font-bold">Full Stack developer </h1>
      <div className="my-8">
      <div className="text-sm italic p-4 rounded-full transition-transform transform hover:scale-105">
      A seasoned Senior Software Engineer with a strong passion for full stack development. Equipped with extensive expertise in both frontend and backend technologies, I excel in building robust applications that seamlessly bridge the gap between user experience and server functionality.
</div>
</div>

      <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full ">
      {backEnds.map((cardInfo: any) => (
        <Card icon= {cardInfo.icon}     
        cardName={cardInfo.cardName} description={cardInfo.description}
        tags = {cardInfo.tags}
        iconColor={cardInfo.iconColor}
         key={cardInfo.id} /> 
      ))}
       <hr></hr>
{FrontEnds.map((cardInfo: any) => (
        <Card icon= {cardInfo.icon}     
        cardName={cardInfo.cardName} description={cardInfo.description}
        tags = {cardInfo.tags}
        iconColor={cardInfo.iconColor}
         key={cardInfo.id} /> 
      ))}
      </div>

    </section>

    </Layout> 
     );
}
