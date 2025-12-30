import InterviewImage from "../assets/fozlo.jpg";
export default function InterviewSection() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={InterviewImage} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-4xl font-bold">
            বীর মুক্তিযোদ্ধা এড. মো. ফজলুর রহমান খান
          </h1>
          <p className="py-6">
            বীর মুক্তিযোদ্ধা এডভোকেট মো. ফজলুর রহমান খান (জ. ১৯৩৩ – মৃ. ২০০৮)
            ভাষা আন্দোলন ও মহান মুক্তিযুদ্ধের অন্যতম সংগঠক। তিনি নেত্রকোণা সদর
            আসনের তিনবারের সাবেক এমপি ও জেলা আওয়ামী লীগের দীর্ঘদিনের সভাপতি
            ছিলেন। ভাষা আন্দোলন, ছয় দফা ও মুক্তিযুদ্ধে সক্রিয় ভূমিকার জন্য
            একাধিকবার কারাবরণ করেন এবং ১৯৭১ সালে বাঘমারা ক্যাম্পের অধীনে নেতৃত্ব
            দেন। শিক্ষা, আইন, রাজনীতি ও সমাজসেবায় আজীবন অবদান রেখে তিনি বহু
            শিক্ষা প্রতিষ্ঠানের প্রতিষ্ঠাতা ও পৃষ্ঠপোষক ছিলেন। বাংলাদেশ সংবিধানে
            স্বাক্ষরকারী এই গুণীজন ২০২৩ সালে মুক্তিযুদ্ধে অবদানের জন্য সিলভার
            অ্যাওয়ার্ডে মনোনীত হন।
          </p>
        </div>
      </div>
    </div>
  );
}
