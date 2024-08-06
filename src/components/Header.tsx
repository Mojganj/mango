import React,{ FunctionComponent } from "react";

export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {
  return (
    <header
      className={`mt-4 self-stretch flex flex-row items-start justify-start relative max-w-full text-right text-sm text-black font-yekan-bakh-fanum ${className}`}
    >
      <div className="h-[936px] w-[55px] absolute !m-[0] right-[-55px] bottom-[-1832px] shadow-[0px_4px_6px_rgba(0,_0,_0,_0.02)] rounded-54xl bg-white [transform:_rotate(180deg)] [transform-origin:0_0] z-[1]" />
      <img
        className="h-[46px] w-[21px] absolute !m-[0] top-[4px] right-[17px] object-contain z-[1]"
        loading="lazy"
        alt=""
        src="/logo-orange-1@2x.png"
      />
      <div className="flex-1 flex flex-row items-start justify-between pt-0 px-0 pb-[73px] box-border max-w-full gap-[20px]">
        <div className="h-[54px] w-[233px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
          <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[20px]">
            <div className="h-[50px] w-[50px] relative min-h-[50px] flex items-center justify-center">
              <img
                className="h-full w-full object-contain absolute left-[0px] top-[4px] [transform:scale(1.266)]"
                loading="lazy"
                alt=""
                src="/group-24.svg"
              />
            </div>
            <div className="flex-1 flex flex-row items-start justify-start py-1 pr-1 pl-6 relative gap-[8px]">
              <div className="h-full w-full absolute !m-[0] top-[50px] right-[-163px] bottom-[-50px] left-[163px] shadow-[0px_4.4px_6.67px_rgba(0,_0,_0,_0.02)] rounded-[33.33px] bg-white [transform:_rotate(180deg)] [transform-origin:0_0]" />
              <div className="flex-1 flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                <div className="self-stretch relative font-semibold whitespace-nowrap z-[1]">
                  هتل اسپیناس
                </div>
              </div>
              <img
                className="h-[42px] w-[42px] relative rounded-full object-contain z-[1]"
                loading="lazy"
                alt=""
                src="/rectangle-9@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="w-[1062px] flex flex-row items-start justify-start gap-[24px] max-w-full text-xl-1 text-darkgray">
          <div className="h-[54px] w-48 flex flex-col items-start justify-start pt-1 pb-0 pr-[18px] pl-0 box-border">
            <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[12px]">
              <div className="h-[50px] flex-1 relative">
                <div className="absolute top-[50px] left-[50px] shadow-[0px_4.4px_6.67px_rgba(0,_0,_0,_0.02)] rounded-[50%] bg-white w-full h-full [transform:_rotate(180deg)] [transform-origin:0_0]" />
                <img
                  className="absolute top-[10px] left-[10px] w-[30px] h-[30px] z-[1]"
                  loading="lazy"
                  alt=""
                  src="/vuesaxlinearadd.svg"
                />
              </div>
              <div className="h-[50px] w-[50px] relative min-h-[50px] flex items-center justify-center">
                <img
                  className="h-full w-full object-contain absolute left-[0px] top-[4px] [transform:scale(1.266)]"
                  loading="lazy"
                  alt=""
                  src="/group-29.svg"
                />
              </div>
              <div className="h-[50px] flex-1 relative">
                <div className="absolute top-[50px] left-[50px] shadow-[0px_4.4px_6.67px_rgba(0,_0,_0,_0.02)] rounded-[50%] bg-white w-full h-full [transform:_rotate(180deg)] [transform-origin:0_0]" />
                <img
                  className="absolute top-[10px] left-[10px] w-[30px] h-[30px] z-[1]"
                  loading="lazy"
                  alt=""
                  src="/vuesaxbulkcalendar.svg"
                />
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-row items-start justify-between pt-0 pb-[0.3px] pr-[31px] pl-0 box-border relative max-w-full gap-[20px]">
            <div className="h-full w-full absolute !m-[0] top-[58px] right-[-767px] bottom-[-58px] left-[767px] shadow-[0px_6.3px_9.43px_rgba(0,_0,_0,_0.02)] rounded-[47.13px] bg-white box-border [transform:_rotate(180deg)] [transform-origin:0_0] border-[1.6px] border-solid border-white" />
            <div className="h-[57.7px] w-[57.7px] relative shadow-[0px_6.3px_9.43px_rgba(0,_0,_0,_0.02)] rounded-[47.13px] bg-goldenrod [transform:_rotate(180deg)] z-[1]" />
            <img
              className="h-[35.1px] w-[35.1px] absolute !m-[0] top-[11.3px] left-[10px] z-[2]"
              loading="lazy"
              alt=""
              src="/vuesaxbulksearchnormal.svg"
            />
            <div className="w-[191.8px] flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border">
              <div className="self-stretch h-8 relative font-light inline-block shrink-0 whitespace-nowrap z-[1]">
                جستجوی رزرواسیون ...
              </div>
            </div>
          </div>
          <div className="h-[55px] w-[55px] relative shadow-[0px_4px_6px_rgba(0,_0,_0,_0.02)] rounded-[50%] bg-white [transform:_rotate(180deg)]" />
        </div>
      </div>
    </header>
  );
};

export default Header;
