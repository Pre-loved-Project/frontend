import Image from "next/image";

import Button from "@/shared/ui/Button/Button";
import DefaultProfileImage from "./assets/profile.jpg";

interface ProfileProps {
  imageSrc: string;
  nickname: string;
  bio: string;
}

const Profile = ({ imageSrc, nickname, bio }: ProfileProps) => {
  return (
    <article className="flex items-center justify-center w-[335px] h-[466px] px-[20px] py-[30px] rounded-[12px] border border-[#353542] bg-[#252530] md:w-[509px] md:h-[451px] md:px-[30px] xl:w-[340px] xl:h-[603px] xl:px-[20px] xl:pt-[40px]">
      <div className="flex flex-col justify-between items-center w-full h-full">
        <Image
          src={imageSrc || DefaultProfileImage}
          alt="프로필"
          width={120}
          height={120}
          className="rounded-full xl:w-[180px] xl:h-[180px]"
        />
        <div className="w-full">
          <h1 className="mb-[10px] text-center font-semibold text-xl leading-7 text-white xl:text-[24px]">
            {nickname}
          </h1>
          <p className="font-normal text-sm leading-5 text-gray-600 xl:font-[16px]">
            {bio}
          </p>
        </div>
        <div className="w-full h-[48px] bg-white" />
        <Button className="w-full">프로필 편집</Button>
      </div>
    </article>
  );
};

export default Profile;
