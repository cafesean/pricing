import type { Route } from "next"

export interface NavItem {
  title: string
  href: Route
  description?: string
  disabled?: boolean
  external?: boolean
} 