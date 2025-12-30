import DocImage from "../assets/War.jpg";
export default function DocumentSection() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={DocImage} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">
            BANGLADESH LIBERATION WAR, 1971
          </h1>
          <p className="py-6">
            Pakistan authorities’ reluctance to give legitimate power to Sheikh
            Mujib, respecting the 1970 election mandate, resulted in a
            constitutional crisis in Pakistan. The planned military
            pacification, Operation Searchlight, created such terror and
            genocide that ten million people fled to India. India gave shelter
            to the East Pakistani refugees for nine months and trained Mukti
            Bahini, consisting of military, paramilitary, and civilians, to
            fight a civil war.[13] Pakistan launched the pre-emptive aerial
            strike on eleven Indian Air Force stations on 03 December 1971,
            setting off hostilities between the two neighbors. When the joint
            command of Mukti Bahini and the Indian Army advanced inside East
            Pakistan, the defeat and surrender of the Pakistan Army became a
            matter of time. On 16 December 1971, about 93,000 surrendered
            Pakistani troops were taken as POWs in the custody of the Indian
            Army. In 2009, almost forty years after the events of 1971, under
            the Bangladesh War Crimes Fact-Finding Committee report, 1,597
            people were accused of war crimes, including rape.[14] Pakistan’s
            attempt to enforce uniformity where diversity was desired had an
            unfortunate consequence. In the final analysis, the emergence of
            Bangladesh signifies the right to self-determination.
          </p>
        </div>
      </div>
    </div>
  );
}
