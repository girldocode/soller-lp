import { NavMenu, SButton, SContact, SLogo } from "@/components/Lv2_Molecules";
import { MenuItem } from "@/components/Lv2_Molecules/NavMenu/@type";

const SollerHeader = () => {
  const menuItems: MenuItem[] = [
    { label: "Products", href: "/" },
    { label: "Solutions", href: "/" },
    { label: "Services", href: "/" },
    { label: "Configure", href: "/" },
  ];

  return (
    <div className="flex justify-between py-6 px-20">
      <div className="flex gap-x-[2.375rem] items-center">
        <SLogo variant="header" />
        <NavMenu variant="header" items={menuItems} />
      </div>
      <div className="flex gap-x-4">
        <SContact />
        <SButton
          variant="contained"
          size="sm"
          IconEnd={
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.586 10.657L11.636 6.70701C11.4538 6.51841 11.353 6.26581 11.3553 6.00361C11.3576 5.74141 11.4628 5.4906 11.6482 5.30519C11.8336 5.11978 12.0844 5.01461 12.3466 5.01234C12.6088 5.01006 12.8614 5.11085 13.05 5.29301L18.707 10.95C18.8002 11.0427 18.8741 11.1528 18.9246 11.2742C18.9751 11.3955 19.001 11.5256 19.001 11.657C19.001 11.7884 18.9751 11.9185 18.9246 12.0399C18.8741 12.1612 18.8002 12.2714 18.707 12.364L13.05 18.021C12.9578 18.1165 12.8474 18.1927 12.7254 18.2451C12.6034 18.2975 12.4722 18.3251 12.3394 18.3263C12.2066 18.3274 12.0749 18.3021 11.952 18.2518C11.8291 18.2016 11.7175 18.1273 11.6236 18.0334C11.5297 17.9395 11.4555 17.8279 11.4052 17.705C11.3549 17.5821 11.3296 17.4504 11.3307 17.3176C11.3319 17.1848 11.3595 17.0536 11.4119 16.9316C11.4643 16.8096 11.5405 16.6993 11.636 16.607L15.586 12.657H6C5.73478 12.657 5.48043 12.5517 5.29289 12.3641C5.10536 12.1766 5 11.9222 5 11.657C5 11.3918 5.10536 11.1374 5.29289 10.9499C5.48043 10.7624 5.73478 10.657 6 10.657H15.586Z"
                fill="#78350F"
              />
            </svg>
          }
        >
          Request a quote
        </SButton>
      </div>
    </div>
  );
};

export default SollerHeader;
