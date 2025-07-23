"use client";
import { motion } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import { SiReact, SiNodedotjs, SiNextdotjs, SiTailwindcss, SiGraphql, SiKotlin, SiHtml5, SiDjango, SiFlask, SiOpenai, SiPostgresql, SiJavascript, SiVuetify, SiSqlite, SiFastapi, SiNestjs, SiMysql, SiAstro, SiAngular, SiGnubash, SiC, SiCplusplus, SiPython, SiCss3, SiTypescript, SiMongodb, } from "react-icons/si";
import { VscTerminalPowershell } from "react-icons/vsc";
import { FaGlobe, FaAndroid, FaApple, FaRegClock, FaTv, FaRocket } from "react-icons/fa";

export default function Tecnologias() {
  const items = [<li className="icon-img">
                  <SiReact size={50} color="#61DAFB" style={{ verticalAlign: "middle" }} /> <p className="pt-2">React.js</p>
              </li>,
              <li className="icon-img">
                  <SiNodedotjs size={50} color="#339933" style={{ verticalAlign: "middle" }} /> <p className="pt-2">Node.js</p>
              </li>,
              <li className="icon-img">
                  <SiNextdotjs size={50} color="#000000" style={{ verticalAlign: "middle" }} /> <p className="pt-2">Next.js</p>
              </li>,
              <li className="icon-img">
                  <SiTailwindcss size={50} color="#38BDF8" style={{ verticalAlign: "middle" }} /> <p className="pt-2">Tailwind CSS</p>
              </li>,
              <li className="icon-img">
                  <SiGraphql size={50} color="#E10098" style={{ verticalAlign: "middle" }} /> <p className="pt-2">GraphQL</p>
              </li>,
              <li className="icon-img">
                  <SiKotlin size={50} color="#E10098" style={{ verticalAlign: "middle" }} /> <p className="pt-2">Kotlin</p>
              </li>,
              <li className="icon-img">
                  <SiHtml5 size={50} color="#c3690aff" style={{ verticalAlign: "middle" }} /> <p className="pt-2">HTML</p>
              </li>,
              <li className="icon-img">
                  <SiDjango size={50} color="#44B78B" style={{ verticalAlign: "middle" }} /> <p className="pt-2">Django</p>
              </li>,
              <li className="icon-img">
                  <SiFlask size={50} color="#FFFFFF" style={{ verticalAlign: "middle" }} /> <p className="pt-2">Flask</p>
              </li>,
              <li className="icon-img">
                  <SiOpenai size={50} color="#FFFFFF" style={{ verticalAlign: "middle" }} /> <p className="pt-2">OpenAi</p>
              </li>,
              <li className="icon-img">
                  <SiPostgresql size={50} color="#FFFFFF" style={{ verticalAlign: "middle" }} /> <p className="pt-2">PostgreQL</p>
              </li>,
              <li className="icon-img">
                  <SiJavascript size={50} color="#F0DB4F" style={{ verticalAlign: "middle" }} /> <p className="pt-2">JavaScript</p>
              </li>,
              <li className="icon-img">
                  <SiVuetify size={50} color="#44B78B" style={{ verticalAlign: "middle" }} /> <p className="pt-2">Vuetify</p>
              </li>,
              <li className="icon-img">
                  <SiSqlite size={50} color="#0F80CC" style={{ verticalAlign: "middle" }} /> <p className="pt-2">SQLite</p>
              </li>,
              <li className="icon-img">
                  <SiFastapi size={50} color="#009688" style={{ verticalAlign: "middle" }} /> <p className="pt-2">FastAPI</p>
              </li>,
              <li className="icon-img">
                  <SiNestjs size={50} color="#E0234E" style={{ verticalAlign: "middle" }} /> <p className="pt-2">Nest.js</p>
              </li>,
              <li className="icon-img">
                  <SiMysql size={50} color="#FFFFFF" style={{ verticalAlign: "middle" }} /> <p className="pt-2">MySQL</p>
              </li>,
              <li className="icon-img">
                  <SiAstro size={50} color="#FF5D01" style={{ verticalAlign: "middle" }} /> <p className="pt-2">Astro</p>
              </li>,
              <li className="icon-img">
                  <SiAngular size={50} color="#DC087D" style={{ verticalAlign: "middle" }} /> <p className="pt-2">Angular</p>
              </li>,
              <li className="icon-img">
                  <SiGnubash size={50} color="#FFFFFF" style={{ verticalAlign: "middle" }} /> <p className="pt-2">Bash</p>
              </li>,
              <li className="icon-img">
                  <SiC size={50} color="#00599C" style={{ verticalAlign: "middle" }} /> <p className="pt-2">C</p>
              </li>,
              <li className="icon-img">
                  <SiCplusplus  size={50} color="#659AD2" style={{ verticalAlign: "middle" }} /> <p className="pt-2">C++</p>
              </li>,
              <li className="icon-img">
                  <SiPython  size={50} color="#387EB8" style={{ verticalAlign: "middle" }} /> <p className="pt-2">Python</p>
              </li>,
              <li className="icon-img">
                  <SiCss3  size={50} color="#264DE4" style={{ verticalAlign: "middle" }} /> <p className="pt-2">CSS</p>
              </li>,
              <li className="icon-img">
                  <SiTypescript  size={50} color="#3178C6" style={{ verticalAlign: "middle" }} /> <p className="pt-2">TypeScript</p>
              </li>,
              <li className="icon-img">
                  <SiMongodb  size={50} color="#01EC64" style={{ verticalAlign: "middle" }} /> <p className="pt-2">MongoDB</p>
              </li>,
              <li className="icon-img">
                  <VscTerminalPowershell  size={50} color="#FFFFFF" style={{ verticalAlign: "middle" }} /> <p className="pt-2">PowerShell</p>
              </li>,];

  const repeatedItems = [...items, ...items];

  return (
    <section className="text-inverse section-tecnologias">
      <h2 className="text-h2 mb-8 text-center ">
        Tecnologías en las que Trabajamos
      </h2>
      <div className="div-tecnologias pt-8">
        <ul className="">
          <div className="cards-tecnologias">
            <div className="li-tecnologias">
              <FaGlobe className="icon-tecnologia" size={48} color="#fff" />
              <span>Website</span>
            </div>
            <div className="li-tecnologias">
              <FaAndroid className="icon-tecnologia" size={48} color="#fff" />
              <span>Android</span>
            </div>
            <div className="li-tecnologias">
              <FaApple className="icon-tecnologia" size={48} color="#fff" />
              <span>IOS</span>
            </div>
            <div className="li-tecnologias">
              <FaRegClock className="icon-tecnologia" size={48} color="#fff" />
              <span>Watch</span>
            </div>
            <div className="li-tecnologias">
              <FaTv className="icon-tecnologia" size={48} color="#fff" />
              <span>Tv</span>
            </div>
            <div className="li-tecnologias">
              <FaRocket className="icon-tecnologia" size={48} color="#fff" />
              <span>IA</span>
            </div>
          </div>
        </ul>
      </div>
      <div className="pt-20">
        <div className="w-full">
          <div className="overflow-hidden cards-tecnologias icon-container">
            <ul className="animate-scroll">
              {items.map((icon, i) => (
                  <div key={i} className="carousel-item">{icon}</div>
              ))}
              {items.map((icon, i) => (
                  <div key={`duplicate-${i}`} className="carousel-item">{icon}</div>
              ))}
              {items.map((icon, i) => (
                  <div key={`triplicate-${i}`} className="carousel-item">{icon}</div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
