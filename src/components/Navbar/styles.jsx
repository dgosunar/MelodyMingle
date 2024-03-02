export const navStyles = {
  container:
    "flex flex-row absolute top-0 z-10 w-full h-[50px] bg-prim-200 shadow-bs",
  header:
    "flex flex-row px-[170px] py-[10px] w-full justify-between items-center max-xl:px-[60px] max-xl:py-[10px] max-lg:px-[15px] max-lg:py-[10px] max-sm:g-[10]",
  logo: "flex h-full",
};

export const deskNavStyles = {
  nav: "flex max-lg:hidden",
  menu: "flex flex-row justify-center items-center gap-[20px] text-white",
  item: "flex justify-center items-center p-[10px] cursor-pointer text-center",
  itemSelected: "text-sec-200 mediumTextB",
};

export const mobNavStyles = {
  nav: "flex lg:hidden sm:gap-[10px]",
  burgerButton:
    "flex absolute right-[5px] top-[10px] h-[30px] w-[30px] justify-center items-center mx-[10px] text-sec-200",
  xButton:
    "flex absolute top-[5px] right-[5px] h-[40px] z-30 justify-center items-center mx-[10px]",
  background:
    "hidden max-lg:flex absolute left-0 top-0 h-screen w-screen z-20 bg-prim-200 bg-opacity-75",
  respMenu:
    "hidden max-lg:flex flex-col justify-start absolute right-0 top-0 z-30 w-[300px] h-screen bg-sec-200 text-prim-200 gap-[20px]",
  logoRespMenu:
    "flex justify-start py-[10px] px-[15px] h-[50px] w-full mb-[50px]",
  item: "flex justify-center items-center p-[10px] cursor-pointer text-center",
  itemSelected:
    "text-sec-200 underline underline-offset-4 mediumTextB max-lg:text-prim-200",
};
