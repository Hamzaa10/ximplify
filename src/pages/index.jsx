import { useState } from "react";
import { useForm } from "react-hook-form";

import Head from "next/head";
import Alert from "@/components/alert";
import Button from "@/components/button";
import Avatar from "@/components/avatar";
import TextField from "@/components/textfield";
import Selection from "@/components/selection";
import Code from "@/components/confirm-code";
import ProgressBar from "@/components/progress-bar";
import SideInterface from "@/components/side-interface";
import TabsComponent from "@/components/tabs-component";

import style from "../styles/Home.module.scss";
import avatar from "../assets/sample.jpg";
import rightArrowWhite from "../assets/rightArrow.svg";
import rightArrowOrange from "../assets/rightArrowOrange.svg";

export default function Home() {
  const [active, setActive] = useState(1);
  const { control } = useForm();

  const tabs = [
    {
      name: "Employee Profiles",
      onClick: () => setActive(0),
    },
    {
      name: "Attendence",
      onClick: () => setActive(1),
    },
    {
      name: "Payroll",
      onClick: () => setActive(2),
    },
    {
      name: "Tax",
      onClick: () => setActive(3),
    },
    {
      name: "Applications",
      onClick: () => setActive(4),
    },
    {
      name: "Request Form",
      onClick: () => setActive(5),
    },
    {
      name: "Policies",
      onClick: () => setActive(6),
    },
    {
      name: "Hirarchy",
      onClick: () => setActive(7),
    },
    {
      name: "Calender",
      onClick: () => setActive(8),
    },
  ];

  const option = [
    { value: "demo1", label: "Demo 1" },
    { value: "demo2", label: "Demo 2" },
    { value: "demo3", label: "Demo 3" },
    { value: "demo4", label: "Demo 4" },
  ];

  return (
    <>
      <Head>
        <title>Ximplify</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/color-logo.ico" />
      </Head>
      <div>
        <TextField label="Login" placeholder="Enter your email" />
        <Code label="Confirmation Code" />
        <Button text="Sign Up" />
        <Button
          text="Sign Up"
          btnClass={style.btn}
          btnTextClass={style.btnText}
        />
        <Button text="Sign Up" iconEnd={rightArrowWhite} imgClass={style.img} />
        <Button
          text="Sign Up"
          iconEnd={rightArrowOrange}
          btnClass={style.btn1}
          btnTextClass={style.btnText1}
          imgClass={style.img}
        />
        <TabsComponent tabs={tabs} active={active} />
        <Selection
          control={control}
          placeholder="Select"
          options={option}
          name="option"
        />
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar username="Night King" profilePic={avatar} />
          <Avatar username="Night King" />
        </div>
        <Alert alertMsg="Welcome to Hell!" bgColor="rgba(254, 40, 26, 0.2)" />
        <Alert alertMsg="Welcome to Hell!" />
        <div style={{ margin: '20px 0' }}>
          <ProgressBar />
        </div>
        <SideInterface />
      </div>
    </>
  );
}
