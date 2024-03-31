"use client";
import { useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";
import { useLocale } from "next-intl";
interface IProps{}

 
const LocalSwitcher = ({}:IProps)=>{

    const [isPending ,startTransition]=useTransition();
    const router = useRouter();
    const localActive = useLocale();
    const onSelectChange = (e:ChangeEvent<HTMLSelectElement>)=>{
        const nextLocale = e.target.value;

        startTransition(()=>{
            router.replace(`/${nextLocale}`)
        })
      }
    return(
       <label className="border-2 rounded">
        <p className="sr-only">change language</p>
        <select defaultValue={localActive} onChange={onSelectChange} disabled={isPending} >
            <option value="en">English</option>
            <option value="ar">Arabic</option>
        </select>
       </label>
    )
}
export default LocalSwitcher  ;