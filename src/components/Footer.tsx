import { useTranslations } from "next-intl";

interface IProps{}

const Footer = ({}:IProps)=>{
    const t = useTranslations('index');
    return(
        <div>{t('title')}</div>
    )
}
export default Footer  ;