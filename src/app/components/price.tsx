"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";

const Price = ({
  amount,
  className,
  currencyCode = "AUD",
  currencyCodeClassName,
}: {
  amount: string;
  className?: string;
  currencyCode: string;
  currencyCodeClassName?: string;
} & React.ComponentProps<"p">) => {
  const [formattedPrice, setFormattedPrice] = useState<string>("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const formatted = new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: currencyCode,
      currencyDisplay: "narrowSymbol",
    }).format(parseFloat(amount));
    setFormattedPrice(formatted);
  }, [amount, currencyCode]);

  // Show a placeholder during SSR to prevent hydration mismatch
  if (!isClient) {
    return (
      <p className={className}>
        <span className="invisible">Loading...</span>
        <span
          className={clsx("ml-1 inline", currencyCodeClassName)}
        >{`${currencyCode}`}</span>
      </p>
    );
  }

  return (
    <p className={className}>
      {formattedPrice}
      <span
        className={clsx("ml-1 inline", currencyCodeClassName)}
      >{`${currencyCode}`}</span>
    </p>
  );
};

export default Price;