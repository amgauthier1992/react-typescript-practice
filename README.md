# React + TypeScript + Vite (Lessons 12 & 13- Dave Gray TS Course)

## 12

- How to define types for props
  - Default values instead of defaultProps (deprecated React v18)
- ReactNode type for props.children. Cannot have implicitly defined children for Reactv18
- It's ok to not explicitly define return types for React function components. We can let TS infer (JSX.Element)
- Can explicitly define type for state w/ useState hook or let TS infer
- Using generics/generic components & special considerations to ensure correct syntax with TS
  ```
  <T extends {}> or <T,>
  ```

## 13 - Hooks

- Event types in functions wrapped with useCallback/cb functions 
  - MouseEvent, KeyboardEvent, React.ChangeEvent<HTMLInputElement>, 
- refs (useRef<HTMLInputElement>(null))
  - changing ref values won't re-render component