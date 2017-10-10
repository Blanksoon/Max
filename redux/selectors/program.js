export const recentProgramsSelector = state => {
  const programs = []
  // state.program.recents.forEach(recent => {
  //   programs.push(state.program.programname_en[recent])
  // })

  return programs
}
export const currentProgramselector = state =>
  state.program.programname_en[state.program.current]
