"use client";
import Link from "next/link";
import { Routes } from "../models";
import navigatorStyles from "./Navigator.module.css";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navigator({ routes }: Routes) {
  const pathname = usePathname();

  return (
    <>
      {routes.map(({ nameRoute, pathRoute, pathIconRoute }) => (
        <Link
          className={
            pathname === pathRoute
              ? navigatorStyles.navigatorSelected
              : navigatorStyles.navigator
          }
          key={pathRoute}
          href={pathRoute}
        >
          {nameRoute}
        </Link>
      ))}
    </>
  );
}
