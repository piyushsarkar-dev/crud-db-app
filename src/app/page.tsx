import UserDetails from "@/components/Customui/UserDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | CRUD DB App",
  description: "List user page of CRUD DB App",
};

const page = () => {
  return (
    <section className="mt-20 grid">
      <UserDetails />
    </section>
  );
};

export default page;
