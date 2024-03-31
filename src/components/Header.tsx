import { useTranslations } from "next-intl";

import LocalSwitcher from "./LocalSwitcher";
import Link from "next/link";
interface IProps{}

const Header = ({}:IProps)=>{
    const t = useTranslations('title')
    return(
        <header className="p-4">
         <nav className="flex items-center justify-between">
          <Link href='/'>{t('title')}</Link>
          <LocalSwitcher/>
         </nav>
        </header>
    )
}
export default Header  ;