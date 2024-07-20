import { Card } from "@/components/ui/card";
import { MessageSquare, Search, Wrench } from "lucide-react";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "奈良 川上建設",
  description: "施工までの流れ",
};

const WorkflowStep = ({
  Icon,
  title,
  description,
}: {
  Icon: any;
  title: string;
  description: ReactNode;
}) => (
  <div className="flex items-start space-x-6 mb-8">
    <div className="flex-shrink-0">
      <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-white">
        <Icon size={24} />
      </div>
    </div>
    <div className="flex-grow">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-md">{description}</p>
    </div>
  </div>
);

export default function WorkflowPage() {
  return (
    <div className="mt-24 max-w-4xl mx-auto px-4 py-8">
      <Card className="bg-white dark:bg-black shadow-md rounded-lg p-6">
        <h2 className="text-3xl font-bold mb-8 text-center">施工までの流れ</h2>

        <WorkflowStep
          Icon={MessageSquare}
          title="お問い合わせ"
          description={
            <>
              電話にて迅速な対応を心がけます。
              <br />
              直通電話：070-2825-3434
            </>
          }
        />

        <WorkflowStep
          Icon={Search}
          title="現地調査"
          description={
            <>
              現場に直接お伺いし、寸法を計らせて頂きお見積りさせて頂きます。
              <br />
              最短当日対応可能！
              <br />
              急ぎの場合は、情報をお伺いしその情報を元に概算を出すことも可能です。
            </>
          }
        />

        <WorkflowStep
          Icon={Wrench}
          title="工事着工"
          description={
            <>
              ご依頼をいただきましたら1週間以降にご依頼希望日をお伺いし、工事日を決めさせて頂きます。
              <br />
              基本的に1週間以降のご依頼をお願いしておりますが、お急ぎの場合はご相談ください！ご希望に添えるようにご協力させて頂きます！
            </>
          }
        />
      </Card>
    </div>
  );
}
