/** Mark some properties as required, leaving others unchanged */
declare type MarkRequired<T, RK extends keyof T> = Exclude<T, RK> & Required<Pick<T, RK>>

export interface OutFileData {
  outFile: string
  css: string
  matched: Set<string>
}

export interface OutFileArgs {
  name: string
  dirname: string
}

export type OutFileHandler = (args: OutFileArgs) => string

export interface CliOptions {
  cwd?: string
  patterns?: Array<string>
  outFile?: string | OutFileHandler
  watch?: boolean
  config?: string
  stdout?: boolean
  writeTransformed?: boolean

  // generate options
  preflights?: boolean
  minify?: boolean
}

export type ResolvedCliOptions = MarkRequired<CliOptions, 'patterns'>
