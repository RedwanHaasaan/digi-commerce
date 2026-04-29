"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Store, ShoppingCart, CreditCard } from "lucide-react";

const Breadcrumbs = () => {
  const pathname = usePathname();

  const pathSegments = pathname.split("/").filter(Boolean);

  // Route config (label + icon)
  const routeConfig = {
    shop: {
      label: "Shop",
      icon: <Store className="h-4 w-4" />,
    },
    cart: {
      label: "Cart",
      icon: <ShoppingCart className="h-4 w-4" />,
    },
    checkout: {
      label: "Checkout",
      icon: <CreditCard className="h-4 w-4" />,
    },
  };

  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = "/" + pathSegments.slice(0, index + 1).join("/");

    return {
      label: routeConfig[segment]?.label || segment,
      icon: routeConfig[segment]?.icon || null,
      href,
    };
  });

  return (
    <div className="breadcrumbs text-sm">
      <ul>
        {breadcrumbs.map((item, index) => (
          <li key={index}>
            {index === breadcrumbs.length - 1 ? (
              <span className="inline-flex items-center gap-2">
                {item.icon}
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="inline-flex items-center gap-2"
              >
                {item.icon}
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumbs;