import {
  AirVent,
  ArrowUpRight,
  BadgeDollarSign,
  Box,
  BrickWall,
  Calculator,
  Fence,
  Grid2x2,
  Home,
  LayoutGrid,
  Leaf,
  Mountain,
  Package,
  Paintbrush,
  PanelTop,
  Percent,
  Receipt,
  Rows3,
  Ruler,
  ScrollText,
  Sprout,
  Square,
  SquareStack,
  Thermometer,
  Trash2,
  TreePine,
  Truck,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  BrickWall,
  Paintbrush,
  LayoutGrid,
  Home,
  TreePine,
  Fence,
  Ruler,
  Thermometer,
  Truck,
  Calculator: Calculator,
  SquareStack,
  Package,
  Grid2x2,
  PanelTop,
  Leaf,
  Mountain,
  Sprout,
  Rows3,
  ArrowUpRight,
  ScrollText,
  AirVent,
  Trash2,
  Percent,
  Square,
  Box,
  BadgeDollarSign,
  Receipt,
  Wallet,
};

export function CategoryIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = ICONS[name] ?? Ruler;

  return (
    <Icon
      className={cn("h-5 w-5 text-amber-700", className)}
      aria-hidden="true"
    />
  );
}
