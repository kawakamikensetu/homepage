import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "奈良 川上建設",
  description: "お問い合わせ",
};

export default function ContactForm() {
  return (
    <div className="mt-24 mb-12 max-w-2xl mx-auto p-6 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center">
        お問い合わせフォーム
      </h1>
      <p className="text-red-500 mb-4">*必須項目はすべて入力してください</p>

      <form
        action={process.env.NEXT_PUBLIC_NEWT_FORM_ENDPOINT}
        method="post"
        className="space-y-6"
      >
        <div className="space-y-2">
          <Label htmlFor="companyName">会社名 *</Label>
          <Input id="companyName" name="companyName" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">住所 *</Label>
          <Input id="address" name="address" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phoneNumber">電話番号 *</Label>
          <Input id="phoneNumber" name="phoneNumber" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="personInCharge">担当者名 *</Label>
          <Input id="personInCharge" name="personInCharge" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">メールアドレス（任意）</Label>
          <Input id="email" name="email" type="email" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject">件名 *</Label>
          <Textarea id="subject" name="subject" required />
        </div>

        <div className="flex items-start space-x-2">
          <Checkbox id="agreeToTerms" name="agreeToTerms" required checked />
          <Label htmlFor="agreeToTerms" className="text-sm">
            ご提供いただいた個人情報は、お客様とのコミュニケーションのために使用させていただきます。フォームの送信により、弊社のプライバシーポリシーに同意いただいたものとみなします。弊社は、お客様の個人情報を大切に扱い、適切に保護することをお約束いたします。
          </Label>
        </div>

        <Button type="submit" className="w-full">
          <span className="sr-only">submit contact form</span>
          送信
        </Button>
      </form>
    </div>
  );
}
