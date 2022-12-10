import { ConnectButton } from "web3uikit";

export default function Header() {
  return (
    <div className="items-center">
      <div className="grid justify-items-end">
        <ConnectButton moralisAuth={false} />
      </div>
      <div className="">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Mood Tracker
        </h1>
      </div>
      <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        {/* Empower yourself with the world's first decentralized mood tracker.
        Revolutionize your mental health journey and track your happiness with
        our innovative dApp */}
      </p>
    </div>
  );
}
