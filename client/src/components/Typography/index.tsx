import type React from "react"

type TextProps = {
    children: React.ReactNode;
}

export function TypographyH1({ children }: TextProps) {
  return (
    <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
      {children}
    </h1>
  )
}

export function TypographyH2() {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      The People of the Kingdom
    </h2>
  )
}

export function TypographyH3({ children }: TextProps) {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {children}
    </h3>
  )
}

export function TypographyH4({ children }: TextProps) {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      {children}
    </h4>
  )
}

export function TypographyP({ children }: TextProps) {
  return (
    <p className="leading-7 [&:not(:first-child)]:mt-6 text-slate-400">
      {children}
    </p>
  )
}

export function TypographyBlockquote({ children }: TextProps) {
  return (
    <blockquote className="mt-6 border-l-2 border-slate-700 pl-6 italic">
      {children}
    </blockquote>
  )
}

export function TypographyTable() {
  return (
    <div className="my-6 w-full overflow-y-auto">
      <table className="w-full">
        <thead>
          <tr className="even:bg-muted m-0 border-t p-0">
            <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
              King&apos;s Treasury
            </th>
            <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
              People&apos;s happiness
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="even:bg-muted m-0 border-t p-0">
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Empty
            </td>
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Overflowing
            </td>
          </tr>
          <tr className="even:bg-muted m-0 border-t p-0">
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Modest
            </td>
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Satisfied
            </td>
          </tr>
          <tr className="even:bg-muted m-0 border-t p-0">
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Full
            </td>
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Ecstatic
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export function TypographyList() {
  return (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
      <li>1st level of puns: 5 gold coins</li>
      <li>2nd level of jokes: 10 gold coins</li>
      <li>3rd level of one-liners : 20 gold coins</li>
    </ul>
  )
}

export function TypographyInlineCode({ children }: TextProps) {
  return (
    <code className="bg-slate-900 text-white/75 relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
    {children}
    </code>
  )
}

export function TypographyLead() {
  return (
    <p className="text-muted-foreground text-xl">
      A modal dialog that interrupts the user with important content and expects
      a response.
    </p>
  )
}

export function TypographyLarge() {
  return <div className="text-lg font-semibold">Are you absolutely sure?</div>
}

export function TypographySmall({ children }: TextProps) {
  return (
    <small className="text-sm leading-none font-medium">{children}</small>
  )
}

export function TypographyMuted({ children }: TextProps) {
  return (
    <p className="text-slate-500 text-sm">{children}</p>
  )
}
