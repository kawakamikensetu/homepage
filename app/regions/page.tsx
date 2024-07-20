import { Metadata } from "next";
import { RegionList } from "./components/region-list";
import { kansaiRegions } from "./data/regions";

export const metadata: Metadata = {
  title: "奈良 川上建設",
  description: "対応地域",
};

export default function Home() {
  return (
    <div className="mt-16 mx-auto py-8 px-4 md:px-24">
      <h1 className="text-3xl font-bold mb-6">対応地域</h1>
      <RegionList regions={kansaiRegions} />
    </div>
  );
}
