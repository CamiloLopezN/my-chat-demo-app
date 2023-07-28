"use client";
import Link from "next/link";
import { Routes } from "../models";
import navigatorStyles from "./Navigator.module.css";
import React from "react";

export default function Navigator({ routes }: Routes) {
  const [isItemSelected, setIsItemSelected] = React.useState(false);

  const handleClick = (isSelected: boolean, nameRoute: string) => {};

  return (
    <>
      {routes.map(({ nameRoute, pathRoute, pathIconRoute, isSelected }) => (
        <Link
          className={
            isSelected
              ? navigatorStyles.navigatorSelected
              : navigatorStyles.navigator
          }
          key={pathRoute}
          href={pathRoute}
          onClick={() => handleClick(isSelected, nameRoute)}
        >
          {nameRoute}
        </Link>
      ))}
    </>
  );
}
