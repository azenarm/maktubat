import React from "react";
import client from "@/tina/__generated__/client";
import Layout from "@/components/layout/layout";
import ClientPage from "./[...urlSegments]/client-page";
import PostPage from "./posts/page";

export const revalidate = 300;

export default async function Home() {
  return PostPage()
}
