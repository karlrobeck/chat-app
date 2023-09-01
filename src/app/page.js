"use client";
import { redirect } from "next/navigation";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    redirect("/mobile/menu");
  }, []);

  return <main>test</main>;
}
