import clsx from "clsx";

export function Lable({title, amount, currencyCode, position = 'bottom'}: 
    {title: string, amount: string, currencyCode: string, position: string}){
         return(
            <div className={clsx(
                "aboslute bottom-0 left-0 flex w-full px-4 pb-5 srccontainer/lable",
                {
                    "lg:px-20 lg:pb-[35%]": position === 'center',
                }
            )}>
                
            </div>
         )
    }