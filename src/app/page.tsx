import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | CRUD DB App",
  description: "List user page of CRUD DB App",
};

const page = () => {
  return <section className="grid h-dvh place-items-center"></section>;
};

export default page;
