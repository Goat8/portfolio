import DashboardLayout from "./components/layout";
import React, { useState } from "react";
import Card from "./components/cards/card";
import { BiLogoAngular, BiLogoNodejs,BiLogoPostgresql,BiLogoMongodb } from "react-icons/bi";
import { SiNestjs,SiMysql} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
const backEnds = [
  {
    cardName: "NodeJS",
    description:
      "Develop scalable and performant backend services using Node.js and Express.js.  Implement RESTful APIs to support frontend application functionality and data retrieval.",
    tags: ["#RESTful API", "#middleware"],
    icon: <BiLogoNodejs />,
    iconColor: "#16a34a",
  },
  {
    cardName: "NestJS",
    description:
      "Proficient in building server-side applications using the Nest.js framework. I have a string understanding of the modular architecture and dependency injection.",
    tags: [
      "#RESTful API",
      "#authentication",
      "#autherization",
      "#middleware",
      "#DependencyInjection",
      "#orm",
    ],
    icon: <SiNestjs />,
    iconColor: "#e11d48",
  },
];

const FrontEnds = [
  {
    cardName: "Angular",
    description:
      "Proficient in creating reusable and modular components, managing component communication, and utilizing component lifecycle hooks effectively.",
    tags: [],
    icon: <BiLogoAngular />,
    iconColor: "#e11d48",
  },
  {
    cardName: "NextJS",
    description:
      "I have in-depth understanding of Next.js core concepts, including server-side rendering (SSR) and client-side rendering (CSR). Hands on experience with state management approaches, including using React's useState, useContext, and third-party solutions like Redux.",
    tags: [],
    icon: <TbBrandNextjs />,
    iconColor: "#303030",
  },
];

const databases = [
  {
    cardName: "MySQL",
    description:
      "Proficient in MySQL database design, development. I have strong understanding of relational database concepts and normalization techniques.Experience working with an ORM framework, such as Sequelize or TypeORM, to abstract database operations. Experience in designing logical and physical data models using tools like MySQL Workbench.",
    tags: ["#workbench", "#bekeeper"],
    icon: <SiMysql size={30}/>,
    iconColor: "#00758f",
  },
  {
    cardName: "PostgreSQL",
    description:
      "Strong understanding of relational database concepts and normalization techniques.Proficient in using PostgreSQL command-line interface, pgAdmin. Proficient in defining models, relationships, and performing CRUD operations using the Prisma ORM.",
    tags: [
      "#pgAdmin",
    ],
    icon: <BiLogoPostgresql />,
    iconColor: "#336791"
  },
  {
    cardName: "MongoDB",
    description:
      "Strong understanding of NoSQL database concepts and document-based data models. Expertise in writing MongoDB queries and aggregations for data retrieval and manipulation. Experience in using stages, pipelines, and operators to perform advanced aggregations.",
    tags: [
      "#mongodbCompass",
      "#mongoose",
    ],
    icon: <BiLogoMongodb />,
    iconColor: "#3FA037",
  },
];
export default function Home() {
  return (
    <DashboardLayout>
      <section className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">Hi, </h1>
        <h1 className="text-6xl font-bold">I&apos;m Maria,</h1>
        <h1 className="text-6xl font-bold">Full Stack developer </h1>
        <div className="md:my-8 items-center">
          <div className="text-sm italic p-4 rounded-full transition-transform transform hover:scale-105">
            I am a software engineer driven by curiosity, focus on developing
            reliable software that is easy to maintain and adheres to industry
            standards. I am equipped with extensive expertise in both frontend
            and backend technologies and build robust applications that
            seamlessly bridge the gap between user experience and server
            functionality.
          </div>
        </div>

        <h1 className="text-base font-bold mb-8">Backend technologies </h1>

        <div className="grid md:grid-cols-2 gap-4 sm:grid-cols-1 rounded-lg border-gray-300 border-4">

          {backEnds.map((cardInfo: any, index: number) => (
            <Card
              icon={cardInfo.icon}
              cardName={cardInfo.cardName}
              description={cardInfo.description}
              tags={cardInfo.tags}
              iconColor={cardInfo.iconColor}
              key={index}
            />
          ))}
        </div>
          
        <h1 className="text-base font-bold mt-16">Frontend technologies </h1>
        <div className="mt-8" >
          <div className="grid md:grid-cols-2 gap-4 sm:grid-cols-1 rounded-lg border-gray-300 border-4">
            {FrontEnds.map((cardInfo: any, index: number) => (
              <Card
                icon={cardInfo.icon}
                cardName={cardInfo.cardName}
                description={cardInfo.description}
                tags={cardInfo.tags}
                iconColor={cardInfo.iconColor}
                key={index}
              />
            ))}
          </div>
        </div>
        <h1 className="text-base font-bold mt-16">Databases </h1>

        <div className="mt-8">
          <div className="grid md:grid-cols-2 gap-4 sm:grid-cols-1 rounded-lg border-gray-300 border-4">
            {databases.map((cardInfo: any, index: number) => (
              <Card
                icon={cardInfo.icon}
                cardName={cardInfo.cardName}
                description={cardInfo.description}
                tags={cardInfo.tags}
                iconColor={cardInfo.iconColor}
                key={index}
              />
            ))}
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
}
