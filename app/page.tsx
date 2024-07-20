import { Button } from "@/components/ui/button";
import Image from "next/image";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { ArrowRight, SquareCheckBig } from "lucide-react";
import Section from "@/components/section";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "奈良 川上建設",
  description: "トップページ",
};

export default function Home() {
  return (
    <main className="">
      <section className="bg-gray-100 mx-auto px-6 md:px-24 pt-8 mt-16 relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-center">
          <AnimatedGridPattern
            numSquares={30}
            maxOpacity={0.1}
            duration={3}
            repeatDelay={1}
            className="absolute inset-0 w-full h-full [mask-image:radial-gradient(500px_circle_at_center,white,transparent)] skew-y-12"
          />
          <div className="md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-8">
            <h1 className="text-3xl font-bold text-blue-900 mb-4">
              関西No.1住宅足場専門店！
              <br /> 安全・迅速・低価格
            </h1>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              1階〜3階建て住宅に特化した足場サービス
              <br />
              <span className="text-blue-600">
                最短即日対応可能！見積り無料
              </span>
            </h2>
            <ul className="text-lg text-gray-700 mb-8 list-disc list-inside">
              <li>自社保有の高品質資材で安全性向上</li>
              <li>経験豊富なスタッフによる迅速な施工</li>
              <li>中間マージンカットで業界最安値に挑戦中</li>
            </ul>
            <Button asChild>
              <Link
                href="/contact"
                className="inline-block bg-blue-600 text-white text-lg font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                今すぐ無料見積りを依頼する
                <ArrowRight size={18} className="ml-1" />
              </Link>
            </Button>
          </div>

          <div className="lg:w-1/2 w-full max-w-lg mx-auto">
            <div className="relative w-full" style={{ paddingBottom: "80%" }}>
              <Image
                unoptimized
                src="/home/home-top.jpg"
                alt="関西エリア対応の住宅足場施工例 - 安全性と美観を両立"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-24 max-w-6xl mx-auto mt-10">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">金額の簡素化</h2>
          <div className="flex justify-center items-center">
            <SquareCheckBig className="mr-2" />
            <p className="text-xl text-gray-600">
              追加費用が少ないので金額がわかりやすい！
            </p>
          </div>
        </div>
        <div className="relative max-w-5xl h-72 rounded-lg overflow-hidden">
          <Image
            src="/home/calculator.jpg"
            alt="計算"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>

        <div className="mt-20 md:px-10">
          <Section
            title="足場組立料金"
            description="500円/㎡"
            subDescriptions={[
              "足場面積 1平米あたり500円",
              "3階建て以降はプラス50円〜",
            ]}
            imageSrc="/home/outer-wall-cont.jpg"
            imageAlt="外壁"
            imageOnLeft={false}
          />
          <Section
            title="メッシュシート"
            description="0円！"
            subDescriptions={[
              "ほとんどの外壁、屋根工事に必要なシート取り付けを無料でさせて頂きます！",
            ]}
            imageSrc="/home/mesh.jpg"
            imageAlt="メッシュ"
            imageOnLeft={true}
          />
          <Section
            title="屋根足場料金"
            description="500円/㎡"
            subDescriptions={["3階建て以降は1階毎にプラス50円〜"]}
            imageSrc="/home/roof-cont.jpg"
            imageAlt="メッシュ"
            imageOnLeft={false}
          />
        </div>
      </section>
    </main>
  );
}
