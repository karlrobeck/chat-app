"use client";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    redirect("/mobile/menu");
  }, []);

  return <div>Welcome page</div>;
};

export default Page;
